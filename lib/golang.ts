// Konten jalur belajar "Belajar Golang (Go)".
// Struktur mengikuti tipe Lesson/Question agar bisa dipakai komponen Materi & Quiz.
// Catatan penyunting: di dalam template literal, tanda < dan > pada KODE ditulis
// sebagai &lt; / &gt;, backtick pada Go (struct tag / raw string) ditulis \`,
// dan escape string Go seperti \n ditulis \\n agar tampil apa adanya.
import type { Lesson } from "@/lib/materi";
import type { Question } from "@/lib/content";

export const GO_CATS: { key: string; label: string; ic: string }[] = [
  { key: "mulai", label: "Mulai dari Nol", ic: "◔" },
  { key: "dasar", label: "Dasar Bahasa", ic: "◆" },
  { key: "kontrol", label: "Kontrol Alur", ic: "⌥" },
  { key: "fungsi", label: "Fungsi", ic: "ƒ" },
  { key: "data", label: "Struktur Data", ic: "▦" },
  { key: "oop", label: "Method & Interface", ic: "◈" },
  { key: "concurrency", label: "Konkurensi", ic: "⚡" },
  { key: "stdlib", label: "Pustaka Standar", ic: "▤" },
  { key: "web", label: "Web & Modul", ic: "☍" },
  { key: "praktik", label: "Praktik & Alat", ic: "◎" },
];

