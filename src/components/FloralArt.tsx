"use client";

/* A single stylised rose built from spiralling petals */
function Rose({
  x,
  y,
  r,
  hue = "gold",
}: {
  x: number;
  y: number;
  r: number;
  hue?: "gold" | "rose" | "emerald";
}) {
  const stroke =
    hue === "rose"
      ? "var(--rose)"
      : hue === "emerald"
      ? "var(--emerald-bright)"
      : "var(--gold-light)";
  const fill =
    hue === "rose"
      ? "rgba(217,139,160,0.18)"
      : hue === "emerald"
      ? "rgba(46,139,107,0.15)"
      : "rgba(245,216,150,0.16)";
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={fill} />
      <circle r={r * 0.62} fill="none" stroke={stroke} strokeWidth="0.7" opacity="0.85" />
      <circle r={r * 0.4} fill="none" stroke={stroke} strokeWidth="0.7" opacity="0.9" />
      {/* spiral heart */}
      <path
        d={`M ${-r * 0.18} ${-r * 0.1} q ${r * 0.28} ${-r * 0.28} ${r * 0.4} ${r * 0.05} q ${r * 0.1} ${r * 0.28} ${-r * 0.2} ${r * 0.32} q ${-r * 0.3} ${r * 0.02} ${-r * 0.2} ${-r * 0.3}`}
        fill="none"
        stroke={stroke}
        strokeWidth="0.7"
        opacity="0.9"
      />
      {/* outer petals */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * 60 * Math.PI) / 180;
        const px = Math.cos(a) * r * 0.72;
        const py = Math.sin(a) * r * 0.72;
        return (
          <path
            key={i}
            d={`M ${px * 0.5} ${py * 0.5} Q ${px * 1.3} ${py * 1.3} ${px} ${py} Q ${px * 0.8} ${py * 0.8} ${px * 0.5} ${py * 0.5}`}
            fill="none"
            stroke={stroke}
            strokeWidth="0.6"
            opacity="0.7"
          />
        );
      })}
    </g>
  );
}

/* A leaf */
function Leaf({
  x,
  y,
  rot,
  len = 22,
}: {
  x: number;
  y: number;
  rot: number;
  len?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d={`M0 0 Q ${len * 0.4} ${-len * 0.35} ${len} 0 Q ${len * 0.4} ${len * 0.35} 0 0 Z`}
        fill="rgba(46,139,107,0.14)"
        stroke="var(--emerald-bright)"
        strokeWidth="0.6"
        opacity="0.75"
      />
      <path
        d={`M0 0 L ${len} 0`}
        stroke="var(--emerald-bright)"
        strokeWidth="0.5"
        opacity="0.6"
      />
    </g>
  );
}

/* A small bud on a stem */
function Bud({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d="M0 0 Q 3 -10 0 -16 Q -3 -10 0 0Z" fill="rgba(245,216,150,0.2)" stroke="var(--gold-light)" strokeWidth="0.6" opacity="0.8" />
      <path d="M0 0 Q 2 -4 4 -3" stroke="var(--emerald-bright)" strokeWidth="0.6" fill="none" opacity="0.7" />
    </g>
  );
}

/*
  Cascading floral spray for a corner of the invitation card.
  Renders from the top corner and trails inward/downward.
*/
export function FloralSpray({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 160 220"
      className={className}
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* trailing vine */}
      <path
        d="M20 8 Q 60 40 45 90 Q 30 140 60 200"
        stroke="var(--emerald-bright)"
        strokeWidth="0.7"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M28 6 Q 80 30 70 80 Q 62 130 95 190"
        stroke="var(--gold)"
        strokeWidth="0.6"
        opacity="0.35"
        fill="none"
      />

      <Leaf x={40} y={30} rot={40} len={26} />
      <Leaf x={30} y={70} rot={110} len={22} />
      <Leaf x={70} y={55} rot={-20} len={24} />
      <Leaf x={45} y={120} rot={80} len={20} />
      <Leaf x={78} y={140} rot={20} len={22} />
      <Leaf x={60} y={185} rot={70} len={18} />

      <Bud x={80} y={38} rot={30} />
      <Bud x={38} y={100} rot={-10} />
      <Bud x={92} y={165} rot={40} />

      <Rose x={34} y={22} r={16} hue="gold" />
      <Rose x={64} y={40} r={12} hue="rose" />
      <Rose x={40} y={62} r={10} hue="gold" />
      <Rose x={58} y={100} r={14} hue="gold" />
      <Rose x={80} y={128} r={10} hue="rose" />
      <Rose x={74} y={175} r={12} hue="gold" />
    </svg>
  );
}
