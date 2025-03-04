import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DayNightToggle } from "@/components/ui/day-night-toggle";
import { DeleteAccountCard } from "@/components/ui/delete-account-card";
import { XAuthButton } from "@/components/ui/x-auth-button";
import { PersonalNameCard } from "@/components/ui/personal-name-card";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { BuyMeCoffee } from "@/components/ui/buy-me-coffee";
import { Twitter, Instagram, Linkedin, Mail, Github, ExternalLink, User } from 'lucide-react';
import { SocialIconsAnimated } from "@/components/ui/social-icons-animated";
import { NameInput } from "@/components/ui/name-input";
import { WarningSign } from "@/components/ui/warning-sign";
import BuyNowButton from "@/components/ui/buy-now-button";
import { AnimatedSubmitButton } from "@/components/ui/animated-submit-button";
import { FlipHoverCard } from "@/components/ui/flip-hover-card";
import { RangeSlider } from "@/components/ui/range-slider";
import { NavyAuthForm } from "@/components/ui/navy-auth-form";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { AnimatedSearchInput } from "@/components/ui/animated-search-input";
import { NewsletterSubscribe } from "@/components/ui/newsletter-subscribe";
import { NotificationsPopup } from "@/components/ui/notifications-popup";
import { NightDayToggle2 } from "@/components/ui/night-day-toggle2";
import DeleteButton from "@/components/ui/delete-button";

interface ScrollItemProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollItem = ({ children, className }: ScrollItemProps) => (
  <div className={cn("flex-shrink-0 px-1", className)}>
    {children}
  </div>
);

const StaticGrid = ({
  children,
  className,
  offset = 0,
}: {
  children: React.ReactNode[];
  className?: string;
  offset?: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 sm:gap-4 overflow-hidden relative",
        className
      )}
    >
      {offset > 0 && (
        <div style={{ width: `${offset}px` }} className="hidden md:block" />
      )}
      {children.map((child, index) => (
        <div key={index} className="flex-shrink-0 px-0.5 sm:px-1">
          {child}
        </div>
      ))}
    </div>
  );
};

// Pacman alone (no ghosts) in one component so it lines up exactly.
// We reuse the same keyframes but remove the ghosts behind Pacman.

