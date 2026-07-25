import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

// Klien Neon dibuat BENAR-BENAR lazy: neon() baru dipanggil saat ada query
// pertama (di runtime), bukan saat modul di-import. Ini penting agar proses
// build Next.js (yang meng-import route) tidak gagal ketika DATABASE_URL kosong
// atau salah format. Jika DATABASE_URL tidak ada/invalid, semua fungsi
// mengembalikan null / no-op sehingga aplikasi tetap berjalan (klien memakai
// localStorage sebagai fallback).

// Rapikan nilai env yang sering salah tempel: spasi/baris baru di ujung,
// tanda kutip pembungkus, atau awalan "psql ".
function cleanUrl(raw: string | undefined): string {
  if (!raw) return "";
  let u = raw.trim();
  u = u.replace(/^psql\s+/i, "");
  u = u.replace(/^['"]+|['"]+$/g, "");
  return u.trim();
}

const url = cleanUrl(process.env.DATABASE_URL);
export const dbEnabled = /^postgres(ql)?:\/\//i.test(url);

// Memo klien: undefined = belum dicoba, null = tidak tersedia/gagal.
let _sql: NeonQueryFunction<false, false> | null | undefined;
function getSql(): NeonQueryFunction<false, false> | null {
  if (_sql !== undefined) return _sql;
  if (!dbEnabled) {
    _sql = null;
    return _sql;
  }
  try {
    _sql = neon(url);
  } catch (e) {
    console.error("DATABASE_URL tidak valid — DB dinonaktifkan:", (e as Error).message);
    _sql = null;
  }
  return _sql;
}

let schemaReady = false;
async function ensureSchema() {
  const sql = getSql();
  if (!sql || schemaReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS attempts (
      id BIGSERIAL PRIMARY KEY,
      client_id TEXT NOT NULL,
      section TEXT NOT NULL,
      score INT NOT NULL,
      total INT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS essays (
      id BIGSERIAL PRIMARY KEY,
      client_id TEXT NOT NULL,
      prompt TEXT,
      content TEXT NOT NULL,
      overall INT,
      feedback JSONB,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS progress_kv (
      client_id TEXT NOT NULL,
      k TEXT NOT NULL,
      val JSONB,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      PRIMARY KEY (client_id, k)
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id BIGSERIAL PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      pass_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  schemaReady = true;
}

export type UserRow = { username: string; pass_hash: string; role: string };

export async function getUserByName(username: string): Promise<UserRow | null> {
  const sql = getSql();
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`SELECT username, pass_hash, role FROM users WHERE username = ${username}`;
  return (rows as UserRow[])[0] || null;
}

export async function createUser(username: string, passHash: string, role = "user") {
  const sql = getSql();
  if (!sql) return false;
  await ensureSchema();
  await sql`
    INSERT INTO users (username, pass_hash, role) VALUES (${username}, ${passHash}, ${role})
    ON CONFLICT (username) DO UPDATE SET pass_hash = EXCLUDED.pass_hash, role = EXCLUDED.role`;
  return true;
}

export async function createUserIfAbsent(username: string, passHash: string, role = "user") {
  const sql = getSql();
  if (!sql) return false;
  await ensureSchema();
  await sql`
    INSERT INTO users (username, pass_hash, role) VALUES (${username}, ${passHash}, ${role})
    ON CONFLICT (username) DO NOTHING`;
  return true;
}

export async function listUsers() {
  const sql = getSql();
  if (!sql) return [];
  await ensureSchema();
  return await sql`SELECT username, role, created_at FROM users ORDER BY created_at`;
}

export async function deleteUser(username: string) {
  const sql = getSql();
  if (!sql) return false;
  await ensureSchema();
  await sql`DELETE FROM users WHERE username = ${username}`;
  return true;
}

export async function saveKV(clientId: string, entries: Record<string, unknown>) {
  const sql = getSql();
  if (!sql) return false;
  await ensureSchema();
  for (const [k, v] of Object.entries(entries)) {
    await sql`
      INSERT INTO progress_kv (client_id, k, val)
      VALUES (${clientId}, ${k}, ${JSON.stringify(v)}::jsonb)
      ON CONFLICT (client_id, k) DO UPDATE SET val = EXCLUDED.val, updated_at = now()`;
  }
  return true;
}

export async function loadKV(clientId: string) {
  const sql = getSql();
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`SELECT k, val FROM progress_kv WHERE client_id = ${clientId}`;
  const out: Record<string, unknown> = {};
  for (const r of rows as { k: string; val: unknown }[]) out[r.k] = r.val;
  return out;
}

export async function saveAttempt(clientId: string, section: string, score: number, total: number) {
  const sql = getSql();
  if (!sql) return false;
  await ensureSchema();
  await sql`INSERT INTO attempts (client_id, section, score, total) VALUES (${clientId}, ${section}, ${score}, ${total})`;
  return true;
}

export async function bestScores(clientId: string) {
  const sql = getSql();
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`
    SELECT section, MAX(ROUND(score::numeric * 100 / total)) AS pct
    FROM attempts WHERE client_id = ${clientId} GROUP BY section`;
  const out: Record<string, number> = {};
  for (const r of rows as { section: string; pct: number }[]) out[r.section] = Number(r.pct);
  return out;
}

export async function saveEssay(
  clientId: string,
  prompt: string,
  content: string,
  overall: number | null,
  feedback: unknown
) {
  const sql = getSql();
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`
    INSERT INTO essays (client_id, prompt, content, overall, feedback)
    VALUES (${clientId}, ${prompt}, ${content}, ${overall}, ${JSON.stringify(feedback)})
    RETURNING id, created_at`;
  return (rows as { id: number; created_at: string }[])[0];
}

export async function listEssays(clientId: string) {
  const sql = getSql();
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`
    SELECT id, prompt, overall, content, feedback, created_at
    FROM essays WHERE client_id = ${clientId}
    ORDER BY created_at DESC LIMIT 25`;
  return rows;
}
