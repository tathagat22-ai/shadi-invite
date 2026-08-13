"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const GOLD = "#D4C4A0";
const GOLD_MUTED = "#BCA88E";

/** Render a script string with word-initial capitals enlarged so they read
 *  as proper flourished capitals (Great Vibes renders caps quite small). */
function Script({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((ch, i) =>
        /[A-Z]/.test(ch) ? (
          <span key={i} style={{ fontSize: "1.12em" }}>
            {ch}
          </span>
        ) : (
          <span key={i}>{ch}</span>
        )
      )}
    </>
  );
}

/** Delicate symmetric filigree flourish with a centred heart. */
function Flourish() {
  return (
    <svg
      width="150"
      height="22"
      viewBox="0 0 150 22"
      fill="none"
      style={{ display: "inline-block", overflow: "visible" }}
    >
      {/* left flourish */}
      <path
        d="M8 11 C 26 11, 34 5, 48 8 C 56 9.5, 60 13, 65 11"
        stroke={GOLD_MUTED}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="11" r="1" fill={GOLD_MUTED} />
      {/* right flourish (mirrored) */}
      <path
        d="M142 11 C 124 11, 116 5, 102 8 C 94 9.5, 90 13, 85 11"
        stroke={GOLD_MUTED}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="142" cy="11" r="1" fill={GOLD_MUTED} />
      {/* centred heart */}
      <path
        d="M75 14.5 C 72 11.5, 69.5 9.5, 69.5 7.4 C 69.5 5.9, 70.7 4.8, 72.1 4.8 C 73.2 4.8, 74.2 5.5, 75 6.6 C 75.8 5.5, 76.8 4.8, 77.9 4.8 C 79.3 4.8, 80.5 5.9, 80.5 7.4 C 80.5 9.5, 78 11.5, 75 14.5 Z"
        fill={GOLD}
      />
    </svg>
  );
}

export default function Hero({ opened = true }: { opened?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Hide every line BEFORE the first paint so the full text never flashes
  // in before the reveal begins.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-line", { opacity: 0, y: 16 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!opened || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Each ".reveal-line" fades up one after another, top to bottom.
      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");
      lines.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3 + i * 0.34,
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
        src="/images/hero-palace.jpg"
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
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "11.5%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel-decorative)",
              fontSize: "clamp(38px, 10.5vw, 58px)",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            <span style={{ position: "relative", fontSize: "0.82em" }}>A</span>
            <span style={{ position: "relative" }}>T</span>
          </div>
        </div>

        {/* Heart flourish */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "16.3%" }}
        >
          <Flourish />
        </div>

        {/* Names + parentage */}
        <div
          className="reveal-line absolute left-0 right-0"
          style={{ top: "19.5%", padding: "0 4%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "clamp(6px, 2vw, 14px)",
            }}
          >
            {/* Akansha */}
            <div style={{ flex: "0 1 auto", maxWidth: "42%", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-pinyon-script)",
                  fontSize: "clamp(28px, 8.2vw, 46px)",
                  lineHeight: 1.05,
                  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                }}
              >
                <Script text="Akansha" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "clamp(8px, 2.3vw, 10.5px)",
                  letterSpacing: "0.07em",
                  lineHeight: 1.55,
                  marginTop: "0.7em",
                  color: GOLD_MUTED,
                  textShadow: "0 1px 5px rgba(0,0,0,0.6)",
                }}
              >
                DAUGHTER OF
                <br />
                MRS. APARNA SINGH
                <br />
                &amp; MR. S.K. SINGH
              </div>
            </div>

            {/* Ampersand */}
            <div
              style={{
                flex: "0 0 auto",
                fontFamily: "var(--font-pinyon-script)",
                fontSize: "clamp(22px, 6vw, 34px)",
                color: GOLD,
                paddingTop: "0.15em",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              &amp;
            </div>

            {/* Tathagat */}
            <div style={{ flex: "0 1 auto", maxWidth: "42%", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-pinyon-script)",
                  fontSize: "clamp(28px, 8.2vw, 46px)",
                  lineHeight: 1.05,
                  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                }}
              >
                <Script text="Tathagat" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "clamp(8px, 2.3vw, 10.5px)",
                  letterSpacing: "0.07em",
                  lineHeight: 1.55,
                  marginTop: "0.7em",
                  color: GOLD_MUTED,
                  textShadow: "0 1px 5px rgba(0,0,0,0.6)",
                }}
              >
                SON OF
                <br />
                DR. KUSUM SHARMA
                <br />
                &amp; MR. SANJAY
              </div>
            </div>
          </div>
        </div>

        {/* Request text — line 1 */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "33%", padding: "0 8%" }}
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
          </div>
        </div>

        {/* Request text — line 2 */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "36%", padding: "0 8%" }}
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
            TO CELEBRATE OUR WEDDING ON
          </div>
        </div>

        {/* Date row — 22 exactly centred, NOV / 2026 flanking, SUNDAY under 22 */}
        <div
          className="reveal-line absolute left-0 right-0"
          style={{ top: "40.5%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left group (flex:1, pushed toward centre) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <span
                style={{
                  width: "clamp(28px, 7.5vw, 48px)",
                  height: "1px",
                  background: GOLD_MUTED,
                  display: "inline-block",
                }}
              />
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
              <span style={{ width: "clamp(10px, 3vw, 18px)" }} />
            </div>

            {/* Centre — the big 22 (ND absolute so 22 stays perfectly centred) */}
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(42px, 13vw, 68px)",
                fontWeight: 400,
                lineHeight: 1,
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                position: "relative",
                display: "inline-block",
              }}
            >
              22
              <span
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "0.26em",
                  letterSpacing: "0.03em",
                  position: "absolute",
                  top: "10%",
                  left: "100%",
                  marginLeft: "-0.35em",
                }}
              >
                ND
              </span>
            </span>

            {/* Right group (flex:1, pushed toward centre) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ width: "clamp(10px, 3vw, 18px)" }} />
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
              <span
                style={{
                  width: "clamp(28px, 7.5vw, 48px)",
                  height: "1px",
                  background: GOLD_MUTED,
                  display: "inline-block",
                }}
              />
            </div>
          </div>

          {/* SUNDAY — centred in the card, therefore directly under the 22 */}
          <div
            className="reveal-line"
            style={{
              textAlign: "center",
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(9px, 2.8vw, 13px)",
              letterSpacing: "0.3em",
              marginTop: "clamp(2px, 0.6vw, 5px)",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            SUNDAY
          </div>
        </div>

        {/* To be held at */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "51%" }}
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
        </div>

        {/* Venue name */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "53.5%", padding: "0 6%" }}
        >
          <div
            style={{
              fontFamily: "var(--font-pinyon-script)",
              fontSize: "clamp(22px, 7vw, 40px)",
              whiteSpace: "nowrap",
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            <Script text="Amanora The Fern Pune" />
          </div>
        </div>

        {/* Heart divider */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "58.5%" }}
        >
          <Flourish />
        </div>

        {/* Time */}
        <div
          className="reveal-line absolute left-0 right-0 text-center"
          style={{ top: "61.5%" }}
        >
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
