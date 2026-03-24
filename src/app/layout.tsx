import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gloria_Hallelujah, Inter_Tight } from "next/font/google";

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
  title: "Lab Portfolio",
  description: "Systems | Robotics | AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
		<body className={`${gloria.variable} ${inter.variable}`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
