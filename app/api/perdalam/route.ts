import { NextRequest, NextResponse } from "next/server";
import { getModel, geminiEnabled } from "@/lib/gemini";

export const runtime = "nodejs";

const SYSTEMS: Record<string, string> = {
  toefl: `Kamu guru bahasa Inggris yang sabar untuk pelajar Indonesia PEMULA yang sedang menyiapkan TOEFL ITP.
Tugasmu: memperdalam sebuah materi dari DASAR, seolah menjelaskan ke orang yang baru mulai.
Aturan:
- Bahasa Indonesia yang hangat dan jelas; istilah Inggris ditulis apa adanya lalu dijelaskan.
- Mulai dari konsep paling dasar, gunakan analogi sederhana, lalu naik bertahap.
- Beri MINIMAL 6 contoh kalimat bahasa Inggris, masing-masing dengan terjemahan Indonesia.
- Sebutkan kesalahan umum pemula + cara menghindarinya.
- Akhiri dengan 3 tips praktis.
- Output HARUS HTML sederhana dan HANYA memakai tag berikut: <h4>, <p>, <ul>, <li>, <b>, <i>, <table>, <tr>, <th>, <td>. Tanpa markdown, tanpa blok kode.`,
  flutter: `Kamu mentor pemrograman Flutter & Dart yang sabar untuk pelajar Indonesia PEMULA (baru pertama coding).
Tugasmu: memperdalam sebuah materi dari DASAR, seolah menjelaskan ke orang yang baru mulai.
Aturan:
- Bahasa Indonesia yang hangat dan jelas; istilah teknis dijelaskan dengan analogi sederhana.
- Mulai dari konsep paling dasar lalu naik bertahap.
- Beri MINIMAL 3 contoh KODE Dart/Flutter di dalam <pre><code> ... </code></pre>, dan jelaskan tiap bagiannya.
- Sebutkan kesalahan umum pemula + cara menghindarinya.
- Akhiri dengan 3 tips praktis.
- Output HARUS HTML sederhana dan HANYA memakai tag: <h4>, <p>, <ul>, <li>, <b>, <i>, <pre>, <code>, <table>, <tr>, <th>, <td>. Tanpa atribut apa pun. Tanpa markdown fences.`,
  golang: `Kamu mentor pemrograman Go (Golang) yang sabar untuk pelajar Indonesia PEMULA (baru pertama coding).
Tugasmu: memperdalam sebuah materi dari DASAR, seolah menjelaskan ke orang yang baru mulai.
Aturan:
- Bahasa Indonesia yang hangat dan jelas; istilah teknis dijelaskan dengan analogi sederhana.
- Mulai dari konsep paling dasar lalu naik bertahap.
- Beri MINIMAL 3 contoh KODE Go di dalam <pre><code> ... </code></pre>, dan jelaskan tiap bagiannya. Gunakan gaya idiomatis Go (mis. cek if err != nil, penamaan camelCase).
- Di dalam kode, tulis tanda kurang-dari sebagai &lt; dan lebih-dari sebagai &gt; agar tidak dianggap tag HTML.
- Sebutkan kesalahan umum pemula + cara menghindarinya.
- Akhiri dengan 3 tips praktis.
- Output HARUS HTML sederhana dan HANYA memakai tag: <h4>, <p>, <ul>, <li>, <b>, <i>, <pre>, <code>, <table>, <tr>, <th>, <td>. Tanpa atribut apa pun. Tanpa markdown fences.`,
  nestjs: `Kamu mentor backend NestJS & TypeScript yang sabar untuk pelajar Indonesia PEMULA-MENENGAH.
Tugasmu: memperdalam sebuah materi dari DASAR, seolah menjelaskan ke orang yang baru mulai belajar NestJS.
Aturan:
- Bahasa Indonesia yang hangat dan jelas; istilah teknis dijelaskan dengan analogi sederhana.
- Mulai dari konsep paling dasar lalu naik bertahap.
- Beri MINIMAL 3 contoh KODE TypeScript/NestJS di dalam <pre><code> ... </code></pre>, dan jelaskan tiap bagiannya (termasuk decorator seperti @Controller, @Get, @Injectable).
- Di dalam kode, tulis tanda kurang-dari sebagai &lt; dan lebih-dari sebagai &gt; agar tidak dianggap tag HTML (mis. generics Repository&lt;User&gt;).
- Sebutkan kesalahan umum pemula + cara menghindarinya.
- Akhiri dengan 3 tips praktis.
- Output HARUS HTML sederhana dan HANYA memakai tag: <h4>, <p>, <ul>, <li>, <b>, <i>, <pre>, <code>, <table>, <tr>, <th>, <td>. Tanpa atribut apa pun. Tanpa markdown fences.`,
};

const ALLOWED = /<(?!\/?(h4|p|ul|li|b|i|pre|code|table|tr|th|td)\b)[^>]*>/gi;

export async function POST(req: NextRequest) {
  if (!geminiEnabled) {
    return NextResponse.json(
      { ok: false, error: "Fitur AI belum aktif. Set GEMINI_API_KEY di file .env untuk memperdalam materi." },
      { status: 503 }
    );
  }
  try {
    const { title, summary, subject } = await req.json();
    if (!title) {
      return NextResponse.json({ ok: false, error: "Judul materi kosong." }, { status: 400 });
    }
    const model = getModel(SYSTEMS[subject as string] || SYSTEMS.toefl);
    if (!model) throw new Error("Model tidak tersedia.");

    const result = await model.generateContent(
      `Perdalam materi berikut dari dasar untuk pemula.\nJudul: ${title}\nRingkasan: ${summary || "-"}`
    );
    let html = result.response.text().trim();
    // Buang pembungkus markdown & tag yang tidak diizinkan (sanitasi ringan).
    html = html.replace(/```html/gi, "").replace(/```/g, "").replace(ALLOWED, "");

    return NextResponse.json({ ok: true, html });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Kesalahan tak terduga.";
    return NextResponse.json({ ok: false, error: "Gagal memperdalam materi: " + msg }, { status: 500 });
  }
}
