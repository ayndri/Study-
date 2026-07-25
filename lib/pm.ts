// Konten jalur belajar "Belajar Manajemen Proyek (Project Management)".
// Materi NON-KODING (soft skill & metodologi). Struktur mengikuti tipe
// Lesson/Question agar bisa dipakai komponen Materi & Quiz.
// Catatan penyunting: body ada di template literal (backtick). Tanda < dan >
// sebagai teks ditulis &lt; / &gt;, dan tanda & yang berdiri sendiri ditulis
// &amp; agar tampil apa adanya dan build tidak gagal.
import type { Lesson } from "@/lib/materi";
import type { Question } from "@/lib/content";

export const PM_CATS: { key: string; label: string; ic: string }[] = [
  { key: "dasar", label: "Dasar Manajemen Proyek", ic: "◔" },
  { key: "siklus", label: "Siklus Hidup Proyek", ic: "◷" },
  { key: "metodologi", label: "Metodologi", ic: "◆" },
  { key: "scrum", label: "Scrum Mendalam", ic: "⚡" },
  { key: "perencanaan", label: "Perencanaan", ic: "▦" },
  { key: "risiko", label: "Risiko & Stakeholder", ic: "⚠" },
  { key: "alat", label: "Alat & Karier", ic: "◎" },
  { key: "proyek", label: "Proyek & Praktik", ic: "🛠" },
];