export const GO_LESSONS: Lesson[] = [
  // ===================== MULAI DARI NOL =====================
  {
    id: "go-intro",
    cat: "mulai",
    title: "Apa itu Go & Menyiapkan Alat",
    minutes: 7,
    summary: "Kenalan dengan bahasa Go dan cara memasang alatnya.",
    body: `
      <p><b>Go</b> (sering disebut <b>Golang</b>) adalah bahasa pemrograman buatan <b>Google</b> yang <b>sederhana, cepat, dan modern</b>. Go banyak dipakai untuk <b>backend/server, tools command-line, cloud (Docker, Kubernetes), dan sistem berkinerja tinggi</b>.</p>
      <h4>Kenapa belajar Go?</h4>
      <ul>
        <li><b>Sintaks sederhana</b> — sedikit kata kunci, mudah dibaca.</li>
        <li><b>Cepat</b> — dikompilasi menjadi satu file biner (binary) yang berjalan tanpa runtime tambahan.</li>
        <li><b>Konkurensi bawaan</b> — <i>goroutine</i> &amp; <i>channel</i> memudahkan program menangani banyak tugas sekaligus.</li>
        <li><b>Tooling lengkap</b> — format kode, uji, dan manajemen paket sudah menyatu.</li>
      </ul>
      <h4>Menyiapkan alat</h4>
      <ol>
        <li>Unduh &amp; pasang Go dari <b>go.dev/dl</b>.</li>
        <li>Cek instalasi lewat terminal:
          <pre><code>go version</code></pre>
        </li>
        <li>Pasang editor <b>VS Code</b> + ekstensi resmi <b>Go</b> (autocomplete, format otomatis, debug).</li>
      </ol>
      <div class="callout">Belum mau instal? Coba <b>Go Playground</b> di <b>go.dev/play</b> untuk menjalankan kode Go langsung di browser. Klik <b>Perdalam dengan AI</b> untuk panduan instalasi langkah demi langkah sesuai sistem operasimu.</div>
    `,
  },
  {
    id: "go-hello",
    cat: "mulai",
    title: "Program Go Pertama",
    minutes: 6,
    summary: "Membedah struktur program Go dan mencetak teks ke layar.",
    body: `
      <p>Berikut program Go paling sederhana yang mencetak tulisan:</p>
      <pre><code>package main

import "fmt"

func main() {
    fmt.Println("Halo, Go!")
}</code></pre>
      <h4>Penjelasan tiap baris</h4>
      <ul>
        <li><b>package main</b> → setiap program Go tergabung dalam <i>package</i>; <code>main</code> adalah package untuk program yang bisa dijalankan.</li>
        <li><b>import "fmt"</b> → mengambil paket <code>fmt</code> (format &amp; cetak) dari pustaka standar.</li>
        <li><b>func main()</b> → fungsi <code>main</code> adalah titik masuk; dijalankan pertama kali.</li>
        <li><b>fmt.Println(...)</b> → mencetak teks lalu pindah baris.</li>
      </ul>
      <h4>Menjalankannya</h4>
      <pre><code>go run main.go</code></pre>
      <div class="callout">Go sangat ketat: <b>import yang tidak dipakai</b> atau <b>variabel yang tidak dipakai</b> akan membuat program <b>gagal dikompilasi</b>. Ini sengaja, agar kode selalu bersih.</div>
    `,
  },
  {
    id: "go-tools",
    cat: "mulai",
    title: "go run, build, dan Modul (go mod)",
    minutes: 8,
    summary: "Menjalankan, membangun biner, dan membuat modul proyek.",
    body: `
      <p>Go punya alat baris perintah (CLI) yang menyatu. Ini yang paling sering dipakai:</p>
      <table>
        <tr><th>Perintah</th><th>Fungsi</th></tr>
        <tr><td><code>go run main.go</code></td><td>Kompilasi &amp; jalankan langsung (untuk mencoba cepat).</td></tr>
        <tr><td><code>go build</code></td><td>Membuat file biner (executable) yang bisa dijalankan sendiri.</td></tr>
        <tr><td><code>go mod init nama</code></td><td>Membuat modul baru (file <code>go.mod</code>).</td></tr>
        <tr><td><code>go get paket</code></td><td>Menambah dependensi dari internet.</td></tr>
        <tr><td><code>go fmt ./...</code></td><td>Merapikan format seluruh kode.</td></tr>
      </table>
      <h4>Membuat proyek dari nol</h4>
      <pre><code>mkdir belajar-go
cd belajar-go
go mod init belajar-go
# buat file main.go, lalu:
go run .</code></pre>
      <p>File <b>go.mod</b> mencatat nama modul, versi Go, dan daftar dependensi. Ini inti dari <b>Go Modules</b> — sistem manajemen paket resmi.</p>
      <div class="callout">Gunakan <code>go run .</code> (dengan titik) untuk menjalankan seluruh package di folder saat ini, bukan hanya satu file.</div>
    `,
  },

  // ===================== DASAR BAHASA =====================
  {
    id: "go-var",
    cat: "dasar",
    title: "Variabel & Tipe Data",
    minutes: 8,
    summary: "var, :=, dan tipe dasar int, float64, string, bool.",
    body: `
      <p>Go adalah bahasa <b>bertipe statis</b>: setiap variabel punya tipe yang pasti.</p>
      <h4>Mendeklarasikan variabel</h4>
      <pre><code>var umur int = 20        // lengkap: var, nama, tipe, nilai
var kota = "Surabaya"    // tipe ditebak otomatis (string)
nama := "Dewi"           // singkat := (hanya di dalam fungsi)

var lulus bool           // tanpa nilai → nilai nol: false</code></pre>
      <h4>Tipe dasar yang sering dipakai</h4>
      <ul>
        <li><b>int</b> — bilangan bulat (mis. 42, -7).</li>
        <li><b>float64</b> — bilangan desimal (mis. 3.14).</li>
        <li><b>string</b> — teks, diapit tanda kutip ganda "...".</li>
        <li><b>bool</b> — <code>true</code> atau <code>false</code>.</li>
      </ul>
      <h4>Nilai nol (zero value)</h4>
      <p>Variabel tanpa nilai awal tidak pernah "kosong tak tentu". Go memberi <b>nilai nol</b>: <code>0</code> untuk angka, <code>""</code> untuk string, <code>false</code> untuk bool.</p>
      <div class="callout">Operator <code>:=</code> membuat variabel baru <b>sekaligus</b> mengisinya, dan hanya bisa dipakai <b>di dalam fungsi</b>. Di level package gunakan <code>var</code>.</div>
    `,
  },
  {
    id: "go-const",
    cat: "dasar",
    title: "Konstanta & iota",
    minutes: 6,
    summary: "Nilai tetap dengan const dan pembuat urutan iota.",
    body: `
      <p><b>Konstanta</b> adalah nilai yang tidak berubah selama program berjalan.</p>
      <pre><code>const Pi = 3.14159
const NamaApp = "BelajarGo"

const (
    StatusAktif   = "aktif"
    StatusNonaktif = "nonaktif"
)</code></pre>
      <h4>iota — penghitung otomatis</h4>
      <p><b>iota</b> memudahkan membuat urutan konstanta (mirip enum). Nilainya mulai dari 0 dan naik tiap baris.</p>
      <pre><code>const (
    Minggu = iota  // 0
    Senin          // 1
    Selasa         // 2
    Rabu           // 3
)</code></pre>
      <ul>
        <li>Konstanta harus bisa dihitung <b>saat kompilasi</b> (tidak boleh dari input pengguna).</li>
        <li><b>iota</b> berguna untuk membuat "level", "status", atau kategori berurutan.</li>
      </ul>
      <div class="callout">Beri nama konstanta dengan huruf awal <b>kapital</b> bila ingin bisa dipakai dari package lain (diekspor).</div>
    `,
  },
  {
    id: "go-operator",
    cat: "dasar",
    title: "Operator & Konversi Tipe",
    minutes: 7,
    summary: "Aritmatika, perbandingan, logika, dan mengubah tipe.",
    body: `
      <h4>Operator umum</h4>
      <ul>
        <li>Aritmatika: <code>+ - * / %</code> (% = sisa bagi).</li>
        <li>Perbandingan: <code>==  !=  &lt;  &gt;  &lt;=  &gt;=</code> → menghasilkan <code>bool</code>.</li>
        <li>Logika: <code>&amp;&amp;</code> (dan), <code>||</code> (atau), <code>!</code> (tidak).</li>
      </ul>
      <pre><code>a := 10
b := 3
fmt.Println(a / b)  // 3  (pembagian bilangan bulat)
fmt.Println(a % b)  // 1  (sisa)
fmt.Println(a &gt; b &amp;&amp; b &gt; 0)  // true</code></pre>
      <h4>Konversi tipe WAJIB eksplisit</h4>
      <p>Go <b>tidak</b> mengubah tipe otomatis. Kamu harus menulis konversinya sendiri:</p>
      <pre><code>var x int = 5
var y float64 = float64(x)   // int → float64
var z int = int(3.9)         // float64 → int (jadi 3, dipotong)</code></pre>
      <p>Menggabungkan angka dan teks perlu paket <code>strconv</code> (dibahas di Pustaka Standar):</p>
      <pre><code>import "strconv"
umur := 20
pesan := "Umur: " + strconv.Itoa(umur)  // Itoa: int → string</code></pre>
      <div class="callout">Pembagian dua <code>int</code> menghasilkan <code>int</code> (dibulatkan ke bawah). Untuk hasil desimal, ubah salah satu ke <code>float64</code> dulu.</div>
    `,
  },

  // ===================== KONTROL ALUR =====================
  {
    id: "go-if",
    cat: "kontrol",
    title: "Percabangan: if & switch",
    minutes: 8,
    summary: "if/else, if dengan statement awal, dan switch yang ringkas.",
    body: `
      <h4>if / else</h4>
      <p>Perhatikan: kondisi <b>tanpa tanda kurung</b>, tapi kurung kurawal <b>wajib</b>.</p>
      <pre><code>nilai := 80
if nilai &gt;= 75 {
    fmt.Println("Lulus")
} else if nilai &gt;= 60 {
    fmt.Println("Remedial")
} else {
    fmt.Println("Belum lulus")
}</code></pre>
      <h4>if dengan statement awal</h4>
      <p>Go boleh menjalankan sepotong kode sebelum kondisi. Variabelnya hanya hidup di dalam if.</p>
      <pre><code>if sisa := nilai % 2; sisa == 0 {
    fmt.Println("genap")
} else {
    fmt.Println("ganjil")
}</code></pre>
      <h4>switch</h4>
      <p>Di Go, tiap <code>case</code> otomatis berhenti (tidak perlu <code>break</code>).</p>
      <pre><code>hari := "Senin"
switch hari {
case "Sabtu", "Minggu":
    fmt.Println("Libur")
default:
    fmt.Println("Hari kerja")
}</code></pre>
      <div class="callout">Bentuk <b>switch tanpa nilai</b> bisa menggantikan if-else panjang: <code>switch { case x &gt; 90: ...; case x &gt; 75: ... }</code>.</div>
    `,
  },
  {
    id: "go-for",
    cat: "kontrol",
    title: "Perulangan: for (satu-satunya loop)",
    minutes: 8,
    summary: "Go hanya punya for — untuk gaya C, while, dan range.",
    body: `
      <p>Go <b>hanya punya satu</b> kata kunci perulangan: <b>for</b>. Tapi ia punya beberapa bentuk.</p>
      <h4>1. For gaya klasik</h4>
      <pre><code>for i := 1; i &lt;= 5; i++ {
    fmt.Println(i)
}</code></pre>
      <h4>2. For sebagai "while"</h4>
      <pre><code>n := 1
for n &lt; 100 {
    n = n * 2
}</code></pre>
      <h4>3. For tak terbatas (+ break)</h4>
      <pre><code>for {
    // ulang terus...
    break   // keluar dari loop
}</code></pre>
      <h4>4. For range (menelusuri koleksi)</h4>
      <pre><code>buah := []string{"apel", "mangga", "jeruk"}
for indeks, nilai := range buah {
    fmt.Println(indeks, nilai)
}</code></pre>
      <ul>
        <li><b>break</b> keluar dari loop; <b>continue</b> lompat ke iterasi berikutnya.</li>
        <li>Abaikan nilai yang tak dipakai dengan garis bawah: <code>for _, v := range buah</code>.</li>
      </ul>
      <div class="callout">Tidak ada <code>while</code> atau <code>do-while</code> di Go — semua diwakili oleh <b>for</b>. Ini menyederhanakan bahasa.</div>
    `,
  },

  // ===================== FUNGSI =====================
  {
    id: "go-func",
    cat: "fungsi",
    title: "Fungsi & Multiple Return",
    minutes: 8,
    summary: "Membuat fungsi dan mengembalikan lebih dari satu nilai.",
    body: `
      <h4>Fungsi dasar</h4>
      <p>Tipe parameter ditulis <b>setelah</b> nama, dan tipe hasil ditulis setelah kurung.</p>
      <pre><code>func tambah(a int, b int) int {
    return a + b
}

// bila tipe berurutan sama, cukup tulis sekali:
func kali(a, b int) int {
    return a * b
}</code></pre>
      <h4>Mengembalikan banyak nilai</h4>
      <p>Ciri khas Go: sebuah fungsi bisa mengembalikan <b>beberapa nilai</b> sekaligus — sering dipakai untuk hasil + error.</p>
      <pre><code>func bagi(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("tidak bisa dibagi nol")
    }
    return a / b, nil
}

func main() {
    hasil, err := bagi(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Hasil:", hasil)  // 5
}</code></pre>
      <h4>Named return values</h4>
      <pre><code>func bagiSisa(a, b int) (hasil, sisa int) {
    hasil = a / b
    sisa = a % b
    return   // otomatis mengembalikan hasil & sisa
}</code></pre>
      <div class="callout">Pola <b>(nilai, error)</b> adalah cara khas Go menangani kegagalan. Selalu cek <code>if err != nil</code> sebelum memakai hasilnya.</div>
    `,
  },
  {
    id: "go-variadic",
    cat: "fungsi",
    title: "Variadic & Closure",
    minutes: 8,
    summary: "Fungsi berparameter banyak dan fungsi anonim yang mengingat data.",
    body: `
      <h4>Variadic — parameter jumlah bebas</h4>
      <p>Gunakan <code>...</code> agar fungsi menerima berapa pun argumen. Di dalam fungsi, parameter itu menjadi <b>slice</b>.</p>
      <pre><code>func jumlah(angka ...int) int {
    total := 0
    for _, a := range angka {
        total += a
    }
    return total
}

func main() {
    fmt.Println(jumlah(1, 2, 3))       // 6
    fmt.Println(jumlah(10, 20, 30, 40)) // 100
}</code></pre>
      <h4>Fungsi anonim &amp; closure</h4>
      <p>Fungsi di Go adalah <b>nilai</b> — bisa disimpan ke variabel dan dioper. <b>Closure</b> adalah fungsi yang "mengingat" variabel di sekitarnya.</p>
      <pre><code>func penghitung() func() int {
    n := 0
    return func() int {
        n++          // mengingat & mengubah n
        return n
    }
}

func main() {
    next := penghitung()
    fmt.Println(next()) // 1
    fmt.Println(next()) // 2
    fmt.Println(next()) // 3
}</code></pre>
      <div class="callout">Closure sering dipakai untuk membuat "generator", callback, atau menyimpan state kecil tanpa membuat struct.</div>
    `,
  },
  {
    id: "go-defer",
    cat: "fungsi",
    title: "defer, panic & recover",
    minutes: 7,
    summary: "Menunda eksekusi dan menangani kondisi darurat.",
    body: `
      <h4>defer — jalankan nanti (saat fungsi selesai)</h4>
      <p><code>defer</code> menunda sebuah pemanggilan sampai fungsi di sekitarnya berakhir. Sangat berguna untuk <b>membersihkan sumber daya</b> (menutup file, koneksi).</p>
      <pre><code>func baca() {
    file := buka("data.txt")
    defer file.Close()   // dijamin dipanggil saat fungsi selesai
    // ... proses file ...
}</code></pre>
      <p>Bila ada banyak <code>defer</code>, urutannya <b>terbalik</b> (yang terakhir dijalankan lebih dulu — seperti tumpukan).</p>
      <pre><code>defer fmt.Println("1")
defer fmt.Println("2")
defer fmt.Println("3")
// Output: 3, 2, 1</code></pre>
      <h4>panic &amp; recover</h4>
      <p><b>panic</b> menghentikan program karena kondisi fatal; <b>recover</b> (di dalam defer) bisa menangkapnya agar program tidak mati.</p>
      <pre><code>func aman() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Dipulihkan dari:", r)
        }
    }()
    panic("terjadi masalah!")
}</code></pre>
      <div class="callout">Di Go, <b>error normal ditangani dengan nilai <code>error</code></b>, bukan panic. Simpan <code>panic</code> hanya untuk kondisi yang benar-benar tak terduga.</div>
    `,
  },

  // ===================== STRUKTUR DATA =====================
  {
    id: "go-array-slice",
    cat: "data",
    title: "Array & Slice",
    minutes: 9,
    summary: "Perbedaan array tetap dan slice yang bisa tumbuh — plus append.",
    body: `
      <h4>Array — ukuran TETAP</h4>
      <pre><code>var nilai [3]int          // [0 0 0]
nilai[0] = 90
warna := [2]string{"merah", "biru"}</code></pre>
      <h4>Slice — ukuran DINAMIS (paling sering dipakai)</h4>
      <p><b>Slice</b> seperti array yang bisa membesar. Ini yang dipakai 90% waktu.</p>
      <pre><code>buah := []string{"apel", "mangga"}  // tanpa angka di [] = slice
buah = append(buah, "jeruk")        // menambah elemen
fmt.Println(len(buah))              // 3 (panjang)
fmt.Println(buah[0])                // apel</code></pre>
      <h4>Mengiris slice</h4>
      <pre><code>angka := []int{10, 20, 30, 40, 50}
fmt.Println(angka[1:3])   // [20 30]  (indeks 1 s/d sebelum 3)
fmt.Println(angka[:2])    // [10 20]
fmt.Println(angka[3:])    // [40 50]</code></pre>
      <h4>Membuat slice dengan make</h4>
      <pre><code>s := make([]int, 0, 10)   // panjang 0, kapasitas 10</code></pre>
      <ul>
        <li><b>len(s)</b> = jumlah elemen; <b>cap(s)</b> = kapasitas.</li>
        <li><b>append</b> mengembalikan slice baru — selalu tampung hasilnya: <code>s = append(s, x)</code>.</li>
      </ul>
      <div class="callout">Ingat: array = ukuran tetap &amp; jarang dipakai; <b>slice = pilihan utama</b> untuk kumpulan data yang berubah.</div>
    `,
  },
  {
    id: "go-map",
    cat: "data",
    title: "Map (Pasangan Kunci–Nilai)",
    minutes: 8,
    summary: "Menyimpan data dengan kunci, mengecek keberadaan, dan menghapus.",
    body: `
      <p><b>Map</b> menyimpan pasangan <b>kunci → nilai</b>, mirip kamus. Cepat untuk mencari data berdasarkan kunci.</p>
      <pre><code>nilai := map[string]int{
    "Dewi": 90,
    "Andi": 85,
}

fmt.Println(nilai["Dewi"])  // 90
nilai["Budi"] = 78          // menambah / mengubah
delete(nilai, "Andi")       // menghapus</code></pre>
      <h4>Membuat map kosong</h4>
      <pre><code>stok := make(map[string]int)
stok["apel"] = 12</code></pre>
      <h4>Cek keberadaan kunci (pola "comma ok")</h4>
      <p>Mengakses kunci yang tidak ada mengembalikan <b>nilai nol</b>, bukan error. Untuk membedakan, pakai dua nilai:</p>
      <pre><code>harga, ada := stok["mangga"]
if ada {
    fmt.Println("Harga:", harga)
} else {
    fmt.Println("Barang tidak ada")
}</code></pre>
      <h4>Menelusuri map</h4>
      <pre><code>for kunci, val := range nilai {
    fmt.Println(kunci, "=", val)
}</code></pre>
      <div class="callout">Urutan iterasi map di Go <b>acak</b> (tidak dijamin). Jika butuh urutan tertentu, kumpulkan kunci ke slice lalu urutkan dengan <code>sort</code>.</div>
    `,
  },
  {
    id: "go-struct",
    cat: "data",
    title: "Struct (Tipe Buatan Sendiri)",
    minutes: 9,
    summary: "Menggabungkan beberapa field menjadi satu tipe data.",
    body: `
      <p><b>Struct</b> mengelompokkan beberapa data terkait menjadi satu tipe — mirip "objek" tanpa class.</p>
      <pre><code>type Mahasiswa struct {
    Nama string
    Umur int
    IPK  float64
}</code></pre>
      <h4>Membuat &amp; memakai struct</h4>
      <pre><code>func main() {
    m := Mahasiswa{Nama: "Dewi", Umur: 20, IPK: 3.8}
    fmt.Println(m.Nama)   // Dewi
    m.Umur = 21           // ubah field

    // tanpa nama field (urut sesuai definisi):
    m2 := Mahasiswa{"Andi", 22, 3.5}
    fmt.Println(m2)
}</code></pre>
      <h4>Struct di dalam struct (komposisi)</h4>
      <pre><code>type Alamat struct {
    Kota, Provinsi string
}
type Orang struct {
    Nama   string
    Alamat Alamat   // struct sebagai field
}</code></pre>
      <ul>
        <li>Field berhuruf awal <b>kapital</b> = bisa diakses dari package lain (public).</li>
        <li>Field awalnya bernilai <b>nol</b> sesuai tipenya bila tidak diisi.</li>
      </ul>
      <div class="callout">Struct adalah fondasi pemodelan data di Go — mewakili "User", "Produk", "Konfigurasi", dsb. Method &amp; interface (kategori berikutnya) dibangun di atasnya.</div>
    `,
  },
  {
    id: "go-pointer",
    cat: "data",
    title: "Pointer",
    minutes: 8,
    summary: "Alamat memori: & dan *, serta kapan memakainya.",
    body: `
      <p><b>Pointer</b> menyimpan <b>alamat</b> sebuah nilai, bukan salinannya. Dua tanda kunci:</p>
      <ul>
        <li><b>&amp;x</b> → mengambil alamat variabel <code>x</code>.</li>
        <li><b>*p</b> → mengambil/mengubah nilai di alamat yang ditunjuk <code>p</code>.</li>
      </ul>
      <pre><code>func main() {
    x := 10
    p := &amp;x          // p menyimpan alamat x
    fmt.Println(*p)   // 10 (nilai di alamat itu)
    *p = 20           // mengubah lewat pointer
    fmt.Println(x)    // 20 (x ikut berubah)
}</code></pre>
      <h4>Kenapa penting? Mengubah nilai di dalam fungsi</h4>
      <p>Go mengoper argumen <b>secara salinan (by value)</b>. Agar fungsi bisa mengubah nilai aslinya, oper <b>pointer</b>-nya.</p>
      <pre><code>func tambahUmur(m *Mahasiswa) {
    m.Umur++    // Go otomatis paham (*m).Umur
}

func main() {
    d := Mahasiswa{Nama: "Dewi", Umur: 20}
    tambahUmur(&amp;d)
    fmt.Println(d.Umur)  // 21
}</code></pre>
      <div class="callout">Go <b>tidak</b> punya aritmatika pointer seperti C, jadi jauh lebih aman. Kabar baik: kamu tak perlu mengelola memori manual — ada <b>garbage collector</b>.</div>
    `,
  },

  // ===================== METHOD & INTERFACE =====================
  {
    id: "go-method",
    cat: "oop",
    title: "Method (Fungsi pada Tipe)",
    minutes: 8,
    summary: "Menempelkan perilaku ke struct dengan receiver.",
    body: `
      <p>Go tidak punya class, tapi kamu bisa menempelkan <b>method</b> ke sebuah tipe. Method adalah fungsi dengan <b>receiver</b> (di dalam kurung sebelum nama).</p>
      <pre><code>type Persegi struct {
    Sisi float64
}

// method dengan receiver value
func (p Persegi) Luas() float64 {
    return p.Sisi * p.Sisi
}

func main() {
    p := Persegi{Sisi: 5}
    fmt.Println(p.Luas())  // 25
}</code></pre>
      <h4>Value receiver vs pointer receiver</h4>
      <p>Jika method perlu <b>mengubah</b> struct-nya, pakai <b>pointer receiver</b> (<code>*Tipe</code>):</p>
      <pre><code>func (p *Persegi) Perbesar(faktor float64) {
    p.Sisi = p.Sisi * faktor   // mengubah aslinya
}

func main() {
    p := Persegi{Sisi: 5}
    p.Perbesar(2)
    fmt.Println(p.Sisi)  // 10
}</code></pre>
      <ul>
        <li><b>Value receiver</b> → method bekerja pada salinan (untuk membaca).</li>
        <li><b>Pointer receiver</b> → method bisa mengubah data asli.</li>
      </ul>
      <div class="callout">Konsistenlah: bila satu method sebuah tipe memakai pointer receiver, umumnya <b>semua</b> method-nya pakai pointer receiver juga.</div>
    `,
  },
  {
    id: "go-interface",
    cat: "oop",
    title: "Interface",
    minutes: 10,
    summary: "Kontrak perilaku — inti fleksibilitas Go.",
    body: `
      <p><b>Interface</b> mendefinisikan <b>sekumpulan method</b> tanpa isi. Tipe apa pun yang punya method-method itu otomatis "memenuhi" interface tersebut — tanpa deklarasi khusus (<i>implicit</i>).</p>
      <pre><code>type Bangun interface {
    Luas() float64
}

type Persegi struct{ Sisi float64 }
func (p Persegi) Luas() float64 { return p.Sisi * p.Sisi }

type Lingkaran struct{ Jari float64 }
func (l Lingkaran) Luas() float64 { return 3.14 * l.Jari * l.Jari }

// fungsi menerima APA PUN yang punya method Luas()
func cetakLuas(b Bangun) {
    fmt.Println("Luas:", b.Luas())
}

func main() {
    cetakLuas(Persegi{Sisi: 4})    // 16
    cetakLuas(Lingkaran{Jari: 3})  // 28.26
}</code></pre>
      <h4>Interface kosong &amp; any</h4>
      <p><code>interface{}</code> (atau alias <code>any</code> sejak Go 1.18) cocok untuk <b>nilai apa pun</b>:</p>
      <pre><code>func cetak(x any) {
    fmt.Println(x)
}</code></pre>
      <h4>Type assertion</h4>
      <pre><code>var x any = "halo"
s, ok := x.(string)   // apakah x sebuah string?
if ok {
    fmt.Println(len(s))
}</code></pre>
      <div class="callout">Interface membuat kode <b>fleksibel &amp; mudah diuji</b>: fungsi bergantung pada "kemampuan" (method), bukan tipe konkret. Contoh nyata: <code>io.Reader</code>, <code>io.Writer</code>, <code>error</code>.</div>
    `,
  },
  {
    id: "go-embed",
    cat: "oop",
    title: "Komposisi & Embedding",
    minutes: 7,
    summary: "Menggunakan kembali perilaku tanpa pewarisan (inheritance).",
    body: `
      <p>Go <b>tidak punya pewarisan</b> seperti Java. Gantinya: <b>komposisi</b> — menyisipkan satu tipe ke dalam tipe lain (<i>embedding</i>).</p>
      <pre><code>type Hewan struct {
    Nama string
}
func (h Hewan) Bernapas() {
    fmt.Println(h.Nama, "bernapas")
}

type Anjing struct {
    Hewan          // embedded (tanpa nama field)
    Ras   string
}

func main() {
    a := Anjing{
        Hewan: Hewan{Nama: "Rex"},
        Ras:   "Husky",
    }
    a.Bernapas()          // otomatis "meminjam" method Hewan
    fmt.Println(a.Nama)   // akses field Hewan langsung
}</code></pre>
      <ul>
        <li>Field/method tipe yang di-embed bisa diakses <b>langsung</b> dari luar.</li>
        <li>Ini disebut <b>komposisi</b>: "Anjing PUNYA Hewan", dan mewarisi perilakunya secara praktis.</li>
      </ul>
      <div class="callout">Prinsip Go: <b>"favor composition over inheritance"</b>. Gabungkan tipe kecil menjadi tipe yang lebih besar, alih-alih membangun hierarki class yang rumit.</div>
    `,
  },
  {
    id: "go-error",
    cat: "oop",
    title: "Penanganan Error",
    minutes: 9,
    summary: "Cara idiomatis Go menangani kegagalan lewat nilai error.",
    body: `
      <p>Berbeda dari banyak bahasa, Go <b>tidak memakai try/catch</b>. Error adalah <b>nilai biasa</b> bertipe <code>error</code> yang dikembalikan fungsi dan diperiksa langsung.</p>
      <pre><code>hasil, err := strconv.Atoi("123")
if err != nil {
    fmt.Println("Gagal:", err)
    return
}
fmt.Println(hasil + 1)  // 124</code></pre>
      <h4>Membuat error sendiri</h4>
      <pre><code>import "errors"

func tarik(saldo, jumlah int) (int, error) {
    if jumlah &gt; saldo {
        return saldo, errors.New("saldo tidak cukup")
    }
    return saldo - jumlah, nil
}

// dengan format:
return 0, fmt.Errorf("nilai %d tidak valid", x)</code></pre>
      <h4>Membungkus &amp; memeriksa error</h4>
      <pre><code>// bungkus dengan %w agar error asli tetap terlacak
return fmt.Errorf("gagal memproses: %w", err)

// periksa jenis error tertentu:
if errors.Is(err, sql.ErrNoRows) { ... }</code></pre>
      <ul>
        <li>Selalu cek <code>if err != nil</code> <b>segera</b> setelah memanggil fungsi.</li>
        <li>Kembalikan <code>nil</code> sebagai error bila sukses.</li>
        <li>Jangan abaikan error dengan <code>_</code> kecuali kamu benar-benar yakin.</li>
      </ul>
      <div class="callout">Filosofi Go: <b>tangani error di tempat ia muncul</b>. Kode jadi eksplisit — kamu selalu tahu apa yang bisa gagal dan bagaimana ditangani.</div>
    `,
  },

  // ===================== KONKURENSI =====================
  {
    id: "go-goroutine",
    cat: "concurrency",
    title: "Goroutine (Menjalankan Banyak Tugas)",
    minutes: 9,
    summary: "Menjalankan fungsi secara bersamaan dengan kata kunci go.",
    body: `
      <p>Ini <b>kekuatan utama</b> Go. Sebuah <b>goroutine</b> adalah fungsi yang berjalan <b>bersamaan</b> dengan yang lain, sangat ringan (bisa ribuan sekaligus). Tinggal tambahkan kata kunci <b>go</b>.</p>
      <pre><code>func sapa(nama string) {
    fmt.Println("Halo,", nama)
}

func main() {
    go sapa("Dewi")   // jalan bersamaan
    go sapa("Andi")
    sapa("Budi")      // ini jalan di goroutine utama

    time.Sleep(time.Second) // beri waktu goroutine selesai
}</code></pre>
      <h4>Kenapa perlu menunggu?</h4>
      <p>Program berakhir saat <code>main</code> selesai — <b>tanpa menunggu</b> goroutine lain. Pada contoh di atas kita pakai <code>time.Sleep</code> sebentar. Cara yang benar untuk menunggu adalah <b>WaitGroup</b> (dibahas di materi <b>sync</b>).</p>
      <ul>
        <li><b>go f()</b> → jalankan f() secara konkuren, tidak menunggu selesai.</li>
        <li>Goroutine sangat murah — lazim membuat ribuan.</li>
        <li>Untuk komunikasi antar-goroutine, pakai <b>channel</b> (materi berikutnya).</li>
      </ul>
      <div class="callout">Motto Go: <b>"Jangan berkomunikasi dengan berbagi memori; berbagilah memori dengan berkomunikasi"</b> — yaitu lewat channel, bukan variabel bersama.</div>
    `,
  },
  {
    id: "go-channel",
    cat: "concurrency",
    title: "Channel (Komunikasi antar Goroutine)",
    minutes: 10,
    summary: "Mengirim & menerima data antar goroutine dengan aman.",
    body: `
      <p><b>Channel</b> adalah "pipa" untuk mengirim data antar-goroutine dengan aman. Tanda panah <code>&lt;-</code> menunjukkan arah data.</p>
      <pre><code>ch := make(chan int)    // channel untuk int

go func() {
    ch &lt;- 42            // KIRIM 42 ke channel
}()

nilai := &lt;-ch           // TERIMA dari channel
fmt.Println(nilai)      // 42</code></pre>
      <p>Operasi channel <b>saling menunggu</b>: penerima menunggu sampai ada data, pengirim menunggu sampai ada yang menerima. Ini menyinkronkan goroutine secara otomatis.</p>
      <h4>Buffered channel</h4>
      <pre><code>ch := make(chan int, 3)  // muat 3 tanpa menunggu penerima
ch &lt;- 1
ch &lt;- 2</code></pre>
      <h4>Menutup channel &amp; range</h4>
      <pre><code>func kirim(ch chan int) {
    for i := 1; i &lt;= 3; i++ {
        ch &lt;- i
    }
    close(ch)   // tandai selesai
}

func main() {
    ch := make(chan int)
    go kirim(ch)
    for v := range ch {   // baca sampai channel ditutup
        fmt.Println(v)    // 1, 2, 3
    }
}</code></pre>
      <div class="callout">Aturan penting: <b>hanya pengirim</b> yang boleh <code>close</code> channel, dan jangan mengirim ke channel yang sudah ditutup (akan panic).</div>
    `,
  },
  {
    id: "go-select",
    cat: "concurrency",
    title: "select (Menunggu Banyak Channel)",
    minutes: 8,
    summary: "Memilih channel mana yang siap, plus timeout.",
    body: `
      <p><b>select</b> mirip <code>switch</code>, tapi untuk channel: ia menunggu sampai <b>salah satu</b> channel siap, lalu menjalankan case-nya.</p>
      <pre><code>select {
case pesan := &lt;-ch1:
    fmt.Println("dari ch1:", pesan)
case pesan := &lt;-ch2:
    fmt.Println("dari ch2:", pesan)
}</code></pre>
      <h4>Timeout — jangan menunggu selamanya</h4>
      <p>Gabungkan dengan <code>time.After</code> untuk membatasi waktu tunggu:</p>
      <pre><code>select {
case hasil := &lt;-ch:
    fmt.Println("selesai:", hasil)
case &lt;-time.After(2 * time.Second):
    fmt.Println("timeout! terlalu lama")
}</code></pre>
      <h4>default — tanpa menunggu</h4>
      <pre><code>select {
case v := &lt;-ch:
    fmt.Println(v)
default:
    fmt.Println("tidak ada data, lanjut saja")
}</code></pre>
      <div class="callout"><code>select</code> adalah alat penting untuk menangani beberapa sumber data konkuren sekaligus dan mencegah program "menggantung" (deadlock) dengan timeout.</div>
    `,
  },
  {
    id: "go-sync",
    cat: "concurrency",
    title: "sync: WaitGroup & Mutex",
    minutes: 9,
    summary: "Menunggu goroutine selesai dan melindungi data bersama.",
    body: `
      <h4>WaitGroup — menunggu semua goroutine selesai</h4>
      <p>Cara benar (tanpa <code>time.Sleep</code>) untuk menunggu goroutine: pakai <b>sync.WaitGroup</b>.</p>
      <pre><code>import "sync"

func main() {
    var wg sync.WaitGroup

    for i := 1; i &lt;= 3; i++ {
        wg.Add(1)              // daftar satu tugas
        go func(n int) {
            defer wg.Done()    // tandai selesai
            fmt.Println("tugas", n)
        }(i)
    }

    wg.Wait()   // blok sampai semua Done
    fmt.Println("semua selesai")
}</code></pre>
      <h4>Mutex — melindungi data dari akses bersamaan</h4>
      <p>Bila banyak goroutine mengubah variabel yang <b>sama</b>, bisa terjadi <b>race condition</b>. <b>sync.Mutex</b> mengunci agar hanya satu goroutine mengakses pada satu waktu.</p>
      <pre><code>var (
    mu     sync.Mutex
    hitung int
)

func naik() {
    mu.Lock()
    hitung++      // aman: hanya satu goroutine di sini
    mu.Unlock()
}</code></pre>
      <ul>
        <li><b>Add(n)</b> sebelum menjalankan goroutine, <b>Done()</b> saat selesai, <b>Wait()</b> untuk menunggu.</li>
        <li>Selalu pasangkan <b>Lock()</b> dengan <b>Unlock()</b> (sering pakai <code>defer mu.Unlock()</code>).</li>
      </ul>
      <div class="callout">Deteksi race condition dengan menjalankan: <code>go run -race main.go</code>. Alat ini sangat membantu menemukan bug konkurensi.</div>
    `,
  },

  // ===================== PUSTAKA STANDAR =====================
  {
    id: "go-strings",
    cat: "stdlib",
    title: "strings & strconv",
    minutes: 8,
    summary: "Mengolah teks dan mengubah teks ↔ angka.",
    body: `
      <h4>Paket strings — mengolah teks</h4>
      <pre><code>import "strings"

s := "Halo Dunia Go"
fmt.Println(strings.ToUpper(s))            // HALO DUNIA GO
fmt.Println(strings.Contains(s, "Dunia"))  // true
fmt.Println(strings.Replace(s, "o", "0", -1)) // Hal0 Dunia G0
fmt.Println(strings.Split(s, " "))         // [Halo Dunia Go]
fmt.Println(strings.HasPrefix(s, "Halo"))  // true
fmt.Println(strings.TrimSpace("  hai  "))  // "hai"</code></pre>
      <h4>strings.Builder — menggabung banyak teks (efisien)</h4>
      <pre><code>var b strings.Builder
for i := 0; i &lt; 3; i++ {
    b.WriteString("x")
}
fmt.Println(b.String())  // xxx</code></pre>
      <h4>Paket strconv — konversi teks & angka</h4>
      <pre><code>import "strconv"

n, err := strconv.Atoi("42")      // string → int
s := strconv.Itoa(42)             // int → string
f, err := strconv.ParseFloat("3.14", 64) // string → float64
b, err := strconv.ParseBool("true")       // string → bool</code></pre>
      <div class="callout">Untuk menggabung angka ke dalam teks tampilan, <code>fmt.Sprintf("Nilai: %d", n)</code> sering lebih praktis daripada <code>strconv</code>.</div>
    `,
  },
  {
    id: "go-time",
    cat: "stdlib",
    title: "time (Tanggal & Waktu)",
    minutes: 7,
    summary: "Waktu sekarang, durasi, jeda, dan memformat tanggal.",
    body: `
      <pre><code>import "time"

sekarang := time.Now()
fmt.Println(sekarang)            // waktu lengkap
fmt.Println(sekarang.Year())     // tahun
fmt.Println(sekarang.Weekday())  // hari</code></pre>
      <h4>Durasi &amp; jeda</h4>
      <pre><code>time.Sleep(2 * time.Second)   // jeda 2 detik

mulai := time.Now()
// ... kerja ...
lama := time.Since(mulai)     // berapa lama berlalu
fmt.Println("Butuh:", lama)</code></pre>
      <h4>Memformat tanggal (layout unik Go)</h4>
      <p>Go memakai <b>tanggal acuan tetap</b>: <code>Mon Jan 2 15:04:05 2006</code> (mudah diingat: 1-2-3-4-5-6). Susun ulang bagian ini sebagai "format".</p>
      <pre><code>t := time.Now()
fmt.Println(t.Format("02-01-2006"))        // 25-07-2026
fmt.Println(t.Format("2006-01-02 15:04"))  // 2026-07-25 13:30</code></pre>
      <div class="callout">Layout waktu Go bukan "dd/mm/yyyy" melainkan angka acuan <b>2006-01-02 15:04:05</b>. Hafalkan urutan 1,2,3,4,5,6 ini.</div>
    `,
  },
  {
    id: "go-json",
    cat: "stdlib",
    title: "encoding/json",
    minutes: 9,
    summary: "Mengubah struct ↔ JSON — inti komunikasi API.",
    body: `
      <p>JSON adalah format pertukaran data paling umum untuk API. Paket <b>encoding/json</b> mengubah struct Go menjadi JSON dan sebaliknya.</p>
      <h4>Struct → JSON (Marshal)</h4>
      <pre><code>import "encoding/json"

type User struct {
    Nama  string \`json:"nama"\`
    Email string \`json:"email"\`
    Umur  int    \`json:"umur"\`
}

func main() {
    u := User{Nama: "Dewi", Email: "dewi@mail.com", Umur: 20}
    data, _ := json.Marshal(u)
    fmt.Println(string(data))
    // {"nama":"Dewi","email":"dewi@mail.com","umur":20}
}</code></pre>
      <p>Bagian <code>\`json:"nama"\`</code> disebut <b>struct tag</b> — menentukan nama field saat menjadi JSON.</p>
      <h4>JSON → struct (Unmarshal)</h4>
      <pre><code>teks := \`{"nama":"Andi","umur":22}\`
var u User
err := json.Unmarshal([]byte(teks), &amp;u)
if err != nil {
    fmt.Println("JSON tidak valid:", err)
}
fmt.Println(u.Nama)  // Andi</code></pre>
      <ul>
        <li>Hanya field berhuruf awal <b>kapital</b> yang bisa di-Marshal (harus diekspor).</li>
        <li>Tambahkan <code>,omitempty</code> pada tag agar field kosong tidak ikut ditulis.</li>
      </ul>
      <div class="callout">Kombinasi <b>struct + json tag</b> ini adalah pondasi membuat REST API di Go (dibahas di kategori Web).</div>
    `,
  },
  {
    id: "go-fileio",
    cat: "stdlib",
    title: "File & I/O (os, bufio)",
    minutes: 8,
    summary: "Membaca & menulis file, dan membaca input pengguna.",
    body: `
      <h4>Menulis file</h4>
      <pre><code>import "os"

data := []byte("Halo dari Go\\n")
err := os.WriteFile("catatan.txt", data, 0644)
if err != nil {
    fmt.Println("gagal menulis:", err)
}</code></pre>
      <h4>Membaca seluruh file</h4>
      <pre><code>isi, err := os.ReadFile("catatan.txt")
if err != nil {
    fmt.Println("gagal membaca:", err)
    return
}
fmt.Println(string(isi))</code></pre>
      <h4>Membaca file baris per baris (bufio)</h4>
      <pre><code>import ("bufio"; "os")

f, _ := os.Open("catatan.txt")
defer f.Close()

scanner := bufio.NewScanner(f)
for scanner.Scan() {
    fmt.Println(scanner.Text())  // satu baris
}</code></pre>
      <h4>Membaca input dari pengguna (terminal)</h4>
      <pre><code>reader := bufio.NewReader(os.Stdin)
fmt.Print("Nama kamu: ")
nama, _ := reader.ReadString('\\n')
fmt.Println("Halo,", strings.TrimSpace(nama))</code></pre>
      <div class="callout">Angka <code>0644</code> adalah izin file (permission) gaya Unix: pemilik boleh baca-tulis, lainnya boleh baca. Ingat selalu <code>defer f.Close()</code> setelah membuka file.</div>
    `,
  },

  // ===================== WEB & MODUL =====================
  {
    id: "go-http",
    cat: "web",
    title: "Server HTTP Sederhana",
    minutes: 9,
    summary: "Membuat web server hanya dengan pustaka standar net/http.",
    body: `
      <p>Salah satu keunggulan Go: membuat web server <b>tanpa framework</b> pun mudah, cukup paket standar <b>net/http</b>.</p>
      <pre><code>package main

import (
    "fmt"
    "net/http"
)

func beranda(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Halo dari server Go!")
}

func main() {
    http.HandleFunc("/", beranda)
    fmt.Println("Server jalan di http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}</code></pre>
      <h4>Penjelasan</h4>
      <ul>
        <li><b>http.HandleFunc(pola, fungsi)</b> → menghubungkan URL ke fungsi penangan (handler).</li>
        <li><b>w http.ResponseWriter</b> → tempat menulis balasan ke browser.</li>
        <li><b>r *http.Request</b> → berisi info permintaan (URL, method, data).</li>
        <li><b>ListenAndServe(":8080", nil)</b> → menjalankan server di port 8080.</li>
      </ul>
      <h4>Membaca query &amp; menulis status</h4>
      <pre><code>func halo(w http.ResponseWriter, r *http.Request) {
    nama := r.URL.Query().Get("nama")  // ?nama=Dewi
    if nama == "" {
        http.Error(w, "nama wajib", http.StatusBadRequest)
        return
    }
    fmt.Fprintf(w, "Halo, %s!", nama)
}</code></pre>
      <div class="callout">Jalankan lalu buka <b>http://localhost:8080</b> di browser. Untuk aplikasi lebih besar, banyak yang memakai router seperti <b>chi</b> atau <b>gin</b>.</div>
    `,
  },
  {
    id: "go-restapi",
    cat: "web",
    title: "Membuat REST API JSON",
    minutes: 10,
    summary: "Gabungan net/http + encoding/json untuk endpoint API.",
    body: `
      <p>Menggabungkan yang sudah dipelajari: server HTTP + JSON = <b>REST API</b>. Ini pola paling umum untuk backend Go.</p>
      <pre><code>package main

import (
    "encoding/json"
    "net/http"
)

type Produk struct {
    ID    int    \`json:"id"\`
    Nama  string \`json:"nama"\`
    Harga int    \`json:"harga"\`
}

var produk = []Produk{
    {ID: 1, Nama: "Kopi", Harga: 15000},
    {ID: 2, Nama: "Teh", Harga: 10000},
}

func daftarProduk(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(produk)
}

func main() {
    http.HandleFunc("/produk", daftarProduk)
    http.ListenAndServe(":8080", nil)
}</code></pre>
      <h4>Menerima data (POST)</h4>
      <pre><code>func tambahProduk(w http.ResponseWriter, r *http.Request) {
    var p Produk
    if err := json.NewDecoder(r.Body).Decode(&amp;p); err != nil {
        http.Error(w, "data tidak valid", http.StatusBadRequest)
        return
    }
    produk = append(produk, p)
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(p)
}</code></pre>
      <ul>
        <li><b>json.NewEncoder(w).Encode(...)</b> → kirim struct sebagai JSON ke klien.</li>
        <li><b>json.NewDecoder(r.Body).Decode(...)</b> → baca JSON dari klien menjadi struct.</li>
        <li>Set header <b>Content-Type: application/json</b> agar klien tahu formatnya.</li>
      </ul>
      <div class="callout">Uji API-mu dengan <code>curl</code> atau Postman: <code>curl localhost:8080/produk</code>. Klik <b>Perdalam dengan AI</b> untuk contoh REST API lengkap dengan routing per-ID.</div>
    `,
  },
  {
    id: "go-package",
    cat: "web",
    title: "Package & Modul (Menata Proyek)",
    minutes: 8,
    summary: "Memecah kode ke banyak file/package dan memakai paket luar.",
    body: `
      <p>Proyek nyata dibagi ke beberapa <b>package</b> agar rapi. Satu folder = satu package.</p>
      <h4>Struktur contoh</h4>
      <pre><code>belajar-go/
  go.mod            (module belajar-go)
  main.go           (package main)
  hitung/
    hitung.go       (package hitung)</code></pre>
      <p><b>hitung/hitung.go</b>:</p>
      <pre><code>package hitung

// huruf awal kapital = diekspor (bisa dipakai package lain)
func Tambah(a, b int) int {
    return a + b
}</code></pre>
      <p><b>main.go</b>:</p>
      <pre><code>package main

import (
    "fmt"
    "belajar-go/hitung"   // module + folder
)

func main() {
    fmt.Println(hitung.Tambah(2, 3)) // 5
}</code></pre>
      <h4>Memakai paket dari internet</h4>
      <pre><code>go get github.com/google/uuid   # unduh paket
# lalu di kode:
import "github.com/google/uuid"
id := uuid.New()</code></pre>
      <ul>
        <li>Nama diawali <b>huruf kapital</b> = publik (bisa diakses package lain).</li>
        <li>Nama diawali <b>huruf kecil</b> = privat (hanya di package itu).</li>
        <li><code>go mod tidy</code> merapikan daftar dependensi otomatis.</li>
      </ul>
      <div class="callout">Aturan visibilitas Go hanya berdasarkan <b>besar/kecil huruf pertama</b> — tidak ada kata kunci <code>public</code>/<code>private</code>.</div>
    `,
  },

  // ===================== PRAKTIK & ALAT =====================
  {
    id: "go-test",
    cat: "praktik",
    title: "Testing (go test)",
    minutes: 8,
    summary: "Menulis unit test bawaan Go — tanpa library tambahan.",
    body: `
      <p>Go punya <b>framework testing bawaan</b>. Letakkan test di file berakhiran <b>_test.go</b> pada package yang sama.</p>
      <p><b>hitung.go</b>:</p>
      <pre><code>package hitung
func Tambah(a, b int) int { return a + b }</code></pre>
      <p><b>hitung_test.go</b>:</p>
      <pre><code>package hitung

import "testing"

func TestTambah(t *testing.T) {
    hasil := Tambah(2, 3)
    if hasil != 5 {
        t.Errorf("Tambah(2,3) = %d; mau 5", hasil)
    }
}</code></pre>
      <h4>Menjalankan test</h4>
      <pre><code>go test ./...          # jalankan semua test
go test -v             # tampilkan detail
go test -cover         # lihat cakupan (coverage)</code></pre>
      <h4>Table-driven test (gaya idiomatis Go)</h4>
      <pre><code>func TestTambahBanyak(t *testing.T) {
    kasus := []struct {
        a, b, mau int
    }{
        {1, 1, 2},
        {2, 3, 5},
        {0, 0, 0},
    }
    for _, k := range kasus {
        if Tambah(k.a, k.b) != k.mau {
            t.Errorf("Tambah(%d,%d) salah", k.a, k.b)
        }
    }
}</code></pre>
      <div class="callout">Nama fungsi test <b>harus</b> diawali <code>Test</code> dan menerima <code>t *testing.T</code>. Testing yang mudah adalah salah satu alasan Go populer di dunia backend.</div>
    `,
  },
  {
    id: "go-errors-common",
    cat: "praktik",
    title: "Error Umum & Cara Debug",
    minutes: 7,
    summary: "Kesalahan yang sering dialami pemula dan cara memperbaikinya.",
    body: `
      <h4>Error yang sering ditemui</h4>
      <table>
        <tr><th>Pesan / gejala</th><th>Penyebab &amp; solusi</th></tr>
        <tr><td>"declared and not used"</td><td>Ada variabel yang dibuat tapi tak dipakai → hapus, atau pakai <code>_</code>.</td></tr>
        <tr><td>"imported and not used"</td><td>Import paket tapi tak dipakai → hapus barisnya.</td></tr>
        <tr><td>"undefined: X"</td><td>Salah tulis nama, atau lupa import package-nya.</td></tr>
        <tr><td>panic: index out of range</td><td>Akses indeks slice di luar <code>len()</code> → cek panjang dulu.</td></tr>
        <tr><td>panic: nil map</td><td>Menulis ke map yang belum di-<code>make</code> → buat dengan <code>make(map[...]...)</code>.</td></tr>
        <tr><td>"all goroutines are asleep - deadlock"</td><td>Semua goroutine saling menunggu channel → pastikan ada pengirim/penerima &amp; <code>close</code>.</td></tr>
      </table>
      <h4>Cara debug</h4>
      <ul>
        <li>Baca pesan error — Go biasanya menyebut <b>file &amp; nomor baris</b>.</li>
        <li><code>fmt.Printf("%+v\\n", x)</code> untuk melihat isi struct lengkap.</li>
        <li><code>go vet ./...</code> menemukan kesalahan umum sebelum dijalankan.</li>
        <li><code>go run -race</code> untuk bug konkurensi.</li>
      </ul>
      <div class="callout">Tempel pesan error ke <b>Tutor AI</b> atau <b>Latihan Koding</b> — AI bisa menjelaskan penyebab &amp; memberi perbaikannya.</div>
    `,
  },
  {
    id: "go-tooling",
    cat: "praktik",
    title: "Tooling & Gaya Kode Idiomatis",
    minutes: 7,
    summary: "gofmt, go vet, konvensi penamaan, dan struktur proyek.",
    body: `
      <p>Komunitas Go sangat menekankan <b>konsistensi</b>. Untungnya, alat bawaan menegakkan ini otomatis.</p>
      <h4>Alat wajib</h4>
      <table>
        <tr><th>Perintah</th><th>Fungsi</th></tr>
        <tr><td><code>go fmt ./...</code></td><td>Merapikan format (indentasi, spasi) — satu gaya untuk semua.</td></tr>
        <tr><td><code>go vet ./...</code></td><td>Mendeteksi kode mencurigakan/bug potensial.</td></tr>
        <tr><td><code>go mod tidy</code></td><td>Merapikan dependensi di go.mod.</td></tr>
        <tr><td><code>go build ./...</code></td><td>Memastikan semua package bisa dikompilasi.</td></tr>
      </table>
      <h4>Konvensi penamaan idiomatis</h4>
      <ul>
        <li>Gunakan <b>camelCase</b> (bukan snake_case). Huruf awal kapital = publik.</li>
        <li>Nama pendek untuk lingkup pendek: <code>i</code>, <code>r</code>, <code>err</code>, <code>ctx</code>.</li>
        <li>Interface satu method sering berakhiran <code>-er</code>: <code>Reader</code>, <code>Writer</code>.</li>
        <li>Kembalikan error, jangan panic untuk kesalahan biasa.</li>
      </ul>
      <h4>Struktur proyek umum</h4>
      <pre><code>myapp/
  cmd/         (entry point / main)
  internal/    (kode privat aplikasi)
  pkg/         (kode yang bisa dipakai ulang)
  go.mod</code></pre>
      <div class="callout">Baca <b>"Effective Go"</b> dan <b>"Go Code Review Comments"</b> di go.dev untuk memahami gaya idiomatis. Menulis kode "seperti orang Go" membuatnya mudah dibaca siapa pun.</div>
    `,
  },
];

