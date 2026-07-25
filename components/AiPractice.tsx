"use client";

import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/lib/content";
import Quiz from "@/components/Quiz";
import { get, set } from "@/lib/store";

type Subject = "toefl" | "flutter" | "golang";
type Stat = { c: number; t: number };
type Stats = Record<string, Record<string, Stat>>; // subject -> topic -> {correct,total}

const SUBJECTS: { key: Subject; label: string }[] = [
  { key: "toefl", label: "TOEFL ITP" },
  { key: "flutter", label: "Flutter" },
  { key: "golang", label: "Golang" },
];

const TOPICS: Record<Subject, string[]> = {
  toefl: [
    "Subject-Verb Agreement",
    "Tenses",
    "Adjective & Reduced Clauses",
    "Prepositions",
    "Word Form",
    "Parallel Structure",
    "Reading: Main Idea & Inference",
    "Vocabulary (Synonyms)",
    "Articles & Determiners",
    "Conditionals",
  ],
  flutter: [
    "Dasar Dart",
    "Widget & Layout",
    "State (setState)",
    "Navigasi",
    "Async & HTTP/JSON",
    "Form & Validasi",
    "Provider / Riverpod",
    "Animasi",
  ],
  golang: [
    "Dasar & Tipe Data",
    "Slice & Map",
    "Struct & Method",
    "Interface",
    "Error Handling",
    "Goroutine & Channel",
    "Generics",
    "net/http & JSON",
  ],
};

const LEVELS = ["mudah", "sedang", "sulit"] as const;

export default function AiPractice({ initialSubject = "toefl" }: { initialSubject?: Subject }) {
  const [subject, setSubject] = useState<Subject>(initialSubject);
  const [topic, setTopic] = useState(TOPICS[initialSubject][0]);
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("sedang");
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [runKey, setRunKey] = useState(0);
  const [stats, setStats] = useState<Stats>({});

  useEffect(() => {
    setStats(get<Stats>("aiStats", {}));
  }, []);

  function changeSubject(s: Subject) {
    setSubject(s);
    setTopic(TOPICS[s][0]);
    setQuestions(null);
    setErr(null);
  }

  async function generate(useTopic = topic) {
    setErr(null);
    setLoading(true);
    setQuestions(null);
    try {
      const res = await fetch("/api/latihan-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, topic: useTopic, level, count }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) setErr(data.error || "Gagal membuat soal.");
      else {
        setQuestions(data.questions as Question[]);
        setRunKey((k) => k + 1);
      }
    } catch {
      setErr("Tidak dapat menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  function recordStat(correct: number, total: number) {
    setStats((prev) => {
      const next: Stats = { ...prev, [subject]: { ...(prev[subject] || {}) } };
      const cur = next[subject][topic] || { c: 0, t: 0 };
      next[subject][topic] = { c: cur.c + correct, t: cur.t + total };
      set("aiStats", next);
      return next;
    });
  }

  // Analisis kelemahan: topik dengan akurasi terendah (min. 3 soal dijawab).
  const weak = useMemo(() => {
    const s = stats[subject] || {};
    return Object.entries(s)
      .map(([t, v]) => ({ topic: t, acc: v.t ? Math.round((v.c / v.t) * 100) : 0, total: v.t }))
      .filter((x) => x.total >= 3)
      .sort((a, b) => a.acc - b.acc);
  }, [stats, subject]);

  return (
    <div className="grid g2" style={{ alignItems: "start", gap: 20 }}>
      <div>
        <div className="card pad">
          <div className="eyebrow">Buat latihan</div>

          <label className="auth-label" style={{ marginTop: 12 }}>Mata pelajaran</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
            {SUBJECTS.map((s) => (
              <button
                key={s.key}
                className={"btn sm " + (subject === s.key ? "gold" : "ghost")}
                onClick={() => changeSubject(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <label className="auth-label" style={{ marginTop: 14 }}>Topik</label>
          <select className="auth-input" value={topic} onChange={(e) => setTopic(e.target.value)}>
            {TOPICS[subject].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <label className="auth-label" style={{ marginTop: 14 }}>Tingkat kesulitan</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
            {LEVELS.map((l) => (
              <button
                key={l}
                className={"btn sm " + (level === l ? "gold" : "ghost")}
                onClick={() => setLevel(l)}
                style={{ textTransform: "capitalize" }}
              >
                {l}
              </button>
            ))}
          </div>

          <label className="auth-label" style={{ marginTop: 14 }}>Jumlah soal: {count}</label>
          <input
            type="range"
            min={3}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            style={{ width: "100%" }}
          />

          <button className="btn gold" style={{ marginTop: 16, width: "100%", justifyContent: "center" }} onClick={() => generate()} disabled={loading}>
            {loading ? "AI menyusun soal…" : "✦ Buat soal baru"}
          </button>
          <div className="note"><span>♾️</span><span>Soal dibuat AI, selalu baru tiap kali diklik.</span></div>
        </div>

        <div className="card pad" style={{ marginTop: 16 }}>
          <div className="eyebrow">Analisis kelemahan ({SUBJECTS.find((s) => s.key === subject)?.label})</div>
          {weak.length === 0 ? (
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 10 }}>
              Kerjakan minimal beberapa soal untuk melihat topik yang perlu kamu perkuat.
            </p>
          ) : (
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 10 }}>
              {weak.slice(0, 5).map((w) => {
                const color = w.acc >= 70 ? "var(--good)" : w.acc >= 50 ? "var(--warn)" : "var(--bad)";
                return (
                  <div key={w.topic}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <span style={{ fontWeight: 600 }}>{w.topic}</span>
                      <span style={{ color }}>{w.acc}% · {w.total} soal</span>
                    </div>
                    <div className="bar"><i style={{ width: `${w.acc}%`, background: color }} /></div>
                    {w.acc < 70 && (
                      <button
                        className="btn ghost sm"
                        style={{ marginTop: 6 }}
                        onClick={() => { setTopic(w.topic); generate(w.topic); }}
                        disabled={loading}
                      >
                        ✦ Latih topik ini
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="card pad">
        {err && <div className="explain" style={{ borderLeftColor: "var(--bad)" }}><b>Info:</b> {err}</div>}
        {questions ? (
          <>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{topic} · {level}</div>
            <Quiz key={runKey} section={`ai:${subject}:${topic}`} questions={questions} subject={subject} onChecked={recordStat} />
          </>
        ) : (
          !err && (
            <div style={{ color: "var(--muted)" }}>
              <div className="eyebrow">Cara pakai</div>
              <ul className="tips" style={{ marginTop: 10 }}>
                <li>Pilih mata pelajaran, topik, dan tingkat kesulitan.</li>
                <li>Klik <b>Buat soal baru</b> — AI menyusun soal segar setiap saat.</li>
                <li>Jawab lalu <b>Periksa</b>; minta <b>Jelaskan dengan AI</b> pada soal yang salah.</li>
                <li>Akurasi tiap topik terekam di panel <b>Analisis kelemahan</b> untuk fokus latihanmu.</li>
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
