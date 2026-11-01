"use client";

import React from "react";
import Image from "next/image";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { CaseStudyDetail } from "@/data/caseStudies";

interface SevaFirstCaseStudyProps {
  study: CaseStudyDetail;
}

export default function SevaFirstCaseStudy({ study }: SevaFirstCaseStudyProps) {
  const visualShowcase = (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      {/* Primary SEVA First Platform Stage */}
      <div className="w-full aspect-[16/9] min-h-[380px] lg:min-h-[460px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
        <Image
          src="/assets/seva-hero.png"
          alt="SEVA First Innovation Challenge — Official Platform & Competition Management"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider drop-shadow-sm">
          <span>SEVA First Innovation Challenge</span>
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

      {/* Verified Subsystem Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#555555]">
        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Registrations</div>
          <div className="font-medium text-[#111111] text-sm">50,000+ Students</div>
          <div className="text-xs text-[#666666]">Across 28 Indian states</div>
        </div>

        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Spike Latency</div>
          <div className="font-medium text-[#E10600] text-sm">180 ms Response</div>
          <div className="text-xs text-[#666666]">Go &amp; Redis microservices</div>
        </div>

        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Hackathon Rank</div>
          <div className="font-medium text-[#111111] text-sm">1st / 1,500+ Teams</div>
          <div className="text-xs text-[#666666]">Ministry of Education Winner</div>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── THE CONCURRENCY PROBLEM (1-2 sentences) ─────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          The Problem
        </h2>
        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
          National student registration deadlines generate sharp, unpredictable traffic spikes. When thousands of applicants submit documents and assessments simultaneously, traditional monolithic architectures fail from database connection exhaustion, session bottlenecks, and thread starvation.
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
              <strong>Go Microservice Ingestion:</strong> Built high-throughput registration ingestion services in Go utilizing concurrent Goroutines to offload verification workloads without blocking database pools.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Redis Distributed Shielding:</strong> Deployed in-memory token-bucket rate limiting and session caching, buffering peak query bursts and eliminating repetitive relational reads.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>PostgreSQL Data Partitioning:</strong> Structured transactional schemas with strict ACID isolation and optimized B-tree indexing to prevent race conditions during submission deadlines.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Team Engineering Leadership:</strong> Directed a team of six engineers across backend architecture, continuous integration pipelines, and Ministry of Education compliance audits.
            </span>
          </li>
        </ul>
      </section>

      {/* ─── COMPACT OUTCOMES ─────────────────────────────────────────────── */}
      <section className="space-y-3 pt-2 border-t border-[#E5E5E5]">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Results
        </h2>
        <p className="text-base sm:text-[17px] text-[#333333] leading-relaxed">
          Served over 50,000 registered students across 28 Indian states with 1,000+ daily visitors, reducing peak deadline response times from 4.2 seconds to 180 milliseconds and winning 1st place at Smart India Hackathon among 1,500+ competing universities.
        </p>

        <div className="pt-2">
          <a
            href="https://sewafirstryic.dtu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#E10600] transition-colors rounded-xs group"
          >
            <span>Visit Live Platform (sewafirstryic.dtu.ac.in)</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </section>
    </ProjectDetailLayout>
  );
}
