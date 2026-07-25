// Token sesi bertanda-tangan HMAC-SHA256 (Web Crypto) — aman dipakai di
// Edge middleware maupun Node API route. Format: base64url(payload).base64url(sig)

const enc = new TextEncoder();
const dec = new TextDecoder();

function bytesToB64url(buf: ArrayBuffer | Uint8Array): string {
  const b = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlToBytes(str: string): Uint8Array {
  const s = str.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(s);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}
const encodeStr = (s: string) => bytesToB64url(enc.encode(s));
const decodeStr = (s: string) => dec.decode(b64urlToBytes(s));

async function hmac(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return bytesToB64url(sig);
}

export type Session = { u: string; r: string };

export async function signToken(payload: Session, secret: string, days = 30): Promise<string> {
  const body = { ...payload, exp: Date.now() + days * 86400000 };
  const p = encodeStr(JSON.stringify(body));
  const sig = await hmac(p, secret);
  return `${p}.${sig}`;
}

export async function verifyToken(token: string, secret: string): Promise<Session | null> {
  const dot = token.indexOf(".");
  if (dot < 0) return null;
  const p = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(p, secret);
  if (sig !== expected) return null;
  try {
    const body = JSON.parse(decodeStr(p)) as Session & { exp: number };
    if (typeof body.exp === "number" && body.exp > Date.now()) return { u: body.u, r: body.r };
  } catch {
    /* payload rusak */
  }
  return null;
}