const PacmanWithGhosts = ({ direction = "left" }) => {
  // Define ghost colors
  const ghostColors = [
    "#FF0000", // Blinky (red)
    "#FFB8FF", // Pinky (pink)
    "#00FFFF", // Inky (cyan)
    "#FFB852", // Clyde (orange)
  ];

  return (
    <div className="relative h-6 w-full overflow-hidden mx-auto">
      {/* Keyframes for both Pacman and Ghosts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `\n          @keyframes pacman-chomp1 {\n            0% { transform: rotate(0deg); }\n            50% { transform: rotate(45deg); }\n            100% { transform: rotate(0deg); }\n          }\n          \n          @keyframes pacman-chomp2 {\n            0% { transform: rotate(0deg); }\n            50% { transform: rotate(-45deg); }\n            100% { transform: rotate(0deg); }\n          }\n          \n          @keyframes pacman-move-left {\n            0% { left: -20px; }\n            100% { left: calc(100% + 20px); }\n          }\n          \n          @keyframes pacman-move-right {\n            0% { right: -20px; }\n            100% { right: calc(100% + 20px); }\n          }\n        `,
        }}
      />
      {/* Pacman only */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: `translateY(-50%) ${
            direction === "right" ? "rotateY(180deg)" : ""}
          `,
          left: direction === "left" ? "-20px" : "auto",
          right: direction === "right" ? "-20px" : "auto",
          width: "0",
          height: "0",
          border: "10px solid #FDD835",
          borderRadius: "50%",
          borderRightColor: "transparent",
          animation: `pacman-move-${direction} 7s linear 0s infinite normal forwards`,
          zIndex: 2,
        }}
      >
        {/* Upper mouth */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "0",
            height: "0",
            border: "10px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation:
              "pacman-chomp1 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
        {/* Lower mouth */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "0",
            height: "0",
            border: "10px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation:
              "pacman-chomp2 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
      </div>
    </div>
  );
};

// New component just for ghosts moving from right to left
const GhostsOnly = () => {
  // Define ghost colors
  const ghostColors = [
    "#FF0000", // Blinky (red)
    "#FFB8FF", // Pinky (pink)
    "#00FFFF", // Inky (cyan)
    "#FFB852", // Clyde (orange)
  ];

  return (
    <div className="relative h-6 w-full overflow-hidden mx-auto">
      {/* Keyframes are the same as in PacmanWithGhosts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `\n          @keyframes ghost-move-right {\n            0% { right: -20px; }\n            100% { right: calc(100% + 20px); }\n          }\n        `,
        }}
      />

      {/* Only ghosts in this container, moving right to left */}
      {ghostColors.map((color, i) => {
        const offsetPx = i * 20; // space ghosts out
        return (
          <div
            key={color}
            style={{
              position: "absolute",
              top: "50%",
              right: `-${offsetPx}px`,
              left: "auto",
              width: "0",
              height: "0",
              animation: `ghost-move-right 7s linear 0s infinite normal forwards`,
              animationDelay: `${0.15 * i}s`,
              zIndex: 1,
              transform: "translateY(-50%)",
            }}
          >
            {/* Scale ghost so it matches Pacman's ~20px diameter */}
            <div style={{ transform: "scale(0.5) translate(-50%, -50%)" }}>
              <svg width="40" height="40" viewBox="0 0 100 100">
                {/* Ghost body */}
                <path
                  d="M 10,50 A 40,40 0 1,1 90,50 L 90,100 L 75,85 L 60,100 L 45,85 L 30,100 L 15,85 L 10,100 Z"
                  fill={color}
                />
                {/* Eyes */}
                <circle cx="35" cy="40" r="8" fill="white" />
                <circle cx="65" cy="40" r="8" fill="white" />
                {/* Pupils */}
                <circle cx="37" cy="42" r="4" fill="blue" />
                <circle cx="67" cy="42" r="4" fill="blue" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Component Card for the scrolling items
interface ComponentCardProps {
  title: string;
  category: string;
  children?: React.ReactNode;
  className?: string;
}

const ComponentCard = ({ title, category, children, className }: ComponentCardProps) => (
  <div className={cn("w-[116px] sm:w-[185px] md:w-[210px] lg:w-[230px] h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px] bg-card rounded-lg border border-border overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300", className)}>
    <div className="h-full p-2 sm:p-3 md:p-4 flex flex-col justify-between transition-all duration-300 group-hover:bg-accent/50">
      <div className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
        {/* Category text removed */}
      </div>
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
      <div>
        <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 group-hover:text-primary transition-colors">
          {/* Title text removed */}
        </h3>
        <div className="flex items-center text-xs md:text-sm text-muted-foreground">
          {/* Category text removed */}
        </div>
      </div>
    </div>
  </div>
);

// Modified X Auth Button without navigation
const XAuthButtonNoNav: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.preventDefault(); // Prevent default behavior
        e.stopPropagation(); // Stop event propagation
      }}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-black rounded-lg px-5 py-3 border border-gray-800 transition-all duration-500 transform overflow-hidden group-hover:shadow-lg group-hover:shadow-white/10">
        {/* X logo container with rotation effect */}
        <div 
          className={`relative z-10 transition-all duration-700 transform ${
            isHovered ? 'rotate-[360deg] scale-110' : ''
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </div>
        
        {/* Text container */}
        <div className="relative z-10 ml-3 overflow-hidden">
          {["C", "o", "n", "t", "i", "n", "u", "e", " ", "w", "i", "t", "h", " ", "X"].map((letter, index) => (
            <span 
              key={index}
              className="inline-block text-white font-medium text-sm"
              style={{
                transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                opacity: isHovered ? 1 : 0,
                transition: `transform 500ms, opacity 300ms`,
                transitionDelay: `${index * 30}ms`,
                position: letter === " " ? "relative" : "relative",
                width: letter === " " ? "4px" : "auto"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        
        {/* Electric sparks effect */}
        {isHovered && (
          <>
            <div className="absolute z-20 top-0 left-1/4 w-px h-3 bg-blue-400 animate-spark-1"></div>
            <div className="absolute z-20 top-0 right-1/4 w-px h-2 bg-blue-400 animate-spark-2"></div>
            <div className="absolute z-20 bottom-0 left-1/3 w-px h-2.5 bg-blue-400 animate-spark-3"></div>
            <div className="absolute z-20 bottom-0 right-1/3 w-px h-1.5 bg-blue-400 animate-spark-4"></div>
          </>
        )}
      </div>
      
      {/* Background pulse effect */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-700 ease-out ${
          isHovered ? 'bg-gray-800 scale-105' : 'bg-transparent scale-100'
        }`}
      >
        {/* Pulse rings */}
        {isHovered && Array.from({ length: 3 }).map((_, index) => (
          <div 
            key={index}
            className="absolute inset-0 rounded-lg border border-white/5"
            style={{
              animation: `pulse-ring 1.5s infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Corner Highlight dots */}
      <div 
        className={`absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-60 translate-x-0.5 translate-y-0.5' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full transition-all duration-500 delay-100 ${
          isHovered ? 'opacity-60 -translate-x-0.5 -translate-y-0.5' : 'opacity-0'
        }`}
      ></div>
      
      {/* Lightning bolt trail effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <div className="lightning-path absolute top-0 right-0 bottom-0 left-0"></div>
        </div>
      )}
    </button>
  );
};

// Create a mobile-optimized version of the X Auth Button
const MobileXAuthButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  
  // Use touch events for mobile
  const handleTouchStart = () => setIsActive(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsActive(false), 300);
  };
  
  return (
    <button
      className="relative group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        e.preventDefault(); // Prevent default behavior
        e.stopPropagation(); // Stop event propagation
      }}
    >
      {/* Main button */}
      <div className={`relative z-10 flex items-center justify-center bg-black rounded-lg px-3 py-2 border border-gray-800 transition-all duration-300 transform overflow-hidden ${
        isActive ? 'bg-gray-900 scale-95' : ''
      }`}>
        {/* X logo container with animation effect */}
        <div 
          className={`relative z-10 transition-all duration-300 transform ${
            isActive ? 'rotate-[360deg] scale-110' : ''
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </div>
        
        {/* Text container - always visible on mobile */}
        <div className="relative z-10 ml-2">
          <span className="text-white font-medium text-[10px]">Continue with X</span>
        </div>
      </div>
      
      {/* Background effect */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-300 ease-out ${
          isActive ? 'bg-gray-800 scale-105' : 'bg-transparent scale-100'
        }`}
      >
      </div>
    </button>
  );
};

// Modified Delete Account Card with centered animation
const CenteredDeleteAccountCard: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleDelete = () => {
    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      setIsSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setIsConfirming(false);
      }, 2000);
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center">
      <div 
        className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
          isConfirming ? 'bg-red-50 w-80' : 'bg-white w-72'
        } ${isSuccess ? 'bg-green-50' : ''}`}
        style={{
          maxWidth: isConfirming ? '320px' : '288px',
          transform: isHovering && !isConfirming ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovering && !isConfirming 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        {!isConfirming ? (
          <div 
            className="p-6 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsConfirming(true)}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full mr-4 transition-colors duration-300 ${
                isHovering ? 'bg-red-100' : 'bg-gray-100'
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-colors duration-300 ${
                    isHovering ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Delete Account</h3>
                <p className="text-sm text-gray-500">Remove all your data</p>
              </div>
            </div>
            <div className={`h-1 w-0 bg-red-500 rounded-full transition-all duration-300 ${
              isHovering ? 'w-full' : 'w-0'
            }`} />
          </div>
        ) : (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="mx-auto p-3 rounded-full bg-red-100 inline-block mb-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {isSuccess ? 'Account Deleted' : 'Delete Account?'}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {isSuccess 
                  ? 'Your account has been successfully deleted.' 
                  : 'This action cannot be undone. All your data will be permanently removed.'}
              </p>
            </div>
            
            {!isSuccess && (
              <div className="flex space-x-3">
                <button
                  className="flex-1 py-2 px-4 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => setIsConfirming(false)}
                  disabled={isDeleting}
                >
                  Cancel
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                    isDeleting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                  }`}
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      <span>Deleting...</span>
                    </div>
                  ) : 'Confirm'}
                </button>
              </div>
            )}
            
            {isSuccess && (
              <div className="w-full bg-green-500 h-1 mt-4">
                <div 
                  className="h-full bg-green-300 animate-pulse"
                  style={{
                    width: '100%',
                    animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Modified Personal Name Card with better centering
const CenteredPersonalNameCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-out transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isHovered ? 'shadow-xl shadow-indigo-200/50' : 'shadow-lg'}`}
      style={{ width: '240px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card top color band */}
      <div className="h-20 bg-gradient-to-r from-violet-500 to-indigo-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-6 -top-10 w-24 h-24 rounded-full bg-white/10"></div>
        <div className="absolute left-10 -bottom-6 w-12 h-12 rounded-full bg-white/10"></div>
      </div>
      
      {/* Card body with white background */}
      <div className="bg-white relative z-10 p-6 pb-4">
        {/* Profile image */}
        <div className="mx-auto -mt-16 mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md transition-all duration-500 ease-out transform hover:scale-105">
          <div className="w-full h-full bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
            <User size={36} className="text-indigo-500" />
          </div>
        </div>
        
        {/* Name & title */}
        <div className="text-center mb-6">
          <h2 className="text-gray-800 text-xl font-semibold mb-1">
            Alex Kim
          </h2>
          <p className="text-indigo-500 text-sm font-medium">
            Product Designer
          </p>
        </div>
        
        {/* Bio text */}
        <div className="overflow-hidden mb-6">
          <p 
            className={`text-center text-gray-600 text-sm transition-all duration-500 ease-out transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Creating meaningful digital experiences through thoughtful design and intuitive interfaces.
          </p>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-3">
          {[
            { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "hover:bg-blue-500", delay: 100 },
            { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-pink-500", delay: 150 },
            { icon: <Github className="w-5 h-5" />, label: "Github", color: "hover:bg-gray-800", delay: 200 },
            { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700", delay: 250 },
            { icon: <Mail className="w-5 h-5" />, label: "Email", color: "hover:bg-red-500", delay: 300 }
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              aria-label={item.label}
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 ${item.color} hover:text-white transition-all duration-300 transform ${
                isHovered 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-2 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: isHovered ? `${item.delay}ms` : '0ms' }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Card footer */}
      <div className="bg-gray-50">
        <button 
          className={`w-full flex items-center justify-center py-3 text-indigo-600 font-medium text-sm group transition-all duration-500 ease-out hover:bg-indigo-50 ${
            isHovered ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <span className="mr-2">View Portfolio</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Interactive border effect */}
      <div 
        className={`absolute inset-0 rounded-2xl pointer-events-none border-2 transition-all duration-500 ${
          isHovered ? 'border-indigo-300/50 scale-[0.99] opacity-100' : 'border-transparent scale-[0.98] opacity-0'
        }`}
      ></div>
    </div>
  );
};

// Modified version of LoadingAnimation without the grey background
const TransparentLoadingAnimation: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Add slight delay before showing completion state
          setTimeout(() => setAnimationCompleted(true), 300);
          return 100;
        }
        return newProgress;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Card container without background */}
      <div className="px-10 py-12 transition-all duration-300">
        {animationCompleted ? (
          /* Success State - iOS style checkmark */
          <div className="flex flex-col items-center success-animation">
            <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 13L9 17L19 7" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-semibold text-base">Complete</p>
          </div>
        ) : (
          /* Loading State - iOS style circular loader */
          <div className="flex flex-col items-center">
            {/* Circular progress container */}
            <div className="relative w-20 h-20 mb-4">
              {/* Track Circle */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
              </svg>
              
              {/* Progress Circle */}
              <svg 
                className="w-full h-full absolute top-0 left-0 -rotate-90" 
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * progress) / 100}
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              
              {/* Pulsing ring */}
              {progress > 0 && progress < 100 && (
                <svg 
                  className="w-full h-full absolute top-0 left-0 -rotate-90 ring-pulse" 
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#99f6e4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="290"
                    strokeDashoffset={290 - (290 * progress) / 100}
                  />
                </svg>
              )}
              
              {/* Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xl">{progress}%</span>
              </div>
            </div>
            
            {/* Simple loading text */}
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const WideBuyMeCoffee: React.FC = () => {
  return (
    <div className="transform scale-[0.35] sm:scale-[0.38] md:scale-[0.4] lg:scale-[0.42]">
      <div className="w-[350px] sm:w-[375px] md:w-[400px] lg:w-[425px] overflow-visible">
        <BuyMeCoffee className="!max-w-none w-full" />
      </div>
    </div>
  );
};

// Custom NotificationsPopup with only 2 notifications
const CustomNotificationsPopup: React.FC = () => {
  useEffect(() => {
    // Add a style tag to the document head
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .custom-notifications-wrapper .group:nth-child(2) {
        display: none !important;
      }
      
      /* Add custom positioning for the expanded state */
      .custom-notifications-wrapper {
        position: relative;
      }
      
      .custom-notifications-wrapper > div {
        transition: margin-top 0.4s cubic-bezier(0.2, 1, 0.3, 1);
      }
      
      .custom-notifications-wrapper > div[class*="h-auto"] {
        margin-top: 30px !important;
      }
    `;
    document.head.appendChild(styleTag);
    
    // Clean up the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);
  
  return (
    <div className="custom-notifications-wrapper">
      <NotificationsPopup />
    </div>
  );
};

interface InfiniteScrollGridProps {
  className?: string;
}

const InfiniteScrollGrid = ({ className }: InfiniteScrollGridProps) => {
  // First row items (6 cards)
  const row1Items = [
    <ComponentCard key="card1-1" title="Modern Auth Form" category="Forms">
      <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
        <DayNightToggle />
      </div>
    </ComponentCard>,
    <ComponentCard key="card1-2" title="Animated Button" category="Buttons">
      <div className="relative w-full h-full">
        <div className="absolute inset-x-0 top-[-165px] sm:top-[-155px] md:top-[-149px] flex justify-center">
          <div className="scale-x-[0.25] scale-y-[0.2] sm:scale-x-[0.38] sm:scale-y-[0.3] md:scale-x-[0.43] md:scale-y-[0.28] lg:scale-x-[0.48] lg:scale-y-[0.33]">
            <CenteredPersonalNameCard />
          </div>
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card1-3" title="Payment Card" category="Cards">
      <div className="flex items-center justify-center w-full h-full">
        {/* Use the mobile version for small screens and the regular version for larger screens */}
        <div className="block sm:hidden scale-[0.6] transform-origin-center mt-1 -ml-2">
          <div className="w-[120%]">
            <MobileXAuthButton />
          </div>
        </div>
        <div className="hidden sm:block scale-[0.75] md:scale-[0.8] lg:scale-[0.85] transform-origin-center">
          <XAuthButtonNoNav />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card1-4" title="Loading Indicator" category="Feedback">
      <div className="flex items-center justify-center w-full h-full -mt-5 sm:-mt-6 md:-mt-7">
        <div className="scale-[0.5] sm:scale-[0.7] md:scale-[0.75] lg:scale-[0.8]">
          <TransparentLoadingAnimation />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card1-5" title="Social Media" category="Buttons">
      <div className="flex items-center justify-center w-full h-full -mt-2 sm:-mt-3 md:-mt-4">
        <div className="scale-[0.4] sm:scale-[0.55] md:scale-[0.6] lg:scale-[0.65] transform-origin-center">
          <SocialIconsAnimated />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card1-6" title="Buy Now" category="Buttons">
      <div className="flex items-center justify-center w-full h-full">
        <div className="scale-[0.45] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] transform-origin-center">
          <div className="w-[110%] mx-auto">
            <BuyNowButton />
          </div>
        </div>
      </div>
    </ComponentCard>,
  ];

  // Second row items (6 cards)
  const row2Items = [
    <ComponentCard key="card2-1" title="Support Card" category="Support">
      <div className="relative w-full h-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-95px] sm:top-[-65px] md:top-[-75px] flex justify-center items-center w-full">
          <div className="scale-[0.7] sm:scale-[0.85] md:scale-[0.9] lg:scale-[1.0]">
            <WideBuyMeCoffee />
          </div>
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard
      key="card2-2"
      title="Submit Button"
      category="Buttons"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-[0.45] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] transform-origin-center relative z-10 -mt-2 sm:mt-0">
          <AnimatedSubmitButton />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard 
      key="card2-3" 
      title="Flip Card" 
      category="Cards"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-[0.25] sm:scale-[0.38] md:scale-[0.4] lg:scale-[0.42] transform-origin-center -mt-[6.5rem] sm:-mt-[4.25rem] md:-mt-[4.75rem] lg:-mt-[5.25rem]">
          <FlipHoverCard />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard 
      key="card2-4" 
      title="Range Slider" 
      category="Inputs"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible px-2">
        <div className="w-full scale-[0.6] sm:scale-[0.85] md:scale-[0.9] lg:scale-[0.95] transform-origin-center">
          <RangeSlider />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard 
      key="card2-5" 
      title="Auth Form" 
      category="Forms"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-[0.25] sm:scale-[0.35] transform-origin-center -mt-[5.25rem] sm:-mt-[6.25rem] md:-mt-[7.25rem] lg:-mt-[8.25rem] w-full">
          <div className="w-[160%] mx-auto [&>div]:bg-transparent -ml-14">
            <NavyAuthForm />
          </div>
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard 
      key="card2-6" 
      title="Warning Sign" 
      category="Feedback"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-x-[0.25] scale-y-[0.2] sm:scale-x-[0.4] sm:scale-y-[0.3] md:scale-x-[0.45] md:scale-y-[0.35] lg:scale-x-[0.5] lg:scale-y-[0.4] transform-origin-center -mt-[6rem]">
          <div className="w-[135%] mx-auto -ml-8">
            <WarningSign />
          </div>
        </div>
      </div>
    </ComponentCard>,
  ];

  // Third row items (6 cards)
  const row3Items = [
    <ComponentCard 
      key="card3-1" 
      title="Add to Cart" 
      category="Buttons"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-[0.4] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] transform-origin-center">
          <div className="w-[160%] sm:w-[110%] md:w-[110%] lg:w-[110%] mx-auto -ml-6 sm:ml-auto">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard 
      key="card3-2" 
      title="Search Input" 
      category="Inputs"
      className="!overflow-visible"
    >
      <div className="flex items-center justify-center w-full h-full relative !overflow-visible">
        <div className="scale-[0.5] sm:scale-[0.75] md:scale-[0.8] lg:scale-[0.85] transform-origin-center">
          <div className="[&_div[class*='w-64']]:w-52">
            <AnimatedSearchInput />
          </div>
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card3-3" title="Newsletter" category="Forms">
      <div className="flex justify-center items-center">
        <div className="scale-x-[0.35] scale-y-[0.33] sm:scale-x-[0.5] sm:scale-y-[0.48] md:scale-x-[0.55] md:scale-y-[0.53] lg:scale-x-[0.6] lg:scale-y-[0.58] transform-gpu -mt-[4.7rem] sm:-mt-[4.5rem] md:-mt-[4rem] lg:-mt-[3.5rem]">
          <NewsletterSubscribe />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card3-4" title="Notifications" category="Feedback">
      <div className="flex justify-center items-center h-full relative">
        <div className="scale-[0.28] sm:scale-[0.42] md:scale-[0.47] lg:scale-[0.52] transform-gpu mt-24 sm:mt-22 md:mt-20 lg:mt-18 origin-top transform-origin-center absolute top-1/2 -translate-y-1/2">
          <CustomNotificationsPopup />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card3-5" title="Day/Night Toggle" category="Toggles">
      <div className="flex justify-center items-center h-full">
        <div className="scale-[0.5] sm:scale-[0.8] md:scale-[0.9] lg:scale-[1.0] transform-gpu">
          <NightDayToggle2 />
        </div>
      </div>
    </ComponentCard>,
    <ComponentCard key="card3-6" title="Delete Button" category="Buttons">
      <div className="flex justify-center items-center h-full">
        <div className="scale-[0.7] sm:scale-[1.0] md:scale-[1.1] lg:scale-[1.2] transform-gpu">
          <DeleteButton />
        </div>
      </div>
    </ComponentCard>,
  ];

  return (
    <div className={cn("pt-0 pb-8 overflow-hidden", className)}>
      <div className="space-y-0">
        {/* First row */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={0}>
          {row1Items}
        </StaticGrid>

        {/* Pacman alone in one container, left-to-right */}
        <div>
          <PacmanWithGhosts direction="left" />
        </div>

        {/* Second row - with offset to stagger alignment */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={50}>
          {row2Items}
        </StaticGrid>

        {/* Ghosts only between second and third rows - moving right to left */}
        <div>
          <GhostsOnly />
        </div>

        {/* Third row - with different offset */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={25}>
          {row3Items}
        </StaticGrid>
      </div>
    </div>
  );
};

export default InfiniteScrollGrid; 
