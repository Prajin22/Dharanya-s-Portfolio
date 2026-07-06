function Motif({ motif, p, uid }) {
  if (motif === 'perspective') {
    return (
      <g>
        {[30, 95, 160, 240, 305, 370].map((x) => (
          <line key={x} x1="200" y1="150" x2={x} y2="520" stroke={p.a} strokeOpacity="0.3" strokeWidth="1.4" />
        ))}
        <circle cx="200" cy="128" r="30" fill="#FFFFFF" opacity="0.85" />
        <circle cx="200" cy="128" r="44" fill="none" stroke={p.a} strokeOpacity="0.4" strokeWidth="1.5" />
        <polygon points="26,520 118,520 148,190 84,158" fill={p.a} opacity="0.28" />
        <polygon points="374,520 282,520 254,196 318,162" fill={p.c} opacity="0.24" />
        <polygon points="168,520 232,520 216,150 184,150" fill={p.b} opacity="0.4" />
      </g>
    )
  }
  if (motif === 'portrait') {
    return (
      <g>
        <ellipse cx="200" cy="440" rx="160" ry="70" fill={p.a} opacity="0.16" />
        <ellipse cx="200" cy="235" rx="118" ry="148" fill={p.b} opacity="0.55" />
        <ellipse cx="200" cy="245" rx="86" ry="110" fill={p.a} opacity="0.25" />
        <circle cx="146" cy="196" r="34" fill="#FFFFFF" opacity="0.5" />
        <circle cx="167" cy="228" r="7" fill={p.c} opacity="0.55" />
        <circle cx="233" cy="228" r="7" fill={p.c} opacity="0.55" />
        <path d="M158 300 Q200 336 242 300" fill="none" stroke={p.c} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      </g>
    )
  }
  if (motif === 'city') {
    return (
      <g>
        {[[14, 210], [56, 150], [98, 265], [140, 118], [182, 235], [224, 165], [266, 288], [308, 132], [350, 226]].map(([x, h]) => (
          <rect key={x} x={x} y={520 - h * 1.5} width="34" height={h * 1.5} fill={p.a} opacity="0.75" />
        ))}
        {[[36, 190], [118, 250], [200, 160], [282, 230], [352, 175]].map(([x, h]) => (
          <rect key={x} x={x} y="0" width="30" height={h} fill={p.b} opacity="0.55" />
        ))}
        <rect x="0" y="228" width="400" height="52" fill="#FFFFFF" opacity="0.07" />
        <circle cx="200" cy="452" r="9" fill="#F3EFFB" opacity="0.95" />
        <line x1="200" y1="461" x2="200" y2="486" stroke="#F3EFFB" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      </g>
    )
  }
  if (motif === 'feathers') {
    return (
      <g fill="none" strokeLinecap="round">
        {[[0, p.b, 30], [1, p.c, 26], [2, p.a, 30], [3, p.c, 24], [4, p.b, 28], [5, p.a, 32]].map(([i, c, w]) => (
          <path key={i} d={`M-40 ${470 - i * 62} Q 210 ${330 - i * 58} 440 ${430 - i * 74}`} stroke={c} strokeWidth={w} opacity="0.8" />
        ))}
        <circle cx="118" cy="132" r="36" fill="#FFFFFF" opacity="0.9" />
        <circle cx="118" cy="132" r="13" fill={p.a} />
      </g>
    )
  }
  if (motif === 'plumes') {
    const cells = []
    for (let r = 0; r < 5; r += 1) {
      for (let c = 0; c < 4; c += 1) {
        cells.push([56 + c * 96 + (r % 2) * 48, 64 + r * 100])
      }
    }
    return (
      <g>
        {cells.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="30" fill={p.c} opacity="0.25" />
            <circle r="22" fill="none" stroke={p.a} strokeWidth="2.5" opacity="0.6" />
            <circle r="9" fill={p.b} opacity="0.75" />
          </g>
        ))}
      </g>
    )
  }
  if (motif === 'eyes') {
    return (
      <g>
        <path d="M64 260 Q200 158 336 260 Q200 362 64 260 Z" fill="#FFFFFF" opacity="0.8" />
        <path d="M64 260 Q200 158 336 260" fill="none" stroke={p.a} strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        <path d="M64 260 Q200 362 336 260" fill="none" stroke={p.a} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        <circle cx="200" cy="258" r="48" fill={p.b} opacity="0.9" />
        <circle cx="200" cy="258" r="21" fill={p.c} />
        <circle cx="214" cy="243" r="8" fill="#FFFFFF" opacity="0.95" />
        {[130, 200, 270].map((x, i) => (
          <line key={x} x1={x} y1={i === 1 ? 168 : 184} x2={x + (i - 1) * 18} y2={i === 1 ? 128 : 148} stroke={p.c} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        ))}
      </g>
    )
  }
  if (motif === 'mandala') {
    return (
      <g>
        {[150, 112, 76].map((r, i) => (
          <circle key={r} cx="200" cy="252" r={r} fill="none" stroke={p.a} strokeWidth={i === 2 ? 2.5 : 1.5} opacity={0.3 + i * 0.12} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 200 252)`}>
            <ellipse cx="200" cy="120" rx="15" ry="40" fill={p.b} opacity="0.45" />
          </g>
        ))}
        <circle cx="200" cy="252" r="52" fill={p.c} opacity="0.3" />
        <path d="M200 212 q 44 30 14 82 q -16 28 -50 20" fill="none" stroke={p.a} strokeWidth="11" strokeLinecap="round" opacity="0.8" />
        <circle cx="200" cy="196" r="6" fill={p.c} opacity="0.9" />
      </g>
    )
  }
  if (motif === 'flow') {
    return (
      <g fill="none" strokeLinecap="round">
        <path d="M46 428 C 150 330 118 226 224 162 C 292 122 330 138 362 96" stroke={p.a} strokeWidth="30" opacity="0.6" />
        <path d="M354 436 C 252 344 296 240 190 174 C 122 132 84 148 46 108" stroke={p.c} strokeWidth="30" opacity="0.55" />
        <circle cx="206" cy="168" r="14" fill="#FFFFFF" opacity="0.85" />
        <circle cx="318" cy="112" r="26" fill={p.b} opacity="0.4" />
      </g>
    )
  }
  if (motif === 'meadow') {
    return (
      <g>
        <rect x="-20" y="332" width="440" height="70" rx="35" fill={p.b} opacity="0.4" />
        <rect x="-20" y="396" width="440" height="70" rx="35" fill={p.a} opacity="0.28" />
        <rect x="-20" y="458" width="440" height="70" rx="35" fill={p.c} opacity="0.3" />
        <ellipse cx="196" cy="286" rx="118" ry="66" fill="#FFFFFF" opacity="0.85" />
        <circle cx="296" cy="252" r="42" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="160" cy="272" rx="34" ry="24" fill={p.a} opacity="0.3" />
        <circle cx="308" cy="244" r="5" fill={p.c} opacity="0.7" />
        <path d="M282 214 q -10 -18 6 -26" fill="none" stroke={p.c} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
        <path d="M312 212 q 12 -16 -2 -28" fill="none" stroke={p.c} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      </g>
    )
  }
  if (motif === 'tonal') {
    return (
      <g>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x="0" y={i * 87} width="400" height="88" fill={p.a} opacity={0.05 + i * 0.05} />
        ))}
        <circle cx="200" cy="242" r="92" fill="#FFFFFF" opacity="0.7" />
        <circle cx="200" cy="242" r="60" fill={p.b} opacity="0.5" />
        <circle cx="200" cy="242" r="28" fill={p.c} opacity="0.5" />
        <path d="M120 380 Q 200 420 280 380" fill="none" stroke={p.c} strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      </g>
    )
  }
  if (motif === 'mirror') {
    return (
      <g>
        <line x1="200" y1="0" x2="200" y2="96" stroke={p.a} strokeWidth="2" opacity="0.5" />
        <circle cx="200" cy="248" r="164" fill="none" stroke={p.a} strokeWidth="1.5" strokeDasharray="2 12" strokeLinecap="round" opacity="0.7" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 248)`}>
            <circle cx="200" cy="100" r="7" fill={p.b} opacity="0.8" />
          </g>
        ))}
        <circle cx="200" cy="248" r="132" fill="none" stroke={p.a} strokeWidth="10" opacity="0.85" />
        <circle cx="200" cy="248" r="118" fill={p.b} opacity="0.35" />
        <line x1="142" y1="312" x2="266" y2="172" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.8" />
        <line x1="170" y1="330" x2="286" y2="200" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      </g>
    )
  }
  if (motif === 'facet') {
    return (
      <g>
        <circle cx="200" cy="288" r="148" fill="#FFFFFF" opacity="0.5" />
        <path d="M168 140 L138 76 L108 92 M138 76 L146 40 M108 92 L84 60" fill="none" stroke={p.a} strokeWidth="7" strokeLinecap="round" opacity="0.8" />
        <path d="M232 140 L262 76 L292 92 M262 76 L254 40 M292 92 L316 60" fill="none" stroke={p.a} strokeWidth="7" strokeLinecap="round" opacity="0.8" />
        <polygon points="200,150 152,238 200,222" fill={p.a} opacity="0.6" />
        <polygon points="200,150 248,238 200,222" fill={p.b} opacity="0.7" />
        <polygon points="152,238 200,222 200,340" fill={p.c} opacity="0.55" />
        <polygon points="248,238 200,222 200,340" fill={p.a} opacity="0.4" />
        <polygon points="152,238 200,340 172,368" fill={p.b} opacity="0.5" />
        <polygon points="248,238 200,340 228,368" fill={p.c} opacity="0.45" />
        <polygon points="128,196 152,238 120,242" fill={p.b} opacity="0.55" />
        <polygon points="272,196 248,238 280,242" fill={p.a} opacity="0.5" />
      </g>
    )
  }
  if (motif === 'lippan') {
    const dots = []
    for (let r = 0; r < 6; r += 1) {
      for (let c = 0; c < 5; c += 1) {
        if ((r + c) % 2 === 0) dots.push([48 + c * 76, 56 + r * 82])
      }
    }
    return (
      <g>
        <clipPath id={`${uid}-clip`}>
          <rect x="26" y="26" width="348" height="468" rx="24" />
        </clipPath>
        <g clipPath={`url(#${uid}-clip)`}>
          {[-320, -240, -160, -80, 0, 80, 160, 240, 320].map((o) => (
            <g key={o} opacity="0.35">
              <line x1={o} y1="0" x2={o + 520} y2="520" stroke={p.a} strokeWidth="2" />
              <line x1={o + 520} y1="0" x2={o} y2="520" stroke={p.a} strokeWidth="2" />
            </g>
          ))}
          {dots.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="13" fill={p.b} opacity="0.95" />
              <circle cx={x} cy={y} r="13" fill="none" stroke={p.c} strokeWidth="4" opacity="0.9" />
            </g>
          ))}
        </g>
        <rect x="22" y="22" width="356" height="476" rx="26" fill="none" stroke={p.a} strokeWidth="6" opacity="0.55" />
      </g>
    )
  }
  if (motif === 'loops') {
    const cells = []
    for (let r = 0; r < 8; r += 1) {
      for (let c = 0; c < 7; c += 1) {
        cells.push([26 + c * 58 + (r % 2) * 29, 62 + r * 57, (r + c) % 2])
      }
    }
    return (
      <g fill="none">
        {cells.map(([x, y, alt], i) => (
          <circle key={i} cx={x} cy={y} r="27" stroke={alt ? p.a : p.c} strokeWidth="9" opacity={alt ? 0.5 : 0.35} />
        ))}
      </g>
    )
  }
  if (motif === 'knots') {
    const xs = [76, 113, 150, 187, 224, 261, 298, 335]
    return (
      <g strokeLinecap="round">
        <path d="M170 34 Q200 8 230 34" fill="none" stroke={p.c} strokeWidth="6" opacity="0.8" />
        <rect x="52" y="36" width="296" height="10" rx="5" fill={p.c} opacity="0.85" />
        {xs.map((x) => (
          <line key={x} x1={x} y1="46" x2={x} y2="368" stroke={p.a} strokeWidth="5" opacity="0.65" />
        ))}
        {[118, 196, 274].map((y, r) => (
          <g key={y}>
            {xs.slice(0, -1).map((x, i) =>
              (i + r) % 2 === 0 ? (
                <g key={x} opacity="0.75">
                  <line x1={x} y1={y} x2={x + 37} y2={y + 46} stroke={p.b} strokeWidth="5" />
                  <line x1={x + 37} y1={y} x2={x} y2={y + 46} stroke={p.b} strokeWidth="5" />
                </g>
              ) : null
            )}
          </g>
        ))}
        {xs.map((x, i) => (
          <line key={x} x1={x} y1="368" x2={x + (i % 2 ? 7 : -7)} y2={430 + (i % 3) * 14} stroke={p.a} strokeWidth="4" opacity="0.45" />
        ))}
      </g>
    )
  }
  return null
}

export default function ArtworkVisual({ project, idPrefix = '' }) {
  const { id, title, palette, motif } = project
  const uid = `${idPrefix}${id}`
  return (
    <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label={title}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.bg[0]} />
          <stop offset="1" stopColor={palette.bg[1]} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="0.3" cy="0.25" r="0.95">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" intercept="0" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="400" height="520" fill={`url(#${uid}-bg)`} />
      <rect width="400" height="520" fill={`url(#${uid}-glow)`} />
      <Motif motif={motif} p={palette} uid={uid} />
      <rect width="400" height="520" filter={`url(#${uid}-grain)`} />
    </svg>
  )
}
