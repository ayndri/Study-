// Service worker: cache HANYA aset statis. Halaman HTML & API selalu ke
// jaringan agar autentikasi (middleware login) selalu berlaku.
const CACHE = "jalurits-v2";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // abaikan lintas-origin
  if (url.pathname.startsWith("/api/")) return; // API selalu ke jaringan

  const accept = req.headers.get("accept") || "";
  const isPage = req.mode === "navigate" || accept.includes("text/html");

  // Halaman HTML: selalu jaringan (agar redirect login berlaku). Cache hanya
  // sebagai cadangan offline, TIDAK dipakai saat online.
  if (isPage) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // Aset statis: stale-while-revalidate.
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
