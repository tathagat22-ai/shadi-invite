"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { gsap } from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mandalaRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const size = 360;
  const cx = size / 2;
  const cy = size / 2;

  const mandala = useMemo(() => {
    const r = (n: number) => Math.round(n * 100) / 100;

    const createPetal = (
      angle: number,
      innerR: number,
      outerR: number,
      spread: number
    ) => {
      const rad = (angle * Math.PI) / 180;
      const radL = ((angle - spread) * Math.PI) / 180;
      const radR = ((angle + spread) * Math.PI) / 180;
      const ix = r(cx + innerR * Math.cos(rad));
      const iy = r(cy + innerR * Math.sin(rad));
      const ox = r(cx + outerR * Math.cos(rad));
      const oy = r(cy + outerR * Math.sin(rad));
      const lx = r(cx + outerR * 0.7 * Math.cos(radL));
      const ly = r(cy + outerR * 0.7 * Math.sin(radL));
      const rx = r(cx + outerR * 0.7 * Math.cos(radR));
      const ry = r(cy + outerR * 0.7 * Math.sin(radR));
      return `M ${ix} ${iy} Q ${lx} ${ly} ${ox} ${oy} Q ${rx} ${ry} ${ix} ${iy}`;
    };

    const layers = [
      { count: 8, inner: 12, outer: 55, spread: 12 },
      { count: 12, inner: 25, outer: 85, spread: 8 },
      { count: 16, inner: 50, outer: 115, spread: 5 },
      { count: 24, inner: 75, outer: 140, spread: 3.5 },
      { count: 16, inner: 100, outer: 155, spread: 4 },
    ];

    const paths: string[] = [];
    layers.forEach((layer, li) => {
      for (let i = 0; i < layer.count; i++) {
        const offset = li % 2 === 0 ? 0 : 360 / layer.count / 2;
        const angle = (360 / layer.count) * i + offset;
        paths.push(createPetal(angle, layer.inner, layer.outer, layer.spread));
      }
    });

    const circles = [15, 30, 50, 70, 90, 110, 130, 150, 165];

    const dots = Array.from({ length: 12 }, (_, i) => {
      const angle = (360 / 12) * i;
      const rad = (angle * Math.PI) / 180;
      return {
        cx: r(cx + 160 * Math.cos(rad)),
        cy: r(cy + 160 * Math.sin(rad)),
      };
    });

    return { paths, circles, dots };
  }, [cx, cy]);

  const finish = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const paths = mandalaRef.current?.querySelectorAll(".splash-path");
    const dots = mandalaRef.current?.querySelectorAll(".splash-dot");
    if (!paths || !dots) return;

    paths.forEach((path) => {
      const el = path as SVGGeometryElement;
      if (el.getTotalLength) {
        const length = el.getTotalLength();
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
      }
    });

    gsap.set(dots, { scale: 0, transformOrigin: "center center" });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.2,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: finish,
        });
      },
    });

    tlRef.current = tl;

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2.5,
      stagger: 0.02,
      ease: "power2.inOut",
    })
      .to(
        dots,
        { scale: 1, duration: 0.4, stagger: 0.05, ease: "back.out(2)" },
        "-=0.5"
      )
      .to(
        mandalaRef.current,
        { rotation: 90, scale: 1.15, duration: 1.5, ease: "power1.inOut" },
        "-=0.8"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=1.2"
      )
      .to({}, { duration: 0.3 });

    return () => {
      tl.kill();
    };
  }, [finish]);

  const handleSkip = () => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    const container = containerRef.current;
    if (container) {
      container.style.transition = "opacity 0.3s ease-out";
      container.style.opacity = "0";
      container.style.pointerEvents = "none";
    }
    setTimeout(finish, 350);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "var(--ivory)" }}
    >
      <svg
        ref={mandalaRef}
        viewBox={`0 0 ${size} ${size}`}
        className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
        fill="none"
        style={{ transformOrigin: "center center" }}
      >
        {mandala.circles.map((r, i) => (
          <circle
            key={`c-${i}`}
            cx={cx}
            cy={cy}
            r={r}
            stroke="var(--gold)"
            strokeWidth={i === mandala.circles.length - 1 ? 1.2 : 0.6}
            opacity={0.7}
            className="splash-path"
          />
        ))}
        {mandala.paths.map((d, i) => (
          <path
            key={`p-${i}`}
            d={d}
            stroke="var(--gold)"
            strokeWidth={0.6}
            opacity={0.8}
            className="splash-path"
          />
        ))}
        {mandala.dots.map((dot, i) => (
          <circle
            key={`d-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={2}
            fill="var(--gold)"
            className="splash-dot"
          />
        ))}
        <circle cx={cx} cy={cy} r={4} fill="var(--gold)" className="splash-dot" />
      </svg>

      <div ref={textRef} className="mt-8 text-center opacity-0">
        <p
          className="font-heading text-sm tracking-[0.35em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          You are invited
        </p>
      </div>

      <button
        onClick={handleSkip}
        className="absolute bottom-8 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-100 cursor-pointer"
        style={{ color: "var(--brown-muted)", opacity: 0.5 }}
      >
        Skip
      </button>
    </div>
  );
}
