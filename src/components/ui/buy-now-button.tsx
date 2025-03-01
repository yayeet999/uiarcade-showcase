import React, { useState } from 'react';

const BuyNowButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center p-8 h-full">
      <button 
        className={`
          group
          relative
          overflow-hidden
          rounded-full
          p-px
          font-medium
          text-base
          shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-blue-400
          transform
          transition-all
          duration-300
          ${isClicked ? 'scale-95 opacity-90' : 'scale-100'}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
        disabled={isClicked}
      >
        {/* Gradient border */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className={`
            absolute 
            inset-0 
            rounded-full
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            transition-all
            duration-300
            animate-gradient-rotate
          `}></span>
        </span>
        
        {/* Main button */}
        <span className={`
          relative
          flex
          items-center
          justify-center
          rounded-full
          py-3
          px-8
          m-0.5
          z-10
          transition-all
          duration-300
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          ${isHovering ? 'opacity-90' : 'opacity-100'}
        `}>
          {/* Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`
              h-5 
              w-5 
              mr-2
              transition-all
              duration-300
              text-white
              ${isHovering ? 'scale-110' : ''}
            `} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
          
          {/* Button text */}
          <span className={`
            font-bold
            tracking-wide
            transition-all
            duration-300
            text-white
          `}>
            Buy Now
          </span>
          
          {/* Arrow indicator */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`
              h-5 
              w-5 
              ml-2
              transition-all
              duration-300
              text-white
              ${isHovering ? 'translate-x-1' : ''}
            `} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </span>
        
        {/* Success animation overlay */}
        {isClicked && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-green-500 bg-opacity-90 rounded-full animate-success-fade text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 animate-success-check" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="ml-2 font-semibold animate-success-text">Added to Cart!</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default BuyNowButton; 