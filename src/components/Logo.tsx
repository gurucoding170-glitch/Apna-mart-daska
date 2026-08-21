export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* SVG Animated 3D Neon Badge */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(229,184,105,0.8)]"
      >
        <defs>
          {/* Gold Neon Glow Filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE08A" />
            <stop offset="50%" stopColor="#E5B869" />
            <stop offset="100%" stopColor="#996B1F" />
          </linearGradient>
        </defs>

        {/* Outer 3D Hexagon/Shield Frame */}
        <polygon
          points="50,5 90,25 90,75 50,95 10,75 10,25"
          fill="#1A0F0A"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          filter="url(#neonGlow)"
          className="animate-pulse"
        />

        {/* Inner Subtle Ring */}
        <circle cx="50" cy="50" r="38" stroke="#E5B869" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />

        {/* 3D Neon Text ADM */}
        <text
          x="50%"
          y="58%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#goldGrad)"
          fontSize="30"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="1"
          filter="url(#neonGlow)"
        >
          ADM
        </text>
      </svg>

      {/* Brand Text next to Logo */}
      <div className="flex flex-col">
        <span className="font-bold text-base md:text-lg tracking-tight gold-gradient-text leading-none">
          Apna Daska
        </span>
        <span className="text-[10px] tracking-widest text-gold-200/80 uppercase font-semibold">
          Mart
        </span>
      </div>
    </div>
  );
}
