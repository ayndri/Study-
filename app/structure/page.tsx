import Quiz from "@/components/Quiz";
import { STRUCTURE_QUESTIONS } from "@/lib/content";

export default function StructurePage() {
  return (
    <div>
      <div className="eyebrow">Bagian 2</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Structure & Written Expression</h2>
      <p className="section-desc">
        Dua tipe soal: melengkapi kalimat (Structure) dan menemukan bagian yang salah secara tata bahasa (Written
        Expression — bagian bergaris bawah).
      </p>

      <div className="card pad" style={{ marginBottom: 18 }}>
        <ul className="tips">
          <li><b>Pastikan tiap kalimat punya satu subjek & satu kata kerja utama.</b></li>
          <li><b>Cek kesesuaian subjek–kata kerja</b> ("The data <i>is</i>", "Each of them <i>was</i>").</li>
          <li><b>Perhatikan bentuk paralel, kata sambung, dan preposisi</b> ("despite" bukan "despite of").</li>
        </ul>
      </div>

      <Quiz section="structure" questions={STRUCTURE_QUESTIONS} />
    </div>
  );
}
