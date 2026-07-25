import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth-token";
import { AUTH_SECRET } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("jits_session")?.value;
  const session = token ? await verifyToken(token, AUTH_SECRET) : null;
  if (!session) return NextResponse.json({ ok: false }, { status: 401 });
  return NextResponse.json({ ok: true, username: session.u, role: session.r });
}
