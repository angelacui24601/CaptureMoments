import type { Metadata } from "next";
import { Instrument_Serif, Barlow } from "next/font/google";
import "./globals.css";

// Load Instrument Serif (italic only — used for headings via --font-heading CSS var)
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Load Barlow (weights 300–600 — used for body text via --font-body CSS var)
const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CaptureMoments",
    default: "CaptureMoments Photography",
  },
  description:
    "Professional graduation photography services. Capture your milestone with stunning portraits.",
};

// Root layout injects both font CSS-variable classes onto <html>.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
