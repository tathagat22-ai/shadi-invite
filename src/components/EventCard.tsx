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
  image?: string;
  index: number;
}

function EventIcon({ type, className }: { type: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    haldi: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="22" r="9" stroke="var(--gold-light)" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="3.5" fill="var(--saffron)" opacity="0.6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={24 + 12 * Math.cos(a)}
              y1={22 + 12 * Math.sin(a)}
              x2={24 + 16 * Math.cos(a)}
              y2={22 + 16 * Math.sin(a)}
              stroke="var(--gold-light)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    ),
    mehendi: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M24 6 C24 6 13 17 13 28 C13 35 18 42 24 42 C30 42 35 35 35 28 C35 17 24 6 24 6Z"
          stroke="var(--gold-light)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.1"
        />
        <path d="M24 16 Q28 22 24 30 Q20 22 24 16Z" stroke="var(--gold-light)" strokeWidth="1" opacity="0.6" />
        <circle cx="24" cy="34" r="2.5" stroke="var(--gold-light)" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    sangeet: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path d="M18 40 L18 14 L38 8 L38 34" stroke="var(--gold-light)" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="40" r="5" stroke="var(--gold-light)" strokeWidth="1.5" fill="var(--gold)" fillOpacity="0.15" />
        <circle cx="34" cy="34" r="5" stroke="var(--gold-light)" strokeWidth="1.5" fill="var(--gold)" fillOpacity="0.15" />
      </svg>
    ),
    wedding: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="18" cy="26" r="8" stroke="var(--gold-light)" strokeWidth="1.5" />
        <circle cx="30" cy="26" r="8" stroke="var(--gold-light)" strokeWidth="1.5" />
        <path d="M14 14 L18 10 L22 14" stroke="var(--gold-light)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <path d="M26 14 L30 10 L34 14" stroke="var(--gold-light)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    reception: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
          d="M24 4 L28 16 L40 16 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 L20 16Z"
          stroke="var(--gold-light)"
          strokeWidth="1.5"
          fill="var(--gold)"
          fillOpacity="0.15"
          strokeLinejoin="round"
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
  image,
  index,
}: EventCardProps) {
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <ScrollReveal direction={direction} delay={index * 0.05} className="w-full">
      <div className="group relative rounded-t-[120px] rounded-b-lg overflow-hidden max-w-sm mx-auto glass-panel transition-transform duration-500 hover:-translate-y-1">
        {/* themed image header (if provided) */}
        {image && (
          <div className="relative h-40 overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center 42%",
                filter: "saturate(1.1)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(42,8,16,0.35), rgba(42,8,16,0.95))",
              }}
            />
          </div>
        )}

        <div className={`relative px-6 pb-8 text-center ${image ? "-mt-10" : "pt-8"}`}>
          <div
            className="mx-auto mb-3 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(42,8,16,0.9), rgba(42,8,16,0.6))",
              border: "1px solid var(--gold)",
              boxShadow: "0 0 20px rgba(212,175,55,0.3)",
            }}
          >
            <EventIcon type={icon} className="w-9 h-9" />
          </div>

          <h3 className="font-decorative text-2xl sm:text-3xl font-bold mb-1 gold-text">
            {name}
          </h3>
          <p className="font-body text-sm italic mb-4" style={{ color: "var(--rose)" }}>
            {tagline}
          </p>

          <div className="w-16 h-px mx-auto mb-4 gold-hairline" />

          <div className="space-y-1.5">
            <p
              className="font-heading text-sm tracking-[0.15em] uppercase"
              style={{ color: "var(--gold-bright)" }}
            >
              {date}
            </p>
            <p className="font-body text-base" style={{ color: "var(--cream-muted)" }}>
              {time}
            </p>
            <p className="font-display text-lg font-semibold mt-2" style={{ color: "var(--cream)" }}>
              {venue}
            </p>
            <p className="font-body text-sm" style={{ color: "var(--cream-muted)" }}>
              {address}
            </p>
          </div>

          {mapLink && mapLink !== "#" && (
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full text-xs font-heading tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                color: "var(--gold-light)",
                border: "1px solid var(--gold)",
                background: "rgba(212,175,55,0.08)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
