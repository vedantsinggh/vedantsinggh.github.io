# Portfolio Image Asset Specification & Replacement Checklist

This document details every image asset used across Vedant Singh's portfolio.

Your uploaded placeholder image is already active across every single image slot in the portfolio. Whenever you are ready to replace a placeholder with an authentic photograph or screenshot, simply overwrite the corresponding file in `public/projects/` or `public/editorial/` with the same filename. No code edits or rebuild configurations are required.

---

## 1. Homepage Editorial Slides

| # | File Name | Destination Path | Dimensions / Aspect | Subject & Art Direction |
|---|-----------|------------------|---------------------|--------------------------|
| 1 | `identity-silhouette.jpg` | `public/editorial/identity-silhouette.jpg` | 1440×1920 (3:4 or Portrait) | High-contrast suited silhouette or personal portrait overlooking urban skyline / campus. |
| 2 | `numbers-landscape.jpg` | `public/editorial/numbers-landscape.jpg` | 1920×1080 (16:9 Landscape) | Monochrome, atmospheric wide terrain / mountain range dissolving upwards into pure white canvas. |
| 3 | `contact-handshake.png` | `public/editorial/contact-handshake.png` | 1000×1000 (1:1 or Contain) | Minimalist white-line vector/drawing with crimson red accent tie depicting collaborative handshake. |

---

## 2. Four Discipline Previews (Homepage Slide 3 & Archive Hubs)

These rectangular thumbnails appear on Slide 3 (Work) and as discipline preview covers.

| # | File Name | Destination Path | Dimensions / Aspect | Subject & Art Direction |
|---|-----------|------------------|---------------------|--------------------------|
| 4 | `discipline-robotics.jpg` | `public/projects/discipline-robotics.jpg` | 1200×800 (3:2 or 16:10) | Field rover, mechanical suspension, or sensor mast on outdoor gravel. |
| 5 | `discipline-ai.jpg` | `public/projects/discipline-ai.jpg` | 1200×800 (3:2 or 16:10) | Neural network state graph, OCR bounding polygons, or terminal telemetry. |
| 6 | `discipline-app-dev.jpg` | `public/projects/discipline-app-dev.jpg` | 1200×800 (3:2 or 16:10) | Flutter mobile application interface or Raylib C++ 60 FPS strip chart. |
| 7 | `discipline-web-dev.jpg` | `public/projects/discipline-web-dev.jpg` | 1200×800 (3:2 or 16:10) | High-concurrency web dashboard or system architecture topology. |

---

## 3. Seven Core Engineering Case Studies (Flagship Detail Pages)

These wide panoramic stages appear at the top of each dedicated case study (`/work/<category>/<project>`) and on the master archive page (`/work`).

| # | Project | File Name | Destination Path | Aspect | Subject & Content Details |
|---|---------|-----------|------------------|--------|----------------------------|
| 8 | **Avni Rover** | `avni-rover.jpg` | `public/projects/avni-rover.jpg` | 16:9 or 21:9 (1920×1080) | Outdoor test-course photograph of Avni rover hardware, inverted-V suspension, and sensor mast at DTU. |
| 9 | **AGNI Fusion** | `agni-research.jpg` | `public/projects/agni-research.jpg` | 16:9 or 16:10 (1920×1080) | IEEE ICCE publication architecture diagram, dynamic covariance scaling flow, or degradation curve comparison. |
| 10 | **Astro Sushil (Mobile)** | `astro-sushil-mobile.jpg` | `public/projects/astro-sushil-mobile.jpg` | 9:16 or 9:14 (750×1334) | Authentic Flutter smartphone screen capture showing North/South Indian Kundali chart or consultation booking flow. |
| 11 | **Astro Sushil (Web)** | `astro-sushil-web.jpg` | `public/projects/astro-sushil-web.jpg` | 16:10 (1920×1200) | Next.js administrative desktop workstation showing appointment scheduling, client profiles, or automated PDF reports. |
| 12 | **ForgeOS** | `forgeos-graph.jpg` | `public/projects/forgeos-graph.jpg` | 16:9 or 4:3 (1600×1200) | Multi-agent state orchestration graph, Slack workflow thread telemetry, and OpenClaw task execution view. |
| 13 | **SEVA First** | `seva-first-portal.jpg` | `public/projects/seva-first-portal.jpg` | 16:9 or 16:10 (1920×1080) | Official SEVA First student registration dashboard, volunteer event portal, or high-concurrency Go backend telemetry. |
| 14 | **Receipt OCR** | `receipt-ocr-pipeline.jpg` | `public/projects/receipt-ocr-pipeline.jpg` | 16:9 or 4:3 (1600×1200) | Two-stage pipeline before-and-after sample: degraded thermal receipt, OpenCV deskewing, and structured JSON output. |
| 15 | **Vitals Ground Station** | `vitals-ground-station.jpg` | `public/projects/vitals-ground-station.jpg` | 16:9 or 16:10 (1920×1080) | Native C++ Raylib desktop viewport running 60 FPS live vehicle telemetry curves over UDP sockets. |

