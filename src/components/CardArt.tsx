"use client";

/* Ornate monogram crest containing the couple's initials */
export function MonogramCrest({
  className = "",
  left = "A",
  right = "T",
}: {
  className?: string;
  left?: string;
  right?: string;
}) {
  return (
    <svg viewBox="0 0 140 150" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crestGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5D896" />
          <stop offset="0.5" stopColor="#E8C15A" />
          <stop offset="1" stopColor="#A87B2C" />
        </linearGradient>
      </defs>

      {/* top finial */}
      <path d="M70 6 L70 18" stroke="url(#crestGold)" strokeWidth="1.4" />
      <circle cx="70" cy="5" r="3" fill="url(#crestGold)" />
      <path d="M62 16 Q70 8 78 16" stroke="url(#crestGold)" strokeWidth="1.2" fill="none" />

      {/* laurel wreath */}
      <path
        d="M70 24 Q30 40 34 90 Q40 128 70 140"
        stroke="url(#crestGold)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M70 24 Q110 40 106 90 Q100 128 70 140"
        stroke="url(#crestGold)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.9"
      />
      {/* laurel leaves */}
      {Array.from({ length: 7 }).map((_, i) => {
        const t = i / 6;
        const ly = 40 + t * 90;
        const lx = 34 + Math.sin(t * Math.PI) * 6;
        return (
          <g key={`l-${i}`}>
            <path
              d={`M${lx} ${ly} q -10 -4 -14 -12`}
              stroke="url(#crestGold)"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            <path
              d={`M${140 - lx} ${ly} q 10 -4 14 -12`}
              stroke="url(#crestGold)"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
          </g>
        );
      })}

      {/* inner oval */}
      <ellipse cx="70" cy="82" rx="34" ry="42" stroke="url(#crestGold)" strokeWidth="0.8" opacity="0.5" />

      {/* interlocked initials */}
      <text
        x="52"
        y="98"
        fontFamily="var(--font-script)"
        fontSize="52"
        fill="url(#crestGold)"
        textAnchor="middle"
      >
        {left}
      </text>
      <text
        x="90"
        y="104"
        fontFamily="var(--font-script)"
        fontSize="52"
        fill="url(#crestGold)"
        textAnchor="middle"
      >
        {right}
      </text>

      {/* bottom ribbon flourish */}
      <path d="M50 134 Q70 146 90 134" stroke="url(#crestGold)" strokeWidth="1.2" fill="none" />
      <path d="M56 138 L52 148 L62 142" stroke="url(#crestGold)" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M84 138 L88 148 L78 142" stroke="url(#crestGold)" strokeWidth="1" fill="none" opacity="0.8" />
    </svg>
  );
}

/* Faint architectural garden pavilion for the base of the card */
export function PavilionScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 140"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="var(--gold)" strokeWidth="0.7" opacity="0.45" fill="none">
        {/* receding steps */}
        <path d="M120 138 L280 138 M135 128 L265 128 M148 118 L252 118 M160 108 L240 108" />
        {/* central pavilion */}
        <path d="M175 108 L175 60 M225 108 L225 60" />
        <path d="M168 60 Q200 40 232 60" />
        <path d="M200 40 L200 30" />
        <circle cx="200" cy="28" r="2" fill="var(--gold)" />
        {/* left colonnade */}
        <path d="M60 130 L60 70 M85 126 L85 74 M110 122 L110 78" />
        <path d="M52 70 L118 70" />
        {/* right colonnade */}
        <path d="M340 130 L340 70 M315 126 L315 74 M290 122 L290 78" />
        <path d="M282 70 L348 70" />
        {/* cypress trees */}
        <path d="M135 120 Q140 80 145 120Z" fill="rgba(46,139,107,0.12)" stroke="var(--emerald-bright)" />
        <path d="M255 120 Q260 80 265 120Z" fill="rgba(46,139,107,0.12)" stroke="var(--emerald-bright)" />
      </g>
    </svg>
  );
}
