"use client";

import React from "react";
import SuitEmblem from "./SuitEmblem";

interface SectionIndicatorProps {
  currentSlide: number; // 0 to 4
  onLogoClick?: () => void;
  onNavigate?: (slideIndex: number) => void;
}

// Dark slides: 4 (Contact) -> White text & light dots
// Light / Warm slides: 0 (Hero), 1 (Identity), 2 (Work), 3 (Numbers) -> Black text & dark dots
const DARK_SLIDES = new Set([4]);

export default function SectionIndicator({
  currentSlide = 0,
  onLogoClick,
  onNavigate,
}: SectionIndicatorProps) {
  const isDarkSlide = DARK_SLIDES.has(currentSlide);
  // Show header (Vedant Singh name & emblem) only on Slide 1 and Slide 2 (index 0 and 1)
  const isHeaderVisible = currentSlide <= 1;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-colors duration-500 flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 pt-8 sm:pt-10 md:pt-11 ${
        isDarkSlide ? "text-white" : "text-[#0A0A0A]"
      }`}
      style={{ paddingTop: "max(32px, env(safe-area-inset-top, 32px))" }}
    >
      {/* Left: VEDANT SINGH & EMBLEM (visible only on Slide 1 and Slide 2) */}
      <div
        className={`transition-all duration-300 ease-out ${
          isHeaderVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        <button
          onClick={onLogoClick}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E10600] rounded"
          aria-label="Vedant Singh — Return to hero"
          tabIndex={isHeaderVisible ? 0 : -1}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105">
            <SuitEmblem
              size={32}
              splitProgress={0}
              showRedTie={true}
              interactive={false}
            />
          </div>

          <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] uppercase font-medium">
            VEDANT SINGH
          </span>
        </button>
      </div>

      {/* Center: 5 Minimal Dot Navigation Indicators */}
      <nav
        aria-label="Slide navigation"
        className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 sm:gap-3"
      >
        {[0, 1, 2, 3, 4].map((index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={index}
              onClick={() => onNavigate && onNavigate(index)}
              className="p-1 group focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#E10600] scale-125"
                    : isDarkSlide
                    ? "bg-white/30 group-hover:bg-white/70"
                    : "bg-[#0A0A0A]/25 group-hover:bg-[#0A0A0A]/60"
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Right spacer for symmetrical centering without top-right indicator */}
      <div className="w-7 sm:w-8" aria-hidden="true" />
    </header>
  );
}
