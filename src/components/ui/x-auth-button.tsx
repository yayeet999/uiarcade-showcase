import React, { useState } from 'react';
import './x-auth-button.css';

interface XAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const XAuthButton: React.FC<XAuthButtonProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://twitter.com/i/oauth2/authorize"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-black rounded-lg px-5 py-3 border border-gray-800 transition-all duration-500 transform overflow-hidden group-hover:shadow-lg group-hover:shadow-white/10">
        {/* X logo container with rotation effect */}
        <div 
          className={`relative z-10 transition-all duration-700 transform ${
            isHovered ? 'rotate-[360deg] scale-110' : ''
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </div>
        
        {/* Text container */}
        <div className="relative z-10 ml-3 overflow-hidden">
          {["C", "o", "n", "t", "i", "n", "u", "e", " ", "w", "i", "t", "h", " ", "X"].map((letter, index) => (
            <span 
              key={index}
              className="inline-block text-white font-medium text-sm"
              style={{
                transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                opacity: isHovered ? 1 : 0,
                transition: `transform 500ms, opacity 300ms`,
                transitionDelay: `${index * 30}ms`,
                position: letter === " " ? "relative" : "relative",
                width: letter === " " ? "4px" : "auto"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        
        {/* Electric sparks effect */}
        {isHovered && (
          <>
            <div className="absolute z-20 top-0 left-1/4 w-px h-3 bg-blue-400 animate-spark-1"></div>
            <div className="absolute z-20 top-0 right-1/4 w-px h-2 bg-blue-400 animate-spark-2"></div>
            <div className="absolute z-20 bottom-0 left-1/3 w-px h-2.5 bg-blue-400 animate-spark-3"></div>
            <div className="absolute z-20 bottom-0 right-1/3 w-px h-1.5 bg-blue-400 animate-spark-4"></div>
          </>
        )}
      </div>
      
      {/* Background pulse effect */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-700 ease-out ${
          isHovered ? 'bg-gray-800 scale-105' : 'bg-transparent scale-100'
        }`}
      >
        {/* Pulse rings */}
        {isHovered && Array.from({ length: 3 }).map((_, index) => (
          <div 
            key={index}
            className="absolute inset-0 rounded-lg border border-white/5"
            style={{
              animation: `pulse-ring 1.5s infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Corner Highlight dots */}
      <div 
        className={`absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-60 translate-x-0.5 translate-y-0.5' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full transition-all duration-500 delay-100 ${
          isHovered ? 'opacity-60 -translate-x-0.5 -translate-y-0.5' : 'opacity-0'
        }`}
      ></div>
      
      {/* Lightning bolt trail effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <div className="lightning-path absolute top-0 right-0 bottom-0 left-0"></div>
        </div>
      )}
    </button>
  );
};

export default XAuthButton; 