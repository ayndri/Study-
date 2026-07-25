import StudyPlan from "@/components/StudyPlan";

export default function RencanaPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Rencana Belajar Personal</h2>
      <p className="section-desc">
        Masukkan target skor TOEFL ITP dan tanggal tesmu — AI menyusun jadwal belajar mingguan yang terkait langsung
        dengan materi, latihan, simulasi, dan wawancara di aplikasi ini. Centang tugas untuk memantau progresmu.
        Membutuhkan GEMINI_API_KEY di server.
      </p>
      <StudyPlan />
    </div>
  );
}
