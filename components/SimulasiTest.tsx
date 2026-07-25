"use client";

import { useEffect, useRef, useState } from "react";
import {
  LISTENING_CLIPS,
  STRUCTURE_QUESTIONS,
  READING1_PASSAGE,
  READING1_QUESTIONS,
  READING2_PASSAGE,
  READING2_QUESTIONS,
  type Question,
} from "@/lib/content";
import ListeningPlayer from "@/components/ListeningPlayer";
import ExplainButton from "@/components/ExplainButton";
import { recordScore, set as storeSet } from "@/lib/store";

const L = ["A", "B", "C", "D", "E"];

// Susun bagian simulasi dari bank soal.
const listeningQ: Question[] = LISTENING_CLIPS.flatMap((c) => c.questions);
const readingQ: Question[] = [...READING1_QUESTIONS, ...READING2_QUESTIONS];

const SECTIONS = [
  { key: "listening", name: "Section 1 — Listening Comprehension", minutes: 35, count: listeningQ.length },
  { key: "structure", name: "Section 2 — Structure & Written Expression", minutes: 25, count: STRUCTURE_QUESTIONS.length },
  { key: "reading", name: "Section 3 — Reading Comprehension", minutes: 55, count: readingQ.length },
] as const;

function scaled(correct: number, total: number) {
  return Math.round(31 + (correct / total) * 37); // skala 31–68
}

