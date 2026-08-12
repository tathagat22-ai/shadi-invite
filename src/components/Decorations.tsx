"use client";

/* ============ Ornate Temple Arch (Mehrab) Frame ============ */
export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="archGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A87B2C" />
          <stop offset="0.5" stopColor="#F5D896" />
          <stop offset="1" stopColor="#A87B2C" />
        </linearGradient>
      </defs>
      {/* Outer mehrab arch */}
      <path
        d="M20 590 L20 200 Q20 70 120 40 Q200 15 280 40 Q380 70 380 200 L380 590"
        stroke="url(#archGold)"
        strokeWidth="2.5"
        opacity="0.9"
      />
      <path
        d="M34 590 L34 205 Q34 82 128 54 Q200 32 272 54 Q366 82 366 205 L366 590"
        stroke="url(#archGold)"
        strokeWidth="1"
        opacity="0.55"
      />
      {/* Scalloped inner edge along the arch crown */}
      <path
        d="M50 210 Q50 100 135 72 Q200 52 265 72 Q350 100 350 210"
        stroke="var(--gold)"
        strokeWidth="0.8"
        strokeDasharray="2 6"
        opacity="0.5"
      />
      {/* Finial at apex */}
      <g opacity="0.9">
        <path
          d="M200 34 L200 12"
          stroke="url(#archGold)"
          strokeWidth="2"
        />
        <circle cx="200" cy="8" r="4" fill="url(#archGold)" />
        <path
          d="M188 24 Q200 14 212 24"
          stroke="url(#archGold)"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

/* ============ Chandelier hanging from the top ============ */
export function Chandelier({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* chain */}
      <div
        className="w-px h-10 sm:h-16"
        style={{ background: "linear-gradient(var(--gold), var(--gold-deep))" }}
      />
      <div
        className="relative"
        style={{ animation: "sway 6s ease-in-out infinite", transformOrigin: "top center" }}
      >
        {/* glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,216,150,0.35), transparent 70%)",
            animation: "glow-pulse 4s ease-in-out infinite",
          }}
        />
        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          className="relative"
        >
          <defs>
            <linearGradient id="chandGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F5D896" />
              <stop offset="1" stopColor="#A87B2C" />
            </linearGradient>
          </defs>
          {/* top cap */}
          <path d="M70 0 L70 14" stroke="url(#chandGold)" strokeWidth="1.5" />
          <ellipse cx="70" cy="16" rx="8" ry="4" fill="url(#chandGold)" />
          {/* frame rings */}
          <path
            d="M30 40 Q70 20 110 40"
            stroke="url(#chandGold)"
            strokeWidth="1.5"
          />
          <path
            d="M22 58 Q70 34 118 58"
            stroke="url(#chandGold)"
            strokeWidth="1.5"
          />
          {/* candle arms */}
          {[26, 46, 70, 94, 114].map((x, i) => {
            const y = i === 2 ? 34 : i === 0 || i === 4 ? 58 : 48;
            return (
              <g key={x}>
                <line
                  x1="70"
                  y1="24"
                  x2={x}
                  y2={y}
                  stroke="url(#chandGold)"
                  strokeWidth="1"
                  opacity="0.7"
                />
                {/* flame */}
                <ellipse
                  cx={x}
                  cy={y - 6}
                  rx="2.5"
                  ry="5"
                  fill="#FFE9A8"
                  style={{ animation: "flicker 2s ease-in-out infinite" }}
                />
                <ellipse cx={x} cy={y - 5} rx="1.2" ry="3" fill="#FFF6DE" />
                {/* hanging crystal */}
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y + 16}
                  stroke="url(#chandGold)"
                  strokeWidth="0.6"
                  opacity="0.5"
                />
                <circle cx={x} cy={y + 18} r="1.5" fill="#F5D896" opacity="0.7" />
              </g>
            );
          })}
          {/* central drop */}
          <line x1="70" y1="58" x2="70" y2="86" stroke="url(#chandGold)" strokeWidth="1" />
          <path d="M64 86 L70 100 L76 86 Z" fill="url(#chandGold)" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

/* ============ Hanging Marigold Garland Strand ============ */
export function MarigoldStrand({
  count = 8,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const colors = ["#E8862E", "#F4A825", "#E8A020", "#D97218"];
  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ animation: "sway 7s ease-in-out infinite", transformOrigin: "top center" }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 18 + (i % 3) * 4;
        const color = colors[i % colors.length];
        return (
          <div key={i} className="flex flex-col items-center -mt-1">
            <div className="w-px h-3" style={{ background: "var(--emerald)" }} />
            <svg width={size} height={size} viewBox="0 0 24 24">
              {Array.from({ length: 12 }).map((_, p) => {
                const a = (p * 30 * Math.PI) / 180;
                return (
                  <ellipse
                    key={p}
                    cx={12 + 7 * Math.cos(a)}
                    cy={12 + 7 * Math.sin(a)}
                    rx="3"
                    ry="4.5"
                    fill={color}
                    opacity="0.92"
                    transform={`rotate(${p * 30} ${12 + 7 * Math.cos(a)} ${12 + 7 * Math.sin(a)})`}
                  />
                );
              })}
              <circle cx="12" cy="12" r="5" fill={color} />
              <circle cx="12" cy="12" r="2.5" fill="#B85818" opacity="0.6" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/* ============ Glowing Diya (oil lamp) ============ */
export function Diya({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute left-1/2 -top-6 -translate-x-1/2 w-10 h-10 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,180,80,0.6), transparent 70%)",
          animation: "glow-pulse 3s ease-in-out infinite",
        }}
      />
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="relative">
        {/* flame */}
        <ellipse
          cx="22"
          cy="8"
          rx="3"
          ry="7"
          fill="#FFC85A"
          style={{ animation: "flicker 1.8s ease-in-out infinite" }}
        />
        <ellipse cx="22" cy="9" rx="1.5" ry="4" fill="#FFF3D0" />
        {/* lamp body */}
        <path
          d="M6 20 Q22 34 38 20 Q34 24 22 24 Q10 24 6 20Z"
          fill="url(#diyaGold)"
        />
        <path
          d="M4 19 Q22 30 40 19"
          stroke="var(--gold-light)"
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id="diyaGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5D896" />
            <stop offset="1" stopColor="#A87B2C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ============ Ornamental Divider with lotus ============ */
export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 sm:w-24 gold-hairline" />
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
        {[-18, -9, 0, 9, 18].map((off, i) => (
          <path
            key={i}
            d={`M22 22 Q${22 + off} ${10 - Math.abs(off) * 0.2} 22 4`}
            stroke="var(--gold)"
            strokeWidth="1"
            fill="none"
            opacity={0.5 + i * 0.1}
            transform={`rotate(${off} 22 22)`}
          />
        ))}
        <circle cx="22" cy="22" r="2" fill="var(--gold-light)" />
      </svg>
      <div className="h-px w-16 sm:w-24 gold-hairline" />
    </div>
  );
}
