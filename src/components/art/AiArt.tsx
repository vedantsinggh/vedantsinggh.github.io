"use client";

import React from "react";

interface ArtProps {
  className?: string;
  interactive?: boolean;
}

export default function AiArt({ className = "", interactive = true }: ArtProps) {
  // Input feature nodes
  const inputNodes = [
    { y: 150, label: "LIDAR_PTS" },
    { y: 210, label: "STEREO_RGB" },
    { y: 270, label: "IMU_QUAT" },
    { y: 330, label: "WHEEL_ODOM" },
    { y: 390, label: "RADAR_DOP" },
    { y: 450, label: "GPS_FIX" },
  ];

  // Hidden layer 1
  const hidden1 = [130, 180, 230, 280, 330, 380, 430, 480];

  // Attention matrix representation (center)
  const hidden2 = [150, 205, 260, 315, 370, 425];

  // Output action / covariance heads
  const outputNodes = [
    { y: 190, label: "COV_R(t)" },
    { y: 250, label: "COSTMAP_mIoU" },
    { y: 310, label: "TRAV_AFFORD" },
    { y: 370, label: "STEER_POLICY" },
    { y: 430, label: "SPEED_BOUNDS" },
  ];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
      title="Neural Network Architecture & Tensor Attention Flow"
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
          <pattern id="ai-tensor-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.04" />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" fillOpacity="0.15" />
          </pattern>

          {/* Red Synapse Glow Filter */}
          <filter id="ai-glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Attention Heatmap Gradient */}
          <linearGradient id="attention-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E10600" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#E10600" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>

          {/* Synapse Line Gradient */}
          <linearGradient id="synapse-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#E10600" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Blueprint Grid Background */}
        <rect width="800" height="600" fill="url(#ai-tensor-grid)" />

        {/* ─── TECHNICAL HEADER & CORNER RETICLES ──────────────────────── */}
        <g stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1">
          <path d="M 30 50 L 30 30 L 50 30" />
          <path d="M 770 50 L 770 30 L 750 30" />
          <path d="M 30 550 L 30 570 L 50 570" />
          <path d="M 770 550 L 770 570 L 750 570" />
        </g>
        <text x="32" y="24" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.25em" fontWeight="bold">
          SYS://AI_NEURAL_FLOW.02
        </text>
        <text x="768" y="24" textAnchor="end" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.2em">
          DIM: [B, 512, 768] | FP16_TENSORRT
        </text>

        {/* ─── MATHEMATICAL EQUATIONS IN BACKGROUND ───────────────────── */}
        <g fontFamily="var(--font-mono)" fill="#FFFFFF" fillOpacity="0.18">
          <text x="50" y="80" fontSize="10" letterSpacing="0.05em">
            Attention(Q, K, V) = softmax((Q · Kᵀ) / √dₖ) · V
          </text>
          <text x="50" y="100" fontSize="10" letterSpacing="0.05em">
            L_total = λ₁·L_seg + λ₂·L_cov + λ₃·||θ||²
          </text>
          <text x="470" y="80" fontSize="10" letterSpacing="0.05em">
            K_t = P_t⁻ · Hᵀ(H·P_t⁻·Hᵀ + R_t)⁻¹
          </text>
          <text x="470" y="100" fontSize="10" letterSpacing="0.05em">
            R_t = diag(σ²_lidar, σ²_vision, σ²_imu)
          </text>
        </g>

        {/* ─── SYNAPTIC NETWORK CONNECTIONS (LAYER 1 -> LAYER 2) ──────── */}
        <g stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="0.8">
          {inputNodes.map((inp) =>
            hidden1.map((h1, i) => (
              <line key={`${inp.y}-${h1}-${i}`} x1="150" y1={inp.y} x2="280" y2={h1} />
            ))
          )}
        </g>

        {/* Active Crimson Synaptic Highways (Highlighted flow paths) */}
        <g stroke="url(#synapse-flow)" strokeWidth="1.6" filter="url(#ai-glow-red)">
          <line x1="150" y1="150" x2="280" y2="180" />
          <line x1="150" y1="210" x2="280" y2="280" />
          <line x1="150" y1="270" x2="280" y2="330" />
          <line x1="280" y1="180" x2="410" y2="205" />
          <line x1="280" y1="280" x2="410" y2="260" />
          <line x1="280" y1="330" x2="410" y2="370" />
          <line x1="510" y1="205" x2="640" y2="190" />
          <line x1="510" y1="260" x2="640" y2="250" />
          <line x1="510" y1="370" x2="640" y2="310" />
        </g>

        {/* Synapse (Layer 2 -> Attention Grid -> Layer 3) */}
        <g stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="0.8">
          {hidden1.map((h1) =>
            hidden2.map((h2, j) => (
              <line key={`h1-h2-${h1}-${h2}-${j}`} x1="280" y1={h1} x2="410" y2={h2} />
            ))
          )}
        </g>

        {/* Synapse (Layer 3 -> Output Layer) */}
        <g stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="0.8">
          {hidden2.map((h2) =>
            outputNodes.map((out, k) => (
              <line key={`h2-out-${h2}-${out.y}-${k}`} x1="510" y1={h2} x2="640" y2={out.y} />
            ))
          )}
        </g>

        {/* ─── CENTRAL ATTENTION MATRIX HEATMAP (Between X=410 and X=510) ─ */}
        <g transform="translate(410, 160)">
          {/* Heatmap Outer Frame */}
          <rect
            x="0"
            y="0"
            width="100"
            height="180"
            rx="4"
            stroke="#E10600"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            fill="#0D0D0D"
          />
          <text x="50" y="-8" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.15em">
            MULTI-HEAD ATTENTION
          </text>

          {/* Attention Grid Cells (6x10 matrix) */}
          {[0, 1, 2, 3, 4, 5].map((col) =>
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
              const val = ((col * 3 + row * 7) % 11) / 10;
              const isAccent = val > 0.65;
              return (
                <rect
                  key={`${col}-${row}`}
                  x={8 + col * 14}
                  y={10 + row * 18}
                  width="11"
                  height="14"
                  rx="1.5"
                  fill={isAccent ? "#E10600" : "#FFFFFF"}
                  fillOpacity={isAccent ? val * 0.9 : val * 0.25}
                  stroke={isAccent ? "#E10600" : "#FFFFFF"}
                  strokeOpacity={isAccent ? 0.8 : 0.1}
                  strokeWidth="0.5"
                />
              );
            })
          )}
        </g>

        {/* ─── INPUT NODES (COLUMN 1: X=150) ───────────────────────────── */}
        <text x="150" y="125" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.7" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em">
          PERCEPTION INPUT
        </text>
        {inputNodes.map((node) => (
          <g key={node.label}>
            <circle cx="150" cy={node.y} r="7" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.5" fill="#0A0A0A" />
            <circle cx="150" cy={node.y} r="3" fill="#E10600" />
            <text
              x="132"
              y={node.y + 3}
              textAnchor="end"
              fill="#FFFFFF"
              fillOpacity="0.75"
              fontFamily="var(--font-mono)"
              fontSize="8"
              letterSpacing="0.1em"
            >
              {node.label}
            </text>
            <line x1="80" y1={node.y} x2="138" y2={node.y} stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="2 2" />
          </g>
        ))}

        {/* ─── HIDDEN LAYER 1 NODES (COLUMN 2: X=280) ──────────────────── */}
        <text x="280" y="115" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.15em">
          LATENT DIMS
        </text>
        {hidden1.map((y, i) => (
          <g key={`h1-${y}`}>
            <circle
              cx="280"
              cy={y}
              r={i % 2 === 0 ? "5" : "4"}
              stroke={i % 2 === 0 ? "#E10600" : "#FFFFFF"}
              strokeOpacity={i % 2 === 0 ? 0.9 : 0.4}
              strokeWidth="1.2"
              fill="#0A0A0A"
            />
          </g>
        ))}

        {/* ─── ATTENTION PROJECTION NODES (COLUMN 3: X=510) ────────────── */}
        {hidden2.map((y) => (
          <g key={`h2-${y}`}>
            <circle
              cx="510"
              cy={y}
              r="5"
              stroke="#E10600"
              strokeWidth="1.5"
              fill="#0A0A0A"
              filter="url(#ai-glow-red)"
            />
            <circle cx="510" cy={y} r="2" fill="#FFFFFF" />
          </g>
        ))}

        {/* ─── OUTPUT NODES (COLUMN 4: X=640) ──────────────────────────── */}
        <text x="640" y="160" textAnchor="middle" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.15em" fontWeight="bold">
          DYNAMIC HEADS
        </text>
        {outputNodes.map((out) => (
          <g key={out.label}>
            <circle cx="640" cy={out.y} r="8" stroke="#E10600" strokeWidth="2" fill="#0A0A0A" filter="url(#ai-glow-red)" />
            <circle cx="640" cy={out.y} r="3" fill="#FFFFFF" />
            <text
              x="658"
              y={out.y + 4}
              fill="#FFFFFF"
              fillOpacity="0.9"
              fontFamily="var(--font-mono)"
              fontSize="8"
              letterSpacing="0.12em"
              fontWeight="bold"
            >
              {out.label}
            </text>
            <line x1="648" y1={out.y} x2="720" y2={out.y} stroke="#E10600" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
          </g>
        ))}

        {/* ─── BOTTOM 3D LOSS LANDSCAPE & METRIC HUD OVERLAYS ──────────── */}
        {/* Loss Contour Landscape in Bottom Center */}
        <g transform="translate(310, 430)">
          <text x="90" y="0" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.15em">
            STOCHASTIC GRADIENT DESCENT MANIFOLD
          </text>
          {/* Topographic Contour Rings */}
          <ellipse cx="90" cy="50" rx="80" ry="25" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
          <ellipse cx="90" cy="50" rx="55" ry="17" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1" />
          <ellipse cx="90" cy="50" rx="30" ry="9" stroke="#E10600" strokeOpacity="0.5" strokeWidth="1.2" />
          <ellipse cx="90" cy="50" rx="10" ry="3" stroke="#E10600" strokeWidth="1.5" fill="#E10600" fillOpacity="0.3" />

          {/* Descent Trajectory Vector Arrow */}
          <path
            d="M 160 40 Q 120 42 105 48"
            stroke="#E10600"
            strokeWidth="1.5"
            markerEnd="url(#arrow-red)"
            filter="url(#ai-glow-red)"
          />
          <circle cx="160" cy="40" r="2.5" fill="#FFFFFF" />
          <circle cx="105" cy="48" r="3" fill="#E10600" />
        </g>

        {/* Bottom Left: TensorRT Edge Benchmark HUD */}
        <g transform="translate(40, 480)">
          <rect x="0" y="0" width="190" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            EDGE AI INFERENCE
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            RUNTIME   : TENSORRT FP16
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            LATENCY   : 1.8 ms / FRAME
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            THROUGHPUT: 58.0 FPS (JETSON)
          </text>
        </g>

        {/* Bottom Right: Accuracy / Benchmark Metrics */}
        <g transform="translate(580, 480)">
          <rect x="0" y="0" width="180" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="140" y1="0" x2="180" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            PERCEPTION METRICS
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            TERRAIN mIoU : 94.6%
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            DRIFT ERROR  : -32.4%
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            ZERO-HALLUCINATION: LOCKED
          </text>
        </g>
      </svg>
    </div>
  );
}
