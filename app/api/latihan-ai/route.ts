import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEMS: Record<string, string> = {
  toefl: `Kamu pembuat soal TOEFL ITP untuk pelajar Indonesia. Buat soal pilihan ganda bergaya TOEFL ITP asli
(Structure & Written Expression, Reading, atau kosakata sesuai topik yang diminta). Batang soal & pilihan
JAWABAN dalam bahasa Inggris; PEMBAHASAN (explain) dalam Bahasa Indonesia yang singkat & jelas.`,
  flutter: `Kamu pembuat soal untuk belajar Flutter & Dart (pemula–menengah) berbahasa Indonesia. Buat soal
pilihan ganda tentang konsep Flutter/Dart sesuai topik. Batang soal, pilihan, dan pembahasan dalam Bahasa
Indonesia. Boleh sertakan potongan kode singkat sebagai teks biasa (tanpa HTML).`,
  golang: `Kamu pembuat soal untuk belajar Go (Golang) (pemula–menengah) berbahasa Indonesia. Buat soal
pilihan ganda tentang konsep Go sesuai topik. Batang soal, pilihan, dan pembahasan dalam Bahasa Indonesia.
Boleh sertakan potongan kode singkat sebagai teks biasa (tanpa HTML).`,
};

const esc = (s: string) => String(s).replace(/</g, "&lt;").replace(/>/g, "&gt;");

type RawQ = { q?: unknown; options?: unknown; answer?: unknown; explain?: unknown };

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Fitur AI belum aktif. Set GEMINI_API_KEY di server." },
      { status: 503 }
    );
  }
  try {
    const body = await req.json();
    const subject = String(body.subject || "toefl");
    const topic = String(body.topic || "campuran").slice(0, 120);
    const level = ["mudah", "sedang", "sulit"].includes(body.level) ? body.level : "sedang";
    const count = Math.min(Math.max(Number(body.count) || 5, 3), 10);

    const model = getModel(SYSTEMS[subject] || SYSTEMS.toefl);
    if (!model) throw new Error("Model tidak tersedia.");

    const prompt =
      `Buat TEPAT ${count} soal pilihan ganda dengan tingkat kesulitan "${level}" untuk topik: "${topic}".\n` +
      `Balas HANYA berupa JSON array valid, tanpa penjelasan lain, tanpa markdown, dengan bentuk:\n` +
      `[{"q":"pertanyaan","options":["A","B","C","D"],"answer":0,"explain":"alasan singkat"}]\n` +
      `Aturan: tiap soal WAJIB 4 pilihan; "answer" = indeks (0-3) pilihan yang BENAR; jangan menomori pilihan; ` +
      `jangan memakai tag HTML; variasikan posisi jawaban benar; soal harus jelas & hanya satu jawaban benar.`;

    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();
    // Bersihkan pembungkus markdown & ambil array JSON-nya.
    text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    const start = text.indexOf("[");
    const end = text.lastIndexOf("]");
    if (start !== -1 && end !== -1) text = text.slice(start, end + 1);

    let parsed: RawQ[];
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("AI mengembalikan format tak terbaca. Coba lagi.");
    }
    if (!Array.isArray(parsed)) throw new Error("Format soal tidak valid.");

    const questions = parsed
      .filter(
        (q): q is Required<RawQ> =>
          typeof q.q === "string" &&
          Array.isArray(q.options) &&
          q.options.length >= 3 &&
          q.options.every((o) => typeof o === "string") &&
          typeof q.answer === "number" &&
          q.answer >= 0 &&
          (q.answer as number) < (q.options as string[]).length
      )
      .slice(0, count)
      .map((q) => ({
        q: esc(q.q as string),
        options: (q.options as string[]).map((o) => String(o)),
        answer: q.answer as number,
        explain: typeof q.explain === "string" ? (q.explain as string) : "",
        level,
      }));

    if (!questions.length) throw new Error("Tidak ada soal valid yang dihasilkan. Coba topik lain.");

    return NextResponse.json({ ok: true, questions });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal membuat soal: " + msg }, { status: 500 });
  }
}
