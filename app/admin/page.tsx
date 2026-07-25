"use client";

import { useEffect, useState } from "react";

type U = { username: string; role: string; created_at: string };

export default function AdminPage() {
  const [users, setUsers] = useState<U[] | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [msg, setMsg] = useState<{ t: string; ok: boolean } | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    try {
      const res = await fetch("/api/admin/users");
      const d = await res.json();
      if (d.ok) setUsers(d.users);
      else setMsg({ t: d.error || "Gagal memuat.", ok: false });
    } catch {
      setMsg({ t: "Tidak dapat menghubungi server.", ok: false });
    }
  }
  useEffect(() => {
    load();
  }, []);

  function flash(t: string, ok: boolean) {
    setMsg({ t, ok });
    setTimeout(() => setMsg(null), 4000);
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      const d = await res.json();
      if (d.ok) {
        flash(`Akun "${username}" dibuat ✓`, true);
        setUsername("");
        setPassword("");
        setRole("user");
        load();
      } else flash(d.error || "Gagal membuat akun.", false);
    } catch {
      flash("Tidak dapat menghubungi server.", false);
    } finally {
      setBusy(false);
    }
  }

  async function remove(name: string) {
    if (!confirm(`Hapus akun "${name}"?`)) return;
    const res = await fetch(`/api/admin/users?username=${encodeURIComponent(name)}`, { method: "DELETE" });
    const d = await res.json();
    if (d.ok) { flash(`Akun "${name}" dihapus`, true); load(); }
    else flash(d.error || "Gagal menghapus.", false);
  }

  return (
    <div>
      <div className="eyebrow">Khusus admin</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Kelola Akun Pengguna</h2>
      <p className="section-desc">Buat akun untuk user-mu, lalu berikan username & password-nya kepada mereka.</p>

      <div className="grid g2" style={{ alignItems: "start" }}>
        <div className="card pad">
          <div className="eyebrow">Buat akun baru</div>
          <form onSubmit={create} style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <label className="auth-label">Username</label>
              <input className="auth-input" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
              <label className="auth-label">Password (min. 4 karakter)</label>
              <input className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label className="auth-label">Peran</label>
              <select className="auth-input" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User (belajar)</option>
                <option value="admin">Admin (bisa kelola akun)</option>
              </select>
            </div>
            <button className="btn gold" type="submit" disabled={busy} style={{ justifyContent: "center" }}>
              {busy ? "Menyimpan…" : "Buat akun"}
            </button>
          </form>
          {msg && (
            <div className="explain" style={{ marginTop: 14, borderLeftColor: msg.ok ? "var(--good)" : "var(--bad)" }}>
              {msg.t}
            </div>
          )}
        </div>

        <div className="card pad">
          <div className="eyebrow">Daftar akun</div>
          {users === null ? (
            <p style={{ color: "var(--muted)", marginTop: 12 }}>Memuat…</p>
          ) : users.length === 0 ? (
            <p style={{ color: "var(--muted)", marginTop: 12 }}>Belum ada akun tersimpan.</p>
          ) : (
            <ul className="check" style={{ marginTop: 8 }}>
              {users.map((u) => (
                <li key={u.username} style={{ cursor: "default" }}>
                  <span className="ct" style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{u.username}</span>
                    <small>{new Date(u.created_at).toLocaleDateString("id-ID")}</small>
                  </span>
                  <span className={"pill " + (u.role === "admin" ? "gold" : "")}>{u.role}</span>
                  <button className="btn ghost sm" style={{ marginLeft: 8 }} onClick={() => remove(u.username)}>Hapus</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
