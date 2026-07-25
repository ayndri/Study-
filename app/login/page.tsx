"use client";

import { useState } from "react";
import { setClientId } from "@/lib/store";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data.error || "Gagal masuk.");
      } else {
        // Kaitkan progres dengan akun ini.
        setClientId(data.username);
        const from = new URLSearchParams(window.location.search).get("from") || "/";
        window.location.href = from;
      }
    } catch {
      setErr("Tidak dapat menghubungi server.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <form className="auth-card" onSubmit={submit}>
        <div className="auth-brand">
          <div className="mark">J</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Jalur ITS</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>TOEFL ITP · Beasiswa LPDP</div>
          </div>
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: 24, margin: "18px 0 4px" }}>Masuk</h1>
        <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
          Silakan masuk dengan akun yang diberikan untuk mulai belajar.
        </p>

        <label className="auth-label">Username</label>
        <input className="auth-input" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus autoComplete="username" />

        <label className="auth-label">Password</label>
        <input className="auth-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />

        {err && <div className="auth-err">{err}</div>}

        <button className="btn gold" type="submit" disabled={busy} style={{ width: "100%", marginTop: 16, justifyContent: "center" }}>
          {busy ? "Memproses…" : "Masuk"}
        </button>
        <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 16, textAlign: "center" }}>
          Belum punya akun? Hubungi pengelola untuk dibuatkan.
        </p>
      </form>
    </div>
  );
}
