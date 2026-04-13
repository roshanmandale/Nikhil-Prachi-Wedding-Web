"use client";

// ─── REALISTIC ROSE SVG ──────────────────────────────────────────────────
// Uses SVG gradients, filters, and complex bezier curves for a photographic look

export interface RoseProps {
  size?: number;
  opacity?: number;
  rotate?: number;
  hue?: 'crimson' | 'dark' | 'blush';
}

export function RealisticRose({ size = 120, opacity = 1, rotate = 0, hue = 'crimson' }: RoseProps) {
  const id = `rose-${Math.random().toString(36).substr(2, 6)}`;

  const colors = {
    crimson: {
      outer1: '#4A0610', outer2: '#7A1020', outer3: '#9B1828',
      mid1: '#6B0F1A', mid2: '#8B1520', mid3: '#A01E2A',
      inner1: '#B02030', inner2: '#C52535', center: '#501015',
      leaf: '#0D2208', leaf2: '#143010', stem: '#0A1A05',
      highlight: 'rgba(255,200,200,0.12)', shadow: 'rgba(30,0,5,0.7)'
    },
    dark: {
      outer1: '#2A0308', outer2: '#480810', outer3: '#620D18',
      mid1: '#3D0A10', mid2: '#5C1018', mid3: '#780F1E',
      inner1: '#8A151F', inner2: '#A0202A', center: '#300508',
      leaf: '#081A04', leaf2: '#0D2208', stem: '#06100202',
      highlight: 'rgba(200,150,150,0.08)', shadow: 'rgba(20,0,3,0.8)'
    },
    blush: {
      outer1: '#6B1020', outer2: '#8B2030', outer3: '#B03040',
      mid1: '#8B1525', mid2: '#A52035', mid3: '#C02A40',
      inner1: '#D03048', inner2: '#E04055', center: '#701020',
      leaf: '#0A2006', leaf2: '#142808', stem: '#081505',
      highlight: 'rgba(255,210,215,0.15)', shadow: 'rgba(40,5,10,0.65)'
    }
  };

  const c = colors[hue];

  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={size * 1.1}
      style={{ opacity, transform: `rotate(${rotate}deg)`, display: 'block' }}
    >
      <defs>
        {/* Petal gradients with realistic shading */}
        <radialGradient id={`${id}-p1`} cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor={c.highlight}/>
          <stop offset="30%" stopColor={c.outer3}/>
          <stop offset="100%" stopColor={c.outer1}/>
        </radialGradient>
        <radialGradient id={`${id}-p2`} cx="55%" cy="25%" r="60%">
          <stop offset="0%" stopColor={c.outer3}/>
          <stop offset="50%" stopColor={c.outer2}/>
          <stop offset="100%" stopColor={c.outer1}/>
        </radialGradient>
        <radialGradient id={`${id}-p3`} cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor={c.mid3}/>
          <stop offset="55%" stopColor={c.mid1}/>
          <stop offset="100%" stopColor={c.outer1}/>
        </radialGradient>
        <radialGradient id={`${id}-inner`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={c.inner2}/>
          <stop offset="60%" stopColor={c.inner1}/>
          <stop offset="100%" stopColor={c.mid1}/>
        </radialGradient>
        <radialGradient id={`${id}-center`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor={c.inner2}/>
          <stop offset="40%" stopColor={c.inner1}/>
          <stop offset="100%" stopColor={c.center}/>
        </radialGradient>
        <radialGradient id={`${id}-leaf`} cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={c.leaf2}/>
          <stop offset="100%" stopColor={c.leaf}/>
        </radialGradient>
        {/* Soft edge filter */}
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        {/* Shadow filter */}
        <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1" dy="3" stdDeviation="4" floodColor={c.shadow} floodOpacity="0.8"/>
        </filter>
        {/* Inner glow */}
        <filter id={`${id}-glow`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── LEAVES ───────────────────────── */}
      {/* Left leaf */}
      <path
        d="M100 195 Q65 185 40 165 Q30 145 50 140 Q65 135 80 150 Q90 165 95 180 Z"
        fill={`url(#${id}-leaf)`}
        filter={`url(#${id}-soft)`}
      />
      {/* Leaf vein */}
      <path d="M95 180 Q70 162 50 140" stroke={c.leaf2} strokeWidth="0.6" fill="none" opacity="0.5"/>
      {/* Right leaf */}
      <path
        d="M100 195 Q135 185 158 165 Q170 145 150 140 Q135 135 120 150 Q110 165 105 180 Z"
        fill={`url(#${id}-leaf)`}
        filter={`url(#${id}-soft)`}
      />
      <path d="M105 180 Q130 162 150 140" stroke={c.leaf2} strokeWidth="0.6" fill="none" opacity="0.5"/>
      {/* Small side leaf */}
      <path
        d="M100 175 Q75 175 58 185 Q62 198 80 195 Q92 190 100 175 Z"
        fill={c.leaf}
        opacity="0.7"
      />

      {/* Stem */}
      <path d="M100 195 Q98 202 99 215" stroke={c.stem} strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── OUTER PETALS (8 large petals) ─── */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const isEven = i % 2 === 0;
        return (
          <g key={angle} transform={`rotate(${angle} 100 108)`} filter={`url(#${id}-shadow)`}>
            <path
              d={isEven
                ? "M100 108 C85 85 70 55 100 35 C130 55 115 85 100 108 Z"
                : "M100 108 C82 80 68 48 100 30 C132 48 118 80 100 108 Z"
              }
              fill={`url(#${id}-p${isEven ? 1 : 2})`}
              filter={`url(#${id}-soft)`}
            />
            {/* Petal vein */}
            <path
              d={isEven
                ? "M100 108 C100 80 100 55 100 35"
                : "M100 108 C100 78 100 52 100 30"
              }
              stroke={c.outer1} strokeWidth="0.5" fill="none" opacity="0.3"
            />
          </g>
        );
      })}

      {/* ── MID PETALS (6 petals) ─── */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={`m${angle}`} transform={`rotate(${angle} 100 108)`}>
          <path
            d="M100 108 C87 88 76 62 100 48 C124 62 113 88 100 108 Z"
            fill={`url(#${id}-p3)`}
            filter={`url(#${id}-soft)`}
          />
          <path d="M100 108 C100 84 100 62 100 48" stroke={c.mid2} strokeWidth="0.4" fill="none" opacity="0.25"/>
        </g>
      ))}

      {/* ── INNER PETALS ─── */}
      {[0, 72, 144, 216, 288].map((angle) => (
        <g key={`i${angle}`} transform={`rotate(${angle} 100 108)`}>
          <path
            d="M100 108 C90 93 82 74 100 63 C118 74 110 93 100 108 Z"
            fill={`url(#${id}-inner)`}
            filter={`url(#${id}-soft)`}
          />
        </g>
      ))}

      {/* ── INNERMOST PETALS ─── */}
      {[0, 90, 180, 270].map((angle) => (
        <g key={`ii${angle}`} transform={`rotate(${angle} 100 108)`}>
          <path
            d="M100 108 C93 97 88 84 100 78 C112 84 107 97 100 108 Z"
            fill={`url(#${id}-center)`}
          />
        </g>
      ))}

      {/* ── CENTER ─── */}
      <circle cx="100" cy="108" r="12" fill={c.inner1} filter={`url(#${id}-glow)`}/>
      <circle cx="100" cy="108" r="8" fill={c.center}/>
      <circle cx="100" cy="108" r="4.5" fill={c.inner2} opacity="0.7"/>
      <circle cx="100" cy="108" r="2" fill="rgba(255,180,180,0.2)"/>
      {/* Center stamens */}
      {[0,60,120,180,240,300].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <circle
            key={`s${a}`}
            cx={100 + 6 * Math.cos(rad)}
            cy={108 + 6 * Math.sin(rad)}
            r="0.8"
            fill="rgba(255,220,150,0.5)"
          />
        );
      })}

      {/* ── HIGHLIGHT SHEEN ─── */}
      <ellipse cx="93" cy="85" rx="8" ry="12" fill="rgba(255,200,200,0.07)" transform="rotate(-30 93 85)"/>
    </svg>
  );
}

