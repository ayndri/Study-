import Materi from "@/components/Materi";
import { FLUTTER_LESSONS, FLUTTER_CATS, FLUTTER_QUIZZES } from "@/lib/flutter";

export default function FlutterMateriPage() {
  return (
    <div>
      <div className="eyebrow">Belajar bertahap</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Materi Flutter &amp; Dart</h2>
      <p className="section-desc">
        Buka tiap materi untuk membaca beserta contoh kode, lalu klik <b>Perdalam dengan AI</b> bila ingin penjelasan
        lebih dalam, dan kerjakan mini-quiz di akhir.
      </p>
      <Materi
        lessons={FLUTTER_LESSONS}
        cats={FLUTTER_CATS}
        quizzes={FLUTTER_QUIZZES}
        subject="flutter"
        storeKey="flutterMateriDone"
      />
    </div>
  );
}
