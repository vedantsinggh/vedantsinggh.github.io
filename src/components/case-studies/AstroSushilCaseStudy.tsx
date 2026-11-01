"use client";

import React from "react";
import Image from "next/image";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { CaseStudyDetail } from "@/data/caseStudies";

interface AstroSushilCaseStudyProps {
  study: CaseStudyDetail;
}

export default function AstroSushilCaseStudy({ study }: AstroSushilCaseStudyProps) {
  const visualShowcase = (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      {/* Primary Astro Sushil Mobile Showcase Stage */}
      <div className="w-full aspect-[16/9] min-h-[380px] lg:min-h-[460px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
        <Image
          src="/assets/astro-sushil-hero.png"
          alt="Astro Sushil Vedic Astrology Platform — Native Flutter Mobile Suite and Next.js Monorepo"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs font-mono text-xs tracking-wider uppercase text-white bg-[#E10600] font-semibold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Coming Soon
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider drop-shadow-sm">
          <span>Astro Sushil Platform Suite</span>
          <span className="text-[#FF8888]">Native Flutter &amp; Next.js</span>
        </div>
      </div>

      {/* Verified Subsystem Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#555555]">
        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Ephemeris Target</div>
          <div className="font-medium text-[#111111] text-sm">&lt; 50 ms Engine</div>
          <div className="text-xs text-[#666666]">Swiss Ephemeris C-bindings</div>
        </div>

        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Chart Rendering</div>
          <div className="font-medium text-[#111111] text-sm">60 FPS Canvas</div>
          <div className="text-xs text-[#666666]">North &amp; South Indian Kundalis</div>
        </div>

        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Availability</div>
          <div className="font-medium text-[#E10600] text-sm">Coming Soon</div>
          <div className="text-xs text-[#666666]">iOS, Android &amp; Next.js Web</div>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── THE COMPUTATIONAL CHALLENGE (1-2 sentences) ──────────────────── */}
      <section className="space-y-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          The Problem
        </h2>
        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
          Commercial astrological platforms rely on third-party cloud APIs that introduce 800ms+ latency, fail without internet connectivity, and approximate planetary longitudes. Rendering complex geometric birth charts on mobile devices frequently causes UI frame drops and sluggish pan-and-zoom interactions.
        </p>
      </section>

      {/* ─── ENGINEERING HIGHLIGHTS (4 crisp bullets) ──────────────────── */}
      <section className="space-y-3 pt-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Engineering Highlights
        </h2>
        <ul className="space-y-3 text-base sm:text-[17px] text-[#222222] leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Offline Swiss Ephemeris C-Bindings:</strong> Compiled native C ephemeris libraries for on-device calculation of high-precision planetary longitudes, house cusps, and zodiac positions in under 50ms without network round-trips.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Hardware-Accelerated 60 FPS Canvas:</strong> Developed custom Flutter canvas painters dynamically rendering North and South Indian Kundali layouts with smooth touch zoom and multi-house transition animations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Type-Safe Monorepo Architecture:</strong> Unified the Flutter mobile client with a Next.js administrative workstation using shared TypeScript and Dart data contracts over Prisma ORM and PostgreSQL.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Production Consultation Workflows:</strong> Built automated appointment scheduling, payment webhooks, and automated PDF astrological report synthesis.
            </span>
          </li>
        </ul>
      </section>

      {/* ─── COMPACT OUTCOMES ─────────────────────────────────────────────── */}
      <section className="space-y-3 pt-2 border-t border-[#E5E5E5]">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Results &amp; Release Status
        </h2>
        <p className="text-base sm:text-[17px] text-[#333333] leading-relaxed">
          Delivered sub-50ms offline planetary computations and fluid 60 FPS Kundali rendering across iOS, Android, and web platforms. The client application suite is currently undergoing pre-launch staging.
        </p>

        <div className="pt-2">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAFAFA] border border-[#E5E5E5] text-[#111111] font-mono text-xs tracking-wider uppercase rounded-xs">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
            <span>Public Release Coming Soon</span>
          </span>
        </div>
      </section>
    </ProjectDetailLayout>
  );
}
