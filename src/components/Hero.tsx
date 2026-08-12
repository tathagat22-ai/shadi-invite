"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingDetails as w } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(cardRef);

      gsap.set(cardRef.current, { opacity: 0, y: 30, scale: 0.97 });

      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          q(".hero-reveal"),
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
            stagger: 0.14,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 px-3"
    >
      {/* soft dark backdrop (blurred art) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/couple-welcome.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(28px) brightness(0.28)",
          transform: "scale(1.15)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,11,46,0.4), rgba(20,11,46,0.85))",
        }}
      />

      {/* Invitation card — the ornate artwork */}
      <div
        ref={cardRef}
        className="relative z-10 overflow-hidden rounded-sm"
        style={{
          aspectRatio: "1024 / 1536",
          height: "min(92vh, 138vw)",
          maxWidth: "94vw",
          boxShadow:
            "0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.5), 0 0 0 6px rgba(42,8,16,0.6), 0 0 0 7px rgba(212,175,55,0.25)",
        }}
      >
        {/* artwork */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/couple-welcome.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* top band: darken to fully hide baked-in (misspelled) title, then overlay correct text */}
        <div
          className="absolute top-0 left-0 right-0 h-[54%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,9,40,1) 0%, rgba(22,9,20,1) 88%, rgba(22,9,20,0.55) 96%, transparent 100%)",
          }}
        />

        {/* overlay text — top (centered in the darkened band) */}
        <div className="absolute top-0 left-0 right-0 h-[54%] px-6 flex flex-col items-center justify-center text-center">
          <p
            className="hero-reveal font-heading text-[9px] sm:text-[11px] tracking-[0.3em] uppercase mb-1"
            style={{ color: "var(--gold-bright)" }}
          >
            Together with their families
          </p>
          <p
            className="hero-reveal font-heading text-[8px] sm:text-[10px] tracking-[0.25em] uppercase mb-3"
            style={{ color: "var(--cream-muted)" }}
          >
            invite you to the wedding of
          </p>
          <h1 className="hero-reveal font-script text-5xl sm:text-6xl gold-shimmer text-glow-gold leading-tight">
            Akanksha
          </h1>
          <span
            className="hero-reveal font-decorative text-lg sm:text-2xl leading-none my-1"
            style={{ color: "var(--gold-light)" }}
          >
            &amp;
          </span>
          <h1 className="hero-reveal font-script text-5xl sm:text-6xl gold-shimmer text-glow-gold leading-tight">
            Tathagat
          </h1>
          <p
            className="hero-reveal font-body text-xs sm:text-sm mt-4 max-w-[260px] leading-relaxed"
            style={{ color: "var(--cream-muted)" }}
          >
            request the pleasure of your company to celebrate the auspicious
            occasion of their union
          </p>
        </div>

        {/* bottom band: date + venue */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[34%]"
          style={{
            background:
              "linear-gradient(0deg, rgba(20,11,46,0.95) 0%, rgba(30,10,20,0.8) 45%, rgba(30,10,20,0.3) 80%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 pb-[7%] px-6 flex flex-col items-center text-center">
          {w.dateKnown ? (
            <div className="hero-reveal flex items-center justify-center gap-3 mb-1">
              <span className="font-heading text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold-bright)" }}>
                {w.weddingMonth}
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold gold-text leading-none px-3" style={{ borderLeft: "1px solid rgba(212,175,55,0.5)", borderRight: "1px solid rgba(212,175,55,0.5)" }}>
                {w.weddingDay}
              </span>
              <span className="font-heading text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold-bright)" }}>
                {w.weddingYear}
              </span>
            </div>
          ) : (
            <p className="hero-reveal font-decorative text-xl sm:text-3xl gold-text mb-1">
              Date Coming Soon
            </p>
          )}
          {w.dateKnown && (
            <p className="hero-reveal font-heading text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--cream)" }}>
              {w.weddingWeekday}
            </p>
          )}
          <div className="hero-reveal w-14 h-px my-2 gold-hairline" />
          <p className="hero-reveal font-heading text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--gold-bright)" }}>
            To be held at
          </p>
          <p className="hero-reveal font-display text-sm sm:text-base font-semibold" style={{ color: "var(--cream)" }}>
            {w.ceremonyVenue}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollRef}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 z-20"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-heading" style={{ color: "var(--gold-light)" }}>
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 20 30" fill="none" stroke="var(--gold-light)" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <line x1="10" y1="7" x2="10" y2="13" />
        </svg>
      </div>
    </section>
  );
}
