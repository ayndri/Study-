import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEMS: Record<string, string> = {
  toefl: `Kamu tutor TOEFL ITP yang ramah untuk pelajar Indonesia.
Diberikan sebuah soal pilihan ganda, jawaban yang BENAR, dan (bila ada) jawaban PENGGUNA.
Jelaskan dalam Bahasa Indonesia, singkat dan jelas (maks ~120 kata):
1) Mengapa jawaban yang benar itu tepat (sebut aturan tata bahasa / strateginya).
2) Bila jawaban pengguna salah, jelaskan singkat kenapa keliru.
Gunakan bahasa sederhana dan, bila membantu, satu contoh tambahan. Jangan memakai markdown/heading; tulis sebagai paragraf pendek biasa.`,
  flutter: `Kamu mentor Flutter & Dart yang ramah untuk pemula Indonesia.
Diberikan sebuah soal pilihan ganda tentang Flutter/Dart, jawaban yang BENAR, dan (bila ada) jawaban PENGGUNA.
Jelaskan dalam Bahasa Indonesia, singkat dan jelas (maks ~120 kata): mengapa jawaban benar itu tepat (konsep/aturannya), dan bila jawaban pengguna salah kenapa keliru. Boleh sertakan potongan kode Dart singkat bila membantu. Tulis sebagai paragraf pendek biasa.`,
};

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Fitur AI belum aktif (GEMINI_API_KEY belum diisi)." },
      { status: 503 }
    );
  }
  try {
    const { question, options, answer, userAnswer, subject } = await req.json();
    if (!question || !Array.isArray(options)) {
      return NextResponse.json({ ok: false, error: "Data soal tidak lengkap." }, { status: 400 });
    }
    const L = ["A", "B", "C", "D", "E"];
    const opts = options.map((o: string, i: number) => `${L[i]}. ${o}`).join("\n");
    const correctTxt = `${L[answer]}. ${options[answer]}`;
    const userTxt =
      typeof userAnswer === "number" && userAnswer >= 0 ? `${L[userAnswer]}. ${options[userAnswer]}` : "(tidak menjawab)";

    const model = getModel(SYSTEMS[subject as string] || SYSTEMS.toefl);
    if (!model) throw new Error("Model tidak tersedia.");
    const result = await model.generateContent(
      `SOAL: ${question}\n\nPILIHAN:\n${opts}\n\nJAWABAN BENAR: ${correctTxt}\nJAWABAN PENGGUNA: ${userTxt}`
    );
    return NextResponse.json({ ok: true, text: result.response.text().trim() });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal menjelaskan: " + msg }, { status: 500 });
  }
}
