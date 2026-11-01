"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthenticPlaceholder from "@/components/case-studies/AuthenticPlaceholder";

interface WorkSectionProps {
  isActive?: boolean;
}

interface ShowcaseProject {
  slug: string;
  category: "web-dev" | "app-dev" | "robotics" | "ai";
  categoryTitle: string;
  title: string;
  subtitle: string;
  lede: string;
  image?: string;
  metrics: { label: string; value: string }[];
  status: "DEPLOYED" | "ACTIVE" | "RESEARCH" | "COMING SOON";
  isFlagship?: boolean;
  href: string;
  placeholderTitle?: string;
  placeholderDesc?: string;
  placeholderBadge?: string;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    slug: "seva-first",
    category: "web-dev",
    categoryTitle: "Web Platforms & Systems",
    title: "SEVA First",
    subtitle: "High-Concurrency Platform — Ministry of Education",
    lede: "National educational volunteer and assessment architecture serving 50,000+ registrations across 28 states with Go microservices and Redis distributed caching.",
    image: "/assets/seva-hero.png",
    metrics: [
      { label: "Registrations", value: "50,000+" },
      { label: "Daily Visitors", value: "1,000+" },
      { label: "Spike Latency", value: "180 ms" },
    ],
    status: "DEPLOYED",
    isFlagship: true,
    href: "/work/web-dev/seva-first",
  },
  {
    slug: "astro-sushil",
    category: "app-dev",
    categoryTitle: "Application Development",
    title: "Astro Sushil",
    subtitle: "Production Vedic Astrology Platform & Mobile Suite",
    lede: "Full-stack client platform combining a native Flutter iOS/Android application, Next.js admin workstation, and offline Swiss Ephemeris C-bindings executing in under 50ms.",
    image: "/assets/astro-sushil-hero.png",
    metrics: [
      { label: "Calculation", value: "< 50 ms" },
      { label: "Rendering", value: "60 FPS" },
      { label: "Monorepo", value: "100% Typed" },
    ],
    status: "COMING SOON",
    isFlagship: true,
    href: "/work/app-dev/astro-sushil",
  },
  {
    slug: "avni",
    category: "robotics",
    categoryTitle: "Robotics & Autonomous Systems",
    title: "Avni Rover",
    subtitle: "Deep-Terrain Competition Rover Platform — UGVC 2026",
    lede: "Autonomous ground vehicle engineered for GPS-denied environments with custom inverted-V suspension, galvanic CAN-FD bus, and deterministic 11.8ms ROS 2 control loop.",
    image: "/assets/rover-hero.jpg",
    metrics: [
      { label: "Control Loop", value: "11.8 ms" },
      { label: "Max Speed", value: "4.2 m/s" },
      { label: "Chassis", value: "Inverted-V" },
    ],
    status: "ACTIVE",
    href: "/work/robotics/avni",
  },
  {
    slug: "agni",
    category: "robotics",
    categoryTitle: "Robotics & Autonomous Systems",
    title: "AGNI Fusion",
    subtitle: "Adaptive Sensor Fusion Research — IEEE 44th ICCE",
    lede: "Hybrid Confidence-Adaptive Fusion (HCAF) dynamically scaling Kalman gains during sensor degradation, reducing localization drift by ~32% over standard EKF.",
    metrics: [
      { label: "Drift Gain", value: "~32% Less" },
      { label: "Nav Success", value: "~95%" },
      { label: "Publication", value: "IEEE ICCE" },
    ],
    status: "RESEARCH",
    href: "/work/robotics/agni",
    placeholderTitle: "Adaptive Sensor Fusion Research",
    placeholderDesc: "IEEE 44th ICCE (Las Vegas) covariance convergence plots and gravel obstacle test trajectories will be supplied in the next phase.",
    placeholderBadge: "Peer-Reviewed Research Visuals Pending",
  },
  {
    slug: "forgeos",
    category: "ai",
    categoryTitle: "AI & Perception",
    title: "FlawCode",
    subtitle: "Autonomous Multi-Agent AI Software Engineering OS",
    lede: "Multi-agent operating system supervised by Hermes orchestrator, automating software lifecycles safely inside isolated Docker containers with live Slack telemetry.",
    metrics: [
      { label: "Agent Roles", value: "5 Roles" },
      { label: "Sandbox", value: "Docker AST" },
      { label: "Integration", value: "Slack & PRs" },
    ],
    status: "ACTIVE",
    href: "/work/ai/forgeos",
    placeholderTitle: "Multi-Agent AI Engineering Architecture",
    placeholderDesc: "Hermes orchestrator state transition logs and live Slack channel execution streams will be supplied in the next phase.",
    placeholderBadge: "Multi-Agent Telemetry Capture Pending",
  },
];

