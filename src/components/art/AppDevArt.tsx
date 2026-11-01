"use client";

import React from "react";

interface ArtProps {
  className?: string;
  interactive?: boolean;
}

export default function AppDevArt({ className = "", interactive = true }: ArtProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
      title="Isometric Application Architecture & Multi-Layer System Stack"
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
          <pattern id="app-isometric-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.04" />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" fillOpacity="0.15" />
          </pattern>

          {/* Red Glow Filter */}
          <filter id="app-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Isometric Glass Layer Gradient */}
          <linearGradient id="glass-layer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E10600" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="bus-stream" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E10600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid Background */}
        <rect width="800" height="600" fill="url(#app-isometric-grid)" />

        {/* ─── CORNER RETICLES & METADATA ───────────────────────────────── */}
        <g stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1">
          <path d="M 30 50 L 30 30 L 50 30" />
          <path d="M 770 50 L 770 30 L 750 30" />
          <path d="M 30 550 L 30 570 L 50 570" />
          <path d="M 770 550 L 770 570 L 750 570" />
        </g>
        <text x="32" y="24" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.25em" fontWeight="bold">
          APP ARCHITECTURE
        </text>
        <text x="768" y="24" textAnchor="end" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.2em">
          FPS: 60.0 · IPC: &lt;1.2ms · 0_DROPS
        </text>

        {/* ─── EXPLODED ISOMETRIC ARCHITECTURE STACK ────────────────────── */}
        {/*
            Isometric projection vectors:
            Vector X: [cos(30°), sin(30°)] * scale = [0.866, 0.5]
            Vector Y: [-cos(30°), sin(30°)] * scale = [-0.866, 0.5]
            Vector Z (Vertical): [0, -1]
        */}

        {/* ─── LAYER 4 (BASE): SILICON & OPERATING SYSTEM PLATFORM CORE ──── */}
        {/* Plane Center: (400, 440) */}
        <g id="layer-silicon">
          <polygon
            points="400,370 600,430 400,490 200,430"
            fill="#0F0F0F"
            stroke="#FFFFFF"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          {/* Base Extrusion thickness */}
          <polygon points="200,430 400,490 400,505 200,445" fill="#0A0A0A" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />
          <polygon points="600,430 400,490 400,505 600,445" fill="#0A0A0A" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />

          {/* Subdivided Silicon Blocks on base */}
          {/* BLE / RF Radio Block */}
          <polygon points="270,420 330,402 370,414 310,432" fill="#141414" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
          <text x="320" y="418" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="7">
            BLE 5.2
          </text>

          {/* Metal / Vulkan GPU Accelerator */}
          <polygon points="410,414 470,396 520,411 460,429" fill="#181818" stroke="#E10600" strokeWidth="1.2" />
          <text x="465" y="415" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="7" fontWeight="bold">
            GPU_SHADERS
          </text>

          {/* SQLite Storage Engine */}
          <polygon points="340,441 400,423 450,438 390,456" fill="#121212" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <text x="395" y="442" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="7">
            SQLITE_PERSIST
          </text>

          {/* Layer Label */}
          <text x="170" y="435" textAnchor="end" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            HARDWARE &amp; OS SILICON
          </text>
        </g>

        {/* Vertical Bus Linkages (Layer 4 to Layer 3) */}
        <g stroke="url(#bus-stream)" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="200" y1="430" x2="200" y2="340" />
          <line x1="600" y1="430" x2="600" y2="340" />
          <line x1="400" y1="490" x2="400" y2="400" />
          <line x1="400" y1="370" x2="400" y2="280" />
        </g>

        {/* ─── LAYER 3 (MIDDLE-LOWER): HIGH PERFORMANCE ENGINE & BRIDGE ──── */}
        {/* Plane Center: (400, 350) */}
        <g id="layer-native-bridge">
          <polygon
            points="400,280 600,340 400,400 200,340"
            fill="url(#glass-layer)"
            stroke="#FFFFFF"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />

          {/* FFI / Rust Bridge Interconnect Lines */}
          <line x1="280" y1="330" x2="400" y2="365" stroke="#E10600" strokeWidth="1.5" filter="url(#app-glow-red)" />
          <line x1="400" y1="365" x2="520" y2="330" stroke="#E10600" strokeWidth="1.5" filter="url(#app-glow-red)" />
          <circle cx="400" cy="365" r="5" fill="#E10600" />
          <circle cx="280" cy="330" r="4" fill="#FFFFFF" />
          <circle cx="520" cy="330" r="4" fill="#FFFFFF" />

          {/* Serial / Protobuf Buffer Boxes */}
          <polygon points="360,335 410,320 440,329 390,344" fill="#0A0A0A" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
          <text x="400" y="334" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontFamily="var(--font-mono)" fontSize="7">
            PROTOBUF_SERIALIZER
          </text>

          <text x="170" y="345" textAnchor="end" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            RUST · NATIVE BRIDGE FFI
          </text>
        </g>

        {/* Vertical Bus Linkages (Layer 3 to Layer 2) */}
        <g stroke="url(#bus-stream)" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="200" y1="340" x2="200" y2="250" />
          <line x1="600" y1="340" x2="600" y2="250" />
          <line x1="400" y1="400" x2="400" y2="310" />
          <line x1="400" y1="280" x2="400" y2="190" />
        </g>

        {/* ─── LAYER 2 (MIDDLE-UPPER): REACTIVE STATE ENGINE ───────────── */}
        {/* Plane Center: (400, 260) */}
        <g id="layer-state-bus">
          <polygon
            points="400,190 600,250 400,310 200,250"
            fill="url(#glass-layer)"
            stroke="#FFFFFF"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />

          {/* Reactive State Store Nodes */}
          {[
            { x: 300, y: 240, label: "TELEMETRY_SLICE" },
            { x: 400, y: 250, label: "MISSION_WAYPOINTS" },
            { x: 500, y: 240, label: "SAFETY_ESTOP_STATE" },
          ].map((item) => (
            <g key={item.label}>
              <circle cx={item.x} cy={item.y} r="6" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />
              <circle cx={item.x} cy={item.y} r="2.5" fill="#E10600" filter="url(#app-glow-red)" />
              <text
                x={item.x}
                y={item.y + 16}
                textAnchor="middle"
                fill="#FFFFFF"
                fillOpacity="0.8"
                fontFamily="var(--font-mono)"
                fontSize="6.5"
                letterSpacing="0.05em"
              >
                {item.label}
              </text>
            </g>
          ))}

          {/* Bidirectional State Dispatch Arrows */}
          <path d="M 315 240 L 385 248" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 415 248 L 485 240" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 2" />

          <text x="170" y="255" textAnchor="end" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            REACTIVE STATE &amp; SYNC BUS
          </text>
        </g>

        {/* Vertical Bus Linkages (Layer 2 to Layer 1) */}
        <g stroke="url(#bus-stream)" strokeWidth="1.5" strokeDasharray="3 3">
          <line x1="200" y1="250" x2="200" y2="150" />
          <line x1="600" y1="250" x2="600" y2="150" />
          <line x1="400" y1="310" x2="400" y2="210" />
          <line x1="400" y1="190" x2="400" y2="90" />
        </g>

        {/* ─── LAYER 1 (TOP): SPATIAL APPLICATION VIEWPORT & TELEMETRY UI ── */}
        {/* Plane Center: (400, 160) */}
        <g id="layer-ui-viewport">
          {/* Main Top UI Sheet */}
          <polygon
            points="400,90 600,150 400,210 200,150"
            fill="#111111"
            fillOpacity="0.95"
            stroke="#FFFFFF"
            strokeOpacity="0.85"
            strokeWidth="2"
          />

          {/* Crimson Accent Perimeter on top glass sheet */}
          <line x1="200" y1="150" x2="400" y2="210" stroke="#E10600" strokeWidth="2.5" />
          <line x1="400" y1="210" x2="600" y2="150" stroke="#E10600" strokeWidth="2.5" />

          {/* Top UI Elements: Isometric Mobile Card Widgets */}
          {/* Widget 1: 3D Rover Attitude Gimbal */}
          <polygon points="260,145 320,127 360,139 300,157" fill="#1A1A1A" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="310" cy="142" r="8" stroke="#E10600" strokeWidth="1" fill="#0A0A0A" />
          <line x1="304" y1="142" x2="316" y2="142" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="310" y1="136" x2="310" y2="148" stroke="#FFFFFF" strokeWidth="1" />
          <text x="310" y="153" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="6">
            PITCH/ROLL 3D
          </text>

          {/* Widget 2: Speedometer Dial Gauge */}
          <polygon points="340,165 400,147 440,159 380,177" fill="#1A1A1A" stroke="#E10600" strokeWidth="1.2" />
          <text x="390" y="162" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="7" fontWeight="bold">
            4.20 M/S
          </text>
          <text x="390" y="171" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="5.5">
            ODOMETRY
          </text>

          {/* Widget 3: Live LiDAR Point Cloud Mini-Map */}
          <polygon points="430,138 490,120 540,135 480,153" fill="#161616" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
          {/* Mini Point Cloud Dots */}
          {[
            { cx: 480, cy: 132 },
            { cx: 472, cy: 138 },
            { cx: 495, cy: 128 },
            { cx: 488, cy: 142 },
            { cx: 465, cy: 135 },
          ].map((pt, i) => (
            <circle key={i} cx={pt.cx} cy={pt.cy} r="1.5" fill={i === 0 ? "#E10600" : "#FFFFFF"} />
          ))}

          {/* Dynamic Island / Status Pill on Top */}
          <polygon points="370,108 430,126 420,129 360,111" fill="#0A0A0A" stroke="#E10600" strokeWidth="1.5" />
          <circle cx="395" cy="119" r="2" fill="#E10600" filter="url(#app-glow-red)" />

          {/* Touch Haptic Ripple Effect (Circular wave expanding) */}
          <ellipse cx="480" cy="140" rx="20" ry="10" stroke="#E10600" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="3 3" />

          <text x="170" y="155" textAnchor="end" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            SPATIAL UI VIEWPORT
          </text>
        </g>

        {/* ─── BOTTOM HUD METRIC PANELS ─────────────────────────────────── */}
        {/* Bottom Left: Ground Station Performance HUD */}
        <g transform="translate(40, 480)">
          <rect x="0" y="0" width="190" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            GCS TELEMETRY ENGINE
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            THROUGHPUT: 500+ EV/SEC
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            UI LATENCY: &lt; 4.0 ms (60 FPS)
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            BUFFER JITTER: 0.00 ms
          </text>
        </g>

        {/* Bottom Right: Platform Portability HUD */}
        <g transform="translate(580, 480)">
          <rect x="0" y="0" width="180" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="140" y1="0" x2="180" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            PLATFORM MATRIX
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            TAURI · RUST (DESKTOP)
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            REACT NATIVE · BLE (MOBILE)
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            OFFLINE CRDT SYNC: ARMED
          </text>
        </g>
      </svg>
    </div>
  );
}
