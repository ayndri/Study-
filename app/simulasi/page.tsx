import SimulasiTest from "@/components/SimulasiTest";

export default function SimulasiPage() {
  return (
    <div>
      <div className="eyebrow">Uji kemampuan menyeluruh</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Simulasi Tes Lengkap</h2>
      <p className="section-desc">
        Kerjakan satu paket TOEFL ITP utuh dengan timer per bagian, lalu lihat perkiraan skor akhir hasil konversi.
      </p>
      <SimulasiTest />
    </div>
  );
}
