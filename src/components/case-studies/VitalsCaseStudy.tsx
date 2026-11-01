"use client";

import React from "react";
import Image from "next/image";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { CaseStudyDetail } from "@/data/caseStudies";

interface VitalsCaseStudyProps {
  study: CaseStudyDetail;
}

export default function VitalsCaseStudy({ study }: VitalsCaseStudyProps) {
  const visualShowcase = (
    <div className="space-y-4">
      {/* Ground Station Viewport Stage */}
      <div className="w-full aspect-[16/10] sm:aspect-[4/5] bg-white border border-[#111111]/10 rounded-xs overflow-hidden relative group">
        <Image
          src={study.imageUrl || "/projects/vitals-ground-station.jpg"}
          alt="Vitals C++ Raylib Ground Station Telemetry Viewport"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white uppercase drop-shadow-xs">
          <span>Native C++ &amp; Raylib</span>
          <span>Port 1234 UDP Receiver</span>
        </div>
      </div>

      {/* Deterministic Systems Cards */}
      <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Graphics Refresh</div>
          <div className="font-medium text-[#111111] text-[11px]">60 FPS Native</div>
          <div className="text-[10px] text-[#666666]">Hardware VSync lock</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Network Ingestion</div>
          <div className="font-medium text-[#111111] text-[11px]">Non-Blocking UDP</div>
          <div className="text-[10px] text-[#666666]">Raw socket listener</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Concurrency</div>
          <div className="font-medium text-[#111111] text-[11px]">Lock-Free SPSC</div>
          <div className="text-[10px] text-[#666666]">Zero mutex lock stalls</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Runtime</div>
          <div className="font-medium text-[#E10600] text-[11px]">0 ms GC Stalls</div>
          <div className="text-[10px] text-[#666666]">Pure compiled C++</div>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── TELEMETRY PROBLEM ───────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          The Telemetry Latency Problem
        </h2>
        <p className="text-[#333333]">
          Modern robotics teams commonly rely on browser-based or Electron telemetry monitors. Under high-frequency sensor streams (IMU attitude, motor temperatures, bus currents), JavaScript runtime garbage collection triggers frame drops and visual freezing during high-speed field trials when deterministic visibility is vital.
        </p>
      </section>

      {/* ─── SYSTEMS ARCHITECTURE ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Low-Level Systems Architecture
        </h2>

        <div className="space-y-3">
          <div className="p-4 bg-white border border-[#111111]/10 rounded-xs space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold">
              Network Thread
            </div>
            <div className="font-editorial text-base text-[#111111]">
              Non-Blocking Raw UDP Socket Ingestion
            </div>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
              Listens directly on UDP port 1234 using non-blocking POSIX socket calls on a dedicated background thread, ingesting vehicle packet bursts without queuing latency.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#111111]/10 rounded-xs space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold">
              Memory Management
            </div>
            <div className="font-editorial text-base text-[#111111]">
              Lock-Free SPSC Ring Buffer
            </div>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
              Transfers deserialized sensor telemetry to the render thread across an atomic circular buffer. Eliminates mutex contention and locks entirely, ensuring the visual thread never waits on the network.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#111111]/10 rounded-xs space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold">
              Rendering Engine
            </div>
            <div className="font-editorial text-base text-[#111111]">
              Hardware-Accelerated Raylib Canvas
            </div>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
              Plots high-density rolling strip charts for vehicle pitch, roll, yaw, motor thermals, and battery levels locked to the display&apos;s 60 FPS VSync with negligible CPU utilization.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VEDANT'S CONTRIBUTION ────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Technical Contribution
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
          <li className="flex items-start gap-2.5">
            <span className="text-[#E10600] font-bold mt-0.5">·</span>
            <span>Developed the complete application in C++ utilizing Raylib graphics and POSIX networking.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#E10600] font-bold mt-0.5">·</span>
            <span>Implemented the lock-free single-producer single-consumer ring buffer to decouple network ingestion from rendering.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#E10600] font-bold mt-0.5">·</span>
            <span>Created custom rolling chart interpolation routines to render fluid telemetry curves without visual stutter.</span>
          </li>
        </ul>
      </section>

      {/* ─── OUTCOMES ────────────────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Field Diagnostics
        </h2>
        <p className="text-[#333333]">
          Vitals delivered an instantaneous lightweight monitoring tool used during physical rover testing at DTU, eliminating GUI freezes and providing operators with verified 60 FPS vehicle health telemetry.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}
