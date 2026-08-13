"use client";

export function FloralBorderLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 800"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <radialGradient id="petalL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F0E8E4" />
          <stop offset="100%" stopColor="#E0D4CC" />
        </radialGradient>
        <radialGradient id="petalCenterL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8D4C8" />
          <stop offset="100%" stopColor="#D4C0B4" />
        </radialGradient>
        <linearGradient id="leafL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8BA878" />
          <stop offset="100%" stopColor="#6B8B5E" />
        </linearGradient>
        <linearGradient id="leafDarkL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6B8B5E" />
          <stop offset="100%" stopColor="#4A6B3E" />
        </linearGradient>
      </defs>

      {/* Large rose cluster - top */}
      <g transform="translate(30, 40)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx={Math.cos((angle * Math.PI) / 180) * 16}
            cy={Math.sin((angle * Math.PI) / 180) * 16}
            rx="14"
            ry="12"
            fill="url(#petalL)"
            opacity="0.9"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="8" fill="url(#petalCenterL)" />
      </g>

      {/* Smaller roses cascading */}
      {[
        { x: 55, y: 100, s: 0.7 },
        { x: 20, y: 140, s: 0.85 },
        { x: 60, y: 190, s: 0.65 },
        { x: 35, y: 250, s: 0.9 },
        { x: 65, y: 310, s: 0.6 },
        { x: 25, y: 370, s: 0.8 },
        { x: 55, y: 430, s: 0.7 },
        { x: 30, y: 490, s: 0.75 },
        { x: 60, y: 550, s: 0.65 },
        { x: 40, y: 610, s: 0.8 },
        { x: 55, y: 670, s: 0.6 },
        { x: 25, y: 730, s: 0.7 },
      ].map((r, i) => (
        <g key={i} transform={`translate(${r.x}, ${r.y}) scale(${r.s})`}>
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <ellipse
              key={j}
              cx={Math.cos((angle * Math.PI) / 180) * 12}
              cy={Math.sin((angle * Math.PI) / 180) * 12}
              rx="11"
              ry="9"
              fill="url(#petalL)"
              opacity="0.85"
              transform={`rotate(${angle + i * 15})`}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="url(#petalCenterL)" />
        </g>
      ))}

      {/* Baby's breath clusters */}
      {[
        { x: 70, y: 60 },
        { x: 80, y: 120 },
        { x: 15, y: 170 },
        { x: 75, y: 230 },
        { x: 85, y: 290 },
        { x: 10, y: 340 },
        { x: 80, y: 400 },
        { x: 70, y: 460 },
        { x: 15, y: 520 },
        { x: 75, y: 580 },
        { x: 80, y: 640 },
        { x: 10, y: 700 },
        { x: 70, y: 760 },
      ].map((b, i) => (
        <g key={`bb-${i}`}>
          {[0, 1, 2, 3, 4].map((j) => (
            <circle
              key={j}
              cx={b.x + Math.cos((j * 72 * Math.PI) / 180) * 6}
              cy={b.y + Math.sin((j * 72 * Math.PI) / 180) * 6}
              r={2 + (j % 2)}
              fill="white"
              opacity="0.7"
            />
          ))}
        </g>
      ))}

      {/* Leaves */}
      {[
        { x: 50, y: 70, r: -30 },
        { x: 80, y: 160, r: 20 },
        { x: 15, y: 210, r: -45 },
        { x: 75, y: 270, r: 35 },
        { x: 10, y: 330, r: -20 },
        { x: 70, y: 390, r: 40 },
        { x: 20, y: 450, r: -35 },
        { x: 80, y: 510, r: 25 },
        { x: 15, y: 570, r: -40 },
        { x: 70, y: 640, r: 30 },
        { x: 20, y: 700, r: -25 },
        { x: 65, y: 760, r: 35 },
      ].map((l, i) => (
        <path
          key={`leaf-${i}`}
          d={`M${l.x},${l.y} Q${l.x + 15},${l.y - 10} ${l.x + 25},${l.y} Q${l.x + 15},${l.y + 10} ${l.x},${l.y}`}
          fill={i % 2 === 0 ? "url(#leafL)" : "url(#leafDarkL)"}
          opacity="0.6"
          transform={`rotate(${l.r}, ${l.x}, ${l.y})`}
        />
      ))}

      {/* Trailing vines */}
      <path
        d="M60,0 Q40,50 55,100 Q70,150 45,200 Q20,250 50,300 Q80,350 40,400 Q10,450 50,500 Q85,550 45,600 Q15,650 55,700 Q80,750 50,800"
        stroke="url(#leafL)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export function FloralBorderRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 800"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMin slice"
      style={{ transform: "scaleX(-1)" }}
    >
      <defs>
        <radialGradient id="petalR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F0E8E4" />
          <stop offset="100%" stopColor="#E0D4CC" />
        </radialGradient>
        <radialGradient id="petalCenterR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8D4C8" />
          <stop offset="100%" stopColor="#D4C0B4" />
        </radialGradient>
        <linearGradient id="leafR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8BA878" />
          <stop offset="100%" stopColor="#6B8B5E" />
        </linearGradient>
        <linearGradient id="leafDarkR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6B8B5E" />
          <stop offset="100%" stopColor="#4A6B3E" />
        </linearGradient>
      </defs>

      {[
        { x: 30, y: 40, s: 1 },
        { x: 55, y: 100, s: 0.7 },
        { x: 20, y: 140, s: 0.85 },
        { x: 60, y: 190, s: 0.65 },
        { x: 35, y: 250, s: 0.9 },
        { x: 65, y: 310, s: 0.6 },
        { x: 25, y: 370, s: 0.8 },
        { x: 55, y: 430, s: 0.7 },
        { x: 30, y: 490, s: 0.75 },
        { x: 60, y: 550, s: 0.65 },
        { x: 40, y: 610, s: 0.8 },
        { x: 55, y: 670, s: 0.6 },
        { x: 25, y: 730, s: 0.7 },
      ].map((r, i) => (
        <g key={i} transform={`translate(${r.x}, ${r.y}) scale(${r.s})`}>
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <ellipse
              key={j}
              cx={Math.cos((angle * Math.PI) / 180) * 12}
              cy={Math.sin((angle * Math.PI) / 180) * 12}
              rx="11"
              ry="9"
              fill="url(#petalR)"
              opacity="0.85"
              transform={`rotate(${angle + i * 15})`}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="url(#petalCenterR)" />
        </g>
      ))}

      {[
        { x: 70, y: 60 },
        { x: 80, y: 120 },
        { x: 15, y: 170 },
        { x: 75, y: 230 },
        { x: 85, y: 290 },
        { x: 10, y: 340 },
        { x: 80, y: 400 },
        { x: 70, y: 460 },
        { x: 15, y: 520 },
        { x: 75, y: 580 },
        { x: 80, y: 640 },
        { x: 10, y: 700 },
        { x: 70, y: 760 },
      ].map((b, i) => (
        <g key={`bb-${i}`}>
          {[0, 1, 2, 3, 4].map((j) => (
            <circle
              key={j}
              cx={b.x + Math.cos((j * 72 * Math.PI) / 180) * 6}
              cy={b.y + Math.sin((j * 72 * Math.PI) / 180) * 6}
              r={2 + (j % 2)}
              fill="white"
              opacity="0.7"
            />
          ))}
        </g>
      ))}

      {[
        { x: 50, y: 70, r: -30 },
        { x: 80, y: 160, r: 20 },
        { x: 15, y: 210, r: -45 },
        { x: 75, y: 270, r: 35 },
        { x: 10, y: 330, r: -20 },
        { x: 70, y: 390, r: 40 },
        { x: 20, y: 450, r: -35 },
        { x: 80, y: 510, r: 25 },
        { x: 15, y: 570, r: -40 },
        { x: 70, y: 640, r: 30 },
        { x: 20, y: 700, r: -25 },
        { x: 65, y: 760, r: 35 },
      ].map((l, i) => (
        <path
          key={`leaf-${i}`}
          d={`M${l.x},${l.y} Q${l.x + 15},${l.y - 10} ${l.x + 25},${l.y} Q${l.x + 15},${l.y + 10} ${l.x},${l.y}`}
          fill={i % 2 === 0 ? "url(#leafR)" : "url(#leafDarkR)"}
          opacity="0.6"
          transform={`rotate(${l.r}, ${l.x}, ${l.y})`}
        />
      ))}

      <path
        d="M60,0 Q40,50 55,100 Q70,150 45,200 Q20,250 50,300 Q80,350 40,400 Q10,450 50,500 Q85,550 45,600 Q15,650 55,700 Q80,750 50,800"
        stroke="url(#leafR)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
