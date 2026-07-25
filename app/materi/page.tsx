import Materi from "@/components/Materi";
import { LESSONS, MATERI_CATS, LESSON_QUIZZES } from "@/lib/materi";

export default function MateriPage() {
  return (
    <div>
      <div className="eyebrow">Belajar dulu, baru latihan</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Materi Pembelajaran</h2>
      <p className="section-desc">
        Penjelasan konsep TOEFL ITP dan strategi beasiswa. Buka tiap materi untuk membaca, lalu tandai selesai. Setelah
        paham, uji dirimu di menu latihan.
      </p>
      <Materi lessons={LESSONS} cats={MATERI_CATS} quizzes={LESSON_QUIZZES} subject="toefl" storeKey="materiDone" />
    </div>
  );
}
