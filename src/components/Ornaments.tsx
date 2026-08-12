"use client";

export function PaisleyCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 190 Q10 10 190 10"
        stroke="var(--gold-soft)"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M20 190 Q20 20 190 20"
        stroke="var(--gold-soft)"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M30 180 C30 100 50 50 120 30 Q80 60 60 100 Q50 140 30 180Z"
        stroke="var(--gold)"
        strokeWidth="0.8"
        opacity="0.3"
        fill="var(--gold)"
        fillOpacity="0.05"
      />
      <circle cx="40" cy="170" r="3" fill="var(--gold)" opacity="0.3" />
      <circle cx="170" cy="40" r="3" fill="var(--gold)" opacity="0.3" />
      <path
        d="M15 185 Q10 180 15 175"
        stroke="var(--gold)"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div
        className="h-px flex-1 max-w-[100px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold-soft), transparent)",
        }}
      />
      <svg
        viewBox="0 0 40 20"
        className="w-10 h-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 Q10 0 20 10 Q30 20 40 10"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="20" cy="10" r="2" fill="var(--gold)" opacity="0.5" />
      </svg>
      <div
        className="h-px flex-1 max-w-[100px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold-soft), transparent)",
        }}
      />
    </div>
  );
}

export function FloralBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      className={`w-full max-w-md h-8 ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M0 15 Q50 5 100 15 Q150 25 200 15 Q250 5 300 15 Q350 25 400 15"
        stroke="var(--gold-soft)"
        strokeWidth="0.8"
        opacity="0.5"
      />
      {[100, 200, 300].map((x) => (
        <g key={x}>
          <circle cx={x} cy="15" r="3" fill="var(--gold)" opacity="0.3" />
          <path
            d={`M${x - 8} 15 Q${x} 5 ${x + 8} 15 Q${x} 25 ${x - 8} 15`}
            stroke="var(--gold)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}
