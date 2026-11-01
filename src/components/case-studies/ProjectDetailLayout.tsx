"use client";

import React from "react";
import Link from "next/link";
import SuitEmblem from "@/components/SuitEmblem";
import { CaseStudyDetail, CASE_STUDY_NAV_ITEMS, getNextCaseStudy } from "@/data/caseStudies";

interface ProjectDetailLayoutProps {
  study: CaseStudyDetail;
  children: React.ReactNode;
  visualShowcase: React.ReactNode;
  mobileVisual?: React.ReactNode;
}

export default function ProjectDetailLayout({
  study,
  children,
  visualShowcase,
  mobileVisual,
}: ProjectDetailLayoutProps) {
  const nextProject = getNextCaseStudy(study.slug);

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#E10600] selection:text-white">
      {/* ─── MOBILE TOP BAR ─────────────────────────────────────────────────── */}
      <header className="lg:hidden border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-30 select-none">
        <Link
          href={`/work/${study.category}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
        >
          <span>←</span>
          <span>{study.categoryTitle.split(" ")[0]}</span>
        </Link>

        <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
          <SuitEmblem size={24} interactive={true} />
        </Link>
      </header>

      {/* ─── MAIN RESPONSIVE CONTAINER (Full 1536px Desktop Width) ──────────── */}
      <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* ─── COLUMN 1: LEFT NAVIGATION RAIL (180–210px) ─────────────────── */}
          <aside className="hidden lg:flex w-[190px] xl:w-[210px] shrink-0 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] flex-col justify-between select-none border-r border-[#E5E5E5] pr-6 xl:pr-8">
            {/* Top Identity & Navigation */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
                  <SuitEmblem size={26} interactive={true} />
                </Link>
                <Link
                  href="/work"
                  className="font-mono text-xs tracking-wider uppercase text-[#666666] hover:text-[#111111] transition-colors"
                >
                  ← All Work
                </Link>
              </div>

              {/* Minimal Project Metadata */}
              <div className="space-y-2 pt-2 border-t border-[#E5E5E5]">
                <div className="font-mono text-xs tracking-wider uppercase text-[#888888]">
                  {study.categoryTitle}
                </div>
                <div className="space-y-0.5 text-xs text-[#555555]">
                  <div className="font-medium text-[#111111]">{study.role}</div>
                  <div className="font-mono text-[11px] text-[#777777]">{study.timeline}</div>
                </div>

                <div className="pt-1 flex items-center gap-1.5">
                  {study.isFlagship && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-xs font-mono text-[10px] tracking-wider uppercase text-white bg-[#E10600]">
                      Flagship
                    </span>
                  )}
                  {study.isComingSoon ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs font-mono text-[11px] tracking-wider uppercase text-[#E10600] bg-[#FFF5F5] border border-[#E10600]/30 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                      Coming Soon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs font-mono text-[11px] tracking-wider uppercase text-[#111111] bg-[#F5F5F5] border border-[#E5E5E5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                      {study.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Case Studies Navigation List */}
              <div className="pt-6 border-t border-[#E5E5E5] space-y-2">
                <div className="font-mono text-xs tracking-wider uppercase text-[#888888]">
                  Projects
                </div>
                <nav className="space-y-1 font-mono text-xs">
                  {CASE_STUDY_NAV_ITEMS.map((item) => {
                    const isActive = item.slug === study.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/work/${item.category}/${item.slug}`}
                        className={`flex items-center justify-between py-1.5 px-2 rounded-xs transition-colors ${
                          isActive
                            ? "text-[#111111] font-semibold bg-[#F5F5F5] border-l-2 border-[#E10600]"
                            : "text-[#666666] hover:text-[#111111]"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {item.isFlagship && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                          )}
                          <span>{item.shortTitle}</span>
                        </span>
                        <span className="text-[11px] text-[#888888]">{item.year.split(" ")[0]}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Bottom Project External Links */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wider uppercase text-[#666666]">
              {study.githubUrl && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E10600] transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {study.paperUrl && (
                <a
                  href={study.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E10600] transition-colors"
                >
                  Paper ↗
                </a>
              )}
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E10600] font-semibold hover:underline transition-colors"
                >
                  Live ↗
                </a>
              )}
              {study.isComingSoon && (
                <span className="inline-flex items-center gap-1.5 text-[#E10600] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                  Coming Soon
                </span>
              )}
            </div>
          </aside>

          {/* ─── COLUMN 2: CENTRE STORY (35–40% width, readable line length) ─ */}
          <main className="w-full lg:w-[40%] xl:w-[38%] shrink-0 space-y-6 sm:space-y-8">
            {/* Project Title and 1-2 sentence lede */}
            <div className="space-y-2">
              <div className="flex lg:hidden items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#888888] pb-1">
                <span>{study.categoryTitle.split(" ")[0]}</span>
                <span>·</span>
                <span>{study.timeline}</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal text-[#111111] tracking-tight leading-[1.08]">
                {study.title}
              </h1>

              <p className="font-editorial italic text-lg sm:text-xl lg:text-[21px] text-[#555555] leading-relaxed pt-1">
                {study.subtitle}
              </p>
            </div>

            {/* Mobile Visual Showcase (immediately following title & lede) */}
            <div className="lg:hidden w-full pt-1 pb-3">
              {mobileVisual || visualShowcase}
            </div>

            {/* Core Project Story Content (Concise highlights, architecture, results) */}
            <div className="space-y-6 text-base sm:text-[17px] text-[#222222] leading-relaxed font-sans">
              {children}
            </div>

            {/* Mobile Outbound Links */}
            <div className="lg:hidden pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider uppercase text-[#666666]">
              {study.githubUrl && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E10600] transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {study.paperUrl && (
                <a
                  href={study.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E10600] transition-colors"
                >
                  Paper ↗
                </a>
              )}
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E10600] font-semibold hover:underline transition-colors"
                >
                  Live ↗
                </a>
              )}
              {study.isComingSoon && (
                <span className="inline-flex items-center gap-1.5 text-[#E10600] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                  Coming Soon
                </span>
              )}
            </div>

            {/* Navigation to Next Project */}
            <div className="pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href={`/work/${nextProject.category}/${nextProject.slug}`}
                className="group flex flex-col items-start"
              >
                <span className="font-mono text-xs tracking-wider uppercase text-[#888888]">
                  Next Project →
                </span>
                <span className="font-editorial text-xl sm:text-2xl text-[#111111] group-hover:text-[#E10600] transition-colors mt-0.5">
                  {nextProject.title}
                </span>
              </Link>

              <Link
                href={`/work/${study.category}`}
                className="font-mono text-xs tracking-wider text-[#666666] hover:text-[#111111] uppercase transition-colors"
              >
                ← {study.categoryTitle.split(" ")[0]}
              </Link>
            </div>
          </main>

          {/* ─── COLUMN 3: RIGHT VISUAL SHOWCASE (Expansive remaining width) ── */}
          <section className="hidden lg:block flex-1 min-w-0 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-none">
            {visualShowcase}
          </section>

        </div>
      </div>
    </div>
  );
}
