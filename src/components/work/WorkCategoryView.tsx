"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WorkCategory, WORK_CATEGORIES, ProjectDetail } from "@/data/workCategories";
import ArchiveNav from "@/components/work/ArchiveNav";
import ArchiveFooter from "@/components/work/ArchiveFooter";
import AuthenticPlaceholder from "@/components/case-studies/AuthenticPlaceholder";

interface WorkCategoryViewProps {
  category: WorkCategory;
}

export default function WorkCategoryView({ category }: WorkCategoryViewProps) {
  const primaryProject = category.projects.find((p) => p.isPrimaryFeatured) || category.projects[0];
  const supportingProjects = category.projects.filter((p) => p.id !== primaryProject.id);
  const otherCategories = WORK_CATEGORIES.filter((c) => c.id !== category.id);

  // Helper to render project visual
  const renderProjectVisual = (p: ProjectDetail, isFeatured: boolean) => {
    // For Avni, use authentic rover photo
    if (p.id === "avni") {
      return (
        <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
          <Image
            src="/assets/rover-hero.jpg"
            alt={p.title}
            fill
            priority={isFeatured}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider">
            <span>DTU Field Rover Platform</span>
            <span>UGVC 2026, Egypt</span>
          </div>
        </div>
      );
    }

    // For AGNI research paper
    if (p.id === "agni") {
      return (
        <AuthenticPlaceholder
          title="Adaptive Sensor Fusion Research"
          description="IEEE 44th ICCE (Las Vegas) covariance convergence plots and gravel obstacle test trajectories will be supplied in the next phase."
          badge="Peer-Reviewed Research Visuals Pending"
          formula="K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + \Lambda_k R_k)^{-1}"
          metrics={[
            { label: "Drift Gain", value: "~32% Less" },
            { label: "Nav Success", value: "~95%" },
          ]}
        />
      );
    }

    // For SEVA First portal
    if (p.id === "seva-first") {
      return (
        <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
          <Image
            src="/assets/seva-hero.png"
            alt={p.title}
            fill
            priority={isFeatured}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 58vw"
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
      );
    }

    // For Astro Sushil
    if (p.id === "astro-sushil") {
      return (
        <div className="w-full aspect-[16/10] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
          <Image
            src="/assets/astro-sushil-hero.png"
            alt={p.title}
            fill
            priority={isFeatured}
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
            <span>Astro Sushil Vedic Astrology</span>
            <span className="text-[#FF8888]">Native Flutter &amp; Next.js</span>
          </div>
        </div>
      );
    }

    // For FlawCode / ForgeOS
    return (
      <AuthenticPlaceholder
        title="Multi-Agent AI Engineering Architecture"
        description="Hermes orchestrator state transition logs and live Slack channel execution streams will be supplied in the next phase."
        badge="Multi-Agent Telemetry Capture Pending"
        metrics={[
          { label: "Agents", value: "5 Roles" },
          { label: "Sandbox", value: "Docker AST" },
        ]}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#E10600] selection:text-white">
      {/* ─── STICKY HEADER NAVIGATION ───────────────────────────────────── */}
      <ArchiveNav currentCategory={category.id} />

      {/* ─── MAIN EXPANSIVE CONTAINER (Full 1536px Desktop Width) ─────────── */}
      <main className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-24">
        
        {/* ─── CATEGORY HERO HEADER ──────────────────────────────────────── */}
        <section className="space-y-4 border-b border-[#E5E5E5] pb-10 sm:pb-14">
          <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#888888] uppercase">
            <Link href="/work" className="hover:text-[#111111] transition-colors">
              Work
            </Link>
            <span>·</span>
            <span className="text-[#E10600] font-semibold">{category.title}</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-[76px] font-normal text-[#111111] tracking-tight leading-[1.05]">
            {category.title}
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#555555] max-w-4xl leading-relaxed pt-1">
            {category.headline}
          </p>

          <p className="font-sans text-base sm:text-[17px] text-[#333333] max-w-3xl leading-relaxed pt-1">
            {category.description}
          </p>
        </section>

        {/* ─── PRIMARY FEATURED PROJECT (Dominant Visual & Readable Narrative) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
            <span className="font-mono text-xs tracking-wider uppercase text-[#E10600] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              Featured Project
            </span>
            <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
              {primaryProject.year}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left: Large Visual Stage (58% width) */}
            <div className="lg:col-span-7">
              {renderProjectVisual(primaryProject, true)}
            </div>

            {/* Right: Project Narrative & Highlights (42% width) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#111111] tracking-tight leading-tight">
                  {primaryProject.title}
                </h2>

                <p className="font-editorial italic text-lg sm:text-xl text-[#555555] leading-snug">
                  {primaryProject.subtitle}
                </p>

                <p className="font-sans text-base sm:text-[17px] text-[#333333] leading-relaxed pt-1">
                  {primaryProject.description}
                </p>

                {primaryProject.highlights && primaryProject.highlights.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-[#E5E5E5]">
                    <div className="font-mono text-xs tracking-wider text-[#888888] uppercase font-semibold">
                      Engineering Highlights
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-[#222222] leading-relaxed">
                      {primaryProject.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/work/${category.id}/${primaryProject.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs group"
                >
                  <span>Explore Case Study</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                {primaryProject.id === "seva-first" && (
                  <a
                    href="https://sewafirstryic.dtu.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#E10600] text-[#E10600] font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] hover:text-white transition-colors rounded-xs group"
                  >
                    <span>Visit Live Platform</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}

                {primaryProject.id === "astro-sushil" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FFF5F5] border border-[#E10600]/30 text-[#E10600] font-mono text-xs tracking-wider uppercase font-semibold rounded-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECONDARY PROJECTS (Balanced & Expansive) ───────────────────── */}
        {supportingProjects.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-[#E5E5E5]">
            <div className="border-b border-[#E5E5E5] pb-3">
              <span className="font-mono text-xs tracking-wider uppercase text-[#888888] font-semibold">
                Supporting Systems &amp; Research
              </span>
            </div>

            {supportingProjects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start pt-4"
              >
                {/* Left: Project Visual / Placeholder (58% width) */}
                <div className="lg:col-span-7">
                  {renderProjectVisual(project, false)}
                </div>

                {/* Right: Narrative & Highlights (42% width) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                        {project.year} · {project.status}
                      </span>
                    </div>

                    <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-editorial italic text-lg sm:text-xl text-[#555555] leading-snug">
                      {project.subtitle}
                    </p>

                    <p className="font-sans text-base sm:text-[17px] text-[#333333] leading-relaxed pt-1">
                      {project.description}
                    </p>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-[#E5E5E5]">
                        <div className="font-mono text-xs tracking-wider text-[#888888] uppercase font-semibold">
                          Key Contributions
                        </div>
                        <ul className="space-y-2 text-sm sm:text-base text-[#222222] leading-relaxed">
                          {project.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${category.id}/${project.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-[#111111] text-[#111111] font-mono text-xs tracking-wider uppercase hover:bg-[#111111] hover:text-white transition-colors rounded-xs group"
                    >
                      <span>Explore Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ─── OTHER DISCIPLINES SWITCHER ─────────────────────────────────── */}
        <section className="pt-8 border-t border-[#E5E5E5] space-y-4">
          <div className="font-mono text-xs tracking-wider uppercase text-[#888888]">
            Explore Other Disciplines
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCategories.map((otherCat) => (
              <Link
                key={otherCat.id}
                href={`/work/${otherCat.id}`}
                className="p-5 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-colors rounded-xs group flex flex-col justify-between space-y-2"
              >
                <div className="font-editorial text-2xl text-[#111111] group-hover:text-[#E10600] transition-colors">
                  {otherCat.title}
                </div>
                <div className="font-mono text-xs text-[#888888] uppercase tracking-wider flex items-center justify-between">
                  <span>{otherCat.projects.length} System{otherCat.projects.length !== 1 ? "s" : ""}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#E10600]">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <ArchiveFooter />
    </div>
  );
}
