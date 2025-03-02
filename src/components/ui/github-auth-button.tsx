import React, { useState } from 'react';

interface GitHubAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const GitHubAuthButton: React.FC<GitHubAuthButtonProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://github.com/login/oauth/authorize"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:bg-gray-900 group-hover:shadow-lg group-hover:shadow-teal-500/20">
        {/* GitHub icon */}
        <svg 
          className={`mr-2.5 transition-all duration-700 ${isHovered ? 'rotate-[360deg]' : ''}`} 
          width="22" 
          height="22" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill={isHovered ? '#10B981' : '#FFFFFF'}
            className="transition-all duration-500"
          />
        </svg>
        
        {/* Text container with individual letters for animation */}
        <div className="flex items-center overflow-hidden h-6">
          <div className="flex space-x-0.5 text-white font-medium text-sm tracking-wide">
            {["C", "o", "n", "t", "i", "n", "u", "e", " ", "w", "i", "t", "h", " ", "G", "i", "t", "H", "u", "b"].map((letter, index) => (
              <span 
                key={index} 
                className={`transition-all duration-300 transform ${
                  isHovered 
                    ? 'translate-y-0 opacity-100' 
                    : index < 15 ? 'translate-y-8 opacity-0' : 'opacity-100'
                }`}
                style={{ 
                  transitionDelay: isHovered 
                    ? `${50 + (index * 20)}ms` 
                    : `${(20 - index) * 20}ms` 
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
        </div>
        
        {/* Arrow icon */}
        <svg 
          className={`ml-2 transition-all duration-500 ${
            isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'
          }`} 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      
      {/* Background glow effect */}
      <div 
        className={`absolute inset-0 rounded-lg bg-teal-500 blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-20 scale-110' : 'opacity-0 scale-100'
        }`}
      ></div>
      
      {/* Particle effects */}
      {isHovered && (
        <>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400/30 [animation:ping-slow_3s_infinite]"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-teal-400/20 [animation:ping-slower_2.5s_infinite_0.5s]"></div>
          <div className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-teal-300/40 [animation:ping-slowest_4s_infinite_1s]"></div>
        </>
      )}
    </button>
  );
}; 