"use client";

import { weddingDetails as w } from "@/data/events";

const GOLD = "#E6D6AE";
const GOLD_MUTED = "#C9B891";

function Diamond() {
  return (
    <div className="flex items-center gap-3">
      <span
        style={{
          width: "clamp(24px, 7vw, 40px)",
          height: "1px",
          background: GOLD_MUTED,
          display: "inline-block",
        }}
      />
      <span style={{ fontSize: "clamp(6px, 1.8vw, 10px)", color: GOLD_MUTED }}>
        ◆
      </span>
      <span
        style={{
          width: "clamp(24px, 7vw, 40px)",
          height: "1px",
          background: GOLD_MUTED,
          display: "inline-block",
        }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "9 / 16", maxHeight: "100vh" }}
    >
      {/* Background image */}
      <img
        src="/images/hero-palace.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,10,28,0.55)" }}
      />

      {/* Golden border frame */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "clamp(8px, 2vw, 16px)",
          border: `1px solid rgba(201,184,145,0.3)`,
        }}
      />

      {/* Top-centre diamond */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "clamp(14px, 3.5vw, 24px)",
          fontSize: "clamp(6px, 1.8vw, 10px)",
          color: GOLD_MUTED,
        }}
      >
        ◆
      </div>

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{ color: GOLD, paddingLeft: "12%", paddingRight: "12%" }}
      >
        <Diamond />

        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(8px, 2.4vw, 11px)",
            letterSpacing: "0.35em",
            color: GOLD_MUTED,
            marginTop: "clamp(1.2rem, 4vw, 2rem)",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          WITH LOVE
        </p>

        <p
          style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "clamp(14px, 4vw, 20px)",
            lineHeight: 1.5,
            marginTop: "clamp(0.8rem, 2.5vw, 1.4rem)",
            textShadow: "0 1px 8px rgba(0,0,0,0.7)",
          }}
        >
          Thank you for being part of our story.
        </p>

        <p
          style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "clamp(32px, 9vw, 54px)",
            lineHeight: 1.1,
            marginTop: "clamp(1rem, 3vw, 1.8rem)",
            textShadow: "0 2px 16px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4)",
          }}
        >
          {w.groom} &amp; {w.bride}
        </p>

        <div
          className="flex items-center gap-3"
          style={{ marginTop: "clamp(0.8rem, 2.5vw, 1.4rem)" }}
        >
          <span
            style={{
              width: "clamp(28px, 8vw, 48px)",
              height: "1px",
              background: GOLD_MUTED,
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: "clamp(28px, 8vw, 48px)",
              height: "1px",
              background: GOLD_MUTED,
              display: "inline-block",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "var(--font-cinzel)",
            fontSize: "clamp(9px, 2.8vw, 13px)",
            letterSpacing: "0.2em",
            marginTop: "clamp(1rem, 3vw, 1.6rem)",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          21ST,  22ND &amp; 27TH NOVEMBER 2026
        </p>
      </div>

    </footer>
  );
}
