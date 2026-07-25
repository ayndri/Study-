"use client";

import { useState } from "react";
import type { Question } from "@/lib/content";

export default function ExplainButton({ q, userAnswer, subject = "toefl" }: { q: Question; userAnswer?: number; subject?: string }) {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function ask() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/jelaskan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.q.replace(/<[^>]+>/g, ""),
          options: q.options,
          answer: q.answer,
          userAnswer: typeof userAnswer === "number" ? userAnswer : -1,
          subject,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) setErr(data.error || "Gagal memuat.");
      else setText(data.text);
    } catch {
      setErr("Tidak dapat menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  if (text) {
    return (
      <div className="ai-box" style={{ marginTop: 10 }}>
        <div className="ai-tag">✦ Penjelasan AI</div>
        <p style={{ margin: 0, fontSize: 14, whiteSpace: "pre-wrap" }}>{text}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 8 }}>
      <button className="btn ghost sm" onClick={ask} disabled={loading}>
        {loading ? "AI menjelaskan…" : "✦ Jelaskan dengan AI"}
      </button>
      {err && <span style={{ marginLeft: 10, fontSize: 13, color: "var(--bad)" }}>{err}</span>}
    </div>
  );
}
