"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/*
  Opening animation inspired by the reference video: a folded invitation
  sealed with a ribbon bow. The bow unties and the four triangular flaps
  unfold outward to reveal the invitation (the page) beneath.
*/
export default function EnvelopeReveal({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const seams = q(".env-seams");
    const bow = q(".env-bow");
    const seal = q(".env-seal");
    const hint = q(".env-hint");

    const finish = () => {
      setGone(true);
      onDone();
    };

    // Establish explicit initial state (robust to strict-mode double effect)
    gsap.set(root, { opacity: 1 });
    gsap.set(q(".env-flap"), { rotateX: 0, rotateY: 0 });
    gsap.set([...seams, ...bow, ...seal], { opacity: 0, scale: 0.9 });
    gsap.set(hint, { opacity: 0 });

    const tl = gsap.timeline({ onComplete: finish });

    tl.to([...seams, ...bow, ...seal], {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(hint, { opacity: 0.75, duration: 0.5 }, "-=0.2")
      // hold on the closed envelope
      .to({}, { duration: 1.2 })
      .to(hint, { opacity: 0, duration: 0.3 })
      // untie the bow
      .to(bow, { scale: 1.12, duration: 0.3, ease: "power2.out" })
      .to(
        q(".bow-loop-l"),
        { rotate: -35, x: -26, y: 6, opacity: 0, duration: 0.6, ease: "power2.in", transformOrigin: "100% 50%" },
        ">-0.05"
      )
      .to(
        q(".bow-loop-r"),
        { rotate: 35, x: 26, y: 6, opacity: 0, duration: 0.6, ease: "power2.in", transformOrigin: "0% 50%" },
        "<"
      )
      .to(q(".bow-knot"), { scale: 0, opacity: 0, duration: 0.4, ease: "power2.in" }, "<0.1")
      .to(seal, { scale: 0.4, opacity: 0, duration: 0.5, ease: "power2.in" }, "<")
      .to(seams, { opacity: 0, duration: 0.4 }, "<")
      // unfold the four flaps
      .to(q(".flap-top"), { rotateX: -118, duration: 1, ease: "power3.inOut" }, "-=0.15")
      .to(q(".flap-bottom"), { rotateX: 118, duration: 1, ease: "power3.inOut" }, "<")
      .to(q(".flap-left"), { rotateY: 118, duration: 1, ease: "power3.inOut" }, "<0.08")
      .to(q(".flap-right"), { rotateY: -118, duration: 1, ease: "power3.inOut" }, "<")
      .to(root, { opacity: 0, duration: 0.5, ease: "power2.in" }, "-=0.45");

    return () => {
      tl.kill();
    };
  }, [onDone]);

  if (gone) return null;

  const flapBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{ perspective: "1500px", background: "var(--wine-deep)" }}
    >
      {/* four folded flaps meeting at centre */}
      <div
        className="env-flap flap-top"
        style={{
          ...flapBase,
          clipPath: "polygon(0 0, 100% 0, 50% 50%)",
          transformOrigin: "50% 0%",
          background: "linear-gradient(180deg, #571a28 0%, #2f0b14 100%)",
        }}
      />
      <div
        className="env-flap flap-bottom"
        style={{
          ...flapBase,
          clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
          transformOrigin: "50% 100%",
          background: "linear-gradient(0deg, #571a28 0%, #24070f 100%)",
        }}
      />
      <div
        className="env-flap flap-left"
        style={{
          ...flapBase,
          clipPath: "polygon(0 0, 0 100%, 50% 50%)",
          transformOrigin: "0% 50%",
          background: "linear-gradient(90deg, #491522 0%, #2a0a12 100%)",
        }}
      />
      <div
        className="env-flap flap-right"
        style={{
          ...flapBase,
          clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
          transformOrigin: "100% 50%",
          background: "linear-gradient(270deg, #491522 0%, #2a0a12 100%)",
        }}
      />

      {/* gold seam lines (the folds) + border */}
      <svg
        className="env-seams absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="0" y1="0" x2="50" y2="50" stroke="var(--gold)" strokeWidth="0.25" opacity="0.7" />
        <line x1="100" y1="0" x2="50" y2="50" stroke="var(--gold)" strokeWidth="0.25" opacity="0.7" />
        <line x1="0" y1="100" x2="50" y2="50" stroke="var(--gold)" strokeWidth="0.25" opacity="0.7" />
        <line x1="100" y1="100" x2="50" y2="50" stroke="var(--gold)" strokeWidth="0.25" opacity="0.7" />
        <rect x="1.2" y="1.2" width="97.6" height="97.6" stroke="var(--gold)" strokeWidth="0.35" opacity="0.5" />
      </svg>

      {/* centre seal + ribbon bow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* wax-seal style medallion */}
        <div
          className="env-seal absolute flex items-center justify-center rounded-full"
          style={{
            width: 92,
            height: 92,
            background: "radial-gradient(circle at 35% 30%, #7b2d3f, #4a1420)",
            border: "2px solid var(--gold)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.5), inset 0 2px 6px rgba(245,216,150,0.25)",
          }}
        >
          <span
            className="font-script text-3xl"
            style={{ color: "var(--gold-light)" }}
          >
            A&amp;T
          </span>
        </div>

        {/* ribbon bow */}
        <svg className="env-bow absolute" width="150" height="110" viewBox="0 0 150 110" fill="none">
          <defs>
            <linearGradient id="ribbonGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F5D896" />
              <stop offset="0.5" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#A87B2C" />
            </linearGradient>
          </defs>
          {/* tails */}
          <path d="M70 56 Q60 85 52 104 L64 100 L70 70Z" fill="url(#ribbonGold)" opacity="0.9" />
          <path d="M80 56 Q90 85 98 104 L86 100 L80 70Z" fill="url(#ribbonGold)" opacity="0.9" />
          {/* left loop */}
          <path
            className="bow-loop-l"
            d="M72 55 C40 30 10 40 20 60 C28 76 60 70 72 58Z"
            fill="url(#ribbonGold)"
            stroke="#8a6520"
            strokeWidth="0.5"
          />
          {/* right loop */}
          <path
            className="bow-loop-r"
            d="M78 55 C110 30 140 40 130 60 C122 76 90 70 78 58Z"
            fill="url(#ribbonGold)"
            stroke="#8a6520"
            strokeWidth="0.5"
          />
          {/* knot */}
          <ellipse className="bow-knot" cx="75" cy="56" rx="9" ry="12" fill="url(#ribbonGold)" stroke="#8a6520" strokeWidth="0.6" />
        </svg>
      </div>

      <p
        className="env-hint absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 font-heading text-[11px] tracking-[0.35em] uppercase"
        style={{ color: "var(--gold-light)" }}
      >
        Opening your invitation
      </p>
    </div>
  );
}
