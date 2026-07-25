import Link from "next/link";
import { GO_LESSONS } from "@/lib/golang";

export default function GolangHome() {
  const total = GO_LESSONS.length;
  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Jalur belajar</div>
        <h1>Kuasai Go — bahasa backend yang sederhana &amp; cepat.</h1>
        <p>
          Belajar Golang dari nol lewat {total} materi bertahap: dari sintaks dasar, struct &amp; interface, hingga
          konkurensi (goroutine &amp; channel) dan membuat REST API. Dilengkapi tutor AI, kuis, dan review kode otomatis.
        </p>
        <div className="cta-row">
          <Link href="/golang/materi" className="btn gold">Mulai materi →</Link>
          <Link href="/golang/latihan" className="btn ghost">Coba review kode AI</Link>
        </div>
        <div className="goal">{"{ }"}</div>
      </div>

      <div className="grid g3" style={{ marginTop: 20 }}>
        <Link href="/golang/materi" className="card pad nav-card">
          <div className="cat-ic">▥</div>
          <h3>Materi</h3>
          <p>{total} pelajaran Go + Perdalam dengan AI &amp; mini-quiz.</p>
        </Link>
        <Link href="/golang/tutor" className="card pad nav-card">
          <div className="cat-ic">✦</div>
          <h3>Tutor AI</h3>
          <p>Tanya apa saja soal Go, dijawab dengan contoh kode.</p>
        </Link>
        <Link href="/golang/latihan" className="card pad nav-card">
          <div className="cat-ic">⌨</div>
          <h3>Latihan Koding</h3>
          <p>Tulis kode Go, minta AI menilai, menemukan bug, &amp; memperbaiki.</p>
        </Link>
      </div>

      <div className="card pad" style={{ marginTop: 20 }}>
        <div className="eyebrow">Alur belajar yang disarankan</div>
        <ul className="tips" style={{ marginTop: 12 }}>
          <li><b>1. Mulai dari Nol</b> — pahami Go, jalankan program pertama, kenali go mod.</li>
          <li><b>2. Dasar Bahasa</b> — variabel, tipe, konstanta, operator.</li>
          <li><b>3. Kontrol &amp; Fungsi</b> — if/switch, for, fungsi &amp; multiple return.</li>
          <li><b>4. Struktur Data &amp; Interface</b> — slice, map, struct, method, interface.</li>
          <li><b>5. Konkurensi</b> — goroutine, channel, select, sync.</li>
          <li><b>6. Web &amp; Praktik</b> — REST API, package, testing, tooling.</li>
        </ul>
      </div>
    </div>
  );
}
