import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jalur ITS — TOEFL ITP & Beasiswa LPDP",
    short_name: "Jalur ITS",
    description: "Belajar TOEFL ITP & persiapan beasiswa LPDP menuju S2 Teknik Informatika ITS.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#141b2e",
    lang: "id",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
