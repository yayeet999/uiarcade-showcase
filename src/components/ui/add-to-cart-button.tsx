import React, { useRef, useEffect } from 'react';
import styles from './add-to-cart-button.module.css';

interface AddToCartButtonProps {
  className?: string;
}

export const AddToCartButton = ({ className }: AddToCartButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createSparkle = (centerX: number, centerY: number, button: HTMLButtonElement) => {
    const sparkleColors = ['#ffffff', '#f0f4ff', '#e0e7ff', '#c7d2fe'];
    const sparkleSizes = [4, 5, 6, 7];
    
    const sparkle = document.createElement('span');
    sparkle.classList.add(styles.sparkle);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const size = sparkleSizes[Math.floor(Math.random() * sparkleSizes.length)];
    const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    const delay = Math.random() * 0.2;
    const duration = 0.5 + Math.random() * 0.3;
    
    sparkle.style.left = `${centerX}px`;
    sparkle.style.top = `${centerY}px`;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.color = color;
    sparkle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    sparkle.style.animation = `${styles.sparkleBurst} ${duration}s ease-out forwards ${delay}s`;
    
    button.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), (duration + delay) * 1000);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button || button.classList.contains(styles.clicked)) return;
    
    button.classList.add(styles.clicked);
    
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add(styles.ripple);
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - buttonRect.left - size/2}px`;
    ripple.style.top = `${e.clientY - buttonRect.top - size/2}px`;
    button.appendChild(ripple);
    
    // Create sparkles
    const rect = button.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
      createSparkle(centerX, centerY, button);
    }

    // Add success glow
    setTimeout(() => {
      if (button) {
        button.style.boxShadow = `${button.style.boxShadow}, 0 0 20px rgba(16, 185, 129, 0.4), 0 0 8px rgba(16, 185, 129, 0.3)`;
      }
    }, 600);
    
    // Reset button state
    setTimeout(() => {
      button.classList.remove(styles.clicked);
      ripple.remove();
      button.style.boxShadow = '';
    }, 2100);
  };

  return (
    <button 
      ref={buttonRef}
      className={`${styles.cartBtn} ${className || ''}`}
      onClick={handleClick}
    >
      <span className={styles.cartIcon}>
        <svg viewBox="0 0 24 24">
          <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      </span>
      <span className={styles.text}>Add to Cart</span>
      <span className={styles.checkmark}>
        <svg viewBox="0 0 24 24">
          <path d="M6 12l4 4L18 6" />
        </svg>
      </span>
    </button>
  );
}; 