// Konten jalur belajar "Belajar NestJS".
// Struktur mengikuti tipe Lesson/Question agar bisa dipakai komponen Materi & Quiz.
// Catatan penyunting: di dalam template literal, tanda < dan > pada KODE ditulis
// sebagai &lt; / &gt; (wajib untuk generics TypeScript seperti Repository&lt;User&gt;),
// backtick pada template string TS ditulis \`, interpolasi ${...} ditulis \${...},
// dan escape string seperti \n ditulis \\n agar tampil apa adanya.
import type { Lesson } from "@/lib/materi";
import type { Question } from "@/lib/content";

export const NEST_CATS: { key: string; label: string; ic: string }[] = [
  { key: "mulai", label: "Mulai dari Nol", ic: "◔" },
  { key: "fondasi", label: "Fondasi TS/Node", ic: "◆" },
  { key: "inti", label: "Konsep Inti", ic: "◈" },
  { key: "request", label: "Menangani Request", ic: "☍" },
  { key: "data", label: "Database", ic: "▦" },
  { key: "lanjutan", label: "Fitur Lanjutan", ic: "⚡" },
  { key: "praktik", label: "Praktik & Alat", ic: "◎" },
];

export const NEST_LESSONS: Lesson[] = [
  // ===================== MULAI DARI NOL =====================
  {
    id: "nest-intro",
    cat: "mulai",
    title: "Apa itu NestJS & Menyiapkan Alat",
    minutes: 8,
    summary: "Kenalan dengan framework NestJS dan cara memasang alat yang dibutuhkan.",
    body: `
      <p><b>NestJS</b> (sering ditulis <b>Nest</b>) adalah <b>framework backend</b> untuk <b>Node.js</b> yang ditulis dengan <b>TypeScript</b>. Ia membantu kita membangun aplikasi server (REST API, GraphQL, microservice) yang <b>terstruktur, mudah diuji, dan mudah dirawat</b>.</p>
      <h4>Kenapa belajar NestJS?</h4>
      <ul>
        <li><b>Terstruktur</b> — punya pola baku (module, controller, service) sehingga proyek besar tetap rapi.</li>
        <li><b>TypeScript dulu</b> — tipe yang kuat mengurangi bug sebelum kode dijalankan.</li>
        <li><b>Dependency Injection bawaan</b> — komponen mudah disatukan dan diuji.</li>
        <li><b>Terinspirasi Angular</b> — banyak memakai <i>decorator</i> (tanda <code>@</code>) yang deklaratif.</li>
      </ul>
      <h4>Menyiapkan alat</h4>
      <ol>
        <li>Pasang <b>Node.js</b> versi LTS dari <b>nodejs.org</b>.</li>
        <li>Cek instalasi lewat terminal:
          <pre><code>node --version
npm --version</code></pre>
        </li>
        <li>Pasang <b>Nest CLI</b> secara global agar bisa membuat proyek:
          <pre><code>npm install -g @nestjs/cli
nest --version</code></pre>
        </li>
        <li>Gunakan editor <b>VS Code</b> agar autocomplete TypeScript maksimal.</li>
      </ol>
      <div class="callout">NestJS berjalan di atas <b>Express</b> secara bawaan (bisa diganti ke Fastify). Jadi apa pun yang bisa dilakukan Express, bisa dilakukan Nest — hanya lebih rapi. Klik <b>Perdalam dengan AI</b> untuk panduan instalasi sesuai sistem operasimu.</div>
    `,
  },
  {
    id: "nest-first",
    cat: "mulai",
    title: "Proyek Pertama (Nest CLI)",
    minutes: 8,
    summary: "Membuat, menjalankan, dan membedah proyek NestJS pertamamu.",
    body: `
      <p>Nest CLI membuat kerangka proyek lengkap hanya dengan satu perintah. Mari buat proyek pertama:</p>
      <pre><code>nest new belajar-nest
# pilih package manager (npm/yarn/pnpm)
cd belajar-nest
npm run start:dev</code></pre>
      <p>Perintah <code>start:dev</code> menjalankan server dengan <b>hot-reload</b> (otomatis restart saat kode berubah). Buka <b>http://localhost:3000</b> dan kamu akan melihat "Hello World!".</p>
      <h4>File paling penting: main.ts</h4>
      <p>File ini adalah <b>titik masuk</b> aplikasi — mirip <code>func main()</code> di Go.</p>
      <pre><code>import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();</code></pre>
      <ul>
        <li><b>NestFactory.create(AppModule)</b> → membangun aplikasi dari module utama.</li>
        <li><b>app.listen(3000)</b> → menyalakan server di port 3000.</li>
        <li>Perhatikan <code>async/await</code> — proses startup bersifat asinkron.</li>
      </ul>
      <h4>Perintah CLI yang sering dipakai</h4>
      <pre><code>nest generate module users     # atau: nest g module users
nest g controller users
nest g service users
nest g resource users          # bikin CRUD lengkap sekaligus</code></pre>
      <div class="callout">Gunakan singkatan: <code>nest g</code> = generate. CLI otomatis mendaftarkan file baru ke module yang sesuai, jadi kamu tak perlu menyambungkannya manual.</div>
    `,
  },
  {
    id: "nest-arch",
    cat: "mulai",
    title: "Arsitektur & Struktur Folder",
    minutes: 9,
    summary: "Memahami alur request dan susunan folder standar aplikasi Nest.",
    body: `
      <p>Kekuatan Nest ada pada <b>strukturnya yang konsisten</b>. Tiga bangunan utama yang wajib kamu kenali sejak awal:</p>
      <table>
        <tr><th>Bagian</th><th>Tugas</th></tr>
        <tr><td><b>Module</b></td><td>Mengelompokkan fitur terkait (mis. semua tentang "users").</td></tr>
        <tr><td><b>Controller</b></td><td>Menerima request HTTP &amp; menentukan rute (route).</td></tr>
        <tr><td><b>Provider/Service</b></td><td>Berisi logika bisnis (proses data, akses database).</td></tr>
      </table>
      <h4>Alur sebuah request</h4>
      <p>Ketika browser mengirim request, jalurnya seperti ini:</p>
      <pre><code>Request  →  Middleware  →  Guard  →  Interceptor  →  Pipe
         →  Controller  →  Service  →  (Database)
         →  Interceptor  →  Response</code></pre>
      <p>Kamu tidak perlu menghafal semuanya sekarang. Intinya: <b>Controller</b> menerima, <b>Service</b> memproses, lalu hasil dikembalikan sebagai <b>Response</b>.</p>
      <h4>Struktur folder tipikal</h4>
      <pre><code>src/
  main.ts              # titik masuk
  app.module.ts        # module akar (root)
  users/
    users.module.ts
    users.controller.ts
    users.service.ts
    dto/
      create-user.dto.ts
    entities/
      user.entity.ts</code></pre>
      <ul>
        <li>Satu folder = satu <b>fitur</b>. Semua berkas terkait "users" berkumpul di folder <code>users/</code>.</li>
        <li>Pola ini disebut <b>feature module</b> dan membuat proyek besar tetap mudah dinavigasi.</li>
      </ul>
      <div class="callout">Prinsip Nest: <b>pisahkan tanggung jawab</b>. Controller jangan berisi logika berat; taruh di Service. Ini membuat kode mudah diuji &amp; digunakan ulang.</div>
    `,
  },

  // ===================== FONDASI TS/NODE =====================
  {
    id: "nest-ts-types",
    cat: "fondasi",
    title: "TypeScript: Tipe, Interface, Class",
    minutes: 9,
    summary: "Dasar TypeScript yang wajib sebelum menulis kode NestJS.",
    body: `
      <p>NestJS ditulis dengan <b>TypeScript</b> — JavaScript yang diberi <b>tipe</b>. Tipe membantu editor memberi autocomplete dan menangkap kesalahan lebih awal.</p>
      <h4>Tipe dasar &amp; anotasi</h4>
      <pre><code>let nama: string = "Dewi";
let umur: number = 20;
let aktif: boolean = true;
let nilai: number[] = [90, 85, 100];      // array angka
let daftar: Array&lt;string&gt; = ["a", "b"];   // bentuk generic array</code></pre>
      <h4>Interface — bentuk sebuah objek</h4>
      <p><b>interface</b> menjelaskan properti apa yang harus dimiliki sebuah objek. Ini sangat sering dipakai di Nest.</p>
      <pre><code>interface User {
  id: number;
  nama: string;
  email?: string;   // tanda ? = opsional
}

const u: User = { id: 1, nama: "Dewi" };</code></pre>
      <h4>Class — cetakan objek dengan perilaku</h4>
      <p><b>class</b> adalah fondasi Nest: Controller, Service, dan Module semuanya berupa class.</p>
      <pre><code>class Kalkulator {
  private total: number = 0;

  tambah(n: number): number {
    this.total += n;
    return this.total;
  }
}

const k = new Kalkulator();
console.log(k.tambah(5));   // 5</code></pre>
      <ul>
        <li><b>interface</b> hanya soal bentuk data; hilang saat dikompilasi.</li>
        <li><b>class</b> menghasilkan objek nyata dengan method &amp; state.</li>
        <li>Kata kunci akses: <code>public</code> (default), <code>private</code>, <code>protected</code>.</li>
      </ul>
      <div class="callout">Aturan praktis: pakai <b>interface</b> untuk mendeskripsikan data, pakai <b>class</b> saat butuh perilaku (method) atau ingin dipakai sebagai token Dependency Injection Nest.</div>
    `,
  },
  {
    id: "nest-ts-decorator",
    cat: "fondasi",
    title: "Memahami Decorator (@)",
    minutes: 8,
    summary: "Apa itu decorator dan mengapa Nest sangat bergantung padanya.",
    body: `
      <p><b>Decorator</b> adalah fungsi khusus yang ditandai <code>@</code> dan ditempel di atas class, method, atau parameter untuk <b>menambah perilaku/metadata</b>. Nest memakainya di mana-mana.</p>
      <h4>Contoh decorator Nest</h4>
      <pre><code>import { Controller, Get, Injectable } from '@nestjs/common';

@Controller('users')          // menandai class ini sebagai controller rute /users
export class UsersController {

  @Get()                      // menandai method ini melayani GET /users
  findAll() {
    return 'semua user';
  }
}

@Injectable()                 // menandai class bisa disuntikkan (DI)
export class UsersService {}</code></pre>
      <p>Perhatikan: kamu tidak menulis logika "cara mendaftarkan rute". Cukup <b>menempel decorator</b>, Nest mengurus sisanya secara otomatis. Ini disebut gaya <b>deklaratif</b>.</p>
      <h4>Jenis decorator berdasarkan letaknya</h4>
      <table>
        <tr><th>Letak</th><th>Contoh</th></tr>
        <tr><td>Class</td><td><code>@Controller()</code>, <code>@Module()</code>, <code>@Injectable()</code></td></tr>
        <tr><td>Method</td><td><code>@Get()</code>, <code>@Post()</code>, <code>@UseGuards()</code></td></tr>
        <tr><td>Parameter</td><td><code>@Param()</code>, <code>@Body()</code>, <code>@Query()</code></td></tr>
      </table>
      <p>Decorator hanyalah fungsi. Contoh sederhana bentuknya:</p>
      <pre><code>function Sederhana() {
  return function (target: any) {
    console.log('class didekorasi:', target.name);
  };
}

@Sederhana()
class Contoh {}</code></pre>
      <div class="callout">Agar decorator berfungsi, file <code>tsconfig.json</code> Nest sudah mengaktifkan <code>experimentalDecorators</code> dan <code>emitDecoratorMetadata</code>. Kamu tidak perlu mengubahnya.</div>
    `,
  },
  {
    id: "nest-ts-async",
    cat: "fondasi",
    title: "async/await & Promise",
    minutes: 8,
    summary: "Menangani operasi asinkron seperti akses database dengan rapi.",
    body: `
      <p>Operasi seperti membaca database atau memanggil API lain butuh <b>waktu</b>. Node.js menanganinya secara <b>asinkron</b> memakai <b>Promise</b>, dan Nest hampir selalu memakai <code>async/await</code>.</p>
      <h4>Promise — janji hasil di masa depan</h4>
      <pre><code>function ambilData(): Promise&lt;string&gt; {
  return new Promise((resolve) =&gt; {
    setTimeout(() =&gt; resolve("data siap"), 1000);
  });
}</code></pre>
      <h4>async/await — menunggu dengan gaya rapi</h4>
      <p>Fungsi <code>async</code> selalu mengembalikan <b>Promise</b>. Kata kunci <code>await</code> menunggu Promise selesai sebelum lanjut.</p>
      <pre><code>async function main(): Promise&lt;void&gt; {
  console.log("mulai");
  const hasil = await ambilData();   // menunggu 1 detik
  console.log(hasil);                // "data siap"
}</code></pre>
      <h4>Di dalam Service Nest</h4>
      <pre><code>@Injectable()
export class UsersService {
  async findOne(id: number): Promise&lt;User&gt; {
    const user = await this.repo.findOneBy({ id });
    return user;
  }
}</code></pre>
      <h4>Menangani error dengan try/catch</h4>
      <pre><code>async function jalan(): Promise&lt;void&gt; {
  try {
    const data = await ambilData();
    console.log(data);
  } catch (err) {
    console.error("gagal:", err);
  }
}</code></pre>
      <div class="callout">Ingat: <code>await</code> hanya boleh dipakai di dalam fungsi bertanda <code>async</code>. Method yang menunggu database sebaiknya selalu <code>async</code> dan bertipe <code>Promise&lt;...&gt;</code>.</div>
    `,
  },
  {
    id: "nest-ts-generics",
    cat: "fondasi",
    title: "Generics & Utility Types",
    minutes: 9,
    summary: "Tipe yang fleksibel dengan generic dan penolong bawaan TypeScript.",
    body: `
      <p><b>Generics</b> membuat kode bisa bekerja untuk <b>banyak tipe</b> tanpa kehilangan keamanan tipe. Kamu sudah melihatnya: <code>Promise&lt;string&gt;</code>, <code>Array&lt;number&gt;</code>, <code>Repository&lt;User&gt;</code>.</p>
      <h4>Fungsi generic</h4>
      <p>Huruf <code>T</code> adalah "tipe pengganti" yang ditentukan saat fungsi dipakai.</p>
      <pre><code>function bungkus&lt;T&gt;(nilai: T): T[] {
  return [nilai];
}

const a = bungkus&lt;number&gt;(5);      // number[]
const b = bungkus&lt;string&gt;("hai");  // string[]</code></pre>
      <h4>Interface generic</h4>
      <pre><code>interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
}

const res: ApiResponse&lt;User&gt; = {
  data: { id: 1, nama: "Dewi" },
  status: 200,
};</code></pre>
      <h4>Utility Types — penolong bawaan</h4>
      <p>TypeScript punya tipe siap pakai yang sering muncul di DTO Nest:</p>
      <table>
        <tr><th>Utility</th><th>Fungsi</th></tr>
        <tr><td><code>Partial&lt;T&gt;</code></td><td>Semua properti T menjadi opsional (untuk update).</td></tr>
        <tr><td><code>Pick&lt;T, K&gt;</code></td><td>Ambil sebagian properti T.</td></tr>
        <tr><td><code>Omit&lt;T, K&gt;</code></td><td>Buang sebagian properti T.</td></tr>
        <tr><td><code>Readonly&lt;T&gt;</code></td><td>Semua properti tak boleh diubah.</td></tr>
      </table>
      <pre><code>interface CreateUserDto {
  nama: string;
  email: string;
}

// untuk update: semua field boleh kosong
type UpdateUserDto = Partial&lt;CreateUserDto&gt;;
const patch: UpdateUserDto = { nama: "Andi" };  // valid</code></pre>
      <div class="callout"><code>Partial&lt;T&gt;</code> adalah dasar dari <code>PartialType()</code> milik Nest (dibahas di materi DTO). Memahami generic membuat pesan error TypeScript jauh lebih mudah dibaca.</div>
    `,
  },

  // ===================== KONSEP INTI =====================
  {
    id: "nest-module",
    cat: "inti",
    title: "Module",
    minutes: 8,
    summary: "Cara Nest mengelompokkan fitur dengan @Module.",
    body: `
      <p><b>Module</b> adalah kotak yang mengumpulkan komponen terkait (controller, service) menjadi satu fitur. Setiap aplikasi Nest punya minimal satu module: <b>AppModule</b> (akar).</p>
      <h4>Bentuk sebuah module</h4>
      <pre><code>import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],   // penerima request fitur ini
  providers: [UsersService],        // logika/servis fitur ini
  exports: [UsersService],          // agar module lain boleh memakai service ini
})
export class UsersModule {}</code></pre>
      <h4>Properti @Module</h4>
      <table>
        <tr><th>Properti</th><th>Isi</th></tr>
        <tr><td><code>controllers</code></td><td>Daftar controller milik module.</td></tr>
        <tr><td><code>providers</code></td><td>Daftar service/provider yang bisa disuntikkan.</td></tr>
        <tr><td><code>imports</code></td><td>Module lain yang dibutuhkan module ini.</td></tr>
        <tr><td><code>exports</code></td><td>Provider yang boleh dipakai module lain.</td></tr>
      </table>
      <h4>Menghubungkan ke module akar</h4>
      <pre><code>@Module({
  imports: [UsersModule],   // AppModule memakai UsersModule
})
export class AppModule {}</code></pre>
      <div class="callout">Aturan penting: sebuah service hanya bisa dipakai module lain bila di-<b>export</b> dari module asalnya <b>dan</b> module tujuan meng-<b>import</b> module tersebut. Kalau lupa, muncul error "Nest can't resolve dependencies".</div>
    `,
  },
  {
    id: "nest-controller",
    cat: "inti",
    title: "Controller & Routing",
    minutes: 9,
    summary: "Menentukan endpoint HTTP dengan decorator rute.",
    body: `
      <p><b>Controller</b> adalah pintu masuk request. Tugasnya menerima HTTP request, memanggil service, lalu mengembalikan response. Ia <b>tidak</b> berisi logika berat.</p>
      <h4>Rute dasar</h4>
      <p>Prefix rute ditentukan di <code>@Controller('...')</code>, lalu tiap method diberi decorator method HTTP.</p>
      <pre><code>import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')          // semua rute diawali /users
export class UsersController {

  @Get()                      // GET /users
  findAll() {
    return 'daftar semua user';
  }

  @Get('aktif')               // GET /users/aktif
  findActive() {
    return 'user aktif';
  }

  @Post()                     // POST /users
  create() {
    return 'membuat user baru';
  }
}</code></pre>
      <h4>Decorator method HTTP</h4>
      <table>
        <tr><th>Decorator</th><th>Untuk</th></tr>
        <tr><td><code>@Get()</code></td><td>Membaca data.</td></tr>
        <tr><td><code>@Post()</code></td><td>Membuat data baru.</td></tr>
        <tr><td><code>@Put()</code> / <code>@Patch()</code></td><td>Mengubah data.</td></tr>
        <tr><td><code>@Delete()</code></td><td>Menghapus data.</td></tr>
      </table>
      <h4>Rute dinamis (parameter)</h4>
      <pre><code>@Get(':id')                 // GET /users/42
findOne(@Param('id') id: string) {
  return \`user dengan id \${id}\`;
}</code></pre>
      <div class="callout">Nilai yang di-<code>return</code> otomatis diubah menjadi JSON dan dikirim sebagai response. Kamu tidak perlu memanggil <code>res.json()</code> manual seperti di Express biasa.</div>
    `,
  },
  {
    id: "nest-provider",
    cat: "inti",
    title: "Provider & Service",
    minutes: 8,
    summary: "Tempat menaruh logika bisnis yang bisa dipakai ulang.",
    body: `
      <p><b>Provider</b> adalah class yang bisa "disuntikkan" ke class lain. Bentuk provider paling umum adalah <b>Service</b> — tempat semua logika bisnis tinggal.</p>
      <h4>Membuat service</h4>
      <p>Ditandai <code>@Injectable()</code> agar Nest tahu ia bisa dikelola sistem DI.</p>
      <pre><code>import { Injectable } from '@nestjs/common';

interface User { id: number; nama: string; }

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(nama: string): User {
    const user = { id: Date.now(), nama };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}</code></pre>
      <h4>Memakai service di controller</h4>
      <p>Cukup minta lewat <b>constructor</b> — Nest otomatis memberikannya (lihat materi Dependency Injection).</p>
      <pre><code>@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}</code></pre>
      <ul>
        <li><b>Controller</b> = tipis, hanya mengatur request/response.</li>
        <li><b>Service</b> = tebal, berisi logika &amp; akses data.</li>
        <li>Service bisa dipakai banyak controller — <b>digunakan ulang</b>.</li>
      </ul>
      <div class="callout">Jangan menaruh query database atau perhitungan rumit langsung di controller. Pisahkan ke service agar mudah diuji dan tidak berulang.</div>
    `,
  },
  {
    id: "nest-di",
    cat: "inti",
    title: "Dependency Injection",
    minutes: 10,
    summary: "Cara Nest menyatukan komponen tanpa kamu membuatnya manual.",
    body: `
      <p><b>Dependency Injection (DI)</b> adalah jantung Nest. Idenya sederhana: <b>kamu tidak membuat objek yang kamu butuhkan sendiri</b>; kamu cukup memintanya, dan Nest yang menyediakannya.</p>
      <h4>Tanpa DI (repot &amp; sulit diuji)</h4>
      <pre><code>class UsersController {
  private service = new UsersService();  // membuat sendiri (kaku)
}</code></pre>
      <h4>Dengan DI (cara Nest)</h4>
      <p>Cukup deklarasikan di <b>constructor</b>. Nest membaca tipenya lalu menyuntikkan instance yang tepat.</p>
      <pre><code>@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // usersService siap dipakai di seluruh method
}</code></pre>
      <h4>Bagaimana Nest tahu harus menyuntik apa?</h4>
      <ol>
        <li>Service ditandai <code>@Injectable()</code>.</li>
        <li>Service didaftarkan di <code>providers</code> sebuah module.</li>
        <li>Saat startup, Nest membuat <b>satu instance</b> (singleton) dan memakainya ulang di mana pun diminta.</li>
      </ol>
      <h4>Menyuntik antar-service</h4>
      <pre><code>@Injectable()
export class OrdersService {
  constructor(private readonly usersService: UsersService) {}

  buat(userId: number) {
    const user = this.usersService.findOne(userId);
    // ... proses order
  }
}</code></pre>
      <div class="callout">Keuntungan DI: saat menguji, kamu bisa mengganti service asli dengan versi tiruan (mock). Inilah alasan aplikasi Nest sangat mudah diuji. Kalau muncul error "can't resolve dependencies", cek apakah provider sudah didaftarkan di module.</div>
    `,
  },

  // ===================== MENANGANI REQUEST =====================
  {
    id: "nest-http",
    cat: "request",
    title: "Menangani Request (Param, Query, Body)",
    minutes: 9,
    summary: "Mengambil data dari URL, query string, dan body request.",
    body: `
      <p>Sebuah request membawa data di beberapa tempat. Nest menyediakan decorator parameter untuk mengambilnya dengan rapi.</p>
      <table>
        <tr><th>Sumber</th><th>Decorator</th><th>Contoh URL</th></tr>
        <tr><td>Route param</td><td><code>@Param()</code></td><td>/users/<b>42</b></td></tr>
        <tr><td>Query string</td><td><code>@Query()</code></td><td>/users?<b>page=2</b></td></tr>
        <tr><td>Body (JSON)</td><td><code>@Body()</code></td><td>data POST/PUT</td></tr>
      </table>
      <h4>Route param — bagian dari URL</h4>
      <pre><code>@Get(':id')
findOne(@Param('id') id: string) {
  return \`mencari user \${id}\`;
}</code></pre>
      <h4>Query — filter &amp; paginasi</h4>
      <pre><code>// GET /users?page=2&amp;limit=10
@Get()
findAll(@Query('page') page: string, @Query('limit') limit: string) {
  return \`halaman \${page}, \${limit} per halaman\`;
}</code></pre>
      <h4>Body — data yang dikirim client</h4>
      <pre><code>// POST /users  dengan body { "nama": "Dewi", "email": "d@mail.com" }
@Post()
create(@Body() data: { nama: string; email: string }) {
  return \`membuat user \${data.nama}\`;
}</code></pre>
      <p>Bisa juga mengambil satu field body saja:</p>
      <pre><code>@Post()
create(@Body('nama') nama: string) {
  return \`nama: \${nama}\`;
}</code></pre>
      <div class="callout">Semua <code>@Param</code> dan <code>@Query</code> awalnya bertipe <b>string</b> (karena berasal dari URL). Untuk mengubahnya menjadi angka dengan aman, gunakan <b>Pipe</b> (materi berikutnya).</div>
    `,
  },
  {
    id: "nest-dto",
    cat: "request",
    title: "DTO & Validasi (class-validator)",
    minutes: 10,
    summary: "Mendefinisikan bentuk data masuk dan memvalidasinya otomatis.",
    body: `
      <p><b>DTO (Data Transfer Object)</b> adalah class yang mendeskripsikan <b>bentuk data</b> yang masuk ke aplikasi. Dipadukan dengan <b>class-validator</b>, Nest bisa memvalidasi request secara otomatis.</p>
      <h4>Memasang paket validasi</h4>
      <pre><code>npm install class-validator class-transformer</code></pre>
      <h4>Membuat DTO dengan aturan</h4>
      <pre><code>import { IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nama: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(17)
  umur: number;

  @IsOptional()
  @IsString()
  bio?: string;
}</code></pre>
      <h4>Mengaktifkan validasi global</h4>
      <p>Di <code>main.ts</code>, pasang <b>ValidationPipe</b> agar semua DTO otomatis dicek.</p>
      <pre><code>import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe({
  whitelist: true,            // buang field yang tak dideklarasikan
  forbidNonWhitelisted: true, // tolak bila ada field asing
}));</code></pre>
      <h4>Memakai DTO di controller</h4>
      <pre><code>@Post()
create(@Body() dto: CreateUserDto) {
  // jika data tak valid, Nest otomatis balas 400 Bad Request
  return this.usersService.create(dto);
}</code></pre>
      <p>Untuk update, Nest punya penolong <b>PartialType</b> yang membuat semua field opsional (mirip <code>Partial&lt;T&gt;</code>):</p>
      <pre><code>import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {}</code></pre>
      <div class="callout">DTO adalah salah satu praktik terbaik Nest: ia mendokumentasikan bentuk data, memvalidasinya, sekaligus memberi tipe TypeScript — semua sekaligus.</div>
    `,
  },
  {
    id: "nest-pipe",
    cat: "request",
    title: "Pipes",
    minutes: 8,
    summary: "Mengubah dan memvalidasi data sebelum masuk ke handler.",
    body: `
      <p><b>Pipe</b> adalah komponen yang berjalan <b>sebelum</b> data sampai ke method controller. Dua tugasnya: <b>transformasi</b> (mengubah bentuk) dan <b>validasi</b> (menolak yang salah).</p>
      <h4>Pipe bawaan untuk transformasi</h4>
      <p>Ingat, <code>@Param</code> selalu string. <b>ParseIntPipe</b> mengubahnya menjadi angka dengan aman:</p>
      <pre><code>import { ParseIntPipe } from '@nestjs/common';

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // id sekarang bertipe number; jika "abc", Nest balas 400
  return this.usersService.findOne(id);
}</code></pre>
      <p>Pipe bawaan lain: <code>ParseBoolPipe</code>, <code>ParseUUIDPipe</code>, <code>ParseArrayPipe</code>, dan <code>DefaultValuePipe</code>.</p>
      <pre><code>@Get()
findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
  return \`halaman \${page}\`;   // default 1 bila tak dikirim
}</code></pre>
      <h4>Pipe kustom</h4>
      <p>Kamu bisa membuat pipe sendiri dengan mengimplementasikan <code>PipeTransform</code>.</p>
      <pre><code>import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositivePipe implements PipeTransform {
  transform(value: string): number {
    const n = parseInt(value, 10);
    if (isNaN(n) || n &lt;= 0) {
      throw new BadRequestException('harus angka positif');
    }
    return n;
  }
}</code></pre>
      <div class="callout"><b>ValidationPipe</b> yang dipakai untuk DTO sebenarnya juga sebuah pipe. Pipe bisa dipasang di level parameter, method, controller, atau global.</div>
    `,
  },
  {
    id: "nest-response",
    cat: "request",
    title: "Status Code, Header & Response",
    minutes: 8,
    summary: "Mengatur kode status, header, dan bentuk response yang dikirim.",
    body: `
      <p>Secara bawaan, Nest mengubah nilai <code>return</code> menjadi JSON dengan status <b>200</b> (atau <b>201</b> untuk POST). Namun kamu bisa mengaturnya sendiri.</p>
      <h4>Mengatur status code</h4>
      <pre><code>import { HttpCode, HttpStatus } from '@nestjs/common';

@Post()
@HttpCode(HttpStatus.CREATED)   // 201
create() {
  return { pesan: 'dibuat' };
}

@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT) // 204
remove() {}</code></pre>
      <h4>Menambahkan header</h4>
      <pre><code>import { Header } from '@nestjs/common';

@Get('laporan')
@Header('Cache-Control', 'no-store')
getLaporan() {
  return 'data laporan';
}</code></pre>
      <h4>Redirect</h4>
      <pre><code>import { Redirect } from '@nestjs/common';

@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
keDokumentasi() {}</code></pre>
      <h4>Bentuk response yang konsisten</h4>
      <p>Praktik umum: bungkus data dalam struktur seragam agar client mudah memakainya.</p>
      <pre><code>@Get()
findAll() {
  const data = this.usersService.findAll();
  return { sukses: true, jumlah: data.length, data };
}</code></pre>
      <div class="callout">Hindari menyentuh objek <code>res</code> Express langsung kecuali sangat perlu. Membiarkan Nest menangani response menjaga fitur seperti interceptor tetap berfungsi.</div>
    `,
  },

  // ===================== DATABASE =====================
  {
    id: "nest-db-intro",
    cat: "data",
    title: "Pengantar Database (TypeORM/Prisma)",
    minutes: 9,
    summary: "Mengenal ORM dan pilihan menghubungkan Nest ke database.",
    body: `
      <p>Aplikasi nyata menyimpan data di <b>database</b> (mis. PostgreSQL, MySQL, SQLite). Agar tak menulis SQL mentah terus-menerus, kita pakai <b>ORM</b> — alat yang memetakan tabel database ke objek/class.</p>
      <h4>Dua ORM populer di Nest</h4>
      <table>
        <tr><th>ORM</th><th>Ciri</th></tr>
        <tr><td><b>TypeORM</b></td><td>Berbasis decorator, terintegrasi resmi lewat <code>@nestjs/typeorm</code>.</td></tr>
        <tr><td><b>Prisma</b></td><td>Skema terpisah + type-safe client, sangat populer &amp; modern.</td></tr>
      </table>
      <h4>Menghubungkan TypeORM</h4>
      <pre><code>npm install @nestjs/typeorm typeorm sqlite3</code></pre>
      <p>Lalu daftarkan di module akar:</p>
      <pre><code>import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true,   // buat tabel otomatis (hanya untuk belajar!)
    }),
  ],
})
export class AppModule {}</code></pre>
      <h4>Gambaran Prisma (alternatif)</h4>
      <pre><code>// schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  nama  String
  email String @unique
}</code></pre>
      <div class="callout">Peringatan: <code>synchronize: true</code> memudahkan saat belajar tapi <b>berbahaya di produksi</b> (bisa menghapus data). Di produksi gunakan <b>migration</b>. Materi berikutnya fokus pada TypeORM.</div>
    `,
  },
  {
    id: "nest-entity",
    cat: "data",
    title: "Entity & Repository (TypeORM)",
    minutes: 10,
    summary: "Mendefinisikan tabel sebagai class dan mengaksesnya lewat repository.",
    body: `
      <p>Di TypeORM, sebuah <b>Entity</b> adalah class yang mewakili satu <b>tabel</b>. Tiap properti dengan decorator kolom menjadi satu kolom tabel.</p>
      <h4>Membuat entity</h4>
      <pre><code>import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  aktif: boolean;
}</code></pre>
      <h4>Mendaftarkan entity ke module fitur</h4>
      <pre><code>@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}</code></pre>
      <h4>Repository — pintu akses data</h4>
      <p>Nest menyuntikkan <code>Repository&lt;User&gt;</code> ke service lewat <code>@InjectRepository</code>.</p>
      <pre><code>import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository&lt;User&gt;,
  ) {}

  findAll(): Promise&lt;User[]&gt; {
    return this.repo.find();
  }

  findOne(id: number): Promise&lt;User | null&gt; {
    return this.repo.findOneBy({ id });
  }
}</code></pre>
      <h4>Method repository yang sering dipakai</h4>
      <table>
        <tr><th>Method</th><th>Fungsi</th></tr>
        <tr><td><code>find()</code> / <code>findOneBy()</code></td><td>Membaca banyak / satu baris.</td></tr>
        <tr><td><code>create()</code></td><td>Membuat instance entity (belum disimpan).</td></tr>
        <tr><td><code>save()</code></td><td>Menyimpan (insert atau update) ke database.</td></tr>
        <tr><td><code>remove()</code> / <code>delete()</code></td><td>Menghapus baris.</td></tr>
      </table>
      <div class="callout">Perhatikan tipe generic <code>Repository&lt;User&gt;</code> — inilah kenapa memahami generics penting. Repository tahu bahwa ia bekerja khusus untuk entity <code>User</code>.</div>
    `,
  },
  {
    id: "nest-crud",
    cat: "data",
    title: "Membuat CRUD Lengkap",
    minutes: 11,
    summary: "Menggabungkan controller, service, DTO, dan repository jadi CRUD utuh.",
    body: `
      <p>Sekarang kita gabungkan semua yang dipelajari menjadi fitur <b>CRUD</b> (Create, Read, Update, Delete) lengkap untuk <code>User</code>.</p>
      <h4>Service — logika CRUD</h4>
      <pre><code>@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository&lt;User&gt;,
  ) {}

  create(dto: CreateUserDto): Promise&lt;User&gt; {
    const user = this.repo.create(dto);   // buat instance
    return this.repo.save(user);          // simpan
  }

  findAll(): Promise&lt;User[]&gt; {
    return this.repo.find();
  }

  async findOne(id: number): Promise&lt;User&gt; {
    const user = await this.repo.findOneBy({ id });
    if (!user) throw new NotFoundException('user tidak ditemukan');
    return user;
  }

  async update(id: number, dto: UpdateUserDto): Promise&lt;User&gt; {
    const user = await this.findOne(id);
    Object.assign(user, dto);   // gabungkan perubahan
    return this.repo.save(user);
  }

  async remove(id: number): Promise&lt;void&gt; {
    const user = await this.findOne(id);
    await this.repo.remove(user);
  }
}</code></pre>
      <h4>Controller — memetakan ke endpoint</h4>
      <pre><code>@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUserDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}</code></pre>
      <div class="callout">Perhatikan pembagian tugas: <b>controller</b> hanya memetakan rute ke method service, sedangkan seluruh logika ada di <b>service</b>. Perintah <code>nest g resource users</code> membuat semua kerangka ini otomatis.</div>
    `,
  },

  // ===================== FITUR LANJUTAN =====================
  {
    id: "nest-middleware",
    cat: "lanjutan",
    title: "Middleware",
    minutes: 8,
    summary: "Menjalankan kode sebelum request mencapai controller.",
    body: `
      <p><b>Middleware</b> adalah fungsi yang berjalan <b>paling awal</b>, sebelum guard dan controller. Cocok untuk logging, mengukur waktu, atau memodifikasi objek request.</p>
      <h4>Membuat middleware (class)</h4>
      <pre><code>import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(\`[\${req.method}] \${req.originalUrl}\`);
    next();   // WAJIB: teruskan ke tahap berikutnya
  }
}</code></pre>
      <p>Jangan lupa memanggil <code>next()</code>. Kalau tidak, request akan menggantung selamanya.</p>
      <h4>Mendaftarkan middleware di module</h4>
      <p>Module harus mengimplementasikan <code>NestModule</code> dan mengatur di <code>configure()</code>.</p>
      <pre><code>import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({ /* ... */ })
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');   // untuk semua rute
  }
}</code></pre>
      <p>Bisa juga membatasi ke rute tertentu:</p>
      <pre><code>consumer.apply(LoggerMiddleware).forRoutes('users');</code></pre>
      <div class="callout">Middleware Nest kompatibel dengan middleware Express biasa. Untuk logika yang butuh akses ke sistem DI atau konteks Nest (mis. cek peran), <b>Guard</b> lebih tepat.</div>
    `,
  },
  {
    id: "nest-guard",
    cat: "lanjutan",
    title: "Guards & Autentikasi JWT",
    minutes: 11,
    summary: "Melindungi rute dan mengenali pengguna dengan token JWT.",
    body: `
      <p><b>Guard</b> menentukan <b>boleh atau tidaknya</b> sebuah request lanjut ke controller. Ini fondasi <b>autentikasi</b> (siapa kamu) dan <b>otorisasi</b> (kamu boleh apa).</p>
      <h4>Guard sederhana</h4>
      <p>Guard mengembalikan <code>true</code> (lanjut) atau <code>false</code> (tolak, 403).</p>
      <pre><code>import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    return Boolean(req.headers['authorization']);
  }
}</code></pre>
      <h4>Autentikasi JWT</h4>
      <p>Pola umum: user login, server memberi <b>token JWT</b>, lalu token dikirim di setiap request.</p>
      <pre><code>npm install @nestjs/jwt @nestjs/passport passport passport-jwt</code></pre>
      <p>Service login membuat token:</p>
      <pre><code>@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  async login(user: { id: number; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwt.signAsync(payload) };
  }
}</code></pre>
      <h4>Memasang guard di rute</h4>
      <pre><code>import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Get('profil')
getProfil(@Req() req) {
  return req.user;   // data user hasil verifikasi token
}</code></pre>
      <div class="callout">Guard berjalan setelah middleware tapi sebelum interceptor &amp; pipe. Untuk role-based access (mis. hanya admin), gabungkan guard dengan <b>custom decorator</b> dan <code>Reflector</code> untuk membaca metadata peran.</div>
    `,
  },
  {
    id: "nest-interceptor",
    cat: "lanjutan",
    title: "Interceptors",
    minutes: 9,
    summary: "Membungkus logika sebelum dan sesudah handler berjalan.",
    body: `
      <p><b>Interceptor</b> bisa menjalankan kode <b>sebelum</b> dan <b>sesudah</b> method controller. Cocok untuk mengubah bentuk response, logging waktu eksekusi, atau caching.</p>
      <h4>Membungkus semua response secara seragam</h4>
      <pre><code>import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable&lt;any&gt; {
    return next.handle().pipe(
      map((data) =&gt; ({ sukses: true, data })),
    );
  }
}</code></pre>
      <p>Dengan interceptor ini, tiap response otomatis berbentuk <code>{ sukses: true, data: ... }</code>.</p>
      <h4>Mengukur waktu eksekusi (logging)</h4>
      <pre><code>import { tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable&lt;any&gt; {
    const mulai = Date.now();
    return next.handle().pipe(
      tap(() =&gt; console.log(\`butuh \${Date.now() - mulai}ms\`)),
    );
  }
}</code></pre>
      <h4>Memasangnya</h4>
      <pre><code>@UseInterceptors(TransformInterceptor)
@Get()
findAll() {
  return this.service.findAll();
}</code></pre>
      <div class="callout">Interceptor memakai <b>RxJS Observable</b>. Untuk pemakaian dasar kamu cukup tahu dua operator: <code>map</code> (ubah data) dan <code>tap</code> (jalankan efek samping tanpa mengubah data).</div>
    `,
  },
  {
    id: "nest-exception",
    cat: "lanjutan",
    title: "Exception Filters",
    minutes: 9,
    summary: "Menangani error dengan rapi dan format response yang konsisten.",
    body: `
      <p>Ketika terjadi kesalahan, Nest melempar <b>exception</b>. Nest sudah punya banyak exception HTTP siap pakai yang otomatis menjadi response error yang benar.</p>
      <h4>Exception bawaan</h4>
      <pre><code>import { NotFoundException, BadRequestException, UnauthorizedException } from '@nestjs/common';

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  const user = this.service.findOne(id);
  if (!user) {
    throw new NotFoundException('User tidak ditemukan');  // otomatis 404
  }
  return user;
}</code></pre>
      <table>
        <tr><th>Exception</th><th>Status</th></tr>
        <tr><td><code>BadRequestException</code></td><td>400</td></tr>
        <tr><td><code>UnauthorizedException</code></td><td>401</td></tr>
        <tr><td><code>ForbiddenException</code></td><td>403</td></tr>
        <tr><td><code>NotFoundException</code></td><td>404</td></tr>
      </table>
      <h4>Exception filter kustom</h4>
      <p>Untuk menyeragamkan format semua error, buat filter sendiri:</p>
      <pre><code>import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse&lt;Response&gt;();
    const status = exception.getStatus();

    res.status(status).json({
      sukses: false,
      status,
      pesan: exception.message,
    });
  }
}</code></pre>
      <p>Pasang secara global di <code>main.ts</code>:</p>
      <pre><code>app.useGlobalFilters(new HttpErrorFilter());</code></pre>
      <div class="callout">Filosofi: <b>lempar</b> exception di service (mis. <code>throw new NotFoundException()</code>), biarkan <b>filter</b> mengubahnya menjadi response. Controller tetap bersih dari penanganan error yang berulang.</div>
    `,
  },
  {
    id: "nest-config",
    cat: "lanjutan",
    title: "Configuration & Environment Variable",
    minutes: 8,
    summary: "Menyimpan pengaturan rahasia di file .env dengan aman.",
    body: `
      <p>Data sensitif (password database, secret JWT) <b>tidak boleh</b> ditulis langsung di kode. Simpan di <b>environment variable</b> lewat file <code>.env</code>.</p>
      <h4>Memasang @nestjs/config</h4>
      <pre><code>npm install @nestjs/config</code></pre>
      <h4>File .env</h4>
      <pre><code>DATABASE_HOST=localhost
DATABASE_PORT=5432
JWT_SECRET=rahasia-super-panjang
PORT=3000</code></pre>
      <p>Selalu tambahkan <code>.env</code> ke <code>.gitignore</code> agar tidak ikut ke repository.</p>
      <h4>Mengaktifkan di module akar</h4>
      <pre><code>import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // tersedia di seluruh app
  ],
})
export class AppModule {}</code></pre>
      <h4>Membaca nilai lewat ConfigService</h4>
      <pre><code>import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getSecret(): string {
    return this.config.get&lt;string&gt;('JWT_SECRET')!;
  }
}</code></pre>
      <p>Dipakai juga saat startup, mis. menentukan port:</p>
      <pre><code>const port = configService.get&lt;number&gt;('PORT') ?? 3000;
await app.listen(port);</code></pre>
      <div class="callout">Perhatikan generic <code>config.get&lt;string&gt;(...)</code> untuk memberi tipe hasil. Untuk memvalidasi bahwa semua variabel wajib benar-benar ada saat startup, gunakan skema validasi (mis. Joi) pada <code>ConfigModule</code>.</div>
    `,
  },

  // ===================== PRAKTIK & ALAT =====================
  {
    id: "nest-test",
    cat: "praktik",
    title: "Testing dengan Jest",
    minutes: 10,
    summary: "Menulis unit test service dan memanfaatkan DI untuk mocking.",
    body: `
      <p>Nest hadir dengan <b>Jest</b> siap pakai. Berkat Dependency Injection, komponen Nest sangat mudah diuji karena dependensi bisa diganti dengan tiruan (mock).</p>
      <h4>Menjalankan test</h4>
      <pre><code>npm run test          # unit test
npm run test:watch    # otomatis jalan saat berubah
npm run test:cov      # laporan cakupan (coverage)</code></pre>
      <h4>Anatomi sebuah test</h4>
      <pre><code>describe('UsersService', () =&gt; {
  it('menjumlahkan dengan benar', () =&gt; {
    const hasil = 2 + 3;
    expect(hasil).toBe(5);
  });
});</code></pre>
      <h4>Unit test service dengan repository tiruan</h4>
      <pre><code>import { Test } from '@nestjs/testing';

describe('UsersService', () =&gt; {
  let service: UsersService;

  const mockRepo = {
    find: jest.fn(() =&gt; [{ id: 1, nama: 'Dewi' }]),
    findOneBy: jest.fn(),
  };

  beforeEach(async () =&gt; {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepo },
      ],
    }).compile();

    service = moduleRef.get&lt;UsersService&gt;(UsersService);
  });

  it('mengembalikan semua user', async () =&gt; {
    const users = await service.findAll();
    expect(users).toHaveLength(1);
    expect(mockRepo.find).toHaveBeenCalled();
  });
});</code></pre>
      <div class="callout">Pola kunci: alih-alih repository asli, kita berikan <code>useValue: mockRepo</code>. Karena service hanya bergantung pada "kontrak" repository (bukan implementasi), test jadi cepat dan tidak menyentuh database sungguhan.</div>
    `,
  },
  {
    id: "nest-swagger",
    cat: "praktik",
    title: "Dokumentasi API (Swagger/OpenAPI)",
    minutes: 8,
    summary: "Menghasilkan dokumentasi API interaktif secara otomatis.",
    body: `
      <p><b>Swagger</b> (OpenAPI) menghasilkan halaman dokumentasi API interaktif — orang lain bisa melihat dan mencoba endpoint langsung dari browser.</p>
      <h4>Memasang &amp; menyalakan</h4>
      <pre><code>npm install @nestjs/swagger</code></pre>
      <p>Di <code>main.ts</code>:</p>
      <pre><code>import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('API Users')
  .setDescription('Dokumentasi API belajar NestJS')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);  // buka /docs</code></pre>
      <p>Jalankan aplikasi lalu buka <b>http://localhost:3000/docs</b>.</p>
      <h4>Memperkaya dokumentasi dengan decorator</h4>
      <pre><code>import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @ApiOperation({ summary: 'Ambil semua user' })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}</code></pre>
      <p>Beri deskripsi pada properti DTO agar muncul di dokumentasi:</p>
      <pre><code>export class CreateUserDto {
  @ApiProperty({ example: 'Dewi', description: 'Nama lengkap' })
  @IsString()
  nama: string;
}</code></pre>
      <div class="callout">Swagger membaca metadata dari decorator yang sudah kamu tulis (termasuk aturan class-validator). Jadi DTO yang rapi otomatis menghasilkan dokumentasi yang rapi pula.</div>
    `,
  },
  {
    id: "nest-best",
    cat: "praktik",
    title: "Struktur, Praktik Terbaik & Deploy",
    minutes: 9,
    summary: "Rangkuman praktik baik dan langkah menyiapkan aplikasi untuk produksi.",
    body: `
      <p>Setelah menguasai dasar, berikut kebiasaan yang membuat proyek Nest tetap sehat saat membesar.</p>
      <h4>Praktik terbaik</h4>
      <ul>
        <li><b>Satu fitur, satu module</b> — kelompokkan controller, service, DTO, entity dalam satu folder.</li>
        <li><b>Controller tipis, service tebal</b> — logika bisnis selalu di service.</li>
        <li><b>Selalu pakai DTO + ValidationPipe</b> untuk data masuk.</li>
        <li><b>Simpan rahasia di .env</b>, jangan di kode.</li>
        <li><b>Lempar exception</b> yang sesuai, tangani lewat filter global.</li>
      </ul>
      <h4>Menyiapkan produksi</h4>
      <pre><code>npm run build          # kompilasi TS → dist/
npm run start:prod     # jalankan hasil build (node dist/main)</code></pre>
      <p>Aktifkan CORS dan matikan <code>synchronize</code> TypeORM (pakai migration):</p>
      <pre><code>async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();</code></pre>
      <h4>Deploy dengan Docker</h4>
      <pre><code>FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["node", "dist/main"]</code></pre>
      <div class="callout">Checklist sebelum rilis: variabel environment terpasang, migration dijalankan, logging &amp; exception filter aktif, dan CORS dikonfigurasi sesuai domain frontend. Selamat, kamu sudah menguasai fondasi NestJS!</div>
    `,
  },
];

