import Link from "next/link";

const TRACKS = [
  {
    href: "/",
    ic: "🎓",
    title: "TOEFL ITP & Beasiswa LPDP",
    desc: "Belajar TOEFL ITP (Listening, Structure, Reading, Writing) + persiapan beasiswa LPDP menuju S2 Teknik Informatika ITS.",
    tags: ["Materi + AI", "Simulasi Tes", "Wawancara AI"],
    ready: true,
  },
  {
    href: "/flutter",
    ic: "📱",
    title: "Mobile dengan Flutter",
    desc: "Bangun aplikasi mobile dari nol dengan Dart & Flutter. Materi bertahap, tutor AI, kuis, dan review kode oleh AI.",
    tags: ["Materi + AI", "Tutor AI", "Review Kode AI"],
    ready: true,
  },
  {
    href: "/golang",
    ic: "🐹",
    title: "Belajar Golang (Go)",
    desc: "Kuasai Go dari dasar hingga konkurensi & REST API: sintaks, struct & interface, goroutine & channel. Materi bertahap, tutor AI, kuis, dan review kode oleh AI.",
    tags: ["Materi + AI", "Tutor AI", "Review Kode AI"],
    ready: true,
  },
  {
    href: "#",
    ic: "✨",
    title: "Pembelajaran lain",
    desc: "Jalur belajar baru akan ditambahkan di sini. Punya usulan topik? Sampaikan ke pengelola.",
    tags: ["Segera hadir"],
    ready: false,
  },
];

export default function PilihPage() {
  return (
    <div>
      <div className="eyebrow">Pusat pembelajaran</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Mau belajar apa hari ini?</h2>
      <p className="section-desc">Pilih jalur belajar di bawah. Setiap jalur punya materi, latihan, dan bantuan AI-nya sendiri.</p>

      <div className="grid g2">
        {TRACKS.map((t) => {
          const inner = (
            <div className={"track-card" + (t.ready ? "" : " soon")}>
              <div className="track-ic">{t.ic}</div>
              <h3 className="track-title">{t.title}</h3>
              <p className="track-desc">{t.desc}</p>
              <div className="track-tags">
                {t.tags.map((tag) => (
                  <span key={tag} className="pill teal">{tag}</span>
                ))}
              </div>
              {t.ready && <div className="track-go">Mulai belajar →</div>}
            </div>
          );
          return t.ready ? (
            <Link key={t.title} href={t.href}>{inner}</Link>
          ) : (
            <div key={t.title}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
