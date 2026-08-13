"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GOLD = "#D4C4A0";
const GOLD_MUTED = "#BCA88E";

export default function Hero({ opened = true }: { opened?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!opened || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      const groups = gsap.utils.toArray<HTMLElement>(".reveal-group");
      groups.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          delay: 0.4 + i * 0.35,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [opened]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ aspectRatio: "9 / 16", maxHeight: "100vh" }}
    >
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ display: "block" }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center pointer-events-none"
        style={{ color: GOLD }}
      >
        {/* AT Monogram */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "13%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel-decorative)",
              fontSize: "clamp(38px, 10.5vw, 58px)",
              lineHeight: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            <span
              style={{
                position: "relative",
                left: "0.05em",
                fontSize: "0.8em",
              }}
            >
              A
            </span>
            <span style={{ position: "relative", left: "-0.05em" }}>T</span>
          </div>
        </div>

        {/* Heart ornament */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "19.5%" }}
        >
          <svg
            width="120"
            height="24"
            viewBox="0 0 120 24"
            fill="none"
            style={{ display: "inline-block" }}
          >
            <path
              d="M10 12 C20 12, 30 4, 45 8 Q52 10, 55 14 Q58 18, 60 12"
              stroke={GOLD_MUTED}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M110 12 C100 12, 90 4, 75 8 Q68 10, 65 14 Q62 18, 60 12"
              stroke={GOLD_MUTED}
              strokeWidth="0.8"
              fill="none"
            />
            <text
              x="60"
              y="14"
              textAnchor="middle"
              fill={GOLD}
              fontSize="10"
              fontFamily="serif"
            >
              ♡
            </text>
          </svg>
        </div>

        {/* Names */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "23%", padding: "0 4%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: "clamp(34px, 10.5vw, 54px)",
              lineHeight: 1.15,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            Akansha & Tathagat
          </div>
        </div>

        {/* Request text */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "34%", padding: "0 8%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(7.5px, 2.4vw, 11px)",
              letterSpacing: "0.18em",
              lineHeight: 1.9,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
              color: GOLD_MUTED,
            }}
          >
            WE REQUEST THE PLEASURE OF YOUR COMPANY
            <br />
            TO CELEBRATE OUR WEDDING ON
          </div>
        </div>

        {/* Date block */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "41%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {/* Left line */}
            <span
              style={{
                width: "clamp(28px, 7.5vw, 48px)",
                height: "1px",
                background: GOLD_MUTED,
                display: "inline-block",
              }}
            />
            {/* NOV */}
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(10px, 3vw, 14px)",
                letterSpacing: "0.15em",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                padding: "0 clamp(6px, 2vw, 12px)",
              }}
            >
              NOV
            </span>
            {/* 22 ND */}
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(42px, 13vw, 68px)",
                fontWeight: 400,
                lineHeight: 1,
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                position: "relative",
              }}
            >
              22
              <sup
                style={{
                  fontSize: "0.28em",
                  position: "absolute",
                  top: "0.2em",
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-cinzel)",
                }}
              >
                ND
              </sup>
            </span>
            {/* 2026 */}
            <span
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(10px, 3vw, 14px)",
                letterSpacing: "0.15em",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                padding: "0 clamp(6px, 2vw, 12px)",
              }}
            >
              2026
            </span>
            {/* Right line */}
            <span
              style={{
                width: "clamp(28px, 7.5vw, 48px)",
                height: "1px",
                background: GOLD_MUTED,
                display: "inline-block",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(9px, 2.8vw, 13px)",
              letterSpacing: "0.3em",
              marginTop: "clamp(2px, 0.5vw, 4px)",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            SUNDAY
          </div>
        </div>

        {/* Venue */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "53%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(7.5px, 2.4vw, 11px)",
              letterSpacing: "0.2em",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              color: GOLD_MUTED,
            }}
          >
            TO BE HELD AT
          </div>
          <div
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: "clamp(24px, 7.5vw, 42px)",
              marginTop: "clamp(4px, 1.2vw, 10px)",
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            Amanora The Fern Pune
          </div>
        </div>

        {/* Heart divider + Time */}
        <div
          className="reveal-group absolute left-0 right-0 text-center"
          style={{ top: "62%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "clamp(6px, 1.5vw, 12px)",
            }}
          >
            <span
              style={{
                width: "clamp(30px, 8vw, 50px)",
                height: "1px",
                background: GOLD_MUTED,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "clamp(10px, 2.5vw, 14px)" }}>♡</span>
            <span
              style={{
                width: "clamp(30px, 8vw, 50px)",
                height: "1px",
                background: GOLD_MUTED,
                display: "inline-block",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(8px, 2.8vw, 13px)",
              letterSpacing: "0.15em",
              fontStyle: "italic",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            AT 7:30 PM IN THE EVENING
          </div>
        </div>
      </div>
    </section>
  );
}
