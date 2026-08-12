"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloralSpray } from "./FloralArt";
import { MonogramCrest, PavilionScene } from "./CardArt";
import { weddingDetails as w } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(cardRef);

      gsap.set(cardRef.current, { opacity: 0, y: 40, scale: 0.96 });

      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
      })
        .from(
          q(".hero-border"),
          { opacity: 0, duration: 1, ease: "power2.inOut" },
          "-=0.6"
        )
        .from(
          q(".hero-floral"),
          { opacity: 0, scale: 0.8, duration: 1, stagger: 0.15, ease: "power2.out" },
          "-=0.9"
        )
        .from(
          q(".hero-crest"),
          { opacity: 0, scale: 0.7, y: 10, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.7"
        )
        .from(
          q(".hero-reveal"),
          { opacity: 0, y: 18, duration: 0.7, stagger: 0.14, ease: "power2.out" },
          "-=0.5"
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 px-4"
    >
      {/* soft dark backdrop */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/couple-dance.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "blur(14px) brightness(0.32) saturate(1.1)",
          transform: "scale(1.1)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(42,8,16,0.5) 0%, rgba(20,11,46,0.85) 100%)",
        }}
      />

      {/* Invitation card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-[440px] mx-auto"
      >
        <div
          className="relative px-7 sm:px-10 pt-10 pb-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(165deg, rgba(74,20,32,0.72), rgba(20,11,46,0.82))",
            backdropFilter: "blur(6px)",
            boxShadow:
              "0 20px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(245,216,150,0.12)",
          }}
        >
          {/* ornate border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 300 500"
            fill="none"
          >
            <rect
              className="hero-border"
              x="8"
              y="8"
              width="284"
              height="484"
              stroke="var(--gold)"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <rect
              className="hero-border"
              x="15"
              y="15"
              width="270"
              height="470"
              stroke="var(--gold-light)"
              strokeWidth="0.6"
              opacity="0.5"
            />
          </svg>

          {/* corner florals */}
          <FloralSpray className="hero-floral absolute -top-2 -left-3 w-28 h-40 sm:w-32 sm:h-44" />
          <FloralSpray flip className="hero-floral absolute -top-2 -right-3 w-28 h-40 sm:w-32 sm:h-44" />

          <div className="relative flex flex-col items-center text-center">
            <MonogramCrest className="hero-crest w-24 h-28 sm:w-28 sm:h-32 mb-2" />

            <p
              className="hero-reveal font-heading text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "var(--gold-bright)" }}
            >
              Together with their families
            </p>

            <h1 className="hero-reveal font-script text-5xl sm:text-6xl gold-shimmer text-glow-gold leading-tight">
              Akanksha
            </h1>
            <span
              className="hero-reveal font-decorative text-xl sm:text-2xl my-1"
              style={{ color: "var(--gold-light)" }}
            >
              &amp;
            </span>
            <h1 className="hero-reveal font-script text-5xl sm:text-6xl gold-shimmer text-glow-gold leading-tight">
              Tathagat
            </h1>

            <p
              className="hero-reveal font-body text-sm sm:text-base mt-5 mb-5 max-w-[280px] leading-relaxed"
              style={{ color: "var(--cream-muted)" }}
            >
              request the pleasure of your company to celebrate the auspicious
              occasion of their wedding
            </p>

            {/* Structured date block */}
            {w.dateKnown ? (
              <div className="hero-reveal flex items-stretch justify-center gap-4 my-2">
                <div className="flex flex-col justify-center">
                  <span
                    className="font-heading text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold-bright)" }}
                  >
                    {w.weddingMonth}
                  </span>
                </div>
                <div
                  className="flex flex-col items-center px-4"
                  style={{
                    borderLeft: "1px solid var(--gold-soft, #D4C4A0)",
                    borderRight: "1px solid var(--gold-soft, #D4C4A0)",
                    borderColor: "rgba(212,175,55,0.5)",
                  }}
                >
                  <span
                    className="font-display text-5xl font-bold gold-text leading-none"
                  >
                    {w.weddingDay}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="font-heading text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold-bright)" }}
                  >
                    {w.weddingYear}
                  </span>
                </div>
              </div>
            ) : (
              <div className="hero-reveal my-2">
                <p
                  className="font-decorative text-2xl sm:text-3xl gold-text"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Date Coming Soon
                </p>
              </div>
            )}

            {w.dateKnown && (
              <p
                className="hero-reveal font-heading text-xs tracking-[0.3em] uppercase mt-1"
                style={{ color: "var(--cream)" }}
              >
                {w.weddingWeekday}
              </p>
            )}

            <div className="hero-reveal w-16 h-px my-5 gold-hairline" />

            <p
              className="hero-reveal font-heading text-[10px] tracking-[0.3em] uppercase mb-1"
              style={{ color: "var(--gold-bright)" }}
            >
              To be held at
            </p>
            <p
              className="hero-reveal font-display text-base sm:text-lg font-semibold"
              style={{ color: "var(--cream)" }}
            >
              {w.ceremonyVenue}
            </p>

            {/* pavilion scene */}
            <PavilionScene className="hero-reveal w-full max-w-[300px] h-20 mt-4 opacity-80" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollRef}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0 z-20"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-heading"
          style={{ color: "var(--gold-light)" }}
        >
          Scroll
        </span>
        <svg width="18" height="28" viewBox="0 0 20 30" fill="none" stroke="var(--gold-light)" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <line x1="10" y1="7" x2="10" y2="13" />
        </svg>
      </div>
    </section>
  );
}
