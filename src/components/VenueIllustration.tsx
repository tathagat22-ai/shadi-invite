"use client";

/*
  Watercolor-style venue illustrations for each event type.
  These are simple, elegant line-and-wash SVGs in gold/wine tones,
  inspired by the architectural sketches in the digicrave reference.
*/

function Pavilion({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="1" stopColor="#A87B2C" stopOpacity="0.5" />
        </linearGradient>
        <filter id="vwash">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      {/* ground wash */}
      <ellipse cx="150" cy="148" rx="120" ry="10" fill="url(#vg)" opacity="0.15" filter="url(#vwash)" />
      {/* steps */}
      <g stroke="url(#vg)" strokeWidth="0.8" opacity="0.6">
        <path d="M80 145 L220 145" />
        <path d="M92 138 L208 138" />
        <path d="M104 131 L196 131" />
      </g>
      {/* columns */}
      <g stroke="url(#vg)" strokeWidth="1.2">
        <path d="M115 131 L115 70" />
        <path d="M185 131 L185 70" />
      </g>
      {/* capital details */}
      <g stroke="url(#vg)" strokeWidth="0.8" opacity="0.7">
        <path d="M108 70 L122 70" />
        <path d="M178 70 L192 70" />
        <path d="M108 131 L122 131" />
        <path d="M178 131 L192 131" />
      </g>
      {/* dome/arch */}
      <path d="M110 70 Q150 30 190 70" stroke="url(#vg)" strokeWidth="1.2" />
      <path d="M118 70 Q150 40 182 70" stroke="url(#vg)" strokeWidth="0.6" opacity="0.5" />
      {/* finial */}
      <path d="M150 30 L150 18" stroke="url(#vg)" strokeWidth="1" />
      <circle cx="150" cy="15" r="3" fill="url(#vg)" />
      {/* side wings */}
      <g stroke="url(#vg)" strokeWidth="0.7" opacity="0.5">
        <path d="M60 145 L60 90 M80 142 L80 95" />
        <path d="M55 90 L85 90" />
        <path d="M240 145 L240 90 M220 142 L220 95" />
        <path d="M215 90 L245 90" />
      </g>
      {/* trees */}
      <g opacity="0.4">
        <path d="M42 142 Q48 100 54 142Z" fill="#2E8B6B" fillOpacity="0.3" stroke="#2E8B6B" strokeWidth="0.6" />
        <path d="M246 142 Q252 100 258 142Z" fill="#2E8B6B" fillOpacity="0.3" stroke="#2E8B6B" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

function Palace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="1" stopColor="#A87B2C" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* main building */}
      <rect x="70" y="60" width="160" height="90" stroke="url(#pg)" strokeWidth="0.8" opacity="0.5" />
      {/* central dome */}
      <path d="M120 60 Q150 20 180 60" stroke="url(#pg)" strokeWidth="1.2" />
      <path d="M150 20 L150 10" stroke="url(#pg)" strokeWidth="0.8" />
      <circle cx="150" cy="8" r="2.5" fill="url(#pg)" />
      {/* side domes */}
      <path d="M75 60 Q92 40 110 60" stroke="url(#pg)" strokeWidth="0.8" opacity="0.6" />
      <path d="M190 60 Q208 40 225 60" stroke="url(#pg)" strokeWidth="0.8" opacity="0.6" />
      {/* windows */}
      {[95, 125, 150, 175, 205].map((x) => (
        <g key={x}>
          <path d={`M${x - 6} 100 L${x - 6} 82 Q${x} 74 ${x + 6} 82 L${x + 6} 100`} stroke="url(#pg)" strokeWidth="0.7" opacity="0.6" />
        </g>
      ))}
      {/* entrance */}
      <path d="M138 150 L138 115 Q150 105 162 115 L162 150" stroke="url(#pg)" strokeWidth="0.9" opacity="0.7" />
      {/* ground */}
      <path d="M40 150 L260 150" stroke="url(#pg)" strokeWidth="0.6" opacity="0.4" />
      {/* side minarets */}
      <g stroke="url(#pg)" strokeWidth="0.7" opacity="0.5">
        <path d="M50 150 L50 55 M55 55 Q50 44 45 55" />
        <path d="M250 150 L250 55 M255 55 Q250 44 245 55" />
      </g>
      {/* gardens */}
      <g opacity="0.35">
        <path d="M30 148 Q35 120 40 148Z" fill="#2E8B6B" fillOpacity="0.3" stroke="#2E8B6B" strokeWidth="0.5" />
        <path d="M260 148 Q265 120 270 148Z" fill="#2E8B6B" fillOpacity="0.3" stroke="#2E8B6B" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function Garden({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="1" stopColor="#A87B2C" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* gazebo */}
      <g stroke="url(#gg)" strokeWidth="1">
        <path d="M120 130 L120 68" />
        <path d="M180 130 L180 68" />
        <path d="M112 68 Q150 38 188 68" />
        <path d="M150 38 L150 26" />
      </g>
      <circle cx="150" cy="23" r="3" fill="url(#gg)" />
      {/* lanterns hanging */}
      {[135, 150, 165].map((x, i) => (
        <g key={i} opacity="0.6">
          <path d={`M${x} 68 L${x} 78`} stroke="url(#gg)" strokeWidth="0.5" />
          <ellipse cx={x} cy={80} rx={3} ry={4} stroke="url(#gg)" strokeWidth="0.5" />
        </g>
      ))}
      {/* path */}
      <path d="M140 150 Q145 140 150 135 Q155 140 160 150" stroke="url(#gg)" strokeWidth="0.6" opacity="0.5" />
      {/* ground foliage */}
      <g opacity="0.4">
        {[60, 80, 95, 205, 220, 240].map((x) => (
          <path key={x} d={`M${x - 5} 148 Q${x} ${128 + (x % 3) * 5} ${x + 5} 148Z`} fill="#2E8B6B" fillOpacity="0.25" stroke="#2E8B6B" strokeWidth="0.5" />
        ))}
      </g>
      {/* fountain */}
      <ellipse cx="150" cy="118" rx="18" ry="5" stroke="url(#gg)" strokeWidth="0.6" opacity="0.5" />
      <path d="M150 113 L150 100 M145 105 Q150 96 155 105" stroke="url(#gg)" strokeWidth="0.5" opacity="0.5" />
      {/* decorative bushes */}
      <g opacity="0.35">
        <ellipse cx="50" cy="140" rx="20" ry="12" fill="#2E8B6B" fillOpacity="0.2" stroke="#2E8B6B" strokeWidth="0.5" />
        <ellipse cx="250" cy="140" rx="20" ry="12" fill="#2E8B6B" fillOpacity="0.2" stroke="#2E8B6B" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function Ballroom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="1" stopColor="#A87B2C" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* building facade */}
      <rect x="50" y="50" width="200" height="100" stroke="url(#bg)" strokeWidth="0.8" opacity="0.5" />
      {/* roof balustrade */}
      <path d="M45 50 L255 50" stroke="url(#bg)" strokeWidth="1" />
      {[60, 80, 100, 120, 140, 160, 180, 200, 220, 240].map((x) => (
        <path key={x} d={`M${x} 50 L${x} 42`} stroke="url(#bg)" strokeWidth="0.5" opacity="0.5" />
      ))}
      <path d="M45 42 L255 42" stroke="url(#bg)" strokeWidth="0.6" opacity="0.6" />
      {/* large arched windows */}
      {[85, 130, 175, 220].map((x) => (
        <g key={x}>
          <path d={`M${x - 12} 120 L${x - 12} 72 Q${x} 58 ${x + 12} 72 L${x + 12} 120`} stroke="url(#bg)" strokeWidth="0.7" opacity="0.6" />
        </g>
      ))}
      {/* entrance portico */}
      <g stroke="url(#bg)" strokeWidth="0.9" opacity="0.7">
        <path d="M130 150 L130 120" />
        <path d="M170 150 L170 120" />
        <path d="M125 120 L175 120" />
        <path d="M140 150 L140 128 Q150 122 160 128 L160 150" />
      </g>
      {/* chandelier hint */}
      <g opacity="0.4" stroke="url(#bg)" strokeWidth="0.4">
        <path d="M150 50 L150 60" />
        <path d="M144 60 L156 60" />
        <path d="M146 60 L143 68 M154 60 L157 68" />
      </g>
      {/* ground */}
      <path d="M30 150 L270 150" stroke="url(#bg)" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export default function VenueIllustration({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "carnival":
      return <Garden className={className} />;
    case "sangeet":
      return <Ballroom className={className} />;
    case "wedding":
      return <Pavilion className={className} />;
    case "reception":
      return <Palace className={className} />;
    default:
      return <Pavilion className={className} />;
  }
}