export const NEST_QUIZZES: Record<string, Question[]> = {
  "nest-intro": [
    { q: "NestJS adalah framework untuk platform:", options: ["Browser", "Node.js (backend)", "Android", "Desktop"], answer: 1, explain: "Nest adalah framework backend di atas Node.js." },
    { q: "Bahasa utama yang dipakai NestJS adalah:", options: ["JavaScript murni", "TypeScript", "Python", "Dart"], answer: 1, explain: "Nest ditulis dan dipakai dengan TypeScript." },
    { q: "Secara bawaan, di balik layar Nest berjalan di atas:", options: ["Django", "Express", "Laravel", "Spring"], answer: 1, explain: "Bawaan memakai Express (bisa diganti Fastify)." },
  ],
  "nest-first": [
    { q: "Perintah membuat proyek Nest baru adalah:", options: ["nest create", "nest new", "nest init", "nest start"], answer: 1, explain: "nest new nama-proyek." },
    { q: "File titik masuk aplikasi Nest adalah:", options: ["index.ts", "app.ts", "main.ts", "server.ts"], answer: 2, explain: "main.ts memanggil NestFactory.create." },
    { q: "Menjalankan server dengan hot-reload memakai:", options: ["npm run start:dev", "npm build", "npm test", "npm install"], answer: 0, explain: "start:dev otomatis restart saat kode berubah." },
  ],
  "nest-arch": [
    { q: "Bagian yang berisi logika bisnis adalah:", options: ["Controller", "Service/Provider", "Module", "Middleware"], answer: 1, explain: "Logika bisnis tinggal di service." },
    { q: "Yang menerima request HTTP dan menentukan rute adalah:", options: ["Service", "Module", "Controller", "Entity"], answer: 2, explain: "Controller menangani request & routing." },
    { q: "Prinsip utama struktur Nest adalah:", options: ["semua di satu file", "pisahkan tanggung jawab", "tanpa module", "logika di controller"], answer: 1, explain: "Separation of concerns membuat kode mudah dirawat." },
  ],
  "nest-ts-types": [
    { q: "Yang mendeskripsikan bentuk objek tapi hilang saat kompilasi adalah:", options: ["class", "interface", "enum", "const"], answer: 1, explain: "interface hanya soal tipe; class menghasilkan objek nyata." },
    { q: "Tanda ? pada properti interface berarti:", options: ["wajib", "opsional", "privat", "readonly"], answer: 1, explain: "? menandai properti opsional." },
    { q: "Controller dan Service di Nest secara teknis berupa:", options: ["fungsi", "interface", "class", "objek literal"], answer: 2, explain: "Keduanya adalah class." },
  ],
  "nest-ts-decorator": [
    { q: "Decorator ditandai dengan simbol:", options: ["#", "@", "$", "&"], answer: 1, explain: "Decorator diawali @." },
    { q: "Decorator untuk menandai class sebagai penerima request adalah:", options: ["@Injectable()", "@Module()", "@Controller()", "@Get()"], answer: 2, explain: "@Controller() menandai controller." },
    { q: "Decorator yang menandai class bisa disuntikkan (DI) adalah:", options: ["@Injectable()", "@Inject()", "@Provide()", "@Service()"], answer: 0, explain: "@Injectable() dipakai pada provider/service." },
  ],
  "nest-ts-async": [
    { q: "Fungsi bertanda async selalu mengembalikan:", options: ["void", "Promise", "string", "boolean"], answer: 1, explain: "Fungsi async mengembalikan Promise." },
    { q: "Kata kunci await hanya boleh dipakai di dalam fungsi:", options: ["biasa", "async", "generator", "anonim"], answer: 1, explain: "await hanya di dalam fungsi async." },
    { q: "Menangani error pada kode async memakai:", options: ["if err != nil", "try/catch", "callback", "panic"], answer: 1, explain: "Gunakan try/catch di sekitar await." },
  ],
  "nest-ts-generics": [
    { q: "Cara benar menulis array string dengan generic adalah:", options: ["Array<string>", "Array[string]", "string.Array", "Generic(string)"], answer: 0, explain: "Array<string> — tipe generic." },
    { q: "Utility type untuk membuat semua properti opsional adalah:", options: ["Pick", "Omit", "Partial", "Readonly"], answer: 2, explain: "Partial<T> menjadikan semua field opsional." },
    { q: "Repository&lt;User&gt; pada TypeORM adalah contoh dari:", options: ["decorator", "generic", "interface kosong", "enum"], answer: 1, explain: "Repository<User> memakai tipe generic." },
  ],
  "nest-module": [
    { q: "Setiap aplikasi Nest minimal punya module:", options: ["UsersModule", "AppModule (akar)", "CoreModule", "MainModule"], answer: 1, explain: "AppModule adalah module akar." },
    { q: "Agar service bisa dipakai module lain, ia harus:", options: ["di-import saja", "di-export dari module asal", "ditulis di main.ts", "dijadikan controller"], answer: 1, explain: "Export dari module asal + import di module tujuan." },
    { q: "Properti @Module untuk mendaftarkan service adalah:", options: ["controllers", "providers", "imports", "exports"], answer: 1, explain: "providers berisi service/provider." },
  ],
  "nest-controller": [
    { q: "Decorator untuk endpoint GET adalah:", options: ["@Read()", "@Get()", "@Fetch()", "@Query()"], answer: 1, explain: "@Get() melayani request GET." },
    { q: "Prefix rute sebuah controller ditentukan di:", options: ["@Get('...')", "@Controller('...')", "@Module('...')", "main.ts"], answer: 1, explain: "@Controller('users') → semua rute diawali /users." },
    { q: "Nilai yang di-return controller akan otomatis:", options: ["diabaikan", "diubah menjadi JSON response", "disimpan ke database", "dicetak ke konsol"], answer: 1, explain: "Nest mengubah return menjadi JSON response." },
  ],
  "nest-provider": [
    { q: "Bentuk provider yang paling umum adalah:", options: ["Controller", "Service", "Module", "Entity"], answer: 1, explain: "Service adalah provider paling umum." },
    { q: "Menurut praktik Nest, logika berat sebaiknya diletakkan di:", options: ["controller", "service", "main.ts", "module"], answer: 1, explain: "Controller tipis, service tebal." },
    { q: "Agar sebuah class menjadi provider, ia ditandai:", options: ["@Controller()", "@Injectable()", "@Entity()", "@Get()"], answer: 1, explain: "@Injectable() menandai provider." },
  ],
  "nest-di": [
    { q: "Dependency Injection artinya:", options: ["membuat objek sendiri dengan new", "meminta dependensi lewat constructor, Nest yang menyediakan", "menyalin kode", "menghindari class"], answer: 1, explain: "Kita minta lewat constructor, Nest menyuntikkan." },
    { q: "Secara bawaan, instance provider di Nest bersifat:", options: ["baru tiap request", "singleton (dipakai ulang)", "acak", "tidak dibuat"], answer: 1, explain: "Nest membuat satu instance singleton." },
    { q: "Error 'can't resolve dependencies' biasanya karena:", options: ["port salah", "provider belum didaftarkan di module", "TypeScript versi lama", "tidak ada internet"], answer: 1, explain: "Provider harus terdaftar di providers module." },
  ],
  "nest-http": [
    { q: "Mengambil bagian dinamis dari URL (/users/42) memakai:", options: ["@Body()", "@Query()", "@Param()", "@Headers()"], answer: 2, explain: "@Param('id') mengambil route param." },
    { q: "Mengambil query string (?page=2) memakai:", options: ["@Query()", "@Param()", "@Body()", "@Req()"], answer: 0, explain: "@Query('page') untuk query string." },
    { q: "Nilai dari @Param dan @Query awalnya selalu bertipe:", options: ["number", "boolean", "string", "object"], answer: 2, explain: "Berasal dari URL, jadi string; ubah dengan Pipe." },
  ],
  "nest-dto": [
    { q: "DTO singkatan dari:", options: ["Data Transfer Object", "Direct Type Option", "Database Table Object", "Dynamic Typed Output"], answer: 0, explain: "Data Transfer Object mendeskripsikan data masuk." },
    { q: "Paket untuk aturan validasi seperti @IsEmail adalah:", options: ["class-validator", "type-check", "joi-nest", "validate-ts"], answer: 0, explain: "class-validator (+ class-transformer)." },
    { q: "Yang mengaktifkan validasi DTO otomatis adalah:", options: ["ParseIntPipe", "ValidationPipe", "AuthGuard", "LoggerMiddleware"], answer: 1, explain: "ValidationPipe memicu pengecekan DTO." },
  ],
  "nest-pipe": [
    { q: "Pipe untuk mengubah string param menjadi number adalah:", options: ["ParseIntPipe", "ValidationPipe", "TransformPipe", "NumberPipe"], answer: 0, explain: "ParseIntPipe mengubah ke number & menolak yang bukan angka." },
    { q: "Dua tugas utama pipe adalah:", options: ["logging & caching", "transformasi & validasi", "routing & response", "guard & filter"], answer: 1, explain: "Pipe mentransformasi dan/atau memvalidasi input." },
    { q: "Membuat pipe kustom dilakukan dengan mengimplementasikan:", options: ["CanActivate", "PipeTransform", "NestMiddleware", "ExceptionFilter"], answer: 1, explain: "Interface PipeTransform dengan method transform()." },
  ],
  "nest-response": [
    { q: "Mengatur status code sebuah handler memakai decorator:", options: ["@Status()", "@HttpCode()", "@Code()", "@Response()"], answer: 1, explain: "@HttpCode(HttpStatus.CREATED) dsb." },
    { q: "Status default untuk request POST yang berhasil adalah:", options: ["200", "201", "204", "301"], answer: 1, explain: "POST default 201 Created." },
    { q: "Menambahkan header response memakai decorator:", options: ["@Header()", "@Meta()", "@SetHeader()", "@Res()"], answer: 0, explain: "@Header('Nama', 'Nilai')." },
  ],
  "nest-db-intro": [
    { q: "ORM berfungsi untuk:", options: ["memetakan tabel database ke objek/class", "mempercepat internet", "membuat UI", "mengganti Node.js"], answer: 0, explain: "ORM memetakan tabel ke objek agar tak menulis SQL mentah." },
    { q: "ORM resmi berbasis decorator yang umum di Nest adalah:", options: ["Prisma", "TypeORM", "Sequelize", "Mongoose"], answer: 1, explain: "TypeORM terintegrasi lewat @nestjs/typeorm (Prisma juga populer)." },
    { q: "Opsi synchronize: true pada TypeORM sebaiknya:", options: ["selalu dipakai di produksi", "hanya untuk belajar, berbahaya di produksi", "tidak pernah dipakai", "wajib untuk migration"], answer: 1, explain: "Bisa merusak data; produksi memakai migration." },
  ],
  "nest-entity": [
    { q: "Class yang mewakili satu tabel database ditandai dengan:", options: ["@Table()", "@Entity()", "@Model()", "@Schema()"], answer: 1, explain: "@Entity() mendefinisikan tabel." },
    { q: "Kolom primary key auto-increment ditandai:", options: ["@PrimaryColumn()", "@PrimaryGeneratedColumn()", "@Id()", "@Key()"], answer: 1, explain: "@PrimaryGeneratedColumn() untuk id otomatis." },
    { q: "Objek untuk mengakses data entity di service adalah:", options: ["Repository<User>", "Service<User>", "Model<User>", "Table<User>"], answer: 0, explain: "Repository<User> disuntik lewat @InjectRepository." },
  ],
  "nest-crud": [
    { q: "Menyimpan (insert/update) entity ke database memakai method:", options: ["repo.find()", "repo.save()", "repo.get()", "repo.load()"], answer: 1, explain: "repo.save() menyimpan ke database." },
    { q: "Membaca satu baris berdasarkan id memakai:", options: ["repo.findOneBy({ id })", "repo.all()", "repo.select(id)", "repo.query(id)"], answer: 0, explain: "findOneBy({ id }) mengambil satu baris." },
    { q: "Dalam pola CRUD Nest, logika penghapusan sebaiknya ada di:", options: ["controller", "service", "module", "entity"], answer: 1, explain: "Controller memetakan rute; logika di service." },
  ],
  "nest-middleware": [
    { q: "Middleware berjalan pada tahap:", options: ["setelah controller", "paling awal, sebelum controller", "hanya saat error", "setelah response"], answer: 1, explain: "Middleware jalan paling awal." },
    { q: "Agar request diteruskan ke tahap berikutnya, middleware harus memanggil:", options: ["done()", "next()", "continue()", "pass()"], answer: 1, explain: "Wajib memanggil next()." },
    { q: "Middleware kustom didaftarkan di module lewat method:", options: ["register()", "configure()", "setup()", "apply()"], answer: 1, explain: "configure(consumer) pada class yang implements NestModule." },
  ],
  "nest-guard": [
    { q: "Guard berfungsi untuk:", options: ["mengubah response", "menentukan boleh/tidaknya request lanjut", "mencatat log", "membuat tabel"], answer: 1, explain: "Guard mengizinkan atau menolak request." },
    { q: "Guard mengimplementasikan interface:", options: ["CanActivate", "PipeTransform", "NestMiddleware", "NestInterceptor"], answer: 0, explain: "CanActivate dengan method canActivate()." },
    { q: "Memasang guard pada rute memakai decorator:", options: ["@UsePipes()", "@UseGuards()", "@UseFilters()", "@Guard()"], answer: 1, explain: "@UseGuards(AuthGuard)." },
  ],
  "nest-interceptor": [
    { q: "Kelebihan interceptor dibanding middleware adalah bisa berjalan:", options: ["hanya sebelum handler", "sebelum DAN sesudah handler", "hanya saat error", "hanya di produksi"], answer: 1, explain: "Interceptor membungkus sebelum & sesudah handler." },
    { q: "Interceptor memakai pustaka:", options: ["RxJS (Observable)", "Lodash", "Axios", "Moment"], answer: 0, explain: "Memakai Observable RxJS (map, tap)." },
    { q: "Operator RxJS untuk mengubah data response adalah:", options: ["tap", "map", "filter", "merge"], answer: 1, explain: "map mengubah data; tap untuk efek samping." },
  ],
  "nest-exception": [
    { q: "Melempar error 'tidak ditemukan' memakai:", options: ["BadRequestException", "NotFoundException", "ForbiddenException", "UnauthorizedException"], answer: 1, explain: "NotFoundException otomatis menghasilkan 404." },
    { q: "BadRequestException menghasilkan status:", options: ["400", "401", "404", "500"], answer: 0, explain: "BadRequest = 400." },
    { q: "Untuk menyeragamkan format semua error, kita buat:", options: ["custom pipe", "exception filter", "middleware", "guard"], answer: 1, explain: "Exception filter (implements ExceptionFilter)." },
  ],
  "nest-config": [
    { q: "Data rahasia seperti secret JWT sebaiknya disimpan di:", options: ["langsung di kode", "file .env (environment variable)", "README", "komentar"], answer: 1, explain: "Simpan di .env, jangan di kode." },
    { q: "Modul untuk membaca konfigurasi adalah:", options: ["@nestjs/config", "@nestjs/env", "@nestjs/dotenv", "@nestjs/settings"], answer: 0, explain: "@nestjs/config menyediakan ConfigModule & ConfigService." },
    { q: "Agar .env tidak ikut ke repository, tambahkan ke:", options: ["package.json", ".gitignore", "tsconfig.json", "main.ts"], answer: 1, explain: "Masukkan .env ke .gitignore." },
  ],
  "nest-test": [
    { q: "Framework testing bawaan proyek Nest adalah:", options: ["Mocha", "Jest", "Jasmine", "Vitest"], answer: 1, explain: "Nest memakai Jest secara bawaan." },
    { q: "Fitur Nest yang membuat komponen mudah diuji adalah:", options: ["decorator", "Dependency Injection (mock mudah)", "routing", "hot-reload"], answer: 1, explain: "DI memungkinkan mengganti dependensi dengan mock." },
    { q: "Untuk mengganti repository asli dengan tiruan saat test dipakai:", options: ["useClass", "useValue: mockRepo", "useFactory saja", "import langsung"], answer: 1, explain: "provide token + useValue mock." },
  ],
  "nest-swagger": [
    { q: "Swagger/OpenAPI berguna untuk:", options: ["mempercepat database", "dokumentasi API interaktif otomatis", "menguji unit", "menyimpan rahasia"], answer: 1, explain: "Menghasilkan halaman dokumentasi API." },
    { q: "Paket untuk Swagger di Nest adalah:", options: ["@nestjs/swagger", "@nestjs/openapi", "@nestjs/docs", "swagger-nest"], answer: 0, explain: "@nestjs/swagger." },
    { q: "Mengelompokkan endpoint di dokumentasi memakai decorator:", options: ["@ApiTags()", "@ApiGroup()", "@Tag()", "@Group()"], answer: 0, explain: "@ApiTags('users') mengelompokkan endpoint." },
  ],
  "nest-best": [
    { q: "Prinsip yang benar tentang controller dan service adalah:", options: ["controller tebal, service tipis", "controller tipis, service tebal", "semua di controller", "semua di module"], answer: 1, explain: "Logika di service; controller hanya memetakan rute." },
    { q: "Membangun aplikasi untuk produksi memakai perintah:", options: ["npm run start:dev", "npm run build lalu start:prod", "npm test", "nest new"], answer: 1, explain: "build mengompilasi TS, start:prod menjalankan hasilnya." },
    { q: "Di produksi, opsi TypeORM synchronize sebaiknya:", options: ["dinyalakan", "dimatikan, gunakan migration", "diabaikan", "diacak"], answer: 1, explain: "Matikan synchronize; pakai migration agar data aman." },
  ],
};
