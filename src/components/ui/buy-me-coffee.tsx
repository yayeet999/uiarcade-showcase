import React, { useState } from 'react';

interface BuyMeCoffeeProps {
  className?: string;
}

export const BuyMeCoffee = ({ className }: BuyMeCoffeeProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-rose-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Coffee icon with animation */}
      <div className="mb-6 flex justify-center">
        <div className={`relative text-5xl transition-transform duration-500 ${isHovered ? 'animate-bounce' : ''}`}>
          ☕
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Buy Me a Coffee</h2>
        <p className="mb-6 text-gray-600">Love my work? Support me with a coffee and help me keep going!</p>
        
        {/* Support button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`group relative overflow-hidden rounded-full bg-blue-500 px-6 py-2.5 text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg ${
            isHovered ? 'scale-105' : ''
          }`}
        >
          <span className="relative z-10 font-medium">Support $5</span>
          {/* Button shine effect */}
          <div className="absolute inset-0 z-0 translate-x-[-100%] transform bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-transform duration-500 group-hover:translate-x-[100%] group-hover:opacity-100" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 blur-xl" />

      {/* Modal/Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all">
            <div className="mb-4 text-center">
              <div className="mb-4 text-4xl">☕</div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">Confirm Support</h3>
              <p className="text-gray-600">You're about to support with $5</p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-gray-100 px-5 py-2 font-medium text-gray-600 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle payment logic here
                  setIsOpen(false);
                }}
                className="rounded-full bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 