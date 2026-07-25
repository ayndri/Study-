"use client";

// Helper penyimpanan sisi-klien: clientId anonim + progres di localStorage,
// dengan sinkronisasi opsional ke server (Neon) bila tersedia.

const CID_KEY = "jalurits_cid";

// Kunci progres yang disinkronkan ke cloud.
const SYNC_KEYS = [
  "scores", "known", "docChecklist", "materiDone", "rubric", "essay", "simResult",
  "flutterMateriDone", "golangMateriDone", "aiStats", "studyPlan", "studyPlanChecks",
];

function newCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // tanpa 0/O/1/I agar mudah dibaca
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return "JITS-" + s;
}

export function clientId(): string {
  if (typeof window === "undefined") return "server";
  let id = localStorage.getItem(CID_KEY);
  if (!id) {
    id = newCode();
    localStorage.setItem(CID_KEY, id);
  }
  return id;
}

export function setClientId(code: string) {
  if (typeof window !== "undefined") localStorage.setItem(CID_KEY, code.trim());
}

// Kirim seluruh progres lokal ke cloud (Neon).
export async function pushAll(): Promise<{ ok: boolean; error?: string }> {
  const data: Record<string, unknown> = {};
  for (const k of SYNC_KEYS) {
    const raw = get<unknown>(k, null);
    if (raw !== null) data[k] = raw;
  }
  try {
    const res = await fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: clientId(), data }),
    });
    const d = await res.json();
    return { ok: res.ok && d.ok, error: d.error };
  } catch {
    return { ok: false, error: "Tidak dapat menghubungi server." };
  }
}

// Ambil progres dari cloud lalu tulis ke localStorage.
export async function pullAll(): Promise<{ ok: boolean; count?: number; error?: string }> {
  try {
    const res = await fetch(`/api/sync?clientId=${encodeURIComponent(clientId())}`);
    const d = await res.json();
    if (!res.ok || !d.ok) return { ok: false, error: d.error };
    const data = (d.data || {}) as Record<string, unknown>;
    let count = 0;
    for (const [k, v] of Object.entries(data)) {
      if (SYNC_KEYS.includes(k)) {
        set(k, v);
        count++;
      }
    }
    return { ok: true, count };
  } catch {
    return { ok: false, error: "Tidak dapat menghubungi server." };
  }
}

export function get<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem("jalurits_" + key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function set<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("jalurits_" + key, JSON.stringify(value));
  } catch {
    /* penyimpanan penuh / diblokir — abaikan */
  }
}

// Simpan skor kuis lokal + kirim ke server (best-effort).
export async function recordScore(section: string, score: number, total: number) {
  const pct = Math.round((score / total) * 100);
  const scores = get<Record<string, number>>("scores", {});
  scores[section] = Math.max(scores[section] || 0, pct);
  set("scores", scores);
  try {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: clientId(), section, score, total }),
    });
  } catch {
    /* offline / DB nonaktif — cukup pakai lokal */
  }
}
