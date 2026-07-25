import { ImageResponse } from "next/og";

// Favicon tab peramban (di-generate sebagai PNG oleh Next.js).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg,#1a2542,#2b3757)",
          color: "#E1B45E",
          fontSize: 24,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        J
      </div>
    ),
    { ...size }
  );
}
