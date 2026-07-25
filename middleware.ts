import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth-token";

const SECRET = process.env.AUTH_SECRET || "dev-insecure-secret-change-me";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rute publik: halaman login & endpoint autentikasi.
  if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("jits_session")?.value;
  const session = token ? await verifyToken(token, SECRET) : null;

  if (!session) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  // Area admin hanya untuk role admin.
  if ((pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) && session.r !== "admin") {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Jalankan pada semua rute kecuali aset statis & berkas PWA.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|manifest.webmanifest|sw.js|robots.txt).*)"],
};
