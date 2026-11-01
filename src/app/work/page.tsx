import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ArchiveNav from "@/components/work/ArchiveNav";
import ArchiveFooter from "@/components/work/ArchiveFooter";
import AuthenticPlaceholder from "@/components/case-studies/AuthenticPlaceholder";

export const metadata: Metadata = {
  title: "Work — Robotics, AI & Digital Systems | Vedant Singh",
  description:
    "An exploration of machines, intelligence and digital systems by Vedant Singh. Curated portfolio featuring SEVA First, Astro Sushil, Avni Rover, AGNI Sensor Fusion, and FlawCode.",
};

export default function WorkIndexPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#E10600] selection:text-white">
      {/* ─── NAVIGATION ─────────────────────────────────────────────────── */}
      <ArchiveNav isIndex={true} />

      {/* ─── MAIN EXPANSIVE CONTAINER (Full 1536px Desktop Width) ─────────── */}
      <main className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-24">
        
        {/* ─── EDITORIAL INTRODUCTION ────────────────────────────────────── */}
        <section className="space-y-4 border-b border-[#E5E5E5] pb-10 sm:pb-14">
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#888888] uppercase">
            <span>Engineering Portfolio</span>
            <span>·</span>
            <span>2024 — 2026</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-[80px] font-normal text-[#111111] tracking-tight leading-[1.05]">
            Work
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#555555] max-w-4xl leading-relaxed pt-1">
            An exploration of machines, intelligence and digital systems.
          </p>

          <p className="font-sans text-base sm:text-[17px] text-[#333333] max-w-3xl leading-relaxed pt-1">
            A focused presentation of five engineering systems: production-scale web platforms serving 50,000+ national students, cross-platform mobile client suites with sub-50ms ephemeris computation, deep-terrain autonomous competition rovers, peer-reviewed sensor fusion algorithms, and sandboxed multi-agent AI operating systems.
          </p>
        </section>

        {/* ─── SECTION 1: PRIMARY FLAGSHIPS (SEVA First & Astro Sushil) ───── */}
        <section className="space-y-10 sm:space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#E5E5E5] pb-4">
            <div className="flex items-baseline gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E10600]" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#111111] tracking-tight">
                Primary Flagships
              </h2>
            </div>
            <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
              Production Scaled Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* ─── FLAGSHIP 1: SEVA FIRST ─────────────────────────────────── */}
            <div className="p-6 sm:p-8 lg:p-10 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs flex flex-col justify-between space-y-6 group hover:border-[#111111] transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono text-xs tracking-wider uppercase text-white bg-[#E10600] font-semibold">
                    Flagship Platform
                  </span>
                  <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                    2024 — 2025 · Ministry of Education
                  </span>
                </div>

                <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group/img">
                  <Image
                    src="/assets/seva-hero.png"
                    alt="SEVA First Innovation Challenge — Ministry of Education Portal"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider drop-shadow-sm">
                    <span>SEVA First Platform</span>
                    <a
                      href="https://sewafirstryic.dtu.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1 text-white hover:text-white"
                    >
                      <span>sewafirstryic.dtu.ac.in</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
                    SEVA First Platform
                  </h3>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#555555]">
                    High-Concurrency Distributed Architecture Serving 50,000+ Student Registrations
                  </p>
                  <p className="font-sans text-base sm:text-[17px] text-[#333333] leading-relaxed pt-1">
                    Recognized by the Ministry of Education &amp; AICTE and winning 1st place at Smart India Hackathon among 1,500+ institutions. Engineered with Go microservices, Redis distributed caching, and PostgreSQL schemas handling deadline traffic spikes with 180ms response times.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/work/web-dev/seva-first"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs group/btn"
                >
                  <span>Explore Case Study</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <a
                  href="https://sewafirstryic.dtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#E10600] text-[#E10600] font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] hover:text-white transition-colors rounded-xs group"
                >
                  <span>Live Platform</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>

            {/* ─── FLAGSHIP 2: ASTRO SUSHIL ───────────────────────────────── */}
            <div className="p-6 sm:p-8 lg:p-10 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs flex flex-col justify-between space-y-6 group hover:border-[#111111] transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono text-xs tracking-wider uppercase text-white bg-[#E10600] font-semibold">
                    Flagship Suite
                  </span>
                  <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                    2025 — 2026 · Client Platform
                  </span>
                </div>

                <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group/img">
                  <Image
                    src="/assets/astro-sushil-hero.png"
                    alt="Astro Sushil Vedic Astrology Platform — Native Flutter Mobile Suite"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs font-mono text-xs tracking-wider uppercase text-white bg-[#E10600] font-semibold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Coming Soon
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider drop-shadow-sm">
                    <span>Astro Sushil Vedic Astrology</span>
                    <span className="text-[#FF8888]">Native Flutter &amp; Next.js</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
                    Astro Sushil Mobile &amp; Web
                  </h3>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#555555]">
                    Production Vedic Astrology Platform with Sub-50ms Ephemeris Engine
                  </p>
                  <p className="font-sans text-base sm:text-[17px] text-[#333333] leading-relaxed pt-1">
                    Integrated monorepo uniting a native Flutter mobile client with a Next.js admin portal and Prisma/PostgreSQL backend. Powered by offline Swiss Ephemeris C-bindings computing planetary longitudes in under 50ms and custom 60 FPS Kundali rendering.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/work/app-dev/astro-sushil"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs group/btn"
                >
                  <span>Explore Case Study</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FFF5F5] border border-[#E10600]/30 text-[#E10600] font-mono text-xs tracking-wider uppercase font-semibold rounded-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: AUTONOMOUS FIELD SYSTEMS & AI ───────────────────── */}
        <section className="space-y-10 sm:space-y-12 pt-8 border-t border-[#E5E5E5]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#E5E5E5] pb-4">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#111111] tracking-tight">
              Autonomous Systems &amp; AI
            </h2>
            <span className="font-mono text-xs tracking-wider text-[#888888] uppercase">
              Field Robotics &amp; Operating Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* ─── SYSTEM 1: AVNI ROVER ───────────────────────────────────── */}
            <div className="p-6 bg-white border border-[#E5E5E5] rounded-xs flex flex-col justify-between space-y-4 group hover:border-[#111111] transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative">
                  <Image
                    src="/assets/rover-hero.jpg"
                    alt="Avni Autonomous Ground Vehicle"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white uppercase tracking-wider">
                    UGVC 2026 Egypt
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                    Robotics &amp; Autonomous Systems
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-[#111111]">
                    Avni Rover
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed pt-1">
                    Deep-terrain competition rover platform with inverted-V suspension, isolated CAN-FD bus, and 11.8ms deterministic ROS 2 control loops.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="font-mono text-xs text-[#888888]">4.2 m/s · 11.8ms Loop</span>
                <Link
                  href="/work/robotics/avni"
                  className="font-mono text-xs tracking-wider uppercase text-[#111111] hover:text-[#E10600] transition-colors"
                >
                  Case Study →
                </Link>
              </div>
            </div>

            {/* ─── SYSTEM 2: AGNI SENSOR FUSION ───────────────────────────── */}
            <div className="p-6 bg-white border border-[#E5E5E5] rounded-xs flex flex-col justify-between space-y-4 group hover:border-[#111111] transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10]">
                  <AuthenticPlaceholder
                    title="AGNI Sensor Fusion"
                    description="IEEE 44th ICCE (Las Vegas) research visuals pending."
                    badge="Research Visuals Pending"
                    formula="K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + \Lambda_k R_k)^{-1}"
                  />
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                    Peer-Reviewed Research
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-[#111111]">
                    AGNI Sensor Fusion
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed pt-1">
                    Hybrid Confidence-Adaptive Fusion (HCAF) dynamically scaling Kalman gains during sensor degradation, reducing error by ~32% over standard EKF.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="font-mono text-xs text-[#888888]">~32% Drift Reduction</span>
                <Link
                  href="/work/robotics/agni"
                  className="font-mono text-xs tracking-wider uppercase text-[#111111] hover:text-[#E10600] transition-colors"
                >
                  Case Study →
                </Link>
              </div>
            </div>

            {/* ─── SYSTEM 3: FLAWCODE (FORGEOS) ───────────────────────────── */}
            <div className="p-6 bg-white border border-[#E5E5E5] rounded-xs flex flex-col justify-between space-y-4 group hover:border-[#111111] transition-all duration-300">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10]">
                  <AuthenticPlaceholder
                    title="FlawCode Multi-Agent OS"
                    description="Hermes orchestrator state machine logs pending."
                    badge="Telemetry Pending"
                    metrics={[
                      { label: "Agents", value: "5 Roles" },
                      { label: "Sandbox", value: "Docker AST" },
                    ]}
                  />
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs tracking-wider text-[#888888] uppercase">
                    AI &amp; Perception
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-[#111111]">
                    FlawCode (ForgeOS)
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed pt-1">
                    Multi-agent AI software engineering OS with Hermes state machine, isolated Docker sandboxing, AST verification, and real-time Slack streaming.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="font-mono text-xs text-[#888888]">Docker AST Sandbox</span>
                <Link
                  href="/work/ai/forgeos"
                  className="font-mono text-xs tracking-wider uppercase text-[#111111] hover:text-[#E10600] transition-colors"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ArchiveFooter />
    </div>
  );
}
