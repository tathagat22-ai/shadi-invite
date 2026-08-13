"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingDetails as w } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ opened = true }: { opened?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!opened) return;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(contentRef);
      gsap.from(q(".iv"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [opened]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--wine-deep)" }}
    >
      {/* Background artwork — couple image, soft and atmospheric */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/couple-welcome.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.08,
            filter: "blur(6px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, rgba(74,20,32,0.3) 0%, rgba(42,8,16,0.9) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-6 py-20 sm:py-28 min-h-screen justify-center"
        style={{ maxWidth: 520, margin: "0 auto" }}
      >
        {/* Ornate top line */}
        <div className="iv w-20 h-px mb-8 gold-hairline" />

        {/* Monogram */}
        <div className="iv mb-4">
          <svg viewBox="0 0 100 100" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mgold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F5D896" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#A87B2C" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" stroke="url(#mgold)" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="42" stroke="url(#mgold)" strokeWidth="0.6" opacity="0.5" />
            <text x="36" y="62" fontFamily="var(--font-script)" fontSize="40" fill="url(#mgold)" textAnchor="middle">A</text>
            <text x="66" y="66" fontFamily="var(--font-script)" fontSize="40" fill="url(#mgold)" textAnchor="middle">T</text>
          </svg>
        </div>

        <p
          className="iv font-heading text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--gold-bright)" }}
        >
          Together with their families
        </p>

        {/* Names */}
        <h1 className="iv font-script text-5xl sm:text-7xl gold-shimmer leading-tight">
          {w.bride}
        </h1>
        <span
          className="iv font-decorative text-xl sm:text-2xl my-2"
          style={{ color: "var(--gold-light)" }}
        >
          &amp;
        </span>
        <h1 className="iv font-script text-5xl sm:text-7xl gold-shimmer leading-tight mb-6">
          {w.groom}
        </h1>

        <p
          className="iv font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "var(--gold-bright)" }}
        >
          Request the pleasure of your company
        </p>
        <p
          className="iv font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: "var(--gold-bright)" }}
        >
          To celebrate our wedding on
        </p>

        {/* Date block */}
        {w.dateKnown ? (
          <div className="iv flex items-center justify-center gap-4 mb-2">
            <div className="flex flex-col items-center">
              <span className="font-heading text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold-bright)" }}>
                {w.weddingMonth}
              </span>
            </div>
            <div
              className="flex flex-col items-center px-5 py-1"
              style={{ borderLeft: "1px solid rgba(212,175,55,0.5)", borderRight: "1px solid rgba(212,175,55,0.5)" }}
            >
              <span className="font-display text-5xl sm:text-6xl font-bold gold-text leading-none">
                {w.weddingDay}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold-bright)" }}>
                {w.weddingYear}
              </span>
            </div>
          </div>
        ) : (
          <p className="iv font-decorative text-2xl sm:text-3xl gold-text mb-2">
            Save the Date
          </p>
        )}

        {w.dateKnown && (
          <p className="iv font-heading text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "var(--cream)" }}>
            {w.weddingWeekday}
          </p>
        )}

        <div className="iv w-12 h-px my-6 gold-hairline" />

        <p
          className="iv font-heading text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ color: "var(--gold-bright)" }}
        >
          To be held at
        </p>
        <p
          className="iv font-script text-2xl sm:text-3xl"
          style={{ color: "var(--cream)" }}
        >
          {w.ceremonyVenue}
        </p>

        {w.ceremonyCity && (
          <p className="iv font-body text-sm mt-1" style={{ color: "var(--cream-muted)" }}>
            {w.ceremonyCity}
          </p>
        )}

        <div className="iv w-20 h-px mt-10 gold-hairline" />
      </div>
    </section>
  );
}
