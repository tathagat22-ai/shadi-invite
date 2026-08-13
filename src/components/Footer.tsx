"use client";

import { weddingDetails as w } from "@/data/events";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-center px-6 py-16 sm:py-20"
      style={{ background: "var(--wine-deep)" }}
    >
      <div className="w-16 h-px mb-8 gold-hairline" />

      <p
        className="font-heading text-[10px] tracking-[0.35em] uppercase mb-4"
        style={{ color: "var(--gold-bright)" }}
      >
        With love
      </p>

      <p className="font-script text-3xl sm:text-4xl gold-shimmer">
        {w.bride} &amp; {w.groom}
      </p>

      <div className="w-16 h-px mt-8 mb-6 gold-hairline" />

      <p
        className="font-body text-xs"
        style={{ color: "var(--cream-muted)", opacity: 0.5 }}
      >
        Made with love
      </p>
    </footer>
  );
}
