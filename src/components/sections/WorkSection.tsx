"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WorkSectionProps {
  isActive?: boolean;
}

interface SecondaryProject {
  slug: string;
  category: string;
  title: string;
  description: string;
  href: string;
  isComingSoon?: boolean;
}

const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    slug: "astro-sushil",
    category: "App Development",
    title: "Astro Sushil",
    description:
      "Production Vedic astrology platform with sub-50ms Swiss Ephemeris engine and custom 60 FPS mobile canvas.",
    href: "/work/app-dev/astro-sushil",
    isComingSoon: true,
  },
  {
    slug: "avni",
    category: "Robotics",
    title: "Avni Rover",
    description:
      "Autonomous ground vehicle with custom inverted-V suspension, galvanic CAN-FD bus, and deterministic 11.8ms ROS 2 control loop.",
    href: "/work/robotics/avni",
  },
  {
    slug: "agni",
    category: "Research",
    title: "AGNI Fusion",
    description:
      "Hybrid Confidence-Adaptive Fusion (HCAF) reducing localization drift by 32% under environmental uncertainty (IEEE ICCE).",
    href: "/work/robotics/agni",
  },
  {
    slug: "forgeos",
    category: "AI & Perception",
    title: "ForgeOS (FlawCode)",
    description:
      "Autonomous multi-agent software engineering OS with deterministic Hermes state machine and sandboxed Docker tool execution.",
    href: "/work/ai/forgeos",
  },
];

export default function WorkSection({ isActive = true }: WorkSectionProps) {
  return (
    <section
      id="section-03"
      className="relative w-full h-full min-h-screen bg-white text-[#111111] flex flex-col justify-between overflow-y-auto lg:overflow-hidden select-none"
    >
      {/* ─── 1. WORK HEADING (Top left, editorial serif, compact 70-90px) ─── */}
      <div
        className={`w-full px-6 sm:px-8 lg:px-8 pt-7 lg:pt-8 pb-2 shrink-0 transition-all duration-700 ease-out z-10 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[46px] font-normal text-[#111111] tracking-tight leading-none">
          Work
        </h2>
      </div>

      {/* ─── 2. MAIN COMPOSITION (Full-width two-column layout: 62% / 38%) ── */}
      <div
        id="work-main-grid"
        className={`w-full flex-1 px-6 sm:px-8 lg:px-8 pt-2 pb-6 sm:pb-7 lg:pb-8 flex flex-col lg:grid lg:grid-cols-[62fr_38fr] gap-8 lg:gap-10 xl:gap-12 min-h-0 z-10 transition-all duration-700 delay-100 ease-out ${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"
        }`}
      >
        {/* ─── LEFT COLUMN: DOMINANT FEATURED PROJECT (62% width) ─────────── */}
        <div
          id="work-featured-project"
          className="flex flex-col justify-between shrink-0 lg:shrink lg:h-full space-y-3 lg:space-y-0"
        >
          {/* Large SEVA First Showcase Image (occupies ~60-65% content height, 16:9 ratio) */}
          <div
            id="work-featured-image"
            className="w-full aspect-[16/9] max-h-[515px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs overflow-hidden relative group shadow-2xs shrink-0"
          >
            <Image
              src="/assets/seva-hero.png"
              alt="SEVA First Innovation Challenge — Official Platform Showcase"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </div>

          {/* Project Title, Concise Description, and Action Links */}
          <div className="pt-2 lg:pt-3.5 flex flex-col justify-between lg:flex-1 space-y-2">
            <div className="space-y-1">
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#111111] tracking-tight leading-tight">
                SEVA First National Platform
              </h3>
              <p className="font-sans text-sm sm:text-[15px] lg:text-base text-[#444444] leading-relaxed max-w-3xl">
                High-concurrency educational volunteer and assessment architecture serving 50,000+ registered students across 28 Indian states, handling simultaneous deadline traffic spikes with 180ms response times. Winner of Smart India Hackathon among 1,500+ institutions.
              </p>
            </div>

            {/* Clear Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/work/web-dev/seva-first"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs shadow-2xs"
              >
                <span>Case Study</span>
                <span>→</span>
              </Link>

              <a
                href="https://sewafirstryic.dtu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#111111] text-[#111111] hover:border-[#E10600] hover:text-[#E10600] font-mono text-xs tracking-wider uppercase transition-colors rounded-xs"
              >
                <span>Live Platform</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: SPACIOUS EDITORIAL SECONDARY PROJECTS (38% width) */}
        <div
          id="work-project-list"
          className="flex flex-col justify-between shrink-0 lg:shrink lg:h-full pt-8 lg:pt-0 border-t lg:border-t-0 border-[#E5E5E5]"
        >
          {SECONDARY_PROJECTS.map((project, idx) => (
            <Link
              key={project.slug}
              href={project.href}
              className={`group flex-1 flex flex-col justify-center py-3 lg:py-3.5 transition-all duration-200 ${
                idx < SECONDARY_PROJECTS.length - 1 ? "border-b border-[#EBEBEB]" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h4 className="font-editorial text-2xl lg:text-[25px] font-normal text-[#111111] group-hover:text-[#E10600] transition-colors leading-snug">
                    {project.title}
                  </h4>
                  {project.isComingSoon && (
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[#E10600] font-semibold bg-[#FFF5F5] border border-[#E10600]/30 px-2 py-0.5 rounded-xs">
                      Coming Soon
                    </span>
                  )}
                </div>
                <span className="font-mono text-sm text-[#888888] group-hover:text-[#E10600] group-hover:translate-x-1 transition-all shrink-0">
                  →
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#555555] group-hover:text-[#222222] transition-colors leading-relaxed pt-1 line-clamp-2">
                {project.description}
              </p>
            </Link>
          ))}

          {/* Complete Archive Link */}
          <div className="pt-2.5 border-t border-[#E5E5E5] shrink-0">
            <Link
              href="/work"
              className="group flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#666666] hover:text-[#111111] transition-colors py-1"
            >
              <span className="group-hover:text-[#111111]">Explore Complete Archive (5 Projects)</span>
              <span className="text-[#E10600] group-hover:translate-x-1.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

