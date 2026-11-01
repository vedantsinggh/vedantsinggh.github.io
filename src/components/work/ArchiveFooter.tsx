"use client";

import React from "react";
import Link from "next/link";
import SuitEmblem from "@/components/SuitEmblem";

export default function ArchiveFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-[#0A0A0A]/10 px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 bg-white text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#0A0A0A]/10">
          {/* Identity & Colophon */}
          <div className="flex items-center gap-3.5">
            <SuitEmblem size={24} splitProgress={0} showRedTie={true} interactive={false} />
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-[#0A0A0A] uppercase font-bold">
                VEDANT SINGH
              </div>
              <div className="font-editorial text-xs text-[#0A0A0A]/55 italic mt-0.5">
                Robotics, Perception &amp; Digital Systems Archive
              </div>
            </div>
          </div>

          {/* Return Links & Actions */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase">
            <Link
              href="/?slide=2"
              className="group inline-flex items-center gap-1.5 text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors"
            >
              <span className="text-[#E10600] group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>WORK</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              TOP ↑
            </button>
          </div>
        </div>

        {/* Bottom Metadata & External Profiles */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#0A0A0A]/50 uppercase">
          <div>
            © {new Date().getFullYear()} VEDANT SINGH · VERIFIED PORTFOLIO REPOSITORY
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vedantsinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/vedantsinggh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href="mailto:vedantsinggh@gmail.com"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              EMAIL ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
