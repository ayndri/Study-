import AiPractice from "@/components/AiPractice";

export default function LatihanAiPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Latihan Soal AI Tak Terbatas</h2>
      <p className="section-desc">
        Buat soal latihan baru sesuka hati — pilih mata pelajaran (TOEFL ITP, Flutter, atau Golang), topik, dan
        tingkat kesulitan. AI menyusun soal segar setiap kali, lalu <b>menganalisis topik yang perlu kamu perkuat</b>.
        Membutuhkan GEMINI_API_KEY di server.
      </p>
      <AiPractice />
    </div>
  );
}
