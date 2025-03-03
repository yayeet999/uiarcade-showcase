import React, { useState } from 'react';

export const NightDayToggle2: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  
  const toggleSwitch = () => setIsOn(!isOn);
  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div 
        onClick={toggleSwitch}
        className={`relative w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ease-in-out ${
          isOn ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-gradient-to-r from-amber-300 to-yellow-400'
        }`}
      >
        {/* Night indicator (moon) */}
        <div className={`absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 ${isOn ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white opacity-0"></div>
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
        
        {/* Improved Day indicator (sun) */}
        <div className={`absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 ${isOn ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>
          <div className="text-white opacity-0"></div>
        </div>

        {/* Toggle Button with enhanced sun rays */}
        <div
          className={`absolute w-8 h-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out ${
            isOn ? 'translate-x-10 bg-white' : 'translate-x-0 bg-white'
          } flex items-center justify-center overflow-hidden`}
        >
          {/* Enhanced Sun design for day mode */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isOn ? 'opacity-0' : 'opacity-100'}`}>
            {/* Base sun circle */}
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full" />
            
            {/* Primary rays */}
            <div className="absolute w-full h-full">
              {/* Long rays */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 scale-x-125" />
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-300 transform -translate-x-1/2 scale-y-125" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-45 scale-x-110" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-45 scale-x-110" />
              
              {/* Short rays */}
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-22.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-22.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-67.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-67.5 scale-x-105" />
            </div>
            
            {/* Center highlight */}
            <div className="absolute inset-2 bg-yellow-200 rounded-full opacity-60" />
          </div>
          
          {/* Moon surface for night mode */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isOn ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-blue-100 rounded-full" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-200 rounded-full opacity-70" />
            <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-70" />
            <div className="absolute top-3 left-2 w-1 h-1 bg-blue-200 rounded-full opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightDayToggle2; 