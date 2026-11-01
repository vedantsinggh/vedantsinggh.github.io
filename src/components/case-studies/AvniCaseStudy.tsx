"use client";

import React from "react";
import Image from "next/image";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { CaseStudyDetail } from "@/data/caseStudies";

interface AvniCaseStudyProps {
  study: CaseStudyDetail;
}

export default function AvniCaseStudy({ study }: AvniCaseStudyProps) {
  const visualShowcase = (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      {/* Primary Rover Photograph Stage */}
      <div className="w-full aspect-[4/5] min-h-[480px] lg:min-h-[560px] bg-[#F5F5F5] border border-[#E5E5E5] rounded-xs overflow-hidden relative group">
        <Image
          src="/assets/rover-hero.jpg"
          alt="Avni Autonomous Ground Vehicle — Field Test Platform"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white uppercase tracking-wider drop-shadow-sm">
          <span>Field Testing Platform</span>
          <span>UGVC 2026, Egypt</span>
        </div>
      </div>

      {/* Verified Subsystem Specs */}
      <div className="grid grid-cols-2 gap-3 font-mono text-xs text-[#555555]">
        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Drive System</div>
          <div className="font-medium text-[#111111] text-sm">4WD Direct BLDC Hub</div>
          <div className="text-xs text-[#666666]">Inverted-V articulated suspension</div>
        </div>

        <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs space-y-1">
          <div className="text-[11px] uppercase tracking-wider text-[#888888]">Control Timing</div>
          <div className="font-medium text-[#E10600] text-sm">11.8 ms Deterministic</div>
          <div className="text-xs text-[#666666]">Linux SCHED_FIFO real-time priority</div>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── THE FIELD PROBLEM (1-2 sentences) ────────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          The Problem
        </h2>
        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
          Standard autonomous ground robots fail on rough outdoor terrain when dust occludes optical sensors, loose gravel induces non-linear wheel slip, and canyons eliminate GPS satellite fixes. In deep field trials, latency spikes above 15 milliseconds in the odometry pipeline lead to immediate filter divergence and physical collision.
        </p>
      </section>

      {/* ─── ENGINEERING HIGHLIGHTS (3-4 crisp bullets) ──────────────────── */}
      <section className="space-y-3 pt-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Engineering Highlights
        </h2>
        <ul className="space-y-3 text-base sm:text-[17px] text-[#222222] leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Inverted-V Articulated Suspension:</strong> Custom rocker mechanism maintaining continuous four-wheel ground contact over severe slopes without drivetrain gearboxes or mechanical backlash.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Galvanic CAN-FD Bus:</strong> Electrically isolated multi-drop network isolating 48V motor controller transient spikes from the central compute carrier board.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Hardware PPS Synchronization:</strong> Microsecond hardware pulse triggering stereoscopic vision sensors and IMU to eliminate temporal frame jitter in 3D costmaps.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Deterministic 11.8ms Control Loop:</strong> Priority-inherited C++ ROS 2 scheduler bound to isolated CPU cores, guaranteeing sub-15ms actuation response under heavy LiDAR loads.
            </span>
          </li>
        </ul>
      </section>

      {/* ─── COMPACT OUTCOMES ─────────────────────────────────────────────── */}
      <section className="space-y-2 pt-2 border-t border-[#E5E5E5]">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Results
        </h2>
        <p className="text-base sm:text-[17px] text-[#333333] leading-relaxed">
          Traversed mixed gravel and slope courses at sustained speeds of 4.2 m/s during qualification trials for the Unmanned Ground Vehicle Competition in Egypt, maintaining continuous localization without GPS fixes.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}
