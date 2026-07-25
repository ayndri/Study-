"use client";

import { useState } from "react";
import type { Clip } from "@/lib/content";
import ListeningPlayer from "@/components/ListeningPlayer";
import ExplainButton from "@/components/ExplainButton";
import { recordScore } from "@/lib/store";

const L = ["A", "B", "C", "D", "E"];

export default function ListeningExercise({ clips }: { clips: Clip[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  // Ratakan semua pertanyaan lintas klip dengan indeks global.
  const flat: { q: string; options: string[]; answer: number; explain: string }[] = [];
  const clipRanges = clips.map((c) => {
    const start = flat.length;
    c.questions.forEach((q) => flat.push(q));
    return { clip: c, start };
  });

  const correct = flat.reduce((n, q, i) => n + (picked[i] === q.answer ? 1 : 0), 0);
  const total = flat.length;
  const pct = Math.round((correct / total) * 100);
  const color = pct >= 70 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)";

  function check() {
    setChecked(true);
    recordScore("listening", correct, total);
  }
  function reset() {
    setPicked({});
    setChecked(false);
  }

  return (
    <div>
      {clipRanges.map(({ clip, start }) => (
        <div className="card pad" key={clip.id} style={{ marginBottom: 16 }}>
          <ListeningPlayer label={clip.label} text={clip.script} />
          {clip.questions.map((q, qi) => {
            const gi = start + qi;
            return (
              <div className="q" key={gi} style={{ marginBottom: qi === clip.questions.length - 1 ? 0 : 12 }}>
                <div className="qhead">
                  <span className="qnum">{gi + 1}.</span>
                  <div className="qtext">{q.q}</div>
                </div>
                <div className="opts">
                  {q.options.map((o, oi) => {
                    let cls = "opt";
                    let tag = "";
                    if (checked) {
                      if (oi === q.answer) {
                        cls += " correct";
                        tag = "Benar";
                      } else if (picked[gi] === oi) {
                        cls += " wrong";
                        tag = "Kamu";
                      }
                    }
                    return (
                      <label className={cls} key={oi}>
                        <input
                          type="radio"
                          name={`listen-${gi}`}
                          checked={picked[gi] === oi}
                          disabled={checked}
                          onChange={() => setPicked((p) => ({ ...p, [gi]: oi }))}
                        />
                        <span>
                          <b>{L[oi]}.</b> {o}
                        </span>
                        {tag && <span className="tag">{tag}</span>}
                      </label>
                    );
                  })}
                </div>
                {checked && (
                  <>
                    <div className="explain">
                      <b>Pembahasan:</b> {q.explain}
                    </div>
                    <ExplainButton q={q} userAnswer={picked[gi]} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <div className="quiz-foot">
        {!checked ? (
          <button className="btn gold sm" onClick={check} disabled={Object.keys(picked).length === 0}>
            Periksa semua jawaban
          </button>
        ) : (
          <button className="btn ghost sm" onClick={reset}>
            Ulangi
          </button>
        )}
        {checked && (
          <span className="result" style={{ color }}>
            Skor: {correct}/{total} ({pct}%)
          </span>
        )}
      </div>
    </div>
  );
}
