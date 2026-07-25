import ListeningExercise from "@/components/ListeningExercise";
import { LISTENING_CLIPS } from "@/lib/content";

export default function ListeningPage() {
  return (
    <div>
      <div className="eyebrow">Bagian 1</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Listening Comprehension</h2>
      <p className="section-desc">
        Klik <b>Putar</b> untuk mendengar tiap rekaman (memakai suara perangkatmu), lalu jawab pertanyaannya. Dengarkan
        sekali seperti tes asli sebelum melihat naskah. Ada {LISTENING_CLIPS.reduce((n, c) => n + c.questions.length, 0)}{" "}
        soal (Part A percakapan + Part C kuliah).
      </p>

      <div className="card pad" style={{ marginBottom: 18 }}>
        <ul className="tips">
          <li><b>Fokus pada gagasan utama & sikap pembicara</b>, bukan menghafal tiap kata.</li>
          <li><b>Waspadai idiom</b> ("I can't make it", "over my head") dan penanda kontras ("however", "actually").</li>
          <li>Pada percakapan, <b>jawaban sering ada di ucapan orang kedua</b> yang merespons.</li>
        </ul>
      </div>

      <ListeningExercise clips={LISTENING_CLIPS} />
    </div>
  );
}
