"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PaisleyCorner } from "./Ornaments";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        monogramRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          dateRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1"
        );

      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <PaisleyCorner className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-40" />
      <PaisleyCorner
        className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-40"
        flip
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div ref={monogramRef} className="mb-6 opacity-0">
          <div className="relative">
            <span
              className="font-script text-7xl sm:text-8xl md:text-9xl gold-shimmer"
              style={{ lineHeight: 1.2 }}
            >
              A
            </span>
            <span
              className="font-heading text-2xl sm:text-3xl mx-2 sm:mx-4"
              style={{
                color: "var(--gold)",
                verticalAlign: "middle",
              }}
            >
              &amp;
            </span>
            <span
              className="font-script text-7xl sm:text-8xl md:text-9xl gold-shimmer"
              style={{ lineHeight: 1.2 }}
            >
              T
            </span>
          </div>
        </div>

        <div ref={nameRef} className="mb-8 opacity-0">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
            <span style={{ color: "var(--burgundy)" }}>Akanksha</span>
            <span
              className="block text-lg sm:text-xl font-heading tracking-[0.3em] my-3"
              style={{ color: "var(--gold)" }}
            >
              WEDS
            </span>
            <span style={{ color: "var(--burgundy)" }}>Tathagat</span>
          </h1>
        </div>

        <div ref={dateRef} className="opacity-0">
          <div
            className="inline-block px-8 py-3 rounded-sm"
            style={{
              border: "1px solid var(--gold-soft)",
              background: "rgba(197, 150, 58, 0.05)",
            }}
          >
            <p
              className="font-heading text-sm sm:text-base tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Save the Date
            </p>
            <p
              className="font-display text-xl sm:text-2xl mt-1 font-semibold"
              style={{ color: "var(--brown)" }}
            >
              Date Coming Soon
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 flex flex-col items-center gap-2 opacity-0"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase font-heading"
          style={{ color: "var(--brown-muted)" }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="28"
          viewBox="0 0 20 28"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
        >
          <rect x="1" y="1" width="18" height="26" rx="9" />
          <line x1="10" y1="6" x2="10" y2="12" />
        </svg>
      </div>
    </section>
  );
}
