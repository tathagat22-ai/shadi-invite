"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

const GOLD = "#E6D6AE";
const GOLD_MUTED = "#C9B891";

// Per-event tuning for the composited couple figurine (standing vs sitting differ).
const COUPLE: Record<string, { height: string; maxW: string; bottom: string; offsetX?: string }> = {
  carnival: { height: "50%", maxW: "88%", bottom: "17%", offsetX: "5%" },
  sangeet: { height: "60%", maxW: "88%", bottom: "15%" },
  wedding: { height: "49%", maxW: "92%", bottom: "25%" },
  reception: { height: "70%", maxW: "88%", bottom: "16%" },
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
        className="card-couple absolute object-contain"
        style={{
          left: `calc(50% + ${c.offsetX ?? "0%"})`,
          transform: "translateX(-50%)",
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
      {/* Section header — full-screen image card */}
      <div
        ref={headerRef}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "9 / 16", maxHeight: "100vh" }}
      >
        <img
          src="/images/hero-palace.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(6,10,28,0.5)" }}
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
          style={{ color: GOLD, paddingLeft: "12%", paddingRight: "12%" }}
        >
          {/* Top diamond ornament */}
          <div className="ch flex items-center gap-3" style={{ marginBottom: "1.4rem" }}>
            <span style={{ width: "clamp(24px, 7vw, 40px)", height: "1px", background: GOLD_MUTED, display: "inline-block" }} />
            <span style={{ fontSize: "clamp(8px, 2.2vw, 12px)", color: GOLD_MUTED }}>◆</span>
            <span style={{ width: "clamp(24px, 7vw, 40px)", height: "1px", background: GOLD_MUTED, display: "inline-block" }} />
          </div>

          <h2
            className="ch"
            style={{
              fontFamily: "var(--font-pinyon-script)",
              fontSize: "clamp(28px, 8vw, 48px)",
              lineHeight: 1.05,
              textShadow: "0 2px 16px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            The Celebrations
          </h2>
          <p
            className="ch"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(7px, 2.2vw, 10px)",
              letterSpacing: "0.3em",
              marginTop: "0.3rem",
              color: GOLD_MUTED,
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            JOIN US FOR THE CELEBRATIONS
          </p>

          {/* Invitation paragraphs */}
          <p
            className="ch"
            style={{
              fontFamily: "var(--font-pinyon-script)",
              fontSize: "clamp(14px, 3.8vw, 20px)",
              lineHeight: 1.5,
              marginTop: "clamp(1.2rem, 4vw, 2rem)",
              textShadow: "0 1px 10px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.3)",
              maxWidth: "80%",
            }}
          >
            With joyful hearts, we invite you to share in
            <br />
            the colours, music and sacred moments
            <br />
            of our wedding.
          </p>
          <p
            className="ch"
            style={{
              fontFamily: "var(--font-pinyon-script)",
              fontSize: "clamp(14px, 3.8vw, 20px)",
              lineHeight: 1.5,
              marginTop: "clamp(0.6rem, 2vw, 1rem)",
              textShadow: "0 1px 10px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.3)",
              maxWidth: "80%",
            }}
          >
            Come celebrate, dance, laugh and bless us
            <br />
            as our forever begins.
          </p>

          {/* Bottom diamond ornament */}
          <div className="ch flex items-center gap-3" style={{ marginTop: "clamp(1.2rem, 4vw, 2rem)" }}>
            <span style={{ width: "clamp(24px, 7vw, 40px)", height: "1px", background: GOLD_MUTED, display: "inline-block" }} />
            <span style={{ fontSize: "clamp(8px, 2.2vw, 12px)", color: GOLD_MUTED }}>◆</span>
            <span style={{ width: "clamp(24px, 7vw, 40px)", height: "1px", background: GOLD_MUTED, display: "inline-block" }} />
          </div>

          {/* Date and location */}
          <p
            className="ch"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(9px, 2.8vw, 13px)",
              letterSpacing: "0.2em",
              marginTop: "clamp(1rem, 3vw, 1.6rem)",
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            21ST, 22ND &amp; 27TH NOVEMBER 2026
          </p>
          <p
            className="ch"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(8px, 2.4vw, 11px)",
              letterSpacing: "0.35em",
              marginTop: "0.4rem",
              color: GOLD_MUTED,
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            }}
          >
          </p>
        </div>
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
