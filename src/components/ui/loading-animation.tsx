import React, { useState, useEffect } from 'react';

export const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Add slight delay before showing completion state
          setTimeout(() => setAnimationCompleted(true), 300);
          return 100;
        }
        return newProgress;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Card container with iOS-like appearance */}
      <div 
        className={`bg-white dark:bg-gray-800 rounded-3xl shadow-md px-10 py-12 transition-all duration-300 ${
          animationCompleted ? 'shadow-lg' : ''
        }`}
        style={{
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)'
        }}
      >
        {animationCompleted ? (
          /* Success State - iOS style checkmark */
          <div className="flex flex-col items-center success-animation">
            <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 13L9 17L19 7" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-semibold text-base">Complete</p>
          </div>
        ) : (
          /* Loading State - iOS style circular loader */
          <div className="flex flex-col items-center">
            {/* Circular progress container */}
            <div className="relative w-20 h-20 mb-4">
              {/* Track Circle */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
              </svg>
              
              {/* Progress Circle */}
              <svg 
                className="w-full h-full absolute top-0 left-0 -rotate-90" 
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * progress) / 100}
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              
              {/* Pulsing ring */}
              {progress > 0 && progress < 100 && (
                <svg 
                  className="w-full h-full absolute top-0 left-0 -rotate-90 ring-pulse" 
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#99f6e4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="290"
                    strokeDashoffset={290 - (290 * progress) / 100}
                  />
                </svg>
              )}
              
              {/* Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xl">{progress}%</span>
              </div>
            </div>
            
            {/* Simple loading text */}
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}; 