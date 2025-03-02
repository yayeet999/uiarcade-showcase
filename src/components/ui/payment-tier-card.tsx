import React, { useState } from 'react';
import { Check, Trophy, ChevronRight } from 'lucide-react';

interface PaymentTierCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PaymentTierCard: React.FC<PaymentTierCardProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full max-w-sm transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div 
        className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
          isHovered 
            ? 'shadow-xl shadow-blue-500/10 scale-[1.02] -translate-y-1' 
            : 'shadow-lg'
        }`}
      >
        {/* Popular tag */}
        <div className="absolute -right-12 top-8 bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-1.5 text-white text-xs font-semibold rotate-45 transform origin-top-left shadow-md">
          POPULAR
        </div>
        
        {/* Card header */}
        <div className="pt-8 px-8 pb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Pro Plan</h3>
              <p className="text-gray-500 text-sm mt-1">For growing businesses</p>
            </div>
            <div className={`w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-blue-500 text-white scale-110' : 'text-blue-500'}`}>
              <Trophy size={20} />
            </div>
          </div>
          
          {/* Price */}
          <div className="mt-5 mb-6">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-500 ml-2">/ month</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Features */}
        <div className="px-8 pt-6 pb-8">
          <ul className="space-y-4">
            {[
              "Up to 10 team members",
              "20GB of storage",
              "Advanced analytics",
              "24/7 customer support",
              "Custom branding options"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`mr-3 mt-0.5 flex-shrink-0 transition-all duration-500 ${isHovered ? 'text-blue-500 scale-110' : 'text-blue-400'}`}>
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action button */}
        <div className="px-8 pb-8">
          <button 
            className={`relative w-full py-3.5 rounded-full font-semibold text-white transition-all duration-500 overflow-hidden group ${
              isHovered ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'bg-blue-500'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Choose Plan</span>
              <ChevronRight 
                size={18} 
                className={`ml-2 transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`} 
              />
            </span>
            
            {/* Button shine effect */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 translate-x-full [background:linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] [animation:shine_2s_infinite] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Reflection effect */}
      <div 
        className={`w-full h-[130%] absolute top-0 left-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent rounded-3xl transform rotate-180 transition-opacity duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
        style={{ 
          filter: 'blur(8px)',
          transformOrigin: 'center',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0))',
        }}
      ></div>
      
      {/* Decorative balls */}
      <div 
        className={`absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 transition-all duration-500 ${
          isHovered ? 'scale-125 opacity-70' : 'opacity-0 scale-0'
        }`}
        style={{ filter: 'blur(8px)' }}
      ></div>
      <div 
        className={`absolute -left-4 -top-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 transition-all duration-500 ${
          isHovered ? 'scale-125 opacity-70' : 'opacity-0 scale-0'
        }`}
        style={{ filter: 'blur(6px)' }}
      ></div>
    </div>
  );
}; 