import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningSignProps {
  className?: string;
}

export const WarningSign = ({ className }: WarningSignProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className={`flex items-center justify-center ${className || ''}`}>
      <div 
        className={`w-full max-w-md transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Header with warning icon */}
          <div className="bg-red-500 py-6 flex justify-center items-center relative overflow-hidden">
            <div className="relative z-10">
              <div 
                className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AlertTriangle 
                  size={32} 
                  className={`text-white transition-all duration-300 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            </div>

            {/* Animated background effect */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/30 to-red-600/0 animate-shimmer"></div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Warning!</h2>
            <p className="text-gray-600 text-center mb-6">
              An error has occurred while creating an error report.
            </p>

            {/* Close button with hover effect */}
            <button 
              className={`relative px-10 py-2.5 rounded-full bg-red-500 text-white font-medium overflow-hidden group transition-all duration-300 ${
                isHovered ? 'shadow-md shadow-red-300' : ''
              }`}
              onClick={handleClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">CLOSE</span>
              
              {/* Button hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-full animate-shimmer"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 