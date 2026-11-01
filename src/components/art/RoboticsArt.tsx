"use client";

import React from "react";

interface ArtProps {
  className?: string;
  interactive?: boolean;
}

export default function RoboticsArt({ className = "", interactive = true }: ArtProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
      title="Autonomous Ground Vehicle Technical Schematic"
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
          {/* Engineering Blueprint Grid Pattern */}
          <pattern id="robotics-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.04" />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" fillOpacity="0.15" />
          </pattern>

          {/* Radial Radar Glow */}
          <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E10600" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#E10600" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#E10600" stopOpacity="0" />
          </radialGradient>

          {/* Linear Sensor Beam Gradient */}
          <linearGradient id="sensor-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E10600" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E10600" stopOpacity="0.0" />
          </linearGradient>

          {/* Pulse Glow Filter */}
          <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Blueprint Grid Background */}
        <rect width="800" height="600" fill="url(#robotics-blueprint-grid)" />

        {/* ─── CORNER TECHNICAL RETICLES & COORDINATES ────────────────────── */}
        <g stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1">
          <path d="M 30 50 L 30 30 L 50 30" />
          <path d="M 770 50 L 770 30 L 750 30" />
          <path d="M 30 550 L 30 570 L 50 570" />
          <path d="M 770 550 L 770 570 L 750 570" />
        </g>
        <text x="32" y="24" fill="#E10600" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.25em" fontWeight="bold">
          SYS://ROBOTICS_SCHEMATIC.01
        </text>
        <text x="768" y="24" textAnchor="end" fill="#FFFFFF" fillOpacity="0.4" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.2em">
          LAT: 28.7499°N | LON: 77.1170°E
        </text>

        {/* ─── LIDAR ROTATIONAL RADAR RINGS (BACKGROUND) ─────────────────── */}
        <g transform="translate(400, 260)">
          {/* Glowing field */}
          <circle cx="0" cy="0" r="180" fill="url(#radar-glow)" />

          {/* Concentric Calibration Range Rings */}
          <circle cx="0" cy="0" r="70" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="120" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="0" cy="0" r="170" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="0" cy="0" r="220" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />

          {/* Radar Degree Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg})`}>
              <line x1="165" y1="0" x2="175" y2="0" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
              {deg % 90 === 0 && (
                <text x="188" y="3" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
                  {deg}°
                </text>
              )}
            </g>
          ))}

          {/* Radar Sweep Arc with Pulse */}
          <path
            d="M 0 0 L 155 -70 A 170 170 0 0 1 170 0 Z"
            fill="url(#sensor-sweep)"
            className="animate-spin origin-center"
            style={{ animationDuration: "8s", transformOrigin: "0 0" }}
          />

          {/* Crosshair Axes */}
          <line x1="-200" y1="0" x2="200" y2="0" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1" />
          <line x1="0" y1="-200" x2="0" y2="200" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1" />
        </g>

        {/* ─── AUTONOMOUS ROVER CHASSIS (CENTRAL BLUEPRINT) ────────────── */}
        <g id="rover-blueprint">
          {/* Ground Calibration Plane */}
          <line x1="160" y1="460" x2="640" y2="460" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="12 4" />
          <line x1="200" y1="468" x2="600" y2="468" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 8" />

          {/* Left Rocker Bogie Wheels (Front, Mid, Rear) */}
          {/* Rear Wheel */}
          <g transform="translate(230, 430)">
            <circle cx="0" cy="0" r="32" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="26" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="10" stroke="#E10600" strokeWidth="2" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="3" fill="#E10600" />
            {/* Treads */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
              <line
                key={ang}
                x1="0"
                y1="-32"
                x2="0"
                y2="-37"
                stroke="#FFFFFF"
                strokeOpacity="0.6"
                strokeWidth="2"
                transform={`rotate(${ang})`}
              />
            ))}
          </g>

          {/* Middle Wheel */}
          <g transform="translate(400, 430)">
            <circle cx="0" cy="0" r="32" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="26" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="10" stroke="#E10600" strokeWidth="2" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="3" fill="#E10600" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
              <line
                key={ang}
                x1="0"
                y1="-32"
                x2="0"
                y2="-37"
                stroke="#FFFFFF"
                strokeOpacity="0.6"
                strokeWidth="2"
                transform={`rotate(${ang})`}
              />
            ))}
          </g>

          {/* Front Wheel */}
          <g transform="translate(570, 430)">
            <circle cx="0" cy="0" r="32" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="26" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="10" stroke="#E10600" strokeWidth="2" fill="#0A0A0A" />
            <circle cx="0" cy="0" r="3" fill="#E10600" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
              <line
                key={ang}
                x1="0"
                y1="-32"
                x2="0"
                y2="-37"
                stroke="#FFFFFF"
                strokeOpacity="0.6"
                strokeWidth="2"
                transform={`rotate(${ang})`}
              />
            ))}
          </g>

          {/* Rocker-Bogie Suspension Linkages (Inverted V) */}
          <path
            d="M 230 430 L 320 370 L 400 340 L 480 370 L 570 430"
            stroke="#FFFFFF"
            strokeOpacity="0.75"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 400 430 L 400 340"
            stroke="#FFFFFF"
            strokeOpacity="0.5"
            strokeWidth="2.5"
          />
          <path
            d="M 320 370 L 400 430"
            stroke="#FFFFFF"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Pivot Joints */}
          <circle cx="320" cy="370" r="6" stroke="#E10600" strokeWidth="2" fill="#FFFFFF" />
          <circle cx="480" cy="370" r="6" stroke="#E10600" strokeWidth="2" fill="#FFFFFF" />
          <circle cx="400" cy="340" r="8" stroke="#E10600" strokeWidth="2.5" fill="#0A0A0A" />

          {/* Central Main Compute Chassis Box */}
          <rect
            x="300"
            y="270"
            width="200"
            height="70"
            rx="4"
            stroke="#FFFFFF"
            strokeOpacity="0.85"
            strokeWidth="2"
            fill="#0F0F0F"
          />
          {/* Chassis Internal Baffles & Heat Sink Fins */}
          <line x1="320" y1="285" x2="320" y2="325" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5" />
          <line x1="330" y1="285" x2="330" y2="325" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5" />
          <line x1="340" y1="285" x2="340" y2="325" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5" />

          {/* Red Avionics Status Line */}
          <line x1="300" y1="270" x2="500" y2="270" stroke="#E10600" strokeWidth="3" />
          <circle cx="360" cy="305" r="4" fill="#E10600" filter="url(#glow-red)" />
          <circle cx="375" cy="305" r="3" fill="#FFFFFF" fillOpacity="0.7" />
          <circle cx="388" cy="305" r="3" fill="#FFFFFF" fillOpacity="0.7" />

          <text x="420" y="302" fill="#FFFFFF" fillOpacity="0.85" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="0.15em">
            CORE_AVIONICS
          </text>
          <text x="420" y="318" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.2em">
            BUS: CAN_FD 1Mbps
          </text>

          {/* Sensor Mast Tower */}
          <line x1="350" y1="270" x2="350" y2="180" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="2.5" />
          <line x1="358" y1="270" x2="358" y2="180" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="340" y1="225" x2="368" y2="225" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />

          {/* Top 3D LiDAR Puck Sensor */}
          <rect x="332" y="155" width="44" height="25" rx="3" stroke="#FFFFFF" strokeWidth="1.5" fill="#151515" />
          <line x1="332" y1="167" x2="376" y2="167" stroke="#E10600" strokeWidth="2" filter="url(#glow-red)" />
          <circle cx="354" cy="167" r="2" fill="#FFFFFF" />

          {/* Stereoscopic Camera Rig */}
          <rect x="445" y="210" width="65" height="18" rx="2" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.5" fill="#141414" />
          <circle cx="458" cy="219" r="4" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />
          <circle cx="497" cy="219" r="4" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />
          <line x1="470" y1="228" x2="470" y2="270" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />

          {/* Robotic Manipulator Arm (Forearm, Bicep, Gripper) */}
          <g id="manipulator-arm">
            <path
              d="M 480 270 L 525 210 L 595 195 L 635 215"
              stroke="#FFFFFF"
              strokeOpacity="0.85"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Joint Rotary Encoders */}
            <circle cx="480" cy="270" r="5" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />
            <circle cx="525" cy="210" r="5" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />
            <circle cx="595" cy="195" r="4" stroke="#E10600" strokeWidth="1.5" fill="#0A0A0A" />

            {/* Gripper Jaws */}
            <path d="M 635 215 L 648 206 M 635 215 L 648 224" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
            <circle cx="648" cy="215" r="2" fill="#E10600" filter="url(#glow-red)" />

            {/* Joint Angle Callouts */}
            <path d="M 515 220 A 15 15 0 0 0 535 200" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x="536" y="212" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="7">
              θ=118°
            </text>
          </g>
        </g>

        {/* ─── TECHNICAL ANNOTATIONS & TELEMETRY READOUTS ────────────────── */}
        {/* Top Left Dimension Marker */}
        <g stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1">
          <line x1="160" y1="120" x2="160" y2="100" />
          <line x1="640" y1="120" x2="640" y2="100" />
          <line x1="160" y1="110" x2="640" y2="110" />
        </g>
        <text x="400" y="105" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.2em">
          WHEELBASE 940 MM · TRACK 680 MM
        </text>

        {/* Dynamic Telemetry HUD overlay in Bottom Left */}
        <g transform="translate(40, 480)">
          <rect x="0" y="0" width="190" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            TELEMETRY LIVE
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            LOOP_RATE : 83.3 Hz (12ms)
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            VELOCITY  : 4.20 m/s
          </text>
          <text x="12" y="60" fill="#E10600" fontFamily="var(--font-mono)" fontSize="8" fontWeight="bold">
            SLAM_STATUS: FIXED_LOCK
          </text>
        </g>

        {/* Sensor Fusion Matrix overlay in Bottom Right */}
        <g transform="translate(580, 480)">
          <rect x="0" y="0" width="180" height="75" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" fill="#0A0A0A" fillOpacity="0.8" />
          <line x1="140" y1="0" x2="180" y2="0" stroke="#E10600" strokeWidth="2" />
          <text x="12" y="18" fill="#FFFFFF" fillOpacity="0.9" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.1em">
            HCAF_FUSION_V2
          </text>
          <text x="12" y="34" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            LIDAR 3D  : WEIGHT 0.94
          </text>
          <text x="12" y="47" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            STEREO_CAM: WEIGHT 0.88
          </text>
          <text x="12" y="60" fill="#FFFFFF" fillOpacity="0.5" fontFamily="var(--font-mono)" fontSize="8">
            IMU/EKF   : SYNCED (PPS)
          </text>
        </g>

        {/* Center Coordinate Target Marker */}
        <circle cx="400" cy="260" r="4" fill="#E10600" filter="url(#glow-red)" />
        <circle cx="400" cy="260" r="14" stroke="#E10600" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}
