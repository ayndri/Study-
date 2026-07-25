"use client";

import { useRef, useState } from "react";

export default function ListeningPlayer({
  label,
  text,
  speakText,
}: {
  label: string;
  text: string;
  speakText?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const uRef = useRef<SpeechSynthesisUtterance | null>(null);

  function play() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Browser ini tidak mendukung pemutaran suara. Silakan baca naskahnya.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance((speakText ?? text).replace(/(Woman|Man):/g, ""));
    u.lang = "en-US";
    u.rate = 0.95;
    u.onstart = () => setPlaying(true);
    u.onend = () => setPlaying(false);
    uRef.current = u;
    window.speechSynthesis.speak(u);
  }
  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setPlaying(false);
  }

  return (
    <>
      <div className="player">
        <span className="lab">{label}</span>
        <div className={"wave" + (playing ? " playing" : "")}>
          <i /><i /><i /><i /><i />
        </div>
        <button className="btn sm" onClick={play}>▶ Putar</button>
        <button className="btn ghost sm" onClick={stop}>■ Stop</button>
        <button className="script-toggle" onClick={() => setShowScript((s) => !s)}>
          {showScript ? "Sembunyikan naskah" : "Lihat naskah"}
        </button>
      </div>
      {showScript && <div className="script">{text}</div>}
    </>
  );
}
