import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './send-button.module.css';

interface SendButtonProps {
  className?: string;
}

export const SendButton = ({ className }: SendButtonProps): JSX.Element => {
  const [animationState, setAnimationState] = useState('idle');
  
  const handleClick = () => {
    if (animationState !== 'idle') return;
    
    setAnimationState('sending');
    setTimeout(() => setAnimationState('success'), 1200);
    setTimeout(() => setAnimationState('idle'), 2400);
  };
  
  return (
    <button 
      onClick={handleClick}
      disabled={animationState !== 'idle'}
      className={`relative overflow-hidden group flex items-center justify-center gap-2 px-8 py-4 
        bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full 
        shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-blue-700
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
        ${animationState === 'sending' ? 'animate-pulse' : ''}
        ${animationState === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : ''}
        ${className || ''}`}
    >
      {/* Text */}
      <span className={`font-semibold text-lg tracking-wide transition-all duration-300 ${animationState === 'sending' ? 'opacity-0 translate-y-2' : 'opacity-100'}`}>
        {animationState === 'success' ? 'Sent!' : 'Send'}
      </span>
      
      {/* Airplane Container */}
      <div className="relative w-6">
        {/* Default icon */}
        <Send 
          size={24} 
          className={`transition-all duration-300 ${animationState !== 'idle' ? 'opacity-0' : 'opacity-100'}`} 
        />
        
        {/* Flying icon */}
        <Send 
          size={24} 
          className={`absolute top-0 left-0 transition-all duration-1000 ease-out transform
            ${animationState === 'sending' 
              ? 'opacity-100 translate-x-16 -translate-y-16 scale-50 rotate-12' 
              : 'opacity-0 translate-x-0 translate-y-0 scale-100 rotate-0'}`} 
        />
        
        {/* Success Checkmark */}
        <svg 
          className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 ${animationState === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      
      {/* Loading Spinner */}
      <svg 
        className={`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 ${animationState === 'sending' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        >
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate" 
            from="0 12 12" 
            to="360 12 12" 
            dur="1s" 
            repeatCount="indefinite" 
          />
        </path>
      </svg>
      
      {/* Button Ripple Effect */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className={`absolute inset-0 transform scale-0 rounded-full bg-white opacity-30 transition-transform duration-500 ease-out ${animationState === 'sending' ? styles.rippleAnimation : ''}`}></span>
      </span>
    </button>
  );
}; 