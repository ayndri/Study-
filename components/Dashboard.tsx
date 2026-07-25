"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { get } from "@/lib/store";
import { VOCAB } from "@/lib/content";
import SyncPanel from "@/components/SyncPanel";

function ScoreConverter() {
  const [l, setL] = useState(52);
  const [s, setS] = useState(54);
  const [r, setR] = useState(53);
  const clamp = (v: number) => Math.max(31, Math.min(68, isNaN(v) ? 50 : v));
  const total = Math.round(((clamp(l) + clamp(s) + clamp(r)) * 10) / 3);
  return (
    <div className="card pad">
      <div className="eyebrow">Kalkulator</div>
      <h3 className="section-title" style={{ marginTop: 6, fontSize: 22 }}>Konversi skor ITP</h3>
      <p className="section-desc">Masukkan skor mentah per bagian (31–68) untuk perkiraan skor akhir.</p>
      <div className="conv">
        <div>
          <label>Listening</label>
          <input type="number" min={31} max={68} value={l} onChange={(e) => setL(+e.target.value)} />
        </div>
        <div>
          <label>Structure</label>
          <input type="number" min={31} max={68} value={s} onChange={(e) => setS(+e.target.value)} />
        </div>
        <div>
          <label>Reading</label>
          <input type="number" min={31} max={68} value={r} onChange={(e) => setR(+e.target.value)} />
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <label>Perkiraan skor</label>
          <div className="out">{total}</div>
        </div>
      </div>
      <div className="note">
        <b>Target aman:</b> banyak jalur LPDP & pascasarjana dalam negeri mensyaratkan TOEFL ITP ≥ 500 (sebagian
        program lebih tinggi). Selalu cek angka resmi terbaru.
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [known, setKnown] = useState(0);
  const [docsPct, setDocsPct] = useState(0);

  useEffect(() => {
    setScores(get<Record<string, number>>("scores", {}));
    setKnown(get<number[]>("known", []).length);
    const docs = get<Record<number, boolean>>("docChecklist", {});
    const done = Object.values(docs).filter(Boolean).length;
    setDocsPct(Math.round((done / 9) * 100));
  }, []);

  const secKeys = ["listening", "structure", "reading"];
  const vals = secKeys.map((k) => scores[k]).filter((v) => typeof v === "number");
  const avg = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
  const est = avg !== null ? Math.round(460 + (avg / 100) * 140) : null;

  return (
    <div>
      <div className="hero">
        <div className="eyebrow">Rencana belajar terpadu</div>
        <h1>Taklukkan TOEFL ITP, raih beasiswa ke S2 Teknik Informatika ITS.</h1>
        <p>
          Satu aplikasi untuk berlatih empat keterampilan bahasa Inggris, dibantu tutor AI, sekaligus menyiapkan
          berkas, esai, dan wawancara beasiswa LPDP — dengan progres tersimpan otomatis.
        </p>
        <div className="cta-row">
          <Link href="/listening" className="btn gold">Mulai latihan →</Link>
          <Link href="/beasiswa" className="btn ghost">Lihat rencana beasiswa</Link>
        </div>
        <div className="goal">ITS</div>
      </div>

      <div className="grid g4" style={{ marginTop: 20 }}>
        <div className="card stat">
          <div className="lbl">Rata-rata Kuis</div>
          <div className="val">{avg === null ? "–" : avg}<small>%</small></div>
          <div className="bar"><i style={{ width: `${avg || 0}%` }} /></div>
        </div>
        <div className="card stat">
          <div className="lbl">Estimasi Skor ITP</div>
          <div className="val">{est === null ? "–" : "~" + est}</div>
          <div className="bar"><i style={{ width: est ? `${Math.min(100, Math.round(((est - 400) / 250) * 100))}%` : "0" }} /></div>
        </div>
        <div className="card stat">
          <div className="lbl">Kosakata Dikuasai</div>
          <div className="val">{known}<small>/{VOCAB.length}</small></div>
          <div className="bar"><i style={{ width: `${(known / VOCAB.length) * 100}%` }} /></div>
        </div>
        <div className="card stat">
          <div className="lbl">Checklist Beasiswa</div>
          <div className="val">{docsPct}<small>%</small></div>
          <div className="bar"><i style={{ width: `${docsPct}%` }} /></div>
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 20, alignItems: "start" }}>
        <div className="card pad">
          <div className="eyebrow">Struktur tes</div>
          <h3 className="section-title" style={{ marginTop: 6, fontSize: 22 }}>Tiga bagian TOEFL ITP</h3>
          <p className="section-desc">Skor tiap bagian 31–68, ditotalkan lalu dikali 10/3. Rentang akhir 310–677.</p>
          <ul className="tips">
            <li><b>Listening Comprehension</b> — 50 soal, ±35 menit.</li>
            <li><b>Structure & Written Expression</b> — 40 soal, 25 menit.</li>
            <li><b>Reading Comprehension</b> — 50 soal, 55 menit.</li>
          </ul>
        </div>
        <ScoreConverter />
      </div>

      <div style={{ marginTop: 20 }}>
        <SyncPanel />
      </div>

      <div className="note" style={{ marginTop: 20 }}>
        <span>ℹ️</span>
        <span>
          <b>Catatan:</b> persyaratan skor, dokumen, dan jadwal LPDP maupun Pascasarjana Teknik Informatika ITS dapat
          berubah tiap periode. Aplikasi ini alat latihan & panduan — verifikasi ketentuan resmi di{" "}
          <b>lpdp.kemenkeu.go.id</b> dan <b>its.ac.id</b> sebelum mendaftar.
        </span>
      </div>
    </div>
  );
}
