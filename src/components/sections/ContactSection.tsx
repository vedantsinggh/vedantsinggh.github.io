"use client";

import React from "react";
import Image from "next/image";
import SuitEmblem from "../SuitEmblem";

interface ContactSectionProps {
  isActive?: boolean;
  onReturnToTop?: () => void;
}

export default function ContactSection({
  isActive = true,
  onReturnToTop,
}: ContactSectionProps) {
  return (
    <section
      id="section-05"
      className="relative w-full h-full min-h-screen bg-[#111111] text-white flex flex-col justify-between overflow-hidden px-10 sm:px-16 md:px-24 lg:px-32 pt-28 sm:pt-32 md:pt-36 pb-8 select-none"
    >
      {/* Top Header with generous inset */}
      <div
        className={`w-full z-10 transition-all duration-700 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase font-light text-white/90">
          CONTACT
        </h2>
        <div className="w-8 h-[2px] bg-[#E10600] mt-2" />
      </div>

      {/* Main Grid: Statement Left (~45%), Handshake Artwork Right (~55%) */}
      <div className="w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-2 z-10">
        {/* Left Column: Monumental Statement & Clean Direct Links */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10 transition-all duration-700 delay-100 ease-out ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
        >
          <div className="space-y-1">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-normal tracking-tight uppercase leading-[0.92] text-white">
              LET&apos;S
              <br />
              MAKE
              <br />
              SOMETHING<br /><span className="text-[#E10600]">TOGETHER.</span>
            </h2>
          </div>

          {/* Minimal Direct Links */}
          <div className="flex items-stretch gap-5 pl-1 pt-2">
            <div className="w-[2px] bg-[#E10600] self-stretch" />

            <div className="flex flex-col space-y-3 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
              <a
                href="https://github.com/vedantsinggh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/vedantsinggh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:vedantsinggh@gmail.com"
                className="text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200"
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Handshake Artwork Seamlessly Rendered (No Box Border) */}
        <div
          className={`lg:col-span-6 flex justify-center lg:justify-end items-center relative transition-all duration-700 delay-200 ease-out ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="relative w-full max-w-[480px] h-[38vh] sm:h-[48vh] md:h-[56vh] lg:h-[64vh] pointer-events-none">
            <Image
              src="/editorial/contact-handshake.png"
              alt="Two men in tailored suits shaking hands in white outline and red tie accent"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Minimal Colophon */}
      <div className="w-full pt-4 flex items-center justify-between border-t border-white/10 z-10">
        <div className="flex items-center gap-3">
          <SuitEmblem
            size={28}
            splitProgress={0}
            showRedTie={true}
            interactive={true}
            onClick={onReturnToTop}
          />
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-white/40 uppercase">
            VEDANT SINGH © {new Date().getFullYear()}
          </span>
        </div>

        <button
          onClick={onReturnToTop}
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-white/50 hover:text-[#E10600] uppercase transition-colors"
        >
          TOP ↑
        </button>
      </div>
    </section>
  );
}
