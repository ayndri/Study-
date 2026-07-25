"use client";

import { useEffect, useState } from "react";
import type { Lesson } from "@/lib/materi";
import type { Question } from "@/lib/content";
import Quiz from "@/components/Quiz";
import { get, set } from "@/lib/store";

type AiState = { loading?: boolean; html?: string; err?: string };
type Cat = { key: string; label: string; ic: string };

export default function Materi({
  lessons,
  cats,
  quizzes,
  subject = "toefl",
  storeKey = "materiDone",
}: {
  lessons: Lesson[];
  cats: Cat[];
  quizzes: Record<string, Question[]>;
  subject?: string;
  storeKey?: string;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ai, setAi] = useState<Record<string, AiState>>({});

  useEffect(() => {
    setDone(get<Record<string, boolean>>(storeKey, {}));
  }, [storeKey]);

  function toggleOpen(id: string) {
    setOpen((o) => (o === id ? null : id));
  }

  async function perdalam(id: string, title: string, summary: string) {
    setAi((s) => ({ ...s, [id]: { loading: true } }));
    try {
      const res = await fetch("/api/perdalam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, subject }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setAi((s) => ({ ...s, [id]: { err: data.error || "Gagal memuat." } }));
      } else {
        setAi((s) => ({ ...s, [id]: { html: data.html } }));
      }
    } catch {
      setAi((s) => ({ ...s, [id]: { err: "Tidak dapat menghubungi server." } }));
    }
  }
  function markDone(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    set(storeKey, next);
  }

  const total = lessons.length;
  const finished = Object.values(done).filter(Boolean).length;

  return (
    <div>
      <div className="card pad" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow">Progres belajar</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, marginTop: 4 }}>
            {finished} / {total} materi selesai
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 160 }}>
          <div className="bar">
            <i style={{ width: `${(finished / total) * 100}%` }} />
          </div>
        </div>
      </div>

      {cats.map((cat) => {
        const catLessons = lessons.filter((l) => l.cat === cat.key);
        if (!catLessons.length) return null;
        return (
          <div key={cat.key} style={{ marginBottom: 26 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span className="cat-ic">{cat.ic}</span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 700 }}>{cat.label}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {catLessons.map((l) => {
                const isOpen = open === l.id;
                return (
                  <div className={"lesson-card" + (isOpen ? " open" : "")} key={l.id}>
                    <button className="lesson-head" onClick={() => toggleOpen(l.id)} aria-expanded={isOpen}>
                      <span
                        className={"lesson-check" + (done[l.id] ? " on" : "")}
                        onClick={(e) => markDone(l.id, e)}
                        role="checkbox"
                        aria-checked={!!done[l.id]}
                        title="Tandai selesai"
                      >
                        {done[l.id] ? "✓" : ""}
                      </span>
                      <span className="lesson-meta">
                        <span className="lesson-title">{l.title}</span>
                        <span className="lesson-sum">{l.summary}</span>
                      </span>
                      <span className="lesson-min">{l.minutes} mnt</span>
                      <span className={"chev" + (isOpen ? " up" : "")}>⌄</span>
                    </button>
                    {isOpen && (
                      <div className="lesson-body">
                        <div dangerouslySetInnerHTML={{ __html: l.body }} />

                        <div className="ai-deep">
                          {!ai[l.id]?.html && (
                            <button
                              className="btn gold sm"
                              onClick={() => perdalam(l.id, l.title, l.summary)}
                              disabled={ai[l.id]?.loading}
                            >
                              {ai[l.id]?.loading ? "AI sedang menjelaskan…" : "✦ Perdalam dengan AI"}
                            </button>
                          )}
                          {ai[l.id]?.err && (
                            <div className="explain" style={{ borderLeftColor: "var(--bad)", marginTop: 10 }}>
                              <b>Info:</b> {ai[l.id]?.err}
                            </div>
                          )}
                          {ai[l.id]?.html && (
                            <div className="ai-box">
                              <div className="ai-tag">✦ Penjelasan mendalam oleh AI</div>
                              <div dangerouslySetInnerHTML={{ __html: ai[l.id]!.html! }} />
                              <button
                                className="btn ghost sm"
                                style={{ marginTop: 12 }}
                                onClick={() => perdalam(l.id, l.title, l.summary)}
                              >
                                ↻ Jelaskan ulang
                              </button>
                            </div>
                          )}
                        </div>

                        {quizzes[l.id] && (
                          <div className="mini-quiz">
                            <div className="eyebrow" style={{ marginBottom: 10 }}>Uji pemahaman</div>
                            <Quiz section={`materi-${l.id}`} questions={quizzes[l.id]} subject={subject} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
