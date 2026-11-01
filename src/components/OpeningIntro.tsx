"use client";

import React, { useEffect, useState } from "react";
import SuitEmblem from "./SuitEmblem";

interface OpeningIntroProps {
  onComplete?: () => void;
}

export default function OpeningIntro({ onComplete }: OpeningIntroProps) {
  const [phase, setPhase] = useState<"initial" | "enlarge" | "split" | "reveal" | "done">("initial");
  const [splitProgress, setSplitProgress] = useState(0);

  useEffect(() => {
    // Step 1: Subtle emblem pulse at 200ms
    const t1 = setTimeout(() => {
      setPhase("enlarge");
    }, 200);

    // Step 2: Vault Doors Split Open at 550ms
    const t2 = setTimeout(() => {
      setPhase("split");
      // Animate splitProgress smoothly
      const start = performance.now();
      const duration = 650;
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease in-out
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setSplitProgress(eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, 550);

    // Step 3: Content fully revealed, fade emblem
    const t3 = setTimeout(() => {
      setPhase("reveal");
    }, 1150);

    // Step 4: Done and cleanup
    const t4 = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 1600);

    // Safety fallback to guarantee intro never blocks page on any mobile device
    const safetyTimer = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  const isSplittingOrOpened = phase === "split" || phase === "reveal";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden h-screen h-[100dvh] w-full transition-opacity duration-500 ${
        phase === "reveal" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Left Physical White Vault Door */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] border-r border-[#0A0A0A]/5 will-change-transform"
        style={{
          transform: isSplittingOrOpened ? "translateX(-100%)" : "translateX(0)",
        }}
      />

      {/* Right Physical White Vault Door */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-white transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] border-l border-[#0A0A0A]/5 will-change-transform"
        style={{
          transform: isSplittingOrOpened ? "translateX(100%)" : "translateX(0)",
        }}
      />

      {/* Centered Suit Emblem with Physical Door Splitting */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform:
            phase === "initial"
              ? "scale(0.95)"
              : phase === "enlarge"
              ? "scale(1.08)"
              : `scale(${1.08 + splitProgress * 0.25})`,
          opacity: phase === "reveal" ? 0 : 1,
        }}
      >
        <SuitEmblem
          size={100}
          splitProgress={splitProgress}
          showRedTie={true}
          interactive={false}
        />
      </div>
    </div>
  );
}
