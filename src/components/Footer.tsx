"use client";

import ScrollReveal from "./ScrollReveal";
import MandalaPattern from "./MandalaPattern";

export default function Footer() {
  return (
    <footer
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <MandalaPattern size={400} color="var(--gold)" />
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <ScrollReveal>
          <div
            className="w-px h-16 mx-auto mb-8"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--gold-soft))",
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="font-heading text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            We look forward to celebrating with you
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-script text-4xl sm:text-5xl gold-shimmer mb-6">
            Akanksha &amp; Tathagat
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--gold-soft))",
              }}
            />
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="var(--rose)"
              opacity="0.6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div
              className="h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, var(--gold-soft), transparent)",
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p
            className="font-body text-sm"
            style={{ color: "var(--brown-muted)", opacity: 0.6 }}
          >
            Made with love
          </p>
        </ScrollReveal>
      </div>

      <div className="h-16" />
    </footer>
  );
}