---

## 4. Supporting Archive Projects (Discipline Feeds)

These cards appear in the `/work/robotics`, `/work/ai`, `/work/app-dev`, and `/work/web-dev` archive feeds.

| # | Project | File Name | Destination Path | Aspect | Subject & Content Details |
|---|---------|-----------|------------------|--------|----------------------------|
| 16 | **Ashwini Rover (UGV-DTU)** | `ugv-dtu-systems.jpg` | `public/projects/ugv-dtu-systems.jpg` | 3:2 (1200×800) | Team competition photograph from IGVC Michigan or UGVC Egypt test courses. |
| 17 | **Robotic Arm** | `robotic-arm.jpg` | `public/projects/robotic-arm.jpg` | 4:3 (1200×900) | RViz MoveIt 2 motion planning trajectory and 6-DOF Piper arm simulation or physical test. |
| 18 | **Vitals Telemetry (Robotics)** | `vitals-telemetry.jpg` | `public/projects/vitals-telemetry.jpg` | 16:9 (1200×675) | Rolling UDP strip chart showing pitch/roll/yaw or motor temperatures. |
| 19 | **Edge Perception** | `edge-perception.jpg` | `public/projects/edge-perception.jpg` | 4:3 (1200×900) | TensorRT benchmark, off-road traversability costmap, or raw point cloud segmentation. |
| 20 | **Atmosplay** | `atmosplay.jpg` | `public/projects/atmosplay.jpg` | 16:9 (1200×675) | Machine learning regression evaluation scatter plot (actual vs predicted) or loss curves. |
| 21 | **Vitals App (Desktop)** | `vitals-app.jpg` | `public/projects/vitals-app.jpg` | 16:10 (1200×750) | Raylib desktop telemetry GUI with live packet ingestion. |
| 22 | **Teal** | `teal.jpg` | `public/projects/teal.jpg` | 4:3 (1200×900) | Multi-platform Flutter / Dart client UI and CLI terminal output. |
| 23 | **Sonic** | `sonic.jpg` | `public/projects/sonic.jpg` | 16:9 (1200×675) | Lightweight C++ terminal audio player running in Linux terminal. |
| 24 | **JEE Elevate** | `jee-elevate.jpg` | `public/projects/jee-elevate.jpg` | 16:10 (1200×750) | Online examination interface and student test score analytics dashboard. |
| 25 | **Lead LaTeX Editor** | `lead.jpg` | `public/projects/lead.jpg` | 4:3 (1200×900) | Real-time LaTeX split-screen code editor and live compiled PDF preview. |
| 26 | **Portfolio Engine** | `portfolio-engine.jpg` | `public/projects/portfolio-engine.jpg` | 16:9 (1200×675) | Editorial presentation or Lighthouse 100/100 performance audit score. |
| 27 | **Generic Fallback** | `placeholder.jpg` | `public/projects/placeholder.jpg` | 16:9 | Default fallback asset for any unassigned project or future project. |

---

## 5. Replacement Instructions

1. **Format**: JPG or PNG (JPEG recommended for photographs; PNG recommended for diagrams with fine line art).
2. **File Size**: Target **150 KB – 600 KB** per image for optimal web performance.
3. **How to replace**: Copy your real image file into `public/projects/<filename>` replacing the existing file of the same name.
4. **Instant Hot Reload**: In your local dev environment (`npm run dev`), Next.js immediately displays your new image without any re-compilation or server restarts.
