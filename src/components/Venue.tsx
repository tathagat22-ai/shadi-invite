"use client";

import ScrollReveal from "./ScrollReveal";
import { LotusDivider } from "./Decorations";

export default function Venue() {
  return (
    <section
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--wine-deep) 0%, var(--wine) 100%)",
      }}
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <p
            className="font-decorative text-sm sm:text-base tracking-[0.4em] uppercase mb-4 text-glow-gold"
            style={{ color: "var(--gold-bright)" }}
          >
            Find Your Way
          </p>
          <h2 className="font-decorative text-4xl sm:text-5xl md:text-6xl font-bold gold-text">
            The Venue
          </h2>
          <LotusDivider className="mt-6 mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="p-8 sm:p-10 rounded-t-[100px] rounded-b-lg glass-panel">
            <h3
              className="font-display text-xl sm:text-2xl font-semibold mb-3"
              style={{ color: "var(--cream)" }}
            >
              Venue Name TBD
            </h3>
            <p
              className="font-body text-base leading-relaxed mb-6"
              style={{ color: "var(--cream-muted)" }}
            >
              Full Address
              <br />
              City, State
              <br />
              PIN Code
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--maroon), var(--gold-deep), var(--gold))",
                color: "var(--gold-pale)",
                boxShadow: "0 6px 24px rgba(212,175,55,0.3)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Open in Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
