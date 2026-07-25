import Link from "next/link";
import { PM_LESSONS } from "@/lib/pm";

export default function PmHome() {
  const total = PM_LESSONS.length;
  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Jalur belajar</div>
        <h1>Jadi Project Manager yang andal.</h1>
        <p>
          Belajar manajemen proyek dari nol lewat {total} materi bertahap: peran PM, siklus hidup proyek,
          metodologi (Waterfall, Agile, Scrum, Kanban), perencanaan &amp; penjadwalan, manajemen risiko &amp;
          stakeholder, hingga alat dan sertifikasi. Dilengkapi tutor AI dan latihan soal AI.
        </p>
        <div className="cta-row">
          <Link href="/pm/materi" className="btn gold">Mulai materi →</Link>
          <Link href="/latihan-ai" className="btn ghost">Latihan soal AI</Link>
        </div>
        <div className="goal">{"✔"}</div>
      </div>

      <div className="grid g3" style={{ marginTop: 20 }}>
        <Link href="/pm/materi" className="card pad nav-card">
          <div className="cat-ic">▥</div>
          <h3>Materi</h3>
          <p>{total} pelajaran manajemen proyek + Perdalam dengan AI &amp; mini-quiz.</p>
        </Link>
        <Link href="/pm/tutor" className="card pad nav-card">
          <div className="cat-ic">✦</div>
          <h3>Tutor AI</h3>
          <p>Tanya apa saja soal manajemen proyek, Agile, atau Scrum.</p>
        </Link>
        <Link href="/latihan-ai" className="card pad nav-card">
          <div className="cat-ic">◉</div>
          <h3>Latihan Soal AI</h3>
          <p>Uji pemahaman dengan soal manajemen proyek yang dibuat AI.</p>
        </Link>
      </div>

      <div className="card pad" style={{ marginTop: 20 }}>
        <div className="eyebrow">Alur belajar yang disarankan</div>
        <ul className="tips" style={{ marginTop: 12 }}>
          <li><b>1. Dasar</b> — pahami apa itu proyek, peran PM, dan triple constraint.</li>
          <li><b>2. Siklus Hidup Proyek</b> — inisiasi hingga penutupan.</li>
          <li><b>3. Metodologi</b> — Waterfall vs Agile, Scrum, Kanban.</li>
          <li><b>4. Scrum Mendalam</b> — peran, event, artefak, user story.</li>
          <li><b>5. Perencanaan</b> — scope/WBS, jadwal, anggaran, kualitas.</li>
          <li><b>6. Risiko, Alat &amp; Karier</b> — risiko, stakeholder, tools, sertifikasi.</li>
        </ul>
      </div>
    </div>
  );
}
