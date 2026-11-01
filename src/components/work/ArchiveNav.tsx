"use client";

import React from "react";
import Link from "next/link";
import { WORK_CATEGORIES } from "@/data/workCategories";

interface ArchiveNavProps {
  currentCategory?: string;
  isIndex?: boolean;
}

export default function ArchiveNav({ currentCategory, isIndex = false }: ArchiveNavProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#0A0A0A]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-16 lg:px-24 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Return to Homepage Work Section */}
        <div className="flex items-center shrink-0">
          <Link
            href="/?slide=2"
            className="group inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#0A0A0A]/70 hover:text-[#0A0A0A] uppercase transition-colors"
          >
            <span className="text-[#E10600] transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span className="font-medium whitespace-nowrap">WORK</span>
          </Link>
        </div>

        {/* Right: Clean Discipline Navigation Tabs (Horizontally scrollable on mobile) */}
        <nav
          aria-label="Archive disciplines navigation"
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1 pl-2"
        >
          {/* All Work link */}
          <Link
            href="/work"
            className={`px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase transition-all rounded-xs shrink-0 whitespace-nowrap ${
              isIndex
                ? "bg-[#0A0A0A] text-white font-bold shadow-xs"
                : "text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/5"
            }`}
          >
            ALL
          </Link>

          {WORK_CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat.id;
            return (
              <Link
                key={cat.id}
                href={`/work/${cat.id}`}
                className={`px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase transition-all rounded-xs shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0A0A0A] text-white font-bold shadow-xs"
                    : "text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/5"
                }`}
              >
                <span>{cat.shortTitle}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
