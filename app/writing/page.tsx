import Writing from "@/components/Writing";

export default function WritingPage() {
  return (
    <div>
      <div className="eyebrow">Latihan tambahan · dinilai AI</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Writing Practice</h2>
      <p className="section-desc">
        TOEFL ITP tidak menguji menulis, tetapi kemampuan ini penting untuk esai beasiswa dan iBT. Pilih prompt, tulis
        dalam batas waktu, lalu minta koreksi dari tutor AI atau nilai sendiri dengan rubrik.
      </p>
      <Writing />
    </div>
  );
}