export const GO_QUIZZES: Record<string, Question[]> = {
  "go-intro": [
    { q: "Go adalah bahasa buatan:", options: ["Apple", "Google", "Microsoft", "Meta"], answer: 1, explain: "Go dibuat di Google." },
    { q: "Go paling banyak dipakai untuk:", options: ["Desain grafis", "Backend/server & cloud", "Mengedit video", "Spreadsheet"], answer: 1, explain: "Backend, tools, dan cloud (Docker, Kubernetes)." },
  ],
  "go-hello": [
    { q: "Fungsi yang menjadi titik masuk program Go adalah:", options: ["start()", "run()", "main()", "init()"], answer: 2, explain: "func main() dijalankan pertama." },
    { q: "Paket untuk mencetak ke layar adalah:", options: ["print", "fmt", "io", "os"], answer: 1, explain: "fmt.Println / fmt.Printf." },
    { q: "Import yang tidak dipakai di Go akan:", options: ["diabaikan", "membuat warning", "membuat gagal kompilasi", "dihapus otomatis"], answer: 2, explain: "Go menolak kompilasi bila ada import/variabel tak terpakai." },
  ],
  "go-tools": [
    { q: "Perintah membuat modul baru adalah:", options: ["go new", "go mod init", "go create", "go start"], answer: 1, explain: "go mod init nama-modul." },
    { q: "Membuat file biner executable memakai:", options: ["go run", "go build", "go get", "go fmt"], answer: 1, explain: "go build menghasilkan binary." },
  ],
  "go-var": [
    { q: "Operator := hanya boleh dipakai:", options: ["di level package", "di dalam fungsi", "di dalam import", "di komentar"], answer: 1, explain: "Deklarasi singkat := hanya di dalam fungsi." },
    { q: "Nilai nol (zero value) untuk sebuah string adalah:", options: ["\"nil\"", "0", "string kosong \"\"", "spasi"], answer: 2, explain: "String kosong \"\"." },
    { q: "Tipe untuk bilangan desimal adalah:", options: ["int", "float64", "string", "bool"], answer: 1, explain: "float64 untuk desimal." },
  ],
  "go-const": [
    { q: "Nilai iota pada baris pertama sebuah blok const adalah:", options: ["1", "0", "-1", "acak"], answer: 1, explain: "iota mulai dari 0." },
    { q: "Konstanta di Go harus bisa dihitung saat:", options: ["runtime", "kompilasi", "input pengguna", "koneksi internet"], answer: 1, explain: "Nilai const ditentukan saat kompilasi." },
  ],
  "go-operator": [
    { q: "Hasil dari 10 / 3 (keduanya int) adalah:", options: ["3.33", "3", "4", "error"], answer: 1, explain: "Pembagian int menghasilkan int (dibulatkan ke bawah)." },
    { q: "Mengubah int ke float64 di Go:", options: ["otomatis", "harus eksplisit float64(x)", "pakai as float", "tidak bisa"], answer: 1, explain: "Konversi tipe di Go wajib eksplisit." },
    { q: "Operator % menghasilkan:", options: ["hasil bagi", "sisa bagi", "pangkat", "persen"], answer: 1, explain: "% adalah modulo (sisa bagi)." },
  ],
  "go-if": [
    { q: "Kondisi if di Go ditulis:", options: ["dengan tanda kurung wajib", "tanpa tanda kurung", "pakai titik dua", "pakai then"], answer: 1, explain: "if kondisi { } — tanpa kurung, kurawal wajib." },
    { q: "Pada switch Go, tiap case:", options: ["butuh break", "otomatis berhenti", "jatuh ke bawah", "harus return"], answer: 1, explain: "Tidak perlu break; case otomatis berhenti." },
  ],
  "go-for": [
    { q: "Perulangan di Go menggunakan kata kunci:", options: ["while", "loop", "for", "repeat"], answer: 2, explain: "Go hanya punya for." },
    { q: "Menelusuri slice/map memakai:", options: ["for ... range", "foreach", "iterate", "each"], answer: 0, explain: "for i, v := range koleksi." },
    { q: "Untuk lompat ke iterasi berikutnya memakai:", options: ["break", "continue", "skip", "next"], answer: 1, explain: "continue melanjutkan iterasi berikutnya." },
  ],
  "go-func": [
    { q: "Ciri khas Go: sebuah fungsi bisa mengembalikan:", options: ["hanya 1 nilai", "banyak nilai sekaligus", "tidak boleh return", "hanya string"], answer: 1, explain: "Multiple return, mis. (hasil, error)." },
    { q: "Pola umum menangani kegagalan di Go adalah mengembalikan:", options: ["(nilai, error)", "null", "boolean saja", "exception"], answer: 0, explain: "(nilai, error), lalu cek if err != nil." },
  ],
  "go-variadic": [
    { q: "Fungsi yang menerima jumlah argumen bebas ditandai dengan:", options: ["*", "...", "&", "[]"], answer: 1, explain: "func f(x ...int) — variadic." },
    { q: "Fungsi yang 'mengingat' variabel di sekitarnya disebut:", options: ["method", "closure", "pointer", "goroutine"], answer: 1, explain: "Closure." },
  ],
  "go-defer": [
    { q: "defer menjalankan pemanggilan saat:", options: ["segera", "fungsi di sekitarnya selesai", "program dimulai", "ada error"], answer: 1, explain: "defer ditunda sampai fungsi selesai." },
    { q: "Bila ada beberapa defer, urutan jalannya:", options: ["sama seperti ditulis", "terbalik (LIFO)", "acak", "paralel"], answer: 1, explain: "Terbalik, seperti tumpukan." },
    { q: "Menangkap panic dilakukan dengan:", options: ["catch", "recover (di dalam defer)", "try", "handle"], answer: 1, explain: "recover() dipanggil di dalam defer." },
  ],
  "go-array-slice": [
    { q: "Struktur data berukuran DINAMIS di Go adalah:", options: ["array", "slice", "tuple", "const"], answer: 1, explain: "Slice bisa tumbuh; array tetap." },
    { q: "Menambah elemen ke slice memakai:", options: ["add()", "push()", "append()", "insert()"], answer: 2, explain: "s = append(s, x)." },
    { q: "angka[1:3] menghasilkan elemen indeks:", options: ["1 dan 2", "1,2,3", "2 dan 3", "hanya 3"], answer: 0, explain: "Dari 1 sampai SEBELUM 3 → indeks 1 dan 2." },
  ],
  "go-map": [
    { q: "Map menyimpan data dalam bentuk:", options: ["berurutan", "pasangan kunci–nilai", "tumpukan", "antrian"], answer: 1, explain: "key → value." },
    { q: "Pola 'comma ok' (val, ada := m[k]) dipakai untuk:", options: ["menghapus", "cek keberadaan kunci", "mengurutkan", "menyalin"], answer: 1, explain: "ada bernilai true bila kunci ada." },
    { q: "Urutan iterasi map di Go:", options: ["selalu terurut", "acak/tidak dijamin", "sesuai waktu dibuat", "terbalik"], answer: 1, explain: "Urutan map acak." },
  ],
  "go-struct": [
    { q: "Struct dipakai untuk:", options: ["mengulang kode", "menggabungkan field terkait jadi satu tipe", "menangani error", "membuat channel"], answer: 1, explain: "Struct mengelompokkan data." },
    { q: "Field struct agar bisa diakses package lain harus:", options: ["diawali huruf kecil", "diawali huruf kapital", "diberi public", "diberi export"], answer: 1, explain: "Huruf awal kapital = diekspor." },
  ],
  "go-pointer": [
    { q: "Tanda & pada &x berarti:", options: ["nilai x", "alamat x", "salinan x", "tipe x"], answer: 1, explain: "& mengambil alamat." },
    { q: "Tanda * pada *p berarti:", options: ["alamat p", "nilai di alamat yang ditunjuk p", "salinan p", "tipe p"], answer: 1, explain: "* mengambil nilai yang ditunjuk (dereference)." },
    { q: "Agar fungsi bisa mengubah nilai aslinya, oper:", options: ["salinannya", "pointer-nya", "string", "nilai nol"], answer: 1, explain: "Go by value; oper pointer untuk mengubah asli." },
  ],
  "go-method": [
    { q: "Bagian dalam kurung sebelum nama method disebut:", options: ["parameter", "receiver", "return", "interface"], answer: 1, explain: "func (p Persegi) Luas() — p adalah receiver." },
    { q: "Agar method bisa mengubah struct-nya, receiver harus berupa:", options: ["value", "pointer (*Tipe)", "interface", "map"], answer: 1, explain: "Pointer receiver dapat mengubah data asli." },
  ],
  "go-interface": [
    { q: "Sebuah tipe memenuhi interface di Go secara:", options: ["eksplisit (implements)", "otomatis/implicit bila punya method-nya", "lewat import", "lewat anotasi"], answer: 1, explain: "Cukup punya semua method — implicit." },
    { q: "interface{} atau 'any' cocok untuk:", options: ["hanya string", "nilai apa pun", "hanya angka", "hanya struct"], answer: 1, explain: "any menampung tipe apa pun." },
  ],
  "go-embed": [
    { q: "Go menggunakan kembali perilaku lewat:", options: ["inheritance (pewarisan)", "komposisi/embedding", "macro", "template"], answer: 1, explain: "Go tidak punya inheritance; pakai komposisi." },
    { q: "Tipe yang di-embed (tanpa nama field) membuat method-nya:", options: ["tersembunyi", "bisa diakses langsung dari luar", "hilang", "jadi privat"], answer: 1, explain: "Field/method embedded diakses langsung." },
  ],
  "go-error": [
    { q: "Go menangani kegagalan dengan:", options: ["try/catch", "nilai error yang dikembalikan", "exception", "panic selalu"], answer: 1, explain: "Error adalah nilai; cek if err != nil." },
    { q: "Membuat error sederhana memakai:", options: ["errors.New / fmt.Errorf", "throw", "raise", "new Error"], answer: 0, explain: "errors.New(\"...\") atau fmt.Errorf(...)." },
    { q: "Fungsi yang sukses biasanya mengembalikan error bernilai:", options: ["0", "\"\"", "nil", "false"], answer: 2, explain: "nil menandakan tidak ada error." },
  ],
  "go-goroutine": [
    { q: "Menjalankan fungsi secara konkuren memakai kata kunci:", options: ["async", "go", "thread", "run"], answer: 1, explain: "go f() menjalankan f sebagai goroutine." },
    { q: "Goroutine di Go bersifat:", options: ["berat seperti thread OS", "ringan (bisa ribuan)", "hanya satu per program", "sinkron"], answer: 1, explain: "Sangat ringan." },
  ],
  "go-channel": [
    { q: "Channel dipakai untuk:", options: ["menyimpan file", "komunikasi antar-goroutine", "membuat struct", "format tanggal"], answer: 1, explain: "Mengirim/menerima data antar goroutine." },
    { q: "Menerima nilai dari channel ch ditulis:", options: ["ch.get()", "<-ch", "ch->", "receive(ch)"], answer: 1, explain: "v := <-ch." },
    { q: "Yang boleh menutup (close) channel adalah:", options: ["penerima", "pengirim", "keduanya", "siapa saja kapan saja"], answer: 1, explain: "Umumnya hanya pengirim yang close." },
  ],
  "go-select": [
    { q: "select dipakai untuk:", options: ["memilih tipe", "menunggu beberapa channel sekaligus", "query database", "menyaring slice"], answer: 1, explain: "Menunggu channel mana yang siap." },
    { q: "Membatasi waktu tunggu di select memakai:", options: ["time.After", "time.Sleep", "wait()", "timeout()"], answer: 0, explain: "case <-time.After(d) untuk timeout." },
  ],
  "go-sync": [
    { q: "Menunggu semua goroutine selesai (cara benar) memakai:", options: ["time.Sleep", "sync.WaitGroup", "channel saja", "for loop"], answer: 1, explain: "Add/Done/Wait pada WaitGroup." },
    { q: "Melindungi variabel bersama dari akses bersamaan memakai:", options: ["sync.Mutex", "defer", "map", "slice"], answer: 0, explain: "Mutex Lock/Unlock." },
    { q: "Mendeteksi race condition saat menjalankan program:", options: ["go run -race", "go vet", "go fmt", "go test"], answer: 0, explain: "Flag -race." },
  ],
  "go-strings": [
    { q: "Mengubah string \"42\" menjadi int memakai:", options: ["strconv.Atoi", "int(\"42\")", "parse()", "toInt()"], answer: 0, explain: "strconv.Atoi." },
    { q: "Mengecek apakah string mengandung substring:", options: ["strings.Has", "strings.Contains", "strings.Find", "strings.In"], answer: 1, explain: "strings.Contains(s, sub)." },
  ],
  "go-time": [
    { q: "Waktu sekarang diperoleh dengan:", options: ["time.Today()", "time.Now()", "time.Get()", "time.Current()"], answer: 1, explain: "time.Now()." },
    { q: "Tanggal acuan untuk format waktu di Go adalah:", options: ["01/01/2000", "2006-01-02 15:04:05", "dd-mm-yyyy", "1970-01-01"], answer: 1, explain: "Acuan 1,2,3,4,5,6 → 2006-01-02 15:04:05." },
  ],
  "go-json": [
    { q: "Mengubah struct menjadi JSON memakai:", options: ["json.Marshal", "json.Print", "json.Encode2", "json.ToText"], answer: 0, explain: "json.Marshal (struct → JSON)." },
    { q: "Field agar bisa di-Marshal ke JSON harus:", options: ["huruf kecil", "diawali huruf kapital (diekspor)", "bertipe string", "punya tag saja"], answer: 1, explain: "Hanya field diekspor (kapital) yang diproses." },
    { q: "Bagian `json:\"nama\"` pada field disebut:", options: ["komentar", "struct tag", "anotasi", "label"], answer: 1, explain: "Struct tag mengatur nama JSON." },
  ],
  "go-fileio": [
    { q: "Menulis seluruh isi ke file memakai:", options: ["os.WriteFile", "file.Save", "io.Put", "write()"], answer: 0, explain: "os.WriteFile(nama, data, perm)." },
    { q: "Membaca file baris per baris memakai:", options: ["fmt.Scan", "bufio.Scanner", "os.ReadLine", "strings.Split"], answer: 1, explain: "bufio.NewScanner + Scan()." },
  ],
  "go-http": [
    { q: "Membuat web server sederhana memakai paket:", options: ["net/http", "web/server", "http/gin", "os/net"], answer: 0, explain: "net/http adalah pustaka standar." },
    { q: "Menghubungkan URL ke fungsi penangan memakai:", options: ["http.Route", "http.HandleFunc", "http.Map", "http.On"], answer: 1, explain: "http.HandleFunc(pola, handler)." },
  ],
  "go-restapi": [
    { q: "Mengirim struct sebagai JSON ke klien memakai:", options: ["json.NewEncoder(w).Encode", "fmt.Println", "w.WriteJSON", "json.Print"], answer: 0, explain: "Encoder menulis JSON ke ResponseWriter." },
    { q: "Membaca body JSON dari permintaan memakai:", options: ["json.NewDecoder(r.Body).Decode", "r.ReadJSON", "json.Parse", "r.Body.JSON()"], answer: 0, explain: "Decoder membaca JSON dari r.Body." },
  ],
  "go-package": [
    { q: "Visibilitas (publik/privat) di Go ditentukan oleh:", options: ["kata kunci public/private", "besar/kecil huruf pertama nama", "letak file", "urutan deklarasi"], answer: 1, explain: "Huruf awal kapital = publik." },
    { q: "Merapikan daftar dependensi otomatis memakai:", options: ["go clean", "go mod tidy", "go fix", "go update"], answer: 1, explain: "go mod tidy." },
  ],
  "go-test": [
    { q: "File test di Go harus berakhiran:", options: [".spec.go", "_test.go", ".test", "-test.go"], answer: 1, explain: "nama_test.go." },
    { q: "Nama fungsi test harus diawali:", options: ["Check", "Test", "Verify", "Assert"], answer: 1, explain: "func TestXxx(t *testing.T)." },
    { q: "Menjalankan seluruh test memakai:", options: ["go run test", "go test ./...", "go check", "go verify"], answer: 1, explain: "go test ./..." },
  ],
  "go-errors-common": [
    { q: "\"declared and not used\" muncul karena:", options: ["variabel dibuat tapi tak dipakai", "salah import", "channel penuh", "file tidak ada"], answer: 0, explain: "Go menolak variabel yang tak terpakai." },
    { q: "Menulis ke map tanpa make() akan:", options: ["berhasil", "panic (nil map)", "membuat map otomatis", "warning saja"], answer: 1, explain: "Map harus dibuat dengan make dulu." },
  ],
  "go-tooling": [
    { q: "Merapikan format kode secara otomatis memakai:", options: ["go fmt", "go style", "go clean", "go pretty"], answer: 0, explain: "go fmt ./... (gofmt)." },
    { q: "Konvensi penamaan di Go adalah:", options: ["snake_case", "camelCase", "kebab-case", "SCREAMING_CASE"], answer: 1, explain: "camelCase; kapital di awal = publik." },
  ],
};
