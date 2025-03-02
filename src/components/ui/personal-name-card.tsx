import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Linkedin, Mail, Github, ExternalLink, User } from 'lucide-react';

export const PersonalNameCard = () => {
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
      className={`relative w-full max-w-xs rounded-2xl overflow-hidden transition-all duration-700 ease-out transform scale-75 scale-y-[0.7] ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'shadow-xl shadow-indigo-200/50' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card top color band */}
      <div className="h-20 bg-gradient-to-r from-violet-500 to-indigo-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-6 -top-10 w-24 h-24 rounded-full bg-white/10"></div>
        <div className="absolute left-10 -bottom-6 w-12 h-12 rounded-full bg-white/10"></div>
      </div>
      
      {/* Card body with white background */}
      <div className="bg-white relative z-10 p-6 pb-4">
        {/* Profile image */}
        <div className="mx-auto -mt-16 mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md transition-all duration-500 ease-out transform hover:scale-105">
          <div className="w-full h-full bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
            <User size={36} className="text-indigo-500" />
          </div>
        </div>
        
        {/* Name & title */}
        <div className="text-center mb-6">
          <h2 className="text-gray-800 text-xl font-semibold mb-1">
            Alex Kim
          </h2>
          <p className="text-indigo-500 text-sm font-medium">
            Product Designer
          </p>
        </div>
        
        {/* Bio text */}
        <div className="overflow-hidden mb-6">
          <p 
            className={`text-center text-gray-600 text-sm transition-all duration-500 ease-out transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Creating meaningful digital experiences through thoughtful design and intuitive interfaces.
          </p>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-3">
          {[
            { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:bg-blue-500", delay: 100 },
            { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-pink-500", delay: 150 },
            { icon: <Github className="w-5 h-5" />, label: "Github", color: "hover:bg-gray-800", delay: 200 },
            { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700", delay: 250 },
            { icon: <Mail className="w-5 h-5" />, label: "Email", color: "hover:bg-red-500", delay: 300 }
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              aria-label={item.label}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 ${item.color} hover:text-white transition-all duration-300 transform ${
                isHovered 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-2 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: isHovered ? `${item.delay}ms` : '0ms' }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Card footer */}
      <div className="bg-gray-50">
        <button 
          className={`w-full flex items-center justify-center py-3 text-indigo-600 font-medium text-sm group transition-all duration-500 ease-out hover:bg-indigo-50 ${
            isHovered ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <span className="mr-2">View Portfolio</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Interactive border effect */}
      <div 
        className={`absolute inset-0 rounded-2xl pointer-events-none border-2 transition-all duration-500 ${
          isHovered ? 'border-indigo-300/50 scale-[0.99] opacity-100' : 'border-transparent scale-[0.98] opacity-0'
        }`}
      ></div>
    </div>
  );
}; 