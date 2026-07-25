import CodeReview from "@/components/CodeReview";

const NEST_TASKS = [
  "Buat Controller 'users' dengan endpoint GET /users yang mengembalikan array user.",
  "Buat sebuah Service 'CatsService' dengan method findAll() dan suntikkan ke controller.",
  "Buat DTO CreateUserDto dengan validasi (nama wajib, email valid).",
  "Buat endpoint POST /items yang menerima body dan mengembalikannya.",
];

const NEST_STARTER = `import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string[] {
    return ['Dewi', 'Andi'];
  }
}`;

export default function NestLatihanPage() {
  return (
    <div>
      <div className="eyebrow">Latihan koding + AI</div>
      <h2 className="section-title" style={{ margin: "6px 0 4px" }}>Latihan Koding NestJS</h2>
      <p className="section-desc">
        Kerjakan tantangan atau tempel kode NestJS/TypeScript-mu, lalu minta AI menilai, menemukan bug, dan memberi
        versi perbaikannya (idiomatis NestJS).
      </p>
      <CodeReview subject="nestjs" lang="TypeScript" tasks={NEST_TASKS} starter={NEST_STARTER} storeKey="nestCode" />
    </div>
  );
}
