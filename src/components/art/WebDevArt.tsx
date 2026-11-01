"use client";

import React from "react";

interface ArtProps {
  className?: string;
  interactive?: boolean;
}

export default function WebDevArt({ className = "", interactive = true }: ArtProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
      title="High-Performance Web Architecture, DOM Tree & Distributed Edge Flow"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full object-contain transition-transform duration-700 ease-out ${
          interactive ? "group-hover:scale-105" : ""
        }`}
      >
        <defs>
          {/* Engineering Blueprint Grid */}
          <pattern id="web-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.04" />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" fillOpacity="0.15" />
          </pattern>

          {/* Red Glow Filter */}
          <filter id="web-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Cloud Stream Pipe Gradient */}
          <linearGradient id="stream-pipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#E10600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>

          {/* Glass Browser Fill */}
          <linearGradient id="browser-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#141414" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid Background */}
        <rect width="800" height="600" fill="url(#web-blueprint-grid)" />

        {/* ─── CORNER RETICLES & METADATA ───────────────────────────────── */}
        <g stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1">
          <path d="M 30 50 L 30 30 L 50 30" />
          <path d="M 770 50 L 770 30 L 750 30" />
          <path d="M 30 550 L 30 570 L 50 570" />
          <path d="M 770 550 L 770 570 L 750 570" />
        </g>
        <text x="32" y="24" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.25em" fontWeight="bold">
          WEB ARCHITECTURE
        </text>
        <text x="768" y="24" textAnchor="end" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.2em">
          PERF: 100 · HTTP/3 QUIC · EDGE GLOBAL
        </text>

        {/* ─── BROWSER VIEWPORT FRAME (LEFT / CENTER: X=70, Y=90, W=420, H=280) */}
        <g id="browser-viewport">
          {/* Outer Viewport Chassis */}
          <rect
            x="70"
            y="90"
            width="420"
            height="270"
            rx="6"
            fill="url(#browser-bg)"
            stroke="#FFFFFF"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />

          {/* Top Window Titlebar */}
          <line x1="70" y1="122" x2="490" y2="122" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" />
          {/* Traffic light control dots */}
          <circle cx="92" cy="106" r="3.5" fill="#E10600" />
          <circle cx="106" cy="106" r="3.5" fill="#FFFFFF" fillOpacity="0.3" />
          <circle cx="120" cy="106" r="3.5" fill="#FFFFFF" fillOpacity="0.3" />

          {/* Omnibox / URL Pill */}
          <rect x="145" y="98" width="220" height="16" rx="3" fill="#0A0A0A" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="0.8" />
          <text x="160" y="110" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="7.5" letterSpacing="0.05em">
            https://vedantsinggh.github.io/work
          </text>
          <circle cx="355" cy="106" r="2" fill="#E10600" filter="url(#web-glow-red)" />

          {/* Responsive Breakpoint Ruler Lines */}
          <line x1="160" y1="122" x2="160" y2="360" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="280" y1="122" x2="280" y2="360" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="390" y1="122" x2="390" y2="360" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 4" />
          <text x="160" y="132" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.3" fontFamily="var(--font-mono)" fontSize="6">
            320px
          </text>
          <text x="280" y="132" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.3" fontFamily="var(--font-mono)" fontSize="6">
            768px
          </text>
          <text x="390" y="132" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.3" fontFamily="var(--font-mono)" fontSize="6">
            1024px
          </text>

          {/* Wireframe Web Layout Inside Viewport */}
          {/* Header Bar */}
          <rect x="90" y="145" width="380" height="28" rx="2" fill="#1C1C1C" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
          <line x1="90" y1="145" x2="130" y2="145" stroke="#E10600" strokeWidth="2" />
          <text x="105" y="162" fill="#FFFFFF" fillOpacity="0.8" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            &lt;Header /&gt;
          </text>

          {/* Hero Section Wireframe with Editorial Typography Mockup */}
          <rect x="90" y="185" width="220" height="95" rx="2" fill="#181818" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
          <line x1="105" y1="205" x2="260" y2="205" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2.5" />
          <line x1="105" y1="218" x2="210" y2="218" stroke="#E10600" strokeWidth="2.5" />
          <line x1="105" y1="234" x2="280" y2="234" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="105" y1="244" x2="250" y2="244" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />

          {/* Call to action button */}
          <rect x="105" y="255" width="60" height="15" rx="2" fill="#E10600" />
          <text x="135" y="265" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="6" fontWeight="bold">
            EXPLORE
          </text>

          {/* Interactive Feature Card Sidebar */}
          <rect x="325" y="185" width="145" height="95" rx="2" fill="#161616" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="395" cy="225" r="24" stroke="#E10600" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="395" cy="225" r="4" fill="#E10600" filter="url(#web-glow-red)" />
          <text x="395" y="265" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="6">
            WEBGL_CANVAS_3D
          </text>

          {/* Grid Cards Row in Viewport */}
          {[0, 1, 2].map((idx) => (
            <rect
              key={idx}
              x={90 + idx * 130}
              y="292"
              width="120"
              height="55"
              rx="2"
              fill="#141414"
              stroke="#FFFFFF"
              strokeOpacity="0.15"
              strokeWidth="0.8"
            />
          ))}
        </g>

        {/* ─── DOM COMPONENT TREE & REACT RECONCILIATION (RIGHT: X=530..740) */}
        <g id="dom-component-tree" transform="translate(530, 90)">
          <text x="100" y="12" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em" fontWeight="bold">
            DOM HIERARCHY TREE
          </text>

          {/* Root Component Node */}
          <g transform="translate(100, 35)">
            <rect x="-45" y="-12" width="90" height="24" rx="3" fill="#1C1C1C" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="-45" y1="12" x2="45" y2="12" stroke="#E10600" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
              &lt;AppRoot&gt;
            </text>
          </g>

          {/* Tree Branch Connectors */}
          <path d="M 100 47 L 100 70 M 100 70 L 40 90 M 100 70 L 160 90" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1.2" />

          {/* Child 1: Layout Server Component */}
          <g transform="translate(40, 102)">
            <rect x="-35" y="-10" width="70" height="20" rx="2" fill="#141414" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontFamily="var(--font-mono)" fontSize="7">
              &lt;Layout/&gt;
            </text>
          </g>

          {/* Child 2: Hydration Boundary Island */}
          <g transform="translate(160, 102)">
            <rect x="-42" y="-10" width="84" height="20" rx="2" fill="#181818" stroke="#E10600" strokeWidth="1.2" />
            <text x="0" y="3" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="7" fontWeight="bold">
              &lt;Hydration/&gt;
            </text>
          </g>

          {/* Sub-branch Connectors */}
          <path d="M 160 112 L 160 135 M 160 135 L 115 155 M 160 135 L 205 155" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />

          {/* Leaf 1: Client Island */}
          <g transform="translate(115, 167)">
            <rect x="-38" y="-10" width="76" height="20" rx="2" fill="#101010" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.8" />
            <circle cx="-28" cy="0" r="2" fill="#E10600" />
            <text x="4" y="3" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontFamily="var(--font-mono)" fontSize="6.5">
              &lt;WorkGrid/&gt;
            </text>
          </g>

          {/* Leaf 2: WASM Math Engine */}
          <g transform="translate(205, 167)">
            <rect x="-36" y="-10" width="72" height="20" rx="2" fill="#101010" stroke="#E10600" strokeOpacity="0.8" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="6.5" fontWeight="bold">
              WASM_CORE
            </text>
          </g>
        </g>

        {/* ─── CLOUD EDGE & HTTP/3 STREAM PIPELINE (BOTTOM: Y=380..460) ─── */}
        <g id="cloud-edge-stream">
          <text x="400" y="395" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.2em">
            HTTP/3 QUIC BIDIRECTIONAL STREAM PIPELINE
          </text>

          {/* Pipeline Conduit */}
          <rect x="120" y="405" width="560" height="34" rx="4" fill="#0E0E0E" stroke="url(#stream-pipe)" strokeWidth="1.5" />

          {/* Stream Frame Blocks Moving through the Pipe */}
          {[
            { x: 140, label: "STREAM_01: SSR_HTML" },
            { x: 280, label: "STREAM_02: WASM_BYTES" },
            { x: 420, label: "STREAM_03: TELEMETRY_WS" },
            { x: 570, label: "STREAM_04: GOROUTINE" },
          ].map((pkt) => (
            <g key={pkt.label}>
              <rect x={pkt.x} y="411" width="115" height="22" rx="2" fill="#181818" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.8" />
              <circle cx={pkt.x + 8} cy="422" r="2.5" fill="#E10600" />
              <text x={pkt.x + 16} y="425" fill="#FFFFFF" fillOpacity="0.85" fontFamily="var(--font-mono)" fontSize="6.5">
                {pkt.label}
              </text>
            </g>
          ))}
        </g>

        {/* ─── BOTTOM HUD METRIC PANELS ─────────────────────────────────── */}
        {/* Bottom Left: Lighthouse Performance HUD */}
        <g transform="translate(40, 480)">
          <rect x="0" y="0" width="190" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            LIGHTHOUSE VITALS
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            PERFORMANCE: 100 / 100
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            CLS: 0.000 · FID: 1.2 ms
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            TTFB: 22.4 ms (GLOBAL EDGE)
          </text>
        </g>

        {/* Center: Network Waterfall Latency Timeline */}
        <g transform="translate(250, 480)">
          <rect x="0" y="0" width="300" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="0" y1="0" x2="50" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            REQUEST WATERFALL
          </text>
          {/* DNS, TLS, TTFB, Hydration Bars */}
          <text x="12" y="33" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="7">DNS</text>
          <rect x="45" y="27" width="25" height="7" rx="1" fill="#FFFFFF" fillOpacity="0.3" />

          <text x="12" y="45" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="7">TLS</text>
          <rect x="75" y="39" width="35" height="7" rx="1" fill="#FFFFFF" fillOpacity="0.5" />

          <text x="12" y="57" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="7">TTFB</text>
          <rect x="115" y="51" width="60" height="7" rx="1" fill="#E10600" />

          <text x="12" y="69" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="7">HYDR</text>
          <rect x="180" y="63" width="75" height="7" rx="1" fill="#FFFFFF" fillOpacity="0.8" />
        </g>

        {/* Bottom Right: Microservice Backend Stack */}
        <g transform="translate(570, 480)">
          <rect x="0" y="0" width="190" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="150" y1="0" x2="190" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            DISTRIBUTED CLOUD
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            GO GOROUTINES (MICROSERVICES)
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            REDIS + TIMESCALE DB
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            CONCURRENCY: 5,000+ SESS
          </text>
        </g>
      </svg>
    </div>
  );
}
