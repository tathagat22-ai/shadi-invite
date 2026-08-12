"use client";

import ScrollReveal from "./ScrollReveal";
import { LotusDivider, Diya } from "./Decorations";
import { weddingDetails } from "@/data/events";

export default function Welcome() {
  return (
    <section
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--wine-deep) 0%, var(--wine) 50%, var(--wine-deep) 100%)",
      }}
    >
      {/* soft gold glow orbs */}
      <div
        className="absolute top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,134,46,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <ScrollReveal>
          <p
            className="font-decorative text-sm sm:text-base tracking-[0.4em] uppercase mb-4 text-glow-gold"
            style={{ color: "var(--gold-bright)" }}
          >
            ॐ Shubh Vivah
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 gold-text">
            With the Blessings of the Almighty
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <LotusDivider className="my-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            className="font-body text-lg sm:text-xl leading-relaxed mb-10"
            style={{ color: "var(--cream-muted)" }}
          >
            Together with their families, request the honour of your gracious
            presence at the wedding celebration of their beloved children
          </p>
        </ScrollReveal>

        {/* Ornate arched couple panel */}
        <ScrollReveal delay={0.35}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 my-10">
            {[
              {
                name: weddingDetails.bride,
                rel: "Daughter of",
                parents: weddingDetails.brideParents,
              },
              {
                name: weddingDetails.groom,
                rel: "Son of",
                parents: weddingDetails.groomParents,
              },
            ].map((person) => (
              <div
                key={person.name}
                className="relative px-6 py-8 rounded-t-[100px] glass-panel"
              >
                <p className="font-script text-5xl sm:text-6xl mb-3 gold-shimmer">
                  {person.name}
                </p>
                <p
                  className="font-heading text-[11px] tracking-[0.25em] uppercase"
                  style={{ color: "var(--gold-bright)" }}
                >
                  {person.rel}
                </p>
                <p
                  className="font-body text-base mt-2"
                  style={{ color: "var(--cream)" }}
                >
                  {person.parents.father} &amp; {person.parents.mother}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-8 my-8">
            <Diya />
            <Diya />
            <Diya />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p
            className="font-body text-lg italic text-glow-gold"
            style={{ color: "var(--gold-light)" }}
          >
            &ldquo;Dharmecha Arthecha Kamecha Naaticharami&rdquo;
          </p>
          <p
            className="font-body text-sm mt-2"
            style={{ color: "var(--cream-muted)" }}
          >
            In righteousness, in prosperity, and in love — I shall never deviate
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
