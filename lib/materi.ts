// Materi pembelajaran TOEFL ITP & beasiswa — kurikulum lengkap.
// body berisi HTML sederhana yang dirender pada komponen Materi.

import type { Question } from "@/lib/content";

export type Lesson = {
  id: string;
  cat: string;
  title: string;
  minutes: number;
  summary: string;
  body: string;
};

export const MATERI_CATS: { key: string; label: string; ic: string }[] = [
  { key: "dasar", label: "Dasar-Dasar Bahasa Inggris", ic: "◔" },
  { key: "grammar", label: "Structure & Grammar", ic: "§" },
  { key: "listening", label: "Listening", ic: "♪" },
  { key: "reading", label: "Reading", ic: "❏" },
  { key: "writing", label: "Writing & Esai", ic: "✎" },
  { key: "vocab", label: "Kosakata", ic: "▤" },
  { key: "strategi", label: "Strategi Tes", ic: "◎" },
  { key: "beasiswa", label: "Wawancara & Beasiswa LPDP", ic: "★" },
];

export const LESSONS: Lesson[] = [
  // ===================== DASAR-DASAR =====================
  {
    id: "dasar-pos",
    cat: "dasar",
    title: "Kelas Kata (Parts of Speech) — dari Nol",
    minutes: 9,
    summary: "8 jenis kata: kata benda, kerja, sifat, keterangan, dll. Fondasi semua grammar.",
    body: `
      <p>Sebelum belajar aturan, kamu perlu tahu <b>jenis-jenis kata</b>. Ibarat main balok: kamu harus kenal tiap balok dulu sebelum menyusunnya jadi bangunan (kalimat). Di TOEFL, banyak soal Structure hanya bisa dijawab kalau kamu tahu sebuah kata itu <b>kata benda, kata kerja, kata sifat,</b> atau <b>kata keterangan</b>.</p>
      <h4>8 kelas kata utama</h4>
      <table>
        <tr><th>Kelas kata</th><th>Fungsi</th><th>Contoh</th></tr>
        <tr><td><b>Noun</b> (kata benda)</td><td>nama orang, benda, tempat, ide</td><td>student, book, Surabaya, freedom</td></tr>
        <tr><td><b>Pronoun</b> (kata ganti)</td><td>mengganti kata benda</td><td>I, you, he, she, it, they</td></tr>
        <tr><td><b>Verb</b> (kata kerja)</td><td>tindakan / keadaan</td><td>study, run, is, become</td></tr>
        <tr><td><b>Adjective</b> (kata sifat)</td><td>menerangkan kata benda</td><td>tall, difficult, blue</td></tr>
        <tr><td><b>Adverb</b> (kata keterangan)</td><td>menerangkan kerja/sifat</td><td>quickly, very, well</td></tr>
        <tr><td><b>Preposition</b> (kata depan)</td><td>menghubungkan tempat/waktu</td><td>in, on, at, by, with</td></tr>
        <tr><td><b>Conjunction</b> (kata sambung)</td><td>menyambung kata/klausa</td><td>and, but, because, although</td></tr>
        <tr><td><b>Article</b> (kata sandang)</td><td>menandai kata benda</td><td>a, an, the</td></tr>
      </table>
      <h4>Cara mengenali dari posisi</h4>
      <ul>
        <li>Setelah <i>a/an/the</i> atau kata sifat → biasanya <b>kata benda</b>: "a <b>book</b>", "a difficult <b>test</b>".</li>
        <li>Sebelum kata benda → biasanya <b>kata sifat</b>: "<b>difficult</b> test".</li>
        <li>Menerangkan kata kerja (bagaimana?) → <b>kata keterangan</b>, sering berakhiran <i>-ly</i>: "runs <b>quickly</b>".</li>
      </ul>
      <h4>Yang sering tertukar</h4>
      <ul>
        <li><b>Kata sifat</b> vs <b>kata keterangan</b>: "She is a <b>careful</b> driver." (sifat → benda) vs "She drives <b>carefully</b>." (keterangan → kerja).</li>
        <li>Satu kata bisa beda kelas tergantung posisi: "a <b>study</b>" (benda) vs "to <b>study</b>" (kerja).</li>
      </ul>
      <div class="callout"><b>Kenapa penting untuk ITP:</b> soal "word form" meminta kamu memilih bentuk yang benar (noun/adjective/adverb). Kalau kamu tahu posisinya, kamu tahu jawabannya. Klik <b>Perdalam dengan AI</b> di bawah untuk latihan contoh lebih banyak.</div>
    `,
  },
  {
    id: "dasar-kalimat",
    cat: "dasar",
    title: "Bagian Kalimat: Subjek, Kata Kerja, Objek",
    minutes: 8,
    summary: "Apa yang membuat sekumpulan kata menjadi kalimat yang benar.",
    body: `
      <p>Kalimat bahasa Inggris yang baku minimal punya <b>dua bagian</b>: <b>subjek</b> (pelaku) dan <b>kata kerja</b> (predikat). Tanpa keduanya, itu belum kalimat lengkap.</p>
      <h4>Bagian-bagian utama</h4>
      <table>
        <tr><th>Bagian</th><th>Pertanyaan</th><th>Contoh</th></tr>
        <tr><td><b>Subject</b> (subjek)</td><td>Siapa/apa yang melakukan?</td><td><b>The student</b> reads a book.</td></tr>
        <tr><td><b>Verb</b> (kata kerja)</td><td>Melakukan apa?</td><td>The student <b>reads</b> a book.</td></tr>
        <tr><td><b>Object</b> (objek)</td><td>Melakukan pada apa?</td><td>The student reads <b>a book</b>.</td></tr>
        <tr><td><b>Complement</b> (pelengkap)</td><td>Menjelaskan subjek</td><td>She is <b>a teacher</b>.</td></tr>
      </table>
      <h4>Urutan dasar: S – V – O</h4>
      <p>Bahasa Inggris hampir selalu <b>Subjek → Kata kerja → Objek</b>: "<b>I</b> (S) <b>love</b> (V) <b>English</b> (O)." Urutan ini penting; membaliknya sering salah.</p>
      <h4>Frasa vs klausa</h4>
      <ul>
        <li><b>Frasa</b> = kelompok kata tanpa subjek+verba: "in the morning", "a red car".</li>
        <li><b>Klausa</b> = punya subjek+verba: "she woke up early".</li>
      </ul>
      <h4>Kalimat lengkap butuh S + V</h4>
      <ul>
        <li>❌ "Because it rained." → belum lengkap (klausa bergantung).</li>
        <li>✅ "<b>We stayed home</b> because it rained."</li>
        <li>❌ "The book on the table." → tidak ada kata kerja.</li>
        <li>✅ "The book <b>is</b> on the table."</li>
      </ul>
      <div class="callout"><b>Kenapa penting:</b> soal Structure sering memberi kalimat yang kehilangan subjek atau kata kerja utama — tugasmu melengkapinya.</div>
    `,
  },
  {
    id: "dasar-tobe",
    cat: "dasar",
    title: "Kata Kerja 'To Be' & Kata Kerja Aksi",
    minutes: 8,
    summary: "am/is/are/was/were, kalimat negatif & pertanyaan — paling dasar.",
    body: `
      <p>Ada dua jenis kata kerja yang wajib kamu kuasai lebih dulu: <b>to be</b> (adalah/berada) dan <b>kata kerja aksi</b> (melakukan sesuatu).</p>
      <h4>To be — bentuk & pemakaian</h4>
      <table>
        <tr><th>Subjek</th><th>Sekarang</th><th>Lampau</th></tr>
        <tr><td>I</td><td>am</td><td>was</td></tr>
        <tr><td>He / She / It</td><td>is</td><td>was</td></tr>
        <tr><td>You / We / They</td><td>are</td><td>were</td></tr>
      </table>
      <p>Fungsi "to be": menyatakan <b>identitas</b> ("She <b>is</b> a student"), <b>sifat</b> ("They <b>are</b> tired"), dan <b>lokasi</b> ("I <b>am</b> at home").</p>
      <h4>Kata kerja aksi</h4>
      <p>Menyatakan tindakan: <i>study, eat, write, go</i>. Untuk he/she/it di present, tambah <b>-s</b>: "She <b>works</b> hard."</p>
      <h4>Negatif & pertanyaan</h4>
      <ul>
        <li>To be + not: "She <b>is not</b> (isn't) ready."</li>
        <li>Aksi + do/does + not: "He <b>does not</b> (doesn't) study."</li>
        <li>Pertanyaan to be: "<b>Are</b> you ready?" · Pertanyaan aksi: "<b>Do</b> you study?"</li>
      </ul>
      <h4>Kesalahan pemula yang sering</h4>
      <ul>
        <li>❌ "I am go to school." → dua kata kerja. ✅ "I <b>go</b> to school" atau "I <b>am going</b> to school."</li>
        <li>❌ "She work hard." → ✅ "She <b>works</b> hard."</li>
      </ul>
      <div class="callout"><b>Tips:</b> tentukan dulu — kalimatmu butuh "to be" atau kata kerja aksi? Jangan pakai keduanya sekaligus tanpa alasan.</div>
    `,
  },
  {
    id: "dasar-tenses",
    cat: "dasar",
    title: "Mengenal Tenses dari Nol",
    minutes: 9,
    summary: "Konsep waktu + 3 tenses dasar (present, past, future) sebelum yang rumit.",
    body: `
      <p><b>Tense</b> = bentuk kata kerja yang menunjukkan <b>kapan</b> sesuatu terjadi. Dalam bahasa Indonesia kita pakai kata "sudah, sedang, akan"; dalam bahasa Inggris <b>bentuk kata kerjanya yang berubah</b>.</p>
      <h4>Tiga waktu dasar</h4>
      <table>
        <tr><th>Waktu</th><th>Rumus</th><th>Contoh</th><th>Penanda</th></tr>
        <tr><td>Present (sekarang)</td><td>V1 (+s)</td><td>I <b>study</b> every day.</td><td>every day, usually</td></tr>
        <tr><td>Past (lampau)</td><td>V2</td><td>I <b>studied</b> yesterday.</td><td>yesterday, last…, ago</td></tr>
        <tr><td>Future (akan)</td><td>will + V1</td><td>I <b>will study</b> tomorrow.</td><td>tomorrow, next…</td></tr>
      </table>
      <h4>1. Simple Present</h4>
      <p>Untuk kebiasaan & fakta. Ingat tambahkan <b>-s</b> untuk he/she/it: "She <b>reads</b> books." Bentuk lampau kata kerja beraturan: +<b>ed</b> (work → worked); tak beraturan harus dihafal (go → went, eat → ate).</p>
      <h4>2. Simple Past</h4>
      <p>Untuk kejadian selesai di masa lampau: "They <b>visited</b> Jakarta last year." Penanda "ago", "yesterday", "in 1990".</p>
      <h4>3. Simple Future</h4>
      <p>Untuk rencana/prediksi: "It <b>will rain</b> tonight." Alternatif: "be going to" untuk rencana: "I <b>am going to</b> apply."</p>
      <h4>Bandingkan langsung</h4>
      <ul>
        <li>Now/kebiasaan: "I <b>eat</b> rice." </li>
        <li>Kemarin: "I <b>ate</b> rice." </li>
        <li>Besok: "I <b>will eat</b> rice."</li>
      </ul>
      <div class="callout"><b>Langkah berikutnya:</b> setelah paham tiga ini, buka materi <b>"Verb Tenses & Sequence"</b> di kategori Structure untuk tenses lanjutan (perfect, continuous). Butuh lebih banyak contoh dari dasar? Klik <b>Perdalam dengan AI</b>.</div>
    `,
  },
  {
    id: "dasar-noun",
    cat: "dasar",
    title: "Kata Benda: Tunggal, Jamak & Kata Sandang (a/an/the)",
    minutes: 7,
    summary: "Aturan dasar jamak dan kapan pakai a, an, atau the.",
    body: `
      <p><b>Kata benda (noun)</b> adalah nama orang, benda, tempat, atau ide. Menguasai bentuk tunggal/jamak dan kata sandang adalah dasar penting.</p>
      <h4>Tunggal → jamak</h4>
      <table>
        <tr><th>Aturan</th><th>Contoh</th></tr>
        <tr><td>Umumnya + s</td><td>book → book<b>s</b></td></tr>
        <tr><td>Akhiran -s,-ss,-sh,-ch,-x → + es</td><td>box → box<b>es</b>, class → class<b>es</b></td></tr>
        <tr><td>Konsonan + y → -ies</td><td>city → cit<b>ies</b></td></tr>
        <tr><td>Tak beraturan (hafal)</td><td>child → <b>children</b>, man → <b>men</b>, foot → <b>feet</b></td></tr>
      </table>
      <h4>Countable vs Uncountable</h4>
      <ul>
        <li><b>Countable</b> (bisa dihitung): "a book / two books".</li>
        <li><b>Uncountable</b> (tak bisa dihitung, selalu tunggal): water, information, advice. ❌ "informations".</li>
      </ul>
      <h4>Kata sandang a / an / the</h4>
      <ul>
        <li><b>a</b> + bunyi konsonan: "a book". <b>an</b> + bunyi vokal: "an apple", "an hour" (h bisu).</li>
        <li><b>the</b> untuk sesuatu yang <b>spesifik/sudah disebut</b>: "I saw a dog. <b>The</b> dog was big."</li>
        <li>Tanpa sandang untuk hal umum jamak/uncountable: "Books are useful."</li>
      </ul>
      <div class="callout"><b>Kenapa penting:</b> banyak soal Written Expression menjebak dengan jamak/tunggal atau kata sandang yang salah.</div>
    `,
  },

  // ===================== GRAMMAR =====================
  {
    id: "sva",
    cat: "grammar",
    title: "Subject–Verb Agreement (Kesesuaian Subjek–Verba)",
    minutes: 7,
    summary: "Verba harus cocok dengan subjek inti — bukan kata terdekat.",
    body: `
      <p>Kesalahan paling sering di <b>Structure & Written Expression</b> adalah verba yang tidak cocok dengan subjeknya. Kuncinya: temukan <b>subjek inti</b>, abaikan frasa penyisip.</p>
      <h4>1. Frasa penyisip tidak mengubah subjek</h4>
      <ul>
        <li>The <b>professor</b>, along with her students, <b>is</b> attending. <span class="muted">(subjek = professor)</span></li>
        <li>The <b>box</b> of chocolates <b>was</b> expensive. <span class="muted">(subjek = box)</span></li>
      </ul>
      <h4>2. Each / Every / One of / Neither / Either → tunggal</h4>
      <ul>
        <li><b>Each</b> of the applicants <b>was</b> required to submit an essay.</li>
        <li><b>Neither</b> of the answers <b>is</b> correct.</li>
      </ul>
      <h4>3. "The number of" vs "A number of"</h4>
      <ul>
        <li>The number of students <b>is</b> rising. <span class="muted">(tunggal)</span></li>
        <li>A number of students <b>are</b> late. <span class="muted">(jamak)</span></li>
      </ul>
      <h4>4. Kata yang selalu tunggal di ITP</h4>
      <p><i>data, research, information, equipment, news, economics, mathematics</i>.</p>
      <ul><li>The data <b>is</b> accurate. · Mathematics <b>is</b> difficult.</li></ul>
      <h4>5. "There is / There are" ikut kata benda setelahnya</h4>
      <ul><li>There <b>is</b> a book. · There <b>are</b> many books.</li></ul>
      <div class="callout"><b>Latihan:</b> "Neither of the answers ___ correct." → <b>is</b>.</div>
    `,
  },
  {
    id: "clause",
    cat: "grammar",
    title: "Kalimat Lengkap: Satu Subjek, Satu Verba Utama",
    minutes: 6,
    summary: "Deteksi kalimat yang kehilangan verba utama atau punya verba ganda.",
    body: `
      <p>Setiap kalimat baku butuh <b>subjek</b> dan <b>satu verba utama</b>. Soal Structure sering menghilangkan verba utama, atau menaruh dua verba tanpa penghubung.</p>
      <h4>Pola yang benar</h4>
      <ul>
        <li><b>It is known</b> that the Earth revolves around the Sun.</li>
        <li>The results, <b>which were</b> surprising, changed the theory.</li>
      </ul>
      <h4>Jebakan umum</h4>
      <ul>
        <li>❌ <i>The theory <u>proposed</u> in 1905 by Einstein.</i> → tidak ada verba utama.</li>
        <li>✅ The theory <b>was proposed</b> in 1905 by Einstein.</li>
      </ul>
      <h4>Klausa dependen tidak berdiri sendiri</h4>
      <p>Diawali <i>because, although, when, that, which, who</i> → butuh klausa utama.</p>
      <ul><li>❌ Because the rain was heavy. → ✅ <b>The event was postponed</b> because the rain was heavy.</li></ul>
    `,
  },
  {
    id: "tenses",
    cat: "grammar",
    title: "Verb Tenses & Sequence of Tenses",
    minutes: 9,
    summary: "Semua tenses inti, kata penanda waktu, dan urutan tenses.",
    body: `
      <h4>Tenses inti & penanda waktunya</h4>
      <table>
        <tr><th>Tense</th><th>Bentuk</th><th>Penanda</th></tr>
        <tr><td>Simple present</td><td>V1 / V-s</td><td>always, usually, every day</td></tr>
        <tr><td>Present continuous</td><td>am/is/are + V-ing</td><td>now, at the moment</td></tr>
        <tr><td>Simple past</td><td>V2</td><td>yesterday, ago, in 1990, last…</td></tr>
        <tr><td>Past continuous</td><td>was/were + V-ing</td><td>while, when (aksi berlangsung)</td></tr>
        <tr><td>Present perfect</td><td>have/has + V3</td><td>since, for, already, yet, ever</td></tr>
        <tr><td>Past perfect</td><td>had + V3</td><td>by the time, before, after</td></tr>
        <tr><td>Future</td><td>will + V1 / be going to</td><td>tomorrow, next…</td></tr>
      </table>
      <h4>Since vs For</h4>
      <ul><li>since + <b>titik waktu</b> (since 2010). · for + <b>durasi</b> (for 5 years).</li></ul>
      <h4>Past perfect: aksi lebih dulu di masa lampau</h4>
      <ul><li>By the time we arrived, the movie <b>had started</b>.</li></ul>
      <h4>Sequence of tenses (kalimat tak langsung)</h4>
      <ul><li>She said she <b>was</b> tired. · He told me he <b>had finished</b>.</li></ul>
      <div class="callout"><b>Trap ITP:</b> "ago" selalu dengan <b>simple past</b>, bukan present perfect. ❌ "I have seen him two days ago" → ✅ "I saw him two days ago".</div>
    `,
  },
  {
    id: "modals",
    cat: "grammar",
    title: "Modals & Perfect Modals",
    minutes: 7,
    summary: "can/could, must, should, would + bentuk 'modal + have + V3'.",
    body: `
      <h4>Modal dasar</h4>
      <table>
        <tr><th>Modal</th><th>Makna</th></tr>
        <tr><td>can / could</td><td>kemampuan, izin, kemungkinan</td></tr>
        <tr><td>may / might</td><td>kemungkinan, izin formal</td></tr>
        <tr><td>must / have to</td><td>keharusan; must not = larangan</td></tr>
        <tr><td>should / ought to</td><td>saran</td></tr>
        <tr><td>would</td><td>kebiasaan lampau, pengandaian</td></tr>
      </table>
      <p>Setelah modal selalu <b>V1</b> (bentuk dasar): "She can <b>swim</b>", bukan "swims".</p>
      <h4>Perfect modals (menilai masa lalu)</h4>
      <ul>
        <li><b>must have + V3</b> = pasti sudah (kesimpulan): "He must have left."</li>
        <li><b>should have + V3</b> = seharusnya (tapi tidak): "You should have studied."</li>
        <li><b>could have + V3</b> = bisa saja (tapi tidak terjadi).</li>
      </ul>
      <h4>Bedakan</h4>
      <ul>
        <li><i>used to + V1</i> = dulu terbiasa: "I used to smoke."</li>
        <li><i>be used to + V-ing</i> = terbiasa (sekarang): "I am used to waking early."</li>
        <li><b>must not</b> (dilarang) ≠ <b>don't have to</b> (tidak wajib).</li>
      </ul>
    `,
  },
  {
    id: "passive",
    cat: "grammar",
    title: "Passive Voice (Kalimat Pasif)",
    minutes: 6,
    summary: "Bentuk be + V3 di semua tenses, dan kapan memakainya.",
    body: `
      <h4>Rumus: <b>be + past participle (V3)</b></h4>
      <table>
        <tr><th>Tense</th><th>Pasif</th></tr>
        <tr><td>Present</td><td>is/are + V3 — "The report is written."</td></tr>
        <tr><td>Past</td><td>was/were + V3 — "The bridge was built in 1990."</td></tr>
        <tr><td>Present perfect</td><td>has/have been + V3</td></tr>
        <tr><td>Modal</td><td>modal + be + V3 — "It must be done."</td></tr>
      </table>
      <h4>Kapan dipakai</h4>
      <p>Ketika pelaku tidak penting/tidak diketahui, atau fokus pada objek. Pelaku opsional dengan <i>by</i>.</p>
      <h4>Jebakan umum</h4>
      <ul>
        <li>V3 harus benar: ❌ "was <u>wrote</u>" → ✅ "was <b>written</b>".</li>
        <li>Verba intransitif (happen, occur, arrive, exist) <b>tidak bisa</b> dipasifkan.</li>
        <li>Jangan lupa "be": ❌ "The house built last year" → ✅ "was built".</li>
      </ul>
    `,
  },
  {
    id: "gerinf",
    cat: "grammar",
    title: "Gerunds & Infinitives",
    minutes: 8,
    summary: "Verba mana diikuti V-ing, mana diikuti to + V1.",
    body: `
      <h4>Diikuti gerund (V-ing)</h4>
      <p><i>enjoy, avoid, consider, suggest, mind, finish, admit, deny, practice, postpone, keep, recommend</i>.</p>
      <ul><li>She <b>enjoys reading</b>. · Avoid <b>making</b> careless errors.</li></ul>
      <h4>Diikuti infinitive (to + V1)</h4>
      <p><i>want, decide, hope, agree, plan, refuse, promise, offer, learn, manage, expect, afford</i>.</p>
      <ul><li>They <b>decided to leave</b>. · I <b>hope to pass</b> the test.</li></ul>
      <h4>Preposisi + gerund</h4>
      <ul><li>interested <b>in learning</b>, good <b>at solving</b>, capable <b>of doing</b>, look forward <b>to meeting</b>.</li></ul>
      <h4>Adjective + infinitive</h4>
      <ul><li>It is <b>important to prepare</b>. · She is <b>eager to help</b>.</li></ul>
      <div class="callout"><b>Trap:</b> "look forward <b>to</b>" → <i>to</i> di sini preposisi, jadi diikuti <b>V-ing</b>: "look forward to <b>seeing</b> you".</div>
    `,
  },
  {
    id: "participle",
    cat: "grammar",
    title: "Participles, Reduced Clauses & -ed/-ing Adjectives",
    minutes: 7,
    summary: "Present vs past participle, klausa tereduksi, dangling modifier.",
    body: `
      <h4>Present (-ing, aktif) vs Past (-ed/V3, pasif)</h4>
      <ul>
        <li>The <b>boiling</b> water (air yang mendidih) vs the <b>boiled</b> water (air yang direbus).</li>
        <li>The results, <b>published</b> last year, were surprising.</li>
      </ul>
      <h4>Adjektiva -ed vs -ing (perasaan)</h4>
      <ul>
        <li><b>-ing</b> = sifat penyebab: "The lecture was <b>boring</b>."</li>
        <li><b>-ed</b> = perasaan orang: "The students were <b>bored</b>."</li>
      </ul>
      <h4>Reduced adjective clause</h4>
      <ul><li>The man <s>who is</s> <b>standing</b> there is my advisor.</li></ul>
      <h4>Dangling modifier (kesalahan)</h4>
      <ul><li>❌ <i>Walking to school, the rain started.</i> (hujan tidak berjalan) → ✅ "Walking to school, <b>I</b> got caught in the rain."</li></ul>
    `,
  },
  {
    id: "adjclause",
    cat: "grammar",
    title: "Adjective (Relative) Clauses",
    minutes: 8,
    summary: "who/whom/whose/which/that, defining vs non-defining, reduksi.",
    body: `
      <h4>Pilihan kata ganti relatif</h4>
      <table>
        <tr><th>Untuk</th><th>Subjek</th><th>Objek</th><th>Milik</th></tr>
        <tr><td>Orang</td><td>who / that</td><td>whom / that</td><td>whose</td></tr>
        <tr><td>Benda</td><td>which / that</td><td>which / that</td><td>whose / of which</td></tr>
      </table>
      <ul>
        <li>The student <b>who</b> won is my friend. · The book <b>that</b> I bought is new.</li>
        <li>The scientist <b>whose</b> theory changed physics… </li>
        <li>Tempat: <b>where</b>; waktu: <b>when</b>.</li>
      </ul>
      <h4>Defining vs Non-defining</h4>
      <ul>
        <li>Defining (tanpa koma, boleh "that"): "Students <b>who study</b> pass."</li>
        <li>Non-defining (pakai koma, <b>tak boleh</b> "that"): "My father, <b>who is</b> a teacher, …"</li>
      </ul>
      <h4>Penghilangan & preposisi</h4>
      <ul>
        <li>Objek boleh dihilangkan: "The book (that) I read…"</li>
        <li>"the house <b>in which</b> he lives" = "the house <b>which</b> he lives <b>in</b>".</li>
      </ul>
    `,
  },
  {
    id: "nounclause",
    cat: "grammar",
    title: "Noun Clauses & Embedded Questions",
    minutes: 7,
    summary: "that/wh-/if-whether, urutan kata pertanyaan tersemat, subjunctive.",
    body: `
      <h4>Jenis noun clause</h4>
      <ul>
        <li><b>that</b>: "I know <b>that he is right</b>."</li>
        <li><b>wh-</b>: "I don't know <b>where she lives</b>."</li>
        <li><b>if / whether</b>: "Ask <b>whether it is open</b>."</li>
      </ul>
      <h4>Embedded questions: TANPA inversi</h4>
      <ul>
        <li>❌ "I don't know <u>where is the library</u>." </li>
        <li>✅ "I don't know <b>where the library is</b>." <span class="muted">(S + V, bukan V + S)</span></li>
      </ul>
      <h4>Subjunctive (bentuk dasar) setelah verba/adjektiva keharusan</h4>
      <p>Setelah <i>suggest, recommend, insist, demand, request; it is important/necessary that</i> → verba <b>bentuk dasar</b>.</p>
      <ul><li>The advisor recommended that he <b>submit</b> (bukan "submits") the form.</li>
      <li>It is essential that she <b>be</b> present.</li></ul>
    `,
  },
  {
    id: "advclause",
    cat: "grammar",
    title: "Adverb Clauses & Connectors",
    minutes: 6,
    summary: "Klausa waktu, sebab, kontras, syarat, tujuan + tanda baca.",
    body: `
      <table>
        <tr><th>Makna</th><th>Konjungsi</th></tr>
        <tr><td>Waktu</td><td>when, while, before, after, until, as soon as, since</td></tr>
        <tr><td>Sebab</td><td>because, since, as, now that</td></tr>
        <tr><td>Kontras</td><td>although, though, even though, whereas, while</td></tr>
        <tr><td>Syarat</td><td>if, unless, provided that, as long as</td></tr>
        <tr><td>Tujuan/akibat</td><td>so that, in order that; so … that, such … that</td></tr>
      </table>
      <h4>Tanda baca</h4>
      <ul><li>Klausa adverb di <b>depan</b> → pakai koma: "<b>Although it rained,</b> we went." · Di belakang → tanpa koma.</li></ul>
      <h4>Jangan gandakan konjungsi</h4>
      <ul><li>❌ "<u>Although</u> it rained, <u>but</u> we went." → pilih salah satu.</li></ul>
    `,
  },
  {
    id: "conditional",
    cat: "grammar",
    title: "Conditionals & Wish",
    minutes: 8,
    summary: "Tipe 0–3, mixed, wish, dan inversi (Had I known…).",
    body: `
      <table>
        <tr><th>Tipe</th><th>If-clause</th><th>Main clause</th><th>Makna</th></tr>
        <tr><td>0</td><td>present</td><td>present</td><td>fakta umum</td></tr>
        <tr><td>1</td><td>present</td><td>will + V1</td><td>mungkin (masa depan)</td></tr>
        <tr><td>2</td><td>past</td><td>would + V1</td><td>tidak nyata (sekarang)</td></tr>
        <tr><td>3</td><td>past perfect</td><td>would have + V3</td><td>tidak nyata (lampau)</td></tr>
      </table>
      <ul>
        <li>Tipe 2: "If I <b>were</b> you, I <b>would</b> study harder." <span class="muted">(selalu "were")</span></li>
        <li>Tipe 3: "If she <b>had studied</b>, she <b>would have passed</b>."</li>
      </ul>
      <h4>Wish</h4>
      <ul><li>wish + past: "I wish I <b>had</b> more time." · wish + past perfect: "I wish I <b>had known</b>."</li></ul>
      <h4>Inversi (tanpa "if")</h4>
      <ul><li>"<b>Had I known</b>, I would have come." = If I had known…</li></ul>
    `,
  },
  {
    id: "comparison",
    cat: "grammar",
    title: "Comparisons (Perbandingan)",
    minutes: 7,
    summary: "comparative, superlative, as…as, the more…the more.",
    body: `
      <h4>Bentuk</h4>
      <ul>
        <li>Pendek (1 suku kata): <b>-er / -est</b> — tall → taller → tallest.</li>
        <li>Panjang: <b>more / most</b> — expensive → more expensive → most expensive.</li>
        <li>Tak beraturan: good→better→best, bad→worse→worst, far→farther/further.</li>
      </ul>
      <h4>Pola penting</h4>
      <ul>
        <li>comparative + <b>than</b>: "cheaper <b>than</b> coal".</li>
        <li><b>as … as</b> (sama): "as fast as"; not as … as (kurang).</li>
        <li><b>the</b> + superlative: "the most promising source".</li>
        <li><b>the more … the more</b>: "The more you practice, the better you get."</li>
        <li>Kelipatan: "twice <b>as</b> expensive <b>as</b>", "three times as many".</li>
      </ul>
      <div class="callout"><b>Trap:</b> jangan gandakan — ❌ "more better", ❌ "most fastest".</div>
    `,
  },
  {
    id: "articles",
    cat: "grammar",
    title: "Articles & Determiners (a/an/the + kuantitas)",
    minutes: 6,
    summary: "Kapan a/an, the, atau tanpa artikel; much/many/few/little.",
    body: `
      <h4>a / an</h4>
      <ul><li>Ikuti <b>bunyi</b>, bukan huruf: <b>a</b> university (bunyi "yu"), <b>an</b> hour (h bisu), <b>an</b> MBA.</li></ul>
      <h4>the (spesifik)</h4>
      <ul><li>Sudah disebut, unik, atau superlative: "the sun", "the best".</li></ul>
      <h4>Tanpa artikel (umum)</h4>
      <ul><li>Jamak/uncountable umum: "Books are useful", "Water is essential".</li></ul>
      <h4>Kuantitas</h4>
      <table>
        <tr><th>Countable</th><th>Uncountable</th></tr>
        <tr><td>many, few, a few, a number of</td><td>much, little, a little, an amount of</td></tr>
      </table>
      <ul><li>few = hampir tidak ada (negatif); a few = beberapa (positif). Sama untuk little / a little.</li></ul>
    `,
  },
  {
    id: "pronoun",
    cat: "grammar",
    title: "Pronouns & Reference",
    minutes: 5,
    summary: "Subjek/objek/kepunyaan/refleksif dan kesesuaiannya.",
    body: `
      <table>
        <tr><th>Subjek</th><th>Objek</th><th>Posesif</th><th>Refleksif</th></tr>
        <tr><td>I, he, they</td><td>me, him, them</td><td>my/mine, his, their/theirs</td><td>myself, himself, themselves</td></tr>
      </table>
      <h4>Kesesuaian jumlah & jenis</h4>
      <ul>
        <li>"Each student must bring <b>his or her</b> book." <span class="muted">(ITP formal: hindari "their" untuk "each")</span></li>
        <li>"The company increased <b>its</b> profit." <span class="muted">(its = milik; it's = it is)</span></li>
      </ul>
      <h4>Referensi jelas</h4>
      <ul><li>Hindari acuan ganda/kabur; "one/ones" mengganti kata benda: "the red one".</li></ul>
    `,
  },
  {
    id: "wordorder",
    cat: "grammar",
    title: "Word Order & Inversion",
    minutes: 7,
    summary: "Urutan normal + inversi wajib setelah kata negatif di awal.",
    body: `
      <h4>Urutan dasar</h4>
      <p>Subjek + Verba + Objek + (cara) + (tempat) + (waktu): "She read the book <b>quietly at home last night</b>."</p>
      <h4>Inversi wajib (kata negatif/pembatas di awal)</h4>
      <p>Setelah <i>Never, Rarely, Seldom, Hardly, Not only, No sooner, Not until, Only then, Little</i> → <b>auxiliary + subjek</b>.</p>
      <ul>
        <li>"Never <b>have I</b> seen such a view."</li>
        <li>"Not until 1969 <b>did humans</b> land on the Moon."</li>
        <li>"No sooner <b>had he</b> arrived than it rained."</li>
      </ul>
      <h4>Inversi lain</h4>
      <ul>
        <li>Setelah "so/such": "So difficult <b>was</b> the exam that…"</li>
        <li>Adverbia tempat di awal: "Here <b>comes</b> the bus."</li>
      </ul>
    `,
  },
  {
    id: "wordform",
    cat: "grammar",
    title: "Word Forms (Noun/Verb/Adjective/Adverb)",
    minutes: 6,
    summary: "Tebak bentuk kata yang dibutuhkan dari posisinya + akhiran.",
    body: `
      <h4>Akhiran penanda kelas kata</h4>
      <table>
        <tr><th>Kelas</th><th>Akhiran umum</th></tr>
        <tr><td>Noun</td><td>-tion, -ment, -ness, -ity, -ance, -ship</td></tr>
        <tr><td>Verb</td><td>-ize, -ify, -en, -ate</td></tr>
        <tr><td>Adjective</td><td>-ous, -ful, -ive, -al, -able, -ic</td></tr>
        <tr><td>Adverb</td><td>-ly</td></tr>
      </table>
      <h4>Tebak dari posisi</h4>
      <ul>
        <li>Setelah artikel/adjektiva → <b>noun</b>: "a rapid <b>growth</b>".</li>
        <li>Sebelum kata benda → <b>adjective</b>: "<b>economic</b> growth".</li>
        <li>Menerangkan verba/adjektiva → <b>adverb</b>: "grew <b>rapidly</b>".</li>
      </ul>
      <div class="callout"><b>Trap:</b> "economic" (ekonomi) ≠ "economical" (hemat); "successful" ≠ "success".</div>
    `,
  },
  {
    id: "countable",
    cat: "grammar",
    title: "Countable & Uncountable Nouns",
    minutes: 5,
    summary: "Daftar kata tak terhitung yang sering dijebak di ITP.",
    body: `
      <h4>Selalu uncountable (tunggal, tanpa -s, tanpa a/an)</h4>
      <p><i>information, advice, furniture, equipment, homework, research, knowledge, luggage, baggage, progress, evidence, money, traffic, weather</i>.</p>
      <ul>
        <li>❌ "an advice / advices" → ✅ "a piece of advice", "some advice".</li>
        <li>❌ "many informations" → ✅ "much information".</li>
      </ul>
      <h4>Satuan penghitung</h4>
      <ul><li>a piece of furniture, a piece of equipment, an item of news.</li></ul>
      <p>Verba mengikuti bentuk tunggal: "The equipment <b>is</b> new."</p>
    `,
  },
  {
    id: "we-errors",
    cat: "grammar",
    title: "Rangkuman: Checklist Written Expression",
    minutes: 5,
    summary: "Urutan cek cepat untuk soal 'temukan bagian yang salah'.",
    body: `
      <p>Empat bagian digarisbawahi — pilih yang <b>salah</b>. Periksa berurutan:</p>
      <ul>
        <li><b>Subjek–verba</b> (is/are, was/were).</li>
        <li><b>Bentuk kata</b> (noun/adj/adv) sesuai posisi.</li>
        <li><b>Tunggal/jamak</b> kata benda; countable vs uncountable.</li>
        <li><b>Paralelisme</b> pada daftar/konjungsi korelatif.</li>
        <li><b>Perbandingan</b> ganda (more better ❌).</li>
        <li><b>Preposisi</b> & kata sambung ("despite of" ❌, "although…but" ❌).</li>
        <li><b>Kata ganti</b> & acuannya.</li>
        <li><b>Urutan kata</b> & inversi setelah negatif di awal.</li>
        <li><b>Tenses</b> & bentuk V3 pada pasif/perfect.</li>
      </ul>
      <div class="callout"><b>Tips:</b> baca seluruh kalimat dulu; kesalahan sering pada hubungan antar-kata, bukan kata itu sendiri.</div>
    `,
  },

  // ===================== LISTENING =====================
  {
    id: "listen-strat",
    cat: "listening",
    title: "Strategi Listening ITP (Part A, B, C)",
    minutes: 6,
    summary: "Cara kerja tiap bagian dan trik menjawab cepat.",
    body: `
      <h4>Struktur</h4>
      <ul>
        <li><b>Part A</b> — 30 percakapan pendek (2 baris), 1 soal/dialog.</li>
        <li><b>Part B</b> — percakapan panjang, beberapa soal.</li>
        <li><b>Part C</b> — kuliah/pengumuman singkat, beberapa soal.</li>
      </ul>
      <h4>Trik utama</h4>
      <ul>
        <li><b>Jawaban ada di pembicara kedua</b> (Part A).</li>
        <li><b>Sinonim, bukan kata sama</b> — pilihan yang mengulang kata persis sering jebakan.</li>
        <li><b>Penanda kontras</b> (but, however, actually) menandai info penting.</li>
        <li><b>Part C:</b> tangkap topik di kalimat pertama, catat kata kunci (angka, nama, urutan).</li>
        <li><b>Baca pilihan lebih dulu</b> saat ada jeda untuk memprediksi topik.</li>
      </ul>
    `,
  },
  {
    id: "idioms",
    cat: "listening",
    title: "Bank Idiom & Ungkapan Fungsional",
    minutes: 8,
    summary: "Idiom umum + ungkapan setuju, menyarankan, terkejut, dll.",
    body: `
      <h4>Idiom yang sering muncul</h4>
      <table>
        <tr><th>Ungkapan</th><th>Arti</th></tr>
        <tr><td>I can't make it</td><td>tidak bisa hadir</td></tr>
        <tr><td>It's up to you</td><td>terserah kamu</td></tr>
        <tr><td>call it a day</td><td>berhenti/sudahi</td></tr>
        <tr><td>get the hang of it</td><td>mulai terbiasa/menguasai</td></tr>
        <tr><td>drop by / drop in</td><td>mampir</td></tr>
        <tr><td>run into someone</td><td>bertemu tak sengaja</td></tr>
        <tr><td>be over one's head</td><td>terlalu sulit</td></tr>
        <tr><td>a piece of cake</td><td>sangat mudah</td></tr>
        <tr><td>keep an eye on</td><td>mengawasi</td></tr>
        <tr><td>put off</td><td>menunda</td></tr>
      </table>
      <h4>Ungkapan fungsional</h4>
      <ul>
        <li><b>Setuju:</b> "You can say that again", "I couldn't agree more".</li>
        <li><b>Menyarankan:</b> "Why don't you…", "How about…", "You'd better…".</li>
        <li><b>Terkejut:</b> "You're kidding!", "No way!".</li>
        <li><b>Lega:</b> "What a relief!". <b>Keluhan:</b> "I'm fed up with…".</li>
      </ul>
    `,
  },

  // ===================== READING =====================
  {
    id: "read-strat",
    cat: "reading",
    title: "Strategi Reading ITP & Jenis Pertanyaan",
    minutes: 7,
    summary: "Skimming–scanning dan pendekatan tiap tipe soal.",
    body: `
      <h4>Alur efisien</h4>
      <ol>
        <li><b>Skim</b> 30–40 detik: baca kalimat pertama tiap paragraf.</li>
        <li>Baca pertanyaan, lalu <b>scan</b> kata kunci untuk detail.</li>
      </ol>
      <table>
        <tr><th>Jenis</th><th>Cara</th></tr>
        <tr><td>Main idea</td><td>Paling umum, mencakup seluruh teks.</td></tr>
        <tr><td>Detail (stated)</td><td>Scan kata kunci; jawaban tersurat.</td></tr>
        <tr><td>Vocabulary in context</td><td>Ganti kata; jaga makna kalimat.</td></tr>
        <tr><td>Inference</td><td>Kesimpulan logis, tanpa asumsi luar.</td></tr>
        <tr><td>Reference</td><td>it/they/this → kata benda terdekat sebelumnya.</td></tr>
        <tr><td>EXCEPT / NOT</td><td>Tiga benar, cari yang tidak ada di teks.</td></tr>
      </table>
      <div class="callout"><b>Waktu:</b> ±55 menit / 50 soal → tandai soal sulit, lanjut, kembali nanti.</div>
    `,
  },
  {
    id: "read-vocab",
    cat: "reading",
    title: "Menebak Makna dari Konteks & Referent",
    minutes: 6,
    summary: "Gunakan petunjuk konteks & pelacakan kata acuan.",
    body: `
      <h4>Petunjuk konteks</h4>
      <ul>
        <li><b>Definisi/aposisi:</b> "photosynthesis, <b>the process by which</b> plants make food, …"</li>
        <li><b>Kontras</b> (however, unlike): makna berlawanan dengan kata sekitarnya.</li>
        <li><b>Contoh</b> (such as, for example): perinci makna kata umum.</li>
        <li><b>Prefix/suffix:</b> "in<b>-</b>", "un<b>-</b>" (negasi); "-less" (tanpa).</li>
      </ul>
      <h4>Referent (kata acuan)</h4>
      <ul>
        <li>it / they / this / these / such / former / latter merujuk ke kata benda yang <b>disebut sebelumnya</b>.</li>
        <li>Uji: ganti acuan dengan kandidat kata benda — apakah kalimat tetap logis?</li>
      </ul>
    `,
  },

  // ===================== WRITING =====================
  {
    id: "essay-struct",
    cat: "writing",
    title: "Struktur Esai Argumentatif",
    minutes: 6,
    summary: "Kerangka 4 paragraf + kata transisi siap pakai.",
    body: `
      <h4>Kerangka standar</h4>
      <ol>
        <li><b>Pendahuluan:</b> parafrase topik + <b>kalimat tesis</b>.</li>
        <li><b>Isi 1:</b> alasan utama + contoh konkret.</li>
        <li><b>Isi 2:</b> alasan kedua; boleh akui pandangan lawan lalu bantah.</li>
        <li><b>Penutup:</b> tegaskan ulang tesis, tanpa ide baru.</li>
      </ol>
      <h4>Kata transisi</h4>
      <ul>
        <li>Menambah: <i>Furthermore, Moreover, In addition</i></li>
        <li>Kontras: <i>However, On the other hand, Nevertheless</i></li>
        <li>Sebab-akibat: <i>As a result, Therefore, Consequently</i></li>
        <li>Menutup: <i>In conclusion, To sum up</i></li>
      </ul>
      <p>Target 250–350 kata / 30 menit. Latih di menu <b>Writing</b> lalu minta koreksi AI.</p>
    `,
  },
  {
    id: "lpdp-essay",
    cat: "writing",
    title: "Esai Beasiswa LPDP: Komitmen & Kontribusi",
    minutes: 7,
    summary: "Menyusun esai kontribusi kuat untuk S2 Teknik Informatika ITS.",
    body: `
      <p>Esai LPDP menilai <b>kejelasan tujuan, kematangan rencana, dan komitmen kembali ke Indonesia</b>.</p>
      <h4>Pola "masa lalu → sekarang → masa depan"</h4>
      <ol>
        <li><b>Masa lalu:</b> pengalaman yang membentuk minatmu di teknik informatika.</li>
        <li><b>Sekarang:</b> mengapa S2 Teknik Informatika ITS — sebut lab/riset relevan (komputasi cerdas, jaringan, rekayasa perangkat lunak).</li>
        <li><b>Masa depan:</b> kontribusi konkret & terukur bagi Indonesia (AI layanan publik, keamanan siber, digitalisasi UMKM).</li>
      </ol>
      <h4>Penguat</h4>
      <ul>
        <li><b>Spesifik & terukur:</b> angka, proyek, dampak.</li>
        <li><b>Rencana studi:</b> mata kuliah, topik tesis, target lulus.</li>
        <li><b>Alur logis:</b> satu gagasan per paragraf, terhubung ke tujuan.</li>
      </ul>
      <div class="callout">Lihat menu <b>Beasiswa</b> untuk timeline & checklist, dan <b>Tutor AI</b> untuk umpan balik draf esaimu.</div>
    `,
  },

  // ===================== VOCAB =====================
  {
    id: "wordbuild",
    cat: "vocab",
    title: "Word Building: Root, Prefix, Suffix",
    minutes: 7,
    summary: "Bongkar kata sulit dari akar & imbuhannya.",
    body: `
      <h4>Akar (root) umum</h4>
      <table>
        <tr><th>Akar</th><th>Arti</th><th>Contoh</th></tr>
        <tr><td>bio</td><td>hidup</td><td>biology, biography</td></tr>
        <tr><td>graph</td><td>tulis</td><td>paragraph, graphic</td></tr>
        <tr><td>port</td><td>bawa</td><td>transport, portable</td></tr>
        <tr><td>dict</td><td>ucap</td><td>predict, dictate</td></tr>
        <tr><td>spect</td><td>lihat</td><td>inspect, spectator</td></tr>
        <tr><td>struct</td><td>bangun</td><td>construct, structure</td></tr>
      </table>
      <h4>Prefiks</h4>
      <ul><li>un-, in-, im-, dis- (negasi); re- (kembali); pre- (sebelum); mis- (salah); over- (berlebih); inter- (antar).</li></ul>
      <h4>Sufiks (kelas kata)</h4>
      <ul><li>-tion/-ment/-ity (noun); -ize/-ify (verb); -ous/-ful/-al (adj); -ly (adv).</li></ul>
      <div class="callout">Latih kosakata inti di menu <b>Vocabulary</b> (flashcard) dan temui kata baru saat membaca di menu <b>Reading</b>.</div>
    `,
  },

  // ===================== STRATEGI TES =====================
  {
    id: "strat-waktu",
    cat: "strategi",
    title: "Manajemen Waktu Tes ITP",
    minutes: 6,
    summary: "Cara membagi waktu tiap bagian agar tidak ada soal terlewat.",
    body: `
      <p>Banyak peserta kehilangan poin bukan karena tidak bisa, tetapi karena <b>kehabisan waktu</b>. TOEFL ITP total ±115 menit untuk 140 soal.</p>
      <h4>Alokasi waktu</h4>
      <table>
        <tr><th>Bagian</th><th>Soal</th><th>Waktu</th><th>Ritme</th></tr>
        <tr><td>Listening</td><td>50</td><td>±35 mnt</td><td>Ikuti audio; tak bisa diulang</td></tr>
        <tr><td>Structure</td><td>40</td><td>25 mnt</td><td>±35 detik/soal</td></tr>
        <tr><td>Reading</td><td>50</td><td>55 mnt</td><td>±65 detik/soal termasuk baca</td></tr>
      </table>
      <h4>Prinsip</h4>
      <ul>
        <li><b>Jangan terpaku satu soal.</b> Bila &gt;40–60 detik belum ketemu, tandai & lanjut.</li>
        <li><b>Reading: baca pertanyaan dulu</b> untuk soal detail, lalu scan.</li>
        <li><b>Sisakan 2–3 menit</b> tiap bagian untuk memastikan tidak ada yang kosong.</li>
        <li><b>Listening tidak bisa mundur</b> — begitu audio lewat, langsung fokus soal berikutnya.</li>
      </ul>
      <div class="callout"><b>Latih di menu <a>Simulasi Tes</a></b> dengan timer nyata agar terbiasa dengan tekanan waktu.</div>
    `,
  },
  {
    id: "strat-tebak",
    cat: "strategi",
    title: "Menebak Cerdas (Educated Guessing)",
    minutes: 5,
    summary: "ITP tanpa penalti — jangan pernah kosongkan jawaban.",
    body: `
      <p>Di TOEFL ITP <b>tidak ada pengurangan nilai</b> untuk jawaban salah. Skor dihitung dari jumlah benar saja. Artinya: <b>selalu isi semua soal</b>, meski hanya menebak.</p>
      <h4>Strategi eliminasi</h4>
      <ol>
        <li>Coret pilihan yang jelas salah (tata bahasa keliru, makna tak nyambung).</li>
        <li>Bandingkan sisa pilihan; cari perbedaan kunci.</li>
        <li>Bila tetap ragu, pilih dan lanjut — jangan buang waktu.</li>
      </ol>
      <h4>Petunjuk umum</h4>
      <ul>
        <li>Structure: pilihan yang <b>membuat kalimat lengkap</b> (ada subjek + verba) biasanya benar.</li>
        <li>Waspadai pilihan yang <b>mengulang kata persis</b> dari audio/teks — sering jebakan.</li>
        <li>Jawaban ekstрem ("always", "never") sering salah di soal inferensi.</li>
      </ul>
      <div class="callout"><b>Ingat:</b> 1 menit sebelum waktu habis, isi semua soal kosong dengan tebakan — tidak ada ruginya.</div>
    `,
  },
  {
    id: "strat-tipe",
    cat: "strategi",
    title: "Tips Cepat per Tipe Soal",
    minutes: 6,
    summary: "Contekan strategi untuk tiap tipe soal di ketiga bagian.",
    body: `
      <h4>Listening</h4>
      <ul>
        <li>Part A: fokus <b>ucapan orang kedua</b>; jawaban memparafrase, bukan mengulang.</li>
        <li>Part C: catat <b>topik utama</b> di kalimat pertama + kata kunci (angka, nama).</li>
      </ul>
      <h4>Structure</h4>
      <ul>
        <li>Soal isian: cek apakah kalimat sudah punya <b>subjek + verba utama</b>.</li>
        <li>Soal garis bawah: periksa berurutan — subjek-verba, bentuk kata, jamak/tunggal, paralel, preposisi.</li>
      </ul>
      <h4>Reading</h4>
      <ul>
        <li><b>Main idea:</b> pilih yang paling umum mencakup seluruh teks.</li>
        <li><b>Vocabulary in context:</b> substitusi kata, jaga makna kalimat.</li>
        <li><b>EXCEPT/NOT:</b> tiga pilihan ada di teks, cari yang tidak.</li>
        <li><b>Reference (it/they/this):</b> kata benda terdekat sebelumnya.</li>
      </ul>
      <div class="callout">Butuh contoh lebih banyak untuk tipe tertentu? Klik <b>Perdalam dengan AI</b>.</div>
    `,
  },
  {
    id: "strat-harih",
    cat: "strategi",
    title: "Persiapan H-1 & Saat Hari Tes",
    minutes: 4,
    summary: "Kondisi fisik & mental agar tampil optimal.",
    body: `
      <h4>Sehari sebelum (H-1)</h4>
      <ul>
        <li><b>Tidur cukup</b> — begadang untuk SKS justru menurunkan konsentrasi & memori.</li>
        <li>Review ringan saja (rumus/idiom kunci), jangan materi baru berat.</li>
        <li>Siapkan dokumen: kartu identitas, kartu tes, alat tulis sesuai ketentuan.</li>
      </ul>
      <h4>Saat tes</h4>
      <ul>
        <li>Datang lebih awal, tarik napas, tenangkan diri sebelum mulai.</li>
        <li>Baca instruksi tiap bagian dengan cepat namun teliti.</li>
        <li>Kelola waktu (lihat materi Manajemen Waktu) & isi semua jawaban.</li>
        <li>Jangan panik bila ada soal sulit — lewati dulu, kembali nanti.</li>
      </ul>
      <div class="callout"><b>Mindset:</b> kamu sudah berlatih (materi + simulasi). Percayai persiapanmu dan kerjakan tenang.</div>
    `,
  },

  // ===================== WAWANCARA & BEASISWA LPDP =====================
  {
    id: "wwc-format",
    cat: "beasiswa",
    title: "Wawancara LPDP: Format & Aspek Penilaian",
    minutes: 8,
    summary: "Apa yang terjadi di ruang wawancara dan apa yang dinilai pewawancara.",
    body: `
      <p>Wawancara adalah bagian <b>Seleksi Substansi</b> dan sering menjadi penentu. Biasanya kamu dihadapkan pada <b>2–3 pewawancara</b> (akademisi, praktisi profesional, dan psikolog) selama ±30–45 menit.</p>
      <h4>Yang dinilai</h4>
      <table>
        <tr><th>Aspek</th><th>Pertanyaan sekitar</th></tr>
        <tr><td>Kematangan tujuan</td><td>Kenapa jurusan & kampus ini? Kenapa sekarang?</td></tr>
        <tr><td>Kontribusi & kebermanfaatan</td><td>Apa dampakmu bagi Indonesia setelah lulus?</td></tr>
        <tr><td>Komitmen kembali</td><td>Rencana konkret pulang & mengabdi.</td></tr>
        <tr><td>Integritas & kepribadian</td><td>Kejujuran, kematangan emosi, konsistensi cerita.</td></tr>
        <tr><td>Kesiapan akademik & finansial</td><td>Rencana studi, LoA, biaya hidup.</td></tr>
      </table>
      <h4>Prinsip menjawab</h4>
      <ul>
        <li><b>Konsisten dengan esai & formulir</b> — pewawancara memegang berkasmu.</li>
        <li><b>Spesifik & jujur</b> — hindari jawaban normatif/klise.</li>
        <li><b>Struktur singkat:</b> poin utama dulu, lalu alasan/contoh.</li>
        <li><b>Tenang & percaya diri</b>, tapi tidak sombong.</li>
      </ul>
      <div class="callout"><b>Ingat:</b> tidak ada jawaban "benar" tunggal — yang dinilai adalah kejelasan, kematangan, dan kesungguhanmu.</div>
    `,
  },
  {
    id: "wwc-bank",
    cat: "beasiswa",
    title: "Bank Pertanyaan Wawancara & Cara Menjawab",
    minutes: 10,
    summary: "Pertanyaan tersering + kerangka jawaban untuk kandidat S2 TI ITS.",
    body: `
      <h4>1. "Ceritakan tentang diri Anda."</h4>
      <p>Kerangka: <b>siapa kamu → pencapaian relevan → mengapa mengarah ke S2 TI</b>. Maks 60–90 detik.</p>
      <h4>2. "Mengapa memilih Teknik Informatika ITS?"</h4>
      <p>Sebut <b>alasan spesifik</b>: reputasi, laboratorium/bidang riset (komputasi cerdas, jaringan, rekayasa perangkat lunak), dosen/riset yang relevan dengan rencanamu — bukan sekadar "kampus bagus".</p>
      <h4>3. "Apa kontribusi Anda untuk Indonesia setelah lulus?"</h4>
      <p>Pakai pola <b>masalah → solusi → dampak terukur</b>. Contoh: "Banyak layanan publik daerah belum terdigitalisasi. Dengan keahlian rekayasa perangkat lunak & AI, saya ingin membangun sistem X yang menjangkau Y orang."</p>
      <h4>4. "Kenapa layak dibiayai negara?"</h4>
      <p>Hubungkan rekam jejak + rencana kontribusi + komitmen kembali. Tunjukkan bahwa investasi negara akan berbalik menjadi manfaat publik.</p>
      <h4>5. "Apa kelemahan/kekuranganmu?"</h4>
      <p>Sebutkan kelemahan nyata + <b>langkah perbaikan konkret</b>. Hindari klise ("terlalu perfeksionis").</p>
      <h4>6. "Bagaimana jika tidak lulus LPDP?"</h4>
      <p>Tunjukkan tujuanmu tetap jalan (rencana alternatif pendanaan), memperlihatkan kesungguhan.</p>
      <h4>Pertanyaan lain yang sering muncul</h4>
      <ul>
        <li>Topik tesis & mengapa penting.</li>
        <li>Rencana 5–10 tahun ke depan.</li>
        <li>Isu terkini di bidang TI (mis. AI, keamanan siber) dan pendapatmu.</li>
        <li>Pengalaman kepemimpinan/organisasi & pelajarannya.</li>
        <li>Kesiapan berpisah dari keluarga / adaptasi.</li>
      </ul>
      <div class="callout"><b>Metode STAR</b> untuk pertanyaan pengalaman: <b>S</b>ituation → <b>T</b>ask → <b>A</b>ction → <b>R</b>esult. Latih jawaban ini lewat menu <b>Tutor AI</b>.</div>
    `,
  },
  {
    id: "wwc-lgd",
    cat: "beasiswa",
    title: "LGD, On-the-Spot Essay & Kesalahan Fatal",
    minutes: 7,
    summary: "Tahap tambahan seleksi substansi dan hal yang harus dihindari.",
    body: `
      <h4>Leaderless Group Discussion (LGD)</h4>
      <p>Diskusi kelompok membahas satu isu aktual tanpa moderator. Yang dinilai: <b>kontribusi gagasan, kemampuan mendengar, dan kerja sama</b> — bukan siapa paling dominan.</p>
      <ul>
        <li><b>Berkontribusi berkualitas</b>, bukan sekadar banyak bicara.</li>
        <li><b>Hargai pendapat lain</b>; bangun di atas ide peserta lain.</li>
        <li><b>Bantu kelompok menuju kesimpulan</b> (mis. merangkum).</li>
        <li>Jangan memotong, mendominasi, atau diam total.</li>
      </ul>
      <h4>On-the-Spot Essay</h4>
      <p>Menulis esai singkat tentang isu tertentu dalam waktu terbatas. Terapkan struktur dari materi <b>Writing</b>: tesis jelas → argumen berparagraf → simpulan. Kelola waktu: 5 menit rencana, 20 menit menulis, 5 menit koreksi.</p>
      <h4>Kesalahan fatal yang harus dihindari</h4>
      <ul>
        <li>Cerita di wawancara <b>berbeda</b> dari esai/formulir.</li>
        <li>Rencana kontribusi <b>terlalu umum</b> ("ingin memajukan Indonesia").</li>
        <li>Tidak paham isi <b>rencana studi/tesis</b> sendiri.</li>
        <li>Meremehkan komitmen <b>kembali ke Indonesia</b>.</li>
        <li>Terlambat, berpakaian tidak rapi, atau tidak menyimak pertanyaan.</li>
      </ul>
      <div class="callout">Simulasikan tanya-jawab dengan <b>Tutor AI</b>, dan siapkan berkas di menu <b>Beasiswa</b>.</div>
    `,
  },

  // ===================== TAMBAHAN LISTENING =====================
  {
    id: "listen-short",
    cat: "listening",
    title: "Part A: Dialog Pendek — Strategi & Jebakan",
    minutes: 8,
    summary: "Cara menaklukkan 30 dialog pendek: fokus pembicara kedua, waspadai kata jebakan.",
    body: `
      <p>Di <b>Part A</b> kamu mendengar 30 percakapan pendek (dua baris) dan menjawab satu soal per dialog. Karena tidak bisa mengulang audio, kuncinya adalah tahu <b>di mana jawaban biasanya berada</b> dan pola jebakan yang sering muncul.</p>
      <h4>Aturan emas</h4>
      <ul>
        <li><b>Jawaban hampir selalu ada pada kalimat pembicara kedua.</b> Kalimat pertama hanya membangun konteks.</li>
        <li>Pilihan yang benar biasanya <b>memparafrase</b> (memakai sinonim), bukan mengulang kata yang persis kamu dengar.</li>
        <li><b>Baca keempat pilihan saat jeda</b> untuk memprediksi topik dialog berikutnya.</li>
      </ul>
      <h4>Pola jebakan yang sering</h4>
      <table>
        <tr><th>Jebakan</th><th>Penjelasan</th></tr>
        <tr><td>Bunyi mirip</td><td>Pilihan memakai kata yang mirip bunyinya, mis. <i>desert</i> vs <i>dessert</i>, <i>quite</i> vs <i>quiet</i>.</td></tr>
        <tr><td>Kata diulang persis</td><td>Pilihan yang mengulang kata dari audio sering sengaja dipasang untuk menyesatkan.</td></tr>
        <tr><td>Negasi tersembunyi</td><td>Kata seperti <i>hardly, no longer, neither</i> membalik makna — mudah terlewat.</td></tr>
        <tr><td>Makna kiasan/idiom</td><td>"You can say that again" bukan minta diulang, tapi tanda <b>setuju</b>.</td></tr>
      </table>
      <h4>Kata kunci penanda makna</h4>
      <ul>
        <li><b>Kontras / koreksi:</b> <i>but, however, actually, on the contrary</i> → info penting biasanya sesudahnya.</li>
        <li><b>Penyesalan / seharusnya:</b> <i>should have, wish, if only</i> → pekerjaan belum/ tidak dilakukan.</li>
        <li><b>Saran:</b> <i>Why don't you..., How about..., You'd better...</i></li>
      </ul>
      <h4>Contoh transkrip singkat</h4>
      <p><b>Man:</b> "I thought the biology exam was really tough."<br/>
      <b>Woman:</b> "You can say that again!"<br/>
      <i>Pertanyaan:</i> What does the woman mean? → Dia <b>setuju</b> ujian itu sulit (bukan meminta pengulangan). Pilihan benar akan berbunyi seperti "She agrees the exam was difficult."</p>
      <div class="callout"><b>Tips:</b> jika ragu, coret pilihan yang hanya mengulang kata persis dari audio; jawaban yang memparafrase lebih mungkin benar. Klik <b>Perdalam dengan AI</b> untuk latihan dialog lain.</div>
    `,
  },
  {
    id: "listen-long",
    cat: "listening",
    title: "Part B & C: Percakapan Panjang & Kuliah",
    minutes: 9,
    summary: "Strategi mencatat topik, tujuan, dan detail pada percakapan panjang dan kuliah akademik.",
    body: `
      <p><b>Part B</b> berisi percakapan panjang (mis. mahasiswa dan dosen) dan <b>Part C</b> berisi kuliah atau pengumuman singkat, masing-masing diikuti beberapa soal. Karena durasinya lebih panjang, kamu harus <b>menyimak aktif</b> dan menangkap kerangka besar, bukan setiap kata.</p>
      <h4>Yang wajib kamu tangkap di awal</h4>
      <ul>
        <li><b>Topik utama</b> — hampir selalu disebut pada satu-dua kalimat pertama.</li>
        <li><b>Tujuan / situasi</b> — mengapa mereka berbicara? (mis. mahasiswa minta perpanjangan tenggat).</li>
        <li><b>Nada / sikap pembicara</b> — antusias, ragu, atau mengeluh?</li>
      </ul>
      <h4>Jenis soal yang muncul</h4>
      <table>
        <tr><th>Jenis</th><th>Cara menjawab</th></tr>
        <tr><td>Topik / tujuan utama</td><td>Pilih yang paling umum mencakup seluruh pembicaraan, bukan satu detail kecil.</td></tr>
        <tr><td>Detail</td><td>Catat angka, nama, tanggal, urutan saat mendengar.</td></tr>
        <tr><td>Inferensi</td><td>Simpulkan dari nada &amp; pilihan kata (mis. "I'm not sure that will work" = ragu).</td></tr>
        <tr><td>Organisasi</td><td>Perhatikan urutan: <i>first, next, finally</i> menandai struktur.</td></tr>
      </table>
      <h4>Kata kunci penanda struktur kuliah</h4>
      <ul>
        <li><b>Definisi:</b> <i>is defined as, refers to, means</i>.</li>
        <li><b>Contoh:</b> <i>for example, such as, to illustrate</i>.</li>
        <li><b>Urutan / proses:</b> <i>first, second, then, after that, finally</i>.</li>
        <li><b>Penekanan:</b> <i>the key point, most importantly, remember that</i> → sering jadi bahan soal.</li>
      </ul>
      <h4>Cara mencatat cepat</h4>
      <ol>
        <li>Tulis <b>topik</b> di satu kata setelah kalimat pembuka.</li>
        <li>Buat singkatan untuk angka &amp; nama (jangan menulis kalimat penuh).</li>
        <li>Tandai tiap pergantian sub-topik dengan garis miring.</li>
      </ol>
      <div class="callout"><b>Ingat:</b> soal diberikan sesuai urutan informasi dalam audio, jadi bila kamu melewatkan satu, jangan panik — pindah ke soal berikutnya mengikuti alur pembicaraan.</div>
    `,
  },

  // ===================== TAMBAHAN READING =====================
  {
    id: "read-inference",
    cat: "reading",
    title: "Reading: Soal Inferensi & Tujuan Penulis",
    minutes: 8,
    summary: "Menyimpulkan yang tersirat dan mengenali maksud penulis tanpa asumsi berlebihan.",
    body: `
      <p>Soal <b>inferensi</b> menanyakan sesuatu yang <b>tidak tertulis eksplisit</b> tetapi dapat disimpulkan secara logis dari teks. Soal <b>tujuan penulis</b> menanyakan mengapa penulis menulis bagian tertentu. Keduanya menguji pemahaman, bukan sekadar mencocokkan kata.</p>
      <h4>Ciri pertanyaannya</h4>
      <ul>
        <li>Inferensi: "It can be <b>inferred</b> from the passage that...", "The passage <b>suggests / implies</b> that..."</li>
        <li>Tujuan: "The author <b>mentions</b> X in order to...", "Why does the author...?", "The purpose of paragraph 2 is to..."</li>
      </ul>
      <h4>Prinsip menjawab inferensi</h4>
      <ol>
        <li>Jawaban harus <b>didukung teks</b> — hanya selangkah dari yang tertulis, bukan pengetahuan luar.</li>
        <li>Hindari pilihan yang <b>terlalu ekstrem</b>: kata <i>always, never, all, only, impossible</i> sering menandai jawaban salah.</li>
        <li>Waspadai pilihan yang <b>benar secara umum</b> tetapi tidak didukung bacaan ini.</li>
      </ol>
      <h4>Kata kerja tujuan penulis</h4>
      <table>
        <tr><th>Maksud</th><th>Kata kerja yang cocok</th></tr>
        <tr><td>Menjelaskan</td><td>to explain, to describe, to illustrate</td></tr>
        <tr><td>Membandingkan</td><td>to compare, to contrast</td></tr>
        <tr><td>Memberi contoh</td><td>to give an example, to support a claim</td></tr>
        <tr><td>Membantah</td><td>to refute, to challenge, to criticize</td></tr>
      </table>
      <h4>Contoh singkat</h4>
      <p>Teks: "Although early telephones were bulky and expensive, they quickly became a household necessity."<br/>
      <i>Inferensi:</i> Meski awalnya mahal, banyak orang tetap membelinya → dapat disimpulkan bahwa <b>orang menganggapnya sangat berguna</b>. Pilihan "telephones were useless" jelas salah; pilihan "no one could afford them" bertentangan dengan "became a household necessity".</p>
      <div class="callout"><b>Uji cepat:</b> tanyakan "apakah teks benar-benar mendukung ini?" Jika kamu harus menambah asumsi dari luar, pilihan itu kemungkinan salah.</div>
    `,
  },
  {
    id: "read-reference",
    cat: "reading",
    title: "Reading: Reference & Vocabulary-in-Context",
    minutes: 7,
    summary: "Melacak kata acuan (it/they/this) dan menebak makna kata dari konteks kalimat.",
    body: `
      <p>Dua tipe soal Reading ini sering muncul dan cepat dikerjakan bila kamu tahu tekniknya: <b>reference</b> (kata acuan) dan <b>vocabulary-in-context</b> (makna kata dalam konteks).</p>
      <h4>1. Reference — apa yang dirujuk?</h4>
      <p>Kata seperti <i>it, they, this, these, that, such, former, latter</i> menggantikan kata benda yang <b>sudah disebut sebelumnya</b> (biasanya yang terdekat).</p>
      <ul>
        <li>Cari <b>kata benda terdekat</b> sebelum kata acuan yang cocok jumlah (tunggal/jamak).</li>
        <li><b>Uji substitusi:</b> ganti kata acuan dengan kandidat — apakah kalimat tetap logis?</li>
        <li>Cocokkan bentuk: <i>it/this</i> → benda tunggal; <i>they/these</i> → jamak.</li>
      </ul>
      <p><i>Contoh:</i> "Scientists studied the coral reefs because <b>they</b> were dying rapidly." → <b>they = the coral reefs</b> (jamak, terdekat, logis), bukan "scientists".</p>
      <h4>2. Vocabulary-in-context</h4>
      <p>Soal menanyakan kata yang <b>paling dekat maknanya</b> dengan kata bergaris bawah <b>dalam kalimat itu</b> — bukan makna kamus yang paling umum.</p>
      <ol>
        <li>Baca <b>seluruh kalimat</b>, bukan hanya kata itu.</li>
        <li>Manfaatkan <b>petunjuk konteks</b>: definisi/aposisi, kontras (<i>however, unlike</i>), atau contoh (<i>such as</i>).</li>
        <li>Ganti kata bergaris bawah dengan tiap pilihan; pilih yang <b>tidak mengubah makna</b> kalimat.</li>
        <li>Bongkar imbuhan bila perlu: prefiks <i>un-, in-</i> (negasi), sufiks <i>-less</i> (tanpa).</li>
      </ol>
      <p><i>Contoh:</i> "The medicine had an <b>adverse</b> effect, worsening the patient's condition." Petunjuk "worsening" → <b>adverse</b> bermakna <i>harmful / negatif</i>, bukan "helpful".</p>
      <div class="callout"><b>Tips:</b> untuk vocabulary-in-context, jangan langsung pilih makna kamus yang kamu hafal — konteks kalimat yang menentukan.</div>
    `,
  },

  // ===================== TAMBAHAN VOCAB =====================
  {
    id: "vocab-akademik",
    cat: "vocab",
    title: "Kosakata Akademik yang Sering Muncul",
    minutes: 8,
    summary: "Daftar kata akademik frekuensi tinggi di teks ITP beserta arti dan contoh.",
    body: `
      <p>Teks Reading dan kuliah Listening ITP memakai <b>kosakata akademik</b> yang berulang lintas topik. Menguasainya membuatmu membaca lebih cepat dan menjawab vocabulary-in-context dengan percaya diri.</p>
      <h4>Kata kerja &amp; kata benda inti</h4>
      <table>
        <tr><th>Kata</th><th>Arti</th><th>Contoh</th></tr>
        <tr><td>significant</td><td>penting / bermakna</td><td>a significant increase</td></tr>
        <tr><td>establish</td><td>menetapkan / mendirikan</td><td>to establish a theory</td></tr>
        <tr><td>demonstrate</td><td>menunjukkan / membuktikan</td><td>the data demonstrate a trend</td></tr>
        <tr><td>hypothesis</td><td>hipotesis / dugaan awal</td><td>to test a hypothesis</td></tr>
        <tr><td>phenomenon</td><td>fenomena / gejala</td><td>a natural phenomenon</td></tr>
        <tr><td>consequently</td><td>akibatnya</td><td>Prices rose; consequently, demand fell.</td></tr>
        <tr><td>diverse</td><td>beragam</td><td>a diverse population</td></tr>
        <tr><td>subsequent</td><td>berikutnya / setelahnya</td><td>in subsequent years</td></tr>
      </table>
      <h4>Kata sifat penilaian</h4>
      <table>
        <tr><th>Kata</th><th>Arti</th></tr>
        <tr><td>crucial / vital</td><td>sangat penting</td></tr>
        <tr><td>abundant</td><td>melimpah</td></tr>
        <tr><td>scarce</td><td>langka</td></tr>
        <tr><td>feasible</td><td>dapat dilakukan / layak</td></tr>
        <tr><td>ambiguous</td><td>bermakna ganda / kabur</td></tr>
        <tr><td>controversial</td><td>kontroversial / diperdebatkan</td></tr>
      </table>
      <h4>Sinonim yang sering dipertukarkan di soal</h4>
      <ul>
        <li><b>increase</b> = rise, grow, expand · <b>decrease</b> = decline, drop, diminish.</li>
        <li><b>important</b> = significant, crucial, vital, essential.</li>
        <li><b>cause</b> = lead to, result in, bring about · <b>show</b> = demonstrate, reveal, indicate.</li>
      </ul>
      <div class="callout"><b>Cara belajar:</b> hafalkan kata dalam <b>frasa</b>, bukan sendiri-sendiri ("a significant increase"), agar langsung tahu pemakaiannya. Latih di menu <b>Vocabulary</b>.</div>
    `,
  },
  {
    id: "vocab-akar",
    cat: "vocab",
    title: "Akar Kata Latin & Yunani (menebak arti)",
    minutes: 8,
    summary: "Kenali akar kata umum untuk menebak makna kata sulit yang belum pernah dilihat.",
    body: `
      <p>Banyak kata akademik dalam bahasa Inggris dibangun dari <b>akar Latin dan Yunani</b>. Bila kamu tahu akarnya, kamu bisa <b>menebak makna kata baru</b> tanpa kamus — kemampuan yang sangat berguna untuk vocabulary-in-context.</p>
      <h4>Akar yang sering muncul</h4>
      <table>
        <tr><th>Akar</th><th>Arti</th><th>Contoh</th></tr>
        <tr><td>aud</td><td>dengar</td><td>audible, audience, auditorium</td></tr>
        <tr><td>vid / vis</td><td>lihat</td><td>video, visible, revise</td></tr>
        <tr><td>scrib / script</td><td>tulis</td><td>describe, manuscript, prescription</td></tr>
        <tr><td>tele</td><td>jauh</td><td>telephone, telescope, television</td></tr>
        <tr><td>chron</td><td>waktu</td><td>chronology, synchronize, chronic</td></tr>
        <tr><td>terr</td><td>tanah / bumi</td><td>territory, terrain, terrestrial</td></tr>
        <tr><td>bene</td><td>baik</td><td>benefit, benevolent, beneficial</td></tr>
        <tr><td>mal</td><td>buruk</td><td>malfunction, malnutrition</td></tr>
        <tr><td>vac</td><td>kosong</td><td>vacant, vacuum, evacuate</td></tr>
        <tr><td>ject</td><td>lempar</td><td>reject, project, inject</td></tr>
      </table>
      <h4>Gabungkan akar + imbuhan</h4>
      <ul>
        <li><b>tele</b> (jauh) + <b>vis</b> (lihat) → <i>television</i> = melihat dari jauh.</li>
        <li><b>bene</b> (baik) + <b>dict</b> (ucap) → <i>benediction</i> = ucapan baik / berkat.</li>
        <li><b>mal</b> (buruk) + <b>funct</b> (kerja) → <i>malfunction</i> = tidak berfungsi baik.</li>
      </ul>
      <h4>Latihan menebak</h4>
      <p>Kata <i>terrestrial</i> memuat <b>terr</b> (tanah/bumi) → kemungkinan berhubungan dengan <b>bumi/daratan</b>. Kata <i>audible</i> memuat <b>aud</b> (dengar) + <i>-ible</i> (dapat) → <b>dapat didengar</b>.</p>
      <div class="callout"><b>Tips ujian:</b> saat menemui kata asing, pisahkan prefiks–akar–sufiks. Sering kali potongan itu sudah cukup untuk mengeliminasi pilihan yang jelas keliru.</div>
    `,
  },

  // ===================== TAMBAHAN WRITING =====================
  {
    id: "essay-transisi",
    cat: "writing",
    title: "Kata Transisi & Koherensi Paragraf",
    minutes: 8,
    summary: "Menghubungkan ide dengan kata transisi tepat agar esai mengalir dan padu.",
    body: `
      <p>Esai yang baik bukan sekadar kumpulan kalimat benar, tetapi ide yang <b>mengalir dan terhubung</b>. <b>Kata transisi</b> (transition words) adalah rambu yang memberi tahu pembaca hubungan antar-ide: menambah, membandingkan, atau menyimpulkan.</p>
      <h4>Daftar transisi menurut fungsi</h4>
      <table>
        <tr><th>Fungsi</th><th>Kata transisi</th></tr>
        <tr><td>Menambah</td><td>Furthermore, Moreover, In addition, Besides</td></tr>
        <tr><td>Kontras</td><td>However, Nevertheless, On the other hand, In contrast</td></tr>
        <tr><td>Sebab</td><td>Because, Since, Due to, Owing to</td></tr>
        <tr><td>Akibat</td><td>Therefore, Consequently, As a result, Thus</td></tr>
        <tr><td>Contoh</td><td>For example, For instance, To illustrate</td></tr>
        <tr><td>Urutan</td><td>First, Next, Then, Finally</td></tr>
        <tr><td>Menyimpulkan</td><td>In conclusion, To sum up, Overall</td></tr>
      </table>
      <h4>Koherensi: satu paragraf, satu ide</h4>
      <ul>
        <li>Mulai paragraf dengan <b>kalimat topik</b> yang menyatakan ide utamanya.</li>
        <li>Kalimat berikutnya <b>mendukung</b> kalimat topik (alasan, contoh, penjelasan).</li>
        <li>Jangan mencampur dua ide besar dalam satu paragraf.</li>
      </ul>
      <h4>Kohesi: rujuk balik ide sebelumnya</h4>
      <ul>
        <li>Gunakan kata ganti (<i>this, these, such</i>) untuk menautkan kalimat: "This approach has two benefits."</li>
        <li>Ulangi kata kunci atau sinonimnya alih-alih memulai topik baru mendadak.</li>
      </ul>
      <h4>Kesalahan umum</h4>
      <ul>
        <li>❌ Menaruh transisi yang salah fungsi: "It rained. <u>Therefore</u>, we went out." (harusnya kontras: <i>However</i>).</li>
        <li>❌ Menumpuk transisi berlebihan di setiap kalimat sehingga terasa kaku.</li>
        <li>❌ Koma setelah transisi di awal kalimat sering terlupa: "However<b>,</b> the results differ."</li>
      </ul>
      <div class="callout"><b>Tips:</b> setelah menulis, baca ulang dan tanyakan di tiap kalimat, "apa hubungannya dengan kalimat sebelumnya?" Bila tidak jelas, tambahkan transisi yang tepat. Minta koreksi di menu <b>Tutor AI</b>.</div>
    `,
  },

  // ===================== TAMBAHAN BEASISWA =====================
  {
    id: "lpdp-rencana",
    cat: "beasiswa",
    title: "Menyusun Rencana Studi & Kontribusi (LPDP)",
    minutes: 9,
    summary: "Membuat rencana studi dan rencana kontribusi yang konkret, logis, dan terukur.",
    body: `
      <p><b>Rencana studi</b> dan <b>rencana kontribusi</b> adalah dokumen kunci LPDP. Keduanya menunjukkan bahwa kamu <b>tahu persis apa yang akan dipelajari</b> dan <b>bagaimana ilmu itu bermanfaat bagi Indonesia</b>. Pewawancara sering menggali dari sini.</p>
      <h4>Isi rencana studi yang kuat</h4>
      <ol>
        <li><b>Program &amp; kampus tujuan:</b> sebut S2 Teknik Informatika ITS dan alasan spesifik (laboratorium, bidang riset, dosen relevan).</li>
        <li><b>Mata kuliah inti:</b> daftar mata kuliah yang mendukung fokusmu (mis. machine learning, keamanan jaringan, rekayasa perangkat lunak).</li>
        <li><b>Topik tesis:</b> rumuskan masalah nyata + pendekatan yang akan kamu teliti.</li>
        <li><b>Timeline:</b> perkiraan durasi tiap semester hingga lulus (mis. 4 semester, tesis mulai semester 3).</li>
      </ol>
      <h4>Rencana kontribusi: pola masalah → solusi → dampak</h4>
      <table>
        <tr><th>Komponen</th><th>Pertanyaan yang dijawab</th></tr>
        <tr><td>Masalah</td><td>Isu nyata apa di Indonesia yang ingin kamu atasi?</td></tr>
        <tr><td>Solusi</td><td>Bagaimana keahlian dari studimu menjawab masalah itu?</td></tr>
        <tr><td>Dampak terukur</td><td>Siapa yang terbantu, berapa banyak, dalam berapa lama?</td></tr>
      </table>
      <p><i>Contoh:</i> "Banyak pemerintah daerah belum punya sistem layanan publik digital yang aman. Dengan keahlian rekayasa perangkat lunak &amp; keamanan siber, saya akan membangun platform layanan terpadu, menargetkan 10 kabupaten dalam 5 tahun pertama."</p>
      <h4>Kontribusi jangka pendek vs jangka panjang</h4>
      <ul>
        <li><b>Jangka pendek (0–2 tahun):</b> mengajar, riset terapan, atau bergabung dengan lembaga/perusahaan strategis.</li>
        <li><b>Jangka panjang (5–10 tahun):</b> membangun sistem/kebijakan, mengembangkan SDM, menciptakan dampak berkelanjutan.</li>
      </ul>
      <h4>Yang membuat rencana lemah</h4>
      <ul>
        <li>Terlalu umum ("ingin memajukan teknologi Indonesia") tanpa langkah konkret.</li>
        <li>Tidak nyambung antara jurusan, tesis, dan kontribusi.</li>
        <li>Target tanpa angka atau tenggat waktu.</li>
      </ul>
      <div class="callout"><b>Kunci:</b> jaga <b>satu benang merah</b> dari minat → studi → tesis → kontribusi. Konsistenkan dengan esai dan formulirmu. Susun checklist dokumen di menu <b>Beasiswa</b> dan latih penyampaiannya lewat <b>Tutor AI</b>.</div>
    `,
  },
];

