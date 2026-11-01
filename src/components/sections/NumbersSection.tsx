"use client";

import React from "react";
import Image from "next/image";
import { numbersData } from "@/data/numbers";

interface NumbersSectionProps {
  isActive?: boolean;
}

export default function NumbersSection({ isActive = true }: NumbersSectionProps) {
  return (
    <section
      id="section-04"
      className="relative w-full h-full min-h-screen bg-[#FFFFFF] text-[#0A0A0A] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Header with generous insets */}
      <div
        className={`w-full px-10 sm:px-16 md:px-24 lg:px-32 pt-28 sm:pt-32 md:pt-36 z-10 transition-all duration-700 ease-out ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase font-light text-[#0A0A0A]">
          NUMBERS
        </h2>
        <div className="w-8 h-[2px] bg-[#E10600] mt-2" />
      </div>

      {/* Main Magazine Numbers Spread */}
      <div
        className={`w-full max-w-7xl mx-auto px-10 sm:px-16 md:px-24 lg:px-32 py-8 sm:py-12 z-10 transition-all duration-700 delay-100 ease-out ${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0 items-start">
          {numbersData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-3 sm:px-6 md:px-8 ${
                index < numbersData.length - 1
                  ? "md:border-r md:border-[#E10600]"
                  : ""
              }`}
            >
              {/* Massive Editorial Serif Number */}
              <span className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-none tracking-tight text-[#0A0A0A]">
                {stat.value}
              </span>

              {/* Clean Labels */}
              <div className="mt-3 sm:mt-4 space-y-1">
                <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#0A0A0A] font-semibold uppercase">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-[#0A0A0A]/60 uppercase">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Atmospheric Faded Background Landscape Layer — Seamlessly Dissolves into White */}
      <div
        className="relative w-full h-[36vh] sm:h-[42vh] md:h-[48vh] mt-auto pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          maskImage:
            "linear-gradient(to top, black 25%, rgba(0,0,0,0.5) 60%, transparent 100%)",
        }}
      >
        <Image
          src="/editorial/numbers-landscape.jpg"
          alt="Atmospheric monochrome landscape with standing suited silhouette"
          fill
          className="object-cover object-top contrast-115 grayscale opacity-35"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
