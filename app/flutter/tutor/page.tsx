import Tutor from "@/components/Tutor";

const SUGGESTIONS = [
  "Apa beda StatelessWidget dan StatefulWidget?",
  "Tunjukkan contoh Column dengan 2 tombol.",
  "Bagaimana cara mengambil data JSON dari API?",
  "Jelaskan null safety di Dart dengan contoh.",
];

export default function FlutterTutorPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Tutor Flutter AI</h2>
      <p className="section-desc">
        Tanya apa pun seputar Flutter &amp; Dart — konsep, error, atau minta contoh kode. Membutuhkan GEMINI_API_KEY di
        server.
      </p>
      <Tutor
        subject="flutter"
        greeting="Halo! Aku Tutor Flutter-mu. Tanya apa saja soal Dart, widget, layout, state, atau cara mengambil data — aku bantu dengan contoh kode. 📱"
        suggestions={SUGGESTIONS}
      />
    </div>
  );
}
