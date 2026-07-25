import { NextRequest, NextResponse } from "next/server";
import { listUsers, createUser, deleteUser, dbEnabled } from "@/lib/db";
import { hashPassword, AUTH_SECRET } from "@/lib/auth";
import { verifyToken } from "@/lib/auth-token";

export const runtime = "nodejs";

async function requireAdmin(req: NextRequest) {
  const token = req.cookies.get("jits_session")?.value;
  const s = token ? await verifyToken(token, AUTH_SECRET) : null;
  return s && s.r === "admin" ? s : null;
}

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  if (!dbEnabled) return NextResponse.json({ ok: false, error: "DATABASE_URL belum diisi." }, { status: 503 });
  try {
    const users = await listUsers();
    return NextResponse.json({ ok: true, users });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : "error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  if (!dbEnabled) return NextResponse.json({ ok: false, error: "DATABASE_URL belum diisi." }, { status: 503 });
  try {
    const { username, password, role } = await req.json();
    const name = String(username || "").trim();
    if (!name || !password || String(password).length < 4) {
      return NextResponse.json({ ok: false, error: "Username wajib & password minimal 4 karakter." }, { status: 400 });
    }
    await createUser(name, hashPassword(String(password)), role === "admin" ? "admin" : "user");
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : "error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  if (!dbEnabled) return NextResponse.json({ ok: false, error: "DATABASE_URL belum diisi." }, { status: 503 });
  try {
    const username = req.nextUrl.searchParams.get("username");
    if (!username) return NextResponse.json({ ok: false, error: "username wajib." }, { status: 400 });
    await deleteUser(username);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : "error" }, { status: 500 });
  }
}
