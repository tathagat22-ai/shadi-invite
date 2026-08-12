"use client";

import ScrollReveal from "./ScrollReveal";
import { OrnamentalDivider } from "./Ornaments";
import MandalaPattern from "./MandalaPattern";

export default function Venue() {
  return (
    <section
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{ background: "var(--blush)" }}
    >
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4">
        <MandalaPattern size={500} color="var(--gold)" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <p
            className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Find Your Way
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: "var(--burgundy)" }}
          >
            Venue
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <OrnamentalDivider className="my-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="p-8 sm:p-10 rounded-sm"
            style={{
              border: "1px solid var(--gold-soft)",
              background: "rgba(253, 248, 240, 0.6)",
            }}
          >
            <h3
              className="font-display text-xl sm:text-2xl font-semibold mb-3"
              style={{ color: "var(--brown)" }}
            >
              Venue Name TBD
            </h3>
            <p
              className="font-body text-base leading-relaxed mb-6"
              style={{ color: "var(--brown-muted)" }}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-heading text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--burgundy), var(--gold))",
                color: "var(--ivory)",
                boxShadow: "0 4px 15px rgba(123, 45, 63, 0.2)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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
