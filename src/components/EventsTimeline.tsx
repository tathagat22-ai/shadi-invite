"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/data/events";
import EventCard from "./EventCard";
import ScrollReveal from "./ScrollReveal";

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
          start: "top 60%",
          end: "bottom 80%",
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
      style={{ background: "var(--ivory)" }}
    >
      <ScrollReveal className="text-center mb-12 sm:mb-16">
        <p
          className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          Wedding Celebrations
        </p>
        <h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold"
          style={{ color: "var(--burgundy)" }}
        >
          The Festivities
        </h2>
      </ScrollReveal>

      <div className="relative max-w-lg mx-auto">
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--gold-soft), var(--gold), var(--gold-soft), transparent)",
          }}
        />

        <div className="flex flex-col gap-10 sm:gap-14">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              <div className="hidden sm:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "var(--gold)",
                    boxShadow: "0 0 0 4px var(--ivory), 0 0 0 5px var(--gold-soft)",
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