// ─── SMALL BUD ────────────────────────────────────────────────────────────
export function RoseBud({ size = 60, opacity = 1, rotate = 0 }: { size?: number; opacity?: number; rotate?: number }) {
  const id = `bud-${Math.random().toString(36).substr(2, 5)}`;
  return (
    <svg viewBox="0 0 100 130" width={size} height={size * 1.3} style={{ opacity, transform: `rotate(${rotate}deg)`, display: 'block' }}>
      <defs>
        <radialGradient id={`${id}-g1`} cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#B02030"/>
          <stop offset="100%" stopColor="#4A0610"/>
        </radialGradient>
        <filter id={`${id}-f`}>
          <feGaussianBlur stdDeviation="0.6"/>
        </filter>
      </defs>
      {/* Sepals */}
      <path d="M50 95 Q35 88 32 75 Q42 72 50 82 Z" fill="#0D2208" opacity="0.8"/>
      <path d="M50 95 Q65 88 68 75 Q58 72 50 82 Z" fill="#0A1A05" opacity="0.8"/>
      <path d="M50 95 Q50 88 50 78 L53 72 Q50 80 47 72 L50 78 Z" fill="#143010" opacity="0.6"/>
      {/* Stem */}
      <path d="M50 95 Q49 108 50 125" stroke="#0A1A05" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Outer petals */}
      <path d="M50 82 C40 70 35 50 50 38 C65 50 60 70 50 82 Z" fill={`url(#${id}-g1)`} filter={`url(#${id}-f)`}/>
      <path d="M50 82 C32 68 28 46 50 38 C72 46 68 68 50 82 Z" fill="#5C1018" opacity="0.8"/>
      {/* Inner bud */}
      <path d="M50 75 C43 65 40 52 50 45 C60 52 57 65 50 75 Z" fill="#8B1520"/>
      <path d="M50 68 C45 60 43 52 50 47 C57 52 55 60 50 68 Z" fill="#9B2030"/>
      {/* Highlight */}
      <ellipse cx="46" cy="58" rx="3" ry="6" fill="rgba(255,180,180,0.08)" transform="rotate(-20 46 58)"/>
    </svg>
  );
}

