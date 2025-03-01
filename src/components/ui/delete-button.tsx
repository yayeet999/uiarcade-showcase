import React, { useState, useEffect } from 'react';

const DeleteButton = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    let timer;
    
    if (isConfirming && !isDeleting) {
      // Auto-reset after 3 seconds if not confirmed
      timer = setTimeout(() => {
        setIsConfirming(false);
      }, 3000);
    }
    
    return () => clearTimeout(timer);
  }, [isConfirming, isDeleting]);
  
  useEffect(() => {
    let progressTimer;
    
    if (isDeleting) {
      // Simulate delete progress with natural easing
      progressTimer = setInterval(() => {
        setProgress(prev => {
          const increment = Math.max(1, 8 - Math.floor(prev / 12)); // Starts faster, slows down
          const newValue = prev + increment;
          
          if (newValue >= 100) {
            clearInterval(progressTimer);
            setIsCompleted(true);
            
            setTimeout(() => {
              // Reset button after showing completion state
              setIsDeleting(false);
              setIsConfirming(false);
              setProgress(0);
              
              // Delay resetting the completion state for smooth transition
              setTimeout(() => {
                setIsCompleted(false);
              }, 150);
            }, 800);
            return 100;
          }
          return newValue;
        });
      }, 40);
    }
    
    return () => clearInterval(progressTimer);
  }, [isDeleting]);
  
  const handleClick = () => {
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }
    
    if (!isDeleting) {
      // Start deletion process
      setIsDeleting(true);
    }
  };
  
  return (
    <div className="flex items-center justify-center p-8 h-full">
      <button
        onClick={handleClick}
        disabled={isDeleting}
        className={`
          group
          relative
          flex
          items-center
          justify-center
          gap-2
          px-4
          py-2
          rounded-md
          font-medium
          text-sm
          transition-all
          duration-300
          ease-out
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          overflow-hidden
          min-w-24
          ${isDeleting || isCompleted
            ? 'bg-red-600 text-white' 
            : isConfirming 
              ? 'bg-red-500 text-white focus:ring-red-500' 
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-600 hover:border-red-200 focus:ring-gray-500'}
          ${isConfirming && !isDeleting ? 'shadow-md' : 'shadow-sm hover:shadow'}
        `}
      >
        {/* Progress overlay with improved transition */}
        {isDeleting && (
          <div 
            className="absolute inset-0 bg-white bg-opacity-10"
            style={{ 
              width: `${progress}%`, 
              transition: 'width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              left: 0,
              top: 0,
              bottom: 0,
              borderRight: progress < 100 ? '1px solid rgba(255,255,255,0.2)' : 'none'
            }}
          />
        )}
        
        {/* Icon changes based on state with smoother transitions */}
        <span className="relative flex items-center justify-center w-5 h-5 transition-transform duration-300">
          {!isDeleting && !isCompleted && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`absolute transition-all duration-300 ease-out
                ${isConfirming ? 'scale-110 animate-pulse' : 'scale-100 group-hover:scale-110 group-hover:text-red-500'}`}
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          )}
          
          {isDeleting && !isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6-8.5"></path>
            </svg>
          )}
          
          {isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute text-white animate-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </span>
        
        {/* Text changes based on state with smoother transitions */}
        <span className="relative z-10 transition-all duration-300 ease-out whitespace-nowrap">
          {isCompleted 
            ? 'Deleted!'
            : isDeleting 
              ? 'Deleting...' 
              : isConfirming 
                ? 'Confirm' 
                : 'Delete'}
        </span>
      </button>
    </div>
  );
};

export default DeleteButton; 