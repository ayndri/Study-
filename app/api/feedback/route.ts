import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";
import { saveEssay } from "@/lib/db";

export const runtime = "nodejs";

const SYSTEM = `Kamu adalah penilai esai bahasa Inggris berpengalaman untuk persiapan TOEFL/beasiswa LPDP.
Nilai esai pengguna terhadap prompt yang diberikan. Balas HANYA dalam JSON valid (tanpa markdown, tanpa teks lain)
dengan skema persis:
{
  "overall": number (0-100),
  "band": string (mis. "Baik", "Cukup", "Perlu perbaikan"),
  "scores": [
    {"criterion":"Menjawab prompt","score":number 0-10,"comment":"..."},
    {"criterion":"Organisasi & struktur","score":number 0-10,"comment":"..."},
    {"criterion":"Tata bahasa","score":number 0-10,"comment":"..."},
    {"criterion":"Kosakata","score":number 0-10,"comment":"..."}
  ],
  "strengths": [string, string],
  "improvements": [string, string, string],
  "revised_opening": string (contoh paragraf pembuka yang diperbaiki, 2-3 kalimat)
}
Semua komentar dan saran ditulis dalam Bahasa Indonesia yang membangun dan spesifik.`;

function extractJson(text: string): unknown {
  const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Tidak ada JSON pada respons.");
  return JSON.parse(cleaned.slice(start, end + 1));
}

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Fitur AI belum aktif. Set GEMINI_API_KEY di file .env untuk mengaktifkan koreksi otomatis." },
      { status: 503 }
    );
  }
  try {
    const { prompt, content, clientId } = await req.json();
    if (!content || typeof content !== "string" || content.trim().length < 20) {
      return NextResponse.json({ ok: false, error: "Esai terlalu pendek." }, { status: 400 });
    }
    const model = getModel(SYSTEM);
    if (!model) throw new Error("Model tidak tersedia.");

    const result = await model.generateContent(
      `PROMPT ESAI:\n${prompt || "(umum)"}\n\nESAI PENGGUNA:\n${content}`
    );
    const feedback = extractJson(result.response.text());

    const overall =
      typeof (feedback as { overall?: number }).overall === "number"
        ? (feedback as { overall: number }).overall
        : null;

    // Simpan ke Neon jika tersedia (best-effort).
    try {
      if (clientId) await saveEssay(String(clientId), prompt || "", content, overall, feedback);
    } catch {
      /* DB opsional */
    }

    return NextResponse.json({ ok: true, feedback });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal menganalisis esai: " + msg }, { status: 500 });
  }
}
