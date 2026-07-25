import VocabHub from "@/components/VocabHub";

export default function VocabularyPage() {
  return (
    <div>
      <div className="eyebrow">Kosakata akademik</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Vocabulary</h2>
      <p className="section-desc">
        110 kata yang sering muncul di TOEFL & esai akademik. Pakai <b>Flashcard</b> untuk menghafal, atau <b>Kuis (SRS)</b>{" "}
        untuk latihan tebak arti dengan pengulangan otomatis pada kata yang belum dikuasai.
      </p>
      <VocabHub />
    </div>
  );
}
