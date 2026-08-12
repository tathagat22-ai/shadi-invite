"use client";

import { forwardRef } from "react";

interface MandalaPatternProps {
  size?: number;
  className?: string;
  color?: string;
  opacity?: number;
}

const r = (n: number) => Math.round(n * 100) / 100;

const MandalaPattern = forwardRef<SVGSVGElement, MandalaPatternProps>(
  function MandalaPattern(
    { size = 400, className = "", color = "#C5963A", opacity = 1 },
    ref
  ) {
    const cx = size / 2;
    const cy = size / 2;

    const createPetalPath = (
      angle: number,
      innerR: number,
      outerR: number,
      spread: number
    ) => {
      const rad = (angle * Math.PI) / 180;
      const radLeft = ((angle - spread) * Math.PI) / 180;
      const radRight = ((angle + spread) * Math.PI) / 180;

      const innerX = r(cx + innerR * Math.cos(rad));
      const innerY = r(cy + innerR * Math.sin(rad));
      const outerX = r(cx + outerR * Math.cos(rad));
      const outerY = r(cy + outerR * Math.sin(rad));
      const cpLeftX = r(cx + outerR * 0.7 * Math.cos(radLeft));
      const cpLeftY = r(cy + outerR * 0.7 * Math.sin(radLeft));
      const cpRightX = r(cx + outerR * 0.7 * Math.cos(radRight));
      const cpRightY = r(cy + outerR * 0.7 * Math.sin(radRight));

      return `M ${innerX} ${innerY} Q ${cpLeftX} ${cpLeftY} ${outerX} ${outerY} Q ${cpRightX} ${cpRightY} ${innerX} ${innerY}`;
    };

    const petalCount = 12;
    const paths: string[] = [];

    for (let i = 0; i < petalCount; i++) {
      const angle = (360 / petalCount) * i;
      paths.push(createPetalPath(angle, size * 0.05, size * 0.25, 8));
    }

    for (let i = 0; i < petalCount; i++) {
      const angle = (360 / petalCount) * i + 15;
      paths.push(createPetalPath(angle, size * 0.1, size * 0.35, 6));
    }

    for (let i = 0; i < petalCount * 2; i++) {
      const angle = (360 / (petalCount * 2)) * i;
      paths.push(createPetalPath(angle, size * 0.2, size * 0.42, 4));
    }

    const circles = [0.08, 0.15, 0.22, 0.3, 0.38, 0.45].map(
      (v) => r(v * size)
    );

    return (
      <svg
        ref={ref}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className={className}
        style={{ opacity }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        suppressHydrationWarning
      >
        {circles.map((radius, i) => (
          <circle
            key={`circle-${i}`}
            cx={cx}
            cy={cy}
            r={radius}
            stroke={color}
            strokeWidth={i === circles.length - 1 ? 1.5 : 0.8}
            className="mandala-path"
            suppressHydrationWarning
          />
        ))}
        {paths.map((d, i) => (
          <path
            key={`petal-${i}`}
            d={d}
            stroke={color}
            strokeWidth={0.8}
            className="mandala-path"
            suppressHydrationWarning
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (360 / 8) * i;
          const rad = (angle * Math.PI) / 180;
          const dotR = size * 0.46;
          return (
            <circle
              key={`dot-${i}`}
              cx={r(cx + dotR * Math.cos(rad))}
              cy={r(cy + dotR * Math.sin(rad))}
              r={2.5}
              fill={color}
              className="mandala-dot"
              suppressHydrationWarning
            />
          );
        })}
      </svg>
    );
  }
);

export default MandalaPattern;
