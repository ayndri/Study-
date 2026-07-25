import Tutor from "@/components/Tutor";

const SUGGESTIONS = [
  "Apa beda Controller, Provider, dan Module?",
  "Bagaimana cara membuat DTO dengan validasi?",
  "Jelaskan Dependency Injection di NestJS dengan contoh.",
  "Tunjukkan contoh CRUD sederhana dengan TypeORM.",
];

export default function NestTutorPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Tutor NestJS AI</h2>
      <p className="section-desc">
        Tanya apa pun seputar NestJS &amp; TypeScript — konsep, error, atau minta contoh kode. Membutuhkan
        GEMINI_API_KEY di server.
      </p>
      <Tutor
        subject="nestjs"
        greeting="Halo! Aku Tutor NestJS-mu. Tanya apa saja soal module, controller, service, dependency injection, DTO & validasi, database (TypeORM), autentikasi JWT, atau testing — aku bantu dengan contoh kode TypeScript. 🐱"
        suggestions={SUGGESTIONS}
      />
    </div>
  );
}
