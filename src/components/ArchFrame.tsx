"use client";

export default function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="arch-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C0B8B0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A09890" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Left column */}
      <g stroke="url(#arch-silver)" strokeWidth="0.8">
        <rect x="30" y="20" width="8" height="75" fill="none" />
        <rect x="28" y="15" width="12" height="6" fill="none" />
        <rect x="28" y="93" width="12" height="4" fill="none" />
        {/* Column capital details */}
        <path d="M26,15 Q34,10 42,15" />
        <line x1="26" y1="14" x2="42" y2="14" />
      </g>

      {/* Right column */}
      <g stroke="url(#arch-silver)" strokeWidth="0.8">
        <rect x="362" y="20" width="8" height="75" fill="none" />
        <rect x="360" y="15" width="12" height="6" fill="none" />
        <rect x="360" y="93" width="12" height="4" fill="none" />
        <path d="M358,15 Q366,10 374,15" />
        <line x1="358" y1="14" x2="374" y2="14" />
      </g>

      {/* Top arch */}
      <path
        d="M38,15 Q200,-15 362,15"
        stroke="url(#arch-silver)"
        strokeWidth="1"
      />
      <path
        d="M42,18 Q200,-8 358,18"
        stroke="url(#arch-silver)"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Decorative finials */}
      <circle cx="200" cy="-2" r="3" stroke="url(#arch-silver)" strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="1" x2="200" y2="8" stroke="url(#arch-silver)" strokeWidth="0.5" opacity="0.3" />

      {/* Bottom rail */}
      <line x1="30" y1="97" x2="370" y2="97" stroke="url(#arch-silver)" strokeWidth="0.5" opacity="0.3" />

      {/* Side ornamental lines */}
      <line x1="25" y1="20" x2="25" y2="95" stroke="url(#arch-silver)" strokeWidth="0.3" opacity="0.2" />
      <line x1="375" y1="20" x2="375" y2="95" stroke="url(#arch-silver)" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}
