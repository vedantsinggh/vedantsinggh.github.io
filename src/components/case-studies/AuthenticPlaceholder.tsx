import React from "react";

interface AuthenticPlaceholderProps {
  title: string;
  description: string;
  badge?: string;
  metrics?: { label: string; value: string }[];
  formula?: string;
  className?: string;
}

export default function AuthenticPlaceholder({
  title,
  description,
  badge = "Authentic Capture Pending",
  metrics,
  formula,
  className = "",
}: AuthenticPlaceholderProps) {
  return (
    <div
      className={`w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden select-none ${className}`}
    >
      {/* Subtle architectural corner accents */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#CCCCCC]" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#CCCCCC]" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#CCCCCC]" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#CCCCCC]" />

      {/* Top Header Tag */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
        <span className="font-mono text-xs tracking-wider uppercase text-[#E10600] font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
          {badge}
        </span>
        <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          Verified Specification
        </span>
      </div>

      {/* Middle Content */}
      <div className="py-8 space-y-4 max-w-lg">
        <h4 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-normal leading-tight">
          {title}
        </h4>
        <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
          {description}
        </p>

        {formula && (
          <div className="p-4 bg-white border border-[#E5E5E5] rounded-xs font-mono text-xs sm:text-sm text-[#111111] overflow-x-auto">
            <div className="text-[11px] text-[#888888] uppercase tracking-wider mb-1 font-sans">
              Mathematical Formulation
            </div>
            <code>{formula}</code>
          </div>
        )}
      </div>

      {/* Bottom Metrics Strip */}
      {metrics && metrics.length > 0 && (
        <div className="pt-6 border-t border-[#E5E5E5] grid grid-cols-2 sm:grid-cols-3 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-mono text-[11px] text-[#888888] uppercase tracking-wider">
                {m.label}
              </div>
              <div className="font-editorial text-xl sm:text-2xl text-[#111111] font-normal">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
