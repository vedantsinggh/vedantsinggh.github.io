"use client";

import React from "react";
import Image from "next/image";

interface IdentitySectionProps {
  isActive?: boolean;
}

export default function IdentitySection({ isActive = true }: IdentitySectionProps) {
  return (
    <section
      id="section-02"
      className="relative w-full h-full min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex items-center justify-between overflow-hidden px-10 sm:px-16 md:px-24 lg:px-32 py-16 select-none"
    >
      {/* Background Photographic Silhouette Layer — Large Man in Black Suit Overlooking Skyline */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute right-0 bottom-0 w-[65vw] sm:w-[58vw] md:w-[52vw] lg:w-[46vw] h-[85vh] sm:h-[90vh] md:h-[96vh] transition-all duration-700 ease-out ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <Image
            src="/editorial/identity-silhouette.jpg"
            alt="Vedant Singh — Black suited silhouette with red collar accent overlooking city skyline"
            fill
            priority
            className="object-cover object-bottom contrast-125 brightness-100"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Left Fade Gradient into White Canvas */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FFFFFF] to-transparent" />
        </div>
      </div>

      {/* Left Content Area: Typographic Block with generous insets */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-start pt-16 sm:pt-20">
        <div
          className={`flex flex-col items-start space-y-6 sm:space-y-8 max-w-xl transition-all duration-700 ease-out ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Horizontal Accent Line (Red Left Half, Faint Gray Right Half) */}
          <div className="flex items-center">
            <div className="w-24 sm:w-32 h-[2.5px] bg-[#E10600]" />
            <div className="w-24 sm:w-32 h-[1px] bg-[#E5E7EB]" />
          </div>

          {/* Monumental Stacked Typography */}
          <div className="space-y-0 font-sans font-black tracking-[-0.01em] uppercase leading-[0.88] select-none text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]">
            <h2 className="text-[#0A0A0A] block">
              ENGINEER
            </h2>
            <h2 className="text-[#E10600] block">
              BUILDER
            </h2>
            <h2 className="text-[#0A0A0A] block">
              DEVELOPER
            </h2>
          </div>

          {/* Supporting Disciplines Stacked Vertically */}
          <div className="space-y-1.5 pt-2 sm:pt-4">
            <div className="font-mono text-xs sm:text-sm tracking-[0.35em] text-[#0A0A0A] uppercase font-medium">
              ROBOTICS
            </div>
            <div className="font-mono text-xs sm:text-sm tracking-[0.35em] text-[#0A0A0A] uppercase font-medium">
              AI
            </div>
            <div className="font-mono text-xs sm:text-sm tracking-[0.35em] text-[#0A0A0A] uppercase font-medium">
              SYSTEMS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
