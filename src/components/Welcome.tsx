"use client";

import ScrollReveal from "./ScrollReveal";
import { OrnamentalDivider, FloralBorder } from "./Ornaments";
import MandalaPattern from "./MandalaPattern";
import { weddingDetails } from "@/data/events";

export default function Welcome() {
  return (
    <section
      className="relative section-padding flex flex-col items-center text-center overflow-hidden"
      style={{ background: "var(--blush)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <MandalaPattern size={600} color="var(--gold)" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <ScrollReveal>
          <p
            className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Shubh Vivah
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: "var(--burgundy)" }}
          >
            With the Blessings of the Almighty
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <OrnamentalDivider className="my-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            className="font-body text-lg sm:text-xl leading-relaxed mb-8"
            style={{ color: "var(--brown-muted)" }}
          >
            Together with their families, request the honour of your gracious
            presence at the wedding celebration of their beloved children
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 my-10">
            <div>
              <p
                className="font-script text-4xl sm:text-5xl mb-3"
                style={{ color: "var(--burgundy)" }}
              >
                {weddingDetails.bride}
              </p>
              <p
                className="font-heading text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--brown-muted)" }}
              >
                Daughter of
              </p>
              <p
                className="font-body text-base mt-1"
                style={{ color: "var(--brown)" }}
              >
                {weddingDetails.brideParents.father} &amp;{" "}
                {weddingDetails.brideParents.mother}
              </p>
            </div>

            <div>
              <p
                className="font-script text-4xl sm:text-5xl mb-3"
                style={{ color: "var(--burgundy)" }}
              >
                {weddingDetails.groom}
              </p>
              <p
                className="font-heading text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--brown-muted)" }}
              >
                Son of
              </p>
              <p
                className="font-body text-base mt-1"
                style={{ color: "var(--brown)" }}
              >
                {weddingDetails.groomParents.father} &amp;{" "}
                {weddingDetails.groomParents.mother}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <FloralBorder className="mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="mt-8">
            <p
              className="font-body text-base italic"
              style={{ color: "var(--rose)" }}
            >
              &ldquo;Dharmech Arthech Kamech Naticharami&rdquo;
            </p>
            <p
              className="font-body text-sm mt-2"
              style={{ color: "var(--brown-muted)" }}
            >
              In righteousness, in prosperity, and in love — I shall never
              deviate
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
