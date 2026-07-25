import Materi from "@/components/Materi";
import { PM_LESSONS, PM_CATS, PM_QUIZZES } from "@/lib/pm";

export default function PmMateriPage() {
  return (
    <div>
      <div className="eyebrow">Belajar bertahap</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Materi Manajemen Proyek</h2>
      <p className="section-desc">
        Buka tiap materi untuk membaca beserta contoh nyata, lalu klik <b>Perdalam dengan AI</b> bila ingin
        penjelasan lebih dalam, dan kerjakan mini-quiz di akhir.
      </p>
      <Materi
        lessons={PM_LESSONS}
        cats={PM_CATS}
        quizzes={PM_QUIZZES}
        subject="pm"
        storeKey="pmMateriDone"
      />
    </div>
  );
}
