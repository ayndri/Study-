"use client";

import { useEffect, useState } from "react";
import { VOCAB } from "@/lib/content";
import { get, set } from "@/lib/store";

export default function Flashcards() {
  const [order, setOrder] = useState<number[]>(VOCAB.map((_, i) => i));
  const [idx, setIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState<number[]>([]);

  useEffect(() => {
    setKnown(get<number[]>("known", []));
  }, []);

  const cardId = order[idx];
  const [word, pos, mean, ex] = VOCAB[cardId];
  const isKnown = known.includes(cardId);

  function go(delta: number) {
    setFlip(false);
    setIdx((i) => (i + delta + VOCAB.length) % VOCAB.length);
  }
  function toggleKnown() {
    const next = isKnown ? known.filter((k) => k !== cardId) : [...known, cardId];
    setKnown(next);
    set("known", next);
  }
  function shuffle() {
    const arr = [...order];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setIdx(0);
    setFlip(false);
  }

  return (
    <div className="fc-stage">
      <div
        className={"fc" + (flip ? " flip" : "")}
        tabIndex={0}
        role="button"
        aria-label="Klik untuk membalik kartu"
        onClick={() => setFlip((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setFlip((f) => !f);
          }
        }}
      >
        <div className="fc-face fc-front">
          <div className="word">{word}</div>
          <div className="pos">{pos}</div>
          <div className="hint">klik untuk membalik →</div>
        </div>
        <div className="fc-face fc-back">
          <div className="mean">{mean}</div>
          <div className="ex">“{ex}”</div>
        </div>
      </div>

      <div className="fc-nav">
        <button className="fc-round" onClick={() => go(-1)} aria-label="Sebelumnya">‹</button>
        <div className="fc-count">
          {idx + 1} / {VOCAB.length}
        </div>
        <button className="fc-round" onClick={() => go(1)} aria-label="Berikutnya">›</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 16 }}>
        <button className="btn gold sm" onClick={toggleKnown}>
          {isKnown ? "✓ Sudah ditandai" : "✓ Sudah hafal"}
        </button>
        <button className="btn ghost sm" onClick={shuffle}>⇄ Acak</button>
      </div>
      <div style={{ textAlign: "center", marginTop: 14, color: "var(--muted)", fontSize: 13 }}>
        {known.length} kata ditandai hafal
      </div>
    </div>
  );
}
