"use client";

import { useEffect, useState } from "react";
import { clientId, setClientId, pushAll, pullAll } from "@/lib/store";

export default function SyncPanel() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState<{ t: string; ok: boolean } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setCode(clientId());
  }, []);

  function flash(t: string, ok: boolean) {
    setMsg({ t, ok });
    setTimeout(() => setMsg(null), 4000);
  }

  async function save() {
    setBusy(true);
    const r = await pushAll();
    setBusy(false);
    flash(r.ok ? "Progres tersimpan ke cloud ✓" : "Gagal menyimpan: " + (r.error || ""), r.ok);
  }

  async function load() {
    const c = input.trim().toUpperCase();
    if (!c) return;
    setBusy(true);
    setClientId(c);
    setCode(c);
    const r = await pullAll();
    setBusy(false);
    if (r.ok) {
      flash(`Berhasil memuat progres (${r.count} bagian). Memuat ulang…`, true);
      setTimeout(() => window.location.reload(), 1200);
    } else {
      flash("Gagal memuat: " + (r.error || ""), false);
    }
  }

  function copy() {
    navigator.clipboard?.writeText(code).then(
      () => flash("Kode disalin ✓", true),
      () => flash("Tidak bisa menyalin otomatis.", false)
    );
  }

  return (
    <div className="card pad">
      <div className="eyebrow">Progres lintas-perangkat</div>
      <h3 className="section-title" style={{ marginTop: 6, fontSize: 22 }}>Simpan & pindahkan progres</h3>
      <p className="section-desc" style={{ marginBottom: 14 }}>
        Simpan progres (skor, kosakata, checklist, materi) ke cloud, lalu buka di perangkat lain dengan kode ini.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <span className="pill gold" style={{ fontFamily: "var(--mono)", fontSize: 14 }}>{code || "…"}</span>
        <button className="btn ghost sm" onClick={copy}>⧉ Salin kode</button>
        <button className="btn gold sm" onClick={save} disabled={busy}>
          {busy ? "…" : "☁ Simpan ke cloud"}
        </button>
      </div>

      <div className="divider" style={{ margin: "14px 0" }} />

      <label style={{ fontSize: 12.5, fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: 6 }}>
        Punya kode dari perangkat lain?
      </label>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="JITS-XXXXXX"
          style={{
            flex: 1,
            minWidth: 160,
            padding: "10px 12px",
            border: "1px solid var(--border-strong)",
            borderRadius: 9,
            background: "var(--surface-2)",
            color: "var(--ink)",
            fontFamily: "var(--mono)",
            textTransform: "uppercase",
          }}
        />
        <button className="btn sm" onClick={load} disabled={busy || !input.trim()}>
          ⭳ Muat dari cloud
        </button>
      </div>

      {msg && (
        <div className="explain" style={{ marginTop: 14, borderLeftColor: msg.ok ? "var(--good)" : "var(--bad)" }}>
          {msg.t}
        </div>
      )}
      <div className="note">
        <span>ℹ️</span>
        <span>Klik <b>Simpan ke cloud</b> setiap selesai belajar, lalu masukkan kode yang sama di perangkat lain untuk melanjutkan.</span>
      </div>
    </div>
  );
}
