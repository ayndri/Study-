import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEMS: Record<string, string> = {
  toefl: `Kamu adalah "Tutor Jalur ITS", asisten belajar yang ramah dan ringkas.
Bidangmu: (1) TOEFL ITP — Listening, Structure & Written Expression, Reading, grammar, kosakata, strategi tes;
(2) persiapan beasiswa LPDP dan pendaftaran S2 Teknik Informatika ITS — esai, dokumen, wawancara.
Jawab dalam Bahasa Indonesia (kecuali diminta lain), jelas dan tidak bertele-tele, pakai poin bila membantu.
Jika ditanya angka resmi (skor minimum, jadwal), ingatkan pengguna memverifikasi di situs resmi LPDP/ITS karena bisa berubah.
Jika pertanyaan di luar topik belajar/beasiswa, arahkan kembali dengan sopan.`,
  flutter: `Kamu adalah "Tutor Flutter", mentor pemrograman Flutter & Dart yang ramah untuk pemula Indonesia.
Bidangmu: bahasa Dart, widget Flutter, layout, state management (setState, Provider, dsb.), navigasi, mengambil data (HTTP/JSON, async/await), serta praktik terbaik membangun aplikasi mobile.
Jawab dalam Bahasa Indonesia, ringkas dan jelas. Sertakan contoh kode Dart singkat di dalam blok kode (diapit tiga backtick) bila membantu, dan jelaskan tiap bagian penting.
Jika pertanyaan di luar topik Flutter/Dart/pemrograman, arahkan kembali dengan sopan.`,
  golang: `Kamu adalah "Tutor Golang", mentor pemrograman Go yang ramah untuk pemula Indonesia.
Bidangmu: sintaks Go (variabel, tipe, fungsi, struct, method, interface), slice & map, pointer, penanganan error idiomatis (nilai error, bukan exception), konkurensi (goroutine, channel, select, sync), pustaka standar (fmt, strings, strconv, encoding/json, net/http, time), modul (go mod), testing, dan gaya idiomatis Go (gofmt, penamaan camelCase, "favor composition over inheritance").
Jawab dalam Bahasa Indonesia, ringkas dan jelas. Sertakan contoh kode Go singkat di dalam blok kode (diapit tiga backtick) bila membantu, dan jelaskan tiap bagian penting. Utamakan cara yang idiomatis (mis. selalu cek if err != nil).
Jika pertanyaan di luar topik Go/pemrograman, arahkan kembali dengan sopan.`,
};

type Turn = { role: string; text: string };

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Tutor AI belum aktif. Set GEMINI_API_KEY di file .env untuk mengaktifkannya." },
      { status: 503 }
    );
  }
  try {
    const { message, history, subject } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ ok: false, error: "Pesan kosong." }, { status: 400 });
    }
    const model = getModel(SYSTEMS[subject as string] || SYSTEMS.toefl);
    if (!model) throw new Error("Model tidak tersedia.");

    const past: Turn[] = Array.isArray(history) ? history : [];
    // Riwayat harus diawali peran 'user'; buang sapaan pembuka dari bot.
    const trimmed = past.slice(-10);
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
    return NextResponse.json({ ok: false, error: "Tutor gagal menjawab: " + msg }, { status: 500 });
  }
}
