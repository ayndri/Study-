import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const BASE = (bahasa: string) => `Kamu reviewer kode ${bahasa} yang ramah untuk pelajar Indonesia PEMULA.
Diberikan sebuah TUGAS (opsional) dan KODE dari pengguna. Tinjau kodenya dan balas dalam Bahasa Indonesia dengan bagian:
- Penilaian singkat: apakah kode kemungkinan berjalan & sesuai tujuan.
- Yang sudah baik (poin).
- Masalah / bug / perbaikan (poin, jelaskan penyebabnya).
- Versi kode yang diperbaiki di dalam <pre><code> ... </code></pre>.
Bersikap membangun dan spesifik. Output HARUS HTML sederhana dan HANYA memakai tag: <h4>, <p>, <ul>, <li>, <b>, <i>, <pre>, <code>. Tanpa atribut, tanpa markdown fences.`;

const SYSTEMS: Record<string, string> = {
  flutter: BASE("Flutter & Dart"),
  golang: BASE("Go (Golang), dengan gaya idiomatis Go (error sebagai nilai, gofmt, penamaan camelCase)"),
  nestjs: BASE("NestJS & TypeScript, dengan gaya idiomatis Nest (decorator, module/controller/service, dependency injection, DTO & validasi)"),
};

const ALLOWED = /<(?!\/?(h4|p|ul|li|b|i|pre|code)\b)[^>]*>/gi;

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json({ ok: false, error: "Fitur AI belum aktif (GEMINI_API_KEY belum diisi)." }, { status: 503 });
  }
  try {
    const { code, task, subject } = await req.json();
    if (!code || typeof code !== "string" || code.trim().length < 10) {
      return NextResponse.json({ ok: false, error: "Tempel kode-mu dulu (minimal beberapa baris)." }, { status: 400 });
    }
    const model = getModel(SYSTEMS[subject as string] || SYSTEMS.flutter);
    if (!model) throw new Error("Model tidak tersedia.");
    const result = await model.generateContent(`TUGAS: ${task || "(bebas)"}\n\nKODE:\n${code}`);
    let html = result.response.text().trim();
    html = html.replace(/```html/gi, "").replace(/```/g, "").replace(ALLOWED, "");
    return NextResponse.json({ ok: true, html });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal mereview: " + msg }, { status: 500 });
  }
}
