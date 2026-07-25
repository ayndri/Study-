"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string; err?: boolean };

const TOEFL_SUGGESTIONS = [
  "Jelaskan perbedaan 'affect' dan 'effect'.",
  "Beri 5 tips cepat menaikkan skor Listening ITP.",
  "Bagaimana struktur esai kontribusi LPDP yang baik?",
  "Apa saja syarat masuk S2 Teknik Informatika ITS?",
];
const TOEFL_GREETING =
  "Halo! Aku tutor AI-mu. Tanya apa saja soal TOEFL ITP (grammar, tips, kosakata) atau persiapan beasiswa LPDP & S2 Teknik Informatika ITS. 🎓";

export default function Tutor({
  subject = "toefl",
  greeting = TOEFL_GREETING,
  suggestions = TOEFL_SUGGESTIONS,
}: {
  subject?: string;
  greeting?: string;
  suggestions?: string[];
}) {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: greeting }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const history = msgs
      .filter((m) => !m.err)
      .map((m) => ({ role: m.role === "user" ? "user" : "model", text: m.text }));
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history, subject }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMsgs((m) => [...m, { role: "bot", text: data.error || "Maaf, terjadi kesalahan.", err: true }]);
      } else {
        setMsgs((m) => [...m, { role: "bot", text: data.reply }]);
      }
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: "Tidak dapat menghubungi server.", err: true }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card pad chat">
      <div className="chat-log" ref={logRef}>
        {msgs.map((m, i) => (
          <div key={i} className={"msg " + m.role + (m.err ? " err" : "")}>
            {m.text}
          </div>
        ))}
        {busy && (
          <div className="msg bot">
            <span className="typing">
              <i /><i /><i />
            </span>
          </div>
        )}
      </div>

      {msgs.length <= 1 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {suggestions.map((s) => (
            <button key={s} className="chip" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="chat-input">
        <textarea
          rows={1}
          value={input}
          placeholder="Tulis pertanyaanmu…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
        />
        <button className="btn gold" onClick={() => send(input)} disabled={busy || !input.trim()}>
          Kirim
        </button>
      </div>
    </div>
  );
}
