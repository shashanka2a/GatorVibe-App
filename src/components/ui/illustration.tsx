interface IllustrationProps {
  type: 'community' | 'roommate' | 'events' | 'hero' | 'celebration';
  className?: string;
}

export function Illustration({ type, className = "" }: IllustrationProps) {
  const illustrations = {
    community: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="communityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#F8FAFC" rx="12"/>
        <circle cx="150" cy="120" r="30" fill="url(#communityGrad)" opacity="0.8"/>
        <circle cx="250" cy="120" r="30" fill="url(#communityGrad)" opacity="0.6"/>
        <circle cx="200" cy="180" r="25" fill="url(#communityGrad)" opacity="0.9"/>
        <path d="M150 150 Q200 140 250 150" stroke="#8B5CF6" strokeWidth="3" fill="none"/>
        <path d="M175 195 Q200 185 225 195" stroke="#8B5CF6" strokeWidth="3" fill="none"/>
        <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">
          Connect & Discover
        </text>
      </svg>
    ),
    roommate: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="roommateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#F8FAFC" rx="12"/>
        <rect x="100" y="80" width="200" height="140" fill="url(#roommateGrad)" opacity="0.1" rx="8"/>
        <rect x="120" y="100" width="70" height="100" fill="url(#roommateGrad)" opacity="0.3" rx="4"/>
        <rect x="210" y="100" width="70" height="100" fill="url(#roommateGrad)" opacity="0.3" rx="4"/>
        <circle cx="155" cy="130" r="15" fill="url(#roommateGrad)"/>
        <circle cx="245" cy="130" r="15" fill="url(#roommateGrad)"/>
        <path d="M190 150 L210 150" stroke="#EC4899" strokeWidth="4" fill="none"/>
        <polygon points="205,145 215,150 205,155" fill="#EC4899"/>
        <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">
          Perfect Match
        </text>
      </svg>
    ),
    events: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="eventsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#F8FAFC" rx="12"/>
        <rect x="120" y="80" width="160" height="120" fill="url(#eventsGrad)" opacity="0.2" rx="8"/>
        <circle cx="160" cy="120" r="8" fill="url(#eventsGrad)"/>
        <circle cx="200" cy="120" r="8" fill="url(#eventsGrad)"/>
        <circle cx="240" cy="120" r="8" fill="url(#eventsGrad)"/>
        <rect x="140" y="140" width="120" height="4" fill="url(#eventsGrad)" opacity="0.6" rx="2"/>
        <rect x="140" y="155" width="80" height="4" fill="url(#eventsGrad)" opacity="0.4" rx="2"/>
        <rect x="140" y="170" width="100" height="4" fill="url(#eventsGrad)" opacity="0.5" rx="2"/>
        <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">
          Campus Events
        </text>
      </svg>
    ),
    hero: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#heroGrad)" opacity="0.1" rx="12"/>
        <circle cx="120" cy="100" r="25" fill="url(#heroGrad)" opacity="0.8"/>
        <circle cx="200" cy="80" r="30" fill="url(#heroGrad)" opacity="0.9"/>
        <circle cx="280" cy="100" r="25" fill="url(#heroGrad)" opacity="0.7"/>
        <circle cx="160" cy="160" r="20" fill="url(#heroGrad)" opacity="0.6"/>
        <circle cx="240" cy="160" r="20" fill="url(#heroGrad)" opacity="0.8"/>
        <path d="M120 125 Q200 140 280 125" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M160 180 Q200 190 240 180" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="16" fontWeight="600">
          Student Community
        </text>
      </svg>
    ),
    celebration: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="celebrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#celebrationGrad)" opacity="0.1" rx="12"/>
        <circle cx="150" cy="120" r="20" fill="url(#celebrationGrad)" opacity="0.8"/>
        <circle cx="250" cy="120" r="20" fill="url(#celebrationGrad)" opacity="0.9"/>
        <circle cx="200" cy="180" r="18" fill="url(#celebrationGrad)" opacity="0.7"/>
        <polygon points="200,60 205,75 220,75 208,85 213,100 200,90 187,100 192,85 180,75 195,75" fill="#F59E0B"/>
        <polygon points="120,80 123,88 132,88 125,93 128,101 120,96 112,101 115,93 108,88 117,88" fill="#F97316"/>
        <polygon points="280,90 283,98 292,98 285,103 288,111 280,106 272,111 275,103 268,98 277,98" fill="#EF4444"/>
        <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">
          Celebrate Together
        </text>
      </svg>
    )
  };

  return illustrations[type];
}