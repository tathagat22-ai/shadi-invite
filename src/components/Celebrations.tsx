"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/data/events";
import VenueIllustration from "./VenueIllustration";

gsap.registerPlugin(ScrollTrigger);

function CelebrationCard({ event }: { event: (typeof events)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(cardRef);
      gsap.from(q(".cv"), {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center text-center px-6 py-12 sm:py-16"
      style={{ borderBottom: "1px solid rgba(192,184,176,0.2)" }}
    >
      {event.image && (
        <div
          className="cv w-full max-w-[320px] aspect-[4/3] rounded-sm overflow-hidden mb-8"
          style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.1)" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      )}

      <p
        className="cv text-heading text-[9px] tracking-[0.35em] uppercase mb-2"
        style={{ color: "var(--mauve)" }}
      >
        {event.tagline}
      </p>
      <h3 className="cv text-script text-4xl sm:text-5xl silver-shimmer mb-1">
        {event.name}
      </h3>
      {event.subtitle && (
        <p
          className="cv text-heading text-[9px] tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--charcoal-light)" }}
        >
          {event.subtitle}
        </p>
      )}

      {!event.image && (
        <VenueIllustration type={event.id} className="cv w-full max-w-[280px] h-auto my-4" />
      )}

      <p
        className="cv text-script text-2xl sm:text-3xl mt-4 mb-1"
        style={{ color: "var(--brown-soft)" }}
      >
        {event.venue}
      </p>
      <p
        className="cv text-body text-sm mb-4"
        style={{ color: "var(--charcoal-light)" }}
      >
        {event.address}
      </p>

      <div className="cv flex items-center gap-3 mb-1">
        <span
          className="text-heading text-[9px] tracking-[0.2em] uppercase"
          style={{ color: "var(--mauve)" }}
        >
          {event.date}
        </span>
      </div>
      <p
        className="cv text-body text-sm italic"
        style={{ color: "var(--charcoal-light)" }}
      >
        {event.time}
      </p>
    </div>
  );
}

export default function Celebrations() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(headerRef);
      gsap.from(q(".ch"), {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative" style={{ background: "var(--blush-light)" }}>
      {/* Architectural frame border - top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 400 40" className="w-full" fill="none" preserveAspectRatio="xMidYMin meet">
          <defs>
            <linearGradient id="frame-s" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#C0B8B0" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#C0B8B0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="20" y1="5" x2="380" y2="5" stroke="url(#frame-s)" strokeWidth="0.5" />
          <line x1="30" y1="10" x2="370" y2="10" stroke="url(#frame-s)" strokeWidth="0.3" />
          {/* Column tops */}
          <rect x="25" y="8" width="6" height="30" stroke="#C0B8B0" strokeWidth="0.5" opacity="0.25" fill="none" />
          <rect x="369" y="8" width="6" height="30" stroke="#C0B8B0" strokeWidth="0.5" opacity="0.25" fill="none" />
          {/* Arch */}
          <path d="M31,10 Q200,-5 369,10" stroke="#C0B8B0" strokeWidth="0.5" opacity="0.2" fill="none" />
        </svg>
      </div>

      {/* Side pillar lines */}
      <div
        className="absolute top-0 bottom-0 left-4 sm:left-8 w-px pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(192,184,176,0.2), transparent)" }}
      />
      <div
        className="absolute top-0 bottom-0 right-4 sm:right-8 w-px pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(192,184,176,0.2), transparent)" }}
      />

      {/* Section header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center px-6 pt-16 sm:pt-24 pb-8"
      >
        <div className="ch w-16 hairline mb-8" />
        <h2 className="ch text-script text-4xl sm:text-5xl silver-shimmer mb-3">
          The Celebrations
        </h2>
        <p
          className="ch text-heading text-[9px] tracking-[0.3em] uppercase"
          style={{ color: "var(--charcoal-light)" }}
        >
          Join us for the festivities
        </p>
        <div className="ch w-16 hairline mt-8" />
      </div>

      {/* Event cards */}
      <div className="max-w-[520px] mx-auto">
        {events.map((event) => (
          <CelebrationCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
