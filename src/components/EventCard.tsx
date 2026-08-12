"use client";

import ScrollReveal from "./ScrollReveal";

interface EventCardProps {
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
  icon: string;
  index: number;
}

function EventIcon({ type, className }: { type: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    haldi: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle
          cx="24"
          cy="20"
          r="10"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />
        <path
          d="M18 30 L24 42 L30 30"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.15"
        />
        <circle cx="24" cy="20" r="4" fill="var(--gold)" opacity="0.3" />
        <path
          d="M24 8 L24 5 M32 14 L35 12 M16 14 L13 12"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
    mehendi: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M24 4 C24 4 12 16 12 28 C12 36 17 44 24 44 C31 44 36 36 36 28 C36 16 24 4 24 4Z"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.08"
        />
        <path
          d="M24 14 Q28 20 24 28 Q20 20 24 14Z"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="24" cy="34" r="3" stroke="var(--gold)" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    sangeet: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M18 40 L18 14 L38 8 L38 34"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="14"
          cy="40"
          r="5"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.15"
        />
        <circle
          cx="34"
          cy="34"
          r="5"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.15"
        />
        <path
          d="M18 20 L38 14"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    ),
    wedding: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M24 8 L14 20 L14 36 L34 36 L34 20 Z"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.08"
        />
        <path
          d="M18 36 L18 28 Q24 22 30 28 L30 36"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />
        <path
          d="M20 12 L24 4 L28 12"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="10"
          y1="36"
          x2="38"
          y2="36"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />
        <path
          d="M22 16 L24 14 L26 16"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    reception: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M24 4 L28 16 L40 16 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 L20 16Z"
          stroke="var(--gold)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.12"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="20" r="4" stroke="var(--gold)" strokeWidth="1" opacity="0.4" />
        <path
          d="M16 42 L32 42"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M20 44 L28 44"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    ),
  };

  return <>{iconMap[type] || iconMap.wedding}</>;
}

export default function EventCard({
  name,
  tagline,
  date,
  time,
  venue,
  address,
  mapLink,
  icon,
  index,
}: EventCardProps) {
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <ScrollReveal direction={direction} delay={index * 0.1} className="w-full">
      <div
        className="relative p-6 sm:p-8 rounded-sm max-w-md mx-auto"
        style={{
          background: "rgba(253, 248, 240, 0.8)",
          border: "1px solid var(--gold-soft)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="absolute -top-px left-0 right-0 h-px gold-shimmer-border" />

        <div className="flex flex-col items-center text-center">
          <EventIcon type={icon} className="w-12 h-12 mb-4" />

          <h3
            className="font-display text-2xl sm:text-3xl font-semibold mb-1"
            style={{ color: "var(--burgundy)" }}
          >
            {name}
          </h3>

          <p
            className="font-body text-sm italic mb-4"
            style={{ color: "var(--rose)" }}
          >
            {tagline}
          </p>

          <div
            className="w-12 h-px mb-4"
            style={{ background: "var(--gold-soft)" }}
          />

          <div className="space-y-2">
            <p
              className="font-heading text-sm tracking-[0.15em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              {date}
            </p>
            <p
              className="font-body text-base"
              style={{ color: "var(--brown)" }}
            >
              {time}
            </p>
            <p
              className="font-display text-lg font-semibold mt-2"
              style={{ color: "var(--brown)" }}
            >
              {venue}
            </p>
            <p
              className="font-body text-sm"
              style={{ color: "var(--brown-muted)" }}
            >
              {address}
            </p>
          </div>

          {mapLink && mapLink !== "#" && (
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-sm text-sm font-heading tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                color: "var(--burgundy)",
                border: "1px solid var(--gold-soft)",
                background: "rgba(197, 150, 58, 0.05)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Get Directions
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
