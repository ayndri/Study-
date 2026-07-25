import { NextRequest, NextResponse } from "next/server";
import { listEssays, dbEnabled } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  if (!dbEnabled) {
    return NextResponse.json({ ok: false, error: "Penyimpanan cloud belum aktif (DATABASE_URL belum diisi)." }, { status: 503 });
  }
  const clientId = req.nextUrl.searchParams.get("clientId");
  if (!clientId) return NextResponse.json({ ok: false, error: "clientId wajib." }, { status: 400 });
  try {
    const rows = await listEssays(clientId);
    return NextResponse.json({ ok: true, essays: rows || [] });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