// ===================== MINI-QUIZ PER PELAJARAN =====================
// Dikaitkan ke lesson.id. Muncul di akhir tiap materi saat dibuka.
export const LESSON_QUIZZES: Record<string, Question[]> = {
  "dasar-pos": [
    { q: "In \"a difficult test\", the word \"difficult\" is a(n):", options: ["noun", "verb", "adjective", "adverb"], answer: 2, explain: "Menerangkan kata benda 'test' → kata sifat." },
    { q: "Which word is an adverb?", options: ["quick", "quickly", "quickness", "quicker"], answer: 1, explain: "Akhiran -ly, menerangkan kata kerja." },
    { q: "\"She reads a book.\" What class is \"book\"?", options: ["verb", "noun", "adjective", "preposition"], answer: 1, explain: "Nama benda → kata benda (noun)." },
  ],
  "dasar-kalimat": [
    { q: "Every complete English sentence must have at least a:", options: ["noun and adjective", "subject and verb", "object and adverb", "preposition"], answer: 1, explain: "Minimal subjek + kata kerja." },
    { q: "Which is a COMPLETE sentence?", options: ["Because it rained.", "The book on the table.", "She woke up early.", "In the morning."], answer: 2, explain: "Hanya C punya subjek + verba." },
  ],
  "dasar-tobe": [
    { q: "Choose: \"They ___ tired.\"", options: ["is", "am", "are", "be"], answer: 2, explain: "They → are." },
    { q: "Which is correct?", options: ["I am go to school.", "I go to school.", "I goes to school.", "I am goes school."], answer: 1, explain: "Jangan pakai 'am' + kata kerja aksi sekaligus." },
    { q: "Past of \"She is happy\":", options: ["She were happy", "She was happy", "She is happy", "She be happy"], answer: 1, explain: "is → was." },
  ],
  "dasar-tenses": [
    { q: "\"I ___ rice yesterday.\"", options: ["eat", "eats", "ate", "will eat"], answer: 2, explain: "yesterday → simple past (ate)." },
    { q: "Add -s: \"She ___ hard.\"", options: ["work", "works", "working", "worked"], answer: 1, explain: "he/she/it present → + s." },
    { q: "Future: \"It ___ tomorrow.\"", options: ["rains", "rained", "will rain", "raining"], answer: 2, explain: "tomorrow → will + V1." },
  ],
  "dasar-noun": [
    { q: "Plural of \"city\":", options: ["citys", "cities", "cityes", "city"], answer: 1, explain: "konsonan + y → -ies." },
    { q: "Choose: \"___ hour\"", options: ["a", "an", "the", "-"], answer: 1, explain: "'h' bisu, bunyi vokal → an." },
    { q: "Which is uncountable?", options: ["book", "apple", "information", "chair"], answer: 2, explain: "'information' tak terhitung." },
  ],
  sva: [
    { q: "Choose the correct verb: \"Each of the students ___ a laptop.\"", options: ["have", "has", "are having", "were"], answer: 1, explain: '"Each of" tunggal → has.' },
    { q: "\"The data ___ conclusive.\"", options: ["are", "is", "were being", "have"], answer: 1, explain: "Di ITP, 'data' diperlakukan tunggal → is." },
    { q: "\"Neither of the answers ___ correct.\"", options: ["is", "are", "were", "have been"], answer: 0, explain: "'Neither of' tunggal → is." },
  ],
  clause: [
    { q: "Which is a complete sentence?", options: ["Because it rained heavily.", "The theory proposed in 1905.", "The event was postponed.", "Which surprised everyone."], answer: 2, explain: "Hanya opsi C punya subjek + verba utama." },
    { q: "Fix: \"The report ___ by the team last week.\"", options: ["submitting", "submit", "was submitted", "submits"], answer: 2, explain: "Butuh verba utama (pasif): was submitted." },
  ],
  tenses: [
    { q: "\"I ___ him two days ago.\"", options: ["have seen", "saw", "had seen", "see"], answer: 1, explain: "'ago' → simple past." },
    { q: "\"By the time we arrived, the movie ___.\"", options: ["started", "has started", "had started", "starts"], answer: 2, explain: "'By the time' + aksi lebih dulu → past perfect." },
    { q: "Choose: \"She has lived here ___ 2015.\"", options: ["for", "since", "during", "ago"], answer: 1, explain: "since + titik waktu." },
  ],
  modals: [
    { q: "\"You ___ studied harder; you failed.\"", options: ["should have", "must have", "can have", "would"], answer: 0, explain: "should have + V3 = seharusnya (tapi tidak)." },
    { q: "After a modal we use:", options: ["V-ing", "to + V1", "base verb (V1)", "V3"], answer: 2, explain: "Modal + V1: 'can swim'." },
  ],
  passive: [
    { q: "Passive of \"They built the bridge in 1990\":", options: ["The bridge built in 1990", "The bridge was built in 1990", "The bridge is build in 1990", "The bridge has build in 1990"], answer: 1, explain: "was + V3 (built)." },
    { q: "Which verb CANNOT be passive?", options: ["write", "build", "arrive", "publish"], answer: 2, explain: "'arrive' intransitif → tak bisa dipasifkan." },
  ],
  gerinf: [
    { q: "\"They decided ___ early.\"", options: ["leaving", "to leave", "left", "leave"], answer: 1, explain: "'decide' + to-infinitive." },
    { q: "\"I look forward to ___ you.\"", options: ["meet", "meeting", "met", "be meet"], answer: 1, explain: "'look forward to' + V-ing." },
    { q: "\"She enjoys ___ novels.\"", options: ["to read", "reading", "read", "reads"], answer: 1, explain: "'enjoy' + gerund." },
  ],
  participle: [
    { q: "\"The lecture was ___.\" (menyebabkan bosan)", options: ["bored", "boring", "bore", "to bore"], answer: 1, explain: "-ing = sifat penyebab." },
    { q: "\"The ___ water is dangerous.\" (air mendidih)", options: ["boiled", "boiling", "boil", "to boil"], answer: 1, explain: "present participle aktif: boiling." },
  ],
  adjclause: [
    { q: "\"The scientist ___ theory changed physics...\"", options: ["who", "whom", "whose", "which"], answer: 2, explain: "whose = kepemilikan." },
    { q: "Non-defining clause CANNOT use:", options: ["who", "which", "that", "whose"], answer: 2, explain: "'that' tidak dipakai pada klausa non-defining." },
  ],
  nounclause: [
    { q: "Correct embedded question:", options: ["I don't know where is it.", "I don't know where it is.", "I don't know where does it.", "I don't know where it does be."], answer: 1, explain: "Tanpa inversi: where it is." },
    { q: "\"The advisor insisted that he ___ present.\"", options: ["is", "was", "be", "being"], answer: 2, explain: "Subjunctive → bentuk dasar 'be'." },
  ],
  advclause: [
    { q: "Which sentence is correct?", options: ["Although it rained, but we went.", "Although it rained, we went.", "Despite it rained, we went.", "Because although it rained."], answer: 1, explain: "Jangan gandakan konjungsi." },
    { q: "\"___ the heavy rain, the match continued.\"", options: ["Although", "Despite of", "Despite", "Even though"], answer: 2, explain: "Despite + kata benda (tanpa 'of')." },
  ],
  conditional: [
    { q: "\"If she ___ harder, she would have passed.\"", options: ["studies", "studied", "had studied", "study"], answer: 2, explain: "Tipe 3: had + V3." },
    { q: "\"If I ___ you, I would apply now.\"", options: ["am", "was", "were", "be"], answer: 2, explain: "Tipe 2: 'were' untuk semua subjek." },
  ],
  comparison: [
    { q: "Correct comparison:", options: ["more cheaper", "cheaper than", "cheapest than", "as cheaper as"], answer: 1, explain: "comparative + than." },
    { q: "\"The more you practice, ___.\"", options: ["the good you get", "better you get", "the better you get", "you get better most"], answer: 2, explain: "the more ... the better." },
  ],
  articles: [
    { q: "Choose: \"She has ___ MBA.\"", options: ["a", "an", "the", "-"], answer: 1, explain: "Bunyi 'em' (vokal) → an." },
    { q: "\"He gave me ___ advice.\" (umum)", options: ["an", "a", "some", "many"], answer: 2, explain: "'advice' uncountable → some (bukan an/many)." },
  ],
  pronoun: [
    { q: "\"The company increased ___ profit.\"", options: ["it's", "its", "their", "his"], answer: 1, explain: "its = kepemilikan (it's = it is)." },
    { q: "\"Each student must bring ___ book.\" (ITP formal)", options: ["their", "his or her", "them", "its"], answer: 1, explain: "'each' tunggal → his or her." },
  ],
  wordorder: [
    { q: "\"Never ___ such a view.\"", options: ["I have seen", "have I seen", "I saw", "seen I have"], answer: 1, explain: "Negatif di awal → inversi." },
    { q: "\"Not until 1969 ___ on the Moon.\"", options: ["humans landed", "did humans land", "humans did land", "landed humans"], answer: 1, explain: "Inversi: did + subjek + V1." },
  ],
  wordform: [
    { q: "\"The country experienced rapid economic ___.\"", options: ["grow", "grew", "growth", "growing"], answer: 2, explain: "Setelah adjektiva butuh noun: growth." },
    { q: "\"Prices rose ___.\"", options: ["rapid", "rapidly", "rapidness", "rapids"], answer: 1, explain: "Menerangkan verba → adverb." },
  ],
  countable: [
    { q: "Correct:", options: ["many informations", "much information", "a information", "informations"], answer: 1, explain: "'information' uncountable → much." },
    { q: "\"He gave me a useful piece of ___.\"", options: ["advices", "advice", "an advice", "advise"], answer: 1, explain: "a piece of advice." },
  ],
  "we-errors": [
    { q: "Find the error: \"Despite of the rain, we left.\"", options: ["Despite of", "the rain", "we", "left"], answer: 0, explain: "'Despite of' → 'Despite'." },
    { q: "Find the error: \"She is one of the best student.\"", options: ["one of", "the best", "student", "is"], answer: 2, explain: "→ 'students' (jamak)." },
  ],
  "listen-strat": [
    { q: "In Part A, the answer usually lies in:", options: ["the first speaker", "the second speaker's response", "the narrator", "the question only"], answer: 1, explain: "Fokus pada respons pembicara kedua." },
    { q: "A correct answer choice most often:", options: ["repeats exact words", "paraphrases with synonyms", "is the longest", "mentions numbers"], answer: 1, explain: "Jawaban benar memparafrase." },
  ],
  idioms: [
    { q: '"I can\'t make it" means:', options: ["I can't build it", "I can't attend", "I can't decide", "I can't hear"], answer: 1, explain: "Tidak bisa hadir." },
    { q: '"It\'s a piece of cake" means it is:', options: ["delicious", "very easy", "expensive", "far away"], answer: 1, explain: "Sangat mudah." },
    { q: '"Why don\'t you rest?" is used to:', options: ["complain", "make a suggestion", "disagree", "apologize"], answer: 1, explain: "Ungkapan menyarankan." },
  ],
  "read-strat": [
    { q: "For a main-idea question, choose the option that is:", options: ["a small detail", "most general and covers the whole text", "not mentioned", "the longest"], answer: 1, explain: "Main idea mencakup keseluruhan." },
    { q: "In an EXCEPT question, the answer is the choice that is:", options: ["true and stated", "not stated in the text", "the first", "a synonym"], answer: 1, explain: "Cari yang tidak ada di teks." },
  ],
  "read-vocab": [
    { q: "\"...unlike coal, solar is clean.\" The word 'unlike' signals:", options: ["an example", "a contrast", "a cause", "a definition"], answer: 1, explain: "Penanda kontras." },
    { q: "The pronoun 'they' refers to:", options: ["a verb", "the nearest preceding noun", "the writer", "the reader"], answer: 1, explain: "Referent → kata benda terdekat sebelumnya." },
  ],
  "essay-struct": [
    { q: "The thesis statement belongs in the:", options: ["conclusion", "introduction", "body 2 only", "title"], answer: 1, explain: "Tesis di pendahuluan." },
    { q: "Which is a cause-effect transition?", options: ["However", "For example", "As a result", "In addition"], answer: 2, explain: "'As a result' menunjukkan akibat." },
  ],
  "lpdp-essay": [
    { q: "The recommended narrative pattern is:", options: ["random order", "past → present → future", "future only", "problem only"], answer: 1, explain: "Masa lalu → sekarang → masa depan." },
    { q: "A strong contribution plan is:", options: ["general and vague", "specific and measurable", "about others only", "unrelated to your field"], answer: 1, explain: "Spesifik & terukur." },
  ],
  wordbuild: [
    { q: "The root 'port' means:", options: ["to see", "to carry", "to write", "to build"], answer: 1, explain: "port = bawa (transport)." },
    { q: "The suffix '-tion' usually forms a:", options: ["verb", "noun", "adjective", "adverb"], answer: 1, explain: "-tion → noun." },
  ],
  "strat-waktu": [
    { q: "Jika sebuah soal Structure terasa sulit, sebaiknya kamu:", options: ["berhenti sampai ketemu", "tandai dan lanjut, kembali nanti", "kosongkan selamanya", "menyerah"], answer: 1, explain: "Jangan terpaku; tandai & lanjut." },
    { q: "Berapa perkiraan waktu per soal di Reading?", options: ["~10 detik", "~65 detik", "~5 menit", "tak terbatas"], answer: 1, explain: "±55 menit / 50 soal ≈ 65 detik termasuk membaca." },
  ],
  "strat-tebak": [
    { q: "Apakah jawaban salah mengurangi skor di TOEFL ITP?", options: ["Ya, minus 1", "Tidak, hanya benar yang dihitung", "Ya, minus 0,25", "Tergantung bagian"], answer: 1, explain: "Tidak ada penalti — selalu isi." },
    { q: "Langkah pertama menebak cerdas adalah:", options: ["pilih A selalu", "mencoret pilihan yang jelas salah", "kosongkan", "pilih yang terpanjang"], answer: 1, explain: "Eliminasi dulu." },
  ],
  "strat-tipe": [
    { q: "Untuk soal Reading bertipe 'reference' (it/they), acuannya adalah:", options: ["kata kerja utama", "kata benda terdekat sebelumnya", "judul teks", "kalimat terakhir"], answer: 1, explain: "Referent = kata benda terdekat sebelumnya." },
    { q: "Di Part A Listening, fokus utama pada:", options: ["pembicara pertama", "ucapan pembicara kedua", "narator", "musik latar"], answer: 1, explain: "Jawaban umumnya di respons pembicara kedua." },
  ],
  "strat-harih": [
    { q: "Malam sebelum tes sebaiknya:", options: ["begadang belajar materi baru", "tidur cukup", "minum kopi banyak", "tidak tidur sama sekali"], answer: 1, explain: "Tidur cukup menjaga konsentrasi & memori." },
    { q: "Saat menemui soal sulit ketika tes, sebaiknya:", options: ["panik", "lewati dulu, kembali nanti", "berhenti mengerjakan", "menebak semua sisa"], answer: 1, explain: "Lewati & kelola waktu." },
  ],
  "wwc-format": [
    { q: "In the LPDP interview, answers should be:", options: ["different from your essay", "consistent with your essay and form", "as long as possible", "memorized word-for-word"], answer: 1, explain: "Konsisten dengan berkas." },
    { q: "Which is NOT typically assessed?", options: ["commitment to return", "contribution plan", "your favorite movie", "academic readiness"], answer: 2, explain: "Bukan aspek penilaian." },
  ],
  "wwc-bank": [
    { q: "'Why this campus?' is best answered with:", options: ["\"it is famous\"", "specific labs/research relevant to your goal", "\"my friend studies there\"", "a joke"], answer: 1, explain: "Alasan spesifik & relevan." },
    { q: "The STAR method stands for:", options: ["Study-Test-Answer-Review", "Situation-Task-Action-Result", "Start-Talk-Ask-Rest", "Search-Try-Adapt-Repeat"], answer: 1, explain: "Situation, Task, Action, Result." },
  ],
  "wwc-lgd": [
    { q: "In an LGD, evaluators value:", options: ["dominating the talk", "quality contribution and cooperation", "staying silent", "criticizing everyone"], answer: 1, explain: "Kontribusi berkualitas + kerja sama." },
    { q: "A fatal interview mistake is:", options: ["being specific", "a story that contradicts your essay", "arriving early", "knowing your study plan"], answer: 1, explain: "Cerita yang bertentangan dengan esai." },
  ],
  "listen-short": [
    { q: "In a Part A short dialog, the answer usually lies in:", options: ["the first speaker's line", "the second speaker's response", "background noise", "the question wording only"], answer: 1, explain: "Jawaban hampir selalu di respons pembicara kedua." },
    { q: "\"You can say that again!\" most likely expresses:", options: ["a request to repeat", "strong agreement", "confusion", "disagreement"], answer: 1, explain: "Idiom ini berarti setuju kuat, bukan minta diulang." },
    { q: "An answer choice that repeats the exact words from the audio is often:", options: ["always correct", "a trap / distractor", "the main idea", "a synonym"], answer: 1, explain: "Pengulangan kata persis sering jebakan; jawaban benar memparafrase." },
  ],
  "listen-long": [
    { q: "In Part C lectures, the main topic is usually stated:", options: ["in the last sentence", "in the first one or two sentences", "never", "only in the questions"], answer: 1, explain: "Topik utama biasanya disebut di awal." },
    { q: "Words like \"first, next, finally\" signal:", options: ["a definition", "the organization / sequence", "a contrast", "the speaker's name"], answer: 1, explain: "Penanda urutan/organisasi pembicaraan." },
    { q: "For a main-purpose question, the best answer is:", options: ["one small detail", "the most general idea covering the whole talk", "a repeated number", "the last word"], answer: 1, explain: "Pilih yang mencakup keseluruhan, bukan detail kecil." },
  ],
  "read-inference": [
    { q: "A good inference answer must be:", options: ["based on outside knowledge", "supported by the text", "the most extreme option", "unrelated to the passage"], answer: 1, explain: "Inferensi harus didukung teks, hanya selangkah dari yang tertulis." },
    { q: "Which word often signals a WRONG inference choice?", options: ["some", "always / never", "may", "often"], answer: 1, explain: "Kata ekstrem seperti always/never sering menandai jawaban salah." },
    { q: "\"The author mentions X in order to...\" is asking about the author's:", options: ["favorite topic", "purpose", "nationality", "vocabulary"], answer: 1, explain: "Ini soal tujuan penulis." },
  ],
  "read-reference": [
    { q: "\"Scientists studied the reefs because they were dying.\" The word 'they' refers to:", options: ["scientists", "the reefs", "the study", "the ocean"], answer: 1, explain: "Kata benda terdekat yang logis dan cocok jumlah: the reefs." },
    { q: "For a vocabulary-in-context question, choose the meaning that:", options: ["is the most common dictionary meaning", "fits the meaning of that sentence", "is the longest word", "sounds similar"], answer: 1, explain: "Makna ditentukan konteks kalimat, bukan kamus umum." },
    { q: "In \"an adverse effect, worsening the condition\", 'adverse' means:", options: ["helpful", "harmful / negative", "expensive", "temporary"], answer: 1, explain: "Petunjuk 'worsening' → adverse = merugikan." },
  ],
  "vocab-akademik": [
    { q: "\"Consequently\" is closest in meaning to:", options: ["however", "as a result", "for example", "meanwhile"], answer: 1, explain: "Consequently = akibatnya." },
    { q: "Which word means 'scarce'?", options: ["abundant", "rare / in short supply", "important", "diverse"], answer: 1, explain: "Scarce = langka." },
    { q: "A synonym for 'demonstrate' is:", options: ["hide", "show / reveal", "delay", "reduce"], answer: 1, explain: "Demonstrate = menunjukkan/membuktikan." },
  ],
  "vocab-akar": [
    { q: "The root 'aud' means:", options: ["see", "hear", "write", "time"], answer: 1, explain: "aud = dengar (audible, audience)." },
    { q: "\"Terrestrial\" contains 'terr', so it relates to:", options: ["water", "earth / land", "fire", "air"], answer: 1, explain: "terr = tanah/bumi." },
    { q: "The prefix 'mal-' (as in malfunction) means:", options: ["good", "bad", "many", "before"], answer: 1, explain: "mal = buruk." },
  ],
  "essay-transisi": [
    { q: "\"It rained. ___, we stayed home.\" Best transition:", options: ["However", "Therefore", "For example", "In contrast"], answer: 1, explain: "Hubungan sebab-akibat → Therefore." },
    { q: "Which transition shows contrast?", options: ["Furthermore", "Nevertheless", "As a result", "For instance"], answer: 1, explain: "Nevertheless menandai kontras." },
    { q: "A well-structured paragraph should focus on:", options: ["many ideas at once", "one main idea", "no main idea", "only examples"], answer: 1, explain: "Satu paragraf, satu ide utama." },
  ],
  "lpdp-rencana": [
    { q: "A strong contribution plan follows the pattern:", options: ["problem → solution → measurable impact", "impact → hobby → salary", "solution only", "random points"], answer: 0, explain: "Masalah → solusi → dampak terukur." },
    { q: "A study plan should include all EXCEPT:", options: ["core courses", "thesis topic", "timeline to graduate", "your favorite food"], answer: 3, explain: "Makanan favorit tidak relevan dengan rencana studi." },
    { q: "Which makes a plan WEAK?", options: ["specific target numbers", "clear timeline", "vague goals with no concrete steps", "link between major and contribution"], answer: 2, explain: "Tujuan terlalu umum tanpa langkah konkret melemahkan rencana." },
  ],
};

