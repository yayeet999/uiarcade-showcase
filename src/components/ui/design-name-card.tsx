import React, { useState, useEffect } from 'react';
import { Instagram, Github, Mail } from 'lucide-react';

export const DesignNameCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`relative w-full max-w-sm rounded-xl overflow-hidden transition-all duration-700 ease-out transform scale-75 scale-y-[0.7] ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top 40% - Profile Image Area */}
      <div className="relative h-64 bg-gradient-to-r from-teal-500 to-cyan-400 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 60%, rgba(255, 255, 255, 0.2) 0%, transparent 25%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 20%)'
             }}>
        </div>
        
        {/* Profile image centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-36 h-36 rounded-full border-4 border-white/30 overflow-hidden transition-all duration-500 ease-out transform ${isHovered ? 'scale-95 opacity-60' : 'scale-100'}`}>
            <div className="w-full h-full bg-white flex items-center justify-center">
              <span className="text-4xl font-light text-teal-600">JD</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom content area */}
      <div className="bg-white h-48 relative">
        {/* Content that appears on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          {/* Name with reveal */}
          <h2 
            className={`text-gray-800 text-2xl font-medium mb-2 transition-all duration-500 transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
          >
            Jane Doe
          </h2>
          
          {/* Title with reveal */}
          <p 
            className={`text-teal-600 text-lg font-medium mb-6 transition-all duration-500 transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isHovered ? '150ms' : '0ms' }}
          >
            UI/UX Designer
          </p>
          
          {/* Social icons */}
          <div className="flex space-x-8">
            {[
              { icon: <Instagram size={24} />, label: "Instagram", delay: 250 },
              { icon: <Github size={24} />, label: "Github", delay: 300 },
              { icon: <Mail size={24} />, label: "Email", delay: 350 }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                aria-label={item.label}
                className={`flex items-center justify-center w-12 h-12 rounded-full text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 transform ${
                  isHovered 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isHovered ? `${item.delay}ms` : '0ms' }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 