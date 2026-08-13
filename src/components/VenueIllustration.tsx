"use client";

function GardenGazebo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vg-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A09890" stopOpacity="0.6" />
          <stop offset="1" stopColor="#807870" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="148" rx="120" ry="10" fill="url(#vg-s)" opacity="0.1" />
      <g stroke="url(#vg-s)" strokeWidth="0.8" opacity="0.5">
        <path d="M80 145 L220 145" />
        <path d="M92 138 L208 138" />
        <path d="M104 131 L196 131" />
      </g>
      <g stroke="url(#vg-s)" strokeWidth="1.2">
        <path d="M115 131 L115 70" />
        <path d="M185 131 L185 70" />
      </g>
      <g stroke="url(#vg-s)" strokeWidth="0.8" opacity="0.6">
        <path d="M108 70 L122 70" />
        <path d="M178 70 L192 70" />
        <path d="M108 131 L122 131" />
        <path d="M178 131 L192 131" />
      </g>
      <path d="M110 70 Q150 30 190 70" stroke="url(#vg-s)" strokeWidth="1.2" />
      <path d="M118 70 Q150 40 182 70" stroke="url(#vg-s)" strokeWidth="0.6" opacity="0.4" />
      <path d="M150 30 L150 18" stroke="url(#vg-s)" strokeWidth="1" />
      <circle cx="150" cy="15" r="3" fill="url(#vg-s)" />
      {[135, 150, 165].map((x, i) => (
        <g key={i} opacity="0.5">
          <path d={`M${x} 68 L${x} 78`} stroke="url(#vg-s)" strokeWidth="0.5" />
          <ellipse cx={x} cy={80} rx={3} ry={4} stroke="url(#vg-s)" strokeWidth="0.5" />
        </g>
      ))}
      <path d="M140 150 Q145 140 150 135 Q155 140 160 150" stroke="url(#vg-s)" strokeWidth="0.6" opacity="0.4" />
      <g opacity="0.3">
        {[60, 80, 95, 205, 220, 240].map((x) => (
          <path key={x} d={`M${x - 5} 148 Q${x} ${128 + (x % 3) * 5} ${x + 5} 148Z`} fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
        ))}
      </g>
      <ellipse cx="150" cy="118" rx="18" ry="5" stroke="url(#vg-s)" strokeWidth="0.6" opacity="0.4" />
      <path d="M150 113 L150 100 M145 105 Q150 96 155 105" stroke="url(#vg-s)" strokeWidth="0.5" opacity="0.4" />
      <g opacity="0.25">
        <ellipse cx="50" cy="140" rx="20" ry="12" fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
        <ellipse cx="250" cy="140" rx="20" ry="12" fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function GrandHotel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ph-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A09890" stopOpacity="0.6" />
          <stop offset="1" stopColor="#807870" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect x="70" y="55" width="160" height="95" stroke="url(#ph-s)" strokeWidth="0.8" opacity="0.4" />
      <path d="M120 55 Q150 20 180 55" stroke="url(#ph-s)" strokeWidth="1" />
      <path d="M150 20 L150 10" stroke="url(#ph-s)" strokeWidth="0.8" />
      <circle cx="150" cy="8" r="2.5" fill="url(#ph-s)" />
      <path d="M75 55 Q92 38 110 55" stroke="url(#ph-s)" strokeWidth="0.7" opacity="0.5" />
      <path d="M190 55 Q208 38 225 55" stroke="url(#ph-s)" strokeWidth="0.7" opacity="0.5" />
      {[95, 120, 150, 180, 205].map((x) => (
        <g key={x}>
          <path d={`M${x - 6} 100 L${x - 6} 78 Q${x} 70 ${x + 6} 78 L${x + 6} 100`} stroke="url(#ph-s)" strokeWidth="0.7" opacity="0.5" />
        </g>
      ))}
      <path d="M138 150 L138 115 Q150 105 162 115 L162 150" stroke="url(#ph-s)" strokeWidth="0.8" opacity="0.6" />
      <path d="M40 150 L260 150" stroke="url(#ph-s)" strokeWidth="0.5" opacity="0.3" />
      <g stroke="url(#ph-s)" strokeWidth="0.7" opacity="0.4">
        <path d="M50 150 L50 50 M55 50 Q50 40 45 50" />
        <path d="M250 150 L250 50 M255 50 Q250 40 245 50" />
      </g>
      <g opacity="0.25">
        <path d="M30 148 Q35 120 40 148Z" fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
        <path d="M260 148 Q265 120 270 148Z" fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function Ballroom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bl-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A09890" stopOpacity="0.6" />
          <stop offset="1" stopColor="#807870" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect x="50" y="50" width="200" height="100" stroke="url(#bl-s)" strokeWidth="0.8" opacity="0.4" />
      <path d="M45 50 L255 50" stroke="url(#bl-s)" strokeWidth="1" />
      {[60, 80, 100, 120, 140, 160, 180, 200, 220, 240].map((x) => (
        <path key={x} d={`M${x} 50 L${x} 42`} stroke="url(#bl-s)" strokeWidth="0.5" opacity="0.4" />
      ))}
      <path d="M45 42 L255 42" stroke="url(#bl-s)" strokeWidth="0.6" opacity="0.5" />
      {[85, 130, 175, 220].map((x) => (
        <g key={x}>
          <path d={`M${x - 12} 120 L${x - 12} 72 Q${x} 58 ${x + 12} 72 L${x + 12} 120`} stroke="url(#bl-s)" strokeWidth="0.7" opacity="0.5" />
        </g>
      ))}
      <g stroke="url(#bl-s)" strokeWidth="0.8" opacity="0.6">
        <path d="M130 150 L130 120" />
        <path d="M170 150 L170 120" />
        <path d="M125 120 L175 120" />
        <path d="M140 150 L140 128 Q150 122 160 128 L160 150" />
      </g>
      <g opacity="0.3" stroke="url(#bl-s)" strokeWidth="0.4">
        <path d="M150 50 L150 60" />
        <path d="M144 60 L156 60" />
        <path d="M146 60 L143 68 M154 60 L157 68" />
      </g>
      <path d="M30 150 L270 150" stroke="url(#bl-s)" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function Pavilion({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pv-s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A09890" stopOpacity="0.6" />
          <stop offset="1" stopColor="#807870" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="148" rx="120" ry="10" fill="url(#pv-s)" opacity="0.08" />
      <g stroke="url(#pv-s)" strokeWidth="1">
        <path d="M100 135 L100 65" />
        <path d="M200 135 L200 65" />
        <path d="M130 135 L130 70" />
        <path d="M170 135 L170 70" />
      </g>
      <g stroke="url(#pv-s)" strokeWidth="0.7" opacity="0.5">
        <path d="M93 65 L107 65" />
        <path d="M193 65 L207 65" />
        <path d="M123 70 L137 70" />
        <path d="M163 70 L177 70" />
      </g>
      <path d="M90 65 Q150 25 210 65" stroke="url(#pv-s)" strokeWidth="1.2" />
      <path d="M100 65 Q150 35 200 65" stroke="url(#pv-s)" strokeWidth="0.5" opacity="0.4" />
      <path d="M150 25 L150 12" stroke="url(#pv-s)" strokeWidth="0.8" />
      <circle cx="150" cy="10" r="3" fill="url(#pv-s)" />
      <path d="M80 145 L220 145" stroke="url(#pv-s)" strokeWidth="0.6" opacity="0.4" />
      <path d="M90 140 L210 140" stroke="url(#pv-s)" strokeWidth="0.4" opacity="0.3" />
      <g opacity="0.3">
        <path d="M140 145 Q145 138 150 135 Q155 138 160 145" stroke="url(#pv-s)" strokeWidth="0.5" fill="none" />
      </g>
      <g opacity="0.25">
        {[55, 245].map((x) => (
          <path key={x} d={`M${x - 8} 148 Q${x} 118 ${x + 8} 148Z`} fill="#8BA878" fillOpacity="0.3" stroke="#6B8B5E" strokeWidth="0.5" />
        ))}
      </g>
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
      return <GardenGazebo className={className} />;
    case "sangeet":
      return <Ballroom className={className} />;
    case "wedding":
      return <Pavilion className={className} />;
    case "reception":
      return <GrandHotel className={className} />;
    default:
      return <Pavilion className={className} />;
  }
}
