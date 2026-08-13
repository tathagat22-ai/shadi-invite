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
      style={{ borderBottom: "1px solid rgba(212,175,55,0.15)" }}
    >
      {/* Event image (if available) */}
      {event.image && (
        <div
          className="cv w-full max-w-[320px] aspect-[4/3] rounded-sm overflow-hidden mb-8"
          style={{
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
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

      {/* Event name */}
      <p
        className="cv font-heading text-[10px] tracking-[0.35em] uppercase mb-2"
        style={{ color: "var(--gold)" }}
      >
        {event.tagline}
      </p>
      <h3 className="cv font-script text-4xl sm:text-5xl gold-shimmer mb-1">
        {event.name}
      </h3>
      {event.subtitle && (
        <p
          className="cv font-heading text-[10px] tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--cream-muted)" }}
        >
          {event.subtitle}
        </p>
      )}

      {/* Venue illustration */}
      {!event.image && (
        <VenueIllustration type={event.id} className="cv w-full max-w-[280px] h-auto my-4" />
      )}

      {/* Venue name */}
      <p
        className="cv font-script text-2xl sm:text-3xl mt-4 mb-1"
        style={{ color: "var(--cream)" }}
      >
        {event.venue}
      </p>
      <p
        className="cv font-body text-sm mb-4"
        style={{ color: "var(--cream-muted)" }}
      >
        {event.address}
      </p>

      {/* Date & time */}
      <div className="cv flex items-center gap-3 mb-1">
        <span
          className="font-heading text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "var(--gold-bright)" }}
        >
          {event.date}
        </span>
      </div>
      <p
        className="cv font-body text-sm italic"
        style={{ color: "var(--cream-muted)" }}
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
    <section style={{ background: "var(--wine-deep)" }}>
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center px-6 pt-16 sm:pt-24 pb-8"
      >
        <div className="ch w-16 h-px mb-8 gold-hairline" />
        <h2 className="ch font-script text-4xl sm:text-5xl gold-shimmer mb-3">
          The Celebrations
        </h2>
        <p
          className="ch font-heading text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--cream-muted)" }}
        >
          Join us for the festivities
        </p>
        <div className="ch w-16 h-px mt-8 gold-hairline" />
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