export default function WorkSection({ isActive = true }: WorkSectionProps) {
  const [activeSlug, setActiveSlug] = useState<string>("seva-first");
  const activeProject =
    SHOWCASE_PROJECTS.find((p) => p.slug === activeSlug) || SHOWCASE_PROJECTS[0];

  const flagshipProjects = SHOWCASE_PROJECTS.filter((p) => p.isFlagship);
  const otherProjects = SHOWCASE_PROJECTS.filter((p) => !p.isFlagship);

  return (
    <section
      id="section-03"
      className="relative w-full h-full min-h-screen bg-white text-[#111111] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* ─── INTRODUCTION ─────────────────────────────────────────────────── */}
      <div
        className={`w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-20 sm:pt-24 lg:pt-28 pb-4 transition-all duration-700 ease-out z-10 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b border-[#E5E5E5]">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#111111] tracking-tight leading-none">
              Work
            </h2>
            <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
              5 Curated Systems
            </span>
          </div>

          <p className="font-editorial italic text-base sm:text-lg lg:text-xl text-[#555555] max-w-xl font-normal leading-relaxed text-left md:text-right">
            Selected production platforms, autonomous field robotics and peer-reviewed research.
          </p>
        </div>
      </div>

      {/* ─── MAIN CONTENT: SHOWCASE HERO + CURATED ROSTER ──────────────────── */}
      <div
        className={`w-full max-w-[1536px] mx-auto flex-1 px-6 sm:px-10 lg:px-12 xl:px-16 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start z-10 overflow-y-auto lg:overflow-visible scrollbar-none transition-all duration-700 delay-100 ease-out ${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"
        }`}
      >
        {/* ─── LEFT: FEATURED ACTIVE SHOWCASE (approx 58% on desktop) ──────── */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          {/* Main Visual Stage */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[320px] sm:min-h-[380px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
            {activeProject.image ? (
              <>
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider">
                  <span>{activeProject.categoryTitle}</span>
                  <span>{activeProject.status}</span>
                </div>
              </>
            ) : (
              <AuthenticPlaceholder
                title={activeProject.placeholderTitle || activeProject.title}
                description={activeProject.placeholderDesc || activeProject.lede}
                badge={activeProject.placeholderBadge}
                metrics={activeProject.metrics}
              />
            )}
          </div>

          {/* Details & Metrics Below Visual Stage */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-3">
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight leading-none">
                  {activeProject.title}
                </h3>
                <span className="font-editorial italic text-base sm:text-lg text-[#666666]">
                  {activeProject.subtitle}
                </span>
              </div>

              {activeProject.isFlagship && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-xs font-mono text-xs tracking-wider uppercase text-white bg-[#E10600] font-semibold">
                  Flagship
                </span>
              )}
            </div>

            <p className="font-sans text-base sm:text-[17px] text-[#333333] leading-relaxed max-w-xl">
              {activeProject.lede}
            </p>

            {/* Direct Case Study Link */}
            <div className="pt-2">
              <Link
                href={activeProject.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs group"
              >
                <span>Explore Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: CURATED PROJECT SELECTOR (approx 42% on desktop) ────── */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-4 pt-1">
          {/* Flagship Projects Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs tracking-wider text-[#E10600] uppercase font-semibold pb-1.5 border-b border-[#E5E5E5]">
              <span>Primary Flagships</span>
              <span>2 Deployments</span>
            </div>

            {flagshipProjects.map((p) => {
              const isSelected = p.slug === activeSlug;
              return (
                <button
                  type="button"
                  key={p.slug}
                  onClick={() => setActiveSlug(p.slug)}
                  onMouseEnter={() => setActiveSlug(p.slug)}
                  className={`w-full text-left p-4 rounded-xs border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FAFAFA] border-[#111111] shadow-xs"
                      : "bg-white border-[#E5E5E5] hover:border-[#111111]/40 hover:bg-[#FAFAFA]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                      <h4 className="font-editorial text-2xl font-normal text-[#111111]">
                        {p.title}
                      </h4>
                      <span className="px-1.5 py-0.5 bg-[#E10600]/10 text-[#E10600] font-mono text-[10px] tracking-wider uppercase rounded-xs font-semibold">
                        Flagship
                      </span>
                    </div>
                    <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                      {p.category === "web-dev" ? "Web" : "App"}
                    </span>
                  </div>
                  <div className="text-sm text-[#555555] font-sans truncate pt-1">
                    {p.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Research & Systems Section */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between font-mono text-xs tracking-wider text-[#888888] uppercase font-semibold pb-1.5 border-b border-[#E5E5E5]">
              <span>Autonomous Systems &amp; AI</span>
              <span>3 Systems</span>
            </div>

            {otherProjects.map((p) => {
              const isSelected = p.slug === activeSlug;
              return (
                <button
                  type="button"
                  key={p.slug}
                  onClick={() => setActiveSlug(p.slug)}
                  onMouseEnter={() => setActiveSlug(p.slug)}
                  className={`w-full text-left p-3.5 rounded-xs border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FAFAFA] border-[#111111] shadow-xs"
                      : "bg-white border-[#E5E5E5] hover:border-[#111111]/40 hover:bg-[#FAFAFA]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-editorial text-xl font-normal text-[#111111]">
                      {p.title}
                    </h4>
                    <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                      {p.categoryTitle.split(" ")[0]}
                    </span>
                  </div>
                  <div className="text-sm text-[#666666] font-sans truncate pt-1">
                    {p.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Complete Archive Link */}
          <div className="pt-3 border-t border-[#E5E5E5]">
            <Link
              href="/work"
              className="group flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#666666] hover:text-[#111111] transition-colors"
            >
              <span>Explore Complete Archive (5 Projects)</span>
              <span className="text-[#E10600] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM WHITESPACE ────────────────────────────────────────────── */}
      <div className="w-full h-4" />
    </section>
  );
}
