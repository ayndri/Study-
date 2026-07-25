"use client";

import { useEffect, useState } from "react";
import { clientId } from "@/lib/store";

type Feedback = {
  overall?: number;
  band?: string;
  scores?: { criterion: string; score: number; comment: string }[];
  strengths?: string[];
  improvements?: string[];
  revised_opening?: string;
};
type Essay = {
  id: number;
  prompt: string;
  overall: number | null;
  content: string;
  feedback: Feedback | null;
  created_at: string;
};

export default function EssayHistory() {
  const [essays, setEssays] = useState<Essay[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/essays?clientId=${encodeURIComponent(clientId())}`);
        const d = await res.json();
        if (!res.ok || !d.ok) setErr(d.error || "Gagal memuat.");
        else setEssays(d.essays);
      } catch {
        setErr("Tidak dapat menghubungi server.");
      }
    })();
  }, []);

  if (err) {
    return <div className="card pad"><div className="explain" style={{ borderLeftColor: "var(--bad)" }}><b>Info:</b> {err}</div></div>;
  }
  if (essays === null) {
    return <div className="card pad" style={{ color: "var(--muted)" }}>Memuat riwayat…</div>;
  }
  if (essays.length === 0) {
    return (
      <div className="card pad" style={{ color: "var(--muted)" }}>
        Belum ada esai tersimpan. Tulis esai di menu <b>Writing</b> lalu klik <b>Minta koreksi AI</b> — hasilnya akan
        muncul di sini (tersimpan dengan kode akunmu).
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {essays.map((e) => {
        const isOpen = open === e.id;
        return (
          <div className={"lesson-card" + (isOpen ? " open" : "")} key={e.id}>
            <button className="lesson-head" onClick={() => setOpen(isOpen ? null : e.id)}>
              <span className="lesson-meta">
                <span className="lesson-title">{(e.prompt || "Esai").slice(0, 70)}{(e.prompt || "").length > 70 ? "…" : ""}</span>
                <span className="lesson-sum">{new Date(e.created_at).toLocaleString("id-ID")}</span>
              </span>
              {typeof e.overall === "number" && (
                <span className="pill gold" style={{ fontFamily: "var(--mono)" }}>{e.overall}/100</span>
              )}
              <span className={"chev" + (isOpen ? " up" : "")}>⌄</span>
            </button>
            {isOpen && (
              <div className="lesson-body">
                <h4>Esaimu</h4>
                <p style={{ whiteSpace: "pre-wrap", color: "var(--muted)" }}>{e.content}</p>
                {e.feedback && (
                  <>
                    <h4>Umpan balik AI {e.feedback.band ? `· ${e.feedback.band}` : ""}</h4>
                    {e.feedback.scores?.map((s, i) => (
                      <div key={i} style={{ marginBottom: 8 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600 }}>
                          <span>{s.criterion}</span>
                          <span style={{ fontFamily: "var(--mono)", color: "var(--accent-ink)" }}>{s.score}/10</span>
                        </div>
                        <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0 0" }}>{s.comment}</p>
                      </div>
                    ))}
                    {e.feedback.improvements && e.feedback.improvements.length > 0 && (
                      <>
                        <h4>Saran perbaikan</h4>
                        <ul>{e.feedback.improvements.map((x, i) => <li key={i}>{x}</li>)}</ul>
                      </>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
