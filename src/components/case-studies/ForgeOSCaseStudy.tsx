"use client";

import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AuthenticPlaceholder from "./AuthenticPlaceholder";
import { CaseStudyDetail } from "@/data/caseStudies";

interface ForgeOSCaseStudyProps {
  study: CaseStudyDetail;
}

export default function ForgeOSCaseStudy({ study }: ForgeOSCaseStudyProps) {
  const visualShowcase = (
    <div className="w-full h-full flex flex-col justify-between space-y-4">
      <AuthenticPlaceholder
        title="Multi-Agent AI Engineering Architecture"
        description="Hermes orchestrator state transition logs and live Slack channel execution streams will be supplied in the next phase."
        badge="Multi-Agent Telemetry Capture Pending"
        metrics={[
          { label: "Agents", value: "5 Roles" },
          { label: "Sandbox", value: "Docker AST" },
          { label: "Tool Schema", value: "Pydantic" },
        ]}
      />
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── THE RELIABILITY PROBLEM (1-2 sentences) ──────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-editorial text-2xl sm:text-[28px] text-[#111111] font-normal tracking-tight">
          The Problem
        </h2>
        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
          Autonomous AI coding agents frequently hallucinate syntax, overwrite critical codebases, and run destructive terminal commands when given direct system access. Without rigid state machine boundaries and containerized sandboxes, multi-turn AI coding produces broken repositories and irrecoverable bugs.
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
              <strong>Hermes Orchestrator &amp; OpenClaw DAG:</strong> Supervised development through deterministic state transitions, breaking user requests into atomic dependency graphs (DAG) dispatched to specialized sub-agents.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Sandboxed Docker Execution with AST Checks:</strong> Ran all code generation, unit tests, and shell tools inside isolated throwaway Docker containers with strict file permission limits and AST validation prior to git commit.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Pydantic Schema Tool Validation:</strong> Built a strict tool execution harness enforcing JSON schema validation across all agent calls, eliminating parameter hallucinations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2.5 shrink-0" />
            <span>
              <strong>Real-Time Slack Streaming &amp; GitHub PRs:</strong> Streamed execution diffs and terminal output directly into assigned Slack threads, automatically raising GitHub pull requests once test assertion matrices passed.
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
          FlawCode delivered deterministic multi-turn software engineering workflows across active repositories, executing feature implementation, test verification, and automated PR generation safely within container boundaries.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}
