import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEM = `Kamu adalah panel pewawancara beasiswa LPDP yang mewawancarai kandidat untuk Program Magister (S2) Teknik Informatika ITS.
Karakter: profesional, tegas namun sopan, menggali lebih dalam.

ATURAN WAWANCARA:
- Ajukan HANYA SATU pertanyaan pada satu waktu, dalam Bahasa Indonesia.
- Setelah kandidat menjawab, beri umpan balik SINGKAT (2–3 kalimat: apa yang baik + apa yang bisa diperkuat), lalu ajukan SATU pertanyaan lanjutan yang menggali lebih dalam berdasarkan jawaban mereka.
- Cakupan sepanjang sesi (±7–8 pertanyaan): perkenalan diri, alasan memilih S2 Teknik Informatika ITS, rencana kontribusi konkret bagi Indonesia, komitmen kembali, rencana studi/topik riset, kepemimpinan/pengalaman, kelemahan, dan kesiapan.
- Jangan menjawab pertanyaanmu sendiri. Jangan membuat daftar semua pertanyaan sekaligus.

PERINTAH KHUSUS:
- Jika pesan kandidat adalah "__MULAI__": sapa singkat, jelaskan sesi akan berlangsung santai, lalu ajukan pertanyaan pertama (perkenalan diri).
- Jika pesan kandidat adalah "__EVALUASI__": hentikan wawancara dan berikan EVALUASI keseluruhan dalam format:
  Skor: X/100
  Kekuatan: (2–3 poin)
  Area perbaikan: (2–3 poin)
  Saran konkret: (2–3 poin)`;

type Turn = { role: string; text: string };

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Simulator AI belum aktif. Set GEMINI_API_KEY di file .env untuk mengaktifkannya." },
      { status: 503 }
    );
  }
  try {
    const { message, history } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ ok: false, error: "Pesan kosong." }, { status: 400 });
    }
    const model = getModel(SYSTEM);
    if (!model) throw new Error("Model tidak tersedia.");

    const past: Turn[] = Array.isArray(history) ? history : [];
    const trimmed = past.slice(-12);
    while (trimmed.length && trimmed[0].role !== "user") trimmed.shift();

    const chat = model.startChat({
      history: trimmed.map((t) => ({
        role: t.role === "user" ? "user" : "model",
        parts: [{ text: t.text }],
      })),
    });
    const result = await chat.sendMessage(message);
    return NextResponse.json({ ok: true, reply: result.response.text() });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal memproses: " + msg }, { status: 500 });
  }
}
