"use client";

import React from "react";

interface SuitEmblemProps {
  className?: string;
  size?: number;
  splitProgress?: number; // 0 (fully closed) to 1 (fully opened)
  showRedTie?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

export default function SuitEmblem({
  className = "",
  size = 64,
  splitProgress = 0,
  showRedTie = true,
  onClick,
  interactive = false,
}: SuitEmblemProps) {
  const reactId = React.useId().replace(/:/g, "_");
  const leftClipId = `left-door-clip-${reactId}`;
  const rightClipId = `right-door-clip-${reactId}`;

  // Separation offset based on splitProgress (0 to 1)
  const separation = splitProgress * 44; // Physical door separation in viewBox units
  const tieOpacity = Math.min(1, 0.5 + splitProgress * 0.5);
  const tieScale = 1 + splitProgress * 0.12;

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-transform duration-300 ${
        interactive ? "cursor-pointer hover:scale-105 active:scale-95" : ""
      } ${className}`}
      style={{ width: size, height: size }}
      title="Vedant Singh — Suit Emblem"
      role={interactive ? "button" : "img"}
      aria-label="Suit emblem logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Subtle Ambient Red Glow when opening */}
        {splitProgress > 0.05 && (
          <circle
            cx="50"
            cy="50"
            r={48 + splitProgress * 8}
            fill="#E10600"
            opacity={splitProgress * 0.18}
          />
        )}

        {/* Center: Crimson Red Tie (Revealed in the center as the suit jacket doors part) */}
        <g
          style={{
            transform: `scale(${tieScale})`,
            transformOrigin: "50px 50px",
            opacity: showRedTie ? tieOpacity : 0.2,
          }}
        >
          {/* Tie Knot */}
          <path
            d="M 45 42 L 55 42 L 53.5 48 L 46.5 48 Z"
            fill={showRedTie ? "#E10600" : "#0A0A0A"}
          />
          {/* Tie Body */}
          <path
            d="M 46.5 48 L 53.5 48 L 56 75 L 50 82 L 44 75 Z"
            fill={showRedTie ? "#E10600" : "#0A0A0A"}
          />
          {/* Tie Shimmer Line */}
          <path
            d="M 49 49 L 51 49 L 52 74 L 50 79 Z"
            fill="#FFFFFF"
            opacity="0.25"
          />
        </g>

        {/* Left Half of Emblem (Left Jacket & Collar Panel) */}
        <g
          style={{
            transform: `translateX(-${separation}px)`,
          }}
        >
          <clipPath id={leftClipId}>
            <rect x="0" y="0" width="50" height="100" />
          </clipPath>
          <g clipPath={`url(#${leftClipId})`}>
            {/* Outer Circle Left */}
            <circle cx="50" cy="50" r="46" fill="#0A0A0A" />
            
            {/* White Collar / Shirt Silhouette (Geometry matched to reference logo) */}
            <path
              d="M 50 24 L 38 24 C 36 24 34 26 34 28 L 30 52 C 30 68 38 80 50 82 Z"
              fill="#FFFFFF"
            />
            {/* Left Collar Fold */}
            <path
              d="M 50 24 L 37 38 L 45 42 L 50 36 Z"
              fill="#FFFFFF"
              stroke="#EDEDED"
              strokeWidth="0.5"
            />
            {/* Closed Black Tie Silhouette on the left half when emblem is closed */}
            <path
              d="M 46.5 42 L 50 42 L 50 82 L 44 75 Z"
              fill="#0A0A0A"
              opacity={1 - splitProgress * 1.5}
            />
          </g>
        </g>

        {/* Right Half of Emblem (Right Jacket & Collar Panel) */}
        <g
          style={{
            transform: `translateX(${separation}px)`,
          }}
        >
          <clipPath id={rightClipId}>
            <rect x="50" y="0" width="50" height="100" />
          </clipPath>
          <g clipPath={`url(#${rightClipId})`}>
            {/* Outer Circle Right */}
            <circle cx="50" cy="50" r="46" fill="#0A0A0A" />
            
            {/* White Collar / Shirt Silhouette (Geometry matched to reference logo) */}
            <path
              d="M 50 24 L 62 24 C 64 24 66 26 66 28 L 70 52 C 70 68 62 80 50 82 Z"
              fill="#FFFFFF"
            />
            {/* Right Collar Fold */}
            <path
              d="M 50 24 L 63 38 L 55 42 L 50 36 Z"
              fill="#FFFFFF"
              stroke="#EDEDED"
              strokeWidth="0.5"
            />
            {/* Closed Black Tie Silhouette on the right half when emblem is closed */}
            <path
              d="M 50 42 L 53.5 42 L 56 75 L 50 82 Z"
              fill="#0A0A0A"
              opacity={1 - splitProgress * 1.5}
            />
          </g>
        </g>

        {/* Crisp Perimeter Outline */}
        <circle
          cx="50"
          cy="50"
          r="46.5"
          stroke={splitProgress > 0.15 ? "#E10600" : "#0A0A0A"}
          strokeWidth="1.2"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
