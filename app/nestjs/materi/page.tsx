import Materi from "@/components/Materi";
import { NEST_LESSONS, NEST_CATS, NEST_QUIZZES } from "@/lib/nestjs";

export default function NestMateriPage() {
  return (
    <div>
      <div className="eyebrow">Belajar bertahap</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Materi NestJS</h2>
      <p className="section-desc">
        Buka tiap materi untuk membaca beserta contoh kode TypeScript/NestJS, lalu klik <b>Perdalam dengan AI</b>
        bila ingin penjelasan lebih dalam, dan kerjakan mini-quiz di akhir.
      </p>
      <Materi
        lessons={NEST_LESSONS}
        cats={NEST_CATS}
        quizzes={NEST_QUIZZES}
        subject="nestjs"
        storeKey="nestjsMateriDone"
      />
    </div>
  );
}
