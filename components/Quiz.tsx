"use client";

import { useMemo, useState } from "react";
import type { Question, Level } from "@/lib/content";
import { recordScore } from "@/lib/store";
import ExplainButton from "@/components/ExplainButton";

const L = ["A", "B", "C", "D", "E"];
const LEVELS: (Level | "semua")[] = ["semua", "mudah", "sedang", "sulit"];
const lvlOf = (q: Question): Level => q.level || "sedang";

export default function Quiz({ section, questions, subject = "toefl" }: { section: string; questions: Question[]; subject?: string }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [filter, setFilter] = useState<Level | "semua">("semua");

  const hasLevels = useMemo(() => questions.some((q) => q.level), [questions]);
  const shown = useMemo(
    () => (filter === "semua" ? questions : questions.filter((q) => lvlOf(q) === filter)),
    [questions, filter]
  );

  const correct = shown.reduce((n, q, i) => n + (picked[i] === q.answer ? 1 : 0), 0);
  const pct = shown.length ? Math.round((correct / shown.length) * 100) : 0;
  const color = pct >= 70 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)";

  function check() {
    setChecked(true);
    recordScore(section, correct, shown.length);
  }
  function reset() {
    setPicked({});
    setChecked(false);
  }
  function changeFilter(f: Level | "semua") {
    setFilter(f);
    setPicked({});
    setChecked(false);
  }

  return (
    <div>
      {hasLevels && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {LEVELS.map((f) => {
            const count = f === "semua" ? questions.length : questions.filter((q) => lvlOf(q) === f).length;
            return (
              <button
                key={f}
                className={"btn sm " + (filter === f ? "gold" : "ghost")}
                onClick={() => changeFilter(f)}
                style={{ textTransform: "capitalize" }}
              >
                {f} ({count})
              </button>
            );
          })}
        </div>
      )}

      {shown.map((q, qi) => (
        <div className="q" key={qi}>
          <div className="qhead">
            <span className="qnum">{qi + 1}.</span>
            <div className="qtext" dangerouslySetInnerHTML={{ __html: q.q }} />
            {hasLevels && <span className={"lvl lvl-" + lvlOf(q)}>{lvlOf(q)}</span>}
          </div>
          <div className="opts">
            {q.options.map((o, oi) => {
              let cls = "opt";
              let tag = "";
              if (checked) {
                if (oi === q.answer) {
                  cls += " correct";
                  tag = "Benar";
                } else if (picked[qi] === oi) {
                  cls += " wrong";
                  tag = "Kamu";
                }
              }
              return (
                <label className={cls} key={oi}>
                  <input
                    type="radio"
                    name={`${section}-${qi}`}
                    checked={picked[qi] === oi}
                    disabled={checked}
                    onChange={() => setPicked((p) => ({ ...p, [qi]: oi }))}
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
              <ExplainButton q={q} userAnswer={picked[qi]} subject={subject} />
            </>
          )}
        </div>
      ))}

      <div className="quiz-foot">
        {!checked ? (
          <button className="btn gold sm" onClick={check} disabled={Object.keys(picked).length === 0}>
            Periksa jawaban
          </button>
        ) : (
          <button className="btn ghost sm" onClick={reset}>
            Ulangi
          </button>
        )}
        {checked && (
          <span className="result" style={{ color }}>
            Skor: {correct}/{shown.length} ({pct}%)
          </span>
        )}
      </div>
    </div>
  );
}
