import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Cormorant_Garamond, Playfair_Display, Inter, Space_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vedantsinggh.github.io"),
  title: "vedantsinggh",
  description:
    "Cinematic engineering portfolio of Vedant Singh. Robotics, Autonomous Systems, High-Performance Software, Perception & AI.",
  keywords: [
    "Vedant Singh",
    "Robotics",
    "Autonomous Systems",
    "UGV-DTU",
    "Software Engineering",
    "Perception",
    "AI Systems",
  ],
  authors: [{ name: "Vedant Singh" }],
  openGraph: {
    title: "VEDANT SINGH — Engineering & Systems Portfolio",
    description: "I don't just build things. I build things that matter.",
    type: "website",
    url: "https://vedantsinggh.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#FFFFFF] text-[#0A0A0A] antialiased selection:bg-[#E10600] selection:text-[#FFFFFF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
