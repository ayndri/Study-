import Link from "next/link";
import { NEST_LESSONS } from "@/lib/nestjs";

export default function NestHome() {
  const total = NEST_LESSONS.length;
  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Jalur belajar</div>
        <h1>Bangun backend modern dengan NestJS.</h1>
        <p>
          Belajar NestJS (framework Node.js berbasis TypeScript) dari nol lewat {total} materi bertahap: fondasi
          TypeScript, module &amp; dependency injection, REST API, validasi, database (TypeORM), autentikasi JWT,
          hingga testing &amp; deploy. Dilengkapi tutor AI, kuis, dan review kode otomatis.
        </p>
        <div className="cta-row">
          <Link href="/nestjs/materi" className="btn gold">Mulai materi →</Link>
          <Link href="/nestjs/latihan" className="btn ghost">Coba review kode AI</Link>
        </div>
        <div className="goal">{"@"}</div>
      </div>

      <div className="grid g3" style={{ marginTop: 20 }}>
        <Link href="/nestjs/materi" className="card pad nav-card">
          <div className="cat-ic">▥</div>
          <h3>Materi</h3>
          <p>{total} pelajaran NestJS + Perdalam dengan AI &amp; mini-quiz.</p>
        </Link>
        <Link href="/nestjs/tutor" className="card pad nav-card">
          <div className="cat-ic">✦</div>
          <h3>Tutor AI</h3>
          <p>Tanya apa saja soal NestJS/TypeScript, dijawab dengan contoh kode.</p>
        </Link>
        <Link href="/nestjs/latihan" className="card pad nav-card">
          <div className="cat-ic">⌨</div>
          <h3>Latihan Koding</h3>
          <p>Tulis kode NestJS/TypeScript, minta AI menilai, menemukan bug, &amp; memperbaiki.</p>
        </Link>
      </div>

      <div className="card pad" style={{ marginTop: 20 }}>
        <div className="eyebrow">Alur belajar yang disarankan</div>
        <ul className="tips" style={{ marginTop: 12 }}>
          <li><b>1. Mulai dari Nol</b> — pahami NestJS, setup, dan Nest CLI.</li>
          <li><b>2. Fondasi TS/Node</b> — TypeScript, decorator, async/await.</li>
          <li><b>3. Konsep Inti</b> — Module, Controller, Service, Dependency Injection.</li>
          <li><b>4. Menangani Request</b> — routing, DTO &amp; validasi, Pipes.</li>
          <li><b>5. Database</b> — TypeORM, Entity &amp; Repository, CRUD.</li>
          <li><b>6. Lanjutan &amp; Praktik</b> — Guards/JWT, Interceptors, testing, deploy.</li>
        </ul>
      </div>
    </div>
  );
}
