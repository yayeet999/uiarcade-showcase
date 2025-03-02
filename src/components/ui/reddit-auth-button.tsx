import React, { useEffect, useRef } from 'react';
import styles from './reddit-auth-button.module.css';

interface RedditAuthButtonProps {
  className?: string;
}

export const RedditAuthButton = ({ className }: RedditAuthButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const logoContainer = logoContainerRef.current;

    if (!button || !logoContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const buttonRect = button.getBoundingClientRect();
      const logoRect = logoContainer.getBoundingClientRect();
      
      // Calculate mouse position relative to the logo center
      const logoX = logoRect.left + logoRect.width / 2;
      const logoY = logoRect.top + logoRect.height / 2;
      
      // Calculate angle based on mouse position
      const deltaX = e.clientX - logoX;
      const deltaY = e.clientY - logoY;
      
      // Limit rotation to a small range
      const maxRotation = 10;
      const rotationX = Math.max(Math.min(deltaY * 0.1, maxRotation), -maxRotation);
      const rotationY = Math.max(Math.min(deltaX * -0.1, maxRotation), -maxRotation);
      
      // Apply subtle rotation
      logoContainer.style.transform = `perspective(300px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    };

    const handleMouseLeave = () => {
      logoContainer.style.transform = 'perspective(300px) rotateX(0) rotateY(0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={buttonRef}
      className={`relative w-[250px] h-[50px] border-none rounded-[25px] bg-none cursor-pointer p-0 overflow-visible transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[3px] active:translate-y-[1px] ${className || ''}`}
    >
      <div className="relative flex items-center justify-start gap-3 w-full h-full px-5 z-[3]">
        <div 
          ref={logoContainerRef}
          className="relative w-[30px] h-[30px]"
        >
          <svg className="w-full h-full transition-transform duration-300 ease-out hover:rotate-[-5deg] hover:scale-110" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle className="transition-[fill] duration-300 ease-out fill-[#FF4500] hover:fill-[#ff5414]" cx="10" cy="10" r="10"/>
              <path className="fill-white" d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z"/>
            </g>
          </svg>
          <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            <div className={`absolute w-[3px] h-[3px] bg-[#FF4500] rounded-full top-2 left-2 ${styles.blinkAnimation}`}></div>
            <div className={`absolute w-[3px] h-[3px] bg-[#FF4500] rounded-full top-2 right-2 ${styles.blinkAnimationDelayed}`}></div>
          </div>
        </div>
        <span className="font-['IBM_Plex_Sans'] font-semibold text-[15px] text-[#1c1c1c] transition-all duration-300 ease-out">
          Continue with Reddit
        </span>
      </div>
      
      <div className="absolute inset-0 bg-white rounded-[25px] z-[1] transition-all duration-300 ease-out shadow-[0_2px_10px_rgba(255,69,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(255,69,0,0.15),0_3px_10px_rgba(0,0,0,0.08)] hover:bg-[#fffaf8] active:shadow-[0_1px_5px_rgba(255,69,0,0.1),0_1px_2px_rgba(0,0,0,0.05)]"></div>
      
      <div className="absolute -inset-5 rounded-[35px] z-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className={`absolute inset-0 rounded-[35px] border border-[rgba(255,69,0,0.1)] opacity-0 transition-all duration-500 ease-out hover:opacity-100 ${styles.pulseAnimation} ${
              i === 1 ? 'scale-[1.05] delay-0' :
              i === 2 ? 'scale-[1.1] delay-[0.05s]' :
              'scale-[1.15] delay-[0.1s]'
            }`}
            style={{
              animationDelay: `${(i - 1) * 0.4}s`
            }}
          />
        ))}
      </div>
    </button>
  );
}; 