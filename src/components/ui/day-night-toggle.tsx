import React, { useState, useEffect } from 'react';

export const DayNightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleMode = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsDarkMode(!isDarkMode);
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      <div 
        className="relative cursor-pointer group"
        onClick={toggleMode}
      >
        {/* Toggle Container */}
        <div 
          className={`w-24 h-12 rounded-full transition-colors duration-700 relative shadow-md ${
            isDarkMode ? 'bg-gray-700' : 'bg-blue-200'
          }`}
        >
          {/* Sliding Element: Sun or Moon */}
          <div 
            className={`absolute w-10 h-10 rounded-full top-1 transition-transform duration-700 ${
              isDarkMode ? 'transform translate-x-12 toggle-morph-to-moon' : 'toggle-morph-to-sun'
            }`}
            style={{
              background: isDarkMode ? '#E0E0E0' : '#FFD700',
              boxShadow: isDarkMode 
                ? '0 0 20px 5px rgba(255, 255, 255, 0.2)' 
                : '0 0 20px 5px rgba(255, 215, 0, 0.6)'
            }}
          >
            {/* Craters for moon */}
            {isDarkMode && (
              <>
                <div className="absolute w-2 h-2 rounded-full bg-gray-300 top-2 left-2 opacity-80"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-300 bottom-2 right-3 opacity-70"></div>
                <div className="absolute w-1 h-1 rounded-full bg-gray-300 top-5 right-2 opacity-60"></div>
              </>
            )}
            
            {/* Sun rays */}
            {!isDarkMode && (
              <div className="rotating absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 45}deg) translate(-50%, -50%) translateY(-7px)`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
          
          {/* Stars - only visible in dark mode */}
          {isDarkMode && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full star"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    ['--delay' as any]: Math.random() * 2
                  }}
                ></div>
              ))}
            </div>
          )}
          
          {/* Clouds - only visible in light mode */}
          {!isDarkMode && (
            <div className="clouds absolute inset-0 overflow-hidden rounded-full opacity-60">
              <div className="absolute w-4 h-2 bg-white rounded-full top-3 left-4"></div>
              <div className="absolute w-5 h-2.5 bg-white rounded-full top-6 left-14"></div>
              <div className="absolute w-3 h-1.5 bg-white rounded-full top-2 left-10"></div>
            </div>
          )}
        </div>
        
        {/* Hover Effect Ring */}
        <div 
          className={`absolute inset-0 rounded-full -m-1 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(closest-side, transparent 80%, rgba(255, 255, 255, 0.2))' 
              : 'radial-gradient(closest-side, transparent 80%, rgba(59, 130, 246, 0.2))'
          }}
        ></div>
      </div>
    </div>
  );
}; 