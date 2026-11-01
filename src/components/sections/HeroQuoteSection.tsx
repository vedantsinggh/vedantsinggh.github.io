"use client";

import React, { useEffect, useState } from "react";
import SuitEmblem from "../SuitEmblem";
import { heroQuotes, HeroQuote } from "@/data/quotes";

interface HeroQuoteSectionProps {
  introFinished?: boolean;
  onAdvance?: () => void;
  isActive?: boolean;
}

export default function HeroQuoteSection({
  introFinished = true,
  onAdvance,
  isActive = true,
}: HeroQuoteSectionProps) {
  // Default to quote 9 (Good enough was never the objective) for initial SSR render
  const [selectedQuote, setSelectedQuote] = useState<HeroQuote>(heroQuotes[8]);

  // Pick a random quote on refresh / mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * heroQuotes.length);
      setSelectedQuote(heroQuotes[randomIndex]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="section-01"
      className="relative w-full h-full min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col justify-between items-center px-10 sm:px-16 md:px-24 lg:px-32 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 select-none overflow-hidden"
    >
      {/* Top breathing space */}
      <div className="w-full h-2 sm:h-6" />

      {/* Center: Monumental Quote with generous inset spacing */}
      <div
        className={`w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto transition-all duration-700 ease-out ${
          isActive && introFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <blockquote className="font-editorial text-[2.75rem] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.25rem] leading-[1.08] tracking-[-0.03em] font-normal text-[#0A0A0A]">
          <span className="inline-block text-[#0A0A0A] mr-1 sm:mr-2 opacity-30 select-none">“</span>
          {selectedQuote.lines.map((line, lineIdx) => (
            <React.Fragment key={lineIdx}>
              {lineIdx > 0 && <br />}
              {line.map((token, tokenIdx) => (
                <span
                  key={tokenIdx}
                  className={
                    token.isAccent
                      ? "text-[#E10600] font-normal italic"
                      : ""
                  }
                >
                  {token.text}
                </span>
              ))}
            </React.Fragment>
          ))}
          <span className="text-[#0A0A0A] opacity-30 select-none">”</span>
        </blockquote>
      </div>

      {/* Bottom: Signature Centered Suit Emblem & Scroll Action */}
      <div
        onClick={onAdvance}
        className="flex flex-col items-center justify-center gap-3 cursor-pointer group"
      >
        <SuitEmblem
          size={72}
          splitProgress={0}
          showRedTie={true}
          interactive={true}
        />
        <div className="w-[1px] h-4 bg-gradient-to-b from-[#0A0A0A]/30 to-transparent group-hover:h-6 transition-all duration-300" />
      </div>
    </section>
  );
}
