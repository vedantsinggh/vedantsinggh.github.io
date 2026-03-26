import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gloria_Hallelujah, Inter_Tight } from "next/font/google";
import { Space_Mono, DM_Sans } from 'next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloria",
});

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Vedant Singh",
  description: "Systems | Robotics | AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
	<html className={`${spaceMono.variable} ${dmSans.variable}`}>
		<body className={`${gloria.variable} ${inter.variable}`}>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
