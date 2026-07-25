import { ImageResponse } from "next/og";

// Ikon untuk "Add to Home Screen" di iOS (di-generate sebagai PNG).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 116,
          fontWeight: 700,
        }}
      >
        J
      </div>
    ),
    { ...size }
  );
}
