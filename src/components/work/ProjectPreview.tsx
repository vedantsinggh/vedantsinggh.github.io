"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectDetail } from "@/data/workCategories";

interface ProjectPreviewProps {
  project: ProjectDetail;
  categoryTitle?: string;
  categorySlug?: string;
  variant?: "featured" | "standard" | "compact";
  imageAspect?: "16/9" | "16/10" | "4/3" | "3/2" | "auto";
  priority?: boolean;
  className?: string;
}

export default function ProjectPreview({
  project,
  categoryTitle,
  categorySlug,
  variant = "standard",
  imageAspect = "16/9",
  priority = false,
  className = "",
}: ProjectPreviewProps) {
  // Determine aspect ratio class
  const aspectClass =
    imageAspect === "16/9"
      ? "aspect-[16/9]"
      : imageAspect === "16/10"
      ? "aspect-[16/10]"
      : imageAspect === "4/3"
      ? "aspect-[4/3]"
      : imageAspect === "3/2"
      ? "aspect-[3/2]"
      : "aspect-[16/9]";

  // ─────────────────────────────────────────────────────────────────────────
  // VARIANT: FEATURED (Expansive Editorial Showcase Layout)
  // ─────────────────────────────────────────────────────────────────────────
  if (variant === "featured") {
    return (
      <article
        className={`w-full bg-white border border-[#0A0A0A]/10 rounded-xs p-6 sm:p-10 md:p-12 transition-all duration-300 hover:border-[#0A0A0A]/25 ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Media Stage */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div
              className={`w-full ${aspectClass} bg-[#FAFAFA] border border-[#0A0A0A]/10 rounded-xs overflow-hidden relative group`}
            >
              <Image
                src={project.imageUrl || "/projects/placeholder.jpg"}
                alt={project.title}
                fill
                priority={priority}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Media Metadata Caption */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#0A0A0A]/45 uppercase pt-1">
              <span>{categoryTitle || "Engineering Archive"}</span>
              <span>Verified Documentation</span>
            </div>
          </div>

          {/* Right Column: Project Specifications & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Status & Year Header */}
              <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-3">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#E10600] bg-[#E10600]/10 border border-[#E10600]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                  {project.status}
                </span>

                <span className="font-mono text-xs tracking-[0.2em] text-[#0A0A0A]/50">
                  {project.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] tracking-[-0.02em] leading-tight">
                  {project.title}
                </h3>
                <p className="font-editorial text-base sm:text-lg text-[#0A0A0A]/65 italic leading-snug">
                  {project.subtitle}
                </p>
              </div>

              {/* Narrative Description */}
              <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed pt-1">
                {project.description}
              </p>

              {/* Architectural Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-[#0A0A0A]/10">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-[#0A0A0A]/50 uppercase font-bold">
                    Key Architecture
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 font-sans text-xs sm:text-[13px] text-[#0A0A0A]/75 leading-relaxed"
                      >
                        <span className="text-[#E10600] mt-1 text-[9px] shrink-0">■</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verified Metrics Strip */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-[#0A0A0A]/10">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#FAFAFA] border border-[#0A0A0A]/10 rounded-xs"
                    >
                      <div className="font-mono text-[9px] tracking-[0.18em] text-[#0A0A0A]/50 uppercase">
                        {metric.label}
                      </div>
                      <div className="font-editorial text-base sm:text-lg text-[#0A0A0A] font-normal mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#FAFAFA] border border-[#0A0A0A]/10 font-mono text-[10px] tracking-[0.15em] text-[#0A0A0A]/60 uppercase rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links & Exploration Footer */}
            <div className="pt-4 border-t border-[#0A0A0A]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-[#0A0A0A] hover:text-[#E10600] transition-colors"
                  >
                    <span>GitHub</span>
                    <span className="text-[#E10600]">↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-[#0A0A0A] hover:text-[#E10600] transition-colors"
                  >
                    <span>Live</span>
                    <span className="text-[#E10600]">↗</span>
                  </a>
                )}
              </div>

              {categorySlug ? (
                <Link
                  href={`/work/${categorySlug}/${project.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-white font-mono text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#E10600] transition-colors rounded-xs shadow-xs"
                >
                  <span>Case Study</span>
                  <span>→</span>
                </Link>
              ) : (
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#0A0A0A]/40 uppercase">
                  Case Study Available
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // VARIANT: STANDARD (Editorial Card Layout with Varied Aspect Ratios)
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <article
      className={`group relative flex flex-col justify-between bg-white border border-[#0A0A0A]/10 rounded-xs p-6 sm:p-8 hover:border-[#0A0A0A]/30 transition-all duration-300 ${className}`}
    >
      <div className="space-y-5">
        {/* Card Header: Status + Year */}
        <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#E10600] bg-[#E10600]/10 border border-[#E10600]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
            {project.status}
          </span>

          <span className="font-mono text-xs tracking-[0.2em] text-[#0A0A0A]/50">
            {project.year}
          </span>
        </div>

        {/* Media Frame with customizable aspect ratio */}
        <div
          className={`w-full ${aspectClass} bg-[#FAFAFA] border border-[#0A0A0A]/10 rounded-xs overflow-hidden relative group`}
        >
          <Image
            src={project.imageUrl || "/projects/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] leading-snug">
            {project.title}
          </h3>
          <p className="font-editorial text-sm sm:text-base text-[#0A0A0A]/65 italic leading-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/75 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-[#0A0A0A]/10">
            <div className="font-mono text-[10px] tracking-[0.25em] text-[#0A0A0A]/50 uppercase font-bold">
              Key Architecture
            </div>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 font-sans text-xs text-[#0A0A0A]/70 leading-relaxed"
                >
                  <span className="text-[#E10600] mt-1 text-[8px] shrink-0">■</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#0A0A0A]/10">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2 bg-[#FAFAFA] border border-[#0A0A0A]/10 rounded-xs"
              >
                <div className="font-mono text-[9px] tracking-[0.15em] text-[#0A0A0A]/50 uppercase">
                  {metric.label}
                </div>
                <div className="font-mono text-xs text-[#0A0A0A] font-bold mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#FAFAFA] border border-[#0A0A0A]/10 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-[#0A0A0A]/60 uppercase rounded-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Links */}
      <div className="pt-6 mt-6 border-t border-[#0A0A0A]/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.2em] uppercase text-[#0A0A0A] hover:text-[#E10600] transition-colors"
            >
              <span>GitHub</span>
              <span className="text-[#E10600]">↗</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.2em] uppercase text-[#0A0A0A] hover:text-[#E10600] transition-colors"
            >
              <span>Demo</span>
              <span className="text-[#E10600]">↗</span>
            </a>
          )}
        </div>

        {categorySlug ? (
          <Link
            href={`/work/${categorySlug}/${project.id}`}
            className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.2em] uppercase text-[#E10600] font-bold hover:underline transition-colors"
          >
            <span>Case Study</span>
            <span>→</span>
          </Link>
        ) : (
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#0A0A0A]/40 uppercase">
            Explore ↗
          </span>
        )}
      </div>
    </article>
  );
}
