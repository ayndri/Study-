import { NextRequest, NextResponse } from "next/server";
import { saveAttempt, bestScores, dbEnabled } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!dbEnabled) {
    // DB nonaktif — klien tetap menyimpan di localStorage.
    return NextResponse.json({ ok: true, persisted: false });
  }
  try {
    const { clientId, section, score, total } = await req.json();
    if (!clientId || !section || typeof score !== "number" || typeof total !== "number") {
      return NextResponse.json({ ok: false, error: "Data tidak lengkap." }, { status: 400 });
    }
    await saveAttempt(String(clientId), String(section), score, total);
    return NextResponse.json({ ok: true, persisted: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  if (!dbEnabled) return NextResponse.json({ ok: true, scores: null });
  const clientId = req.nextUrl.searchParams.get("clientId");
  if (!clientId) return NextResponse.json({ ok: false, error: "clientId wajib." }, { status: 400 });
  try {
    const scores = await bestScores(clientId);
    return NextResponse.json({ ok: true, scores });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
