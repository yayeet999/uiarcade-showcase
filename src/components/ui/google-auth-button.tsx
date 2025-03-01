import React, { useEffect, useRef } from 'react';

const GoogleAuthButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const magneticOutlineRef = useRef<HTMLDivElement>(null);
  const clickRippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const magneticOutline = magneticOutlineRef.current;
    const clickRipple = clickRippleRef.current;

    if (!button || !magneticOutline || !clickRipple) return;

    // Magnetic effect - outline follows cursor
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate position as percentage of button dimensions
      const xPercent = (x / rect.width - 0.5) * 15;
      const yPercent = (y / rect.height - 0.5) * 15;
      
      magneticOutline.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    };
    
    // Reset position when mouse leaves
    const handleMouseLeave = () => {
      magneticOutline.style.transform = 'translate(0, 0)';
    };
    
    // Click effect
    const handleClick = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      clickRipple.style.left = `${x}px`;
      clickRipple.style.top = `${y}px`;
      
      // Restart the animation
      clickRipple.style.animation = 'none';
      setTimeout(() => {
        clickRipple.style.animation = 'ripple 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards';
      }, 10);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-12">
      <button ref={buttonRef} className="google-auth-button">
        <div ref={magneticOutlineRef} className="magnetic-outline"></div>
        <div className="button-content">
          <div className="logo-container">
            <svg className="google-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="logo-particles"></div>
          </div>
          <span className="button-text">Sign in with Google</span>
        </div>
        <div className="button-background"></div>
        <div ref={clickRippleRef} className="click-ripple"></div>
      </button>
    </div>
  );
};

export default GoogleAuthButton; 