export const PM_LESSONS: Lesson[] = [
  // ===================== DASAR MANAJEMEN PROYEK =====================
  {
    id: "pm-intro",
    cat: "dasar",
    title: "Apa itu Proyek & Manajemen Proyek",
    minutes: 7,
    summary: "Memahami arti proyek dan kenapa perlu dikelola secara khusus.",
    body: `
      <p>Sebuah <b>proyek</b> adalah usaha yang bersifat <b>sementara</b> untuk menghasilkan produk, layanan, atau hasil yang <b>unik</b>. Kata kuncinya dua: <b>sementara</b> (punya awal dan akhir yang jelas) dan <b>unik</b> (bukan pekerjaan rutin yang berulang).</p>
      <h4>Proyek vs pekerjaan rutin (operasional)</h4>
      <table>
        <tr><th>Aspek</th><th>Proyek</th><th>Operasional</th></tr>
        <tr><td>Waktu</td><td>Sementara, ada tenggat</td><td>Berkelanjutan</td></tr>
        <tr><td>Hasil</td><td>Unik, baru</td><td>Berulang, sama</td></tr>
        <tr><td>Contoh</td><td>Membangun aplikasi kasir baru</td><td>Melayani pembeli tiap hari</td></tr>
      </table>
      <p>Contoh nyata proyek: <b>membuat website toko online</b> untuk sebuah UMKM. Ada tanggal mulai, ada target selesai, dan hasilnya sebuah website yang sebelumnya belum ada. Setelah website jalan dan dipakai berjualan tiap hari, itu berubah menjadi <b>operasional</b>.</p>
      <h4>Lalu, apa itu manajemen proyek?</h4>
      <p><b>Manajemen proyek</b> adalah penerapan pengetahuan, keterampilan, alat, dan teknik untuk memenuhi kebutuhan proyek. Sederhananya: memastikan proyek <b>selesai tepat waktu, sesuai anggaran, dan sesuai tujuan</b>.</p>
      <ul>
        <li><b>Merencanakan</b> — menentukan apa yang dikerjakan, kapan, dan oleh siapa.</li>
        <li><b>Mengorganisir</b> — menyusun tim dan sumber daya.</li>
        <li><b>Memimpin</b> — menjaga tim tetap fokus dan termotivasi.</li>
        <li><b>Mengendalikan</b> — memantau kemajuan dan meluruskan bila melenceng.</li>
      </ul>
      <div class="callout">Ingat kalimat kunci ini: proyek itu <b>sementara</b> dan <b>unik</b>. Kalau sebuah pekerjaan berjalan terus tanpa akhir dan hasilnya selalu sama, itu operasional, bukan proyek. Klik <b>Perdalam dengan AI</b> untuk contoh proyek lain sesuai bidangmu.</div>
    `,
  },
  {
    id: "pm-role",
    cat: "dasar",
    title: "Peran & Tanggung Jawab Project Manager",
    minutes: 8,
    summary: "Apa yang sebenarnya dikerjakan seorang manajer proyek setiap hari.",
    body: `
      <p><b>Project Manager (PM)</b> adalah orang yang bertanggung jawab memimpin proyek dari awal sampai selesai. PM bukan orang yang mengerjakan semua tugas teknis, melainkan yang <b>memastikan pekerjaan berjalan lancar</b> dan tujuan tercapai.</p>
      <h4>Tanggung jawab utama PM</h4>
      <ul>
        <li><b>Menetapkan tujuan &amp; ruang lingkup</b> — memastikan semua paham apa yang harus dibuat.</li>
        <li><b>Menyusun rencana &amp; jadwal</b> — memecah pekerjaan menjadi tugas-tugas.</li>
        <li><b>Mengatur sumber daya</b> — orang, waktu, uang, dan alat.</li>
        <li><b>Mengelola komunikasi</b> — jembatan antara tim, klien, dan atasan.</li>
        <li><b>Mengelola risiko &amp; masalah</b> — mengantisipasi dan menyelesaikan hambatan.</li>
        <li><b>Melaporkan kemajuan</b> — memberi tahu semua pihak posisi proyek.</li>
      </ul>
      <h4>Keterampilan yang wajib dimiliki</h4>
      <table>
        <tr><th>Keterampilan keras</th><th>Keterampilan lunak</th></tr>
        <tr><td>Penjadwalan &amp; anggaran</td><td>Komunikasi</td></tr>
        <tr><td>Manajemen risiko</td><td>Kepemimpinan</td></tr>
        <tr><td>Penggunaan alat (Jira, dll)</td><td>Negosiasi &amp; empati</td></tr>
      </table>
      <p>Dalam proyek pembuatan aplikasi, PM-lah yang memastikan desainer, programmer, dan penguji bekerja selaras, tenggat tetap terjaga, dan klien tahu perkembangan tiap minggu.</p>
      <div class="callout">Banyak orang mengira PM sekadar "penjadwal". Padahal 80 persen pekerjaan PM adalah <b>komunikasi</b>: menyelaraskan harapan, meredakan konflik, dan menjaga semua pihak tetap sepaham.</div>
    `,
  },
  {
    id: "pm-constraint",
    cat: "dasar",
    title: "Triple Constraint (Scope, Waktu, Biaya) & Kualitas",
    minutes: 8,
    summary: "Tiga batasan yang selalu saling tarik-menarik dalam setiap proyek.",
    body: `
      <p><b>Triple Constraint</b> (atau "segitiga besi" / iron triangle) adalah tiga batasan utama yang harus diseimbangkan dalam setiap proyek: <b>ruang lingkup (scope)</b>, <b>waktu</b>, dan <b>biaya</b>. Di tengahnya ada <b>kualitas</b>.</p>
      <h4>Tiga sisi segitiga</h4>
      <ul>
        <li><b>Scope</b> — seberapa banyak fitur atau pekerjaan yang dikerjakan.</li>
        <li><b>Waktu</b> — berapa lama proyek boleh berjalan.</li>
        <li><b>Biaya</b> — berapa anggaran yang tersedia.</li>
      </ul>
      <p>Prinsipnya: <b>ketiganya saling terkait</b>. Kalau satu berubah, yang lain ikut terpengaruh. Kalau klien minta tambahan fitur (scope naik) tapi tenggat tetap, maka biaya harus naik (tambah orang) atau kualitas turun.</p>
      <h4>Contoh nyata</h4>
      <table>
        <tr><th>Permintaan</th><th>Dampak</th></tr>
        <tr><td>"Tambah fitur pembayaran" (scope naik)</td><td>Butuh waktu lebih lama atau biaya lebih besar</td></tr>
        <tr><td>"Harus selesai lebih cepat" (waktu turun)</td><td>Kurangi fitur atau tambah tenaga (biaya naik)</td></tr>
        <tr><td>"Anggaran dipotong" (biaya turun)</td><td>Kurangi fitur atau mundurkan tenggat</td></tr>
      </table>
      <div class="callout">Gejala berbahaya bernama <b>scope creep</b>: fitur terus bertambah diam-diam tanpa menyesuaikan waktu dan biaya. Inilah penyebab paling umum proyek gagal. Tugas PM adalah menjaga keseimbangan segitiga ini.</div>
    `,
  },
  {
    id: "pm-lifecycle",
    cat: "dasar",
    title: "Gambaran Siklus Hidup Proyek",
    minutes: 6,
    summary: "Lima fase besar yang dilalui hampir semua proyek.",
    body: `
      <p><b>Siklus hidup proyek</b> (project life cycle) adalah rangkaian fase yang dilalui proyek dari awal hingga akhir. Meskipun tiap organisasi punya istilah sendiri, secara umum ada <b>lima kelompok proses</b>.</p>
      <h4>Lima fase (kelompok proses PMI)</h4>
      <ol>
        <li><b>Inisiasi</b> — menentukan apakah proyek layak dijalankan dan resmi dimulai.</li>
        <li><b>Perencanaan</b> — menyusun rencana rinci: apa, kapan, siapa, berapa.</li>
        <li><b>Eksekusi</b> — mengerjakan pekerjaan nyata sesuai rencana.</li>
        <li><b>Pemantauan &amp; Pengendalian</b> — mengawasi kemajuan dan mengoreksi (berjalan bersamaan dengan eksekusi).</li>
        <li><b>Penutupan</b> — menyelesaikan proyek dan merapikan administrasi.</li>
      </ol>
      <p>Perhatikan bahwa <b>Pemantauan &amp; Pengendalian</b> bukan fase yang berdiri sendiri di akhir, melainkan berjalan <b>sepanjang</b> eksekusi. Ibarat menyetir mobil: eksekusi adalah menginjak gas, pemantauan adalah terus melihat spidometer dan membelokkan setir.</p>
      <table>
        <tr><th>Fase</th><th>Pertanyaan kunci</th></tr>
        <tr><td>Inisiasi</td><td>Kenapa proyek ini perlu ada?</td></tr>
        <tr><td>Perencanaan</td><td>Bagaimana kita mencapainya?</td></tr>
        <tr><td>Eksekusi</td><td>Ayo kerjakan!</td></tr>
        <tr><td>Pemantauan</td><td>Apakah kita masih di jalur?</td></tr>
        <tr><td>Penutupan</td><td>Sudah selesai, apa pelajarannya?</td></tr>
      </table>
      <div class="callout">Fase ini adalah kerangka umum. Metodologi seperti Waterfall menjalankannya sekali secara berurutan, sedangkan Agile mengulanginya berkali-kali dalam siklus pendek.</div>
    `,
  },

  // ===================== SIKLUS HIDUP PROYEK =====================
  {
    id: "pm-initiation",
    cat: "siklus",
    title: "Inisiasi: Project Charter & Business Case",
    minutes: 8,
    summary: "Dokumen pembuka yang meresmikan dan membenarkan sebuah proyek.",
    body: `
      <p>Fase <b>inisiasi</b> menjawab satu pertanyaan besar: <b>apakah proyek ini layak dijalankan?</b> Dua dokumen penting lahir di sini: <b>business case</b> dan <b>project charter</b>.</p>
      <h4>Business Case</h4>
      <p><b>Business case</b> menjelaskan <b>alasan bisnis</b> di balik proyek: masalah apa yang diselesaikan, manfaat apa yang didapat, dan apakah untung dibanding biayanya. Contoh: "UMKM kehilangan pembeli karena tidak punya toko online; membuat website diperkirakan menaikkan penjualan 30 persen."</p>
      <h4>Project Charter</h4>
      <p><b>Project charter</b> (piagam proyek) adalah dokumen resmi yang <b>meresmikan</b> keberadaan proyek dan <b>memberi wewenang</b> kepada PM. Isi utamanya:</p>
      <ul>
        <li><b>Tujuan &amp; sasaran</b> proyek.</li>
        <li><b>Ruang lingkup tingkat tinggi</b> — garis besar apa yang dikerjakan.</li>
        <li><b>Stakeholder</b> utama dan sponsor.</li>
        <li><b>Anggaran &amp; jadwal</b> perkiraan.</li>
        <li><b>Nama PM</b> dan wewenangnya.</li>
      </ul>
      <table>
        <tr><th>Dokumen</th><th>Menjawab</th></tr>
        <tr><td>Business case</td><td>Kenapa proyek ini menguntungkan?</td></tr>
        <tr><td>Project charter</td><td>Apa isinya &amp; siapa yang bertanggung jawab?</td></tr>
      </table>
      <div class="callout">Tanpa <b>charter</b>, seorang PM tidak punya wewenang resmi untuk meminta sumber daya. Charter adalah "surat izin" yang ditandatangani sponsor agar proyek boleh berjalan.</div>
    `,
  },
  {
    id: "pm-planning",
    cat: "siklus",
    title: "Perencanaan Proyek",
    minutes: 9,
    summary: "Fase menyusun peta jalan rinci sebelum pekerjaan dimulai.",
    body: `
      <p>Fase <b>perencanaan</b> mengubah tujuan besar menjadi <b>rencana kerja yang rinci</b>. Ini fase paling menentukan; rencana yang buruk hampir pasti menghasilkan proyek yang kacau.</p>
      <h4>Yang direncanakan</h4>
      <ul>
        <li><b>Ruang lingkup</b> — daftar pekerjaan lewat WBS.</li>
        <li><b>Jadwal</b> — urutan tugas dan tenggat (Gantt chart, critical path).</li>
        <li><b>Anggaran</b> — perkiraan biaya tiap bagian.</li>
        <li><b>Sumber daya</b> — siapa mengerjakan apa.</li>
        <li><b>Kualitas</b> — standar yang harus dipenuhi.</li>
        <li><b>Risiko</b> — daftar hal yang bisa salah dan rencana cadangan.</li>
        <li><b>Komunikasi</b> — siapa dapat laporan apa dan kapan.</li>
      </ul>
      <p>Semua ini dirangkum dalam <b>project management plan</b> (rencana manajemen proyek). Dalam proyek website, di fase ini PM menentukan halaman apa saja dibuat, siapa desainernya, kapan tiap halaman selesai, dan berapa biayanya.</p>
      <h4>Kenapa perencanaan sering diremehkan</h4>
      <p>Tim sering ingin cepat "mengerjakan" dan melewati perencanaan. Padahal, tanpa peta yang jelas, tim mudah salah arah, saling menunggu, dan mengulang pekerjaan.</p>
      <div class="callout">Prinsip klasik: <b>"gagal merencanakan sama dengan merencanakan kegagalan"</b>. Waktu yang dihabiskan untuk merencanakan biasanya terbayar berkali lipat saat eksekusi.</div>
    `,
  },
  {
    id: "pm-execution",
    cat: "siklus",
    title: "Eksekusi & Manajemen Tim",
    minutes: 8,
    summary: "Fase saat pekerjaan nyata dikerjakan dan tim dikelola.",
    body: `
      <p>Fase <b>eksekusi</b> adalah saat rencana diwujudkan menjadi pekerjaan nyata. Di sinilah sebagian besar anggaran dan tenaga terpakai. Fokus PM bergeser dari "merencanakan" ke <b>memimpin orang</b>.</p>
      <h4>Tugas PM saat eksekusi</h4>
      <ul>
        <li><b>Mengarahkan &amp; memotivasi</b> tim agar tetap produktif.</li>
        <li><b>Mengelola beban kerja</b> agar merata dan tidak ada yang kelebihan.</li>
        <li><b>Menghilangkan hambatan</b> (blocker) yang memperlambat tim.</li>
        <li><b>Menjaga komunikasi</b> dengan stakeholder.</li>
        <li><b>Menjamin kualitas</b> hasil sesuai standar.</li>
      </ul>
      <h4>Sedikit soal memimpin tim</h4>
      <p>Tim yang baik butuh <b>tujuan yang jelas, kepercayaan, dan lingkungan aman</b> untuk bicara jujur. PM yang baik melayani tim (servant leadership): bertanya "apa yang menghambatmu?" bukan hanya "kenapa belum selesai?".</p>
      <table>
        <tr><th>Sikap kurang baik</th><th>Sikap lebih baik</th></tr>
        <tr><td>Menyalahkan saat ada masalah</td><td>Fokus mencari solusi bersama</td></tr>
        <tr><td>Mikromanajemen tiap detail</td><td>Beri kepercayaan &amp; dukungan</td></tr>
      </table>
      <div class="callout">Dalam proyek aplikasi, saat eksekusi programmer menulis kode dan desainer membuat tampilan. Tugas PM bukan ikut mengetik kode, tapi memastikan mereka punya semua yang dibutuhkan dan tidak terhambat.</div>
    `,
  },
  {
    id: "pm-monitoring",
    cat: "siklus",
    title: "Pemantauan & Pengendalian",
    minutes: 8,
    summary: "Membandingkan rencana dengan kenyataan dan mengoreksi arah.",
    body: `
      <p><b>Pemantauan &amp; pengendalian</b> berjalan <b>bersamaan</b> dengan eksekusi. Intinya membandingkan <b>rencana</b> dengan <b>kenyataan</b>, lalu mengambil tindakan koreksi bila ada selisih.</p>
      <h4>Apa yang dipantau?</h4>
      <ul>
        <li><b>Kemajuan jadwal</b> — apakah tugas selesai tepat waktu?</li>
        <li><b>Biaya</b> — apakah pengeluaran sesuai anggaran?</li>
        <li><b>Ruang lingkup</b> — adakah scope creep yang menyelinap?</li>
        <li><b>Kualitas</b> — apakah hasil memenuhi standar?</li>
        <li><b>Risiko</b> — apakah muncul ancaman baru?</li>
      </ul>
      <h4>Alat bantu</h4>
      <p>PM memakai metrik seperti <b>burndown chart</b>, laporan status, dan indikator "lampu lalu lintas" (hijau, kuning, merah) untuk menggambarkan kesehatan proyek dengan cepat.</p>
      <h4>Change control</h4>
      <p>Perubahan pasti terjadi. Yang penting perubahan itu <b>dikelola resmi</b> lewat proses <b>change control</b>: setiap permintaan perubahan dinilai dampaknya terhadap waktu, biaya, dan lingkup sebelum disetujui.</p>
      <div class="callout">Semakin dini penyimpangan terdeteksi, semakin murah biaya memperbaikinya. Membetulkan kesalahan di awal jauh lebih mudah daripada saat proyek hampir selesai.</div>
    `,
  },
  {
    id: "pm-closing",
    cat: "siklus",
    title: "Penutupan & Lessons Learned",
    minutes: 7,
    summary: "Menutup proyek secara resmi dan memetik pelajaran untuk ke depan.",
    body: `
      <p>Fase <b>penutupan</b> sering dilewati, padahal penting. Di sini proyek <b>diselesaikan secara resmi</b> dan diserahterimakan.</p>
      <h4>Kegiatan penutupan</h4>
      <ul>
        <li><b>Serah terima hasil</b> kepada klien atau tim operasional.</li>
        <li><b>Persetujuan akhir</b> bahwa proyek diterima (sign-off).</li>
        <li><b>Menutup kontrak &amp; administrasi</b>, membayar tagihan terakhir.</li>
        <li><b>Membebaskan sumber daya</b> — tim pindah ke proyek lain.</li>
        <li><b>Mencatat lessons learned.</b></li>
      </ul>
      <h4>Lessons Learned</h4>
      <p><b>Lessons learned</b> adalah catatan <b>apa yang berjalan baik</b> dan <b>apa yang perlu diperbaiki</b>. Tujuannya agar proyek berikutnya tidak mengulang kesalahan yang sama. Contoh catatan: "Estimasi awal terlalu optimis; ke depan tambahkan cadangan 20 persen waktu."</p>
      <table>
        <tr><th>Pertanyaan retrospektif</th></tr>
        <tr><td>Apa yang berhasil baik?</td></tr>
        <tr><td>Apa yang menjadi masalah?</td></tr>
        <tr><td>Apa yang akan kita ubah lain kali?</td></tr>
      </table>
      <div class="callout">Proyek yang tidak ditutup resmi bisa menggantung: sumber daya tetap terpakai dan tidak ada yang tahu apakah proyek benar-benar selesai. Selalu adakan pertemuan penutupan.</div>
    `,
  },

  // ===================== METODOLOGI =====================
  {
    id: "pm-waterfall",
    cat: "metodologi",
    title: "Metodologi Waterfall",
    minutes: 8,
    summary: "Pendekatan berurutan klasik: satu fase selesai baru lanjut.",
    body: `
      <p><b>Waterfall</b> (air terjun) adalah pendekatan <b>berurutan (sequential)</b>: proyek dibagi menjadi fase-fase yang dikerjakan satu per satu. Fase berikutnya baru mulai setelah fase sebelumnya <b>selesai sepenuhnya</b>, seperti air yang mengalir turun.</p>
      <h4>Urutan fase khas</h4>
      <ol>
        <li>Analisis kebutuhan</li>
        <li>Desain</li>
        <li>Implementasi (pembuatan)</li>
        <li>Pengujian</li>
        <li>Penyerahan &amp; pemeliharaan</li>
      </ol>
      <h4>Kelebihan &amp; kekurangan</h4>
      <table>
        <tr><th>Kelebihan</th><th>Kekurangan</th></tr>
        <tr><td>Mudah dipahami &amp; dikelola</td><td>Kaku, sulit berubah di tengah jalan</td></tr>
        <tr><td>Dokumentasi jelas</td><td>Hasil baru terlihat di akhir</td></tr>
        <tr><td>Cocok jika kebutuhan pasti</td><td>Kesalahan awal mahal diperbaiki</td></tr>
      </table>
      <p><b>Kapan cocok?</b> Ketika kebutuhan sudah <b>jelas dan tidak banyak berubah</b>, misalnya membangun jembatan atau proyek dengan aturan hukum ketat. Kurang cocok untuk produk digital yang kebutuhannya sering berubah.</p>
      <div class="callout">Kelemahan terbesar Waterfall: pelanggan baru melihat hasil di fase akhir. Kalau ternyata salah paham di awal, biaya perbaikannya sangat besar. Inilah yang mendorong lahirnya Agile.</div>
    `,
  },
  {
    id: "pm-agile",
    cat: "metodologi",
    title: "Agile & Agile Manifesto",
    minutes: 9,
    summary: "Filosofi kerja bertahap yang mengutamakan adaptasi dan nilai.",
    body: `
      <p><b>Agile</b> bukan satu metode tunggal, melainkan <b>filosofi</b> atau cara berpikir. Intinya: mengerjakan proyek dalam <b>siklus pendek berulang (iterasi)</b>, sering meminta umpan balik, dan cepat beradaptasi terhadap perubahan.</p>
      <h4>4 Nilai Agile Manifesto</h4>
      <p>Agile Manifesto (2001) menyatakan lebih menghargai:</p>
      <ol>
        <li><b>Individu &amp; interaksi</b> di atas proses &amp; alat.</li>
        <li><b>Perangkat lunak yang bekerja</b> di atas dokumentasi lengkap.</li>
        <li><b>Kolaborasi dengan pelanggan</b> di atas negosiasi kontrak.</li>
        <li><b>Menanggapi perubahan</b> di atas mengikuti rencana kaku.</li>
      </ol>
      <p>Perhatikan: hal di sisi kanan tetap bernilai, tetapi sisi kiri lebih diutamakan.</p>
      <h4>Agile vs Waterfall</h4>
      <table>
        <tr><th>Aspek</th><th>Waterfall</th><th>Agile</th></tr>
        <tr><td>Alur</td><td>Berurutan sekali jalan</td><td>Berulang (iteratif)</td></tr>
        <tr><td>Perubahan</td><td>Dihindari</td><td>Diterima</td></tr>
        <tr><td>Hasil</td><td>Di akhir</td><td>Bertahap tiap iterasi</td></tr>
      </table>
      <div class="callout">Agile cocok saat kebutuhan <b>belum pasti dan mungkin berubah</b>, seperti kebanyakan proyek aplikasi. Scrum dan Kanban adalah kerangka kerja populer yang menerapkan nilai-nilai Agile.</div>
    `,
  },
  {
    id: "pm-scrum-intro",
    cat: "metodologi",
    title: "Scrum: Pengantar",
    minutes: 8,
    summary: "Kerangka kerja Agile paling populer berbasis sprint.",
    body: `
      <p><b>Scrum</b> adalah <b>kerangka kerja (framework)</b> Agile yang paling banyak dipakai. Scrum membagi pekerjaan menjadi siklus tetap yang disebut <b>sprint</b>, biasanya 1 sampai 4 minggu.</p>
      <h4>Tiga pilar Scrum</h4>
      <ul>
        <li><b>Transparansi</b> — semua pihak melihat kemajuan yang sama.</li>
        <li><b>Inspeksi</b> — memeriksa hasil secara berkala.</li>
        <li><b>Adaptasi</b> — menyesuaikan diri berdasar hasil inspeksi.</li>
      </ul>
      <h4>Gambaran alur sprint</h4>
      <ol>
        <li>Tim memilih pekerjaan dari <b>product backlog</b> untuk sprint (sprint planning).</li>
        <li>Tim mengerjakannya selama sprint, dengan <b>daily scrum</b> tiap hari.</li>
        <li>Di akhir sprint ada <b>sprint review</b> (menunjukkan hasil) dan <b>retrospective</b> (evaluasi cara kerja).</li>
        <li>Sprint baru dimulai, begitu seterusnya.</li>
      </ol>
      <p>Hasil tiap sprint adalah <b>increment</b>: bagian produk yang sudah "selesai" dan bisa dipakai. Dalam proyek aplikasi, sprint pertama mungkin menghasilkan fitur login yang berfungsi.</p>
      <div class="callout">Scrum sengaja dibuat <b>ringan</b>: sedikit aturan, mudah dipahami, tapi sulit dikuasai. Kekuatannya ada pada disiplin menjalankan sprint dan jujur saat inspeksi.</div>
    `,
  },
  {
    id: "pm-kanban",
    cat: "metodologi",
    title: "Kanban",
    minutes: 7,
    summary: "Metode visual mengalirkan pekerjaan dan membatasi tugas berjalan.",
    body: `
      <p><b>Kanban</b> adalah metode Agile yang berfokus pada <b>alur kerja (flow)</b> dan <b>visualisasi</b>. Berasal dari sistem produksi Toyota, kata "kanban" berarti "kartu visual".</p>
      <h4>Inti Kanban</h4>
      <ul>
        <li><b>Papan visual</b> dengan kolom, misalnya: <i>To Do</i> - <i>In Progress</i> - <i>Done</i>.</li>
        <li>Tiap tugas berupa <b>kartu</b> yang berpindah antar kolom.</li>
        <li><b>WIP limit</b> (Work In Progress limit) — batas jumlah tugas yang boleh dikerjakan bersamaan agar tim tidak kewalahan.</li>
      </ul>
      <h4>Scrum vs Kanban</h4>
      <table>
        <tr><th>Aspek</th><th>Scrum</th><th>Kanban</th></tr>
        <tr><td>Ritme</td><td>Sprint berjangka tetap</td><td>Aliran terus-menerus</td></tr>
        <tr><td>Peran</td><td>PO, Scrum Master, Developers</td><td>Tidak ditentukan khusus</td></tr>
        <tr><td>Perubahan</td><td>Antar sprint</td><td>Kapan saja</td></tr>
        <tr><td>Ukuran kunci</td><td>Velocity</td><td>Lead time &amp; WIP</td></tr>
      </table>
      <p>Kanban cocok untuk pekerjaan yang datang terus tanpa batch tetap, misalnya tim <b>dukungan (support)</b> atau pemeliharaan yang menangani permintaan yang masuk kapan saja.</p>
      <div class="callout">Membatasi WIP terasa berlawanan dengan naluri, tapi justru mempercepat penyelesaian: mengerjakan sedikit tugas sampai tuntas lebih cepat daripada memulai banyak tugas sekaligus.</div>
    `,
  },

  // ===================== SCRUM MENDALAM =====================
  {
    id: "pm-scrum-roles",
    cat: "scrum",
    title: "Peran Scrum (Product Owner, Scrum Master, Developers)",
    minutes: 8,
    summary: "Tiga peran dalam tim Scrum dan tanggung jawab masing-masing.",
    body: `
      <p>Scrum hanya mengenal <b>tiga peran (accountabilities)</b> dalam satu <b>Scrum Team</b>. Tidak ada peran "manajer proyek" tradisional; tanggung jawabnya tersebar ke tiga peran ini.</p>
      <h4>Tiga peran</h4>
      <ul>
        <li><b>Product Owner (PO)</b> — pemilik <b>apa</b> yang dikerjakan. Mengelola product backlog, menentukan prioritas, dan memaksimalkan nilai produk.</li>
        <li><b>Scrum Master</b> — pelayan &amp; pelatih tim. Memastikan Scrum dijalankan benar, menghilangkan hambatan, melindungi tim dari gangguan. Bukan bos.</li>
        <li><b>Developers</b> — tim yang <b>mengerjakan</b> pekerjaan (programmer, desainer, penguji). Menentukan <b>bagaimana</b> pekerjaan dilakukan.</li>
      </ul>
      <table>
        <tr><th>Peran</th><th>Fokus</th></tr>
        <tr><td>Product Owner</td><td>Nilai &amp; prioritas (apa &amp; kenapa)</td></tr>
        <tr><td>Scrum Master</td><td>Proses &amp; tim (bagaimana kerja tim membaik)</td></tr>
        <tr><td>Developers</td><td>Membangun produk (bagaimana teknisnya)</td></tr>
      </table>
      <p>Contoh: dalam proyek aplikasi kasir, PO memutuskan fitur "diskon" lebih penting daripada "laporan bulanan", Developers memutuskan cara membuatnya, dan Scrum Master membantu bila mereka terhambat menunggu akses data.</p>
      <div class="callout">Kesalahan umum: menganggap <b>Scrum Master</b> sebagai bos yang memerintah. Sebenarnya Scrum Master adalah <b>servant leader</b> yang melayani tim, bukan mengatur tugas mereka.</div>
    `,
  },
  {
    id: "pm-scrum-events",
    cat: "scrum",
    title: "Event Scrum (Sprint, Daily, Review, Retrospective)",
    minutes: 9,
    summary: "Lima acara terstruktur yang menjaga ritme kerja Scrum.",
    body: `
      <p>Scrum punya <b>lima event (acara)</b>. Semua event berlangsung di dalam wadah utama bernama <b>Sprint</b>.</p>
      <h4>Lima event</h4>
      <ul>
        <li><b>Sprint</b> — wadah berjangka tetap (1 sampai 4 minggu) tempat semua event lain terjadi. Begitu selesai, sprint berikutnya langsung mulai.</li>
        <li><b>Sprint Planning</b> — di awal sprint; tim memilih pekerjaan dan menyusun rencana sprint.</li>
        <li><b>Daily Scrum</b> — pertemuan singkat 15 menit tiap hari untuk menyelaraskan rencana harian dan memunculkan hambatan.</li>
        <li><b>Sprint Review</b> — di akhir sprint; tim menunjukkan increment ke stakeholder dan meminta umpan balik.</li>
        <li><b>Sprint Retrospective</b> — di akhir sprint; tim mengevaluasi <b>cara kerja</b> mereka dan mencari perbaikan.</li>
      </ul>
      <table>
        <tr><th>Event</th><th>Kapan</th><th>Fokus</th></tr>
        <tr><td>Sprint Planning</td><td>Awal sprint</td><td>Apa &amp; bagaimana</td></tr>
        <tr><td>Daily Scrum</td><td>Tiap hari</td><td>Selaras &amp; hambatan</td></tr>
        <tr><td>Sprint Review</td><td>Akhir sprint</td><td>Produk (increment)</td></tr>
        <tr><td>Retrospective</td><td>Akhir sprint</td><td>Proses tim</td></tr>
      </table>
      <div class="callout">Bedakan <b>Review</b> dan <b>Retrospective</b>: Review membahas <b>produk</b> (apa yang dibuat), sedangkan Retrospective membahas <b>proses</b> (bagaimana tim bekerja). Keduanya berbeda dan sama-sama penting.</div>
    `,
  },
  {
    id: "pm-scrum-artifacts",
    cat: "scrum",
    title: "Artefak Scrum (Product Backlog, Sprint Backlog, Increment)",
    minutes: 8,
    summary: "Tiga artefak yang menyimpan pekerjaan dan hasil dalam Scrum.",
    body: `
      <p><b>Artefak</b> Scrum adalah "benda" yang mewakili pekerjaan atau nilai, dibuat agar semua transparan. Ada <b>tiga artefak</b>, masing-masing punya <b>komitmen</b>.</p>
      <h4>Tiga artefak</h4>
      <ul>
        <li><b>Product Backlog</b> — daftar <b>semua</b> yang mungkin dikerjakan untuk produk, diurutkan berdasarkan prioritas oleh PO. Selalu berkembang. Komitmennya: <b>Product Goal</b>.</li>
        <li><b>Sprint Backlog</b> — bagian backlog yang dipilih untuk sprint ini, ditambah rencana mengerjakannya. Milik Developers. Komitmennya: <b>Sprint Goal</b>.</li>
        <li><b>Increment</b> — hasil nyata yang sudah "selesai" dari sprint, bisa digabung dengan increment sebelumnya. Komitmennya: <b>Definition of Done</b>.</li>
      </ul>
      <h4>Definition of Done (DoD)</h4>
      <p><b>Definition of Done</b> adalah kesepakatan tim tentang arti "selesai". Contoh: kode ditulis, diuji, ditinjau rekan, dan didokumentasikan. Tanpa DoD yang jelas, kata "selesai" bisa berarti berbeda bagi tiap orang.</p>
      <table>
        <tr><th>Artefak</th><th>Komitmen</th></tr>
        <tr><td>Product Backlog</td><td>Product Goal</td></tr>
        <tr><td>Sprint Backlog</td><td>Sprint Goal</td></tr>
        <tr><td>Increment</td><td>Definition of Done</td></tr>
      </table>
      <div class="callout">Product Backlog itu <b>hidup</b>: item bisa ditambah, diubah prioritasnya, atau dihapus kapan saja. Sprint Backlog lebih stabil karena hanya untuk satu sprint berjalan.</div>
    `,
  },
  {
    id: "pm-user-story",
    cat: "scrum",
    title: "User Story & Acceptance Criteria",
    minutes: 8,
    summary: "Cara menulis kebutuhan dari sudut pandang pengguna.",
    body: `
      <p><b>User story</b> adalah cara ringkas menulis kebutuhan dari <b>sudut pandang pengguna</b>, bukan bahasa teknis. Formatnya sederhana:</p>
      <p><i>"Sebagai [tipe pengguna], saya ingin [tujuan] agar [manfaat]."</i></p>
      <p>Contoh: <i>"Sebagai pembeli, saya ingin menyimpan barang ke keranjang agar bisa membayar sekaligus nanti."</i></p>
      <h4>Kriteria user story yang baik (INVEST)</h4>
      <ul>
        <li><b>I</b>ndependent — berdiri sendiri.</li>
        <li><b>N</b>egotiable — bisa didiskusikan.</li>
        <li><b>V</b>aluable — bernilai bagi pengguna.</li>
        <li><b>E</b>stimable — bisa diperkirakan ukurannya.</li>
        <li><b>S</b>mall — cukup kecil untuk satu sprint.</li>
        <li><b>T</b>estable — bisa diuji benar/salahnya.</li>
      </ul>
      <h4>Acceptance Criteria</h4>
      <p><b>Acceptance criteria</b> (kriteria penerimaan) adalah syarat yang harus dipenuhi agar story dianggap selesai. Contoh untuk story keranjang di atas:</p>
      <ul>
        <li>Tombol "Tambah ke Keranjang" muncul di tiap produk.</li>
        <li>Jumlah barang di keranjang bertambah saat diklik.</li>
        <li>Isi keranjang tetap tersimpan saat pindah halaman.</li>
      </ul>
      <div class="callout">Bedakan: <b>user story</b> menyatakan <b>apa &amp; kenapa</b> secara singkat, sedangkan <b>acceptance criteria</b> memperjelas <b>kapan dianggap selesai</b>. Keduanya saling melengkapi.</div>
    `,
  },
  {
    id: "pm-estimation",
    cat: "scrum",
    title: "Estimasi: Story Point & Planning Poker",
    minutes: 8,
    summary: "Memperkirakan ukuran pekerjaan secara relatif, bukan jam pasti.",
    body: `
      <p><b>Estimasi</b> dalam Agile biasanya memakai <b>story point</b>, bukan jam. Story point mengukur <b>ukuran relatif</b> sebuah pekerjaan: gabungan dari kerumitan, usaha, dan ketidakpastian.</p>
      <h4>Kenapa relatif, bukan jam?</h4>
      <p>Manusia buruk menebak durasi pasti, tapi cukup baik membandingkan: "tugas A kira-kira dua kali lebih besar dari tugas B". Story point sering memakai deret <b>Fibonacci</b> (1, 2, 3, 5, 8, 13) karena makin besar pekerjaan makin tidak pasti.</p>
      <h4>Planning Poker</h4>
      <p><b>Planning poker</b> adalah teknik estimasi bersama:</p>
      <ol>
        <li>PO menjelaskan sebuah user story.</li>
        <li>Tiap anggota memilih kartu angka secara <b>rahasia</b>.</li>
        <li>Semua membuka kartu <b>serentak</b>.</li>
        <li>Bila berbeda jauh, yang tertinggi &amp; terendah menjelaskan alasannya, lalu ulangi hingga sepakat.</li>
      </ol>
      <table>
        <tr><th>Estimasi jam</th><th>Story point</th></tr>
        <tr><td>Terkesan pasti (padahal tidak)</td><td>Jujur soal ketidakpastian</td></tr>
        <tr><td>Tergantung siapa mengerjakan</td><td>Ukuran relatif, netral</td></tr>
      </table>
      <div class="callout">Tujuan planning poker bukan sekadar angka, tapi <b>memunculkan diskusi</b>. Perbedaan estimasi besar biasanya menandakan ada yang belum sepaham soal isi pekerjaan.</div>
    `,
  },

  // ===================== PERENCANAAN =====================
  {
    id: "pm-scope-wbs",
    cat: "perencanaan",
    title: "Scope & Work Breakdown Structure (WBS)",
    minutes: 9,
    summary: "Menetapkan batas pekerjaan dan memecahnya jadi bagian kecil.",
    body: `
      <p><b>Scope</b> (ruang lingkup) mendefinisikan <b>apa yang termasuk</b> dan <b>apa yang tidak termasuk</b> dalam proyek. Scope yang jelas mencegah scope creep.</p>
      <h4>Dua sisi scope</h4>
      <ul>
        <li><b>In scope</b> — pekerjaan yang akan dikerjakan.</li>
        <li><b>Out of scope</b> — yang sengaja <b>tidak</b> dikerjakan (sama pentingnya untuk ditulis!).</li>
      </ul>
      <h4>Work Breakdown Structure (WBS)</h4>
      <p><b>WBS</b> adalah teknik memecah proyek menjadi <b>bagian-bagian yang makin kecil</b> secara bertingkat, sampai jadi paket kerja yang mudah dikelola. Ini menerapkan prinsip "bagi dan taklukkan".</p>
      <p>Contoh WBS proyek website toko online:</p>
      <ul>
        <li><b>1. Desain</b> — 1.1 wireframe, 1.2 mockup, 1.3 revisi.</li>
        <li><b>2. Frontend</b> — 2.1 halaman utama, 2.2 halaman produk, 2.3 keranjang.</li>
        <li><b>3. Backend</b> — 3.1 basis data, 3.2 pembayaran.</li>
        <li><b>4. Pengujian</b> — 4.1 uji fungsi, 4.2 uji beban.</li>
      </ul>
      <h4>Aturan penting WBS</h4>
      <p><b>Aturan 100 persen</b>: WBS harus mencakup <b>seluruh</b> pekerjaan proyek, tidak lebih dan tidak kurang. Kalau tidak ada di WBS, artinya tidak dikerjakan.</p>
      <div class="callout">WBS memecah <b>hasil (deliverables)</b>, bukan urutan waktu. Jadwal dan siapa mengerjakan apa disusun <b>setelah</b> WBS jadi. Paket kerja terkecil sebaiknya cukup kecil untuk diperkirakan dengan yakin.</div>
    `,
  },
  {
    id: "pm-schedule",
    cat: "perencanaan",
    title: "Penjadwalan: Gantt Chart & Critical Path",
    minutes: 9,
    summary: "Menyusun urutan tugas dan menemukan rangkaian penentu tenggat.",
    body: `
      <p>Setelah pekerjaan dipecah lewat WBS, langkah berikutnya adalah <b>penjadwalan</b>: menentukan <b>urutan</b> tugas, <b>durasi</b>, dan <b>ketergantungan</b> antar tugas.</p>
      <h4>Gantt Chart</h4>
      <p><b>Gantt chart</b> adalah diagram batang horizontal yang menampilkan tugas di sumbu tegak dan waktu di sumbu datar. Tiap batang menunjukkan kapan tugas mulai dan selesai, sehingga tumpang tindih dan urutan terlihat jelas.</p>
      <h4>Ketergantungan tugas</h4>
      <p>Beberapa tugas harus menunggu tugas lain. Contoh: "membuat halaman produk" harus menunggu "desain mockup" selesai. Ini disebut <b>dependency</b>.</p>
      <h4>Critical Path (Jalur Kritis)</h4>
      <p><b>Critical path</b> adalah rangkaian tugas <b>terpanjang</b> yang menentukan durasi minimum proyek. Tugas di jalur kritis <b>tidak punya kelonggaran (slack)</b>; bila salah satunya terlambat, seluruh proyek ikut terlambat.</p>
      <table>
        <tr><th>Istilah</th><th>Arti</th></tr>
        <tr><td>Dependency</td><td>Tugas yang harus menunggu tugas lain</td></tr>
        <tr><td>Slack / float</td><td>Kelonggaran tunda tanpa memperlambat proyek</td></tr>
        <tr><td>Critical path</td><td>Rangkaian tugas tanpa slack (penentu tenggat)</td></tr>
      </table>
      <div class="callout">Fokuskan perhatian pada tugas di <b>jalur kritis</b>. Mempercepat tugas yang punya banyak slack tidak mempercepat proyek; hanya tugas kritis yang benar-benar menentukan tenggat.</div>
    `,
  },
  {
    id: "pm-budget",
    cat: "perencanaan",
    title: "Anggaran & Estimasi Biaya",
    minutes: 8,
    summary: "Memperkirakan dan mengendalikan uang yang dibutuhkan proyek.",
    body: `
      <p><b>Anggaran (budget)</b> adalah perkiraan total biaya yang disetujui untuk proyek. Menyusunnya dimulai dari <b>estimasi biaya</b> tiap bagian, lalu dijumlahkan.</p>
      <h4>Jenis biaya</h4>
      <ul>
        <li><b>Biaya langsung</b> — terkait langsung dengan pekerjaan: gaji tim, lisensi perangkat lunak.</li>
        <li><b>Biaya tidak langsung</b> — bersama untuk banyak proyek: listrik, sewa kantor.</li>
      </ul>
      <h4>Teknik estimasi biaya</h4>
      <table>
        <tr><th>Teknik</th><th>Cara</th><th>Ketelitian</th></tr>
        <tr><td>Analogi</td><td>Bandingkan proyek serupa sebelumnya</td><td>Kasar, cepat</td></tr>
        <tr><td>Parametrik</td><td>Pakai rumus per satuan (mis. biaya per halaman)</td><td>Sedang</td></tr>
        <tr><td>Bottom-up</td><td>Jumlahkan estimasi tiap paket kerja WBS</td><td>Paling teliti</td></tr>
      </table>
      <h4>Cadangan (reserve)</h4>
      <p>Anggaran yang baik menyisihkan <b>cadangan kontingensi</b> untuk risiko yang diketahui, karena hampir tidak ada proyek yang berjalan persis sesuai rencana.</p>
      <h4>Sedikit soal pengendalian</h4>
      <p>Selama proyek, PM membandingkan <b>biaya aktual</b> dengan anggaran. Salah satu ukurannya adalah <b>Cost Variance</b>: selisih antara nilai pekerjaan yang selesai dan biaya yang sudah dikeluarkan.</p>
      <div class="callout">Estimasi selalu mengandung ketidakpastian. Jangan sajikan satu angka mati; sampaikan rentang (mis. "sekitar 40 sampai 50 juta") dan sertakan cadangan yang wajar.</div>
    `,
  },
  {
    id: "pm-quality",
    cat: "perencanaan",
    title: "Manajemen Kualitas",
    minutes: 7,
    summary: "Memastikan hasil proyek memenuhi standar, bukan sekadar selesai.",
    body: `
      <p><b>Manajemen kualitas</b> memastikan hasil proyek <b>memenuhi kebutuhan</b> dan standar yang disepakati. Proyek yang selesai tepat waktu dan anggaran tetap gagal bila hasilnya cacat.</p>
      <h4>Dua istilah yang sering tertukar</h4>
      <table>
        <tr><th>Quality Assurance (QA)</th><th>Quality Control (QC)</th></tr>
        <tr><td>Fokus pada <b>proses</b></td><td>Fokus pada <b>produk</b></td></tr>
        <tr><td>Mencegah cacat</td><td>Menemukan cacat</td></tr>
        <tr><td>Contoh: menyusun standar &amp; prosedur</td><td>Contoh: menguji aplikasi</td></tr>
      </table>
      <h4>Prinsip penting</h4>
      <ul>
        <li><b>Kualitas direncanakan, bukan diperiksa belakangan.</b> Lebih murah mencegah cacat daripada memperbaikinya.</li>
        <li><b>Mencegah lebih baik daripada memeriksa</b> — bangun kualitas sejak awal.</li>
        <li><b>Perbaikan berkelanjutan</b> — selalu cari cara jadi lebih baik.</li>
      </ul>
      <p>Contoh dalam proyek aplikasi: QA menetapkan aturan bahwa setiap kode harus ditinjau rekan sebelum digabung; QC menjalankan pengujian untuk menemukan bug sebelum aplikasi dirilis.</p>
      <div class="callout">Jangan campur adukkan <b>kualitas</b> dengan <b>tingkatan (grade)</b>. Produk sederhana bisa berkualitas tinggi (bebas cacat), dan produk mewah bisa berkualitas rendah (banyak cacat). Kualitas berarti sesuai janji, bukan semewah mungkin.</div>
    `,
  },

  // ===================== RISIKO & STAKEHOLDER =====================
  {
    id: "pm-risk",
    cat: "risiko",
    title: "Manajemen Risiko",
    minutes: 9,
    summary: "Mengenali dan menyiapkan rencana atas hal-hal yang bisa salah.",
    body: `
      <p><b>Risiko</b> adalah kejadian tak pasti yang, bila terjadi, berdampak pada proyek. Risiko bisa <b>negatif (ancaman)</b> atau <b>positif (peluang)</b>, meski kebanyakan orang memikirkan ancaman.</p>
      <h4>Langkah manajemen risiko</h4>
      <ol>
        <li><b>Identifikasi</b> — daftar semua hal yang bisa salah.</li>
        <li><b>Analisis</b> — nilai <b>kemungkinan</b> (probability) dan <b>dampak</b> (impact) tiap risiko.</li>
        <li><b>Rencana respons</b> — putuskan tindakan untuk tiap risiko penting.</li>
        <li><b>Pantau</b> — awasi risiko sepanjang proyek.</li>
      </ol>
      <h4>Matriks risiko</h4>
      <p>Risiko diprioritaskan dengan mengalikan kemungkinan dan dampak. Yang <b>tinggi-tinggi</b> ditangani lebih dulu.</p>
      <h4>Strategi respons terhadap ancaman</h4>
      <table>
        <tr><th>Strategi</th><th>Arti</th><th>Contoh</th></tr>
        <tr><td>Hindari (avoid)</td><td>Ubah rencana agar risiko hilang</td><td>Tidak pakai teknologi baru yang belum teruji</td></tr>
        <tr><td>Kurangi (mitigate)</td><td>Perkecil kemungkinan/dampak</td><td>Backup data rutin</td></tr>
        <tr><td>Alihkan (transfer)</td><td>Pindahkan ke pihak lain</td><td>Beli asuransi atau outsourcing</td></tr>
        <tr><td>Terima (accept)</td><td>Siapkan cadangan, jalan terus</td><td>Sisihkan dana kontingensi</td></tr>
      </table>
      <div class="callout">Risiko sebaiknya dicatat dalam <b>risk register</b> (daftar risiko) sejak awal proyek dan ditinjau berkala. Risiko yang tidak ditulis cenderung terlupakan sampai terlambat.</div>
    `,
  },
  {
    id: "pm-stakeholder",
    cat: "risiko",
    title: "Manajemen Stakeholder & Komunikasi",
    minutes: 8,
    summary: "Mengenali pihak berkepentingan dan menjaga komunikasi tepat.",
    body: `
      <p><b>Stakeholder</b> adalah siapa saja yang <b>terpengaruh</b> proyek atau <b>bisa memengaruhi</b> proyek: klien, pengguna, sponsor, tim, bahkan pihak luar seperti regulator.</p>
      <h4>Langkah mengelola stakeholder</h4>
      <ol>
        <li><b>Identifikasi</b> — siapa saja stakeholder-nya?</li>
        <li><b>Analisis</b> — seberapa besar <b>pengaruh</b> dan <b>minat</b> mereka?</li>
        <li><b>Rencana keterlibatan</b> — bagaimana melibatkan tiap kelompok?</li>
      </ol>
      <h4>Matriks Power/Interest</h4>
      <table>
        <tr><th>Pengaruh / Minat</th><th>Minat rendah</th><th>Minat tinggi</th></tr>
        <tr><td>Pengaruh tinggi</td><td>Buat tetap puas</td><td>Kelola dengan saksama</td></tr>
        <tr><td>Pengaruh rendah</td><td>Pantau saja</td><td>Beri informasi rutin</td></tr>
      </table>
      <h4>Komunikasi</h4>
      <p>Sebagian besar masalah proyek berakar dari komunikasi buruk. PM sebaiknya punya <b>rencana komunikasi</b>: siapa butuh informasi apa, dalam bentuk apa, dan seberapa sering.</p>
      <ul>
        <li>Sponsor: laporan ringkas tingkat tinggi tiap bulan.</li>
        <li>Tim: daily scrum &amp; papan tugas tiap hari.</li>
        <li>Klien: demo tiap akhir sprint.</li>
      </ul>
      <div class="callout">Stakeholder berpengaruh tinggi tetapi kurang dilibatkan bisa menjadi penghambat besar. Kenali mereka sejak awal dan jaga komunikasi sesuai kebutuhannya, jangan menunggu sampai mereka kecewa.</div>
    `,
  },

  // ===================== ALAT & KARIER =====================
  {
    id: "pm-tools",
    cat: "alat",
    title: "Alat Bantu (Jira, Trello, Asana)",
    minutes: 7,
    summary: "Perangkat lunak populer untuk mengelola tugas dan proyek.",
    body: `
      <p>Alat manajemen proyek membantu tim <b>melihat, membagi, dan melacak</b> pekerjaan di satu tempat. Alat hanyalah pendukung; yang utama tetap cara kerja tim.</p>
      <h4>Tiga alat populer</h4>
      <table>
        <tr><th>Alat</th><th>Cocok untuk</th><th>Ciri khas</th></tr>
        <tr><td><b>Jira</b></td><td>Tim perangkat lunak/Agile</td><td>Kuat untuk Scrum &amp; Kanban, backlog, sprint, laporan</td></tr>
        <tr><td><b>Trello</b></td><td>Tim kecil, tugas sederhana</td><td>Papan Kanban visual, sangat mudah dipakai</td></tr>
        <tr><td><b>Asana</b></td><td>Manajemen tugas umum</td><td>Fleksibel: daftar, papan, timeline</td></tr>
      </table>
      <h4>Fitur yang biasanya ada</h4>
      <ul>
        <li><b>Papan tugas</b> visual (To Do, In Progress, Done).</li>
        <li><b>Penugasan</b> tugas ke orang dan tenggat.</li>
        <li><b>Backlog &amp; sprint</b> (khususnya Jira).</li>
        <li><b>Laporan</b> seperti burndown dan velocity.</li>
      </ul>
      <p>Untuk proyek aplikasi berukuran menengah dengan Scrum, Jira sering jadi pilihan karena mendukung sprint dan metrik Agile. Untuk proyek pribadi atau tim kecil, Trello sudah cukup dan lebih ringan.</p>
      <div class="callout">Jangan tergoda memakai alat yang terlalu rumit untuk tim kecil. Alat sebaiknya <b>mengikuti</b> proses kerja tim, bukan memaksa tim mengubah cara kerja demi alat.</div>
    `,
  },
  {
    id: "pm-metrics",
    cat: "alat",
    title: "Metrik Proyek (Velocity, Burndown, CFD)",
    minutes: 8,
    summary: "Angka dan grafik untuk memantau kesehatan dan laju proyek.",
    body: `
      <p><b>Metrik</b> membantu PM dan tim melihat kemajuan secara objektif. Tiga metrik Agile yang paling sering dipakai:</p>
      <h4>Velocity</h4>
      <p><b>Velocity</b> adalah jumlah story point yang <b>diselesaikan</b> tim per sprint. Dipakai untuk memperkirakan berapa banyak pekerjaan yang bisa diambil sprint berikutnya. Contoh: bila tim rata-rata menyelesaikan 20 poin per sprint, jangan menjejalkan 40 poin.</p>
      <h4>Burndown Chart</h4>
      <p><b>Burndown chart</b> menunjukkan sisa pekerjaan (sumbu tegak) terhadap waktu (sumbu datar) dalam sprint. Garisnya idealnya menurun menuju nol di akhir sprint. Bila garis mendatar terlalu lama, ada masalah.</p>
      <h4>Cumulative Flow Diagram (CFD)</h4>
      <p><b>CFD</b> menampilkan jumlah tugas di tiap status (To Do, In Progress, Done) sepanjang waktu. Bila pita "In Progress" melebar terus, itu tanda <b>penumpukan</b> pekerjaan (bottleneck).</p>
      <table>
        <tr><th>Metrik</th><th>Menjawab</th></tr>
        <tr><td>Velocity</td><td>Berapa laju kerja tim per sprint?</td></tr>
        <tr><td>Burndown</td><td>Apakah sprint ini akan selesai tepat waktu?</td></tr>
        <tr><td>CFD</td><td>Di mana pekerjaan menumpuk?</td></tr>
      </table>
      <div class="callout">Metrik adalah <b>cermin, bukan cambuk</b>. Velocity dipakai untuk perencanaan tim sendiri, bukan untuk membandingkan atau menghukum antar tim. Membandingkan velocity antar tim menyesatkan karena skala poinnya berbeda.</div>
    `,
  },
  {
    id: "pm-career",
    cat: "alat",
    title: "Sertifikasi & Karier (PMP, CSM/PSM) + Praktik Terbaik",
    minutes: 8,
    summary: "Jalur karier, sertifikasi populer, dan kebiasaan PM yang baik.",
    body: `
      <p>Karier di manajemen proyek biasanya menanjak dari koordinator, ke <b>project manager</b>, lalu ke program/portfolio manager. Sertifikasi bisa memperkuat kredibilitas, meski pengalaman nyata tetap yang utama.</p>
      <h4>Sertifikasi populer</h4>
      <table>
        <tr><th>Sertifikasi</th><th>Penyelenggara</th><th>Fokus</th></tr>
        <tr><td><b>PMP</b></td><td>PMI</td><td>Manajemen proyek umum (butuh pengalaman)</td></tr>
        <tr><td><b>CAPM</b></td><td>PMI</td><td>Tingkat pemula, tanpa syarat pengalaman berat</td></tr>
        <tr><td><b>CSM</b></td><td>Scrum Alliance</td><td>Scrum Master</td></tr>
        <tr><td><b>PSM</b></td><td>Scrum.org</td><td>Scrum Master (ujian lebih ketat)</td></tr>
      </table>
      <p><b>PMP</b> (Project Management Professional) adalah salah satu yang paling diakui secara global, tetapi mensyaratkan jam pengalaman memimpin proyek. Untuk pemula, <b>CAPM</b> atau sertifikasi Scrum seperti <b>CSM/PSM</b> lebih mudah dijangkau.</p>
      <h4>Praktik terbaik seorang PM</h4>
      <ul>
        <li><b>Komunikasi jelas &amp; rutin</b> — jangan biarkan stakeholder menebak-nebak.</li>
        <li><b>Rencanakan, tapi tetap adaptif</b> — rencana adalah panduan, bukan berhala.</li>
        <li><b>Kelola risiko sejak dini</b>, jangan menunggu masalah meledak.</li>
        <li><b>Layani tim</b> — hilangkan hambatan, jangan menyalahkan.</li>
        <li><b>Selalu ambil lessons learned</b> untuk terus membaik.</li>
      </ul>
      <div class="callout">Sertifikasi membuka pintu, tetapi yang membuatmu bertahan adalah <b>keterampilan lunak</b>: komunikasi, kepemimpinan, dan kemampuan menenangkan situasi saat proyek memanas. Bangun keduanya secara seimbang.</div>
    `,
  },

  // ===================== PROYEK & PRAKTIK =====================
  {
    id: "pm-tools-setup",
    cat: "proyek",
    title: "Menyiapkan Papan Kerja (Trello / Jira / Notion)",
    minutes: 10,
    summary: "Panduan bertahap membangun papan Kanban atau Scrum dari nol.",
    body: `
      <p>Papan kerja (board) adalah tempat tim <b>melihat semua pekerjaan dalam satu layar</b>. Sebelum memilih alat, kenali dua gaya papan yang paling umum: <b>Kanban</b> (kartu mengalir melewati kolom status) dan <b>Scrum</b> (backlog dipecah menjadi sprint berjangka tetap).</p>
      <h4>Pilih alat sesuai kebutuhan</h4>
      <table>
        <tr><th>Alat</th><th>Paling cocok untuk</th><th>Kelebihan</th><th>Kapan sebaiknya dihindari</th></tr>
        <tr><td><b>Trello</b></td><td>Tim kecil, tugas pribadi, proyek sederhana</td><td>Sangat mudah, papan Kanban visual, gratis untuk kebutuhan dasar</td><td>Saat butuh laporan Agile mendalam (velocity, burndown)</td></tr>
        <tr><td><b>Jira</b></td><td>Tim perangkat lunak yang serius memakai Scrum atau Kanban</td><td>Backlog, sprint, story point, laporan burndown &amp; velocity lengkap</td><td>Untuk tim non-teknis kecil karena terasa terlalu rumit</td></tr>
        <tr><td><b>Notion</b></td><td>Tim yang ingin papan tugas menyatu dengan catatan &amp; dokumen</td><td>Fleksibel: database bisa jadi papan, tabel, kalender, plus wiki</td><td>Saat butuh metrik Agile otomatis yang siap pakai</td></tr>
      </table>
      <div class="callout">Aturan praktis: pakai <b>Trello</b> bila ingin cepat dan sederhana, <b>Jira</b> bila tim developer butuh sprint &amp; metrik, dan <b>Notion</b> bila papan tugas ingin menyatu dengan dokumentasi proyek.</div>
      <h4>Langkah menyiapkan papan (berlaku untuk semua alat)</h4>
      <ol>
        <li><b>Buat akun &amp; workspace.</b> Daftar dengan email tim, lalu buat satu ruang kerja bernama proyekmu, misalnya "Aplikasi Kasir".</li>
        <li><b>Buat board baru.</b> Beri nama jelas dan tentukan gayanya: Kanban untuk aliran tugas, atau Scrum bila akan memakai sprint.</li>
        <li><b>Susun kolom (list).</b> Untuk Kanban gunakan <i>To Do</i>, <i>In Progress</i>, <i>Done</i>. Untuk Scrum tambahkan <i>Backlog</i> di paling kiri dan alur <i>Sprint Backlog</i> ke arah <i>Done</i>.</li>
        <li><b>Tambahkan kartu tugas.</b> Tiap tugas jadi satu kartu. Lengkapi kartu dengan: <b>judul</b> yang jelas, <b>assignee</b> (penanggung jawab), <b>due date</b> (tenggat), <b>label</b> warna (mis. desain, backend, bug), dan <b>checklist</b> untuk subtugas.</li>
        <li><b>Atur swimlane bila perlu.</b> Swimlane adalah baris mendatar yang mengelompokkan kartu, misalnya per fitur atau per prioritas, agar papan tetap rapi saat kartu banyak.</li>
        <li><b>Tetapkan batas WIP.</b> Batasi jumlah kartu di kolom <i>In Progress</i> (mis. maksimal 3 per orang) agar tim tidak mengerjakan terlalu banyak sekaligus.</li>
        <li><b>Sambungkan integrasi sederhana.</b> Hubungkan board ke notifikasi tim (mis. email atau aplikasi chat) supaya perubahan kartu langsung terlihat. Untuk Jira, sambungkan ke repositori kode; untuk Notion, tautkan halaman dokumen ke kartu.</li>
        <li><b>Sepakati aturan main.</b> Tentukan kapan kartu boleh pindah kolom dan apa arti "Done" (rujuk Definition of Done). Tanpa kesepakatan ini, papan cepat jadi tidak akurat.</li>
      </ol>
      <h4>Contoh isi kartu tugas</h4>
      <table>
        <tr><th>Kolom kartu</th><th>Contoh isian</th></tr>
        <tr><td>Judul</td><td>Buat halaman pembayaran</td></tr>
        <tr><td>Assignee</td><td>Rani (backend)</td></tr>
        <tr><td>Due date</td><td>2 hari lagi</td></tr>
        <tr><td>Label</td><td>Backend, Prioritas tinggi</td></tr>
        <tr><td>Checklist</td><td>Sambung API, uji transaksi, tangani gagal bayar</td></tr>
      </table>
      <div class="callout">Papan sebaiknya menjadi <b>satu sumber kebenaran</b>. Bila tim masih menyimpan tugas di catatan pribadi atau chat, papan akan cepat usang. Biasakan semua pekerjaan lewat papan.</div>
    `,
  },
  {
    id: "pm-templates",
    cat: "proyek",
    title: "Template Dokumen Proyek Siap Pakai",
    minutes: 12,
    summary: "Kumpulan template inti proyek beserta contoh pengisiannya.",
    body: `
      <p>Berikut enam dokumen inti yang bisa langsung kamu tiru. Contoh memakai proyek nyata: <b>membangun website toko online</b> dan <b>aplikasi kasir</b>. Salin strukturnya, ganti isinya dengan datamu.</p>
      <h4>1. Project Charter</h4>
      <p>Meresmikan proyek dan memberi wewenang PM. Isi ringkas tapi lengkap.</p>
      <table>
        <tr><th>Bagian</th><th>Contoh isian (website toko online)</th></tr>
        <tr><td>Tujuan</td><td>Menaikkan penjualan UMKM 30 persen lewat toko online</td></tr>
        <tr><td>Ruang lingkup tingkat tinggi</td><td>Katalog produk, keranjang, pembayaran, admin sederhana</td></tr>
        <tr><td>Sponsor</td><td>Pemilik UMKM</td></tr>
        <tr><td>PM</td><td>Dewi</td></tr>
        <tr><td>Anggaran perkiraan</td><td>Sekitar 40 sampai 50 juta rupiah</td></tr>
        <tr><td>Jadwal perkiraan</td><td>3 bulan</td></tr>
      </table>
      <h4>2. Work Breakdown Structure (WBS)</h4>
      <p>Memecah seluruh pekerjaan menjadi bagian kecil. Ingat aturan 100 persen: semua pekerjaan harus tercakup.</p>
      <ul>
        <li><b>1. Desain</b> — 1.1 wireframe, 1.2 mockup, 1.3 revisi.</li>
        <li><b>2. Frontend</b> — 2.1 halaman utama, 2.2 halaman produk, 2.3 keranjang.</li>
        <li><b>3. Backend</b> — 3.1 basis data, 3.2 pembayaran, 3.3 panel admin.</li>
        <li><b>4. Pengujian &amp; rilis</b> — 4.1 uji fungsi, 4.2 uji beban, 4.3 peluncuran.</li>
      </ul>
      <h4>3. Matriks RACI</h4>
      <p>Memperjelas siapa berperan apa untuk tiap tugas. <b>R</b>esponsible (mengerjakan), <b>A</b>ccountable (bertanggung jawab akhir), <b>C</b>onsulted (dimintai masukan), <b>I</b>nformed (diberi kabar).</p>
      <table>
        <tr><th>Tugas</th><th>PM</th><th>Desainer</th><th>Programmer</th><th>Sponsor</th></tr>
        <tr><td>Desain mockup</td><td>A</td><td>R</td><td>C</td><td>I</td></tr>
        <tr><td>Bangun fitur pembayaran</td><td>A</td><td>I</td><td>R</td><td>C</td></tr>
        <tr><td>Persetujuan rilis</td><td>R</td><td>I</td><td>I</td><td>A</td></tr>
      </table>
      <div class="callout">Aturan RACI yang sehat: tiap tugas hanya boleh punya <b>satu A</b> (satu penanggung jawab akhir). Kalau ada dua A, tanggung jawab menjadi kabur.</div>
      <h4>4. Risk Register</h4>
      <p>Daftar risiko beserta kemungkinan, dampak, dan rencana respons.</p>
      <table>
        <tr><th>Risiko</th><th>Kemungkinan</th><th>Dampak</th><th>Respons</th></tr>
        <tr><td>Vendor pembayaran terlambat aktif</td><td>Sedang</td><td>Tinggi</td><td>Siapkan vendor cadangan (mitigate)</td></tr>
        <tr><td>Anggota tim sakit</td><td>Rendah</td><td>Sedang</td><td>Dokumentasi tugas agar bisa digantikan (accept)</td></tr>
        <tr><td>Perubahan permintaan klien</td><td>Tinggi</td><td>Sedang</td><td>Terapkan change control (mitigate)</td></tr>
      </table>
      <h4>5. Status Report Mingguan</h4>
      <p>Laporan singkat tiap minggu agar stakeholder tahu posisi proyek.</p>
      <table>
        <tr><th>Bagian</th><th>Contoh isian</th></tr>
        <tr><td>Status keseluruhan</td><td>Hijau (sesuai jalur)</td></tr>
        <tr><td>Selesai minggu ini</td><td>Halaman produk &amp; keranjang</td></tr>
        <tr><td>Rencana minggu depan</td><td>Integrasi pembayaran</td></tr>
        <tr><td>Hambatan</td><td>Menunggu akun vendor pembayaran</td></tr>
        <tr><td>Risiko baru</td><td>Belum ada</td></tr>
      </table>
      <div class="callout">Gunakan indikator lampu lalu lintas pada status: <b>hijau</b> sesuai jalur, <b>kuning</b> ada risiko, <b>merah</b> butuh keputusan segera. Ini membuat laporan cepat dipahami atasan.</div>
      <h4>6. Sprint Backlog</h4>
      <p>Daftar pekerjaan yang dipilih untuk satu sprint (aplikasi kasir), lengkap dengan estimasi dan status.</p>
      <table>
        <tr><th>User story</th><th>Story point</th><th>Assignee</th><th>Status</th></tr>
        <tr><td>Sebagai kasir, saya ingin memindai barcode agar cepat input barang</td><td>5</td><td>Andi</td><td>In Progress</td></tr>
        <tr><td>Sebagai kasir, saya ingin memberi diskon agar bisa promo</td><td>3</td><td>Budi</td><td>To Do</td></tr>
        <tr><td>Sebagai pemilik, saya ingin laporan harian agar tahu omzet</td><td>8</td><td>Andi</td><td>To Do</td></tr>
      </table>
      <div class="callout">Simpan semua template ini di satu tempat (mis. folder bersama atau Notion) agar seluruh tim memakai format yang sama. Konsistensi format membuat proyek lebih mudah dilacak.</div>
    `,
  },
  {
    id: "pm-studi-kasus",
    cat: "proyek",
    title: "Studi Kasus Terpandu: Kelola Proyek dari Inisiasi sampai Penutupan",
    minutes: 13,
    summary: "Menelusuri satu proyek nyata melewati lima fase siklus hidup dengan Scrum.",
    body: `
      <p>Ikuti satu proyek dari awal sampai selesai: <b>membangun aplikasi mobile toko online</b> untuk sebuah UMKM. Proyek ini akan melewati lima fase siklus hidup, dengan eksekusi memakai <b>Scrum</b>.</p>
      <h4>Fase 1 — Inisiasi</h4>
      <p>Pemilik UMKM ingin berjualan lewat aplikasi. PM menyusun <b>business case</b>: penjualan diperkirakan naik 25 persen dalam 6 bulan. Lalu dibuat <b>project charter</b> singkat:</p>
      <ul>
        <li><b>Tujuan:</b> aplikasi mobile untuk pemesanan produk.</li>
        <li><b>Sponsor:</b> pemilik UMKM. <b>PM:</b> Dewi.</li>
        <li><b>Anggaran:</b> sekitar 80 juta rupiah. <b>Durasi:</b> 4 bulan.</li>
      </ul>
      <p>PM juga memetakan <b>stakeholder</b>: pemilik (pengaruh tinggi, minat tinggi, dikelola saksama), calon pembeli (pengguna akhir), dan tim pengembang (3 orang).</p>
      <h4>Fase 2 — Perencanaan</h4>
      <p>PM menyusun <b>WBS</b>: (1) Desain UI, (2) Fitur katalog, (3) Fitur keranjang &amp; pembayaran, (4) Notifikasi, (5) Pengujian &amp; rilis. Dari WBS lahir jadwal kasar: 8 sprint masing-masing 2 minggu.</p>
      <table>
        <tr><th>Rencana</th><th>Isi ringkas</th></tr>
        <tr><td>Scope</td><td>Katalog, keranjang, pembayaran, notifikasi. Di luar lingkup: program loyalti.</td></tr>
        <tr><td>Jadwal</td><td>8 sprint x 2 minggu = 16 minggu</td></tr>
        <tr><td>Anggaran</td><td>Gaji tim 70 juta + lisensi 10 juta</td></tr>
        <tr><td>Risiko utama</td><td>Integrasi pembayaran molor; disiapkan vendor cadangan</td></tr>
      </table>
      <h4>Fase 3 — Eksekusi (dengan Scrum)</h4>
      <p>Tim mulai bekerja per sprint. Contoh <b>Sprint 3</b> berfokus pada fitur keranjang. Sprint backlog memuat user story seperti: <i>"Sebagai pembeli, saya ingin menyimpan barang ke keranjang agar bisa membayar sekaligus."</i></p>
      <ul>
        <li><b>Sprint planning:</b> tim memilih story senilai 20 story point (sesuai velocity rata-rata).</li>
        <li><b>Daily standup:</b> tiap pagi 15 menit, tiap orang menyebut kemajuan &amp; hambatan.</li>
        <li><b>Sprint review:</b> di akhir sprint, fitur keranjang didemokan ke pemilik UMKM.</li>
        <li><b>Retrospective:</b> tim sepakat memperbaiki cara estimasi karena satu story ternyata lebih besar dari perkiraan.</li>
      </ul>
      <h4>Fase 4 — Pemantauan &amp; Pengendalian</h4>
      <p>PM memantau <b>burndown chart</b>: di Sprint 4 garis mendatar terlalu lama, menandakan ada hambatan (integrasi pembayaran macet). PM segera mengaktifkan vendor cadangan dari risk register. Tiap minggu PM mengirim <b>status report</b>:</p>
      <table>
        <tr><th>Minggu</th><th>Status</th><th>Catatan</th></tr>
        <tr><td>6</td><td>Hijau</td><td>Fitur katalog &amp; keranjang selesai</td></tr>
        <tr><td>8</td><td>Kuning</td><td>Pembayaran tertunda, vendor cadangan diaktifkan</td></tr>
        <tr><td>10</td><td>Hijau</td><td>Pembayaran berjalan, kembali sesuai jadwal</td></tr>
      </table>
      <p>Saat pemilik minta tambahan fitur ulasan produk, PM tidak langsung setuju melainkan menjalankan <b>change control</b>: menilai dampaknya (menambah 1 sprint) lalu meminta persetujuan sponsor sebelum masuk scope.</p>
      <h4>Fase 5 — Penutupan</h4>
      <p>Setelah Sprint 8, aplikasi dirilis ke toko aplikasi. PM melakukan <b>serah terima</b> ke tim operasional, meminta <b>sign-off</b> dari pemilik, menutup kontrak vendor, dan membebaskan tim ke proyek berikutnya. Terakhir, tim mengadakan pertemuan <b>lessons learned</b>:</p>
      <ul>
        <li><b>Berhasil:</b> daily standup menjaga hambatan cepat terungkap.</li>
        <li><b>Perlu diperbaiki:</b> estimasi awal integrasi pembayaran terlalu optimis; tambahkan cadangan waktu 20 persen lain kali.</li>
      </ul>
      <div class="callout">Perhatikan bahwa lima fase itu <b>tidak selalu berurutan kaku</b>: eksekusi dan pemantauan berjalan bersamaan, dan Scrum mengulang siklus kecil di dalam fase eksekusi. Inilah gabungan kerangka klasik dengan praktik Agile.</div>
    `,
  },
  {
    id: "pm-latihan-ide",
    cat: "proyek",
    title: "Ide Proyek untuk Latihan Manajemen Proyek",
    minutes: 8,
    summary: "Sepuluh skenario proyek untuk melatih keterampilan PM secara nyata.",
    body: `
      <p>Cara terbaik belajar manajemen proyek adalah <b>mempraktikkannya</b>. Pilih salah satu skenario di bawah, lalu latih dengan membuat charter, WBS, jadwal, dan risk register-nya. Tiap skenario menantang keterampilan PM yang berbeda.</p>
      <table>
        <tr><th>No</th><th>Skenario proyek</th><th>Tantangan utama</th><th>Keterampilan PM yang dilatih</th></tr>
        <tr><td>1</td><td>Menyelenggarakan seminar kampus</td><td>Banyak pihak (pembicara, sponsor, peserta) dan tenggat tanggal acara yang tak bisa mundur</td><td>Manajemen stakeholder, penjadwalan, komunikasi</td></tr>
        <tr><td>2</td><td>Mengembangkan website organisasi</td><td>Kebutuhan sering berubah dan scope mudah melebar</td><td>Manajemen scope, mencegah scope creep, Agile</td></tr>
        <tr><td>3</td><td>Migrasi sistem lama ke sistem baru</td><td>Risiko kehilangan data dan gangguan operasional saat peralihan</td><td>Manajemen risiko, perencanaan, change control</td></tr>
        <tr><td>4</td><td>Peluncuran produk baru</td><td>Koordinasi lintas tim (produksi, pemasaran, penjualan) dengan tenggat pasar</td><td>Koordinasi, penjadwalan, manajemen ketergantungan</td></tr>
        <tr><td>5</td><td>Riset dan penulisan tesis</td><td>Proyek jangka panjang seorang diri, mudah kehilangan ritme</td><td>Perencanaan, disiplin jadwal, manajemen milestone</td></tr>
        <tr><td>6</td><td>Renovasi ruang kerja atau kos</td><td>Anggaran ketat dan banyak vendor (tukang, material)</td><td>Manajemen anggaran, estimasi biaya, vendor</td></tr>
        <tr><td>7</td><td>Membuat aplikasi mobile sederhana</td><td>Kebutuhan tak pasti, cocok dikerjakan bertahap</td><td>Scrum, user story, estimasi, sprint</td></tr>
        <tr><td>8</td><td>Kampanye penggalangan dana amal</td><td>Sumber daya sukarelawan terbatas dan target dana</td><td>Kepemimpinan tim, motivasi, manajemen sumber daya</td></tr>
        <tr><td>9</td><td>Membuat konten kanal YouTube rutin</td><td>Aliran pekerjaan berulang tanpa batch tetap</td><td>Kanban, manajemen alur kerja, batas WIP</td></tr>
        <tr><td>10</td><td>Pindahan kantor ke gedung baru</td><td>Waktu henti operasional harus sekecil mungkin</td><td>Perencanaan, penjadwalan, manajemen risiko</td></tr>
      </table>
      <h4>Cara melatih tiap skenario</h4>
      <ol>
        <li>Tulis <b>project charter</b> singkat: tujuan, sponsor, anggaran, dan tenggat.</li>
        <li>Buat <b>WBS</b>: pecah proyek menjadi bagian-bagian kecil.</li>
        <li>Susun <b>jadwal</b> sederhana dan tandai jalur kritisnya.</li>
        <li>Isi <b>risk register</b>: minimal tiga risiko beserta responsnya.</li>
        <li>Jalankan di <b>papan kerja</b> (Trello/Jira/Notion) dan pantau kemajuannya.</li>
      </ol>
      <div class="callout">Mulailah dari skenario kecil dan familiar, seperti menyelenggarakan seminar kampus. Setelah nyaman, naik ke proyek yang penuh ketidakpastian seperti aplikasi mobile agar terlatih beradaptasi ala Agile.</div>
    `,
  },
];

