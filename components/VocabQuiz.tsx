"use client";

import { useEffect, useMemo, useState } from "react";
import { VOCAB } from "@/lib/content";
import { get, set } from "@/lib/store";

type Srs = Record<number, { box: number }>;
const SESSION = 10;
const MAX_BOX = 5;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabQuiz() {
  const [srs, setSrs] = useState<Srs>({});
  const [queue, setQueue] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState<"idle" | "run" | "done">("idle");

  useEffect(() => {
    setSrs(get<Srs>("vocabSrs", {}));
  }, []);

  function boxOf(i: number) {
    return srs[i]?.box ?? 0;
  }

  const mastered = useMemo(() => Object.values(srs).filter((s) => s.box >= MAX_BOX).length, [srs]);

  function startSession() {
    // Prioritaskan kata dengan box terendah (belum dikuasai), acak dalam kelompok.
    const byBox = VOCAB.map((_, i) => i).sort((a, b) => boxOf(a) - boxOf(b));
    const lowest = byBox.slice(0, Math.max(SESSION * 2, 20));
    const chosen = shuffle(lowest).slice(0, SESSION);
    setQueue(chosen);
    setPos(0);
    setPicked(null);
    setCorrectCount(0);
    setPhase("run");
  }

  const current = queue[pos];
  const options = useMemo(() => {
    if (current === undefined) return [];
    const correct = VOCAB[current][2];
    const others = shuffle(VOCAB.map((_, i) => i).filter((i) => i !== current)).slice(0, 3).map((i) => VOCAB[i][2]);
    return shuffle([correct, ...others]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function answer(meaning: string, idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    const correct = VOCAB[current][2];
    const isRight = meaning === correct;
    const nextBox = isRight ? Math.min(MAX_BOX, boxOf(current) + 1) : 1;
    const nextSrs = { ...srs, [current]: { box: nextBox } };
    setSrs(nextSrs);
    set("vocabSrs", nextSrs);
    if (isRight) setCorrectCount((c) => c + 1);

    // Sinkron dengan "known" (dipakai dashboard): mastered = box penuh.
    const known = new Set(get<number[]>("known", []));
    if (nextBox >= MAX_BOX) known.add(current);
    else known.delete(current);
    set("known", Array.from(known));
  }

  function next() {
    if (pos + 1 >= queue.length) setPhase("done");
    else {
      setPos((p) => p + 1);
      setPicked(null);
    }
  }

  if (phase === "idle") {
    return (
      <div className="card pad" style={{ textAlign: "center" }}>
        <div className="eyebrow">Kuis kosakata (SRS)</div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, margin: "8px 0 8px" }}>
          Tebak arti kata
        </h3>
        <p className="section-desc" style={{ margin: "0 auto 16px" }}>
          {SESSION} soal per sesi. Kata yang <b>salah</b> akan sering muncul lagi; yang benar berulang kali akan
          "dikuasai". Sistem <i>spaced repetition</i> memilih kata yang paling perlu kamu latih.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 18 }}>
          <div><div className="score-ring" style={{ fontSize: 30 }}>{mastered}</div><div style={{ fontSize: 12, color: "var(--muted)" }}>dikuasai</div></div>
          <div><div className="score-ring" style={{ fontSize: 30 }}>{VOCAB.length}</div><div style={{ fontSize: 12, color: "var(--muted)" }}>total kata</div></div>
        </div>
        <button className="btn gold" onClick={startSession}>Mulai kuis →</button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="card pad" style={{ textAlign: "center" }}>
        <div className="eyebrow">Sesi selesai</div>
        <div className="score-ring" style={{ fontSize: 48, marginTop: 8 }}>{correctCount}/{queue.length}</div>
        <p className="section-desc" style={{ margin: "6px auto 16px" }}>
          Total kata dikuasai: <b>{mastered}</b> / {VOCAB.length}.
        </p>
        <button className="btn gold" onClick={startSession}>Sesi baru</button>
      </div>
    );
  }

  // run
  const word = VOCAB[current];
  const correct = word[2];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span className="pill">Soal {pos + 1} / {queue.length}</span>
        <span className="pill teal">Benar: {correctCount}</span>
      </div>
      <div className="card pad" style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "var(--faint)" }}>Apa arti kata ini?</div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 38, fontWeight: 700, margin: "8px 0 4px" }}>{word[0]}</div>
        <div style={{ color: "var(--muted)", fontStyle: "italic" }}>{word[1]}</div>
      </div>
      <div className="opts">
        {options.map((m, i) => {
          let cls = "opt";
          if (picked !== null) {
            if (m === correct) cls += " correct";
            else if (i === picked) cls += " wrong";
          }
          return (
            <label className={cls} key={i} onClick={() => answer(m, i)} style={{ cursor: picked === null ? "pointer" : "default" }}>
              <span>{m}</span>
              {picked !== null && m === correct && <span className="tag">Benar</span>}
              {picked !== null && i === picked && m !== correct && <span className="tag">Kamu</span>}
            </label>
          );
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 14 }}>
          <div className="explain">
            <b>{word[0]}</b> = {correct}. <br />Contoh: <i>{word[3]}</i>
          </div>
          <button className="btn gold sm" style={{ marginTop: 12 }} onClick={next}>
            {pos + 1 >= queue.length ? "Lihat hasil" : "Lanjut →"}
          </button>
        </div>
      )}
    </div>
  );
}
