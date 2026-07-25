import EssayHistory from "@/components/EssayHistory";

export default function RiwayatEsaiPage() {
  return (
    <div>
      <div className="eyebrow">Tersimpan di cloud</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Riwayat Esai</h2>
      <p className="section-desc">
        Semua esai yang pernah kamu koreksi dengan AI di menu Writing, beserta skor & umpan baliknya. Terkait dengan
        kode akunmu, jadi bisa dilihat lintas-perangkat.
      </p>
      <EssayHistory />
    </div>
  );
}
