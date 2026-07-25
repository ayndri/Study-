import Quiz from "@/components/Quiz";
import {
  READING1_PASSAGE,
  READING1_QUESTIONS,
  READING2_PASSAGE,
  READING2_QUESTIONS,
  READING3_PASSAGE,
  READING3_QUESTIONS,
} from "@/lib/content";

export default function ReadingPage() {
  return (
    <div>
      <div className="eyebrow">Bagian 3</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Reading Comprehension</h2>
      <p className="section-desc">
        Tiga bacaan akademik, 15 soal. Latih membaca cepat untuk gagasan utama, lalu memindai (scan) untuk detail.
      </p>

      <div className="card pad" style={{ marginBottom: 14 }}>
        <div className="pill teal" style={{ marginBottom: 12 }}>Bacaan 1 · Energi Terbarukan</div>
        <div className="passage">
          {READING1_PASSAGE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <Quiz section="reading" questions={READING1_QUESTIONS} />

      <div className="divider" />

      <div className="card pad" style={{ marginBottom: 14 }}>
        <div className="pill teal" style={{ marginBottom: 12 }}>Bacaan 2 · Bilingualisme</div>
        <div className="passage">
          {READING2_PASSAGE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <Quiz section="reading" questions={READING2_QUESTIONS} />

      <div className="divider" />

      <div className="card pad" style={{ marginBottom: 14 }}>
        <div className="pill teal" style={{ marginBottom: 12 }}>Bacaan 3 · Tidur & Memori</div>
        <div className="passage">
          {READING3_PASSAGE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <Quiz section="reading" questions={READING3_QUESTIONS} />
    </div>
  );
}
