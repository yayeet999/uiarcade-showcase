import React, { useState, useRef, useEffect } from 'react';

export const RangeSlider: React.FC = () => {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // For sliding animation when value changes
  const [slideAnimation, setSlideAnimation] = useState(false);
  
  useEffect(() => {
    setSlideAnimation(true);
    const timer = setTimeout(() => setSlideAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [value]);
  
  // Handle keyboard controls for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setValue(prev => Math.min(100, prev + 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setValue(prev => Math.max(0, prev - 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setValue(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setValue(100);
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      setValue(prev => Math.min(100, prev + 10));
    } else if (e.key === 'PageDown') {
      e.preventDefault();
      setValue(prev => Math.max(0, prev - 10));
    }
  };
  
  const [requestAnimationId, setRequestAnimationId] = useState<number | null>(null);
  
  // Use requestAnimationFrame for smoother dragging
  const startSmoothTracking = (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if (requestAnimationId) {
      cancelAnimationFrame(requestAnimationId);
    }
    
    const trackMouse = () => {
      if (isDragging) {
        updateValueFromEvent(e);
        setRequestAnimationId(requestAnimationFrame(trackMouse));
      }
    };
    
    setRequestAnimationId(requestAnimationFrame(trackMouse));
  };
  
  useEffect(() => {
    return () => {
      if (requestAnimationId) {
        cancelAnimationFrame(requestAnimationId);
      }
    };
  }, [requestAnimationId]);
  
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent default to avoid text selection during drag
    setIsDragging(true);
    setShowTooltip(true);
    
    // Calculate value immediately on click
    updateValueFromEvent(e);
    
    // Start smooth tracking
    startSmoothTracking(e);
    
    // Add event listeners to window to track drag and release
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);
  };
  
  const updateValueFromEvent = (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'clientX' in e 
      ? e.clientX 
      : ('touches' in e && e.touches[0]) 
        ? e.touches[0].clientX 
        : 0;
    const offsetX = clientX - rect.left;
    
    // Calculate exact percentage (not rounded) for smoother movement
    const exactPercentage = (offsetX / rect.width) * 100;
    
    // Clamp between 0-100 and limit to integers
    const newValue = Math.max(0, Math.min(100, Math.round(exactPercentage)));
    
    if (newValue !== value) {
      setValue(newValue);
    }
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      startSmoothTracking(e);
    }
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling when dragging
      startSmoothTracking(e);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (requestAnimationId) {
      cancelAnimationFrame(requestAnimationId);
      setRequestAnimationId(null);
    }
    
    setTimeout(() => {
      if (!isHovering) setShowTooltip(false);
    }, 1000);
    
    // Remove event listeners
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleMouseUp);
  };
  
  // Handle clicks directly on the track
  const handleTrackClick = (e: React.MouseEvent) => {
    updateValueFromEvent(e);
  };
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-6 touch-none">
      <div 
        className="relative h-10 w-full"
        ref={sliderRef}
        onClick={handleTrackClick}
        onMouseEnter={() => {
          setIsHovering(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          if (!isDragging) setShowTooltip(false);
        }}
        onTouchStart={() => {
          setIsHovering(true);
          setShowTooltip(true);
        }}
      >
        {/* Track background - light gray */}
        <div className="absolute inset-0 h-4 top-3 bg-gray-200 rounded-full"></div>
        
        {/* Filled track with animated stripes */}
        <div 
          className="absolute h-4 top-3 left-0 rounded-full overflow-hidden"
          style={{ 
            width: `${value}%`,
            transition: 'width 0.1s linear'
          }}
        >
          <div 
            className="w-full h-full bg-blue-500 relative"
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)',
              backgroundSize: '16px 16px',
              animation: 'slideStripes 1s linear infinite'
            }}
          ></div>
        </div>
        
        {/* Thumb */}
        <div
          className={`absolute h-8 w-8 bg-white rounded-full top-1 -ml-4 transform cursor-grab ${
            isDragging ? 'cursor-grabbing scale-110' : ''
          } ${
            isHovering && !isDragging ? 'scale-105' : ''
          } shadow-md transition-all duration-150`}
          style={{ 
            left: `${value}%`,
            transition: isDragging ? 'none' : 'left 0.1s linear, transform 0.15s ease, box-shadow 0.15s ease',
            boxShadow: isDragging 
              ? '0 0 0 5px rgba(59, 130, 246, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)' 
              : isHovering 
                ? '0 0 0 3px rgba(59, 130, 246, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)'
                : '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
        >
          {/* Inner glow effect when active */}
          {isDragging && (
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
          )}
        </div>
        
        {/* Tooltip */}
        {showTooltip && (
          <div
            className={`absolute -top-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-90 transform -translate-x-1/2 transition-opacity duration-200 ${
              isDragging || isHovering ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ left: `${value}%` }}
          >
            {value}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        )}
      </div>
      
      {/* Native range input (hidden, for accessibility) */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="sr-only"
        aria-label="Slider"
      />
      
      {/* Add CSS for the animated stripes */}
      <style>
        {`
          @keyframes slideStripes {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 16px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RangeSlider; 