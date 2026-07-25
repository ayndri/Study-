import { GoogleGenerativeAI } from "@google/generative-ai";

const key = process.env.GEMINI_API_KEY;
export const geminiEnabled = Boolean(key && key.length > 0);

const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";

const client = geminiEnabled ? new GoogleGenerativeAI(key as string) : null;

export function getModel(systemInstruction?: string) {
  if (!client) return null;
  return client.getGenerativeModel({
    model: MODEL,
    systemInstruction,
  });
}
