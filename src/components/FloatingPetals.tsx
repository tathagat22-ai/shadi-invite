"use client";

import { useEffect, useRef, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  sway: number;
  swaySpeed: number;
  opacity: number;
  delay: number;
  type: "petal" | "sparkle";
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 10 : 18;

    const initial: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.15 + 0.05,
      sway: Math.random() * 30 + 15,
      swaySpeed: Math.random() * 0.002 + 0.001,
      opacity: Math.random() * 0.4 + 0.15,
      delay: Math.random() * 1000,
      type: i < count * 0.7 ? "petal" : "sparkle",
    }));

    setPetals(initial);

    const animate = () => {
      timeRef.current += 16;
      setPetals((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y + p.speed) % 110,
          x:
            p.x +
            Math.sin((timeRef.current + p.delay) * p.swaySpeed) * 0.08,
          rotation: p.rotation + p.speed * 2,
        }))
      );
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            transition: "none",
            willChange: "transform",
          }}
        >
          {p.type === "petal" ? (
            <svg
              width={p.size}
              height={p.size * 1.4}
              viewBox="0 0 20 28"
              fill="none"
            >
              <path
                d="M10 0 C15 7 20 14 10 28 C0 14 5 7 10 0Z"
                fill="var(--gold-light)"
                opacity="0.6"
              />
            </svg>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: p.size * 0.4,
                height: p.size * 0.4,
                background:
                  "radial-gradient(circle, var(--gold-light), transparent)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
