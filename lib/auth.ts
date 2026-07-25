// Hashing password (Node only) — dipakai di API route (runtime nodejs).
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export function hashPassword(pw: string): string {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(pw, salt, 64).toString("hex");
  return `${salt}:${derived}`;
}

export function verifyPassword(pw: string, stored: string): boolean {
  try {
    const [salt, derived] = stored.split(":");
    if (!salt || !derived) return false;
    const h = scryptSync(pw, salt, 64);
    const d = Buffer.from(derived, "hex");
    return h.length === d.length && timingSafeEqual(h, d);
  } catch {
    return false;
  }
}

export const AUTH_SECRET = process.env.AUTH_SECRET || "dev-insecure-secret-change-me";
