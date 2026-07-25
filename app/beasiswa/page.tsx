import Checklist from "@/components/Checklist";
import { BEASISWA_STEPS, BEASISWA_DOCS } from "@/lib/content";

export default function BeasiswaPage() {
  return (
    <div>
      <div className="eyebrow">Target: S2 Teknik Informatika ITS via LPDP</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Peta Jalan Beasiswa</h2>
      <p className="section-desc">
        Alur, dokumen, dan strategi esai untuk mendaftar LPDP menuju Program Magister (S2) Teknik Informatika ITS.
      </p>

      <div className="grid g2" style={{ alignItems: "start" }}>
        <div className="card pad">
          <div className="eyebrow">Tahapan</div>
          <h3 style={{ margin: "6px 0 18px", fontFamily: "var(--serif)", fontSize: 21 }}>Alur pendaftaran</h3>
          <div className="tl">
            {BEASISWA_STEPS.map(([title, when, desc], i) => (
              <div className="tl-item" key={i}>
                <h4>
                  {title} <span className="when">{when}</span>
                </h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card pad">
          <div className="eyebrow">Persiapan berkas</div>
          <h3 style={{ margin: "6px 0 4px", fontFamily: "var(--serif)", fontSize: 21 }}>Checklist dokumen</h3>
          <p className="section-desc" style={{ marginBottom: 8 }}>Centang saat siap. Progres tersimpan otomatis.</p>
          <Checklist storeKey="docChecklist" items={BEASISWA_DOCS} />
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 18, alignItems: "start" }}>
        <div className="card pad">
          <div className="eyebrow">Strategi esai LPDP</div>
          <h3 style={{ margin: "6px 0 12px", fontFamily: "var(--serif)", fontSize: 21 }}>Esai Komitmen & Rencana Studi</h3>
          <ul className="tips">
            <li><b>Ceritakan "mengapa Teknik Informatika ITS"</b> secara spesifik — sebutkan laboratorium/riset (komputasi cerdas, jaringan, rekayasa perangkat lunak) yang relevan dengan tujuanmu.</li>
            <li><b>Tunjukkan kontribusi konkret untuk Indonesia</b> setelah lulus: masalah nyata yang ingin kamu selesaikan (digitalisasi UMKM, keamanan siber, AI untuk layanan publik).</li>
            <li><b>Gunakan pola masa lalu → sekarang → masa depan.</b></li>
            <li><b>Buat rencana studi terukur</b>: perkiraan mata kuliah, topik tesis, target lulus tepat waktu.</li>
            <li><b>Angka & bukti menguatkan</b> — capaian, proyek, dampak yang bisa diverifikasi.</li>
          </ul>
        </div>
        <div className="card pad">
          <div className="eyebrow">Seleksi substansi</div>
          <h3 style={{ margin: "6px 0 12px", fontFamily: "var(--serif)", fontSize: 21 }}>Persiapan wawancara</h3>
          <ul className="tips">
            <li><b>Kuasai isi esaimu sendiri</b> — pewawancara menggali dari sana.</li>
            <li><b>Siapkan jawaban:</b> "Kenapa jurusan & kampus ini?", "Kontribusi setelah lulus?", "Kenapa layak dibiayai negara?".</li>
            <li><b>Tegaskan komitmen kembali ke Indonesia</b> dengan rencana yang masuk akal.</li>
            <li><b>Jujur soal kekurangan</b> dan tunjukkan cara mengatasinya.</li>
          </ul>
          <div className="divider" />
          <div className="eyebrow">Estimasi target</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <span className="pill gold">TOEFL ITP ≥ 500</span>
            <span className="pill teal">IPK S1 ≥ 3,00</span>
            <span className="pill">LoA ITS (disarankan)</span>
          </div>
        </div>
      </div>

      <div className="note" style={{ marginTop: 20 }}>
        <span>ℹ️</span>
        <span>
          Angka & tahapan di atas bersifat umum sebagai panduan belajar. Ketentuan resmi (skor minimum, jenis TOEFL
          yang diterima, jadwal batch) mengikuti pengumuman LPDP dan syarat Pascasarjana Teknik Informatika ITS pada
          periode pendaftaranmu.
        </span>
      </div>
    </div>
  );
}
