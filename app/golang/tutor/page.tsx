import Tutor from "@/components/Tutor";

const SUGGESTIONS = [
  "Apa beda slice dan array di Go?",
  "Jelaskan goroutine & channel dengan contoh.",
  "Bagaimana cara menangani error yang idiomatis di Go?",
  "Tunjukkan contoh REST API sederhana dengan net/http.",
];

export default function GolangTutorPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Tutor Golang AI</h2>
      <p className="section-desc">
        Tanya apa pun seputar Go — konsep, error, atau minta contoh kode. Membutuhkan GEMINI_API_KEY di server.
      </p>
      <Tutor
        subject="golang"
        greeting="Halo! Aku Tutor Golang-mu. Tanya apa saja soal sintaks Go, struct & interface, goroutine, error handling, atau cara membuat API — aku bantu dengan contoh kode. 🐹"
        suggestions={SUGGESTIONS}
      />
    </div>
  );
}
