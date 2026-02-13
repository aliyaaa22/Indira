
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 100 115" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* The Dual-Tone Background Box */}
      <rect x="15" y="10" width="35" height="70" fill="#00a8b5" /> {/* Teal Left */}
      <rect x="50" y="10" width="35" height="70" fill="#003366" /> {/* Navy Right */}

      {/* SCES Vertical Text */}
      <text 
        transform="rotate(-90 12 25)" 
        x="12" 
        y="25" 
        fill="#94a3b8" 
        style={{ fontSize: '5px', fontWeight: '600', fontFamily: 'sans-serif' }}
      >
        SCES
      </text>

      {/* TM Text */}
      <text 
        x="80" 
        y="8" 
        fill="#64748b" 
        style={{ fontSize: '5px', fontWeight: '600', fontFamily: 'sans-serif' }}
      >
        TM
      </text>

      {/* The Stylized 'U' Symbol */}
      <path 
        d="M28 28V48C28 60 38 70 50 70C62 70 72 60 72 48V28H62V48C62 55 57 60 50 60C43 60 38 55 38 48V28H28Z" 
        fill="white" 
      />

      {/* The Stylized 'i' Symbol (Vertical Bar) */}
      <rect x="46" y="38" width="8" height="22" fill="white" />
      
      {/* The Yellow Dot for 'i' */}
      <circle cx="50" cy="25" r="7" fill="#ffcc00" />

      {/* "INDIRA" Text - Matching font style from image */}
      <text 
        x="50" 
        y="95" 
        textAnchor="middle" 
        fill="#003366" 
        style={{ fontSize: '14px', fontWeight: '900', fontFamily: 'Georgia, serif', letterSpacing: '1px' }}
      >
        INDIRA
      </text>

      {/* "UNIVERSITY" Text */}
      <text 
        x="50" 
        y="108" 
        textAnchor="middle" 
        fill="#00a8b5" 
        style={{ fontSize: '10px', fontWeight: '700', fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}
      >
        UNIVERSITY
      </text>
    </svg>
  );
};

export default Logo;
