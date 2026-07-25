import { neon } from "@neondatabase/serverless";

// Klien Neon dibuat lazy. Jika DATABASE_URL kosong, semua fungsi mengembalikan
// null / no-op sehingga aplikasi tetap berjalan (fallback ke localStorage di klien).

const url = process.env.DATABASE_URL;
export const dbEnabled = Boolean(url && url.length > 0);

const sql = dbEnabled ? neon(url as string) : null;

let schemaReady = false;
async function ensureSchema() {
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
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`SELECT username, pass_hash, role FROM users WHERE username = ${username}`;
  return (rows as UserRow[])[0] || null;
}

export async function createUser(username: string, passHash: string, role = "user") {
  if (!sql) return false;
  await ensureSchema();
  await sql`
    INSERT INTO users (username, pass_hash, role) VALUES (${username}, ${passHash}, ${role})
    ON CONFLICT (username) DO UPDATE SET pass_hash = EXCLUDED.pass_hash, role = EXCLUDED.role`;
  return true;
}

export async function createUserIfAbsent(username: string, passHash: string, role = "user") {
  if (!sql) return false;
  await ensureSchema();
  await sql`
    INSERT INTO users (username, pass_hash, role) VALUES (${username}, ${passHash}, ${role})
    ON CONFLICT (username) DO NOTHING`;
  return true;
}

export async function listUsers() {
  if (!sql) return [];
  await ensureSchema();
  return await sql`SELECT username, role, created_at FROM users ORDER BY created_at`;
}

export async function deleteUser(username: string) {
  if (!sql) return false;
  await ensureSchema();
  await sql`DELETE FROM users WHERE username = ${username}`;
  return true;
}

export async function saveKV(clientId: string, entries: Record<string, unknown>) {
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
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`SELECT k, val FROM progress_kv WHERE client_id = ${clientId}`;
  const out: Record<string, unknown> = {};
  for (const r of rows as { k: string; val: unknown }[]) out[r.k] = r.val;
  return out;
}

export async function saveAttempt(clientId: string, section: string, score: number, total: number) {
  if (!sql) return false;
  await ensureSchema();
  await sql`INSERT INTO attempts (client_id, section, score, total) VALUES (${clientId}, ${section}, ${score}, ${total})`;
  return true;
}

export async function bestScores(clientId: string) {
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
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`
    INSERT INTO essays (client_id, prompt, content, overall, feedback)
    VALUES (${clientId}, ${prompt}, ${content}, ${overall}, ${JSON.stringify(feedback)})
    RETURNING id, created_at`;
  return (rows as { id: number; created_at: string }[])[0];
}

export async function listEssays(clientId: string) {
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`
    SELECT id, prompt, overall, content, feedback, created_at
    FROM essays WHERE client_id = ${clientId}
    ORDER BY created_at DESC LIMIT 25`;
  return rows;
}
