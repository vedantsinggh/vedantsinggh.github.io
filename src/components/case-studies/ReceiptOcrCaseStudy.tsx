"use client";

import React from "react";
import Image from "next/image";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { CaseStudyDetail } from "@/data/caseStudies";

interface ReceiptOcrCaseStudyProps {
  study: CaseStudyDetail;
}

export default function ReceiptOcrCaseStudy({ study }: ReceiptOcrCaseStudyProps) {
  const visualShowcase = (
    <div className="space-y-4">
      {/* Pipeline Extraction Stage */}
      <div className="w-full aspect-[16/10] sm:aspect-[4/5] bg-white border border-[#111111]/10 rounded-xs overflow-hidden relative group">
        <Image
          src={study.imageUrl || "/projects/receipt-ocr-pipeline.jpg"}
          alt="Receipt Understanding OCR — Two-Stage Pipeline Sample"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white uppercase drop-shadow-xs">
          <span>CarbonCrunch ML Ops</span>
          <span>Zero-Cloud-GPU Pipeline</span>
        </div>
      </div>

      {/* Extraction Architecture Cards */}
      <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Preprocessing</div>
          <div className="font-medium text-[#111111] text-[11px]">&lt; 50 ms CPU</div>
          <div className="text-[10px] text-[#666666]">OpenCV deskew &amp; binarize</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Inference Cost</div>
          <div className="font-medium text-[#E10600] text-[11px]">$0.00 Cloud GPU</div>
          <div className="text-[10px] text-[#666666]">100% local Ollama LLMs</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Text Detection</div>
          <div className="font-medium text-[#111111] text-[11px]">PaddleOCR</div>
          <div className="text-[10px] text-[#666666]">Polygon bounding detection</div>
        </div>
        <div className="p-3 bg-white border border-[#111111]/10 rounded-xs space-y-1">
          <div className="text-[9px] tracking-[0.2em] text-[#888888] uppercase">Output Contract</div>
          <div className="font-medium text-[#111111] text-[11px]">Pydantic JSON</div>
          <div className="text-[10px] text-[#666666]">Strict financial schema</div>
        </div>
      </div>
    </div>
  );

  return (
    <ProjectDetailLayout study={study} visualShowcase={visualShowcase}>
      {/* ─── EXTRACTION PROBLEM ───────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Document Extraction Problem
        </h2>
        <p className="text-[#333333]">
          Commercial document extraction APIs charge steep recurring fees per page and require transmitting confidential customer receipts across public clouds. Meanwhile, degraded thermal printing, skewed angles, and low-contrast mobile snapshots break conventional open-source OCR tools.
        </p>
      </section>

      {/* ─── TWO-STAGE ARCHITECTURE ───────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Two-Stage Pipeline
        </h2>

        <div className="space-y-3">
          <div className="p-4 bg-white border border-[#111111]/10 rounded-xs space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold">
              Stage 1 · Computer Vision
            </div>
            <div className="font-editorial text-base text-[#111111]">
              OpenCV Deskewing &amp; Contrast Normalization
            </div>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
              Fast CPU image preprocessing in under 50ms: automatically computes document skew angles, applies adaptive binarization, and filters thermal paper noise before OCR inference.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#111111]/10 rounded-xs space-y-1.5">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold">
              Stage 2 · OCR &amp; Local LLM Parsing
            </div>
            <div className="font-editorial text-base text-[#111111]">
              PaddleOCR &amp; Quantized Ollama Inference
            </div>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
              Extracts text polygons via PaddleOCR and passes raw unstructured tokens into a quantized local Ollama LLM. Strict Pydantic models structure outputs into validated dates, line items, totals, and taxes.
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
            <span>ML Ops Engineer: designed the two-stage document processing architecture during an internship at CarbonCrunch.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#E10600] font-bold mt-0.5">·</span>
            <span>Developed the sub-50ms OpenCV preprocessing algorithms and image normalization filters.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#E10600] font-bold mt-0.5">·</span>
            <span>Integrated concurrent ProcessPoolExecutor pipelines to process batches of financial documents asynchronously.</span>
          </li>
        </ul>
      </section>

      {/* ─── OUTCOMES ────────────────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="font-editorial text-2xl text-[#111111] font-normal tracking-[-0.02em]">
          Pipeline Outcomes
        </h2>
        <p className="text-[#333333]">
          Eliminated all third-party cloud GPU dependencies ($0.00 operational cost) while protecting client financial privacy. Delivered production-grade accuracy across messy thermal receipts with strict structured JSON output.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}
