"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/data/events";
import EventCard from "./EventCard";
import ScrollReveal from "./ScrollReveal";
import { LotusDivider } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

export default function EventsTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 55%",
          end: "bottom 85%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--wine-deep) 0%, var(--midnight) 50%, var(--wine-deep) 100%)",
      }}
    >
      <ScrollReveal className="text-center mb-14 sm:mb-20">
        <p
          className="font-decorative text-sm sm:text-base tracking-[0.4em] uppercase mb-4 text-glow-gold"
          style={{ color: "var(--gold-bright)" }}
        >
          Wedding Celebrations
        </p>
        <h2 className="font-decorative text-4xl sm:text-5xl md:text-6xl font-bold gold-text">
          The Festivities
        </h2>
        <LotusDivider className="mt-6" />
      </ScrollReveal>

      <div className="relative max-w-lg mx-auto">
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--gold), var(--gold-light), var(--gold), transparent)",
            boxShadow: "0 0 12px rgba(212,175,55,0.5)",
          }}
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              <div className="hidden sm:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    background: "var(--gold-light)",
                    boxShadow:
                      "0 0 0 4px var(--wine-deep), 0 0 14px rgba(245,216,150,0.8)",
                  }}
                />
              </div>
              <EventCard {...event} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