export const PM_QUIZZES: Record<string, Question[]> = {
  "pm-intro": [
    { q: "Ciri utama sebuah proyek adalah:", options: ["Berulang dan tetap", "Sementara dan unik", "Tanpa tenggat", "Selalu murah"], answer: 1, explain: "Proyek bersifat sementara (ada awal-akhir) dan menghasilkan sesuatu yang unik." },
    { q: "Manakah yang termasuk pekerjaan operasional, bukan proyek?", options: ["Membangun website baru", "Melayani pembeli tiap hari", "Membuat aplikasi kasir", "Meluncurkan produk baru"], answer: 1, explain: "Melayani pembeli tiap hari adalah kegiatan rutin berkelanjutan (operasional)." },
    { q: "Tujuan utama manajemen proyek adalah memastikan proyek selesai:", options: ["Semewah mungkin", "Tepat waktu, sesuai anggaran, dan tujuan", "Tanpa perencanaan", "Selama mungkin"], answer: 1, explain: "Manajemen proyek menyeimbangkan waktu, biaya, dan tujuan (scope)." },
  ],
  "pm-role": [
    { q: "Sebagian besar pekerjaan seorang Project Manager sebenarnya adalah:", options: ["Menulis kode", "Komunikasi", "Mendesain tampilan", "Menguji produk"], answer: 1, explain: "Sekitar 80 persen pekerjaan PM adalah komunikasi dan koordinasi." },
    { q: "Berikut termasuk tanggung jawab PM, KECUALI:", options: ["Menyusun jadwal", "Mengelola risiko", "Mengerjakan semua tugas teknis sendiri", "Melaporkan kemajuan"], answer: 2, explain: "PM memimpin dan mengoordinasi, bukan mengerjakan semua tugas teknis sendiri." },
    { q: "Manakah contoh keterampilan lunak (soft skill) PM?", options: ["Penjadwalan", "Kepemimpinan", "Manajemen anggaran", "Analisis risiko"], answer: 1, explain: "Kepemimpinan adalah keterampilan lunak; sisanya keterampilan keras." },
  ],
  "pm-constraint": [
    { q: "Tiga sisi Triple Constraint adalah:", options: ["Scope, waktu, biaya", "Orang, alat, tempat", "Risiko, kualitas, komunikasi", "Rencana, eksekusi, penutupan"], answer: 0, explain: "Segitiga besi terdiri dari scope, waktu, dan biaya." },
    { q: "Jika scope bertambah tetapi tenggat tetap, biasanya:", options: ["Tidak ada dampak", "Biaya naik atau kualitas turun", "Proyek makin murah", "Waktu ikut berkurang"], answer: 1, explain: "Menambah pekerjaan tanpa menambah waktu memaksa biaya naik atau kualitas turun." },
    { q: "Fitur yang terus bertambah diam-diam tanpa penyesuaian disebut:", options: ["Critical path", "Scope creep", "Burndown", "Velocity"], answer: 1, explain: "Scope creep adalah penyebab umum proyek gagal." },
  ],
  "pm-lifecycle": [
    { q: "Urutan fase siklus proyek yang benar adalah:", options: ["Eksekusi, inisiasi, perencanaan, penutupan", "Inisiasi, perencanaan, eksekusi, penutupan", "Penutupan, eksekusi, perencanaan, inisiasi", "Perencanaan, inisiasi, penutupan, eksekusi"], answer: 1, explain: "Inisiasi, perencanaan, eksekusi (dengan pemantauan), lalu penutupan." },
    { q: "Fase Pemantauan & Pengendalian berlangsung:", options: ["Hanya di akhir proyek", "Sepanjang eksekusi", "Sebelum inisiasi", "Hanya sekali di awal"], answer: 1, explain: "Pemantauan berjalan bersamaan dengan eksekusi, bukan fase tersendiri di akhir." },
  ],
  "pm-initiation": [
    { q: "Dokumen yang meresmikan proyek dan memberi wewenang kepada PM adalah:", options: ["Business case", "Project charter", "WBS", "Burndown chart"], answer: 1, explain: "Project charter meresmikan proyek dan memberi wewenang PM." },
    { q: "Business case terutama menjawab pertanyaan:", options: ["Siapa yang bertanggung jawab?", "Kenapa proyek ini menguntungkan?", "Kapan tugas selesai?", "Berapa story point-nya?"], answer: 1, explain: "Business case menjelaskan alasan bisnis dan manfaat proyek." },
    { q: "Tanpa project charter, seorang PM tidak punya:", options: ["Komputer", "Wewenang resmi", "Rekan kerja", "Kopi"], answer: 1, explain: "Charter adalah surat izin resmi yang memberi PM wewenang meminta sumber daya." },
  ],
  "pm-planning": [
    { q: "Rangkuman seluruh rencana proyek disebut:", options: ["Project charter", "Project management plan", "Risk register", "Burndown chart"], answer: 1, explain: "Semua rencana dirangkum dalam project management plan." },
    { q: "Prinsip klasik tentang perencanaan berbunyi:", options: ["Gagal merencanakan sama dengan merencanakan kegagalan", "Rencana itu tidak penting", "Eksekusi lebih dulu, rencana belakangan", "Semua rencana pasti tepat"], answer: 0, explain: "Perencanaan yang baik terbayar berkali lipat saat eksekusi." },
  ],
  "pm-execution": [
    { q: "Saat eksekusi, fokus utama PM bergeser ke:", options: ["Menulis dokumen", "Memimpin dan mengelola orang", "Membuat charter", "Menutup kontrak"], answer: 1, explain: "Eksekusi menuntut PM memimpin tim dan menghilangkan hambatan." },
    { q: "Gaya kepemimpinan yang melayani tim dan menghilangkan hambatan disebut:", options: ["Mikromanajemen", "Servant leadership", "Otokratik", "Laissez-faire"], answer: 1, explain: "Servant leadership: pemimpin melayani dan mendukung tim." },
    { q: "Sikap PM yang lebih baik saat ada masalah adalah:", options: ["Menyalahkan anggota tim", "Fokus mencari solusi bersama", "Mengabaikannya", "Mengambil alih semua tugas"], answer: 1, explain: "Fokus pada solusi lebih produktif daripada menyalahkan." },
  ],
  "pm-monitoring": [
    { q: "Inti dari pemantauan & pengendalian adalah membandingkan:", options: ["Tim satu dengan tim lain", "Rencana dengan kenyataan", "Anggaran dengan gaji", "Sprint dengan Kanban"], answer: 1, explain: "Membandingkan rencana dengan kenyataan lalu mengoreksi selisihnya." },
    { q: "Proses resmi untuk menilai dan menyetujui perubahan disebut:", options: ["Change control", "Daily scrum", "Sprint review", "Lessons learned"], answer: 0, explain: "Change control menilai dampak tiap permintaan perubahan sebelum disetujui." },
    { q: "Kapan biaya memperbaiki penyimpangan paling murah?", options: ["Saat terdeteksi sedini mungkin", "Saat proyek hampir selesai", "Setelah penutupan", "Tidak berpengaruh"], answer: 0, explain: "Semakin dini terdeteksi, semakin murah memperbaikinya." },
  ],
  "pm-closing": [
    { q: "Catatan apa yang berjalan baik dan yang perlu diperbaiki disebut:", options: ["Business case", "Lessons learned", "Sprint backlog", "Gantt chart"], answer: 1, explain: "Lessons learned membantu proyek berikutnya tidak mengulang kesalahan." },
    { q: "Persetujuan resmi bahwa hasil proyek diterima disebut:", options: ["Sign-off", "Backlog", "Sprint", "Slack"], answer: 0, explain: "Sign-off adalah persetujuan akhir penerimaan hasil proyek." },
  ],
  "pm-waterfall": [
    { q: "Ciri khas metodologi Waterfall adalah:", options: ["Iteratif berulang", "Berurutan, satu fase selesai baru lanjut", "Tanpa fase", "Selalu berubah tiap hari"], answer: 1, explain: "Waterfall berjalan berurutan; fase berikutnya menunggu fase sebelumnya selesai." },
    { q: "Kelemahan terbesar Waterfall adalah:", options: ["Terlalu fleksibel", "Hasil baru terlihat di akhir dan sulit berubah", "Tanpa dokumentasi", "Tidak punya fase"], answer: 1, explain: "Pelanggan baru melihat hasil di akhir, sehingga perubahan mahal." },
    { q: "Waterfall paling cocok ketika kebutuhan:", options: ["Sering berubah", "Sudah jelas dan stabil", "Belum diketahui", "Tidak penting"], answer: 1, explain: "Waterfall cocok bila kebutuhan pasti dan tidak banyak berubah." },
  ],
  "pm-agile": [
    { q: "Agile paling tepat digambarkan sebagai:", options: ["Satu alat tunggal", "Filosofi atau cara berpikir", "Nama perusahaan", "Jenis kontrak"], answer: 1, explain: "Agile adalah filosofi yang diterapkan lewat kerangka seperti Scrum dan Kanban." },
    { q: "Salah satu nilai Agile Manifesto adalah lebih menghargai:", options: ["Dokumentasi lengkap di atas perangkat lunak yang bekerja", "Menanggapi perubahan di atas mengikuti rencana kaku", "Proses di atas individu", "Kontrak di atas kolaborasi"], answer: 1, explain: "Agile mengutamakan menanggapi perubahan dibanding mengikuti rencana kaku." },
    { q: "Dibanding Waterfall, Agile menghasilkan produk secara:", options: ["Sekaligus di akhir", "Bertahap tiap iterasi", "Tanpa hasil", "Hanya di awal"], answer: 1, explain: "Agile menghasilkan increment bertahap tiap iterasi." },
  ],
  "pm-scrum-intro": [
    { q: "Siklus kerja tetap dalam Scrum disebut:", options: ["Sprint", "Gantt", "Slack", "Charter"], answer: 0, explain: "Scrum membagi pekerjaan menjadi sprint (biasanya 1 sampai 4 minggu)." },
    { q: "Tiga pilar Scrum adalah:", options: ["Waktu, biaya, scope", "Transparansi, inspeksi, adaptasi", "Rencana, eksekusi, tutup", "PO, SM, Developers"], answer: 1, explain: "Tiga pilar empiris Scrum: transparansi, inspeksi, dan adaptasi." },
    { q: "Hasil yang bisa dipakai dari tiap sprint disebut:", options: ["Charter", "Increment", "Backlog", "Velocity"], answer: 1, explain: "Increment adalah bagian produk yang selesai tiap sprint." },
  ],
  "pm-kanban": [
    { q: "Batas jumlah tugas yang boleh dikerjakan bersamaan disebut:", options: ["WIP limit", "Velocity", "Slack", "Sprint"], answer: 0, explain: "WIP limit membatasi pekerjaan berjalan agar tim tidak kewalahan." },
    { q: "Perbedaan utama Kanban dibanding Scrum adalah:", options: ["Kanban memakai sprint berjangka tetap", "Kanban mengalir terus tanpa sprint tetap", "Kanban wajib punya Scrum Master", "Kanban tidak visual"], answer: 1, explain: "Kanban berbasis aliran terus-menerus, bukan sprint berjangka tetap." },
    { q: "Kanban sangat cocok untuk tim yang:", options: ["Merilis sekali di akhir", "Menangani permintaan yang masuk kapan saja", "Tidak punya pekerjaan", "Menolak perubahan"], answer: 1, explain: "Kanban cocok untuk pekerjaan yang datang terus, seperti tim support." },
  ],
  "pm-scrum-roles": [
    { q: "Siapa yang bertanggung jawab mengelola dan memprioritaskan product backlog?", options: ["Scrum Master", "Product Owner", "Developers", "Sponsor"], answer: 1, explain: "Product Owner mengelola backlog dan memaksimalkan nilai produk." },
    { q: "Peran Scrum Master paling tepat digambarkan sebagai:", options: ["Bos yang memerintah tim", "Servant leader yang menghilangkan hambatan", "Penulis semua kode", "Pemilik anggaran"], answer: 1, explain: "Scrum Master melayani tim dan memastikan Scrum berjalan benar." },
    { q: "Siapa yang menentukan BAGAIMANA pekerjaan teknis dikerjakan?", options: ["Product Owner", "Sponsor", "Developers", "Klien"], answer: 2, explain: "Developers menentukan cara teknis mengerjakan pekerjaan." },
  ],
  "pm-scrum-events": [
    { q: "Pertemuan singkat harian 15 menit dalam Scrum disebut:", options: ["Sprint Review", "Daily Scrum", "Retrospective", "Sprint Planning"], answer: 1, explain: "Daily Scrum adalah pertemuan harian singkat untuk menyelaraskan rencana." },
    { q: "Event yang membahas PRODUK (menunjukkan increment) adalah:", options: ["Sprint Review", "Retrospective", "Daily Scrum", "Sprint Planning"], answer: 0, explain: "Sprint Review menunjukkan increment dan meminta umpan balik." },
    { q: "Event yang mengevaluasi CARA KERJA tim adalah:", options: ["Sprint Review", "Sprint Retrospective", "Daily Scrum", "Sprint Planning"], answer: 1, explain: "Retrospective membahas proses/cara kerja tim, bukan produk." },
  ],
  "pm-scrum-artifacts": [
    { q: "Daftar semua pekerjaan yang mungkin dilakukan untuk produk disebut:", options: ["Sprint Backlog", "Product Backlog", "Increment", "Burndown"], answer: 1, explain: "Product Backlog memuat semua kebutuhan produk yang diprioritaskan PO." },
    { q: "Kesepakatan tim tentang arti kata selesai disebut:", options: ["Definition of Done", "Sprint Goal", "Velocity", "WIP limit"], answer: 0, explain: "Definition of Done menyamakan pemahaman tentang selesai." },
    { q: "Komitmen yang melekat pada Sprint Backlog adalah:", options: ["Product Goal", "Sprint Goal", "Definition of Done", "Velocity"], answer: 1, explain: "Sprint Backlog berkomitmen pada Sprint Goal." },
  ],
  "pm-user-story": [
    { q: "Format user story yang benar adalah:", options: ["Sebagai [pengguna], saya ingin [tujuan] agar [manfaat]", "Buatlah [fitur] dengan [teknologi]", "Kapan [tugas] selesai oleh [orang]", "Karena [alasan], maka [hasil]"], answer: 0, explain: "User story ditulis dari sudut pandang pengguna beserta manfaatnya." },
    { q: "Acceptance criteria berfungsi untuk:", options: ["Menentukan gaji tim", "Memperjelas kapan story dianggap selesai", "Mengurutkan sprint", "Menghitung anggaran"], answer: 1, explain: "Acceptance criteria menyatakan syarat sebuah story dianggap selesai." },
    { q: "Huruf S dalam kriteria INVEST berarti user story sebaiknya:", options: ["Besar", "Kecil (small)", "Statis", "Sederhana bahasanya"], answer: 1, explain: "Small: cukup kecil untuk diselesaikan dalam satu sprint." },
  ],
  "pm-estimation": [
    { q: "Story point mengukur pekerjaan secara:", options: ["Jam pasti", "Ukuran relatif", "Rupiah", "Jumlah orang"], answer: 1, explain: "Story point adalah ukuran relatif kerumitan, usaha, dan ketidakpastian." },
    { q: "Deret angka yang umum dipakai untuk story point adalah:", options: ["1, 2, 3, 4, 5", "Fibonacci (1, 2, 3, 5, 8, 13)", "Kelipatan 10", "Bilangan genap"], answer: 1, explain: "Deret Fibonacci mencerminkan meningkatnya ketidakpastian pada pekerjaan besar." },
    { q: "Manfaat utama planning poker adalah:", options: ["Menentukan gaji", "Memunculkan diskusi dan menyamakan pemahaman", "Mempercepat sprint", "Menghapus backlog"], answer: 1, explain: "Perbedaan estimasi memicu diskusi yang menyamakan pemahaman tim." },
  ],
  "pm-scope-wbs": [
    { q: "WBS adalah teknik untuk:", options: ["Mengurutkan waktu tugas", "Memecah proyek jadi bagian-bagian kecil", "Menghitung risiko", "Membuat charter"], answer: 1, explain: "WBS memecah proyek menjadi paket kerja yang lebih kecil." },
    { q: "Aturan 100 persen pada WBS berarti WBS harus mencakup:", options: ["Setengah pekerjaan", "Seluruh pekerjaan, tidak lebih tidak kurang", "Hanya tugas penting", "Hanya biaya"], answer: 1, explain: "WBS harus memuat seluruh pekerjaan proyek secara utuh." },
    { q: "WBS memecah proyek berdasarkan:", options: ["Urutan waktu", "Hasil/deliverables", "Nama orang", "Anggaran"], answer: 1, explain: "WBS memecah deliverables; jadwal disusun setelahnya." },
  ],
  "pm-schedule": [
    { q: "Diagram batang yang menampilkan tugas terhadap waktu disebut:", options: ["Gantt chart", "Burndown chart", "CFD", "Risk matrix"], answer: 0, explain: "Gantt chart menampilkan tugas di sumbu tegak dan waktu di sumbu datar." },
    { q: "Critical path adalah:", options: ["Tugas termurah", "Rangkaian tugas terpanjang penentu durasi proyek", "Tugas paling mudah", "Tugas tanpa ketergantungan"], answer: 1, explain: "Critical path adalah rangkaian terpanjang yang menentukan durasi minimum proyek." },
    { q: "Tugas di jalur kritis memiliki slack (kelonggaran) sebesar:", options: ["Sangat besar", "Nol", "Tak terhingga", "Setengah durasi"], answer: 1, explain: "Tugas kritis tidak punya slack; keterlambatannya menunda seluruh proyek." },
  ],
  "pm-budget": [
    { q: "Teknik estimasi biaya paling teliti adalah:", options: ["Analogi", "Parametrik", "Bottom-up", "Tebakan"], answer: 2, explain: "Bottom-up menjumlahkan estimasi tiap paket kerja WBS, paling teliti." },
    { q: "Gaji tim dan lisensi perangkat lunak termasuk biaya:", options: ["Tidak langsung", "Langsung", "Cadangan", "Tersembunyi"], answer: 1, explain: "Biaya langsung terkait langsung dengan pekerjaan proyek." },
    { q: "Dana yang disisihkan untuk risiko yang diketahui disebut:", options: ["Gaji", "Cadangan kontingensi", "Pajak", "Bonus"], answer: 1, explain: "Cadangan kontingensi mengantisipasi risiko yang diketahui." },
  ],
  "pm-quality": [
    { q: "Quality Assurance (QA) berfokus pada:", options: ["Produk", "Proses (mencegah cacat)", "Anggaran", "Jadwal"], answer: 1, explain: "QA berfokus pada proses untuk mencegah cacat." },
    { q: "Menguji aplikasi untuk menemukan bug adalah contoh:", options: ["Quality Assurance", "Quality Control", "Business case", "WBS"], answer: 1, explain: "QC berfokus pada produk untuk menemukan cacat." },
    { q: "Dalam manajemen kualitas, mencegah cacat dibanding memeriksa belakangan biasanya:", options: ["Lebih mahal", "Lebih murah", "Sama saja", "Tidak mungkin"], answer: 1, explain: "Mencegah cacat sejak awal lebih murah daripada memperbaiki belakangan." },
  ],
  "pm-risk": [
    { q: "Risiko dianalisis berdasarkan dua hal, yaitu:", options: ["Warna dan bentuk", "Kemungkinan dan dampak", "Waktu dan tempat", "Nama dan nomor"], answer: 1, explain: "Prioritas risiko ditentukan dari kemungkinan (probability) dan dampak (impact)." },
    { q: "Membeli asuransi untuk memindahkan risiko ke pihak lain adalah strategi:", options: ["Hindari (avoid)", "Kurangi (mitigate)", "Alihkan (transfer)", "Terima (accept)"], answer: 2, explain: "Transfer memindahkan risiko ke pihak lain, misalnya asuransi." },
    { q: "Daftar risiko proyek dicatat dalam:", options: ["Risk register", "Gantt chart", "Sprint backlog", "Charter"], answer: 0, explain: "Risk register memuat daftar risiko yang ditinjau berkala." },
  ],
  "pm-stakeholder": [
    { q: "Stakeholder adalah:", options: ["Hanya klien", "Siapa saja yang terpengaruh atau memengaruhi proyek", "Hanya tim developer", "Hanya sponsor"], answer: 1, explain: "Stakeholder mencakup semua pihak yang terpengaruh atau berpengaruh." },
    { q: "Menurut matriks Power/Interest, stakeholder pengaruh tinggi dan minat tinggi sebaiknya:", options: ["Cukup dipantau", "Dikelola dengan saksama", "Diabaikan", "Diberi info sesekali"], answer: 1, explain: "Pengaruh tinggi dan minat tinggi perlu dikelola dengan saksama." },
    { q: "Akar sebagian besar masalah proyek biasanya adalah:", options: ["Komunikasi buruk", "Terlalu banyak dana", "Tim terlalu besar", "Alat terlalu canggih"], answer: 0, explain: "Komunikasi buruk adalah akar umum masalah proyek." },
  ],
  "pm-tools": [
    { q: "Alat yang paling kuat untuk Scrum dan Kanban dengan backlog serta sprint adalah:", options: ["Jira", "Kalkulator", "Notepad", "Kalender"], answer: 0, explain: "Jira kuat untuk Agile: backlog, sprint, dan laporan." },
    { q: "Untuk tim kecil dengan tugas sederhana, alat yang ringan dan mudah dipakai adalah:", options: ["Jira", "Trello", "SAP", "Oracle"], answer: 1, explain: "Trello berbasis papan Kanban visual yang sederhana." },
    { q: "Prinsip yang benar tentang alat manajemen proyek adalah:", options: ["Tim harus mengubah cara kerja demi alat", "Alat sebaiknya mengikuti proses kerja tim", "Alat paling rumit selalu terbaik", "Alat menggantikan komunikasi"], answer: 1, explain: "Alat mendukung proses tim, bukan sebaliknya." },
  ],
  "pm-metrics": [
    { q: "Velocity mengukur:", options: ["Jumlah story point yang diselesaikan tim per sprint", "Sisa anggaran", "Jumlah rapat", "Jumlah bug"], answer: 0, explain: "Velocity adalah story point yang diselesaikan per sprint." },
    { q: "Grafik yang menunjukkan sisa pekerjaan menurun sepanjang sprint disebut:", options: ["Burndown chart", "Gantt chart", "Risk matrix", "Pie chart"], answer: 0, explain: "Burndown chart menampilkan sisa pekerjaan terhadap waktu." },
    { q: "Velocity sebaiknya dipakai untuk:", options: ["Membandingkan dan menghukum antar tim", "Perencanaan tim itu sendiri", "Menentukan gaji", "Menilai kepribadian"], answer: 1, explain: "Velocity untuk perencanaan tim sendiri, bukan membandingkan antar tim." },
  ],
  "pm-career": [
    { q: "Sertifikasi manajemen proyek umum yang sangat diakui dan mensyaratkan pengalaman adalah:", options: ["PMP", "Trello", "WBS", "CFD"], answer: 0, explain: "PMP dari PMI diakui global dan mensyaratkan jam pengalaman." },
    { q: "Sertifikasi yang berfokus pada peran Scrum Master antara lain:", options: ["CSM/PSM", "PMP", "CAPM", "ITIL"], answer: 0, explain: "CSM (Scrum Alliance) dan PSM (Scrum.org) berfokus pada Scrum Master." },
    { q: "Yang membuat seorang PM bertahan dalam karier terutama adalah:", options: ["Hanya sertifikat", "Keterampilan lunak seperti komunikasi dan kepemimpinan", "Jumlah alat yang dikuasai", "Kecepatan mengetik"], answer: 1, explain: "Sertifikasi membuka pintu, tetapi keterampilan lunak yang menopang karier." },
  ],
  "pm-tools-setup": [
    { q: "Untuk tim kecil yang butuh papan sederhana dan cepat dipakai, alat yang paling pas adalah:", options: ["Jira", "Trello", "SAP", "Oracle"], answer: 1, explain: "Trello ringan dan mudah, cocok untuk tim kecil dan tugas sederhana." },
    { q: "Notion paling menonjol dibanding yang lain karena:", options: ["Metrik Agile otomatis paling lengkap", "Papan tugas bisa menyatu dengan catatan dan dokumen", "Satu-satunya yang gratis", "Hanya untuk developer"], answer: 1, explain: "Notion fleksibel dan menyatukan papan tugas dengan wiki serta dokumen." },
    { q: "Batas jumlah kartu yang boleh berada di kolom In Progress disebut:", options: ["Swimlane", "Batas WIP", "Assignee", "Due date"], answer: 1, explain: "Batas WIP mencegah tim mengerjakan terlalu banyak tugas sekaligus." },
  ],
  "pm-templates": [
    { q: "Dokumen yang meresmikan proyek dan mencantumkan tujuan, sponsor, serta anggaran perkiraan adalah:", options: ["Risk register", "Project charter", "Status report", "Sprint backlog"], answer: 1, explain: "Project charter meresmikan proyek dan memuat tujuan, sponsor, anggaran, dan PM." },
    { q: "Dalam matriks RACI, tiap tugas sebaiknya hanya memiliki satu huruf:", options: ["R", "A", "C", "I"], answer: 1, explain: "Hanya boleh ada satu Accountable (A) agar tanggung jawab akhir tidak kabur." },
    { q: "Dokumen yang berisi daftar risiko beserta kemungkinan, dampak, dan responsnya adalah:", options: ["WBS", "Risk register", "Project charter", "Status report"], answer: 1, explain: "Risk register mencatat risiko, kemungkinan, dampak, dan rencana respons." },
  ],
  "pm-studi-kasus": [
    { q: "Pada fase inisiasi studi kasus, dokumen yang meresmikan proyek aplikasi toko online adalah:", options: ["Burndown chart", "Project charter", "Sprint backlog", "Retrospective"], answer: 1, explain: "Inisiasi menghasilkan business case dan project charter." },
    { q: "Saat pemilik meminta tambahan fitur ulasan produk di tengah proyek, PM sebaiknya:", options: ["Langsung mengerjakannya diam-diam", "Menjalankan change control lalu minta persetujuan sponsor", "Menolak semua perubahan", "Menghentikan proyek"], answer: 1, explain: "Perubahan dinilai dampaknya lewat change control sebelum disetujui masuk scope." },
    { q: "Pada fase penutupan, kegiatan mencatat apa yang berhasil dan perlu diperbaiki disebut:", options: ["Daily standup", "Lessons learned", "Sprint planning", "WBS"], answer: 1, explain: "Lessons learned merekam pelajaran agar proyek berikutnya lebih baik." },
  ],
  "pm-latihan-ide": [
    { q: "Skenario menyelenggarakan seminar kampus paling melatih keterampilan:", options: ["Menulis kode", "Manajemen stakeholder dan penjadwalan", "Desain grafis", "Akuntansi pajak"], answer: 1, explain: "Seminar melibatkan banyak pihak dan tenggat tanggal yang tak bisa mundur." },
    { q: "Skenario migrasi sistem lama ke baru terutama melatih:", options: ["Manajemen risiko", "Kecepatan mengetik", "Desain logo", "Negosiasi gaji"], answer: 0, explain: "Migrasi berisiko kehilangan data dan gangguan operasional, sehingga melatih manajemen risiko." },
    { q: "Skenario yang paling cocok untuk melatih Kanban dan batas WIP adalah:", options: ["Riset tesis", "Membuat konten kanal YouTube rutin", "Renovasi kos", "Peluncuran produk"], answer: 1, explain: "Konten rutin adalah aliran pekerjaan berulang tanpa batch tetap, khas Kanban." },
  ],
};
