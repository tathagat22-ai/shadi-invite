"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chandelier, MarigoldStrand, LotusDivider } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
      )
        .fromTo(
          monogramRef.current,
          { opacity: 0, scale: 0.7, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "back.out(1.4)" },
          "-=1.2"
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          dateRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax on the background image
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image (dancing couple — no baked-in text, softened for legibility) */}
      <div
        ref={bgRef}
        className="absolute -inset-12 z-0"
        style={{
          backgroundImage: "url(/images/couple-dance.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          filter: "blur(3px) brightness(0.55) saturate(1.15)",
        }}
      />
      {/* Dark jewel overlay for depth + legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,8,16,0.75) 0%, rgba(42,8,16,0.45) 35%, rgba(42,8,16,0.6) 65%, rgba(42,8,16,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(42,8,16,0.7) 100%)",
        }}
      />

      {/* Chandelier from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <Chandelier />
      </div>

      {/* Marigold garlands hanging on sides */}
      <MarigoldStrand
        count={14}
        className="absolute top-0 left-[6%] sm:left-[15%] z-10"
      />
      <MarigoldStrand
        count={14}
        className="absolute top-0 right-[6%] sm:right-[15%] z-10"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center mt-16">
        <div ref={monogramRef} className="mb-4 opacity-0">
          <p
            className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-glow-gold"
            style={{ color: "var(--gold-light)" }}
          >
            The Wedding Of
          </p>
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,216,150,0.25), transparent 65%)",
              }}
            />
            <span className="relative font-script text-8xl sm:text-9xl gold-shimmer text-glow-gold leading-none">
              A
            </span>
            <span
              className="relative font-decorative text-3xl sm:text-4xl mx-1 sm:mx-3"
              style={{ color: "var(--gold-light)" }}
            >
              &amp;
            </span>
            <span className="relative font-script text-8xl sm:text-9xl gold-shimmer text-glow-gold leading-none">
              T
            </span>
          </div>
        </div>

        <div ref={nameRef} className="mb-8 opacity-0">
          <h1 className="font-decorative text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide gold-text text-glow-gold">
            Akanksha
          </h1>
          <div className="my-3">
            <LotusDivider />
          </div>
          <h1 className="font-decorative text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide gold-text text-glow-gold">
            Tathagat
          </h1>
        </div>

        <div ref={dateRef} className="opacity-0">
          <div
            className="inline-block px-8 py-4 rounded-sm glass-panel"
          >
            <p
              className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase"
              style={{ color: "var(--gold-light)" }}
            >
              Save the Date
            </p>
            <p
              className="font-display text-xl sm:text-2xl mt-1 font-semibold"
              style={{ color: "var(--cream)" }}
            >
              Date Coming Soon
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 flex flex-col items-center gap-2 opacity-0 z-20"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-heading"
          style={{ color: "var(--gold-light)" }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          stroke="var(--gold-light)"
          strokeWidth="1.5"
        >
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <line x1="10" y1="7" x2="10" y2="13" />
        </svg>
      </div>
    </section>
  );
}
