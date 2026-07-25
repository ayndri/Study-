# Jalur ITS — Platform Belajar Multi-Jalur (TOEFL ITP, Beasiswa LPDP & Flutter)

Aplikasi web **Next.js** untuk belajar mandiri yang menggabungkan beberapa jalur pembelajaran dalam satu tempat, ditenagai **AI (Gemini)** dan disimpan di **Neon Postgres**, dengan **login** dan **panel admin** untuk mengelola akun pengguna.

Saat ini tersedia tiga jalur belajar:

- 🎓 **TOEFL ITP & Beasiswa LPDP** — persiapan tes TOEFL ITP dan seleksi beasiswa LPDP menuju S2 Teknik Informatika ITS.
- 📱 **Mobile dengan Flutter** — belajar membangun aplikasi mobile dengan Dart & Flutter dari nol.
- 🐹 **Golang (Go)** — belajar bahasa Go dari dasar hingga konkurensi & REST API.

> Platform ini dirancang agar mudah ditambah jalur belajar baru: konten & materi terpisah, sedangkan komponen dan endpoint AI dipakai bersama (sadar-subjek).

---

## ✨ Fitur Utama

### Umum
- 🔐 **Login wajib** — seluruh halaman digerbang; tanpa masuk otomatis diarahkan ke halaman login.
- 👤 **Panel Admin** — admin dapat membuat & menghapus akun pengguna, serta mengatur peran (user/admin).
- ☁️ **Progres lintas-perangkat** — simpan & muat progres via kode akun (Neon), atau otomatis mengikuti akun login.
- 🌗 **Tema terang/gelap** & desain responsif (font Poppins + Plus Jakarta Sans).
- 📲 **PWA** — dapat "dipasang" ke layar HP/desktop; aset statis tersedia offline.
- 🧭 **Pemilih pembelajaran** ("Mau belajar apa hari ini?") dengan sidebar yang menyesuaikan jalur.

### Jalur TOEFL ITP & LPDP
- 📚 **Materi lengkap** (45+ pelajaran, 8 kategori) dari dasar bahasa Inggris, grammar, listening, reading, writing, kosakata, hingga strategi tes & wawancara beasiswa.
- ✦ **Perdalam dengan AI** di setiap materi — penjelasan mendalam dari dasar untuk pemula.
- 📝 **Latihan berlevel** (Listening, Structure, Reading) dengan filter kesulitan + pembahasan.
- ⏱️ **Simulasi tes lengkap** berwaktu 3 bagian dengan skor konversi (310–677).
- ✍️ **Writing** dengan **koreksi esai otomatis (AI)** + rubrik, beserta **riwayat esai**.
- 🔤 **Vocabulary** — 110 flashcard + kuis dengan *spaced repetition*.
- ✦ **Tutor AI** tanya-jawab & **Simulasi Wawancara LPDP** (AI sebagai pewawancara + evaluasi).
- 🎤 Kalkulator konversi skor & dashboard progres.

### Jalur Flutter
- 📚 **29 pelajaran** bertahap: setup, Dart (variabel, fungsi, class, null safety, koleksi), widget & layout, state (setState, siklus hidup, berbagi state/Provider, Riverpod), form & validasi, GridView, animasi, gambar/aset, tampilan responsif, dialog/SnackBar, navigasi (named routes/go_router), ambil data API, simpan data lokal, debugging, dan penggunaan paket.
- 💻 Contoh **kode Dart** di setiap materi + **mini-quiz** + **Perdalam dengan AI**.
- ✦ **Tutor Flutter AI** — menjawab dengan contoh kode.
- ⌨️ **Latihan koding** — tulis kode Dart, AI menilai, menemukan bug, dan memberi versi perbaikan.

### Jalur Golang
- 📚 **41 pelajaran** dalam 10 kategori: mulai dari nol (setup, go mod), dasar bahasa (variabel, const/iota, operator), kontrol alur (if/switch, for), fungsi (multiple return, variadic, closure, defer), struktur data (slice, map, struct, pointer), method & interface & generics, konkurensi (goroutine, channel, select, sync, context, worker pool), pustaka standar (strings, time, json, file I/O, regexp, sort), web & modul (net/http, REST API, middleware, database/sql, package), serta praktik & alat (testing, debugging, konfigurasi flag/env, tooling idiomatis).
- 💻 Contoh **kode Go** di setiap materi + **mini-quiz** + **Perdalam dengan AI**.
- ✦ **Tutor Golang AI** — menjawab dengan contoh kode idiomatis.
- ⌨️ **Latihan koding** — tulis kode Go, AI menilai, menemukan bug, dan memberi versi perbaikan.

