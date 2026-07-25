import Tutor from "@/components/Tutor";

const SUGGESTIONS = [
  "Apa beda Waterfall dan Agile?",
  "Jelaskan peran Product Owner vs Scrum Master.",
  "Bagaimana cara membuat Work Breakdown Structure (WBS)?",
  "Apa itu velocity dan burndown chart di Scrum?",
];

export default function PmTutorPage() {
  return (
    <div>
      <div className="eyebrow">Ditenagai Gemini</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Tutor Manajemen Proyek AI</h2>
      <p className="section-desc">
        Tanya apa pun seputar manajemen proyek — metodologi, Agile/Scrum, perencanaan, risiko, atau alat.
        Membutuhkan GEMINI_API_KEY di server.
      </p>
      <Tutor
        subject="pm"
        greeting="Halo! Aku Tutor Manajemen Proyek-mu. Tanya apa saja soal peran PM, siklus proyek, Waterfall/Agile/Scrum/Kanban, perencanaan & penjadwalan, manajemen risiko & stakeholder, atau sertifikasi — aku bantu jelaskan dengan contoh. 📋"
        suggestions={SUGGESTIONS}
      />
    </div>
  );
}
