"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function EnvelopeReveal({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hasClicked = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    gsap.set(root, { opacity: 1 });

    gsap.to(".tap-hint", {
      scale: 1.05,
      opacity: 0.6,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const handleTap = () => {
    if (hasClicked.current) return;
    hasClicked.current = true;

    const root = rootRef.current;
    if (!root) return;

    const tl = gsap.timeline({ onComplete: () => onDone() });

    tl.to(".tap-hint", { opacity: 0, duration: 0.3 });

    // Golden glow appears at the ribbon
    tl.to(".ribbon-glow", {
      opacity: 0.9,
      scaleX: 3,
      scaleY: 1.3,
      duration: 0.6,
      ease: "power2.out",
    });

    // Seamless slide — starts slow (ribbon stretching) then accelerates
    tl.to(".cover-left", {
      x: "-100%",
      duration: 1.8,
      ease: "power2.in",
    });
    tl.to(
      ".cover-right",
      {
        x: "100%",
        duration: 1.8,
        ease: "power2.in",
      },
      "<"
    );

    // Glow fades during the slide
    tl.to(
      ".ribbon-glow",
      {
        opacity: 0,
        scaleX: 6,
        duration: 1.2,
      },
      "<"
    );

    // Seam fades
    tl.to(".seam-line", { opacity: 0, duration: 0.6 }, "<");

    // Fade out overlay
    tl.to(
      root,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "-=0.5"
    );
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 cursor-pointer"
      style={{ opacity: 1 }}
      onClick={handleTap}
      onTouchEnd={handleTap}
    >
      {/* Left half of cover image */}
      <div className="cover-left absolute top-0 left-0 w-1/2 h-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[200%] h-full"
          style={{
            backgroundImage: "url(/images/cover.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Right half of cover image */}
      <div className="cover-right absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[200%] h-full"
          style={{
            backgroundImage: "url(/images/cover.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Center seam line */}
      <div
        className="seam-line absolute top-0 left-1/2 w-px h-full -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent 10%, rgba(212,175,55,0.4) 30%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.4) 70%, transparent 90%)",
          zIndex: 2,
        }}
      />

      {/* Ribbon glow */}
      <div
        className="ribbon-glow absolute left-1/2 -translate-x-1/2"
        style={{
          top: "42%",
          width: "80px",
          height: "20%",
          opacity: 0,
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.35) 25%, rgba(212,175,55,0.1) 55%, transparent 80%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Tap hint */}
      <div
        className="tap-hint absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
        >
          <path d="M12 2L12 18M12 18L6 12M12 18L18 12" />
        </svg>
        <span
          className="text-heading text-[10px] tracking-[0.3em] uppercase"
          style={{
            color: "rgba(255,255,255,0.8)",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Tap to open
        </span>
      </div>
    </div>
  );
}