---

## 🧱 Teknologi

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + tema berbasis CSS variables
- **@google/generative-ai** (Gemini) — endpoint AI: tutor, koreksi esai, perdalam materi, jelaskan jawaban, wawancara, review kode
- **@neondatabase/serverless** (Postgres) — akun, progres, skor, esai
- **Autentikasi** ringan: password di-hash (scrypt), sesi cookie HttpOnly bertanda-tangan HMAC, digerbang oleh **middleware**
- **PWA**: manifest + service worker

---

## 🚀 Menjalankan Secara Lokal

```bash
npm install
cp .env.example .env      # lalu isi variabel di bawah
npm run dev               # http://localhost:3000
```

Build produksi:

```bash
npm run build && npm run start
```

---

## 🔑 Variabel Lingkungan

Salin `.env.example` menjadi `.env` lalu isi nilainya. **Jangan** commit file `.env` (sudah diabaikan di `.gitignore`).

| Variabel | Wajib? | Fungsi |
|----------|:------:|--------|
| `AUTH_SECRET` | ✅ | Kunci acak panjang untuk menandatangani sesi login. |
| `ADMIN_USERNAME` | ✅ | Username akun admin awal (untuk login pertama & mengelola user). |
| `ADMIN_PASSWORD` | ✅ | Password akun admin awal. |
| `DATABASE_URL` | ✅* | Koneksi Neon Postgres (akun user, progres, esai). |
| `GEMINI_API_KEY` | ⛅ | Mengaktifkan seluruh fitur AI. Tanpa ini, fitur non-AI tetap jalan. |
| `GEMINI_MODEL` | — | Nama model Gemini (default `gemini-flash-latest`). |

\* Login admin dari environment tetap bisa tanpa DB, tetapi pembuatan akun user & penyimpanan progres membutuhkan `DATABASE_URL`.

- API key Gemini gratis: <https://aistudio.google.com/app/apikey>
- Neon Postgres gratis: <https://neon.tech>

> Kredensial admin **tidak** disertakan di repositori. Tetapkan sendiri lewat variabel lingkungan, dan gunakan password yang kuat.

Tabel database (`users`, `attempts`, `essays`, `progress_kv`) dibuat otomatis saat pertama kali dipakai.

---

## 📁 Struktur Proyek

```
app/
  (halaman jalur TOEFL: /, /materi, /listening, /structure, /reading,
   /writing, /vocabulary, /simulasi, /tutor, /wawancara, /beasiswa, /riwayat-esai)
  flutter/           jalur Flutter (beranda, materi, tutor, latihan)
  golang/            jalur Golang (beranda, materi, tutor, latihan)
  pilih/             pemilih jalur pembelajaran
  login/  admin/     autentikasi & manajemen akun
  api/               endpoint: auth, admin, progress, sync, feedback,
                     tutor, perdalam, jelaskan, wawancara, review-kode
components/          Shell (navigasi), Quiz, Materi, Tutor, Simulasi, dll.
lib/                 content.ts (TOEFL), materi.ts, flutter.ts, golang.ts,
                     db.ts, gemini.ts, auth.ts, auth-token.ts, store.ts
middleware.ts        gerbang autentikasi seluruh rute
```

---

## ⚠️ Catatan

Materi, angka skor, tahapan beasiswa, dan contoh kode dalam aplikasi ini bersifat **panduan belajar** dan dapat berubah. Selalu verifikasi ketentuan resmi di **lpdp.kemenkeu.go.id** dan **its.ac.id**, serta dokumentasi resmi di **flutter.dev** dan **go.dev**, sebelum mengambil keputusan.

---

## 📄 Lisensi

Proyek pembelajaran pribadi. Silakan sesuaikan lisensi sesuai kebutuhanmu (mis. MIT).
