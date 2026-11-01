# Phase 4.3: Project Detail Page Visual Redesign Report

## Executive Summary

Phase 4.3 redesigned all individual project detail pages across the portfolio (`vedantsinggh.github.io`), adapting the three-part editorial field journal layout into a minimal, visual, and highly responsive presentation. The redesign establishes a pure white (`#FFFFFF`) aesthetic with deep near-black typography (`#111111`), restrained crimson red accents (`#E10600`), and a balanced desktop three-column layout (sidebar navigation, central narrative, and right-side visual showcase).

All seven case studies—Avni, AGNI, Astro Sushil, ForgeOS (Flaw Code), SEVA First, Receipt OCR, and Vitals—now possess distinct, tailored visual narratives that communicate through diagrams, technical specifications, and imagery rather than dense text walls.

---

## 1. Architectural & Layout Component Changes

### Shared Layout System (`ProjectDetailLayout.tsx`)
A shared layout container ([`src/components/case-studies/ProjectDetailLayout.tsx`](file:///home/pilot/Projects/vedantsinggh.github.io/src/components/case-studies/ProjectDetailLayout.tsx)) was implemented to provide structural consistency without imposing a rigid or repetitive content hierarchy:

1. **Left Column — Project Navigation Sidebar (Desktop)**:
   - Fixed-width (`w-56`), sticky (`lg:sticky lg:top-8`), lightweight sidebar.
   - Brand mark: [`SuitEmblem`](file:///home/pilot/Projects/vedantsinggh.github.io/src/components/SuitEmblem.tsx) in black/crimson.
   - Clean navigation backlink: `← ALL WORK` to `/work`.
   - Category kicker and discipline title (`font-mono text-[10px] tracking-[0.2em] text-[#888888]`).
   - Role and timeline metadata.
   - Live status indicator badge (`● ACTIVE`, `● DEPLOYED`, or `● RESEARCH`).
   - Quick case study switcher listing all seven projects with active project highlighted in bold and publication years aligned to the right.
   - Project external links: `GITHUB ↗`, `LIVE ↗`, or `PAPER ↗` with hover micro-transitions.

2. **Centre Column — Project Story Narrative**:
   - Flexible central content column (`flex-1 max-w-2xl min-w-0`).
   - Large, elegant editorial title (`font-editorial text-4xl sm:text-5xl text-[#111111] tracking-[-0.03em]`).
   - Restrained italic one-to-two line project lede (`font-editorial italic text-lg sm:text-xl text-[#555555]`).
   - Compact 4-column metric grid (`font-editorial text-2xl text-[#111111]`) with clean monospace headers and descriptive sub-labels.
   - Modular sections detailing problem definition, system architecture, personal contribution, and measured outcomes.
   - Text rendered in human-written natural language, replacing robotic buzzwords and artificial section counters.

3. **Right Column — Visual Showcase Stage**:
   - Prominent sticky visual showcase (`w-full lg:w-[380px] xl:w-[440px] shrink-0 lg:sticky lg:top-8`).
   - Responsive aspect ratio (`aspect-[16/10] sm:aspect-[4/5]` or tailored multi-viewport arrangements) ensuring a tall, editorial portrait presence on desktop.
   - Crisp 10% opacity neutral borders (`border-[#111111]/10`) and subtle image hover zoom (`duration-700 ease-out group-hover:scale-105`).
   - Monospace bottom caption strip displaying authentic testing course, paper publication venue, or system details.
   - Tailored technical detail cards underneath the visual stage (e.g., mathematical formulas, monorepo architecture highlights, or sub-agent execution stats).

4. **Responsive Mobile Hierarchy**:
   - Mobile top navigation bar (`lg:hidden flex justify-between items-center py-4 border-b border-[#111111]/10`).
   - Mobile title and lede placed **first** at the top of the content stream.
   - Main visual showcase stage positioned **immediately following the lede**, fulfilling the visual-first mobile experience requirement without horizontal scroll.
   - Compact vertical stacking of specifications and narrative sections.
   - Bottom navigation footer (`getNextCaseStudy`) with smooth forward navigation to subsequent projects.

---

## 2. Project-Specific Visual Treatments

Each of the seven project pages was custom-designed to reflect its distinct engineering discipline:

| Project | Discipline | Visual Treatment & Structural Narrative | Key Highlights & Verified Evidence |
|---|---|---|---|
| **Avni** | Robotics & Autonomous Systems | **Engineering Field Dossier**: Tall landscape rover stage (`aspect-[4/5]`), competition field test course caption (`UGVC 2026, EGYPT`), and 4-part chassis/comms/sync/ROS breakdown. | Inverted-V rocker-bogie articulation, isolated galvanic CAN-FD bus, 1 Hz hardware PPS pulse synchronization, and deterministic 11.8 ms ROS 2 control loop (`SCHED_FIFO`). |
| **AGNI** | Robotics & Perception (AI) | **Research Publication Dossier**: Research visual opening (`IEEE 44th ICCE, Las Vegas`), covariance inflation formula card, and baseline comparison stats. | Adaptive Kalman gain formula card: $K_k = P_{k\mid k-1} H_k^T (H_k P_{k\mid k-1} H_k^T + \Lambda_k R_k)^{-1}$, 50 Hz real-time C++ filter node, and ~32% drift reduction over standard EKF on loose gravel. |
| **Astro Sushil** | Application Development | **Dual-Viewport Product Showcase**: Smartphone viewport (portrait `aspect-[9/14]` Flutter iOS & Android) paired with desktop administrative workstation frame (`aspect-[16/10]` Next.js). | Offline Swiss Ephemeris C-bindings (< 50 ms calculation), custom-painted 60 FPS Kundali canvas, and full-stack typed monorepo contract across Dart, Next.js, and Prisma ORM. |
| **ForgeOS (Flaw Code)** | AI & Perception | **Multi-Agent Systems Blueprint**: Hermes orchestrator supervision card, OpenClaw DAG dependency breakdown, throwaway Docker sandbox containment, and live Slack/PR telemetry. | Deterministic state transitions, ephemeral Docker execution with AST syntax validation, Pydantic JSON schema tool validation, and real-time thread streaming. |
| **SEVA First** | Web Development | **National Platform Scale Showcase**: Production portal capture (`National Higher Education Scholarship Portal`), high-concurrency Go microservices, and Redis distributed rate limiter. | Scaled to 50,000+ registered applicants across 28 states; reduced submission bottleneck latency from 4.2s to 180ms during national deadline spikes. |
| **Receipt OCR** | AI & Perception | **Computer Vision & Extraction Pipeline**: Multi-stage document pipeline (OpenCV preprocessing, dual-engine Tesseract/EasyOCR fallback, Ollama local extraction). | 100% private on-device execution, zero cloud GPU operating cost ($0.00/mo), sub-50ms geometric deskewing, and 85%+ end-to-end extraction accuracy. |
| **Vitals** | Application Development | **Deterministic Ground Station Visual**: High-refresh telemetry stage (`port 1234 UDP receiver`), pure C++ architecture, non-blocking UDP ingestion, and lock-free SPSC ring buffer. | Low-overhead C++ ground station locked to 60 FPS VSync via Raylib, zero memory allocations in hot telemetry loops, and zero mutex contention. |

---

## 3. Text Removed and Condensed

In adherence to the editorial field journal directive, text volume across all project detail pages was aggressively reduced:

1. **Lede Summaries**:
   - Replaced multi-paragraph introductory essays with single-sentence editorial ledes in elegant italic serif typography.
2. **Elimination of Generic Filler**:
   - Purged corporate clichés and generic headings: `"The Vision"`, `"The Journey"`, `"Innovation at Scale"`, `"The Future of Engineering"`, `"Architectural Paradigm"`.
   - Replaced with direct engineering headings: `"The Field Challenge"`, `"The Research Problem"`, `"Product Challenge"`, `"Engineering Approach"`, `"Low-Level Systems Architecture"`.
3. **Numbering & Label Stripping**:
   - Removed artificial numbering prefixes: `01 / OVERVIEW`, `SECTION 01-04`, `01.-04.` step lists.
   - Removed decorative brackets `[` and `]` from figures, bus lines, and diagrams.
   - Removed slash separators `//` in breadcrumbs and metadata kickers.
4. **Information Chunking**:
   - Converted long prose explanations of software stacks into compact, scannable specification cards with bold red micro-kickers (`text-[10px] tracking-[0.2em] text-[#E10600] uppercase font-bold`).

---

## 4. Assets Reused vs. Placeholders

### Existing Assets Reused
- [`src/components/SuitEmblem.tsx`](file:///home/pilot/Projects/vedantsinggh.github.io/src/components/SuitEmblem.tsx) integrated into desktop sidebar and mobile headers.
- Verified metadata and metrics in [`src/data/caseStudies.ts`](file:///home/pilot/Projects/vedantsinggh.github.io/src/data/caseStudies.ts).
- Pre-existing project imagery in `public/projects/` utilized across the layout (`avni-rover.jpg`, `agni-research.jpg`, `astro-sushil-mobile.jpg`, `astro-sushil-web.jpg`, `forgeos-graph.jpg`, `seva-first-portal.jpg`, `receipt-ocr-pipeline.jpg`, `vitals-telemetry.jpg`).

### Missing Authentic Images to be Supplied
As documented in [`docs/REQUIRED_IMAGE_ASSETS.md`](file:///home/pilot/Projects/vedantsinggh.github.io/docs/REQUIRED_IMAGE_ASSETS.md), the following authentic photographs and interface captures should replace placeholder assets:

1. **Avni**:
   - Authentic DSLR high-resolution photograph of Avni rover on the DTU outdoor test track or competition course.
   - Detailed close-up photograph of the inverted-V suspension, 4WD hub motors, or CAN-FD electronics bay.
2. **AGNI**:
   - Real sensor fusion point cloud / costmap visualization from the IEEE ICCE 2025 presentation.
   - Plot comparing standard EKF drift vs. AGNI HCAF error trajectories.
3. **Astro Sushil**:
   - Authentic iOS/Android device screenshot showing the custom 60 FPS Kundali canvas and astrological calculations.
   - Next.js administrator dashboard screenshot showing real appointment booking workflows.
4. **ForgeOS**:
   - Actual Slack thread screenshot showing Hermes orchestrator multi-agent coordination.
   - OpenClaw DAG execution terminal or generated GitHub Pull Request screenshot.
5. **SEVA First**:
   - Real scholarship application portal interface screenshot.
   - Administrative analytics dashboard showing verified applicant processing.
6. **Receipt OCR**:
   - Side-by-side comparison showing raw skewed physical receipt input vs. clean extracted JSON output from local Ollama model.
7. **Vitals**:
   - Actual desktop screenshot of the Raylib C++ ground station window displaying multi-axis IMU pitch/roll/yaw charts and vehicle thermals.

---

## 5. Build & Verification Results

### ESLint Check
```bash
npm run lint
> eslint
# Exited with code 0 (0 errors, 0 warnings)
```

### TypeScript Compilation Check
```bash
npx tsc --noEmit
# Exited with code 0 (0 errors)
```

### Production Static Export Build
```bash
npm run build
> next build
▲ Next.js 16.2.1 (Turbopack)
✓ Compiled successfully in 8.9s
✓ Finished TypeScript in 6.8s
✓ Collecting page data using 11 workers in 1322ms
✓ Generating static pages using 11 workers (20/20) in 1692ms
Finalizing page optimization in 14ms

Route (app)
├ ○ /
├ ○ /work
├ ● /work/robotics
├ ● /work/ai
├ ● /work/app-dev
├ ● /work/web-dev
├ ● /work/robotics/avni
├ ● /work/robotics/agni
├ ● /work/app-dev/astro-sushil
├ ● /work/ai/forgeos
├ ● /work/web-dev/seva-first
├ ● /work/ai/receipt-ocr
└ ● /work/app-dev/vitals
```
All 20 static pages compiled and prerendered successfully with zero runtime errors.

### Visual Verification Artifacts
Desktop (1440x900) and mobile (390x844) viewport screenshots captured for all 7 project pages:

1. **Avni**:
   - Desktop: [`case_study_avni_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_avni_desktop.png)
   - Mobile: [`case_study_avni_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_avni_mobile.png)
2. **AGNI**:
   - Desktop: [`case_study_agni_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_agni_desktop.png)
   - Mobile: [`case_study_agni_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_agni_mobile.png)
3. **Astro Sushil**:
   - Desktop: [`case_study_astro_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_astro_desktop.png)
   - Mobile: [`case_study_astro_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_astro_mobile.png)
4. **ForgeOS**:
   - Desktop: [`case_study_forgeos_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_forgeos_desktop.png)
   - Mobile: [`case_study_forgeos_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_forgeos_mobile.png)
5. **SEVA First**:
   - Desktop: [`case_study_seva_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_seva_desktop.png)
   - Mobile: [`case_study_seva_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_seva_mobile.png)
6. **Receipt OCR**:
   - Desktop: [`case_study_ocr_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_ocr_desktop.png)
   - Mobile: [`case_study_ocr_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_ocr_mobile.png)
7. **Vitals**:
   - Desktop: [`case_study_vitals_desktop.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_vitals_desktop.png)
   - Mobile: [`case_study_vitals_mobile.png`](file:///home/pilot/.gemini/antigravity-ide/brain/6d4a5c07-f112-432c-83a8-fbe51643a9bc/screenshots/case_study_vitals_mobile.png)

---

## 6. Conclusion & Next Steps

Phase 4.3 successfully transformed all project detail pages into authentic, visually engaging personal engineering field journals. All visual requirements—including pure white backgrounds, restrained typography, responsive 3-column desktop layout, mobile title/lede/visual-first stacking, and zero generic boilerplate—are implemented, verified, and production-ready.

In compliance with the project brief, execution stops here. No git commits or pushes have been made.
