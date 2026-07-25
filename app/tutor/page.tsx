import Tutor from "@/components/Tutor";

export default function TutorPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Tutor AI</h2>
      <p className="section-desc">
        Tanya apa pun seputar TOEFL ITP dan persiapan beasiswa LPDP menuju S2 Teknik Informatika ITS. Membutuhkan
        GEMINI_API_KEY di server.
      </p>
      <Tutor />
    </div>
  );
}
