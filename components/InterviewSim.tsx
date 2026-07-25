"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string; err?: boolean };

const LPDP_TIPS = [
  "Jawab dengan <b>spesifik dan jujur</b>, sertakan contoh konkret.",
  "Kaitkan jawaban dengan <b>kontribusi bagi Indonesia</b> & komitmen kembali.",
  "Di akhir, klik <b>Akhiri & minta evaluasi</b> untuk mendapat skor & saran.",
];

export default function InterviewSim({
  mode = "lpdp",
  eyebrow = "Latihan seleksi substansi",
  title = "Simulasi Wawancara LPDP",
  intro = "AI akan berperan sebagai panel pewawancara untuk kandidat S2 Teknik Informatika ITS. Ia mengajukan pertanyaan satu per satu, memberi umpan balik, lalu menggali lebih dalam. Jawablah seolah wawancara sungguhan.",
  tips = LPDP_TIPS,
}: {
  mode?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tips?: string[];
}) {
  const [started, setStarted] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [ended, setEnded] = useState(false);
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function talk(message: string, showUser: boolean) {
    const history = msgs
      .filter((m) => !m.err)
      .map((m) => ({ role: m.role === "user" ? "user" : "model", text: m.text }));
    if (showUser) setMsgs((m) => [...m, { role: "user", text: message }]);
    setBusy(true);
    try {
      const res = await fetch("/api/wawancara", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history, mode }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMsgs((m) => [...m, { role: "bot", text: data.error || "Terjadi kesalahan.", err: true }]);
      } else {
        setMsgs((m) => [...m, { role: "bot", text: data.reply }]);
      }
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: "Tidak dapat menghubungi server.", err: true }]);
    } finally {
      setBusy(false);
    }
  }

  async function start() {
    setStarted(true);
    await talk("__MULAI__", false);
  }
  function sendAnswer() {
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    talk(q, true);
  }
  function evaluate() {
    if (busy) return;
    setEnded(true);
    talk("__EVALUASI__", false);
  }
  function restart() {
    setMsgs([]);
    setEnded(false);
    setStarted(false);
  }

  if (!started) {
    return (
      <div className="card pad">
        <div className="eyebrow">{eyebrow}</div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, margin: "6px 0 10px" }}>
          {title}
        </h3>
        <p className="section-desc">{intro}</p>
        <ul className="tips" style={{ margin: "14px 0" }}>
          {tips.map((t, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
          ))}
        </ul>
        <button className="btn gold" onClick={start}>🎤 Mulai wawancara</button>
        <div className="note"><span>ℹ️</span><span>Membutuhkan GEMINI_API_KEY di server.</span></div>
      </div>
    );
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
            <span className="typing"><i /><i /><i /></span>
          </div>
        )}
      </div>

      {!ended ? (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
            <button className="btn ghost sm" onClick={evaluate} disabled={busy || msgs.length < 2}>
              Akhiri & minta evaluasi
            </button>
          </div>
          <div className="chat-input">
            <textarea
              rows={1}
              value={input}
              placeholder="Ketik jawabanmu…"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendAnswer();
                }
              }}
            />
            <button className="btn gold" onClick={sendAnswer} disabled={busy || !input.trim()}>
              Kirim
            </button>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 12 }}>
          <button className="btn gold" onClick={restart}>Wawancara lagi</button>
        </div>
      )}
    </div>
  );
}
