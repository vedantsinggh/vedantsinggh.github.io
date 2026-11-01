# Portfolio Audit & Discovery Report (Phase 1)
**Project**: Personal Engineering Portfolio & Technical Case Studies  
**Owner**: Vedant Singh ([vedantsinggh.github.io](https://vedantsinggh.github.io) | [github.com/vedantsinggh](https://github.com/vedantsinggh))  
**Auditor**: Senior Software Architect, Creative Director & Portfolio Strategist  
**Date**: November 1, 2026  
**Status**: Read-Only Audit Complete — Ready for Phase 2 Approval  

---

## 1. Executive Summary

This document constitutes the comprehensive Phase 1 discovery and technical audit of Vedant Singh's personal portfolio repository (`vedantsinggh.github.io`) and complete public GitHub ecosystem (75 repositories).

### Key Findings at a Glance
1. **Core Engineering Caliber vs. Portfolio Presentation**:
   - The engineer behind this portfolio is a high-performing autonomous systems lead (UGV-DTU Team Captain, 50-member team leader, IEEE conference author, and full-stack software engineer) who builds real hardware platforms, multi-modal sensor fusion algorithms, custom microkernels, compiler engines, and distributed web platforms.
   - However, the portfolio's current representation (specifically Slide 03 "WORK" and the `/work` archives) relies heavily on **synthetic SVG technical schematics** and abstract copy rather than **authentic field photography, real rover hardware closeups, actual software screenshots, and verifiable competition telemetry**.
2. **Approved Homepage Elements**:
   - **Slide 01 (Hero Quote)** and **Slide 02 (Identity)** are visually approved and established. Their typography, layout, suit-emblem motifs, and monochromatic styling with crimson red accents (`#E10600`) set a strong luxury editorial tone.
3. **Critical Redesign Target**:
   - **Slide 03 (WORK)** currently functions as a generic 4-column wireframe with decorative non-AI SVG schematics. It requires a complete redesign in Phase 2/3 into a featured, project-led presentation that highlights real engineering accomplishments with authentic visual media.
4. **Substantial Orphaned Code & Dead Dependencies**:
   - Legacy blog/project routing was recently removed, leaving behind dead libraries (`gray-matter`, `marked`, `remark`, `remark-html`) and heavy unused animation frameworks (`framer-motion`, `gsap`). All animations currently in production use pure CSS transitions and `requestAnimationFrame`.
5. **Flagship Project Discoveries on GitHub**:
   - Direct inspection of all 75 GitHub repositories revealed authentic, mature source code for:
     - `mercury`: Full-stack ROS 2 Jazzy autonomous navigation & turret vision system for ICMTC UGVC 2026.
     - `astrosushil`: Production monorepo with Flutter mobile app, Next.js admin dashboard, and Prisma backend.
     - `flaw_code` (ForgeOS): Production multi-agent AI engineering operating system.
     - `ocr`: Two-stage PaddleOCR + Ollama local LLM receipt extraction engine (CarbonCrunch internship).
     - `robotic_arm`: 6-DOF MoveIt 2 motion planning pipeline.
     - `vitals`: Custom C++ Raylib real-time robot telemetry graphing tool over raw UDP sockets.
     - `ugvc2024_ws`: Complete ROS 1 autonomous vehicle stack for UGVC 2024 (Egypt).
     - `IGVC2025` (`ashwini`): ROS autonomous ground vehicle for IGVC 2025 (Michigan).
     - Systems experiments: `mula` (bytecode compiler), `ganita` (mathematical language), `gnit` (custom VCS).

---

## 2. Existing Architecture

### 2.1 Framework & Runtime
- **Next.js**: `16.2.1` using App Router with Turbopack.
- **React**: `19.2.4` with `babel-plugin-react-compiler` enabled in `next.config.ts`.
- **TypeScript**: `5.x` with strict type checking enabled in `tsconfig.json`.
- **Static Export**: Prerendered as static HTML/JS for GitHub Pages compatibility (`next build` outputs 12 static HTML routes).

### 2.2 Styling & Design Tokens (`src/styles/globals.css`)
- **Engine**: Tailwind CSS v4 (`@import "tailwindcss";` via `@tailwindcss/postcss`).
- **Color Palette**:
  - Pure White: `#FFFFFF` (Slide 01 Hero, Slide 02 Identity, Slide 04 Numbers canvas).
  - Obsidian Dark: `#0A0A0A` (Slide 03 Work, slide container background, `/work` archives).
  - Deep Charcoal: `#111111` / `#171717` (Slide 05 Contact, card surfaces).
  - Brand Accent: `#E10600` (High-chroma crimson red for tie logo, active indicators, HUD reticles).
  - Subtle Gray: `#EDEDED` / `#E5E7EB` (Subtle dividers and borders).
- **Typography Tokens**:
  - `--font-editorial`: Playfair Display & Cormorant Garamond (`font-normal`, `italic`).
  - `--font-sans`: Inter (`font-light`, `font-black`).
  - `--font-mono`: Space Mono (`font-normal`, `font-bold`).

### 2.3 Route Inventory & Build Status
Running `next build` generates 12 static routes:
| Route | Type | Purpose | File Path |
|---|---|---|---|
| `/` | Static (SSG) | 5-Slide Full-Screen Presentation | `src/app/page.tsx` |
| `/work` | Static (SSG) | 4-Discipline Archive Index | `src/app/work/page.tsx` |
| `/work/robotics` | Dynamic SSG | Discipline Deep-Dive: Robotics | `src/app/work/[category]/page.tsx` |
| `/work/ai` | Dynamic SSG | Discipline Deep-Dive: Artificial Intelligence | `src/app/work/[category]/page.tsx` |
| `/work/app-dev` | Dynamic SSG | Discipline Deep-Dive: App Development | `src/app/work/[category]/page.tsx` |
| `/work/web-dev` | Dynamic SSG | Discipline Deep-Dive: Web Development | `src/app/work/[category]/page.tsx` |
| `/robots.txt` | Static Route | Search engine crawlers | `src/app/robots.ts` |
| `/sitemap.xml` | Static Route | SEO Sitemap generator | `src/app/sitemap.ts` |
| `/_not-found` | Static Route | Custom 404 handler | Default Next.js |
| `/icon.svg` | Asset Route | Vector favicon | `src/app/icon.svg` |

---

## 3. Homepage Audit

The homepage (`src/app/page.tsx`) implements a **fixed 5-slide viewport presentation** (`h-screen overflow-hidden`) with a global slide index (`currentSlide: 0..4`) and a transition lock (`TRANSITION_DURATION_MS = 750`).

### 3.1 Opening Vault Intro (`src/components/OpeningIntro.tsx`)
- **Implementation**: Two physical white door panels (`w-1/2`) split along the vertical axis using cubic bezier easing (`cubic-bezier(0.7,0,0.3,1)`), while the central `SuitEmblem` scales up and splits to reveal the crimson tie.
- **Safety Fallback**: Includes a `2200ms` safety timer that guarantees the intro will clean up and unblock interaction on mobile or slow devices.
- **Audit Verdict**: **Approved & Working Well**. Retain as-is.

### 3.2 Brand Emblem (`src/components/SuitEmblem.tsx`)
- **Implementation**: Handcrafted SVG vector graphic representing a tailored tuxedo jacket, shirt collar, and crimson red tie. Supports dynamic `splitProgress` (0 to 1) via SVG clip-paths.
- **Audit Verdict**: **Approved & Core to Brand**. Retain as the signature motif.

### 3.3 Dynamic Header (`src/components/SectionIndicator.tsx`)
- **Implementation**: Inset header at top of viewport.
  - Logo `[LOGO] VEDANT SINGH` is visible on Slide 01 and Slide 02, then smoothly fades out on Slides 03, 04, and 05.
  - 5-dot navigation tracks active slide and inverts color based on `DARK_SLIDES = new Set([2, 4])`.
- **Audit Verdict**: **Approved**. Elegant, minimal, and unobtrusive.

### 3.4 Slide 01 — Hero Quote (`HeroQuoteSection.tsx`)
- **Status**: **Approved visually**.
- **Implementation**: Monumental editorial quote randomly selected from `src/data/quotes.ts` upon mount, with key words highlighted in italic crimson red (`#E10600`). Bottom suit emblem acts as advance trigger.
- **Audit Verdict**: Retain without modification.

### 3.5 Slide 02 — Identity (`IdentitySection.tsx`)
- **Status**: **Approved visually**.
- **Implementation**: Massive stacked typography (`ENGINEER` / `BUILDER` / `DEVELOPER`), disciplines (`ROBOTICS` / `AI` / `SYSTEMS`), and background photographic silhouette (`/editorial/identity-silhouette.jpg`) dissolved into white.
- **Audit Verdict**: Retain without modification.

### 3.6 Slide 03 — Work (`WorkSection.tsx`) — REQUIRES COMPLETE REDESIGN
- **Current Implementation**:
  - Splits the dark `#0A0A0A` viewport into 4 equal vertical columns (`01 ROBOTICS`, `02 AI`, `03 APP DEV`, `04 WEB DEV`).
  - Each column renders a background SVG schematic (`CategoryArt`), discipline stats, and tags.
- **Critical Architectural & UX Deficiencies**:
  1. **Too Conceptual & Abstract**: The 4 columns look like wireframe placeholders or decorative wallpaper rather than an authoritative showcase of real autonomous rovers and software systems.
  2. **No Real Visual Proof**: It lacks actual rover field photographs, competition track imagery, or software UI previews.
  3. **Weak Information Hierarchy**: Visitors cannot immediately tell what Vedant *actually built* (e.g., AGNI rover, UGV-DTU, ForgeOS, Astro Sushil, CarbonCrunch OCR).
  4. **Poor Mobile Adaptation**: On small screens, the 4 vertical columns stack awkwardly into cramped cards that overflow the 100vh constraint.
- **Redesign Direction**:
  - Rebuild Slide 03 into a **Featured Project-Led Presentation** that balances editorial typography with real engineering photography, clear discipline navigation, and direct access to in-depth case studies.

### 3.7 Slide 04 — Numbers (`NumbersSection.tsx`)
- **Status**: **Reviewed — Minor Content Deficiencies Identified**.
- **Current Implementation**: 4 monumental figures (`04 YEARS`, `01 ROBOT`, `05 PROJECTS`, `XX COMPETITIONS`) over an atmospheric monochrome landscape (`/editorial/numbers-landscape.jpg`).
- **Deficiencies**:
  - `"XX COMPETITIONS"` is an unresolved placeholder string.
  - `"01 ROBOT BUILT & COMPETED"` drastically undersells Vedant's actual record (he has engineered AGNI, Ashwini for IGVC 2025, Mercury for UGVC 2026, and collegiate rovers for UGVC 2024).
- **Recommendation**: Retain existing layout and visual styling; replace placeholder figures with verified metrics in Phase 4.

### 3.8 Slide 05 — Contact (`ContactSection.tsx`)
- **Status**: **Reviewed — Layout Sound**.
- **Current Implementation**: Monumental text `"LET'S MAKE SOMETHING TOGETHER"`, minimal links (GitHub, LinkedIn, Email), and a suited handshake graphic (`/editorial/contact-handshake.png`).
- **Recommendation**: Keep as-is; ensure all outbound URLs open in new tabs with proper security attributes.

---

## 4. Work Archive Audit (`/work` & `/work/[category]`)

### 4.1 Index Page (`src/app/work/page.tsx`)
- Master listing of the 4 disciplines with metrics, non-AI schematic banners, and links into `/work/[category]`.
- **Issue**: Repeats the same abstract SVG cards found on Slide 03 rather than showcasing real project imagery.

### 4.2 Dynamic Category Route (`src/app/work/[category]/page.tsx` & `WorkCategoryView.tsx`)
- **Strengths**:
  - Clean static generation with `generateStaticParams()`.
  - Comprehensive feature set: project filtering by technology tag, metric cards, architectural highlights, and achievement listings.
- **Deficiencies**:
  1. **Content Disconnect**: The detailed data in `workCategories.ts` mixes real projects (`agni`, `ugv-dtu`, `astro-sushil`) with idealized placeholder descriptions (`osmium-kernel` claiming 64KB bare metal microkernel with PIT scheduling, when the repo is an initial kernel exploration).
  2. **Heavy Synthetic SVGs**: `CategoryArt.tsx`, `RoboticsArt.tsx`, `AiArt.tsx`, `AppDevArt.tsx`, and `WebDevArt.tsx` total **over 1,600 lines of complex SVG code**. While visually intricate, they function as stylized decorations rather than authentic technical diagrams.
  3. **No Case-Study Depth**: Clicking on a project in the grid does not open a dedicated case study; it simply links outward to GitHub or a live demo. Rich project narratives (like `agni.md` and `scheduler-rewrite.md`) are stranded in unrendered markdown files.

---

## 5. Complete GitHub Repository Inventory

An exhaustive audit of all 75 public repositories under `github.com/vedantsinggh` was conducted using the authenticated GitHub API. Below is the complete catalog grouped by maturity and relevance:

### 5.1 Tier 1: Flagship Engineering Projects (Primary Portfolio Case Studies)

| # | Repository Name | Primary Tech | Description & Architecture | Source Substance | Portfolio Suitability |
|---|---|---|---|---|---|
| 1 | **`astrosushil`** | Dart / TypeScript / Flutter | Enterprise astrology & astronomical ephemeris calculation platform. Monorepo containing: Flutter iOS/Android app (`apps/mobile`), Next.js admin dashboard (`apps/admin`), and Prisma/PostgreSQL backend (`apps/api`). | High (100+ commits, multi-app monorepo, Docker Compose, unit tests). | **Top Tier Flagship** (Web & App Dev). |
| 2 | **`flaw_code`** (ForgeOS) | Python / TypeScript / Docker | Multi-agent autonomous AI software engineering OS. Orchestrated by Hermes agent; features OpenClaw executor, QA verification agent, Security audit agent, Slack webhooks, and GitHub PR integration. | High (Comprehensive `ARCHITECTURE.md`, multi-agent loop, FastAPI backend, React frontend). | **Top Tier Flagship** (AI & Systems). |
| 3 | **`mercury`** | ROS 2 Jazzy / C++ / Python | Official autonomous vehicle software stack for ICMTC UGVC-2026. Contains 11 packages: `bringup`, `control`, `description` (URDF/Xacro), `hardware`, `localization`, `logger`, `perception`, `planning`, `simulation`, `turret_vision`, `watchdog_monitor`. | Very High (Full ROS 2 workspace, real robot description, computer vision pipelines). | **Top Tier Flagship** (Robotics & Autonomy). |
| 4 | **`ocr`** | Python / PaddleOCR / Ollama | Two-stage receipt document parsing pipeline (CarbonCrunch ML Ops project). Preprocessing with OpenCV, text extraction with PaddleOCR, structured JSON extraction via local Ollama LLMs, and automated HTML reporting. | High (Functional pipeline, sample financial output, concurrent process pool). | **Top Tier Flagship** (AI & ML). |
| 5 | **`robotic_arm`** | ROS 2 / MoveIt 2 / Python | 6-DOF robotic manipulator planning and control system. Includes `piper_description` (URDF), `piper_moveit_config`, and `piper_task` motion planning nodes with collision avoidance in RViz. | High (Tested ROS 2 MoveIt 2 workspace). | **Strong Supporting** (Robotics & Manipulation). |
| 6 | **`vitals`** | C++ / Raylib / Sockets | Real-time robot telemetry GUI. Listens on raw network sockets (port 1234), decodes streaming data packets, and renders live rolling graph visualizers with zero UI latency using Raylib. | Medium-High (Real C++ socket implementation, custom UI rendering). | **Strong Supporting** (Embedded / Ground Station). |
| 7 | **`ugvc2024_ws`** | ROS 1 / C++ / Python | Official autonomous navigation stack for ICTMC UGVC 2024 (Egypt). Packages include `terrain_traversing`, `waypoint_navigation_gps`, `waypoint_navigation_imu`, `black_box_detection`, `metal_detection`, and `sensors_hub`. | High (Comprehensive multi-mission competition stack). | **Top Tier Flagship** (Competition Robotics). |
| 8 | **`IGVC2025`** (`ashwini`) | ROS / C++ / CMake | Autonomous ground vehicle stack for Intelligent Ground Vehicle Competition 2025 (Michigan). Contains robot platform package `ashwini` with URDF, Gazebo simulation worlds, RViz configs, and navigation launch scripts. | High (Complete competition package). | **Top Tier Flagship** (Competition Robotics). |

---

### 5.2 Tier 2: Strong Supporting Systems & Tooling

| # | Repository Name | Primary Tech | Description & Architecture | Portfolio Role |
|---|---|---|---|---|
| 9 | **`lead`** | JavaScript / Node.js / React | Real-time, fast collaborative LaTeX editor with dedicated backend compile server (`latexServer.js`) and Tailwind CSS frontend. | Supporting Web Application. |
| 10 | **`elevate`** / **`jeeup`** | JavaScript / React / Firebase | Foundational repositories for JEE Elevate exam preparation platform. Firebase Firestore backend, authentication, and client test engine. | Supporting Educational Platform. |
| 11 | **`ganita`** | C++ | Domain-specific mathematical evaluation language implementing Reverse Polish Notation (RPN) and custom AST parsing. | Supporting Systems Language. |
| 12 | **`gnit`** | C++ | Minimalist cross-platform version control system built from scratch in C++. | Supporting Systems Tool. |
| 13 | **`celf`** | C++ | Software rendering 2D graphics API in C++ writing directly to PPM image format. | Supporting Graphics Engine. |
| 14 | **`sonic`** | C++ | Terminal-based audio player built with C++ and audio backend bindings. | Supporting CLI Tool. |
| 15 | **`guardian`** | Python | CLI productivity tool for fetching and managing LeetCode problems directly from the terminal. | Supporting Developer Tool. |
| 16 | **`mula`** | C++ / Jasmin | Compiler implementation for custom language `.mula` generating Java Virtual Machine bytecode via Jasmin assembler. | Supporting Compiler Engineering. |
| 17 | **`atmosplay`** | Python / TypeScript | Machine learning prediction pipeline with evaluation plots (`actual_vs_predicted.png`) and React web client. | Supporting ML Project. |
| 18 | **`teal`** | Dart / Flutter | Multi-platform application with full CLI, server backend, and web client. | Supporting Full-Stack App. |
| 19 | **`ugvc2024_arduino`**| C++ / Arduino | Low-level firmware for IMU sensor polling and motor driver PWM control for UGVC 2024. | Supporting Firmware. |
| 20 | **`UURT`** | Markdown / Docs | UGV-DTU Universal Repository Template with engineering guidelines (`STANDARDS.md`, `TESTING_STANDARDS.md`). | Leadership / Team Governance. |

---

### 5.3 Tier 3: Algorithmic Libraries, Utilities & Experiments
*These demonstrate coding curiosity and low-level mechanics, but should be listed as secondary GitHub links rather than major case studies.*

| Repositories | Technologies | Scope & Purpose |
|---|---|---|
| `osmium`, `os` | C, Assembly, C++ | Educational operating system kernel experiments, bootloaders, and paging exploration. |
| `iGen`, `boom`, `engine`, `theft` | C, C++, ShaderLab | Math matrix libraries, Doom-style raycasting, Unity shader experiments, and game prototypes. |
| `trie`, `levenshtein-distance-calculator`, `SPELL-CLI`, `spell`, `json_parser` | C++ | Data structure implementations: tries, spellcheckers, Wagner-Fischer algorithm, and custom JSON tokenizer. |
| `log.h`, `files`, `cupid` | C++ | Header-only utility libraries: logging macros, SHA hashing wrappers, string manipulation. |
| `drivemanager`, `driveX`, `assit-bot`, `assit-bot-cli`, `chat-n-game-room` | Python, JS, Java | Google Drive CLI automation, chatbot scripts, multi-player socket chat experiments. |
| `aoc2025`, `dsa` | C++ | Advent of Code solutions, competitive programming, and algorithm benchmarks. |
| `VanillaNest`, `beam`, `la`, `clove`, `cpt`, `farben`, `caterpillar`, `flux.js`, `quartz`, `haiku`, `nim`, `bay` | C, JS, CSS, Python | Micro-experiments: CSS art, micro-frameworks, birthday animations, color calculators. |

---

### 5.4 Tier 4: External Forks
*Forks of external open-source projects or team dependencies (must not be represented as original solo creations):*
- `ecosi` (Linux-Android connectivity bridge fork)
- `mercury` (Collegiate team fork of UGVC 2026 repository)
- `chess-engine` (Dart chess engine fork)
- `linux` (Linux kernel source tree fork)
- `UURT` (UGV-DTU repository template fork)
- `algo-viz` (Algorithm visualizer fork)
- `inlab` (Academic laboratory fork)
- `IGVC2025` (Team fork for IGVC autonomous vehicle)
- `snakegame` (C snake game fork)
- `MERN_ASSIGMENT` (Classroom assignment fork)
- `ugvc2024_ws` (Team fork of UGVC 2024 workspace)

---

## 6. Resume Cross-Reference & Evidence Verification

Every credential and claim from Vedant Singh's professional resume was cross-referenced against codebase and repository artifacts:

| Resume Claim | Category | Verification Status | Repository / Evidence Findings | Audit Notes |
|---|---|---|---|---|
| **SEVA First** — Software Engineer (Ministry of Education, 50k+ registrations, 1k+ daily visitors, led 6 engineers) | Work Experience | **Resume-Supported** (Enterprise / Institutional) | No public GitHub repository exists under `vedantsinggh`. The codebase is an institutional Ministry of Education private deployment. | Document as an enterprise production engagement. Highlight leadership, concurrency, and security architecture without inventing artificial GitHub links. |
| **CarbonCrunch** — ML Ops Intern (OCR & document parsing, PyTorch, React dashboards, AWS ECS, k6 testing) | Work Experience | **Fully Verified** | Verified by public repository `vedantsinggh/ocr`. Contains two-stage PaddleOCR + Ollama pipeline, `preprocessor.py`, `pipeline.py`, and `financial_summary.json`. | Strong candidate for an AI / ML Ops case study. Real source code exists. |
| **JEE Elevate** — Founding Tech Lead (Node.js microservices, 200+ users, CI/CD, 5-member team) | Work Experience / Startup | **Fully Verified** | Verified by public repositories `vedantsinggh/elevate` and `vedantsinggh/jeeup`. Firebase rules, React mock exam engine. | Strong candidate for Web / Startup case study. |
| **Astro Sushil** (Vedic astrology engine, ephemeris calculations, reports) | Project | **Fully Verified** | Verified by public monorepo `vedantsinggh/astrosushil` (Flutter mobile app, Next.js admin, Prisma/Node.js API). Pushed as recently as Oct 31, 2026. | Top-tier Web & App Dev case study. |
| **AI-Powered Receipt Understanding System** | Project | **Fully Verified** | Matches `vedantsinggh/ocr` repository. | Combine with CarbonCrunch internship narrative. |
| **Flaw Code** (Autonomous software engineering agent system) | Project | **Fully Verified** | Matches `vedantsinggh/flaw_code` (ForgeOS Multi-Agent AI Engineering Operating System with Hermes orchestration). | Top-tier AI case study. |
| **Avni — Autonomous Field Operations Rover** | Project / Hardware | **Partially Verified** (Platform Name Alignment Needed) | The software stacks for Vedant's rovers exist across `mercury` (UGVC 2026), `IGVC2025` (rover name `ashwini`), and `ugvc2024_ws`. Local markdown files describe `AGNI`. | Clarify whether **Avni** is the physical rover chassis name, while **AGNI** is the algorithm/fusion research framework. |
| **AGNI: Adaptive Sensor Fusion & Navigation Research** (IEEE 44th ICCE, 32% error reduction, 95.5% success rate) | Research & Publication | **Strongly Supported by Code & Notes** | Described in detail in `src/content/projects/agni.md` with exact formulas, Kalman gain equations, and HCAF architecture. Matching stack in `ugvc2024_ws` and `mercury`. | Top-tier Research case study. A copy or preprint of the IEEE paper should be linked. |
| **UGV-DTU Leadership** (Team Captain, Team Manager, 50-member team lead) | Leadership | **Fully Verified** | GitHub profile lists `company: "UGV-DTU"`. Multiple team repos (`UURT`, `IGVC2025`, `ugvc2024_ws`, `mercury`) show leadership and commit contributions. | Core identity anchor for the entire portfolio. |
| **Competitions**: UGVC 2026 (Egypt), Space Drone 2026, IGVC 2025 (Michigan), UGVC 2024 (Egypt) | Achievements | **Fully Verified** | Repositories `mercury` (UGVC 2026), `IGVC2025`, and `ugvc2024_ws` directly confirm these competition deployments. | Feature prominently under Robotics and Achievements. |

---

## 7. Project Prioritization

To prevent portfolio clutter, projects must be prioritized into flagship case studies versus secondary index listings:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TIER 1: FLAGSHIP CASE STUDIES                  │
│   (Deserve rich dedicated case-study pages with field media & metrics)  │
├────────────────────────────────────────────────────────────────────────┤
│ 1. AGNI & Avni Rover Stack (Robotics & Research: IEEE ICCE paper)     │
│ 2. UGV-DTU Competition Systems (UGVC 2024/2026, IGVC 2025 Michigan)   │
│ 3. ForgeOS / Flaw Code (AI: Multi-Agent Software Engineering OS)       │
│ 4. Astro Sushil Platform (Web & App: Ephemeris Engine, Flutter, Next) │
│ 5. Receipt Understanding Pipeline (AI/ML Ops: CarbonCrunch Internship) │
│ 6. SEVA First Platform (Web & Systems: Ministry of Education Platform) │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│                      TIER 2: SECONDARY FEATURED WORK                   │
│         (Prominently summarized in discipline index with GitHub links)  │
├────────────────────────────────────────────────────────────────────────┤
│ • 6-DOF Manipulator & MoveIt 2 Motion Planning (`robotic_arm`)         │
│ • Vitals Real-Time Telemetry GUI in C++ / Raylib (`vitals`)            │
│ • JEE Elevate Online Assessment Engine (`elevate` / `jeeup`)           │
│ • Lead Real-Time LaTeX Collaborative Compiler (`lead`)                 │
│ • Ganita Mathematical Language & RPN Interpreter (`ganita`)            │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│                    TIER 3: SYSTEMS & ALGORITHMIC LAB                   │
│        (Curated "Engineering Lab" grid of open-source repositories)     │
├────────────────────────────────────────────────────────────────────────┤
│ • GNIT: Minimalist Git implementation in C++ (`gnit`)                  │
│ • CELF: Software-rendering 2D graphics API in C++ (`celf`)             │
│ • Mula: Java bytecode compiler (`mula`)                                │
│ • Sonic: Terminal music player (`sonic`)                               │
│ • Low-Level Kernel & Paging experiments (`osmium`)                     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Photography and Asset Audit

Every visual file in `public/` was analyzed for dimensions, format, file size, integrity, and portfolio suitability:

| File Path | Format | Dimensions | File Size | Subject / Description | Current Reference | Suitability for Redesigned Portfolio |
|---|---|---|---|---|---|---|
| `public/editorial/identity-silhouette.jpg` | JPEG | 1376 × 768 | 534.7 KB | Suited man overlooking urban skyline at dusk. | `IdentitySection.tsx` (Slide 02) | **Keep**. Approved for Slide 02. |
| `public/editorial/identity-portrait.jpg` | JPEG | 1376 × 768 | 534.7 KB | **Identical duplicate** of `identity-silhouette.jpg` (same MD5: `fbdd4f8a...`). | Unused | **Remove in Phase 5** (Redundant 534 KB duplicate). |
| `public/editorial/contact-handshake.png` | PNG | 896 × 1200 | 167.4 KB | Stylized line artwork of suited handshake with red tie accent. Transparent. | `ContactSection.tsx` (Slide 05) | **Keep**. Clean, lightweight transparent graphic. |
| `public/editorial/contact-handshake.jpg` | JPEG | 896 × 1200 | 365.1 KB | Same handshake graphic with solid black background. | Unused | **Remove in Phase 5** (Redundant). |
| `public/editorial/contact-seated.jpg` | JPEG | 1376 × 768 | 663.0 KB | Editorial photograph of man seated in dark suit. | Unused | **Candidate** for About/Profile section. |
| `public/editorial/contact-other.jpg` | JPEG | 1376 × 768 | 663.0 KB | **Identical duplicate** of `contact-seated.jpg` (same MD5: `1da23f5b...`). | Unused | **Remove in Phase 5** (Redundant 663 KB duplicate). |
| `public/editorial/numbers-landscape.jpg` | JPEG | 1376 × 768 | 781.5 KB | Atmospheric monochrome mountain ridge with standing figure. Masked at bottom. | `NumbersSection.tsx` (Slide 04) | **Keep**. Approved backdrop for Slide 04. |
| `public/editorial/work-ugv.jpg` | JPEG | 768 × 1376 | 965.0 KB | AI-generated illustration of planetary rover on Martian landscape. Portrait orientation. | `data/projects.ts` (dead) | **REJECT / REPLACE**. Conflicts with authentic engineering direction. Must be replaced with real UGV-DTU / Avni rover photos. |
| `public/editorial/work-seva.jpg` | JPEG | 768 × 1376 | 636.2 KB | Abstract tech dashboard UI. Portrait orientation. | `data/projects.ts` (dead) | **REPLACE** with authentic SEVA First architecture diagram or actual portal screenshot. |
| `public/editorial/work-astro.jpg` | JPEG | 768 × 1376 | 872.7 KB | Celestial sphere rendering. Portrait orientation. | `data/projects.ts` (dead) | **REPLACE** with real Astro Sushil Flutter mobile screenshot or Next.js admin UI. |
| `public/editorial/work-other.jpg` | JPEG | 768 × 1376 | 720.2 KB | Dark coding workstation with glowing screens. Portrait orientation. | `data/projects.ts` (dead) | **REPLACE** with actual terminal/MoveIt/Raylib screenshots. |
| `public/assets/meai.jpeg` | JPEG | 1194 × 1486 | 403.3 KB | AI-stylized portrait headshot. | Unused | **DO NOT USE**. Replace with natural, high-resolution portrait photograph. |
| `public/assets/rover-hero.jpg` | JPEG | 1376 × 768 | 978.7 KB | AI-generated 4-wheel rover in red desert. | Unused | **DO NOT USE**. Must never replace real DTU engineering photography with AI rovers. |
| `public/assets/quote-hiker.jpg` | JPEG | 1376 × 768 | 718.0 KB | Hiker on mountain ridge. | `ugv-dtu.md` (dead) | Secondary landscape asset; unreferenced in live UI. |
| `public/assets/mountain-philosophy.jpg` | JPEG | 1376 × 768 | 814.2 KB | Moody alpine peak. | `osmium.md` (dead) | Secondary landscape asset; unreferenced in live UI. |
| `public/favicon.svg` | SVG | Vector | 1.0 KB | Suit lapel & red tie SVG icon. | Active Favicon | **Keep**. Crisp vector asset. |

---

## 9. Missing Content & Visual Media Gap Analysis

To fulfill the **Warm Editorial × Engineering Field Journal** direction, the following authentic assets must be provided by Vedant for Phase 3/4:

### Critical Media Gaps (Must Be Sourced from Real Work)
1. **Robotics & Autonomous Systems (Avni / UGV-DTU / AGNI / Mercury)**:
   - **Real Rover Field Photographs**: Avni rover operating on outdoor grass, gravel, or dirt course at DTU or UGVC Egypt.
   - **Hardware Closeups**: Inverted-V suspension, BLDC hub motor mounts, custom Power Distribution Board (PDB), wiring harness, LiDAR puck, stereo camera baseline.
   - **Competition Photos**: UGV-DTU team on the field at UGVC (Egypt) or IGVC (Michigan).
   - **Telemetry Visualizations**: RViz screenshots showing real 3D LiDAR point cloud, costmap, and GPS waypoint trajectories.
2. **Artificial Intelligence & ML Ops**:
   - **Receipt OCR Pipeline (CarbonCrunch)**: Real before-and-after sample showing input raw receipt image, PaddleOCR bounding boxes, and resulting structured JSON output.
   - **ForgeOS / Flaw Code**: Real diagram or screenshot of Hermes multi-agent Slack notifications and Kanban boards.
3. **Application & Web Development**:
   - **Astro Sushil**: Clean, uncompressed screenshots of the Flutter mobile app running on iOS/Android, and Next.js admin dashboard.
   - **SEVA First**: Real system architecture diagram (Go/Node.js, Redis, Postgres) or public portal homepage capture.
   - **Vitals GUI**: Live screenshot of the C++ Raylib telemetry graphing tool plotting active robot data.
4. **Professional Identity**:
   - **Authentic Portrait**: High-quality natural photograph of Vedant Singh (replacing `meai.jpeg`).

---

## 10. Dead-Code and Dependency Findings

### 10.1 Unused Heavy Dependencies in `package.json`

| Dependency | Version | Stated Purpose | Actual Usage in `src/` | Risk of Removal | Recommendation |
|---|---|---|---|---|---|
| **`framer-motion`** | `^12.38.0` | React animation library | **Zero imports across `src/`**. All transitions use pure CSS and `requestAnimationFrame`. | Low | Remove in Phase 5 to eliminate ~35KB+ of gzipped client bundle size. |
| **`gsap`** | `^3.15.0` | GreenSock animation engine | **Zero imports across `src/`**. | Low | Remove in Phase 5 to reduce bundle footprint. |
| **`remark`** | `^15.0.1` | Markdown parser | Only imported in orphaned file `src/lib/getPosts.ts`. | Low | Remove in Phase 5 when blog code is cleaned up. |
| **`remark-html`**| `^16.0.1` | Markdown HTML compiler | Only imported in orphaned file `src/lib/getPosts.ts`. | Low | Remove in Phase 5. |
| **`marked`** | `^17.0.5` | Fast markdown parser | Only imported in orphaned file `src/lib/getProjects.ts`. | Low | Remove or re-purpose if MDX case studies are built in Phase 3. |
| **`gray-matter`**| `^4.0.3` | YAML frontmatter parser | Only imported in orphaned files `getProjects.ts` and `getPosts.ts`. | Low | Retain only if markdown pipeline is reactivated for case studies. |

### 10.2 Orphaned Files & Legacy Remnants

| File Path | Description | Why It Is Dead / Redundant | Action for Phase 5 |
|---|---|---|---|
| `src/lib/getPosts.ts` | Blog post retrieval utility | Blog routes (`/blog`, `/blog/[slug]`) were deleted; this utility is never imported. | Safely delete in Phase 5. |
| `src/lib/getProjects.ts`| Markdown project loader | Project routes (`/projects`, `/projects/[slug]`) were deleted; the site now uses `workCategories.ts`. | Safely delete or modernize in Phase 3/5. |
| `src/data/projects.ts` | Legacy project item array | Completely unimported across the entire application; superseded by `workCategories.ts`. | Safely delete in Phase 5. |
| `src/content/blog/*` | 2 Markdown blog posts (`my-first-post.md`, `scheduler-rewrite.md`) | No blog routes exist to render these files. | **Preserve content**: `scheduler-rewrite.md` contains excellent technical text that should be incorporated into the Robotics case study. |
| `src/content/projects/*`| 3 Markdown project files (`agni.md`, `osmium.md`, `ugv-dtu.md`) | Not linked to dynamic routes. | **Preserve content**: `agni.md` has the authoritative IEEE ICCE architecture notes. |
| `public/editorial/identity-portrait.jpg` | Duplicate image | Exact byte-for-byte duplicate of `identity-silhouette.jpg`. | Delete duplicate in Phase 5. |
| `public/editorial/contact-other.jpg` | Duplicate image | Exact byte-for-byte duplicate of `contact-seated.jpg`. | Delete duplicate in Phase 5. |
| `public/editorial/contact-handshake.jpg`| Duplicate image | Superseded by transparent `contact-handshake.png`. | Delete duplicate in Phase 5. |

---

## 11. Design and UX Findings

### 11.1 The Approved Style: "Warm Editorial × Engineering Field Journal"
The approved direction merges the refined sophistication of high-end editorial magazines with the authentic, data-dense rigor of an engineering field notebook.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   WARM EDITORIAL × ENGINEERING FIELD JOURNAL           │
├───────────────────────────────────┬────────────────────────────────────┤
│         EDITORIAL REFINEMENT      │       FIELD JOURNAL RIGOR          │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Generous whitespace & margins   │ • Real hardware macro photography  │
│ • Elegant Playfair/Cormorant type │ • Space Mono telemetry & timings   │
│ • Monochromatic black/white base  │ • Real sensor fusion architecture  │
│ • Signature crimson red `#E10600` │ • Real benchmark accuracy figures  │
│ • Clean hairline rules (0.5-1px)  │ • Direct GitHub & code references  │
└───────────────────────────────────┴────────────────────────────────────┘
```

### 11.2 What Must Be Strictly Avoided
- **No Generic AI Visuals**: No futuristic floating spheres, purple neon gradients, or artificial rover concept art.
- **No Fake Glassmorphism**: Avoid blurry translucent cards that muddy typographic contrast.
- **No Dummy Terminal Windows**: Avoid decorative mock terminal chrome with fake typing effects.
- **No Identical Project Cards**: Avoid repeated generic card grids where every project looks identical regardless of discipline.

### 11.3 Specific Slide 03 (WORK) Redesign Requirements
1. **Featured Presentation**: Slide 03 must hero the **AGNI / Avni Autonomous Rover** and **UGV-DTU systems** with authentic photography, supported by direct discipline access tabs.
2. **Clear Discipline Routing**: Immediate, intuitive pathways into the 4 disciplines (`Robotics`, `AI`, `App Dev`, `Web Dev`).
3. **Responsive Stability**: Must fit flawlessly within standard desktop monitors and degrade gracefully to a clean swipe/scroll view on mobile without breaking the parent slide gesture engine.

---

## 12. Technical Risk Audit

| Risk Factor | Current Status | Impact & Mitigation |
|---|---|---|
| **Next.js Static Generation (SSG)** | **Low Risk** (Verified) | `npm run build` runs Turbopack and builds all 12 static HTML routes in under 9 seconds. `generateStaticParams()` works properly on `/work/[category]`. |
| **GitHub Pages Asset Base Path** | **Low Risk** (Root domain) | Because the repository is named `vedantsinggh.github.io`, it deploys directly to the root path (`/`). No `basePath` prefixing issues. |
| **Viewport Slide Physics on Mobile** | **Medium Risk** | `page.tsx` uses a fixed container (`fixed inset-0 overflow-hidden`) with touch-swipe listeners. If a slide's inner content exceeds viewport height on mobile, users can get trapped. **Mitigation**: Any redesigned slide content must be strictly constrained to `100dvh` or provide internal overflow scrolling. |
| **Unused Bundle Weight** | **Low Risk** | Currently mitigated because `framer-motion` and `gsap` are not imported into the bundle. Removing them from `package.json` in Phase 5 will clean dependencies and speed up CI/CD. |
| **Image Loading & CLS** | **Low Risk** (Well Managed) | Existing images use `next/image` with `fill` and explicit `sizes` attributes. CLS is 0.00. Real photographs in Phase 3 must maintain WebP/AVIF compression under 400KB. |
| **SEO & OpenGraph Metadata** | **Low Risk** | Root layout defines canonical `metadataBase`, OpenGraph tags, title, description, and keywords. `/robots.txt` and `/sitemap.xml` are active. |

---

## 13. Recommended Future Architecture

```
                  ┌─────────────────────────────────────┐
                  │       HOMEPAGE (5-Slide Engine)     │
                  │   Slide 01: Hero Quote (Approved)   │
                  │   Slide 02: Identity   (Approved)   │
                  │   Slide 03: WORK (Redesigned)       │
                  │   Slide 04: Numbers    (Approved)   │
                  │   Slide 05: Contact    (Approved)   │
                  └──────────────────┬──────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           │                                                   │
┌──────────▼──────────────────────────┐     ┌──────────────────▼─────────────────┐
│     /work: MASTER DISCIPLINE INDEX  │     │   DEDICATED CASE STUDIES (/work/*) │
│  Curated editorial index connecting │     │  • /work/agni-autonomous-rover     │
│  all 4 disciplines with real media  │     │  • /work/ugv-dtu-systems           │
│  and verified project inventory     │     │  • /work/flaw-code-forgeos         │
└──────────────────┬──────────────────┘     │  • /work/astrosushil-platform      │
                   │                        │  • /work/receipt-ocr-pipeline      │
                   │                        │  • /work/seva-first-architecture   │
                   │                        └──────────────────┬─────────────────┘
                   ▼                                           │
┌──────────────────────────────────────────────────────────────▼─────────────────┐
│                       SINGLE SOURCE OF TRUTH DATA ARCHITECTURE                 │
│                      `src/data/caseStudies.ts` (Typed Schema)                  │
│       • Full technical parameters, real media paths, and verified metrics     │
│       • Integrated with authentic markdown technical field notes               │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 14. Six-Phase Implementation Roadmap

- **Phase 1: Complete Portfolio Audit & Discovery** *(CURRENT — COMPLETE)*
  - Exhaustive inspection of local codebase, assets, and all 75 GitHub repositories.
  - Resume cross-referencing and verification matrix.
  - Output: `docs/PORTFOLIO_AUDIT_PHASE_1.md`.
- **Phase 2: Strategy, Information Architecture & Case Study Planning** *(NEXT)*
  - Finalize exact project case-study selection.
  - Structure the Unified Case Study data schema.
  - Wireframe and mock the redesigned Slide 03 (WORK) layout.
- **Phase 3: Work Section & Case Study Architecture Implementation**
  - Implement redesigned Slide 03 on the homepage.
  - Implement dedicated case-study page templates with field journal typography and real media galleries.
- **Phase 4: Content & Real Photography Integration**
  - Replace AI placeholders with authentic rover field photos, hardware shots, and app screenshots.
  - Update numbers and metrics across Slide 04.
- **Phase 5: Codebase Cleanup, Dead-Code Removal & Performance Tuning**
  - Remove unused dependencies (`framer-motion`, `gsap`, `remark`, `remark-html`).
  - Purge orphaned files and duplicate assets.
  - Verify 100/100 Lighthouse performance.
- **Phase 6: Quality Assurance, Cross-Browser Verification & Launch Readiness**
  - Full mobile gesture, keyboard, and cross-browser testing.
  - GitHub Pages deployment verification.

---

## 15. Open Questions & Strategic Decisions for Vedant

Before proceeding to Phase 2 implementation planning, please provide your preference on these architectural and branding decisions:

1. **Rover Platform Naming & Hierarchy**:
   - The resume cites **Avni**, the IEEE ICCE paper and local notes cite **AGNI**, the IGVC 2025 repo uses **ashwini**, and UGVC 2026 uses **mercury**.
   - *Question*: How should these be presented? (e.g. "Avni — Autonomous Field Rover Platform running the AGNI Adaptive Sensor Fusion Stack").
2. **SEVA First Public Presentation**:
   - As an institutional Ministry of Education platform without a public GitHub repository, should SEVA First be presented as an **Architecture & Systems Case Study** focusing on backend scalability, Redis caching, and concurrency?
3. **Availability of Authentic Photography**:
   - Do you have 3 to 6 real photographs of the UGV-DTU rover hardware, competition runs in Egypt/Michigan, or high-res screenshots of Astro Sushil and ForgeOS?
4. **Slide 03 Homepage Interaction**:
   - For the redesigned Slide 03: Do you prefer a **Featured Hero Project carousel** (highlighting AGNI and Astro Sushil with discipline switcher pills) or an **asymmetric 4-discipline editorial split** with real thumbnail photography?

---

## 16. Concise Asset Reference Inventory Table

*Quick reference table for Phase 3/4 asset replacements:*

| Asset Path | Size | Dimensions | Status | Target Action |
|---|---|---|---|---|
| `/editorial/identity-silhouette.jpg` | 534.7 KB | 1376 × 768 | **Keep** | Retain on Slide 02. |
| `/editorial/identity-portrait.jpg` | 534.7 KB | 1376 × 768 | **Duplicate** | Delete in Phase 5. |
| `/editorial/contact-handshake.png` | 167.4 KB | 896 × 1200 | **Keep** | Retain on Slide 05. |
| `/editorial/contact-handshake.jpg` | 365.1 KB | 896 × 1200 | **Duplicate** | Delete in Phase 5. |
| `/editorial/contact-seated.jpg` | 663.0 KB | 1376 × 768 | **Standby** | Reserve for Profile/About. |
| `/editorial/contact-other.jpg` | 663.0 KB | 1376 × 768 | **Duplicate** | Delete in Phase 5. |
| `/editorial/numbers-landscape.jpg` | 781.5 KB | 1376 × 768 | **Keep** | Retain on Slide 04. |
| `/editorial/work-ugv.jpg` | 965.0 KB | 768 × 1376 | **AI Artifact** | **Replace with real rover photo**. |
| `/editorial/work-seva.jpg` | 636.2 KB | 768 × 1376 | **Stock Graphic** | **Replace with SEVA architecture diagram**. |
| `/editorial/work-astro.jpg` | 872.7 KB | 768 × 1376 | **Abstract Render** | **Replace with Astro Sushil Flutter UI**. |
| `/editorial/work-other.jpg` | 720.2 KB | 768 × 1376 | **Stock Graphic** | **Replace with Vitals / MoveIt screenshot**. |
| `/assets/meai.jpeg` | 403.3 KB | 1194 × 1486 | **AI Portrait** | **Replace with natural portrait photo**. |
| `/assets/rover-hero.jpg` | 978.7 KB | 1376 × 768 | **AI Artifact** | **Do not use in production**. |
| `/assets/quote-hiker.jpg` | 718.0 KB | 1376 × 768 | **Unreferenced** | Archive / remove. |
| `/assets/mountain-philosophy.jpg` | 814.2 KB | 1376 × 768 | **Unreferenced** | Archive / remove. |
| `/favicon.svg` | 1.0 KB | Vector | **Keep** | Retain active brand icon. |

---
*Report generated strictly in read-only audit mode. Repository working tree remains uncommitted and source code untouched.*
