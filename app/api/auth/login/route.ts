import { NextRequest, NextResponse } from "next/server";
import { getUserByName, createUserIfAbsent, dbEnabled } from "@/lib/db";
import { hashPassword, verifyPassword, AUTH_SECRET } from "@/lib/auth";
import { signToken } from "@/lib/auth-token";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({ ok: false, error: "Username & password wajib diisi." }, { status: 400 });
    }
    const name = String(username).trim();
    const envUser = process.env.ADMIN_USERNAME;
    const envPass = process.env.ADMIN_PASSWORD;

    let role: string | null = null;

    // 1) Admin dari environment (selalu bisa login, bahkan tanpa DB).
    if (envUser && name === envUser && password === envPass) {
      role = "admin";
      if (dbEnabled) await createUserIfAbsent(name, hashPassword(password), "admin");
    } else if (dbEnabled) {
      // 2) User dari database.
      const u = await getUserByName(name);
      if (u && verifyPassword(password, u.pass_hash)) role = u.role;
    }

    if (!role) {
      return NextResponse.json({ ok: false, error: "Username atau password salah." }, { status: 401 });
    }

    const token = await signToken({ u: name, r: role }, AUTH_SECRET, 30);
    const res = NextResponse.json({ ok: true, username: name, role });
    res.cookies.set("jits_session", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 86400,
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
