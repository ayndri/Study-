// Konten jalur belajar "Mobile dengan Flutter".
// Struktur mengikuti tipe Lesson/Question agar bisa dipakai komponen Materi & Quiz.
import type { Lesson } from "@/lib/materi";
import type { Question } from "@/lib/content";

export const FLUTTER_CATS: { key: string; label: string; ic: string }[] = [
  { key: "mulai", label: "Mulai dari Nol", ic: "◔" },
  { key: "dart", label: "Bahasa Dart", ic: "◆" },
  { key: "widget", label: "Widget & UI", ic: "▦" },
  { key: "layout", label: "Layout", ic: "▤" },
  { key: "state", label: "State & Interaksi", ic: "⚡" },
  { key: "data", label: "Navigasi & Data", ic: "☍" },
  { key: "praktik", label: "Praktik & Alat", ic: "◎" },
];

export const FLUTTER_LESSONS: Lesson[] = [
  {
    id: "fl-intro",
    cat: "mulai",
    title: "Apa itu Flutter & Menyiapkan Alat",
    minutes: 7,
    summary: "Kenalan dengan Flutter/Dart dan cara menjalankan proyek pertama.",
    body: `
      <p><b>Flutter</b> adalah framework buatan Google untuk membuat aplikasi <b>mobile (Android &amp; iOS), web, dan desktop</b> dari <b>satu basis kode</b>. Bahasanya adalah <b>Dart</b>.</p>
      <h4>Kenapa Flutter?</h4>
      <ul>
        <li><b>Satu kode, banyak platform</b> — hemat waktu.</li>
        <li><b>Hot reload</b> — perubahan langsung terlihat dalam hitungan detik.</li>
        <li>Banyak <b>widget siap pakai</b> yang cantik.</li>
      </ul>
      <h4>Menyiapkan alat</h4>
      <ol>
        <li>Pasang <b>Flutter SDK</b> dari flutter.dev, lalu <b>Android Studio</b> (untuk emulator) atau VS Code.</li>
        <li>Cek instalasi: <pre><code>flutter doctor</code></pre></li>
        <li>Buat proyek baru &amp; jalankan:
          <pre><code>flutter create halo_app
cd halo_app
flutter run</code></pre>
        </li>
      </ol>
      <h4>Struktur file penting</h4>
      <ul>
        <li><b>lib/main.dart</b> — titik masuk aplikasi (kode utamamu).</li>
        <li><b>pubspec.yaml</b> — daftar dependensi &amp; aset.</li>
      </ul>
      <div class="callout">Belum bisa instal? Gunakan <b>DartPad</b> (dartpad.dev) di browser untuk mencoba kode Dart tanpa instalasi. Klik <b>Perdalam dengan AI</b> untuk panduan langkah demi langkah.</div>
    `,
  },
  {
    id: "fl-hello",
    cat: "mulai",
    title: "Program Flutter Pertama",
    minutes: 6,
    summary: "Membedah struktur main.dart dan menampilkan teks di layar.",
    body: `
      <p>Berikut program Flutter minimal yang menampilkan tulisan di tengah layar:</p>
      <pre><code>import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Halo Flutter')),
        body: const Center(
          child: Text('Selamat datang!'),
        ),
      ),
    );
  }
}</code></pre>
      <h4>Penjelasan</h4>
      <ul>
        <li><b>main()</b> → fungsi pertama yang dijalankan; <b>runApp()</b> menampilkan widget.</li>
        <li><b>MaterialApp</b> → kerangka aplikasi bergaya Material Design.</li>
        <li><b>Scaffold</b> → kerangka halaman (punya appBar, body, dll.).</li>
        <li><b>Center &amp; Text</b> → menaruh teks di tengah.</li>
      </ul>
      <div class="callout">Ubah tulisan di <code>Text('...')</code> lalu simpan — dengan <b>hot reload</b> perubahan langsung muncul.</div>
    `,
  },
  {
    id: "fl-var",
    cat: "dart",
    title: "Dart: Variabel & Tipe Data",
    minutes: 7,
    summary: "int, double, String, bool, var, final, const.",
    body: `
      <p>Dart adalah bahasa <b>bertipe</b>. Variabel menyimpan data dengan tipe tertentu.</p>
      <pre><code>int umur = 20;            // bilangan bulat
double tinggi = 1.68;     // bilangan desimal
String nama = 'Dewi';     // teks
bool lulus = true;        // benar/salah

var kota = 'Surabaya';    // tipe otomatis (String)
final tahun = 2026;       // tidak bisa diubah
const pi = 3.14;          // konstanta saat kompilasi</code></pre>
      <h4>var vs final vs const</h4>
      <ul>
        <li><b>var</b> — tipe ditebak otomatis, nilai boleh berubah.</li>
        <li><b>final</b> — nilai diisi sekali, tak bisa diubah.</li>
        <li><b>const</b> — konstanta yang sudah pasti sejak kompilasi.</li>
      </ul>
      <h4>String interpolation</h4>
      <pre><code>String pesan = 'Halo, nama saya $nama dan umur $umur';
String luas = 'Hasil: \${tinggi * 2}';</code></pre>
      <div class="callout">Pakai <b>$</b> untuk menyisipkan variabel ke dalam teks, dan <b>\${...}</b> untuk ekspresi.</div>
    `,
  },
  {
    id: "fl-flow",
    cat: "dart",
    title: "Dart: Kondisi, Perulangan & Fungsi",
    minutes: 8,
    summary: "if/else, for/while, dan cara membuat fungsi.",
    body: `
      <h4>Percabangan</h4>
      <pre><code>int nilai = 80;
if (nilai >= 75) {
  print('Lulus');
} else {
  print('Belum lulus');
}</code></pre>
      <h4>Perulangan</h4>
      <pre><code>for (int i = 1; i <= 3; i++) {
  print('Ke-$i');
}

var buah = ['apel', 'mangga'];
for (var b in buah) {
  print(b);
}</code></pre>
      <h4>Fungsi</h4>
      <pre><code>int tambah(int a, int b) {
  return a + b;
}

// Panah untuk fungsi satu baris
int kali(int a, int b) => a * b;

void main() {
  print(tambah(2, 3)); // 5
  print(kali(4, 5));   // 20
}</code></pre>
      <div class="callout">Fungsi yang tidak mengembalikan nilai bertipe <b>void</b>.</div>
    `,
  },
  {
    id: "fl-class",
    cat: "dart",
    title: "Dart: Class, Objek & Null Safety",
    minutes: 8,
    summary: "Membuat class, konstruktor, dan memahami tanda ? dan !.",
    body: `
      <h4>Class &amp; objek</h4>
      <pre><code>class Mahasiswa {
  String nama;
  int umur;

  Mahasiswa(this.nama, this.umur);

  void perkenalan() {
    print('Saya $nama, umur $umur');
  }
}

void main() {
  var m = Mahasiswa('Dewi', 20);
  m.perkenalan();
}</code></pre>
      <h4>Null safety</h4>
      <p>Secara default variabel <b>tidak boleh null</b>. Tambahkan <b>?</b> jika boleh null.</p>
      <pre><code>String nama = 'Dewi';   // tidak boleh null
String? julukan;         // boleh null (awalnya null)

int panjang = julukan?.length ?? 0; // aman: 0 jika null</code></pre>
      <ul>
        <li><b>?</b> — tipe boleh null.</li>
        <li><b>?.</b> — akses aman (tidak error bila null).</li>
        <li><b>??</b> — nilai cadangan bila null.</li>
      </ul>
      <div class="callout">Null safety mencegah error "Null" yang paling sering bikin aplikasi crash.</div>
    `,
  },
  {
    id: "fl-widget",
    cat: "widget",
    title: "Konsep Widget: Semuanya Widget",
    minutes: 6,
    summary: "Memahami pohon widget, StatelessWidget, dan build().",
    body: `
      <p>Di Flutter, <b>hampir semua adalah widget</b> — teks, tombol, gambar, bahkan tata letak. Widget disusun seperti <b>pohon</b> (widget di dalam widget).</p>
      <pre><code>class Salam extends StatelessWidget {
  const Salam({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Halo!');
  }
}</code></pre>
      <ul>
        <li><b>StatelessWidget</b> — tampilan yang <b>tidak berubah</b>.</li>
        <li><b>build()</b> — mengembalikan tampilan widget.</li>
        <li>Widget disusun berlapis: <code>Scaffold → Center → Column → Text</code>.</li>
      </ul>
      <div class="callout">Jika tampilan perlu <b>berubah</b> (mis. saat tombol ditekan), pakai <b>StatefulWidget</b> — dibahas di kategori State.</div>
    `,
  },
  {
    id: "fl-basic-widgets",
    cat: "widget",
    title: "Widget Dasar: Text, Image, Icon, Button",
    minutes: 7,
    summary: "Widget yang paling sering dipakai untuk membangun UI.",
    body: `
      <h4>Text</h4>
      <pre><code>Text(
  'Judul',
  style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
)</code></pre>
      <h4>Icon &amp; Image</h4>
      <pre><code>Icon(Icons.favorite, color: Colors.red)
Image.network('https://contoh.com/gambar.png')</code></pre>
      <h4>Tombol</h4>
      <pre><code>ElevatedButton(
  onPressed: () {
    print('Tombol ditekan');
  },
  child: const Text('Klik saya'),
)</code></pre>
      <ul>
        <li><b>onPressed</b> berisi fungsi yang jalan saat tombol ditekan.</li>
        <li>Jika <code>onPressed: null</code>, tombol menjadi non-aktif.</li>
      </ul>
      <div class="callout">Widget punya banyak <b>properti</b> (style, color, padding). Ketik lalu titik (.) di editor untuk melihat pilihannya.</div>
    `,
  },
  {
    id: "fl-layout",
    cat: "layout",
    title: "Layout: Column, Row, Container, Padding",
    minutes: 8,
    summary: "Menyusun widget secara vertikal, horizontal, dan memberi jarak.",
    body: `
      <h4>Column (vertikal) &amp; Row (horizontal)</h4>
      <pre><code>Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: const [
    Text('Baris 1'),
    Text('Baris 2'),
    Text('Baris 3'),
  ],
)</code></pre>
      <h4>Container &amp; Padding</h4>
      <pre><code>Container(
  padding: const EdgeInsets.all(16),
  margin: const EdgeInsets.all(8),
  color: Colors.amber,
  child: const Text('Di dalam kotak'),
)</code></pre>
      <ul>
        <li><b>Column</b> menata anak ke bawah, <b>Row</b> ke samping.</li>
        <li><b>mainAxisAlignment</b> / <b>crossAxisAlignment</b> mengatur perataan.</li>
        <li><b>Padding</b> = jarak dalam; <b>margin</b> = jarak luar.</li>
        <li><b>Expanded</b> membuat anak mengisi ruang sisa.</li>
      </ul>
      <div class="callout">Error "overflow" (garis kuning-hitam) biasanya karena isi lebih besar dari layar — bungkus dengan <code>SingleChildScrollView</code> atau pakai <code>Expanded</code>.</div>
    `,
  },
  {
    id: "fl-state",
    cat: "state",
    title: "StatefulWidget & setState",
    minutes: 9,
    summary: "Membuat tampilan yang berubah — contoh tombol penghitung.",
    body: `
      <p>Ketika tampilan harus <b>berubah</b> saat aplikasi berjalan (mis. angka bertambah), gunakan <b>StatefulWidget</b> dan panggil <b>setState()</b>.</p>
      <pre><code>class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State&lt;Counter&gt; createState() => _CounterState();
}

class _CounterState extends State&lt;Counter&gt; {
  int angka = 0;

  void tambah() {
    setState(() {
      angka++;   // ubah data
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Angka: $angka'),
        ElevatedButton(onPressed: tambah, child: const Text('+1')),
      ],
    );
  }
}</code></pre>
      <h4>Inti pemahaman</h4>
      <ul>
        <li><b>State</b> = data yang bisa berubah.</li>
        <li><b>setState()</b> memberi tahu Flutter untuk <b>menggambar ulang</b> tampilan.</li>
        <li>Mengubah variabel tanpa setState <b>tidak</b> memperbarui layar.</li>
      </ul>
      <div class="callout">Aturan emas: setiap kali data yang memengaruhi tampilan berubah, bungkus perubahannya dalam <code>setState()</code>.</div>
    `,
  },
  {
    id: "fl-input",
    cat: "state",
    title: "Menangani Input Pengguna",
    minutes: 7,
    summary: "TextField + controller untuk membaca ketikan pengguna.",
    body: `
      <pre><code>class FormNama extends StatefulWidget {
  const FormNama({super.key});
  @override
  State&lt;FormNama&gt; createState() => _FormNamaState();
}

class _FormNamaState extends State&lt;FormNama&gt; {
  final controller = TextEditingController();
  String sapaan = '';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: controller,
          decoration: const InputDecoration(labelText: 'Nama'),
        ),
        ElevatedButton(
          onPressed: () {
            setState(() {
              sapaan = 'Halo, \${controller.text}!';
            });
          },
          child: const Text('Sapa'),
        ),
        Text(sapaan),
      ],
    );
  }
}</code></pre>
      <ul>
        <li><b>TextEditingController</b> membaca isi TextField lewat <code>controller.text</code>.</li>
        <li>Gunakan <b>setState</b> agar hasil tampil di layar.</li>
      </ul>
      <div class="callout">Jangan lupa panggil <code>controller.dispose()</code> di method <code>dispose()</code> untuk mencegah kebocoran memori.</div>
    `,
  },
  {
    id: "fl-nav",
    cat: "data",
    title: "Navigasi Antar Halaman",
    minutes: 7,
    summary: "Berpindah halaman dengan Navigator push & pop.",
    body: `
      <p>Aplikasi biasanya punya banyak layar. Flutter menumpuk halaman seperti <b>tumpukan kartu</b> (stack).</p>
      <pre><code>// Pindah ke halaman baru
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const HalamanKedua()),
);

// Kembali ke halaman sebelumnya
Navigator.pop(context);</code></pre>
      <h4>Mengirim data ke halaman lain</h4>
      <pre><code>MaterialPageRoute(
  builder: (context) => DetailPage(nama: 'Dewi'),
)</code></pre>
      <ul>
        <li><b>push</b> = buka halaman baru di atas.</li>
        <li><b>pop</b> = tutup halaman saat ini, kembali ke bawahnya.</li>
        <li>Kirim data lewat parameter konstruktor halaman tujuan.</li>
      </ul>
      <div class="callout">Untuk aplikasi besar, pelajari <b>named routes</b> atau paket <b>go_router</b> agar navigasi lebih rapi.</div>
    `,
  },
  {
    id: "fl-http",
    cat: "data",
    title: "Mengambil Data dari Internet (async & JSON)",
    minutes: 9,
    summary: "async/await, paket http, dan menampilkan data dengan FutureBuilder.",
    body: `
      <p>Aplikasi nyata sering mengambil data dari <b>API</b>. Prosesnya <b>asynchronous</b> (butuh waktu), jadi memakai <b>async/await</b>.</p>
      <h4>1. Tambah paket http</h4>
      <pre><code>flutter pub add http</code></pre>
      <h4>2. Ambil data</h4>
      <pre><code>import 'dart:convert';
import 'package:http/http.dart' as http;

Future&lt;String&gt; ambilJudul() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/todos/1');
  final res = await http.get(url);
  final data = jsonDecode(res.body);
  return data['title'];
}</code></pre>
      <h4>3. Tampilkan dengan FutureBuilder</h4>
      <pre><code>FutureBuilder&lt;String&gt;(
  future: ambilJudul(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const CircularProgressIndicator();
    }
    if (snapshot.hasError) return const Text('Gagal memuat');
    return Text(snapshot.data ?? '');
  },
)</code></pre>
      <ul>
        <li><b>async/await</b> menunggu proses selesai tanpa membekukan aplikasi.</li>
        <li><b>jsonDecode</b> mengubah teks JSON menjadi Map/List Dart.</li>
        <li><b>FutureBuilder</b> otomatis menampilkan loading → data → error.</li>
      </ul>
      <div class="callout">Ini konsep paling penting untuk aplikasi nyata. Lanjut ke materi <b>"Menampilkan Daftar dari API"</b> di kategori Navigasi &amp; Data.</div>
    `,
  },

  // ===================== TAMBAHAN LEBIH DALAM =====================
  {
    id: "fl-collections",
    cat: "dart",
    title: "Dart: Koleksi Data (List, Map, Set)",
    minutes: 8,
    summary: "Menyimpan banyak data sekaligus + operasi map/where yang sering dipakai.",
    body: `
      <p>Aplikasi nyata jarang menyimpan satu data saja. Dart punya tiga wadah utama: <b>List</b> (berurutan), <b>Map</b> (pasangan kunci–nilai), dan <b>Set</b> (unik).</p>
      <h4>List — daftar berurutan</h4>
      <pre><code>List&lt;String&gt; buah = ['apel', 'mangga', 'jeruk'];
buah.add('pisang');       // tambah
print(buah[0]);           // apel (indeks mulai 0)
print(buah.length);       // 4
buah.remove('apel');</code></pre>
      <h4>Map — kunci &amp; nilai</h4>
      <pre><code>Map&lt;String, int&gt; nilai = {'Dewi': 90, 'Andi': 85};
print(nilai['Dewi']);     // 90
nilai['Budi'] = 78;       // tambah pasangan baru</code></pre>
      <h4>Set — kumpulan unik</h4>
      <pre><code>Set&lt;int&gt; unik = {1, 2, 2, 3};  // hasil: {1, 2, 3}</code></pre>
      <h4>Operasi penting: map &amp; where</h4>
      <pre><code>var angka = [1, 2, 3, 4];
var genap = angka.where((n) =&gt; n % 2 == 0).toList(); // [2, 4]
var kali2 = angka.map((n) =&gt; n * 2).toList();        // [2, 4, 6, 8]</code></pre>
      <div class="callout"><b>map</b> mengubah tiap elemen, <b>where</b> menyaring. Keduanya sangat sering dipakai untuk mengolah data dari API sebelum ditampilkan.</div>
    `,
  },
  {
    id: "fl-listview",
    cat: "widget",
    title: "Menampilkan Daftar dengan ListView",
    minutes: 8,
    summary: "ListView statis vs ListView.builder untuk data dinamis yang panjang.",
    body: `
      <p>Untuk menampilkan banyak item yang bisa di-scroll, gunakan <b>ListView</b>.</p>
      <h4>ListView statis (item sedikit &amp; tetap)</h4>
      <pre><code>ListView(
  children: const [
    ListTile(title: Text('Item 1')),
    ListTile(title: Text('Item 2')),
  ],
)</code></pre>
      <h4>ListView.builder (data dinamis / panjang)</h4>
      <pre><code>final data = ['Dewi', 'Andi', 'Budi'];

ListView.builder(
  itemCount: data.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: const Icon(Icons.person),
      title: Text(data[index]),
    );
  },
)</code></pre>
      <ul>
        <li><b>itemCount</b> = jumlah item.</li>
        <li><b>itemBuilder</b> dipanggil untuk tiap indeks — hanya yang terlihat yang dibangun, jadi efisien.</li>
        <li><b>ListTile</b> = baris siap pakai (judul, ikon, subtitle).</li>
      </ul>
      <div class="callout">Gunakan <b>.builder</b> untuk daftar panjang/dari API agar hemat memori. Untuk grid, ada <b>GridView.builder</b>.</div>
    `,
  },
  {
    id: "fl-theming",
    cat: "layout",
    title: "Styling & Tema Aplikasi",
    minutes: 7,
    summary: "ThemeData, warna, teks, dan konsistensi tampilan.",
    body: `
      <p>Daripada mengatur warna satu per satu, tetapkan <b>tema</b> di level aplikasi agar konsisten.</p>
      <pre><code>MaterialApp(
  theme: ThemeData(
    colorSchemeSeed: Colors.indigo,  // warna utama
    useMaterial3: true,
  ),
  home: const BerandaPage(),
)</code></pre>
      <h4>Styling teks &amp; jarak</h4>
      <pre><code>Text(
  'Judul',
  style: TextStyle(
    fontSize: 22,
    fontWeight: FontWeight.bold,
    color: Colors.indigo,
  ),
)</code></pre>
      <h4>Warna &amp; jarak umum</h4>
      <ul>
        <li><b>Colors.red</b>, <b>Colors.indigo.shade200</b>, atau <b>Color(0xFF3366FF)</b> (hex).</li>
        <li><b>EdgeInsets.all(16)</b>, <b>EdgeInsets.symmetric(horizontal: 12)</b>.</li>
        <li>Ambil warna tema: <b>Theme.of(context).colorScheme.primary</b>.</li>
      </ul>
      <div class="callout">Konsistensi = tampilan profesional. Atur tema sekali, pakai <code>Theme.of(context)</code> di mana-mana.</div>
    `,
  },
  {
    id: "fl-lifecycle",
    cat: "state",
    title: "Siklus Hidup Widget: initState & dispose",
    minutes: 7,
    summary: "Kapan kode dijalankan sekali, dan cara membersihkan sumber daya.",
    body: `
      <p>Method <b>build()</b> bisa dipanggil <b>berkali-kali</b> (setiap ada perubahan). Karena itu, kode yang hanya boleh jalan <b>sekali</b> (mis. mengambil data awal, memulai timer) ditaruh di <b>initState()</b>.</p>
      <pre><code>class Layar extends StatefulWidget {
  const Layar({super.key});
  @override
  State&lt;Layar&gt; createState() =&gt; _LayarState();
}

class _LayarState extends State&lt;Layar&gt; {
  final controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    // dijalankan SEKALI saat widget pertama dibuat
    // contoh: ambilDataAwal();
  }

  @override
  void dispose() {
    controller.dispose(); // bersihkan agar tidak bocor memori
    super.dispose();
  }

  @override
  Widget build(BuildContext context) =&gt; const SizedBox();
}</code></pre>
      <ul>
        <li><b>initState()</b> → sekali di awal (jangan panggil setState di sini).</li>
        <li><b>build()</b> → tiap kali perlu menggambar ulang.</li>
        <li><b>dispose()</b> → saat widget dibuang; tutup controller, timer, stream.</li>
      </ul>
      <div class="callout">Lupa <code>dispose()</code> pada controller/timer adalah penyebab umum <b>kebocoran memori</b> &amp; error "setState after dispose".</div>
    `,
  },
  {
    id: "fl-lifting",
    cat: "state",
    title: "Berbagi State: Lifting State Up & Provider",
    minutes: 9,
    summary: "Cara beberapa widget berbagi data yang sama.",
    body: `
      <p>Bila dua widget perlu <b>data yang sama</b>, taruh state-nya di <b>widget induk bersama</b> lalu turunkan ke anak — ini disebut <b>lifting state up</b>.</p>
      <pre><code>class Induk extends StatefulWidget {
  const Induk({super.key});
  @override
  State&lt;Induk&gt; createState() =&gt; _IndukState();
}

class _IndukState extends State&lt;Induk&gt; {
  int hitung = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Total: \$hitung'),
        Anak(onTambah: () =&gt; setState(() =&gt; hitung++)),
      ],
    );
  }
}

class Anak extends StatelessWidget {
  final VoidCallback onTambah;
  const Anak({super.key, required this.onTambah});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(onPressed: onTambah, child: const Text('+1'));
  }
}</code></pre>
      <p>Data (<code>hitung</code>) di induk; anak menerima <b>callback</b> untuk mengubahnya.</p>
      <h4>Untuk aplikasi besar: Provider</h4>
      <p>Bila state dipakai banyak layar, mengoper lewat konstruktor jadi ribet. Paket <b>provider</b> memudahkan:</p>
      <pre><code>flutter pub add provider

class Penghitung extends ChangeNotifier {
  int nilai = 0;
  void tambah() {
    nilai++;
    notifyListeners(); // beri tahu widget yang mendengarkan
  }
}</code></pre>
      <div class="callout">Mulai dari <b>setState</b> &amp; lifting state up. Pelajari <b>Provider</b> saat aplikasimu mulai besar. Klik <b>Perdalam dengan AI</b> untuk contoh Provider lengkap.</div>
    `,
  },
  {
    id: "fl-list-api",
    cat: "data",
    title: "Menampilkan Daftar dari API",
    minutes: 10,
    summary: "Gabungan http + model class + FutureBuilder + ListView.builder.",
    body: `
      <p>Ini pola paling nyata: ambil <b>daftar</b> data dari API, ubah jadi objek, lalu tampilkan sebagai list.</p>
      <h4>1. Buat model &amp; parser</h4>
      <pre><code>class Post {
  final int id;
  final String title;
  Post(this.id, this.title);

  factory Post.fromJson(Map&lt;String, dynamic&gt; j) =&gt;
      Post(j['id'], j['title']);
}</code></pre>
      <h4>2. Ambil &amp; ubah data</h4>
      <pre><code>Future&lt;List&lt;Post&gt;&gt; ambilPost() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/posts');
  final res = await http.get(url);
  final List data = jsonDecode(res.body);
  return data.map((j) =&gt; Post.fromJson(j)).toList();
}</code></pre>
      <h4>3. Tampilkan</h4>
      <pre><code>FutureBuilder&lt;List&lt;Post&gt;&gt;(
  future: ambilPost(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }
    if (snapshot.hasError) return const Text('Gagal memuat');
    final posts = snapshot.data!;
    return ListView.builder(
      itemCount: posts.length,
      itemBuilder: (context, i) =&gt; ListTile(title: Text(posts[i].title)),
    );
  },
)</code></pre>
      <div class="callout">Pola <b>model + fromJson + FutureBuilder + ListView.builder</b> ini dipakai di hampir semua aplikasi yang menampilkan data online.</div>
    `,
  },
  {
    id: "fl-prefs",
    cat: "data",
    title: "Menyimpan Data Lokal (shared_preferences)",
    minutes: 7,
    summary: "Menyimpan data sederhana agar tetap ada setelah aplikasi ditutup.",
    body: `
      <p>Data di variabel akan hilang saat aplikasi ditutup. Untuk menyimpan data sederhana (nama, preferensi, skor), pakai paket <b>shared_preferences</b>.</p>
      <h4>1. Tambah paket</h4>
      <pre><code>flutter pub add shared_preferences</code></pre>
      <h4>2. Simpan &amp; baca</h4>
      <pre><code>import 'package:shared_preferences/shared_preferences.dart';

Future&lt;void&gt; simpanNama(String nama) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('nama', nama);
}

Future&lt;String&gt; bacaNama() async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getString('nama') ?? 'Tamu'; // default bila kosong
}</code></pre>
      <ul>
        <li>Mendukung: <b>setString, setInt, setBool, setDouble</b>, dan list string.</li>
        <li>Semua operasinya <b>async</b> (pakai await).</li>
        <li>Cocok untuk data kecil, <b>bukan</b> untuk data besar (pakai database seperti sqflite/Hive).</li>
      </ul>
      <div class="callout">Contoh nyata: menyimpan progres belajar atau tema pilihan pengguna agar tetap ada saat aplikasi dibuka lagi.</div>
    `,
  },
  {
    id: "fl-errors",
    cat: "praktik",
    title: "Error Umum & Cara Debug",
    minutes: 7,
    summary: "Mengenali error yang sering muncul dan cara menemukannya.",
    body: `
      <h4>Error yang sering ditemui pemula</h4>
      <table>
        <tr><th>Gejala</th><th>Penyebab umum</th></tr>
        <tr><td>Layar merah "RenderFlex overflowed"</td><td>Isi lebih besar dari layar → bungkus <code>SingleChildScrollView</code> atau pakai <code>Expanded</code>.</td></tr>
        <tr><td>"Null check operator used on a null value"</td><td>Memakai <code>!</code> pada nilai null → cek dulu / beri nilai default.</td></tr>
        <tr><td>"setState() called after dispose()"</td><td>Memanggil setState setelah widget dibuang → batalkan timer/stream di <code>dispose()</code>.</td></tr>
        <tr><td>Data API tidak muncul</td><td>Lupa <code>await</code>, atau tidak pakai <code>FutureBuilder</code>.</td></tr>
      </table>
      <h4>Cara debug</h4>
      <ul>
        <li><b>Baca pesan error</b> baris pertama — biasanya sudah menunjuk masalahnya.</li>
        <li><b>print() / debugPrint()</b> untuk mengecek nilai variabel.</li>
        <li><b>Flutter DevTools</b> untuk inspeksi widget &amp; performa.</li>
        <li><b>Hot reload</b> untuk perubahan UI; <b>Hot restart</b> bila mengubah state/initState.</li>
      </ul>
      <div class="callout">Tempel pesan error ke <b>Tutor AI</b> atau <b>Latihan Koding</b> — AI bisa membantu menjelaskan &amp; memperbaikinya.</div>
    `,
  },
  {
    id: "fl-packages",
    cat: "praktik",
    title: "Menggunakan Paket dari pub.dev",
    minutes: 6,
    summary: "Menambah fitur cepat dengan paket buatan komunitas.",
    body: `
      <p><b>pub.dev</b> adalah gudang paket (library) Flutter/Dart. Alih-alih menulis semua dari nol, kamu bisa memakai paket siap pakai.</p>
      <h4>Menambah paket</h4>
      <pre><code>flutter pub add http</code></pre>
      <p>Perintah itu menambahkan baris di <b>pubspec.yaml</b>:</p>
      <pre><code>dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0</code></pre>
      <p>Lalu ambil paketnya &amp; impor di kodemu:</p>
      <pre><code>flutter pub get</code></pre>
      <pre><code>import 'package:http/http.dart' as http;</code></pre>
      <h4>Paket populer untuk pemula</h4>
      <ul>
        <li><b>http</b> — memanggil API.</li>
        <li><b>provider</b> — mengelola state.</li>
        <li><b>shared_preferences</b> — simpan data lokal.</li>
        <li><b>google_fonts</b> — font cantik.</li>
        <li><b>intl</b> — format tanggal &amp; angka.</li>
      </ul>
      <div class="callout">Cek jumlah "likes", "pub points", dan tanggal update di pub.dev untuk menilai kualitas sebuah paket.</div>
    `,
  },

  // ===================== MATERI MENENGAH (LANJUTAN) =====================
  {
    id: "fl-forms",
    cat: "state",
    title: "Form & Validasi Input (TextFormField)",
    minutes: 9,
    summary: "Membuat form yang rapi dengan Form, TextFormField, dan validasi masukan.",
    body: `
      <p>Untuk masukan yang butuh <b>validasi</b> (mis. email tidak boleh kosong), gunakan gabungan <b>Form</b> + <b>TextFormField</b> + <b>GlobalKey&lt;FormState&gt;</b>. Ini lebih rapi daripada mengecek satu per satu secara manual.</p>
      <h4>1. Kerangka form dengan kunci</h4>
      <pre><code>class FormLogin extends StatefulWidget {
  const FormLogin({super.key});
  @override
  State&lt;FormLogin&gt; createState() =&gt; _FormLoginState();
}

class _FormLoginState extends State&lt;FormLogin&gt; {
  final _formKey = GlobalKey&lt;FormState&gt;();
  final _emailC = TextEditingController();

  @override
  void dispose() {
    _emailC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _emailC,
            decoration: const InputDecoration(labelText: 'Email'),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Email wajib diisi';
              }
              if (!value.contains('@')) {
                return 'Format email tidak valid';
              }
              return null; // null = valid
            },
          ),
          ElevatedButton(
            onPressed: _kirim,
            child: const Text('Masuk'),
          ),
        ],
      ),
    );
  }
}</code></pre>
      <h4>2. Menjalankan validasi saat tombol ditekan</h4>
      <pre><code>void _kirim() {
  if (_formKey.currentState!.validate()) {
    // semua validator mengembalikan null =&gt; data valid
    final email = _emailC.text;
    debugPrint('Login sebagai: \${email}');
  }
}</code></pre>
      <ul>
        <li><b>validator</b> mengembalikan <b>String pesan error</b> bila salah, atau <b>null</b> bila valid.</li>
        <li><b>_formKey.currentState!.validate()</b> menjalankan semua validator sekaligus.</li>
        <li>Gunakan <b>TextFormField</b> (bukan TextField biasa) agar bisa memakai validator di dalam Form.</li>
      </ul>
      <div class="callout">Ingin menyimpan nilai otomatis? Tambahkan <code>onSaved</code> pada tiap field lalu panggil <code>_formKey.currentState!.save()</code> setelah validasi berhasil.</div>
    `,
  },
  {
    id: "fl-gridview",
    cat: "widget",
    title: "Menampilkan Grid dengan GridView",
    minutes: 8,
    summary: "Menyusun item dalam kotak-kotak (grid) memakai GridView.builder.",
    body: `
      <p>Bila daftar lebih cocok ditampilkan sebagai <b>kotak-kotak</b> (galeri foto, katalog produk), gunakan <b>GridView</b> alih-alih ListView.</p>
      <h4>GridView.count — jumlah kolom tetap</h4>
      <pre><code>GridView.count(
  crossAxisCount: 2,       // 2 kolom
  mainAxisSpacing: 8,      // jarak antar baris
  crossAxisSpacing: 8,     // jarak antar kolom
  children: const [
    Card(child: Center(child: Text('A'))),
    Card(child: Center(child: Text('B'))),
    Card(child: Center(child: Text('C'))),
  ],
)</code></pre>
      <h4>GridView.builder — untuk data dinamis</h4>
      <pre><code>final produk = ['Baju', 'Celana', 'Topi', 'Sepatu'];

GridView.builder(
  itemCount: produk.length,
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    childAspectRatio: 3 / 2,  // lebar : tinggi tiap sel
  ),
  itemBuilder: (context, index) {
    return Card(
      child: Center(child: Text(produk[index])),
    );
  },
)</code></pre>
      <ul>
        <li><b>crossAxisCount</b> = jumlah kolom.</li>
        <li><b>childAspectRatio</b> mengatur bentuk sel (rasio lebar : tinggi).</li>
        <li>Sama seperti ListView, pakai <b>.builder</b> untuk data panjang agar efisien.</li>
      </ul>
      <div class="callout">Untuk jumlah kolom yang menyesuaikan lebar layar, pakai <code>SliverGridDelegateWithMaxCrossAxisExtent</code> dengan <code>maxCrossAxisExtent</code>.</div>
    `,
  },
  {
    id: "fl-animation",
    cat: "widget",
    title: "Animasi Dasar (Implicit Animation)",
    minutes: 8,
    summary: "Membuat animasi halus tanpa ribet memakai widget AnimatedContainer & AnimatedOpacity.",
    body: `
      <p>Flutter menyediakan <b>implicit animation</b> — widget yang <b>otomatis menganimasikan</b> perubahan nilainya. Kamu cukup mengubah nilai di dalam setState, sisanya diurus Flutter.</p>
      <h4>AnimatedContainer</h4>
      <pre><code>class KotakAnimasi extends StatefulWidget {
  const KotakAnimasi({super.key});
  @override
  State&lt;KotakAnimasi&gt; createState() =&gt; _KotakAnimasiState();
}

class _KotakAnimasiState extends State&lt;KotakAnimasi&gt; {
  bool besar = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () =&gt; setState(() =&gt; besar = !besar),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeInOut,
        width: besar ? 200 : 100,
        height: besar ? 200 : 100,
        color: besar ? Colors.indigo : Colors.amber,
      ),
    );
  }
}</code></pre>
      <p>Saat kotak ditekan, ukuran dan warnanya <b>berubah mulus</b> selama 400 milidetik — tanpa menulis kode animasi manual.</p>
      <h4>AnimatedOpacity — memudarkan tampilan</h4>
      <pre><code>AnimatedOpacity(
  opacity: terlihat ? 1.0 : 0.0,   // 1 = jelas, 0 = transparan
  duration: const Duration(milliseconds: 300),
  child: const Text('Halo, aku memudar!'),
)</code></pre>
      <ul>
        <li><b>duration</b> = lama animasi.</li>
        <li><b>curve</b> = pola gerak (mis. <code>Curves.easeInOut</code>).</li>
        <li>Cukup ubah nilai lewat <b>setState</b>; Flutter menganimasikan transisinya.</li>
      </ul>
      <div class="callout">Untuk animasi lebih kompleks (dikontrol manual), pelajari <b>AnimationController</b> + <b>AnimatedBuilder</b>. Tapi untuk kebanyakan kebutuhan, implicit animation sudah cukup.</div>
    `,
  },
  {
    id: "fl-images",
    cat: "layout",
    title: "Gambar & Aset Lokal (pubspec assets)",
    minutes: 7,
    summary: "Menambahkan gambar dari file lokal dan mendaftarkannya di pubspec.yaml.",
    body: `
      <p>Selain <code>Image.network</code>, kamu bisa menampilkan gambar yang <b>disimpan di dalam aplikasi</b> (aset lokal) memakai <code>Image.asset</code>. Aset harus didaftarkan dulu di <b>pubspec.yaml</b>.</p>
      <h4>1. Simpan file &amp; daftarkan di pubspec.yaml</h4>
      <p>Buat folder <b>assets/images/</b> lalu taruh gambarnya. Kemudian daftarkan (perhatikan indentasi 2 spasi, sangat penting di YAML):</p>
      <pre><code>flutter:
  assets:
    - assets/images/logo.png
    - assets/images/    # atau daftarkan seluruh folder</code></pre>
      <h4>2. Tampilkan dengan Image.asset</h4>
      <pre><code>Image.asset(
  'assets/images/logo.png',
  width: 120,
  height: 120,
  fit: BoxFit.cover,   // cara gambar mengisi ruang
)</code></pre>
      <h4>3. Gambar jaringan dengan penanganan loading</h4>
      <pre><code>Image.network(
  'https://contoh.com/foto.jpg',
  loadingBuilder: (context, child, progress) {
    if (progress == null) return child;   // selesai memuat
    return const Center(child: CircularProgressIndicator());
  },
  errorBuilder: (context, error, stack) =&gt;
      const Icon(Icons.broken_image),
)</code></pre>
      <ul>
        <li><b>fit</b>: <code>BoxFit.cover</code> (penuh, mungkin terpotong), <code>BoxFit.contain</code> (utuh, mungkin ada ruang kosong).</li>
        <li>Setelah mengubah pubspec.yaml, jalankan <b>flutter pub get</b> dan <b>hot restart</b>.</li>
        <li>Aset yang salah indentasi/tidak terdaftar akan memunculkan error "Unable to load asset".</li>
      </ul>
      <div class="callout">Untuk ikon aplikasi &amp; splash screen, ada paket khusus seperti <b>flutter_launcher_icons</b> — lebih mudah daripada mengatur manual.</div>
    `,
  },
  {
    id: "fl-responsive",
    cat: "layout",
    title: "Tampilan Responsif (MediaQuery & LayoutBuilder)",
    minutes: 9,
    summary: "Membuat UI menyesuaikan ukuran layar ponsel, tablet, dan web.",
    body: `
      <p>Layar HP kecil dan tablet/web besar. Agar tampilan tetap enak dilihat di semua ukuran, kita buat <b>responsif</b> memakai <b>MediaQuery</b> dan <b>LayoutBuilder</b>.</p>
      <h4>MediaQuery — mengetahui ukuran layar</h4>
      <pre><code>Widget build(BuildContext context) {
  final lebar = MediaQuery.of(context).size.width;

  return Text(
    lebar &gt; 600 ? 'Mode Tablet' : 'Mode Ponsel',
  );
}</code></pre>
      <h4>LayoutBuilder — menyesuaikan ruang yang tersedia</h4>
      <p><b>LayoutBuilder</b> memberi tahu ukuran ruang tempat widget berada, jadi kita bisa mengganti tata letak:</p>
      <pre><code>LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth &gt; 600) {
      // layar lebar: dua kolom bersebelahan
      return Row(
        children: const [
          Expanded(child: Menu()),
          Expanded(child: Konten()),
        ],
      );
    }
    // layar sempit: tumpuk ke bawah
    return Column(
      children: const [Menu(), Konten()],
    );
  },
)</code></pre>
      <ul>
        <li><b>MediaQuery</b> = ukuran seluruh layar (dan info seperti orientasi, padding aman).</li>
        <li><b>LayoutBuilder</b> = ukuran ruang lokal tempat widget dipasang.</li>
        <li>Ambang <b>600</b> px sering dipakai sebagai batas ponsel vs tablet.</li>
      </ul>
      <div class="callout">Bungkus konten utama dengan <b>SafeArea</b> agar tidak tertutup notch/kamera atau bilah status di ponsel modern.</div>
    `,
  },
  {
    id: "fl-dialog",
    cat: "widget",
    title: "Dialog, SnackBar & BottomSheet",
    minutes: 8,
    summary: "Menampilkan pesan, konfirmasi, dan menu sementara ke pengguna.",
    body: `
      <p>Aplikasi sering perlu memberi <b>umpan balik</b>: pemberitahuan singkat, konfirmasi, atau panel pilihan. Flutter menyediakan tiga cara umum.</p>
      <h4>SnackBar — pesan singkat di bawah layar</h4>
      <pre><code>ScaffoldMessenger.of(context).showSnackBar(
  const SnackBar(content: Text('Data tersimpan!')),
);</code></pre>
      <h4>AlertDialog — konfirmasi</h4>
      <pre><code>showDialog(
  context: context,
  builder: (context) =&gt; AlertDialog(
    title: const Text('Hapus data?'),
    content: const Text('Tindakan ini tidak bisa dibatalkan.'),
    actions: [
      TextButton(
        onPressed: () =&gt; Navigator.pop(context, false),
        child: const Text('Batal'),
      ),
      TextButton(
        onPressed: () =&gt; Navigator.pop(context, true),
        child: const Text('Hapus'),
      ),
    ],
  ),
);</code></pre>
      <p>Karena <code>showDialog</code> mengembalikan Future, kita bisa menunggu hasil pilihan:</p>
      <pre><code>final setuju = await showDialog&lt;bool&gt;(/* ... */);
if (setuju == true) {
  // lakukan penghapusan
}</code></pre>
      <h4>BottomSheet — panel dari bawah</h4>
      <pre><code>showModalBottomSheet(
  context: context,
  builder: (context) =&gt; const Padding(
    padding: EdgeInsets.all(16),
    child: Text('Pilih opsi di sini'),
  ),
);</code></pre>
      <ul>
        <li><b>SnackBar</b> lewat <code>ScaffoldMessenger</code>, bukan langsung Scaffold.</li>
        <li><b>Navigator.pop(context, nilai)</b> menutup dialog sekaligus mengembalikan nilai.</li>
        <li>Ketiganya butuh <b>BuildContext</b> yang berada di bawah MaterialApp.</li>
      </ul>
      <div class="callout">Gunakan <b>SnackBar</b> untuk info ringan, <b>AlertDialog</b> untuk keputusan penting, dan <b>BottomSheet</b> untuk daftar aksi/pilihan.</div>
    `,
  },
  {
    id: "fl-gorouter",
    cat: "data",
    title: "Navigasi Rapi dengan Named Routes / go_router",
    minutes: 9,
    summary: "Menata rute aplikasi secara terpusat agar mudah dikelola saat aplikasi membesar.",
    body: `
      <p>Untuk aplikasi kecil, <code>Navigator.push</code> sudah cukup. Tapi saat halaman makin banyak, mengelola navigasi terpusat lebih rapi. Ada dua cara: <b>named routes</b> bawaan dan paket <b>go_router</b>.</p>
      <h4>Cara 1: Named routes (bawaan)</h4>
      <pre><code>MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) =&gt; const BerandaPage(),
    '/detail': (context) =&gt; const DetailPage(),
    '/profil': (context) =&gt; const ProfilPage(),
  },
)</code></pre>
      <p>Berpindah cukup dengan menyebut nama rute:</p>
      <pre><code>Navigator.pushNamed(context, '/detail');</code></pre>
      <h4>Cara 2: go_router (disarankan untuk aplikasi besar/web)</h4>
      <pre><code>flutter pub add go_router</code></pre>
      <pre><code>final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) =&gt; const BerandaPage(),
    ),
    GoRoute(
      path: '/produk/:id',   // parameter di URL
      builder: (context, state) {
        final id = state.pathParameters['id'];
        return ProdukPage(id: id!);
      },
    ),
  ],
);

MaterialApp.router(routerConfig: router);</code></pre>
      <p>Berpindah halaman:</p>
      <pre><code>context.go('/produk/42');   // menuju produk dengan id 42</code></pre>
      <ul>
        <li><b>Named routes</b> = tanpa paket tambahan, cocok aplikasi sedang.</li>
        <li><b>go_router</b> = mendukung <b>parameter URL</b>, deep link, dan navigasi web yang rapi.</li>
        <li><code>:id</code> pada path adalah parameter yang dibaca lewat <code>state.pathParameters</code>.</li>
      </ul>
      <div class="callout">Kalau aplikasimu menargetkan <b>web</b> atau butuh <b>deep link</b> (buka halaman tertentu dari luar), go_router jauh lebih nyaman daripada Navigator manual.</div>
    `,
  },
  {
    id: "fl-riverpod",
    cat: "state",
    title: "Manajemen State dengan Riverpod (Pengantar)",
    minutes: 10,
    summary: "Mengenal Riverpod sebagai cara modern berbagi state tanpa lifting manual.",
    body: `
      <p>Saat state dipakai di banyak layar, mengoper lewat konstruktor jadi merepotkan. <b>Riverpod</b> adalah pustaka manajemen state populer yang membuat data bisa diakses dari mana saja dengan aman dan teruji.</p>
      <h4>1. Pasang &amp; bungkus aplikasi</h4>
      <pre><code>flutter pub add flutter_riverpod</code></pre>
      <pre><code>void main() {
  runApp(
    const ProviderScope(   // wajib: membungkus seluruh aplikasi
      child: MyApp(),
    ),
  );
}</code></pre>
      <h4>2. Membuat provider sederhana</h4>
      <pre><code>// nilai yang bisa dibaca banyak widget
final salamProvider = Provider&lt;String&gt;((ref) =&gt; 'Halo dari Riverpod');</code></pre>
      <h4>3. Provider yang bisa berubah (Notifier)</h4>
      <pre><code>class Penghitung extends Notifier&lt;int&gt; {
  @override
  int build() =&gt; 0;          // nilai awal

  void tambah() =&gt; state++;   // ubah state, UI ikut diperbarui
}

final penghitungProvider =
    NotifierProvider&lt;Penghitung, int&gt;(Penghitung.new);</code></pre>
      <h4>4. Membaca di UI dengan ConsumerWidget</h4>
      <pre><code>class LayarHitung extends ConsumerWidget {
  const LayarHitung({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final angka = ref.watch(penghitungProvider);   // dengarkan perubahan

    return Column(
      children: [
        Text('Angka: \${angka}'),
        ElevatedButton(
          onPressed: () =&gt; ref.read(penghitungProvider.notifier).tambah(),
          child: const Text('+1'),
        ),
      ],
    );
  }
}</code></pre>
      <ul>
        <li><b>ref.watch</b> = mendengarkan nilai; widget dibangun ulang saat nilai berubah.</li>
        <li><b>ref.read(...notifier)</b> = memanggil aksi (mengubah state) tanpa mendengarkan.</li>
        <li><b>ProviderScope</b> wajib membungkus aplikasi di <code>main()</code>.</li>
      </ul>
      <div class="callout">Riverpod vs Provider: keduanya baik. Riverpod lebih modern, tidak bergantung pada BuildContext, dan lebih mudah diuji. Mulailah dari <b>setState</b>, naik ke <b>Provider/Riverpod</b> saat aplikasi membesar.</div>
    `,
  },
];

