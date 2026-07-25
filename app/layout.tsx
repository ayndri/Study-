import type { Metadata, Viewport } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";
import PwaRegister from "@/components/PwaRegister";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jalur ITS — TOEFL ITP & Beasiswa LPDP",
  description:
    "Aplikasi belajar TOEFL ITP dan persiapan beasiswa LPDP menuju S2 Teknik Informatika ITS.",
  appleWebApp: { capable: true, title: "Jalur ITS", statusBarStyle: "default" },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#141b2e",
};

// Set tema sebelum paint untuk menghindari kedip (FOUC).
const themeScript = `(function(){try{var t=localStorage.getItem('jalurits_theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Shell>{children}</Shell>
        <PwaRegister />
      </body>
    </html>
  );
}
