import Materi from "@/components/Materi";
import { GO_LESSONS, GO_CATS, GO_QUIZZES } from "@/lib/golang";

export default function GolangMateriPage() {
  return (
    <div>
      <div className="eyebrow">Belajar bertahap</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Materi Golang</h2>
      <p className="section-desc">
        Buka tiap materi untuk membaca beserta contoh kode Go, lalu klik <b>Perdalam dengan AI</b> bila ingin
        penjelasan lebih dalam, dan kerjakan mini-quiz di akhir.
      </p>
      <Materi
        lessons={GO_LESSONS}
        cats={GO_CATS}
        quizzes={GO_QUIZZES}
        subject="golang"
        storeKey="golangMateriDone"
      />
    </div>
  );
}
