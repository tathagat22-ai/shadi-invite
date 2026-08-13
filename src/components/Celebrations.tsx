"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#E6D6AE";
const GOLD_MUTED = "#C9B891";

// Per-event tuning for the composited couple figurine (standing vs sitting differ).
const COUPLE: Record<string, { height: string; maxW: string; bottom: string }> = {
  carnival: { height: "62%", maxW: "80%", bottom: "17%" },
  sangeet: { height: "66%", maxW: "88%", bottom: "15%" },
  wedding: { height: "52%", maxW: "92%", bottom: "17%" },
  reception: { height: "60%", maxW: "88%", bottom: "16%" },
};

function CelebrationCard({ event }: { event: (typeof events)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const c = COUPLE[event.id] ?? { height: "60%", maxW: "88%", bottom: "16%" };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(cardRef);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 78%",
          // Replay the reveal every time the card enters view (down or up),
          // and reset it when it leaves so it always animates fresh.
          toggleActions: "restart none restart reset",
        },
      });
      tl.from(q(".card-bg"), { scale: 1.12, duration: 1.6, ease: "power2.out" }, 0)
        .from(
          q(".card-couple"),
          { yPercent: 14, opacity: 0, duration: 1.1, ease: "power3.out" },
          0.1
        )
        .from(
          q(".card-top"),
          { y: 18, opacity: 0, duration: 0.7, stagger: 0.14, ease: "power2.out" },
          0.4
        )
        .from(
          q(".card-bottom"),
          { y: 16, opacity: 0, duration: 0.7, stagger: 0.14, ease: "power2.out" },
          0.75
        );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "2 / 3",
        maxHeight: "100vh",
        borderTop: "1px solid rgba(230,214,174,0.14)",
      }}
    >
      {/* Background scene */}
      <img
        src={event.bg}
        alt=""
        className="card-bg absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Top scrim — for the name */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "42%",
          background:
            "linear-gradient(180deg, rgba(9,13,33,0.78) 0%, rgba(9,13,33,0.28) 55%, transparent 100%)",
        }}
      />

      {/* Couple figurine */}
      <img
        src={event.couple}
        alt=""
        className="card-couple absolute left-1/2 -translate-x-1/2 object-contain"
        style={{
          bottom: c.bottom,
          height: c.height,
          maxWidth: c.maxW,
          filter: "drop-shadow(0 12px 26px rgba(0,0,0,0.45))",
        }}
      />

      {/* Bottom scrim — sits over the couple's lower half for detail legibility */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "40%",
          background:
            "linear-gradient(0deg, rgba(9,13,33,0.9) 0%, rgba(9,13,33,0.5) 45%, transparent 100%)",
        }}
      />

      {/* Name block (top) */}
      <div
        className="absolute inset-x-0 top-0 px-6 text-center"
        style={{ paddingTop: "8.5%", color: GOLD }}
      >
        <p
          className="card-top"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(8px, 2.6vw, 11px)",
            letterSpacing: "0.32em",
            color: GOLD_MUTED,
            textShadow: "0 1px 6px rgba(0,0,0,0.7)",
          }}
        >
          {event.tagline}
        </p>
        <h3
          className="card-top"
          style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "clamp(46px, 15vw, 78px)",
            lineHeight: 1.05,
            marginTop: "0.1em",
            textShadow: "0 3px 16px rgba(0,0,0,0.75)",
          }}
        >
          {event.name}
        </h3>
        {event.subtitle && (
          <p
            className="card-top"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(8px, 2.5vw, 11px)",
              letterSpacing: "0.28em",
              marginTop: "0.2em",
              color: GOLD_MUTED,
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            {event.subtitle.toUpperCase()}
          </p>
        )}
      </div>

      {/* Details block (bottom) */}
      <div
        className="absolute inset-x-0 bottom-0 px-6 text-center"
        style={{ paddingBottom: "7%", color: GOLD }}
      >
        <div
          className="card-bottom"
          style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "clamp(26px, 8vw, 40px)",
            lineHeight: 1.1,
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}
        >
          {event.venue}
        </div>
        <div
          className="card-bottom"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(8px, 2.4vw, 11px)",
            letterSpacing: "0.24em",
            marginTop: "0.5em",
            color: GOLD_MUTED,
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
        >
          {event.address.toUpperCase()}
        </div>

        <div
          className="card-bottom flex items-center justify-center gap-3"
          style={{ marginTop: "0.9em" }}
        >
          <span
            style={{
              width: "clamp(18px, 6vw, 34px)",
              height: "1px",
              background: GOLD_MUTED,
              display: "inline-block",
            }}
          />
          <span style={{ color: GOLD, fontSize: "clamp(9px, 2.4vw, 12px)" }}>♡</span>
          <span
            style={{
              width: "clamp(18px, 6vw, 34px)",
              height: "1px",
              background: GOLD_MUTED,
              display: "inline-block",
            }}
          />
        </div>

        <div
          className="card-bottom"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(10px, 3vw, 14px)",
            letterSpacing: "0.16em",
            marginTop: "0.7em",
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
        >
          {event.date}
        </div>
        <div
          className="card-bottom"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(8px, 2.5vw, 11px)",
            letterSpacing: "0.18em",
            marginTop: "0.35em",
            fontStyle: "italic",
            color: GOLD_MUTED,
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
        >
          {event.time}
        </div>
      </div>
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
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #0a0e26 0%, #0c1130 40%, #0a0e26 100%)",
      }}
    >
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center px-6 pt-20 pb-12"
        style={{ color: GOLD }}
      >
        <div
          className="ch"
          style={{
            width: "56px",
            height: "1px",
            background: GOLD_MUTED,
            opacity: 0.6,
            marginBottom: "1.6rem",
          }}
        />
        <h2
          className="ch"
          style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "clamp(40px, 12vw, 62px)",
            lineHeight: 1.05,
            textShadow: "0 2px 14px rgba(0,0,0,0.5)",
          }}
        >
          The Celebrations
        </h2>
        <p
          className="ch"
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(8px, 2.6vw, 11px)",
            letterSpacing: "0.3em",
            marginTop: "0.8rem",
            color: GOLD_MUTED,
          }}
        >
          JOIN US FOR THE FESTIVITIES
        </p>
        <div
          className="ch"
          style={{
            width: "56px",
            height: "1px",
            background: GOLD_MUTED,
            opacity: 0.6,
            marginTop: "1.6rem",
          }}
        />
      </div>

      {/* Event cards */}
      <div>
        {events.map((event) => (
          <CelebrationCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
