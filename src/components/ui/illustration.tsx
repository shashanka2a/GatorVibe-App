interface IllustrationProps {
  type: 'community' | 'roommate' | 'events' | 'hero' | 'celebration';
  className?: string;
}

export function Illustration({ type, className = "" }: IllustrationProps) {
  const illustrations = {
    community: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="communityBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3E8FF" />
            <stop offset="100%" stopColor="#EDE9FE" />
          </linearGradient>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#communityBg)" rx="16"/>
        
        {/* Campus lawn setting */}
        <ellipse cx="200" cy="280" rx="180" ry="30" fill="#86EFAC" opacity="0.6"/>
        <ellipse cx="200" cy="275" rx="160" ry="25" fill="#4ADE80" opacity="0.4"/>
        
        {/* Students sitting in circle */}
        {/* Student 1 - Asian female */}
        <g transform="translate(120, 140)">
          <circle cx="0" cy="0" r="18" fill="#FED7AA" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -15 12 -8" fill="#1F2937" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="url(#purpleGrad)" rx="4"/>
        </g>
        
        {/* Student 2 - Black male */}
        <g transform="translate(280, 140)">
          <circle cx="0" cy="0" r="18" fill="#D2B48C" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -12 12 -8" fill="#2D1B69" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="#F472B6" rx="4"/>
        </g>
        
        {/* Student 3 - Latina female */}
        <g transform="translate(200, 200)">
          <circle cx="0" cy="0" r="18" fill="#F4A460" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -15 12 -8" fill="#8B4513" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="#60A5FA" rx="4"/>
        </g>
        
        {/* Student 4 - White male */}
        <g transform="translate(160, 100)">
          <circle cx="0" cy="0" r="18" fill="#FDBCB4" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -12 12 -8" fill="#D2691E" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="#34D399" rx="4"/>
        </g>
        
        {/* Student 5 - Mixed race female */}
        <g transform="translate(240, 100)">
          <circle cx="0" cy="0" r="18" fill="#DEB887" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -15 12 -8" fill="#654321" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="#FBBF24" rx="4"/>
        </g>
        
        {/* Connection lines */}
        <path d="M140 155 Q180 140 220 155" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M180 215 Q220 200 260 215" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M175 115 Q200 105 225 115" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        
        {/* Floating elements */}
        <circle cx="80" cy="60" r="4" fill="#F472B6" opacity="0.7"/>
        <circle cx="320" cy="70" r="3" fill="#60A5FA" opacity="0.7"/>
        <circle cx="350" cy="200" r="5" fill="#34D399" opacity="0.7"/>
      </svg>
    ),
    
    roommate: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="roommateBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDF2F8" />
            <stop offset="100%" stopColor="#FCE7F3" />
          </linearGradient>
          <linearGradient id="roomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#roommateBg)" rx="16"/>
        
        {/* Dorm room setting */}
        <rect x="50" y="60" width="300" height="180" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" rx="8"/>
        <rect x="50" y="240" width="300" height="20" fill="#F3F4F6"/>
        
        {/* Room divider */}
        <line x1="200" y1="60" x2="200" y2="240" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5"/>
        
        {/* Left side - Student 1 */}
        <g transform="translate(125, 140)">
          {/* Bed */}
          <rect x="-40" y="20" width="80" height="40" fill="url(#roomGrad)" opacity="0.3" rx="4"/>
          <rect x="-35" y="15" width="70" height="8" fill="url(#roomGrad)" opacity="0.5" rx="4"/>
          
          {/* Student */}
          <circle cx="0" cy="0" r="20" fill="#F4A460" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-15 -10 Q0 -18 15 -10" fill="#8B4513" />
          <circle cx="-5" cy="-3" r="2" fill="#1F2937"/>
          <circle cx="5" cy="-3" r="2" fill="#1F2937"/>
          <path d="M-4 5 Q0 8 4 5" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-18" y="20" width="36" height="30" fill="#F472B6" rx="4"/>
          
          {/* Desk items */}
          <rect x="-30" y="-20" width="60" height="4" fill="#D1D5DB"/>
          <rect x="-25" y="-25" width="15" height="8" fill="#60A5FA" rx="2"/>
          <rect x="-5" y="-25" width="10" height="8" fill="#34D399" rx="2"/>
        </g>
        
        {/* Right side - Student 2 */}
        <g transform="translate(275, 140)">
          {/* Bed */}
          <rect x="-40" y="20" width="80" height="40" fill="url(#roomGrad)" opacity="0.3" rx="4"/>
          <rect x="-35" y="15" width="70" height="8" fill="url(#roomGrad)" opacity="0.5" rx="4"/>
          
          {/* Student */}
          <circle cx="0" cy="0" r="20" fill="#FDBCB4" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-15 -10 Q0 -15 15 -10" fill="#D2691E" />
          <circle cx="-5" cy="-3" r="2" fill="#1F2937"/>
          <circle cx="5" cy="-3" r="2" fill="#1F2937"/>
          <path d="M-4 5 Q0 8 4 5" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-18" y="20" width="36" height="30" fill="#60A5FA" rx="4"/>
          
          {/* Desk items */}
          <rect x="-30" y="-20" width="60" height="4" fill="#D1D5DB"/>
          <rect x="10" y="-25" width="15" height="8" fill="#FBBF24" rx="2"/>
          <rect x="-5" y="-25" width="10" height="8" fill="#F472B6" rx="2"/>
        </g>
        
        {/* Compatibility heart */}
        <g transform="translate(200, 100)">
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#EC4899" strokeWidth="3"/>
          <path d="M-8 -2 C-8 -6 -4 -10 0 -6 C4 -10 8 -6 8 -2 C8 2 0 10 0 10 C0 10 -8 2 -8 -2 Z" fill="#EC4899"/>
          <text x="0" y="20" textAnchor="middle" fill="#EC4899" fontSize="10" fontWeight="600">98%</text>
        </g>
        
        {/* Floating compatibility indicators */}
        <circle cx="100" cy="80" r="3" fill="#34D399"/>
        <text x="100" y="75" textAnchor="middle" fill="#059669" fontSize="8">Study</text>
        
        <circle cx="300" cy="80" r="3" fill="#34D399"/>
        <text x="300" y="75" textAnchor="middle" fill="#059669" fontSize="8">Sleep</text>
        
        <circle cx="150" cy="200" r="3" fill="#34D399"/>
        <text x="150" y="195" textAnchor="middle" fill="#059669" fontSize="8">Clean</text>
        
        <circle cx="250" cy="200" r="3" fill="#34D399"/>
        <text x="250" y="195" textAnchor="middle" fill="#059669" fontSize="8">Social</text>
      </svg>
    ),
    
    events: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="eventsBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EEF2FF" />
            <stop offset="100%" stopColor="#E0E7FF" />
          </linearGradient>
          <linearGradient id="stageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#eventsBg)" rx="16"/>
        
        {/* Campus event stage */}
        <rect x="80" y="60" width="240" height="120" fill="url(#stageGrad)" opacity="0.2" rx="8"/>
        <rect x="90" y="70" width="220" height="8" fill="url(#stageGrad)" opacity="0.6" rx="4"/>
        
        {/* Stage elements */}
        <rect x="180" y="90" width="40" height="60" fill="url(#stageGrad)" opacity="0.4" rx="4"/>
        <circle cx="200" cy="110" r="8" fill="#FFFFFF"/>
        <rect x="195" y="125" width="10" height="15" fill="url(#stageGrad)"/>
        
        {/* Audience - diverse students */}
        {/* Row 1 */}
        <g transform="translate(120, 200)">
          <circle cx="0" cy="0" r="12" fill="#F4A460" stroke="#8B5CF6" strokeWidth="1"/>
          <path d="M-8 -5 Q0 -10 8 -5" fill="#8B4513" />
          <rect x="-8" y="12" width="16" height="15" fill="#F472B6" rx="2"/>
        </g>
        
        <g transform="translate(160, 200)">
          <circle cx="0" cy="0" r="12" fill="#FDBCB4" stroke="#8B5CF6" strokeWidth="1"/>
          <path d="M-8 -5 Q0 -8 8 -5" fill="#D2691E" />
          <rect x="-8" y="12" width="16" height="15" fill="#60A5FA" rx="2"/>
        </g>
        
        <g transform="translate(200, 200)">
          <circle cx="0" cy="0" r="12" fill="#D2B48C" stroke="#8B5CF6" strokeWidth="1"/>
          <path d="M-8 -5 Q0 -8 8 -5" fill="#2D1B69" />
          <rect x="-8" y="12" width="16" height="15" fill="#34D399" rx="2"/>
        </g>
        
        <g transform="translate(240, 200)">
          <circle cx="0" cy="0" r="12" fill="#DEB887" stroke="#8B5CF6" strokeWidth="1"/>
          <path d="M-8 -5 Q0 -10 8 -5" fill="#654321" />
          <rect x="-8" y="12" width="16" height="15" fill="#FBBF24" rx="2"/>
        </g>
        
        <g transform="translate(280, 200)">
          <circle cx="0" cy="0" r="12" fill="#FED7AA" stroke="#8B5CF6" strokeWidth="1"/>
          <path d="M-8 -5 Q0 -10 8 -5" fill="#1F2937" />
          <rect x="-8" y="12" width="16" height="15" fill="#A78BFA" rx="2"/>
        </g>
        
        {/* Row 2 - slightly behind */}
        <g transform="translate(140, 230)">
          <circle cx="0" cy="0" r="10" fill="#F4A460" stroke="#8B5CF6" strokeWidth="1"/>
          <rect x="-6" y="10" width="12" height="12" fill="#EC4899" rx="2"/>
        </g>
        
        <g transform="translate(180, 230)">
          <circle cx="0" cy="0" r="10" fill="#FDBCB4" stroke="#8B5CF6" strokeWidth="1"/>
          <rect x="-6" y="10" width="12" height="12" fill="#10B981" rx="2"/>
        </g>
        
        <g transform="translate(220, 230)">
          <circle cx="0" cy="0" r="10" fill="#D2B48C" stroke="#8B5CF6" strokeWidth="1"/>
          <rect x="-6" y="10" width="12" height="12" fill="#F59E0B" rx="2"/>
        </g>
        
        <g transform="translate(260, 230)">
          <circle cx="0" cy="0" r="10" fill="#DEB887" stroke="#8B5CF6" strokeWidth="1"/>
          <rect x="-6" y="10" width="12" height="12" fill="#3B82F6" rx="2"/>
        </g>
        
        {/* Event notifications floating */}
        <g transform="translate(50, 100)">
          <rect x="0" y="0" width="60" height="40" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" rx="6"/>
          <circle cx="12" cy="12" r="4" fill="#F59E0B"/>
          <rect x="20" y="8" width="30" height="3" fill="#D1D5DB" rx="1"/>
          <rect x="20" y="16" width="20" height="3" fill="#D1D5DB" rx="1"/>
          <text x="30" y="32" textAnchor="middle" fill="#8B5CF6" fontSize="8">Concert</text>
        </g>
        
        <g transform="translate(330, 120)">
          <rect x="0" y="0" width="60" height="40" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" rx="6"/>
          <circle cx="12" cy="12" r="4" fill="#10B981"/>
          <rect x="20" y="8" width="30" height="3" fill="#D1D5DB" rx="1"/>
          <rect x="20" y="16" width="25" height="3" fill="#D1D5DB" rx="1"/>
          <text x="30" y="32" textAnchor="middle" fill="#8B5CF6" fontSize="8">Study Group</text>
        </g>
        
        {/* Music notes */}
        <g fill="#8B5CF6" opacity="0.6">
          <circle cx="150" cy="50" r="2"/>
          <rect x="152" y="45" width="1" height="10"/>
          <path d="M153 45 Q158 42 158 47" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
          
          <circle cx="250" cy="40" r="2"/>
          <rect x="252" y="35" width="1" height="10"/>
          <path d="M253 35 Q258 32 258 37" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
        </g>
      </svg>
    ),
    
    hero: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#heroBg)" rx="16"/>
        
        {/* Campus buildings silhouette */}
        <rect x="50" y="180" width="40" height="80" fill="url(#heroGrad)" opacity="0.3" rx="4"/>
        <rect x="100" y="160" width="35" height="100" fill="url(#heroGrad)" opacity="0.4" rx="4"/>
        <rect x="145" y="170" width="30" height="90" fill="url(#heroGrad)" opacity="0.35" rx="4"/>
        <rect x="225" y="165" width="35" height="95" fill="url(#heroGrad)" opacity="0.4" rx="4"/>
        <rect x="270" y="175" width="30" height="85" fill="url(#heroGrad)" opacity="0.35" rx="4"/>
        <rect x="310" y="185" width="40" height="75" fill="url(#heroGrad)" opacity="0.3" rx="4"/>
        
        {/* Central community hub */}
        <circle cx="200" cy="120" r="50" fill="url(#heroGrad)" opacity="0.2"/>
        <circle cx="200" cy="120" r="35" fill="url(#heroGrad)" opacity="0.3"/>
        <circle cx="200" cy="120" r="20" fill="url(#heroGrad)" opacity="0.4"/>
        
        {/* Students around the hub */}
        {/* Student 1 - Top left */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="16" fill="#F4A460" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -12 10 -6" fill="#8B4513" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-2 3 Q0 5 2 3" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#F472B6" rx="3"/>
        </g>
        
        {/* Student 2 - Top right */}
        <g transform="translate(280, 80)">
          <circle cx="0" cy="0" r="16" fill="#FDBCB4" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -10 10 -6" fill="#D2691E" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-2 3 Q0 5 2 3" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#60A5FA" rx="3"/>
        </g>
        
        {/* Student 3 - Bottom left */}
        <g transform="translate(120, 180)">
          <circle cx="0" cy="0" r="16" fill="#D2B48C" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -10 10 -6" fill="#2D1B69" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-2 3 Q0 5 2 3" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#34D399" rx="3"/>
        </g>
        
        {/* Student 4 - Bottom right */}
        <g transform="translate(280, 180)">
          <circle cx="0" cy="0" r="16" fill="#DEB887" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -12 10 -6" fill="#654321" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-2 3 Q0 5 2 3" stroke="#8B5CF6" strokeWidth="1" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#FBBF24" rx="3"/>
        </g>
        
        {/* Central figure */}
        <g transform="translate(200, 120)">
          <circle cx="0" cy="0" r="18" fill="#FED7AA" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M-12 -8 Q0 -15 12 -8" fill="#1F2937" />
          <circle cx="-4" cy="-2" r="1.5" fill="#1F2937"/>
          <circle cx="4" cy="-2" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#8B5CF6" strokeWidth="1.5" fill="none"/>
          <rect x="-15" y="18" width="30" height="25" fill="url(#heroGrad)" rx="4"/>
        </g>
        
        {/* Connection lines */}
        <path d="M136 96 Q168 108 184 120" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M264 96 Q232 108 216 120" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M136 164 Q168 152 184 140" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M264 164 Q232 152 216 140" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
        
        {/* Floating app icons */}
        <g transform="translate(80, 40)">
          <rect x="0" y="0" width="24" height="24" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" rx="6"/>
          <circle cx="12" cy="12" r="6" fill="url(#heroGrad)"/>
          <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
        </g>
        
        <g transform="translate(320, 40)">
          <rect x="0" y="0" width="24" height="24" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" rx="6"/>
          <rect x="6" y="6" width="12" height="12" fill="url(#heroGrad)" rx="2"/>
          <rect x="8" y="8" width="8" height="2" fill="#FFFFFF" rx="1"/>
          <rect x="8" y="12" width="6" height="2" fill="#FFFFFF" rx="1"/>
          <rect x="8" y="16" width="4" height="2" fill="#FFFFFF" rx="1"/>
        </g>
        
        {/* Decorative elements */}
        <circle cx="60" cy="120" r="3" fill="#F472B6" opacity="0.7"/>
        <circle cx="340" cy="120" r="4" fill="#60A5FA" opacity="0.7"/>
        <circle cx="200" cy="40" r="2" fill="#34D399" opacity="0.7"/>
        <circle cx="200" cy="260" r="3" fill="#FBBF24" opacity="0.7"/>
      </svg>
    ),
    
    celebration: (
      <svg viewBox="0 0 400 300" className={className}>
        <defs>
          <linearGradient id="celebrationBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#celebrationBg)" rx="16"/>
        
        {/* Sunset sky */}
        <ellipse cx="200" cy="280" rx="200" ry="40" fill="url(#sunsetGrad)" opacity="0.3"/>
        <circle cx="320" cy="80" r="30" fill="#F59E0B" opacity="0.6"/>
        
        {/* Campus celebration scene */}
        {/* Stage/platform */}
        <rect x="120" y="200" width="160" height="20" fill="url(#sunsetGrad)" opacity="0.4" rx="4"/>
        
        {/* Celebrating students */}
        {/* Student 1 - jumping */}
        <g transform="translate(150, 180)">
          <circle cx="0" cy="0" r="16" fill="#F4A460" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -12 10 -6" fill="#8B4513" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-4 4 Q0 8 4 4" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#8B5CF6" rx="3"/>
          {/* Arms up */}
          <rect x="-20" y="10" width="8" height="15" fill="#F4A460" rx="4" transform="rotate(-30)"/>
          <rect x="12" y="10" width="8" height="15" fill="#F4A460" rx="4" transform="rotate(30)"/>
        </g>
        
        {/* Student 2 - cheering */}
        <g transform="translate(200, 175)">
          <circle cx="0" cy="0" r="16" fill="#FDBCB4" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -10 10 -6" fill="#D2691E" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <ellipse cx="0" cy="4" rx="3" ry="2" fill="#1F2937"/>
          <rect x="-12" y="16" width="24" height="20" fill="#F472B6" rx="3"/>
          {/* Arms up */}
          <rect x="-18" y="8" width="8" height="15" fill="#FDBCB4" rx="4" transform="rotate(-45)"/>
          <rect x="10" y="8" width="8" height="15" fill="#FDBCB4" rx="4" transform="rotate(45)"/>
        </g>
        
        {/* Student 3 - dancing */}
        <g transform="translate(250, 180)">
          <circle cx="0" cy="0" r="16" fill="#D2B48C" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M-10 -6 Q0 -10 10 -6" fill="#2D1B69" />
          <circle cx="-3" cy="-1" r="1.5" fill="#1F2937"/>
          <circle cx="3" cy="-1" r="1.5" fill="#1F2937"/>
          <path d="M-3 4 Q0 7 3 4" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
          <rect x="-12" y="16" width="24" height="20" fill="#34D399" rx="3"/>
          {/* One arm up, one down */}
          <rect x="-18" y="12" width="8" height="15" fill="#D2B48C" rx="4" transform="rotate(-20)"/>
          <rect x="10" y="18" width="8" height="15" fill="#D2B48C" rx="4" transform="rotate(20)"/>
        </g>
        
        {/* Confetti */}
        <g fill="#F59E0B" opacity="0.8">
          <rect x="100" y="60" width="4" height="4" rx="1" transform="rotate(45)"/>
          <rect x="180" y="50" width="3" height="3" rx="1" transform="rotate(30)"/>
          <rect x="260" y="70" width="4" height="4" rx="1" transform="rotate(60)"/>
          <rect x="320" y="90" width="3" height="3" rx="1" transform="rotate(15)"/>
        </g>
        
        <g fill="#F97316" opacity="0.8">
          <rect x="120" y="40" width="3" height="3" rx="1" transform="rotate(20)"/>
          <rect x="200" y="30" width="4" height="4" rx="1" transform="rotate(75)"/>
          <rect x="280" y="50" width="3" height="3" rx="1" transform="rotate(45)"/>
          <rect x="340" y="110" width="4" height="4" rx="1" transform="rotate(90)"/>
        </g>
        
        <g fill="#EF4444" opacity="0.8">
          <rect x="80" y="80" width="3" height="3" rx="1" transform="rotate(10)"/>
          <rect x="160" y="70" width="4" height="4" rx="1" transform="rotate(55)"/>
          <rect x="240" y="40" width="3" height="3" rx="1" transform="rotate(80)"/>
          <rect x="300" y="60" width="4" height="4" rx="1" transform="rotate(25)"/>
        </g>
        
        {/* Balloons */}
        <g transform="translate(80, 120)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#8B5CF6"/>
          <line x1="0" y1="12" x2="0" y2="30" stroke="#6B7280" strokeWidth="1"/>
        </g>
        
        <g transform="translate(95, 110)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#F472B6"/>
          <line x1="0" y1="12" x2="0" y2="30" stroke="#6B7280" strokeWidth="1"/>
        </g>
        
        <g transform="translate(320, 130)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#60A5FA"/>
          <line x1="0" y1="12" x2="0" y2="30" stroke="#6B7280" strokeWidth="1"/>
        </g>
        
        {/* Success message */}
        <g transform="translate(200, 120)">
          <rect x="-40" y="-15" width="80" height="30" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" rx="8"/>
          <text x="0" y="-2" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="600">Welcome to</text>
          <text x="0" y="10" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="600">GatorVibe!</text>
        </g>
      </svg>
    )
  };

  return illustrations[type];
}