
"use client"

import React, { useState, useRef, useEffect } from "react";

export interface AnimatedSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSuccess?: () => void;
  processing?: boolean;
  success?: boolean;
}

const AnimatedSubmitButton = ({
  children = "Submit",
  onSuccess,
  processing = false,
  success = false,
  ...props
}: AnimatedSubmitButtonProps) => {
  const [isProcessing, setIsProcessing] = useState(processing);
  const [isSuccess, setIsSuccess] = useState(success);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Handle click event
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isProcessing || isSuccess) return;
    
    // Add splash effect
    if (splashRef.current) {
      splashRef.current.style.animation = 'splash-animation 0.6s forwards';
      setTimeout(() => {
        if (splashRef.current) splashRef.current.style.animation = '';
      }, 600);
    }
    
    // Add processing state
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Create particles
      createSuccessParticles();
      
      if (onSuccess) onSuccess();
      
      // Reset button after animation
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 1500);
    
    // Call the original onClick
    if (props.onClick) props.onClick(e);
  };
  
  // Create success particles
  const createSuccessParticles = () => {
    if (!buttonRef.current || !particlesRef.current) return;
    
    const btnRect = buttonRef.current.getBoundingClientRect();
    const centerX = btnRect.width / 2;
    const centerY = btnRect.height / 2;
    
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size
      const size = Math.random() * 6 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color
      const colors = ['#10B981', '#60a5fa', '#3b82f6', '#4f46e5'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      // Random rotation
      const rotation = Math.random() * 360;
      particle.style.transform = `rotate(${rotation}deg)`;
      
      // Set initial position
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      
      particlesRef.current.appendChild(particle);
      
      // Animation with physics
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 80 + 40;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let posX = centerX;
      let posY = centerY;
      let opacity = 1;
      const gravity = 0.7;
      let vy2 = vy;
      
      function updateParticle() {
        posX += vx * 0.1;
        vy2 += gravity;
        posY += vy2 * 0.1;
        opacity -= 0.02;
        
        if (opacity <= 0) {
          particle.remove();
          return;
        }
        
        particle.style.opacity = String(opacity);
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        requestAnimationFrame(updateParticle);
      }
      
      requestAnimationFrame(updateParticle);
    }
  };
  
  return (
    <div className="magnetic-btn relative inline-block">
      <div className="button-container relative z-[1]">
        <button
          ref={buttonRef}
          className={`submit-button relative flex items-center justify-center w-[180px] h-[54px] p-0 bg-blue-500 border-none rounded-[4px] text-white text-base font-medium tracking-wider cursor-pointer overflow-hidden transition-all duration-600 ${
            isProcessing ? "processing w-[54px] rounded-[27px]" : ""
          } ${
            isSuccess ? "success w-[54px] rounded-[27px] bg-emerald-500" : ""
          }`}
          onClick={handleClick}
          {...props}
        >
          <div ref={splashRef} className="splash absolute top-0 left-0 w-full h-full bg-white/10 rounded-[4px] scale-0 opacity-0 z-[1]"></div>
          <div className="button-content relative flex items-center justify-center w-full h-full z-[2] transform-gpu">
            <div className={`button-label-container overflow-hidden h-[20px] transition-all ${isProcessing || isSuccess ? "opacity-0 transform translate-x-[-20px]" : ""}`}>
              <div className="button-label flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]">
                <span className="label-text h-[20px] flex items-center justify-center">
                  {typeof children === 'string' ? children : 'Submit'}
                </span>
                <span className="label-text h-[20px] flex items-center justify-center">Ready</span>
              </div>
            </div>
            <div className={`btn-icon flex items-center justify-center w-[24px] h-[24px] ml-2 transition-transform duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isSuccess || isProcessing ? "opacity-0" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`loader absolute w-[24px] h-[24px] border-2 border-white/20 rounded-[50%] border-t-white opacity-0 scale-0 transition-all duration-300 ${isProcessing ? "opacity-100 scale-100 animate-spin" : ""}`}></div>
            <div className={`success-icon absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 pointer-events-none ${isSuccess ? "opacity-100 scale-100" : ""}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 7L9.5 15.5L6 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div ref={particlesRef} className="particles absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"></div>
    </div>
  );
};

export { AnimatedSubmitButton };
