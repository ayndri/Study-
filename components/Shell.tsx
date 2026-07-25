"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string; ic: string; badge?: string };
type NavGroup = { group: string; items: NavItem[] };

const TOEFL_NAV: NavGroup[] = [
  {
    group: "TOEFL & LPDP",
    items: [
      { href: "/", label: "Beranda", ic: "◈" },
      { href: "/materi", label: "Materi", ic: "▥" },
    ],
  },
  {
    group: "Latihan TOEFL ITP",
    items: [
      { href: "/listening", label: "Listening", ic: "♪" },
      { href: "/structure", label: "Structure", ic: "§" },
      { href: "/reading", label: "Reading", ic: "❏" },
      { href: "/writing", label: "Writing", ic: "✎", badge: "AI" },
      { href: "/riwayat-esai", label: "Riwayat Esai", ic: "🗂" },
      { href: "/vocabulary", label: "Vocabulary", ic: "▤" },
      { href: "/simulasi", label: "Simulasi Tes", ic: "◉" },
    ],
  },
  {
    group: "Bantuan & Beasiswa",
    items: [
      { href: "/tutor", label: "Tutor AI", ic: "✦", badge: "AI" },
      { href: "/wawancara", label: "Wawancara LPDP", ic: "🎤", badge: "AI" },
      { href: "/beasiswa", label: "Beasiswa", ic: "★" },
    ],
  },
];

const FLUTTER_NAV: NavGroup[] = [
  {
    group: "Belajar Flutter",
    items: [
      { href: "/flutter", label: "Beranda Flutter", ic: "◈" },
      { href: "/flutter/materi", label: "Materi", ic: "▥" },
      { href: "/flutter/tutor", label: "Tutor AI", ic: "✦", badge: "AI" },
      { href: "/flutter/latihan", label: "Latihan Koding", ic: "⌨", badge: "AI" },
    ],
  },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme"));
  }, []);
  function toggle() {
    let cur = document.documentElement.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("jalurits_theme", next);
    } catch {}
    setTheme(next);
  }
  return (
    <button className="theme-btn" onClick={toggle} aria-label="Ganti tema terang/gelap" title="Ganti tema">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [me, setMe] = useState<{ username: string; role: string } | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/login") return;
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d?.ok && setMe({ username: d.username, role: d.role }))
      .catch(() => {});
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    window.location.href = "/login";
  }

  // Halaman login tampil tanpa kerangka (sidebar/topbar).
  if (pathname === "/login") return <>{children}</>;

  const isFlutter = pathname.startsWith("/flutter");
  const NAV = isFlutter ? FLUTTER_NAV : TOEFL_NAV;

  return (
    <div className="app">
      <div className={"scrim" + (open ? " show" : "")} onClick={() => setOpen(false)} />
      <aside className={"sidebar" + (open ? " open" : "")}>
        <div className="brand">
          <div className="mark">{isFlutter ? "F" : "J"}</div>
          <div>
            <span className="name">{isFlutter ? "Belajar Flutter" : "Jalur ITS"}</span>
            <small>{isFlutter ? "Mobile · Dart & Flutter" : "TOEFL ITP · Beasiswa LPDP"}</small>
          </div>
        </div>

        <Link href="/pilih" className={"nav-link switch-link" + (pathname === "/pilih" ? " active" : "")}>
          <span className="ic">◇</span>Pilih Pembelajaran
        </Link>

        {NAV.map((section) => (
          <div key={section.group}>
            <div className="nav-group">{section.group}</div>
            {section.items.map((it) => {
              const active = pathname === it.href;
              return (
                <Link key={it.href} href={it.href} className={"nav-link" + (active ? " active" : "")}>
                  <span className="ic">{it.ic}</span>
                  {it.label}
                  {"badge" in it && it.badge ? <span className="badge">{it.badge}</span> : null}
                </Link>
              );
            })}
          </div>
        ))}
        {me?.role === "admin" && (
          <div>
            <div className="nav-group">Admin</div>
            <Link href="/admin" className={"nav-link" + (pathname === "/admin" ? " active" : "")}>
              <span className="ic">⚙</span>Kelola Akun
            </Link>
          </div>
        )}

        <div className="sidebar-foot" style={{ flexDirection: "column", alignItems: "stretch", gap: 10 }}>
          {me && (
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span className="user-avatar">{me.username.slice(0, 1).toUpperCase()}</span>
              <span style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {me.username}
              </span>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <button className="btn ghost sm" style={{ flex: 1, justifyContent: "center" }} onClick={logout}>
              Keluar
            </button>
          </div>
        </div>
      </aside>

      <div className="content">
        <div className="topbar">
          <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Buka menu">
            ☰
          </button>
          <div className="brand" style={{ padding: 0 }}>
            <div className="mark" style={{ width: 30, height: 30, fontSize: 16 }}>
              J
            </div>
            <span className="name">Jalur ITS</span>
          </div>
        </div>
        <div className="page">{children}</div>
      </div>
    </div>
  );
}
