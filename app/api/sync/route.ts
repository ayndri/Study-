import { NextRequest, NextResponse } from "next/server";
import { saveKV, loadKV, dbEnabled } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!dbEnabled) {
    return NextResponse.json(
      { ok: false, error: "Penyimpanan cloud belum aktif (DATABASE_URL belum diisi)." },
      { status: 503 }
    );
  }
  try {
    const { clientId, data } = await req.json();
    if (!clientId || typeof data !== "object" || data === null) {
      return NextResponse.json({ ok: false, error: "Data tidak lengkap." }, { status: 400 });
    }
    await saveKV(String(clientId), data as Record<string, unknown>);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  if (!dbEnabled) {
    return NextResponse.json({ ok: false, error: "Penyimpanan cloud belum aktif." }, { status: 503 });
  }
  const clientId = req.nextUrl.searchParams.get("clientId");
  if (!clientId) return NextResponse.json({ ok: false, error: "clientId wajib." }, { status: 400 });
  try {
    const data = await loadKV(clientId);
    return NextResponse.json({ ok: true, data: data || {} });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