export default function SimulasiTest() {
  const [phase, setPhase] = useState<"intro" | "run" | "result">("intro");
  const [sec, setSec] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const stopAudio = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  };

  useEffect(() => () => { stopTimer(); stopAudio(); }, []);

  function startSection(i: number) {
    setSec(i);
    setTimeLeft(SECTIONS[i].minutes * 60);
    stopTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopTimer();
          nextSection(i);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  function begin() {
    setAnswers({});
    setPhase("run");
    startSection(0);
  }

  function nextSection(i: number) {
    stopTimer();
    stopAudio();
    if (i < SECTIONS.length - 1) {
      startSection(i + 1);
    } else {
      finish();
    }
  }

  function finish() {
    stopTimer();
    stopAudio();
    setPhase("result");
  }

  function pick(key: string, oi: number) {
    setAnswers((a) => ({ ...a, [key]: oi }));
  }

  // ---- hitung skor ----
  function scoreOf(qs: Question[], prefix: string) {
    const correct = qs.reduce((n, q, i) => n + (answers[`${prefix}-${i}`] === q.answer ? 1 : 0), 0);
    return { correct, total: qs.length };
  }

  const results = phase === "result"
    ? {
        listening: scoreOf(listeningQ, "listening"),
        structure: scoreOf(STRUCTURE_QUESTIONS, "structure"),
        reading: scoreOf(readingQ, "reading"),
      }
    : null;

  useEffect(() => {
    if (phase === "result" && results) {
      const sc = {
        listening: scaled(results.listening.correct, results.listening.total),
        structure: scaled(results.structure.correct, results.structure.total),
        reading: scaled(results.reading.correct, results.reading.total),
      };
      const final = Math.round(((sc.listening + sc.structure + sc.reading) * 10) / 3);
      recordScore("listening", results.listening.correct, results.listening.total);
      recordScore("structure", results.structure.correct, results.structure.total);
      recordScore("reading", results.reading.correct, results.reading.total);
      storeSet("simResult", { ...sc, final, at: new Date().toISOString().slice(0, 10) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // ---------- render helpers ----------
  function QView({ q, k, n, review }: { q: Question; k: string; n: number; review?: boolean }) {
    return (
      <div className="q" key={k}>
        <div className="qhead">
          <span className="qnum">{n}.</span>
          <div className="qtext" dangerouslySetInnerHTML={{ __html: q.q }} />
        </div>
        <div className="opts">
          {q.options.map((o, oi) => {
            let cls = "opt";
            let tag = "";
            if (review) {
              if (oi === q.answer) { cls += " correct"; tag = "Benar"; }
              else if (answers[k] === oi) { cls += " wrong"; tag = "Kamu"; }
            }
            return (
              <label className={cls} key={oi}>
                <input
                  type="radio"
                  name={k}
                  checked={answers[k] === oi}
                  disabled={review}
                  onChange={() => pick(k, oi)}
                />
                <span><b>{L[oi]}.</b> {o}</span>
                {tag && <span className="tag">{tag}</span>}
              </label>
            );
          })}
        </div>
        {review && (
          <>
            <div className="explain"><b>Pembahasan:</b> {q.explain}</div>
            <ExplainButton q={q} userAnswer={answers[k]} />
          </>
        )}
      </div>
    );
  }

  // ================= INTRO =================
  if (phase === "intro") {
    const totalQ = SECTIONS.reduce((n, s) => n + s.count, 0);
    return (
      <div className="card pad">
        <div className="eyebrow">Mode ujian</div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 700, margin: "6px 0 10px" }}>
          Simulasi TOEFL ITP
        </h3>
        <p className="section-desc">
          {totalQ} soal dalam 3 bagian dengan timer, meniru alur tes asli. Skor akhir dihitung dengan konversi resmi
          (rentang 310–677). Kamu bisa menyelesaikan tiap bagian lebih cepat dengan tombol <b>Selesai bagian</b>.
        </p>
        <ul className="tips" style={{ margin: "16px 0" }}>
          {SECTIONS.map((s) => (
            <li key={s.key}><b>{s.name}</b> — {s.count} soal · {s.minutes} menit</li>
          ))}
        </ul>
        <div className="note" style={{ marginTop: 0, marginBottom: 16 }}>
          <span>⏱️</span>
          <span>Begitu dimulai, timer berjalan. Bila waktu bagian habis, otomatis lanjut ke bagian berikutnya. Untuk Listening, klik <b>Putar</b> pada tiap rekaman.</span>
        </div>
        <button className="btn gold" onClick={begin}>Mulai simulasi →</button>
      </div>
    );
  }

  // ================= RESULT =================
  if (phase === "result" && results) {
    const sc = {
      listening: scaled(results.listening.correct, results.listening.total),
      structure: scaled(results.structure.correct, results.structure.total),
      reading: scaled(results.reading.correct, results.reading.total),
    };
    const final = Math.round(((sc.listening + sc.structure + sc.reading) * 10) / 3);
    const pass = final >= 500;
    let ln = 0;
    return (
      <div>
        <div className="card pad" style={{ marginBottom: 18, textAlign: "center" }}>
          <div className="eyebrow">Hasil simulasi</div>
          <div className="score-ring" style={{ fontSize: 60, marginTop: 8 }}>{final}</div>
          <div style={{ color: "var(--muted)", marginBottom: 12 }}>skor akhir (310–677)</div>
          <span className={"pill " + (pass ? "good" : "gold")}>
            {pass ? "✓ Memenuhi ambang umum LPDP (≥ 500)" : "Belum mencapai 500 — terus berlatih!"}
          </span>
          <div className="grid g3" style={{ marginTop: 20, textAlign: "left" }}>
            {[
              ["Listening", results.listening, sc.listening],
              ["Structure", results.structure, sc.structure],
              ["Reading", results.reading, sc.reading],
            ].map(([name, r, s]) => {
              const rr = r as { correct: number; total: number };
              return (
                <div className="card stat" key={name as string}>
                  <div className="lbl">{name as string}</div>
                  <div className="val" style={{ fontSize: 24 }}>{s as number}<small> /68</small></div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{rr.correct}/{rr.total} benar</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20 }}>
            <button className="btn gold" onClick={begin}>Ulangi simulasi</button>
          </div>
        </div>

        <h3 style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 700, margin: "18px 0 12px" }}>Pembahasan</h3>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Listening</div>
        {listeningQ.map((q, i) => <QView key={"lr" + i} q={q} k={`listening-${i}`} n={++ln} review />)}
        <div className="eyebrow" style={{ margin: "16px 0 8px" }}>Structure</div>
        {STRUCTURE_QUESTIONS.map((q, i) => <QView key={"sr" + i} q={q} k={`structure-${i}`} n={++ln} review />)}
        <div className="eyebrow" style={{ margin: "16px 0 8px" }}>Reading</div>
        {readingQ.map((q, i) => <QView key={"rr" + i} q={q} k={`reading-${i}`} n={++ln} review />)}
      </div>
    );
  }

  // ================= RUN =================
  const s = SECTIONS[sec];
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  const low = timeLeft <= 300;
  let n = 0;

  return (
    <div>
      <div
        className="card pad"
        style={{
          position: "sticky",
          top: 12,
          zIndex: 20,
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="eyebrow">Bagian {sec + 1} dari 3</div>
          <div style={{ fontWeight: 700, fontFamily: "var(--serif)", fontSize: 17 }}>{s.name}</div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "var(--mono)",
            fontSize: 26,
            fontWeight: 700,
            color: low ? "var(--bad)" : "var(--ink)",
          }}
        >
          {mm}:{ss}
        </div>
        <button className="btn gold sm" onClick={() => nextSection(sec)}>
          {sec < 2 ? "Selesai bagian →" : "Selesai & lihat hasil"}
        </button>
      </div>

      {s.key === "listening" && (
        <>
          <div className="note" style={{ marginTop: 0, marginBottom: 14 }}>
            <span>🎧</span><span>Putar tiap rekaman, lalu jawab. Jawaban baru dinilai di akhir simulasi.</span>
          </div>
          {LISTENING_CLIPS.map((clip) => {
            const start = n;
            const block = (
              <div className="card pad" key={clip.id} style={{ marginBottom: 16 }}>
                <ListeningPlayer label={clip.label} text={clip.script} />
                {clip.questions.map((q, qi) => (
                  <QView key={`l${start}-${qi}`} q={q} k={`listening-${start + qi}`} n={start + qi + 1} />
                ))}
              </div>
            );
            n += clip.questions.length;
            return block;
          })}
        </>
      )}

      {s.key === "structure" && STRUCTURE_QUESTIONS.map((q, i) => (
        <QView key={"s" + i} q={q} k={`structure-${i}`} n={++n} />
      ))}

      {s.key === "reading" && (
        <>
          <div className="card pad" style={{ marginBottom: 14 }}>
            <div className="pill teal" style={{ marginBottom: 12 }}>Bacaan 1 · Energi Terbarukan</div>
            <div className="passage">{READING1_PASSAGE.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
          {READING1_QUESTIONS.map((q, i) => <QView key={"r1" + i} q={q} k={`reading-${i}`} n={++n} />)}
          <div className="card pad" style={{ margin: "14px 0" }}>
            <div className="pill teal" style={{ marginBottom: 12 }}>Bacaan 2 · Bilingualisme</div>
            <div className="passage">{READING2_PASSAGE.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
          {READING2_QUESTIONS.map((q, i) => (
            <QView key={"r2" + i} q={q} k={`reading-${READING1_QUESTIONS.length + i}`} n={++n} />
          ))}
        </>
      )}
    </div>
  );
}
