"use client";

import { useEffect, useState } from "react";
import { get, set } from "@/lib/store";

const TASKS = [
  "Buat fungsi Dart bernama luasPersegi(sisi) yang mengembalikan luas.",
  "Buat StatefulWidget penghitung (counter) dengan tombol +1.",
  "Buat Column berisi 3 Text dan sebuah ElevatedButton.",
  "Ambil data judul dari API lalu tampilkan dengan FutureBuilder.",
];

const STARTER = `void main() {
  print(luasPersegi(5));
}

int luasPersegi(int sisi) {
  return sisi * sisi;
}`;

export default function CodeReview() {
  const [task, setTask] = useState(TASKS[0]);
  const [code, setCode] = useState(STARTER);
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const saved = get<string>("flCode", "");
    if (saved) setCode(saved);
  }, []);

  function onCode(v: string) {
    setCode(v);
    set("flCode", v);
  }

  async function review() {
    setErr(null);
    setHtml(null);
    setLoading(true);
    try {
      const res = await fetch("/api/review-kode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, task }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) setErr(data.error || "Gagal mereview.");
      else setHtml(data.html);
    } catch {
      setErr("Tidak dapat menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid g2" style={{ alignItems: "start" }}>
      <div className="card pad">
        <div className="eyebrow">Tantangan</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "10px 0 12px" }}>
          {TASKS.map((t, i) => (
            <button key={i} className={"btn sm " + (t === task ? "gold" : "ghost")} onClick={() => setTask(t)}>
              #{i + 1}
            </button>
          ))}
        </div>
        <div className="prompt-box">{task}</div>
        <label className="auth-label" style={{ marginTop: 14 }}>Kode Dart-mu</label>
        <textarea
          className="essay code"
          value={code}
          onChange={(e) => onCode(e.target.value)}
          spellCheck={false}
          style={{ fontFamily: "var(--mono)", fontSize: 13.5, minHeight: 260 }}
        />
        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          <button className="btn gold" onClick={review} disabled={loading}>
            {loading ? "AI mereview…" : "✦ Minta review AI"}
          </button>
        </div>
        <div className="note"><span>💾</span><span>Kode tersimpan otomatis di perangkat ini.</span></div>
      </div>

      <div className="card pad">
        {err && <div className="explain" style={{ borderLeftColor: "var(--bad)" }}><b>Info:</b> {err}</div>}
        {html ? (
          <div className="ai-box" style={{ marginTop: 0 }}>
            <div className="ai-tag">✦ Review kode oleh AI</div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        ) : (
          !err && (
            <div style={{ color: "var(--muted)" }}>
              <div className="eyebrow">Cara pakai</div>
              <ul className="tips" style={{ marginTop: 10 }}>
                <li>Pilih salah satu tantangan, atau tulis kode Dart apa pun.</li>
                <li>Klik <b>Minta review AI</b> — AI menilai, menemukan bug, dan memberi versi perbaikan.</li>
                <li>Bisa juga tempel kode dari proyek Flutter-mu untuk dicek.</li>
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
