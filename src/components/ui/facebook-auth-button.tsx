import React, { useState } from 'react';
import './facebook-auth-button.css';

interface FacebookAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FacebookAuthButton: React.FC<FacebookAuthButtonProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://www.facebook.com/v13.0/dialog/oauth"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-[#1877F2] rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:shadow-lg group-hover:shadow-blue-500/30 overflow-hidden">
        {/* Facebook icon */}
        <div className={`relative z-10 transition-all duration-500 transform ${isHovered ? 'scale-110' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        
        {/* Text container */}
        <div className="relative z-10 ml-3 overflow-hidden">
          <div className="relative overflow-hidden">
            <p 
              className={`text-white font-medium text-sm tracking-wide transition-transform duration-500 transform ${
                isHovered ? 'translate-y-0' : 'translate-y-0'
              }`}
            >
              Continue with Facebook
            </p>
            <p 
              className={`absolute top-0 left-0 text-white font-medium text-sm tracking-wide transition-transform duration-500 transform ${
                isHovered ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ 
                WebkitBackgroundClip: 'text',
                backgroundImage: 'linear-gradient(to right, white, #D0E1FF, white)',
                opacity: isHovered ? 1 : 0,
                transition: 'transform 500ms, opacity 300ms'
              }}
            >
              Continue with Facebook
            </p>
          </div>
        </div>
        
        {/* Wave effect */}
        <div 
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            isHovered ? 'translate-x-0 opacity-50' : '-translate-x-full opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
          }}
        ></div>
      </div>
      
      {/* Animated background with expanding circles */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-out overflow-hidden rounded-lg ${
          isHovered ? 'bg-blue-600/80' : 'bg-blue-600/0'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        {isHovered && Array.from({ length: 3 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${(index + 1) * 20}px`,
              height: `${(index + 1) * 20}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `circleScale ${1 + index * 0.5}s infinite ease-out ${index * 200}ms`,
              opacity: isHovered ? 0.2 - index * 0.05 : 0
            }}
          ></div>
        ))}
      </div>
      
      {/* Glowing accent corner */}
      <div 
        className={`absolute -bottom-2 -right-2 w-10 h-10 bg-blue-400 rounded-full blur-md transition-opacity duration-500 ${
          isHovered ? 'opacity-40' : 'opacity-0'
        }`}
      ></div>
      
      {/* Micro-interaction dots */}
      <div 
        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-200 transition-all duration-500 ${
          isHovered ? 'opacity-70 translate-x-1' : 'opacity-0 translate-x-0'
        }`}
      ></div>
      <div 
        className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-200 transition-all duration-500 delay-100 ${
          isHovered ? 'opacity-70 -translate-y-1' : 'opacity-0 translate-y-0'
        }`}
      ></div>
    </button>
  );
};

export default FacebookAuthButton; 