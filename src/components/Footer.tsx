"use client";

import { weddingDetails as w } from "@/data/events";

const GOLD = "#E6D6AE";
const GOLD_MUTED = "#C9B891";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-center px-6 py-20"
      style={{
        background:
          "linear-gradient(180deg, #0a0e26 0%, #0c1130 55%, #0a0e26 100%)",
        color: GOLD,
      }}
    >
      <div
        style={{
          width: "56px",
          height: "1px",
          background: GOLD_MUTED,
          opacity: 0.6,
          marginBottom: "2rem",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "clamp(9px, 2.6vw, 11px)",
          letterSpacing: "0.35em",
          color: GOLD_MUTED,
          marginBottom: "1rem",
        }}
      >
        WITH LOVE
      </p>

      <p
        style={{
          fontFamily: "var(--font-pinyon-script)",
          fontSize: "clamp(30px, 8.6vw, 52px)",
          lineHeight: 1.1,
          whiteSpace: "nowrap",
          textShadow: "0 2px 14px rgba(0,0,0,0.5)",
        }}
      >
        {w.bride} &amp; {w.groom}
      </p>

      <div
        style={{
          width: "56px",
          height: "1px",
          background: GOLD_MUTED,
          opacity: 0.6,
          marginTop: "2rem",
        }}
      />
    </footer>
  );
}
