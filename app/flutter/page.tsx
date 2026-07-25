import Link from "next/link";
import { FLUTTER_LESSONS } from "@/lib/flutter";

export default function FlutterHome() {
  const total = FLUTTER_LESSONS.length;
  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Jalur belajar</div>
        <h1>Bangun aplikasi mobile pertamamu dengan Flutter.</h1>
        <p>
          Belajar Dart &amp; Flutter dari nol lewat {total} materi bertahap, dibantu tutor AI, kuis interaktif, dan
          review kode otomatis. Cocok untuk pemula yang belum pernah coding.
        </p>
        <div className="cta-row">
          <Link href="/flutter/materi" className="btn gold">Mulai materi →</Link>
          <Link href="/flutter/latihan" className="btn ghost">Coba review kode AI</Link>
        </div>
        <div className="goal">{"</>"}</div>
      </div>

      <div className="grid g3" style={{ marginTop: 20 }}>
        <Link href="/flutter/materi" className="card pad nav-card">
          <div className="cat-ic">▥</div>
          <h3>Materi</h3>
          <p>{total} pelajaran Dart &amp; Flutter + Perdalam dengan AI &amp; mini-quiz.</p>
        </Link>
        <Link href="/flutter/tutor" className="card pad nav-card">
          <div className="cat-ic">✦</div>
          <h3>Tutor AI</h3>
          <p>Tanya apa saja soal Flutter/Dart, dijawab dengan contoh kode.</p>
        </Link>
        <Link href="/flutter/latihan" className="card pad nav-card">
          <div className="cat-ic">⌨</div>
          <h3>Latihan Koding</h3>
          <p>Tulis kode Dart, minta AI menilai, menemukan bug, &amp; memperbaiki.</p>
        </Link>
      </div>

      <div className="card pad" style={{ marginTop: 20 }}>
        <div className="eyebrow">Alur belajar yang disarankan</div>
        <ul className="tips" style={{ marginTop: 12 }}>
          <li><b>1. Mulai dari Nol</b> — pahami Flutter &amp; jalankan program pertama.</li>
          <li><b>2. Bahasa Dart</b> — variabel, fungsi, class, null safety.</li>
          <li><b>3. Widget &amp; Layout</b> — susun tampilan.</li>
          <li><b>4. State &amp; Interaksi</b> — buat aplikasi yang hidup (setState).</li>
          <li><b>5. Navigasi &amp; Data</b> — banyak halaman &amp; ambil data dari internet.</li>
        </ul>
      </div>
    </div>
  );
}