// ─── ROSE CLUSTER for backgrounds ─────────────────────────────────────────
export function RoseCluster({
  count = 5,
  maxSize = 150,
  minSize = 60,
  style,
}: {
  count?: number;
  maxSize?: number;
  minSize?: number;
  style?: React.CSSProperties;
}) {
  // Deterministic positions using golden ratio
  const phi = 1.6180339887;
  const positions = Array.from({ length: count }, (_, i) => ({
    x: ((i * phi * 37.3) % 100),
    y: ((i * phi * 23.7) % 100),
    size: minSize + ((i * 73) % (maxSize - minSize)),
    rotate: (i * 47) % 360,
    opacity: 0.35 + (i * 0.08) % 0.45,
    hue: (['crimson', 'dark', 'blush', 'dark', 'crimson'] as const)[i % 5],
    isBud: i % 4 === 3,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', ...style }}>
      {positions.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen',
          }}
        >
          {p.isBud
            ? <RoseBud size={p.size * 0.6} opacity={p.opacity} rotate={p.rotate}/>
            : <RealisticRose size={p.size} opacity={p.opacity} rotate={p.rotate} hue={p.hue}/>
          }
        </div>
      ))}
    </div>
  );
}

// ─── FALLING PETAL ANIMATION ──────────────────────────────────────────────
export function FallingPetals({ count = 12 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 8.3) % 100}%`,
    duration: 6 + (i * 1.7) % 8,
    delay: (i * 0.9) % 10,
    size: 6 + (i * 3) % 12,
    rotate: (i * 67) % 360,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
      {petals.map((p, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: p.left,
            top: `-${p.size}px`,
            width: `${p.size}px`,
            height: `${p.size * 0.7}px`,
            background: `radial-gradient(ellipse at 40% 30%, rgba(180,30,50,0.7), rgba(80,5,15,0.5))`,
            borderRadius: '50% 0 50% 0',
            transform: `rotate(${p.rotate}deg)`,
            animation: `petalFall ${p.duration}s ${p.delay}s ease-in infinite`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
}
