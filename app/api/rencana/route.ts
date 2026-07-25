import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEM = `Kamu perencana belajar TOEFL ITP & persiapan beasiswa LPDP untuk pelajar Indonesia.
Susun rencana belajar MINGGUAN yang realistis dan spesifik menuju target skor, dengan mempertimbangkan
skor sekarang, waktu tersisa, jam belajar per minggu, dan area yang ingin difokuskan
(Listening, Structure & Written Expression, Reading, Writing/esai, Vocabulary).
Kaitkan tugas dengan aktivitas yang tersedia di aplikasi ini: membaca Materi, mengerjakan Latihan
(Listening/Structure/Reading), Latihan Soal AI, Vocabulary (flashcard), Simulasi Tes berwaktu,
koreksi esai (Writing), dan Simulasi Wawancara LPDP.
Bahasa Indonesia, tugas singkat & actionable (ada kata kerja + target terukur).`;

type RawWeek = { label?: unknown; focus?: unknown; tasks?: unknown };

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Fitur AI belum aktif. Set GEMINI_API_KEY di server." },
      { status: 503 }
    );
  }
  try {
    const b = await req.json();
    const current = String(b.currentScore || "belum tahu").slice(0, 40);
    const target = String(b.targetScore || "550").slice(0, 40);
    const testDate = String(b.testDate || "").slice(0, 40);
    const hours = Math.min(Math.max(Number(b.hoursPerWeek) || 8, 1), 60);
    const weeks = Math.min(Math.max(Number(b.weeks) || 8, 1), 16);
    const focus = Array.isArray(b.focus) ? b.focus.map(String).slice(0, 6).join(", ") : "semua bagian";

    const model = getModel(SYSTEM);
    if (!model) throw new Error("Model tidak tersedia.");

    const prompt =
      `Data pengguna:\n` +
      `- Skor TOEFL ITP sekarang: ${current}\n` +
      `- Target skor: ${target}\n` +
      `- Perkiraan tanggal tes: ${testDate || "belum ditentukan"}\n` +
      `- Jumlah minggu tersedia: ${weeks}\n` +
      `- Jam belajar per minggu: ${hours}\n` +
      `- Fokus: ${focus}\n\n` +
      `Buat rencana untuk ${weeks} minggu. Balas HANYA JSON valid tanpa markdown, bentuk:\n` +
      `{"weeks":[{"label":"Minggu 1","focus":"fokus utama minggu ini","tasks":["tugas 1","tugas 2","tugas 3"]}],"tips":["tips 1","tips 2","tips 3"]}\n` +
      `Aturan: tepat ${weeks} objek di "weeks"; tiap minggu 3-5 tugas konkret; sertakan 3-5 "tips"; tanpa HTML.`;

    const result = await model.generateContent(prompt);
    let text = result.response.text().trim();
    text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start !== -1 && end !== -1) text = text.slice(start, end + 1);

    let parsed: { weeks?: RawWeek[]; tips?: unknown };
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("AI mengembalikan format tak terbaca. Coba lagi.");
    }

    const cleanWeeks = (Array.isArray(parsed.weeks) ? parsed.weeks : [])
      .filter((w) => Array.isArray(w.tasks))
      .map((w, i) => ({
        label: typeof w.label === "string" ? w.label : `Minggu ${i + 1}`,
        focus: typeof w.focus === "string" ? w.focus : "",
        tasks: (w.tasks as unknown[]).map(String).filter((t) => t.trim()).slice(0, 6),
      }))
      .filter((w) => w.tasks.length > 0);

    const tips = (Array.isArray(parsed.tips) ? parsed.tips : []).map(String).filter((t) => t.trim()).slice(0, 6);

    if (!cleanWeeks.length) throw new Error("Rencana kosong. Coba lagi.");

    return NextResponse.json({ ok: true, plan: { weeks: cleanWeeks, tips } });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal menyusun rencana: " + msg }, { status: 500 });
  }
}
