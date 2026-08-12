"use client";

import ScrollReveal from "./ScrollReveal";
import { Diya, MarigoldStrand } from "./Decorations";

export default function Footer() {
  return (
    <footer
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--wine) 0%, var(--wine-deep) 100%)",
      }}
    >
      <MarigoldStrand count={10} className="absolute top-0 left-[10%]" />
      <MarigoldStrand count={10} className="absolute top-0 right-[10%]" />

      <div className="relative z-10 max-w-md mx-auto pt-8">
        <ScrollReveal delay={0.1}>
          <p
            className="font-heading text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--gold-bright)" }}
          >
            We look forward to celebrating with you
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-script text-5xl sm:text-6xl gold-shimmer text-glow-gold mb-6">
            Akanksha &amp; Tathagat
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-6 my-8">
            <Diya />
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="var(--rose)" opacity="0.7">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <Diya />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p
            className="font-body text-sm"
            style={{ color: "var(--cream-muted)", opacity: 0.7 }}
          >
            Made with love · Akanksha &amp; Tathagat 2026
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