export const FLUTTER_QUIZZES: Record<string, Question[]> = {
  "fl-intro": [
    { q: "Bahasa pemrograman yang dipakai Flutter adalah:", options: ["Java", "Kotlin", "Dart", "Swift"], answer: 2, explain: "Flutter memakai bahasa Dart." },
    { q: "Fitur yang membuat perubahan kode langsung terlihat cepat disebut:", options: ["Hot reload", "Cold start", "Debug", "Compile"], answer: 0, explain: "Hot reload." },
  ],
  "fl-hello": [
    { q: "Fungsi yang pertama dijalankan pada aplikasi Flutter adalah:", options: ["build()", "runApp()", "main()", "setState()"], answer: 2, explain: "main() adalah titik masuk." },
    { q: "Widget kerangka halaman (punya appBar & body) adalah:", options: ["Container", "Scaffold", "Center", "Column"], answer: 1, explain: "Scaffold." },
  ],
  "fl-var": [
    { q: "Kata kunci untuk nilai yang TIDAK bisa diubah adalah:", options: ["var", "final", "dynamic", "int"], answer: 1, explain: "final (atau const)." },
    { q: "Cara menyisipkan variabel ke dalam String adalah:", options: ["#nama", "$nama", "@nama", "&nama"], answer: 1, explain: "String interpolation pakai $." },
  ],
  "fl-flow": [
    { q: "Fungsi yang tidak mengembalikan nilai bertipe:", options: ["int", "void", "String", "null"], answer: 1, explain: "void." },
    { q: "Sintaks '=>' pada fungsi Dart dipakai untuk:", options: ["perulangan", "fungsi satu baris", "komentar", "impor"], answer: 1, explain: "Arrow function (satu ekspresi)." },
  ],
  "fl-class": [
    { q: "Tanda '?' setelah tipe (mis. String?) berarti:", options: ["wajib diisi", "boleh null", "konstanta", "list"], answer: 1, explain: "Nullable." },
    { q: "Operator '??' berfungsi untuk:", options: ["memberi nilai cadangan bila null", "membandingkan", "menjumlah", "mengulang"], answer: 0, explain: "Null-coalescing." },
  ],
  "fl-widget": [
    { q: "Widget yang tampilannya tidak berubah adalah:", options: ["StatefulWidget", "StatelessWidget", "Scaffold", "Future"], answer: 1, explain: "StatelessWidget." },
    { q: "Method yang mengembalikan tampilan widget adalah:", options: ["main()", "build()", "run()", "state()"], answer: 1, explain: "build()." },
  ],
  "fl-basic-widgets": [
    { q: "Properti yang berisi aksi saat tombol ditekan:", options: ["onTap", "onPressed", "onClick", "action"], answer: 1, explain: "ElevatedButton pakai onPressed." },
    { q: "Menampilkan gambar dari internet memakai:", options: ["Image.asset", "Image.network", "Icon", "Text"], answer: 1, explain: "Image.network(url)." },
  ],
  "fl-layout": [
    { q: "Widget untuk menata anak secara vertikal adalah:", options: ["Row", "Column", "Stack", "Wrap"], answer: 1, explain: "Column = vertikal." },
    { q: "Jarak DI DALAM sebuah container diatur oleh:", options: ["margin", "padding", "align", "gap"], answer: 1, explain: "padding = jarak dalam." },
  ],
  "fl-state": [
    { q: "Agar perubahan data tampil di layar, kamu harus memanggil:", options: ["print()", "setState()", "build()", "reload()"], answer: 1, explain: "setState() memicu gambar ulang." },
    { q: "Widget yang tampilannya bisa berubah saat runtime adalah:", options: ["StatelessWidget", "StatefulWidget", "Container", "Text"], answer: 1, explain: "StatefulWidget." },
  ],
  "fl-input": [
    { q: "Membaca isi TextField memakai:", options: ["TextController.value", "controller.text", "field.get()", "input.read()"], answer: 1, explain: "controller.text." },
    { q: "Agar tidak bocor memori, controller sebaiknya di-:", options: ["dispose()", "delete()", "close()", "abaikan"], answer: 0, explain: "dispose() di method dispose()." },
  ],
  "fl-nav": [
    { q: "Membuka halaman baru memakai:", options: ["Navigator.pop", "Navigator.push", "Navigator.open", "Navigator.go"], answer: 1, explain: "push menaruh halaman baru di atas." },
    { q: "Kembali ke halaman sebelumnya memakai:", options: ["Navigator.push", "Navigator.pop", "Navigator.back", "Navigator.exit"], answer: 1, explain: "pop menutup halaman saat ini." },
  ],
  "fl-http": [
    { q: "Kata kunci untuk menunggu proses async selesai:", options: ["wait", "await", "hold", "async"], answer: 1, explain: "await menunggu Future selesai." },
    { q: "Widget yang cocok menampilkan data dari Future adalah:", options: ["ListView", "FutureBuilder", "Container", "Column"], answer: 1, explain: "FutureBuilder menangani loading/data/error." },
  ],
  "fl-collections": [
    { q: "Wadah data berupa pasangan kunci–nilai adalah:", options: ["List", "Set", "Map", "Array"], answer: 2, explain: "Map = kunci → nilai." },
    { q: "Method untuk MENYARING elemen list adalah:", options: ["map", "where", "add", "sort"], answer: 1, explain: "where() menyaring; map() mengubah." },
    { q: "Indeks elemen pertama pada List adalah:", options: ["1", "0", "-1", "null"], answer: 1, explain: "Indeks mulai dari 0." },
  ],
  "fl-listview": [
    { q: "Untuk daftar panjang/dinamis sebaiknya pakai:", options: ["Column", "ListView.builder", "Row", "Stack"], answer: 1, explain: "builder hanya membangun item yang terlihat." },
    { q: "Properti jumlah item pada ListView.builder adalah:", options: ["length", "count", "itemCount", "size"], answer: 2, explain: "itemCount." },
  ],
  "fl-theming": [
    { q: "Tema aplikasi diatur pada widget:", options: ["Scaffold", "MaterialApp (theme)", "Container", "Text"], answer: 1, explain: "MaterialApp punya properti theme (ThemeData)." },
    { q: "Mengambil warna tema saat runtime memakai:", options: ["Colors.of()", "Theme.of(context)", "context.color", "ThemeData.get()"], answer: 1, explain: "Theme.of(context)." },
  ],
  "fl-lifecycle": [
    { q: "Kode yang harus jalan SEKALI saat widget dibuat ditaruh di:", options: ["build()", "initState()", "dispose()", "setState()"], answer: 1, explain: "initState() dipanggil sekali di awal." },
    { q: "Membersihkan controller/timer dilakukan di:", options: ["initState()", "build()", "dispose()", "main()"], answer: 2, explain: "dispose() saat widget dibuang." },
  ],
  "fl-lifting": [
    { q: "\"Lifting state up\" berarti menaruh state di:", options: ["widget anak", "widget induk bersama", "file terpisah", "database"], answer: 1, explain: "State di induk, diturunkan ke anak." },
    { q: "Pada Provider, memberi tahu pendengar perubahan memakai:", options: ["setState()", "notifyListeners()", "update()", "refresh()"], answer: 1, explain: "notifyListeners() pada ChangeNotifier." },
  ],
  "fl-list-api": [
    { q: "Mengubah JSON (Map) menjadi objek Dart biasanya lewat:", options: ["toString()", "factory fromJson", "jsonEncode", "build()"], answer: 1, explain: "Konstruktor factory fromJson." },
    { q: "Menampilkan List dari Future paling pas dengan:", options: ["FutureBuilder + ListView.builder", "hanya Text", "Row", "setState saja"], answer: 0, explain: "Kombinasi keduanya." },
  ],
  "fl-prefs": [
    { q: "Paket untuk menyimpan data sederhana secara lokal adalah:", options: ["http", "provider", "shared_preferences", "intl"], answer: 2, explain: "shared_preferences." },
    { q: "Operasi shared_preferences bersifat:", options: ["sinkron", "async (pakai await)", "otomatis", "hanya di web"], answer: 1, explain: "Semua async." },
  ],
  "fl-errors": [
    { q: "\"RenderFlex overflowed\" biasanya diatasi dengan:", options: ["menghapus Scaffold", "SingleChildScrollView / Expanded", "menambah warna", "hot restart"], answer: 1, explain: "Isi melebihi ruang → dibungkus scroll/Expanded." },
    { q: "Setelah mengubah initState/state, gunakan:", options: ["hot reload", "hot restart", "flutter clean", "restart PC"], answer: 1, explain: "Hot restart memuat ulang state." },
  ],
  "fl-packages": [
    { q: "Daftar dependensi paket ditulis di file:", options: ["main.dart", "pubspec.yaml", "index.html", "config.dart"], answer: 1, explain: "pubspec.yaml." },
    { q: "Perintah menambah paket http adalah:", options: ["flutter add http", "flutter pub add http", "npm install http", "dart get http"], answer: 1, explain: "flutter pub add http." },
  ],
  "fl-forms": [
    { q: "Agar bisa memakai validator di dalam Form, gunakan widget:", options: ["TextField", "TextFormField", "Text", "InputField"], answer: 1, explain: "TextFormField mendukung properti validator." },
    { q: "Sebuah validator dianggap VALID bila mengembalikan:", options: ["true", "String kosong", "null", "0"], answer: 2, explain: "null berarti tidak ada error (valid)." },
    { q: "Menjalankan semua validator sekaligus dilakukan dengan:", options: ["form.check()", "_formKey.currentState!.validate()", "setState()", "Form.submit()"], answer: 1, explain: "validate() pada FormState." },
  ],
  "fl-gridview": [
    { q: "Properti yang menentukan jumlah kolom pada GridView.count adalah:", options: ["columns", "crossAxisCount", "itemCount", "gridSize"], answer: 1, explain: "crossAxisCount = jumlah kolom." },
    { q: "Mengatur rasio bentuk (lebar : tinggi) tiap sel memakai:", options: ["childAspectRatio", "boxFit", "flex", "ratio"], answer: 0, explain: "childAspectRatio." },
    { q: "Untuk grid dengan data panjang/dinamis sebaiknya pakai:", options: ["GridView statis", "GridView.builder", "Column", "Wrap"], answer: 1, explain: "builder efisien untuk data banyak." },
  ],
  "fl-animation": [
    { q: "Widget yang otomatis menganimasikan perubahan ukuran/warna adalah:", options: ["Container", "AnimatedContainer", "SizedBox", "Transform"], answer: 1, explain: "AnimatedContainer = implicit animation." },
    { q: "Properti yang menentukan lama animasi adalah:", options: ["curve", "duration", "speed", "delay"], answer: 1, explain: "duration mengatur durasi animasi." },
    { q: "Untuk memudarkan (transparansi) widget secara halus, pakai:", options: ["AnimatedOpacity", "Visibility", "Opacity", "FadeOut"], answer: 0, explain: "AnimatedOpacity menganimasikan opacity." },
  ],
  "fl-images": [
    { q: "Menampilkan gambar dari file lokal aplikasi memakai:", options: ["Image.network", "Image.asset", "Image.file", "Image.memory"], answer: 1, explain: "Image.asset untuk aset lokal." },
    { q: "Aset gambar lokal wajib didaftarkan di file:", options: ["main.dart", "pubspec.yaml", "assets.json", "config.dart"], answer: 1, explain: "Bagian flutter/assets di pubspec.yaml." },
    { q: "Properti yang mengatur cara gambar mengisi ruang adalah:", options: ["fit", "align", "scale", "size"], answer: 0, explain: "fit (mis. BoxFit.cover / contain)." },
  ],
  "fl-responsive": [
    { q: "Mengetahui lebar seluruh layar memakai:", options: ["LayoutBuilder", "MediaQuery.of(context).size", "context.width", "Screen.size"], answer: 1, explain: "MediaQuery memberi ukuran layar." },
    { q: "Widget yang memberi tahu ukuran ruang lokal tempat widget dipasang:", options: ["MediaQuery", "LayoutBuilder", "SafeArea", "Expanded"], answer: 1, explain: "LayoutBuilder menyediakan constraints." },
    { q: "Agar konten tidak tertutup notch/bilah status, bungkus dengan:", options: ["Padding", "SafeArea", "Container", "Center"], answer: 1, explain: "SafeArea menghindari area sistem." },
  ],
  "fl-dialog": [
    { q: "Menampilkan pesan singkat di bawah layar memakai:", options: ["AlertDialog", "SnackBar", "BottomSheet", "Toast"], answer: 1, explain: "SnackBar untuk pesan singkat." },
    { q: "SnackBar ditampilkan melalui:", options: ["Scaffold.of", "ScaffoldMessenger.of(context)", "Navigator.of", "showDialog"], answer: 1, explain: "ScaffoldMessenger.of(context).showSnackBar(...)." },
    { q: "Menutup dialog sekaligus mengembalikan nilai pilihan memakai:", options: ["Navigator.push", "Navigator.pop(context, nilai)", "close()", "setState()"], answer: 1, explain: "pop dengan argumen kedua mengembalikan hasil." },
  ],
  "fl-gorouter": [
    { q: "Berpindah halaman dengan named routes bawaan memakai:", options: ["Navigator.push", "Navigator.pushNamed", "context.go", "router.push"], answer: 1, explain: "pushNamed memakai nama rute." },
    { q: "Keunggulan utama go_router dibanding Navigator manual adalah:", options: ["lebih lambat", "mendukung parameter URL & deep link", "tanpa widget", "hanya untuk Android"], answer: 1, explain: "go_router unggul untuk URL/web/deep link." },
    { q: "Pada go_router, path '/produk/:id' menandakan bahwa id adalah:", options: ["konstanta", "parameter rute", "nama widget", "komentar"], answer: 1, explain: "':id' adalah path parameter." },
  ],
  "fl-riverpod": [
    { q: "Widget yang wajib membungkus aplikasi agar Riverpod berfungsi adalah:", options: ["MaterialApp", "ProviderScope", "Consumer", "ChangeNotifier"], answer: 1, explain: "ProviderScope di main()." },
    { q: "Untuk MENDENGARKAN nilai provider dan rebuild saat berubah, pakai:", options: ["ref.read", "ref.watch", "ref.get", "ref.listen"], answer: 1, explain: "ref.watch mendengarkan perubahan." },
    { q: "Untuk memanggil aksi (mengubah state) tanpa mendengarkan, pakai:", options: ["ref.watch", "ref.read(...notifier)", "setState", "notifyListeners"], answer: 1, explain: "ref.read pada .notifier untuk memicu aksi." },
  ],
};
