import InterviewSim from "@/components/InterviewSim";

export default function PmWawancaraPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Simulasi Wawancara Project Manager</h2>
      <p className="section-desc">
        Latihan wawancara kerja PM: AI berperan sebagai pewawancara (hiring manager), mengajukan pertanyaan satu per
        satu, memberi umpan balik, lalu menggali lebih dalam. Di akhir kamu bisa minta skor & saran. Membutuhkan
        GEMINI_API_KEY di server.
      </p>
      <InterviewSim
        mode="pm"
        eyebrow="Latihan wawancara kerja"
        title="Simulasi Wawancara PM"
        intro="AI akan berperan sebagai pewawancara untuk posisi Project Manager. Ia mengajukan pertanyaan behavioral & situasional satu per satu, memberi umpan balik, lalu menggali lebih dalam. Jawablah seolah wawancara kerja sungguhan."
        tips={[
          "Gunakan kerangka <b>STAR</b> (Situation, Task, Action, Result) saat menjawab.",
          "Sertakan <b>angka & hasil konkret</b> (anggaran, ukuran tim, ketepatan waktu).",
          "Di akhir, klik <b>Akhiri &amp; minta evaluasi</b> untuk mendapat skor & saran perbaikan.",
        ]}
      />
    </div>
  );
}
