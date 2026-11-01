"use client";

import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AuthenticPlaceholder from "./AuthenticPlaceholder";
import { CaseStudyDetail } from "@/data/caseStudies";

interface AgniCaseStudyProps {
  study: CaseStudyDetail;
}

export default function AgniCaseStudy({ study }: AgniCaseStudyProps) {
  const visualShowcase = (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      <AuthenticPlaceholder
        title="Adaptive Sensor Fusion Research"
        description="IEEE 44th ICCE (Las Vegas) covariance convergence plots and gravel obstacle test trajectories will be supplied in the next phase."
        badge="Peer-Reviewed Research Visuals Pending"
        formula="K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + \Lambda_k R_k)^{-1}"
        metrics={[
          { label: "Drift Gain", value: "~32% Less" },
          { label: "Nav Success", value: "~95%" },
          { label: "Execution", value: "50 Hz Loop" },
        ]}
      />
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── THE RESEARCH PROBLEM (1-2 sentences) ─────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          The Problem
        </h2>
        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
          Classical Extended Kalman Filtering assumes static measurement noise covariance matrices calibrated offline in benign conditions. When an autonomous vehicle encounters dust clouds that occlude optical lenses or loose gravel that slips drive wheels, false observations are accepted with standard confidence, corrupting vehicle state estimation.
        </p>
      </section>

      {/* ─── RESEARCH HIGHLIGHTS (4 crisp bullets) ───────────────────────── */}
      <section className="space-y-3 pt-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          Research Highlights
        </h2>
        <ul className="space-y-3 text-base sm:text-[17px] text-[#222222] leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Hybrid Confidence-Adaptive Fusion (HCAF):</strong> Formulated dynamic diagonal scaling multipliers that inflate effective innovation covariance when sensor residuals spike, smoothly diminishing weights without step discontinuities.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>IMU Vibration Coupling to DWA Planner:</strong> Closed the feedback loop between high-frequency chassis vibration spectra and local trajectory planning, dynamically constraining linear velocity over washboard terrain.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Real-Time C++ Filter Node:</strong> Implemented the complete covariance scaling algorithm as a standalone 50 Hz ROS 2 node with deterministic computational bounds on embedded hardware.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Peer-Reviewed IEEE Publication:</strong> Lead author on research presented and published at the IEEE 44th International Conference on Consumer Electronics (ICCE 2025, Las Vegas).
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
          Demonstrated a ~32% reduction in localization error compared to standard EKF across outdoor loose gravel and achieved a 95.5% autonomous navigation success rate under complete GPS denial.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}
