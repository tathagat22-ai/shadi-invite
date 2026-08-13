"use client";

import { weddingDetails as w } from "@/data/events";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-center px-6 py-16 sm:py-20"
      style={{ background: "var(--blush-light)" }}
    >
      <div className="w-16 hairline mb-8" />

      <p
        className="text-heading text-[10px] tracking-[0.35em] uppercase mb-4"
        style={{ color: "var(--mauve)" }}
      >
        With love
      </p>

      <p className="text-script text-3xl sm:text-4xl silver-shimmer">
        {w.bride} &amp; {w.groom}
      </p>

      <div className="w-16 hairline mt-8 mb-6" />

      <p
        className="text-body text-xs"
        style={{ color: "var(--charcoal-light)", opacity: 0.5 }}
      >
        Made with love
      </p>
    </footer>
  );
}
