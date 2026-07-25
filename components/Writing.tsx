"use client";

import { useEffect, useRef, useState } from "react";
import { WRITING_PROMPTS, RUBRIC } from "@/lib/content";
import { get, set, clientId } from "@/lib/store";

type Feedback = {
  overall: number;
  band: string;
  scores: { criterion: string; score: number; comment: string }[];
  strengths: string[];
  improvements: string[];
  revised_opening: string;
};

const PROMPT_LABELS = ["Opini umum", "Esai LPDP", "Rencana studi ITS"];

export default function Writing() {
  const [pi, setPi] = useState(1);
  const [text, setText] = useState("");
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);
  const [rubric, setRubric] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [fb, setFb] = useState<Feedback | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setText(get<string>("essay", ""));
    setRubric(get<Record<number, boolean>>("rubric", {}));
  }, []);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => setSec((s) => s + 1), 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [running]);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  function onText(v: string) {
    setText(v);
    set("essay", v);
  }
  function toggleRubric(i: number) {
    const next = { ...rubric, [i]: !rubric[i] };
    setRubric(next);
    set("rubric", next);
  }

  async function requestFeedback() {
    setErr(null);
    setFb(null);
    if (words < 40) {
      setErr("Tulis minimal ~40 kata dulu agar koreksi bermakna.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: WRITING_PROMPTS[pi], content: text, clientId: clientId() }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data.error || "Gagal mendapatkan koreksi.");
      } else {
        setFb(data.feedback as Feedback);
      }
    } catch {
      setErr("Tidak dapat menghubungi server. Cek koneksi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid g2" style={{ alignItems: "start" }}>
      <div className="card pad">
        <div className="eyebrow">Prompt</div>
        <div style={{ display: "flex", gap: 8, margin: "10px 0 14px", flexWrap: "wrap" }}>
          {PROMPT_LABELS.map((lbl, i) => (
            <button
              key={i}
              className={"btn sm " + (i === pi ? "gold" : "ghost")}
              onClick={() => setPi(i)}
            >
              {lbl}
            </button>
          ))}
        </div>
        <div className="prompt-box">{WRITING_PROMPTS[pi]}</div>

        <div className="wr-tools">
          <div className="metric">
            Kata: <b>{words}</b>
          </div>
          <div className="metric">
            Waktu: <b>{mm}:{ss}</b>
          </div>
          <button className="btn sm" onClick={() => setRunning((r) => !r)}>
            {running ? "⏸ Jeda" : "▶ Mulai timer"}
          </button>
          <button
            className="btn ghost sm"
            onClick={() => {
              setSec(0);
              setRunning(false);
            }}
          >
            Reset
          </button>
        </div>

        <textarea
          className="essay"
          value={text}
          onChange={(e) => onText(e.target.value)}
          placeholder="Tulis esaimu di sini... (target: 250–350 kata dalam 30 menit)"
        />

        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <button className="btn gold" onClick={requestFeedback} disabled={loading}>
            {loading ? "Menganalisis…" : "✦ Minta koreksi AI"}
          </button>
          <button
            className="btn ghost"
            onClick={() => {
              if (confirm("Bersihkan tulisan?")) onText("");
            }}
          >
            Bersihkan
          </button>
        </div>
        <div className="note">
          <span>💾</span>
          <span>Tulisanmu tersimpan otomatis di perangkat ini. Koreksi AI membutuhkan GEMINI_API_KEY di server.</span>
        </div>
      </div>

      <div className="card pad">
        {err && (
          <div className="explain" style={{ borderLeftColor: "var(--bad)", marginBottom: 16 }}>
            <b>Info:</b> {err}
          </div>
        )}

        {fb ? (
          <div>
            <div className="eyebrow">Hasil koreksi AI</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "8px 0 4px" }}>
              <span className="score-ring">{fb.overall}</span>
              <span style={{ color: "var(--muted)" }}>/100</span>
              <span className="pill gold" style={{ marginLeft: "auto" }}>
                {fb.band}
              </span>
            </div>
            <div className="divider" style={{ margin: "14px 0" }} />
            {fb.scores?.map((s, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600 }}>
                  <span>{s.criterion}</span>
                  <span style={{ fontFamily: "var(--mono)", color: "var(--accent-ink)" }}>{s.score}/10</span>
                </div>
                <div className="bar">
                  <i style={{ width: `${s.score * 10}%` }} />
                </div>
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{s.comment}</p>
              </div>
            ))}
            {fb.strengths?.length > 0 && (
              <>
                <div className="eyebrow" style={{ marginTop: 16 }}>Kelebihan</div>
                <ul className="tips" style={{ marginTop: 8 }}>
                  {fb.strengths.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </>
            )}
            {fb.improvements?.length > 0 && (
              <>
                <div className="eyebrow" style={{ marginTop: 16 }}>Saran perbaikan</div>
                <ul className="tips" style={{ marginTop: 8 }}>
                  {fb.improvements.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </>
            )}
            {fb.revised_opening && (
              <>
                <div className="eyebrow" style={{ marginTop: 16 }}>Contoh pembuka yang diperbaiki</div>
                <div className="explain" style={{ marginTop: 8 }}>{fb.revised_opening}</div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="eyebrow">Nilai sendiri</div>
            <h3 style={{ margin: "6px 0 4px", fontFamily: "var(--serif)", fontSize: 20 }}>Rubrik penilaian</h3>
            <p className="section-desc" style={{ marginBottom: 14 }}>
              Centang yang sudah kamu penuhi, atau minta koreksi AI di sebelah kiri.
            </p>
            <ul className="check">
              {RUBRIC.map(([title, desc], i) => (
                <li key={i} className={rubric[i] ? "done" : ""} onClick={() => toggleRubric(i)}>
                  <input type="checkbox" checked={!!rubric[i]} readOnly />
                  <span className="ct">
                    <span>{title}</span>
                    <small>{desc}</small>
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
