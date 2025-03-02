import React, { useState } from 'react';

interface AppleAuthButtonProps {
  className?: string;
}

export const AppleAuthButton = ({ className }: AppleAuthButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`relative flex items-center justify-center w-64 py-3 px-4 rounded-lg transition-all duration-300 ${
        isHovered ? 'bg-gray-800' : 'bg-black'
      } ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      {/* Apple logo */}
      <div className={`mr-3 transition-all duration-300 ${isHovered ? 'transform scale-125' : ''}`}>
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 text-white" 
          fill="currentColor"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </div>
      
      {/* Text with letter spacing animation */}
      <span 
        className={`font-medium text-base text-white transition-all duration-300 ${
          isHovered ? 'tracking-wider transform translate-x-1' : ''
        }`}
      >
        Sign in with Apple
      </span>
      
      {/* Animated border */}
      <div className={`absolute inset-0 border-2 rounded-lg transition-all duration-300 ${
        isHovered ? 'border-white opacity-30' : 'border-transparent opacity-0'
      }`}></div>
    </button>
  );
}; 