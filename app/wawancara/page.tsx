import InterviewSim from "@/components/InterviewSim";

export default function WawancaraPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Simulasi Wawancara LPDP</h2>
      <p className="section-desc">
        Berlatih menghadapi seleksi substansi: AI menjadi pewawancara, memberi umpan balik tiap jawaban, dan menilai
        performamu di akhir.
      </p>
      <InterviewSim />
    </div>
  );
}
