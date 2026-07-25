import CodeReview from "@/components/CodeReview";

export default function FlutterLatihanPage() {
  return (
    <div>
      <div className="eyebrow">Latihan koding + AI</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Latihan Koding Dart</h2>
      <p className="section-desc">
        Kerjakan tantangan atau tempel kode Dart-mu, lalu minta AI menilai, menemukan bug, dan memberi versi
        perbaikannya.
      </p>
      <CodeReview />
    </div>
  );
}
