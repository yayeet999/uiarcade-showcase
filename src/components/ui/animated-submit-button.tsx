import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const AnimatedSubmitButton = React.forwardRef<HTMLButtonElement, AnimatedSubmitButtonProps>(
  ({ className, ...props }, ref) => {
    const submitBtnRef = useRef<HTMLButtonElement>(null);
    const splashRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const magneticBtnRef = useRef<HTMLDivElement>(null);
    const customCursorRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      const submitBtn = submitBtnRef.current;
      const splash = splashRef.current;
      const particles = particlesRef.current;

      if (!submitBtn || !splash || !particles) return;

      if (submitBtn.classList.contains('processing') || submitBtn.classList.contains('success')) {
        return;
      }

      if (props.onClick) {
        props.onClick(e);
      }

      // Add splash effect
      splash.style.animation = 'splash-animation 0.6s forwards';
      setTimeout(() => {
        splash.style.animation = '';
      }, 600);

      // Add processing state
      submitBtn.classList.add('processing');

      // Simulate processing
      setTimeout(() => {
        submitBtn.classList.remove('processing');
        submitBtn.classList.add('success');

        // Create particles
        const btnRect = submitBtn.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;

        // Clear existing particles
        while (particles.firstChild) {
          particles.removeChild(particles.firstChild);
        }

        for (let i = 0; i < 12; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          const size = Math.random() * 6 + 4;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;

          const colors = ['#10B981', '#60a5fa', '#3b82f6', '#4f46e5'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.backgroundColor = color;

          const rotation = Math.random() * 360;
          particle.style.transform = `rotate(${rotation}deg)`;

          particle.style.left = `${centerX}px`;
          particle.style.top = `${centerY}px`;

          particles.appendChild(particle);

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

            particle.style.opacity = opacity.toString();
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;

            requestAnimationFrame(updateParticle);
          }

          requestAnimationFrame(updateParticle);
        }

        // Reset button after animation
        setTimeout(() => {
          submitBtn.classList.remove('success');
        }, 2000);
      }, 1500);
    }, [props]);

    useEffect(() => {
      const magneticBtn = magneticBtnRef.current;
      const customCursor = customCursorRef.current;

      if (!magneticBtn || !customCursor) return;

      // Custom cursor only
      let isHovering = false;

      magneticBtn.addEventListener('mouseenter', () => {
        isHovering = true;
        customCursor.style.opacity = '1';
        customCursor.style.width = '40px';
        customCursor.style.height = '40px';
      });

      magneticBtn.addEventListener('mouseleave', () => {
        isHovering = false;
        customCursor.style.opacity = '0';
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';
      });

      // Smoothly update cursor position
      const cursorX = { current: 0, target: 0 };
      const cursorY = { current: 0, target: 0 };

      function updateCursorPosition() {
        cursorX.current += (cursorX.target - cursorX.current) * 0.15;
        cursorY.current += (cursorY.target - cursorY.current) * 0.15;

        customCursor.style.left = `${cursorX.current}px`;
        customCursor.style.top = `${cursorY.current}px`;

        requestAnimationFrame(updateCursorPosition);
      }

      const animationFrame = requestAnimationFrame(updateCursorPosition);

      const handleMouseMove = (e: MouseEvent) => {
        cursorX.target = e.clientX;
        cursorY.target = e.clientY;
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrame);
      };
    }, []);

    return (
      <>
        <div className="custom-cursor" ref={customCursorRef} />
        <div className="magnetic-btn" ref={magneticBtnRef} style={{ position: 'relative', zIndex: 50 }}>
          <div className="button-container">
            <button
              ref={submitBtnRef}
              className={cn(
                'submit-button',
                className
              )}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(e);
              }}
              {...props}
            >
              <div className="splash" ref={splashRef} />
              <div className="button-content">
                <div className="button-label-container">
                  <div className="button-label">
                    <span className="label-text">Submit</span>
                    <span className="label-text">Ready</span>
                  </div>
                </div>
                <div className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="loader" />
                <div className="success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7L9.5 15.5L6 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="particles" ref={particlesRef} style={{ position: 'fixed', pointerEvents: 'none', zIndex: 100 }} />
      </>
    );
  }
);

AnimatedSubmitButton.displayName = 'AnimatedSubmitButton'; 