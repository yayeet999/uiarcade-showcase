import { ComponentCode } from "./types";
import { CreditCardPayment } from "@/components/ui/credit-card-payment";
import { SocialIconsAnimated } from "@/components/ui/social-icons-animated";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { DayNightToggle } from "@/components/ui/day-night-toggle";
import { BasicDropdown } from "@/components/ui/basic-dropdown";
import { MenuPopupBasic } from "@/components/ui/menu-popup-basic";
import { FeedbackCard2 } from "@/components/ui/feedback-card2";
import { NightDayToggle2 } from "@/components/ui/night-day-toggle2";
import { DeleteAccountCard } from "@/components/ui/delete-account-card";
import { RangeSlider } from "@/components/ui/range-slider";
import { NotificationsPopup } from "@/components/ui/notifications-popup";
import { TealAuthForm } from "@/components/ui/teal-auth-form";
import { MinimalAuthForm } from "@/components/ui/minimal-auth-form";
import { IOSStyledAuthForm } from "@/components/ui/ios-styled-auth-form";
import { NewsletterSubscribe } from "@/components/ui/newsletter-subscribe";
import { AnimatedChecklist } from "@/components/ui/animated-checklist";

export const componentRegistry2: Record<string, ComponentCode> = {
  "Social Icons Animated": {
    component: SocialIconsAnimated,
    preview: `
      <div class="flex items-center justify-center scale-[0.65] -mt-6 -mb-6">
        <div class="flex justify-center items-center space-x-3">
          {/* TikTok */}
          <div class="relative">
            <div class="relative z-10 p-3 rounded-full flex items-center justify-center bg-gray-100 hover:bg-black hover:text-white transition-all duration-300">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </div>
          </div>
          
          {/* YouTube */}
          <div class="relative">
            <div class="relative z-10 p-3 rounded-full flex items-center justify-center bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-all duration-300">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>
          
          {/* X (Twitter) */}
          <div class="relative">
            <div class="relative z-10 p-3 rounded-full flex items-center justify-center bg-gray-100 hover:bg-black hover:text-white transition-all duration-300">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="w-full max-w-lg mx-auto p-6">
  <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">Connect With Us</h2>
  
  <div class="flex justify-center items-center space-x-4 sm:space-x-8">
    <!-- TikTok -->
    <button type="button" class="relative outline-none focus:outline-none group" aria-label="TikTok icon">
      <div class="relative z-10 p-4 rounded-full flex items-center justify-center bg-gray-100 transition-all duration-300 ease-out group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
        <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once bg-black"></span>
      </div>
      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-black text-white">TikTok</span>
      </div>
      <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg bg-black scale-110"></div>
    </button>

    <!-- YouTube -->
    <button type="button" class="relative outline-none focus:outline-none group" aria-label="YouTube icon">
      <div class="relative z-10 p-4 rounded-full flex items-center justify-center bg-gray-100 transition-all duration-300 ease-out group-hover:bg-[#FF0000] group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once bg-[#FF0000]"></span>
      </div>
      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-[#FF0000] text-white">YouTube</span>
      </div>
      <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg bg-[#FF0000] scale-110"></div>
    </button>

    <!-- X (Twitter) -->
    <button type="button" class="relative outline-none focus:outline-none group" aria-label="X icon">
      <div class="relative z-10 p-4 rounded-full flex items-center justify-center bg-gray-100 transition-all duration-300 ease-out group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
        <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once bg-black"></span>
      </div>
      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-black text-white">X</span>
      </div>
      <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg bg-black scale-110"></div>
    </button>

    <!-- Instagram -->
    <button type="button" class="relative outline-none focus:outline-none group" aria-label="Instagram icon">
      <div class="relative z-10 p-4 rounded-full flex items-center justify-center bg-gray-100 transition-all duration-300 ease-out group-hover:bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#F77737] group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once bg-[#C13584]"></span>
      </div>
      <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#F77737] text-white">Instagram</span>
      </div>
      <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#F77737] scale-110"></div>
    </button>
  </div>
</div>`,
    css: `@keyframes ping-once {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  80%, 100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.animate-ping-once {
  animation: ping-once 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
}`,
    fullcode: `import React from 'react';

type SocialMediaPlatform = {
  id: string;
  name: string;
  color: string;
  gradient?: string;
  icon: React.ReactNode;
};

export const SocialIconsAnimated = () => {
  const socialMedia: SocialMediaPlatform[] = [
    {
      id: 'tiktok',
      name: 'TikTok',
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      color: '#FF0000',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      id: 'twitter',
      name: 'X',
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram',
      gradient: 'bg-gradient-to-br from-[#405DE6] via-[#C13584] to-[#F77737]',
      color: '#C13584',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    }
  ];

  // Handle click to prevent default navigation
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // You could add custom click behavior here if needed
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">Connect With Us</h2>
      
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        {socialMedia.map((platform) => (
          <button
            key={platform.id}
            onClick={handleClick}
            className="relative outline-none focus:outline-none group"
            aria-label={\`\${platform.name} icon\`}
            type="button"
          >
            <div 
              className={\`
                relative z-10 p-4 rounded-full flex items-center justify-center
                bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-out
                group-hover:text-white group-hover:scale-110 group-hover:shadow-xl
                \${platform.gradient ? \`group-hover:\${platform.gradient}\` : \`group-hover:bg-[\${platform.color}]\`}
              \`}
            >
              {platform.icon}
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"
                style={{ background: platform.color }}
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
              <span 
                className={\`
                  text-xs font-medium px-2.5 py-1 rounded-full text-white
                  \${platform.gradient ? platform.gradient : \`bg-[\${platform.color}]\`}
                \`}
              >
                {platform.name}
              </span>
            </div>
            
            <div 
              className={\`
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-30
                transition-opacity duration-300 blur-lg scale-110
                \${platform.gradient ? platform.gradient : \`bg-[\${platform.color}]\`}
              \`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};`
  },
  "Loading Animation": {
    component: LoadingAnimation,
    preview: `
      <div class="flex items-center justify-center scale-[0.65] -mt-6 -mb-6">
        <div class="bg-white rounded-3xl shadow-md px-8 py-8">
          <div class="flex flex-col items-center">
            <div class="relative w-16 h-16 mb-3">
              <!-- Track Circle -->
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#f3f4f6"
                  stroke-width="8"
                />
              </svg>
              
              <!-- Progress Circle (70% complete) -->
              <svg 
                class="w-full h-full absolute top-0 left-0 -rotate-90" 
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#2dd4bf"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-dasharray="264"
                  stroke-dashoffset="79.2"
                />
              </svg>
              
              <!-- Percentage -->
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-gray-700 font-medium text-sm">70%</span>
              </div>
            </div>
            
            <p class="text-gray-500 text-xs font-medium">Loading...</p>
          </div>
        </div>
      </div>
    `,
    html: `<div class="relative flex flex-col items-center justify-center">
  <!-- Card container with iOS-like appearance -->
  <div class="bg-white rounded-3xl shadow-md px-10 py-12 transition-all duration-300"
    style="box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05)">
    
    <!-- Loading State - iOS style circular loader -->
    <div class="flex flex-col items-center">
      <!-- Circular progress container -->
      <div class="relative w-20 h-20 mb-4">
        <!-- Track Circle -->
        <svg class="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#f3f4f6"
            stroke-width="8"
          />
        </svg>
        
        <!-- Progress Circle -->
        <svg 
          class="w-full h-full absolute top-0 left-0 -rotate-90" 
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#2dd4bf"
            stroke-width="8"
            stroke-linecap="round"
            stroke-dasharray="264"
            stroke-dashoffset="79.2"
            class="transition-all duration-300 ease-out"
          />
        </svg>
        
        <!-- Pulsing ring -->
        <svg 
          class="w-full h-full absolute top-0 left-0 -rotate-90 ring-pulse" 
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#99f6e4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="290"
            stroke-dashoffset="87"
          />
        </svg>
        
        <!-- Percentage -->
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-gray-700 font-medium text-xl">70%</span>
        </div>
      </div>
      
      <!-- Simple loading text -->
      <p class="text-gray-500 text-sm font-medium">Loading...</p>
    </div>
  </div>
</div>

<!-- Success State Example -->
<div class="relative flex flex-col items-center justify-center mt-8">
  <div class="bg-white rounded-3xl shadow-md shadow-lg px-10 py-12 transition-all duration-300"
    style="box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05)">
    
    <div class="flex flex-col items-center success-animation">
      <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
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
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
          />
        </svg>
      </div>
      <p class="text-gray-800 font-semibold text-base">Complete</p>
    </div>
  </div>
</div>`,
    css: `/* Loading Animation Styles */
@keyframes pulseScale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@keyframes breathe {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}

@keyframes successScale {
  0% { transform: scale(0.8); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

.success-animation {
  animation: successScale 0.5s cubic-bezier(0.17, 0.67, 0.29, 0.99) forwards;
}

.ring-pulse {
  animation: pulseScale 2s cubic-bezier(0.4, 0, 0.2, 1) infinite, 
            breathe 2s ease-in-out infinite;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 16rem;
  width: 100%;
  background-color: #f9fafb;
  padding: 1.5rem;
}

.card-container {
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: all 0.3s;
}

.progress-container {
  position: relative;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
}

.track-circle {
  stroke: #f3f4f6;
  stroke-width: 8;
}

.progress-circle {
  stroke: #2dd4bf;
  stroke-width: 8;
  stroke-linecap: round;
  transition: all 0.3s ease-out;
}

.pulse-ring {
  stroke: #99f6e4;
  stroke-width: 2;
  stroke-linecap: round;
}

.percentage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: #374151;
}

.loading-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background-color: #ecfdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.success-text {
  font-weight: 600;
  font-size: 1rem;
  color: #1f2937;
}`,
    fullcode: `import React, { useState, useEffect } from 'react';

export const LoadingAnimation = () => {
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
      {/* Card container with iOS-like appearance */}
      <div 
        className={\`bg-white dark:bg-gray-800 rounded-3xl shadow-md px-10 py-12 transition-all duration-300 \${
          animationCompleted ? 'shadow-lg' : ''
        }\`}
        style={{
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)'
        }}
      >
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
};`
  },
  "Night/Day Toggle": {
    component: DayNightToggle,
    preview: `
      <div class="flex items-center justify-center scale-[0.9]">
        <div class="relative cursor-pointer">
          <!-- Toggle Container -->
          <div class="w-24 h-12 rounded-full bg-blue-200 relative shadow-md">
            <!-- Sliding Element: Sun -->
            <div class="absolute w-10 h-10 rounded-full top-1 bg-yellow-400"
                 style="box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.6)">
              <!-- Sun rays -->
              <div class="absolute inset-0 rotating">
                <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                     style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(0deg) translate(-50%, -50%) translateY(-7px)"></div>
                <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                     style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(45deg) translate(-50%, -50%) translateY(-7px)"></div>
                <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                     style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(90deg) translate(-50%, -50%) translateY(-7px)"></div>
                <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                     style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(135deg) translate(-50%, -50%) translateY(-7px)"></div>
              </div>
            </div>
            
            <!-- Clouds -->
            <div class="clouds absolute inset-0 overflow-hidden rounded-full opacity-60">
              <div class="absolute w-4 h-2 bg-white rounded-full top-3 left-4"></div>
              <div class="absolute w-5 h-2.5 bg-white rounded-full top-6 left-14"></div>
              <div class="absolute w-3 h-1.5 bg-white rounded-full top-2 left-10"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="flex items-center justify-center">
  <div class="relative cursor-pointer group">
    <!-- Toggle Container - Light Mode -->
    <div class="w-24 h-12 rounded-full bg-blue-200 relative shadow-md">
      <!-- Sun -->
      <div class="absolute w-10 h-10 rounded-full top-1 toggle-morph-to-sun"
           style="background: #FFD700; box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.6)">
        <!-- Sun rays -->
        <div class="rotating absolute inset-0">
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(0deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(45deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(90deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(135deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(180deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(225deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(270deg) translate(-50%, -50%) translateY(-7px)"></div>
          <div class="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
               style="left: 50%; top: 50%; transform-origin: 0 0; transform: rotate(315deg) translate(-50%, -50%) translateY(-7px)"></div>
        </div>
      </div>
      
      <!-- Clouds -->
      <div class="clouds absolute inset-0 overflow-hidden rounded-full opacity-60">
        <div className="absolute w-4 h-2 bg-white rounded-full top-3 left-4"></div>
        <div className="absolute w-5 h-2.5 bg-white rounded-full top-6 left-14"></div>
        <div className="absolute w-3 h-1.5 bg-white rounded-full top-2 left-10"></div>
      </div>
    </div>
    
    <!-- Hover Effect Ring -->
    <div class="absolute inset-0 rounded-full -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         style="background: radial-gradient(closest-side, transparent 80%, rgba(59, 130, 246, 0.2))"></div>
  </div>
</div>

<!-- Dark Mode Example -->
<div className="flex items-center justify-center mt-8">
  <div className="relative cursor-pointer group">
    <!-- Toggle Container - Dark Mode -->
    <div class="w-24 h-12 rounded-full bg-gray-700 relative shadow-md">
      <!-- Moon -->
      <div class="absolute w-10 h-10 rounded-full top-1 transform translate-x-12 toggle-morph-to-moon"
           style="background: #E0E0E0; box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.2)">
        <!-- Craters -->
        <div className="absolute w-2 h-2 rounded-full bg-gray-300 top-2 left-2 opacity-80"></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-300 bottom-2 right-3 opacity-70"></div>
        <div className="absolute w-1 h-1 rounded-full bg-gray-300 top-5 right-2 opacity-60"></div>
      </div>
      
      <!-- Stars -->
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 20%; left: 30%; animation-delay: 0.2s"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 70%; left: 15%; animation-delay: 0.5s"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 40%; left: 70%; animation-delay: 0.7s"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 60%; left: 80%; animation-delay: 1.1s"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 30%; left: 60%; animation-delay: 1.3s"></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star" style="top: 80%; left: 40%; animation-delay: 0.9s"></div>
      </div>
    </div>
    
    <!-- Hover Effect Ring -->
    <div class="absolute inset-0 rounded-full -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         style="background: radial-gradient(closest-side, transparent 80%, rgba(255, 255, 255, 0.2))"></div>
  </div>
</div>`,
    css: `/* Day/Night Toggle Animation Styles */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@keyframes moveClouds {
  0% { transform: translateX(0); }
  100% { transform: translateX(10px); }
}

@keyframes morphToMoon {
  0% { background: #FFD700; box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.6); }
  50% { background: linear-gradient(90deg, #FFD700 50%, #E0E0E0 50%); box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.3); }
  100% { background: #E0E0E0; box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.2); }
}

@keyframes morphToSun {
  0% { background: #E0E0E0; box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.2); }
  50% { background: linear-gradient(90deg, #E0E0E0 50%, #FFD700 50%); box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.3); }
  100% { background: #FFD700; box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.6); }
}

.star {
  animation: twinkle 1.5s ease-in-out infinite;
}

.rotating {
  animation: rotate 20s linear infinite;
}

.clouds {
  animation: moveClouds 4s ease-in-out infinite alternate;
}

.toggle-morph-to-moon {
  animation: morphToMoon 0.7s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toggle-morph-to-sun {
  animation: morphToSun 0.7s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toggle-container {
  width: 6rem;
  height: 3rem;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.7s;
}

.toggle-container.light {
  background-color: #bfdbfe;
}

.toggle-container.dark {
  background-color: #374151;
}

.toggle-handle {
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  top: 0.25rem;
  transition: transform 0.7s;
}

.toggle-handle.light {
  background-color: #fcd34d;
  box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.6);
}

.toggle-handle.dark {
  background-color: #e5e7eb;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.2);
  transform: translateX(3.5rem);
}

.hover-ring {
  position: absolute;
  inset: 0;
  margin: -0.25rem;
  border-radius: 9999px;
  opacity: 0;
  transition: opacity 0.3s;
}

.hover-ring.light {
  background: radial-gradient(closest-side, transparent 80%, rgba(59, 130, 246, 0.2));
}

.hover-ring.dark {
  background: radial-gradient(closest-side, transparent 80%, rgba(255, 255, 255, 0.2));
}

.toggle-container:hover .hover-ring {
  opacity: 1;
}`,
    fullcode: `import React, { useState, useEffect } from 'react';

export const DayNightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleMode = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsDarkMode(!isDarkMode);
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      <div 
        className="relative cursor-pointer group"
        onClick={toggleMode}
      >
        {/* Toggle Container */}
        <div 
          className={\`w-24 h-12 rounded-full transition-colors duration-700 relative shadow-md \${
            isDarkMode ? 'bg-gray-700' : 'bg-blue-200'
          }\`}
        >
          {/* Sliding Element: Sun or Moon */}
          <div 
            className={\`absolute w-10 h-10 rounded-full top-1 transition-transform duration-700 \${
              isDarkMode ? 'transform translate-x-12 toggle-morph-to-moon' : 'toggle-morph-to-sun'
            }\`}
            style={{
              background: isDarkMode ? '#E0E0E0' : '#FFD700',
              boxShadow: isDarkMode 
                ? '0 0 20px 5px rgba(255, 255, 255, 0.2)' 
                : '0 0 20px 5px rgba(255, 215, 0, 0.6)'
            }}
          >
            {/* Craters for moon */}
            {isDarkMode && (
              <>
                <div className="absolute w-2 h-2 rounded-full bg-gray-300 top-2 left-2 opacity-80"></div>
                <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-300 bottom-2 right-3 opacity-70"></div>
                <div className="absolute w-1 h-1 rounded-full bg-gray-300 top-5 right-2 opacity-60"></div>
              </>
            )}
            
            {/* Sun rays */}
            {!isDarkMode && (
              <div className="rotating absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-2 bg-yellow-400 rounded-full opacity-80"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      transform: \`rotate(\${i * 45}deg) translate(-50%, -50%) translateY(-7px)\`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
          
          {/* Stars - only visible in dark mode */}
          {isDarkMode && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full star"
                  style={{
                    top: \`\${Math.random() * 100}%\`,
                    left: \`\${Math.random() * 100}%\`,
                    ['--delay' as any]: Math.random() * 2
                  }}
                ></div>
              ))}
            </div>
          )}
          
          {/* Clouds - only visible in light mode */}
          {!isDarkMode && (
            <div className="clouds absolute inset-0 overflow-hidden rounded-full opacity-60">
              <div className="absolute w-4 h-2 bg-white rounded-full top-3 left-4"></div>
              <div className="absolute w-5 h-2.5 bg-white rounded-full top-6 left-14"></div>
              <div className="absolute w-3 h-1.5 bg-white rounded-full top-2 left-10"></div>
            </div>
          )}
        </div>
        
        {/* Hover Effect Ring */}
        <div 
          className={\`absolute inset-0 rounded-full -m-1 transition-opacity duration-300 \${
            isAnimating ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }\`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(closest-side, transparent 80%, rgba(255, 255, 255, 0.2))' 
              : 'radial-gradient(closest-side, transparent 80%, rgba(59, 130, 246, 0.2))'
          }}
        ></div>
      </div>
    </div>
  );
};`
  },
  "Basic Dropdown": {
    component: BasicDropdown,
    preview: `
      <div class="flex items-center justify-center scale-[0.85] -mt-6 -mb-6">
        <div class="w-64">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Select Options</label>
          </div>
          <div class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 rounded-xl">
            <span class="text-gray-400">Select an option</span>
            <div class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="w-full max-w-md mx-auto">
  <!-- Dropdown container -->
  <div class="relative">
    <!-- Dropdown title -->
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button (closed state) -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 hover:border-teal-400 rounded-xl transition-all duration-150">
      <span class="text-gray-400">Select an option</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </button>
  </div>
</div>

<!-- Dropdown Open State Example -->
<div class="w-full max-w-md mx-auto mt-8">
  <div class="relative">
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button (open state) -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-teal-500 ring-2 ring-teal-100 rounded-xl transition-all duration-150">
      <span class="text-gray-400">Select an option</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </button>
    
    <!-- Dropdown options -->
    <div class="dropdown-options absolute z-20 w-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="py-1 max-h-60 overflow-auto">
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer bg-teal-50">
          <span className="text-gray-700">Design System</span>
        </div>
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-teal-600 font-medium">Components</span>
          <div className="checkmark-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-gray-700">Templates</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Selected State Example -->
<div class="w-full max-w-md mx-auto mt-8">
  <div class="relative">
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button with selection -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 hover:border-teal-400 rounded-xl transition-all duration-150">
      <span class="text-gray-800">Components</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </button>
  </div>
</div>`,
    css: `/* Basic Dropdown Animation Styles */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes bobble {
  0% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}

@keyframes checkmark {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.dropdown-options {
  animation: scaleIn 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transform-origin: top center;
}

.dropdown-backdrop {
  animation: fadeIn 0.15s ease-out;
}

.option-item {
  transition: all 0.2s ease;
}

.option-item:hover {
  background-color: rgba(236, 253, 252, 1);
}

.dropdown-icon {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dropdown-trigger:hover .dropdown-icon {
  animation: bobble 0.6s ease;
}

.checkmark-animation {
  animation: checkmark 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Dropdown Container Styles */
.dropdown-container {
  position: relative;
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

.dropdown-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  text-align: left;
  transition: all 0.15s ease;
}

.dropdown-button:hover {
  border-color: #14b8a6;
}

.dropdown-button.active {
  border-color: #14b8a6;
  box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.1);
}

.dropdown-placeholder {
  color: #9ca3af;
}

.dropdown-selected {
  color: #1f2937;
}

.dropdown-menu {
  position: absolute;
  z-index: 20;
  width: 100%;
  margin-top: 0.25rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  overflow: hidden;
}

.dropdown-options-list {
  padding: 0.25rem 0;
  max-height: 15rem;
  overflow-y: auto;
}

.dropdown-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
}

.dropdown-option:hover {
  background-color: #ecfdfc;
}

.dropdown-option-text {
  color: #374151;
}

.dropdown-option-text.selected {
  color: #0d9488;
  font-weight: 500;
}

.dropdown-check {
  color: #14b8a6;
}`,
    fullcode: `import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

type Option = {
  id: number;
  label: string;
  value: string;
};

export const BasicDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const options: Option[] = [
    { id: 1, label: 'Design System', value: 'design' },
    { id: 2, label: 'Components', value: 'components' },
    { id: 3, label: 'Templates', value: 'templates' }
  ];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Dropdown container */}
      <div ref={dropdownRef} className="relative">
        {/* Dropdown title */}
        <div className="mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Options</label>
        </div>
        
        {/* Dropdown trigger button */}
        <button
          className={\`dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white dark:bg-gray-800 border rounded-xl transition-all duration-150 \${
            isOpen ? 'border-teal-500 ring-2 ring-teal-100 dark:ring-teal-900 dark:border-teal-400' : 'border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500'
          }\`}
          onClick={toggleDropdown}
        >
          <span className={\`\${selectedOption ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}\`}>
            {selectedOption ? selectedOption.label : 'Select an option'}
          </span>
          <div className="dropdown-icon">
            {isOpen ? (
              <ChevronUp size={18} className="text-teal-500" />
            ) : (
              <ChevronDown size={18} className="text-gray-400 dark:text-gray-500" />
            )}
          </div>
        </button>
        
        {/* Dropdown menu */}
        {isOpen && (
          <>
            {/* Backdrop overlay - mobile only */}
            <div className="dropdown-backdrop fixed inset-0 bg-black bg-opacity-5 z-10 md:hidden" onClick={() => setIsOpen(false)} />
            
            {/* Dropdown options */}
            <div className="dropdown-options absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="py-1 max-h-60 overflow-auto">
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className={\`option-item flex items-center justify-between px-4 py-3 cursor-pointer \${
                      hoverIndex === index ? 'bg-teal-50 dark:bg-teal-900/30' : ''
                    }\`}
                    onClick={() => handleOptionSelect(option)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <span className={\`\${selectedOption?.id === option.id ? 'text-teal-600 dark:text-teal-400 font-medium' : 'text-gray-700 dark:text-gray-300'}\`}>
                      {option.label}
                    </span>
                    
                    {selectedOption?.id === option.id && (
                      <div className="checkmark-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};`
  },
  "Menu Popup Basic": {
    component: MenuPopupBasic,
    preview: `
      <div class="flex items-center justify-center scale-[0.85]">
        <div class="relative">
          <button class="plus-icon flex items-center justify-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-purple-500 to-indigo-500 z-20 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `,
    html: `<div class="flex items-center justify-center">
  <div class="relative">
    <!-- Plus Button (Closed State) -->
    <button class="plus-icon flex items-center justify-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-purple-500 to-indigo-500 focus:outline-none z-20 relative x-to-plus"
            style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  </div>
</div>

<!-- Open Menu Example -->
<div class="flex items-center justify-center mt-12">
  <div class="relative">
    <!-- Menu Container -->
    <div class="menu-container absolute bg-white rounded-2xl shadow-lg p-2 min-w-48 border border-gray-100 z-10"
         style="top: 70px; left: 30px;">
      <!-- Edit Option -->
      <div class="menu-item flex items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        <div class="w-9 h-9 rounded-full flex items-center justify-center"
             style="background-color: rgba(139, 92, 246, 0.15); color: #8b5cf6;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
        <span class="ml-3 text-gray-700 font-medium">Edit</span>
      </div>
      
      <!-- Photo Option -->
      <div class="menu-item flex items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        <div class="w-9 h-9 rounded-full flex items-center justify-center"
             style="background-color: rgba(236, 72, 153, 0.15); color: #ec4899;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        <span class="ml-3 text-gray-700 font-medium">Photo</span>
      </div>
      
      <!-- Message Option -->
      <div class="menu-item flex items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        <div class="w-9 h-9 rounded-full flex items-center justify-center"
             style="background-color: rgba(6, 182, 212, 0.15); color: #06b6d4;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <span class="ml-3 text-gray-700 font-medium">Message</span>
      </div>
      
      <!-- Favorite Option -->
      <div class="menu-item flex items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        <div class="w-9 h-9 rounded-full flex items-center justify-center"
             style="background-color: rgba(245, 158, 11, 0.15); color: #f59e0b;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <span class="ml-3 text-gray-700 font-medium">Favorite</span>
      </div>
    </div>
    
    <!-- X Button (Open State) -->
    <button class="plus-icon flex items-center justify-center w-14 h-14 rounded-full shadow-md bg-purple-600 focus:outline-none z-20 relative plus-to-x"
            style="box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3), 0 5px 15px rgba(139, 92, 246, 0.4)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white" style="transform: rotate(45deg)">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  </div>
</div>`,
    css: `/* Menu Popup Basic Animation Styles */
@keyframes popIn {
  0% { transform: scale(0.4) translateY(0); opacity: 0; }
  70% { transform: scale(1.05) translateY(0); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(5px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes plusPulse {
  0% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
  50% { transform: scale(1.08); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3); }
  100% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
}

@keyframes plusToX {
  0% { transform: scale(1) rotate(0); }
  50% { transform: scale(0.8) rotate(45deg); }
  100% { transform: scale(1) rotate(45deg); }
}

@keyframes xToPlus {
  0% { transform: scale(1) rotate(45deg); }
  50% { transform: scale(0.8) rotate(0); }
  100% { transform: scale(1) rotate(0); }
}

.menu-container {
  animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.backdrop {
  animation: fadeIn 0.2s ease forwards;
}

.menu-item {
  animation: slideIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: calc(var(--index) * 0.05s);
}

.plus-icon {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), 
              background 0.2s ease-out,
              box-shadow 0.2s ease-out;
}

.plus-pulse {
  animation: plusPulse 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

.plus-to-x {
  animation: plusToX 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.x-to-plus {
  animation: xToPlus 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Menu Popup Container Styles */
.popup-menu-container {
  position: relative;
  display: inline-block;
}

.popup-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #8b5cf6, #6366f1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 20;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.popup-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.popup-button:focus {
  outline: none;
}

.popup-button.active {
  background-color: #8b5cf6;
  background-image: none;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3), 0 5px 15px rgba(139, 92, 246, 0.4);
}

.popup-menu {
  position: absolute;
  top: 4.5rem;
  left: 1.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  padding: 0.5rem;
  min-width: 12rem;
  z-index: 10;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-item:hover {
  background-color: #f9fafb;
}

.menu-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  margin-right: 0.75rem;
  transition: transform 0.2s ease;
}

.menu-item:hover .menu-item-icon {
  transform: scale(1.1);
}

.menu-item-label {
  font-weight: 500;
  color: #374151;
}

.backdrop-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 10;
}`,
    fullcode: `import React, { useState, useRef, useEffect } from 'react';
import { Plus, Edit, Image, MessageSquare, Star } from 'lucide-react';

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  color: string;
};

export const MenuPopupBasic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const menuItems: MenuItem[] = [
    { icon: <Edit size={20} />, label: 'Edit', color: '#8b5cf6' },
    { icon: <Image size={20} />, label: 'Photo', color: '#ec4899' },
    { icon: <MessageSquare size={20} />, label: 'Message', color: '#06b6d4' },
    { icon: <Star size={20} />, label: 'Favorite', color: '#f59e0b' }
  ];
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveIndex(null);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative" ref={menuRef}>
        {/* Menu first - positioned behind the button */}
        {isOpen && (
          <>
            {/* Backdrop - Mobile only */}
            <div className="backdrop fixed inset-0 z-10 bg-black bg-opacity-5 md:hidden" />
            
            {/* Popup Menu - Positioned to the bottom right of button */}
            <div 
              className="menu-container absolute bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 min-w-48 border border-gray-100 dark:border-gray-700 z-10"
              style={{
                top: '70px',
                left: '30px'
              }}
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-item flex items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  style={{ ['--index' as any]: index }}
                  onClick={() => {
                    console.log(\`Selected: \${item.label}\`);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ 
                      backgroundColor: \`\${item.color}15\`, // 15% opacity
                      color: item.color,
                      transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-200 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* Plus/X Button - positioned with z-index above the menu */}
        <button
          className={\`plus-icon flex items-center justify-center w-14 h-14 rounded-full shadow-md focus:outline-none z-20 relative \${
            isOpen ? 'bg-purple-600 plus-to-x' : 'bg-gradient-to-r from-purple-500 to-indigo-500 x-to-plus'
          } \${isHovering && !isOpen ? 'plus-pulse' : ''}\`}
          onClick={toggleMenu}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          style={{
            boxShadow: isOpen 
              ? '0 0 0 2px rgba(139, 92, 246, 0.3), 0 5px 15px rgba(139, 92, 246, 0.4)' 
              : '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Plus size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};`
  },
  "Credit Card Payment": {
    component: CreditCardPayment,
    preview: `
      <div class="flex items-center justify-center scale-[0.85] -mt-6 -mb-6">
        <div class="relative w-full max-w-[280px]">
          <div class="relative w-full h-40 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-600">
            <div class="relative flex flex-col h-full z-10 p-4">
              <div class="flex justify-between items-start mb-3">
                <div class="w-9 h-7 bg-yellow-500 bg-opacity-90 rounded-md"></div>
                <div class="text-white opacity-70"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22h20M2 11h20M2 16h20"/></svg></div>
              </div>
              <div class="text-white opacity-70 mb-1 text-xs">Card Number</div>
              <div class="text-white text-lg tracking-wider font-medium mb-3">•••• •••• •••• ••••</div>
              <div class="mt-auto flex justify-between items-end">
                <div class="text-white opacity-70 text-sm">YOUR NAME</div>
                <div class="text-white opacity-70 text-sm">MM/YY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="w-full max-w-md mx-auto p-6">
  <div class="flex flex-col items-center">
    <!-- Interactive card -->
    <div class="relative w-full max-w-sm mb-12">
      <div class="relative w-full h-56 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-gray-600">
        <!-- Card background effects -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 right-0 w-full h-full">
            <div class="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div class="absolute right-10 bottom-0 w-24 h-24 rounded-full bg-white opacity-10"></div>
            <div class="absolute -left-10 top-32 w-40 h-40 rounded-full bg-white opacity-5"></div>
          </div>
        </div>
        
        <!-- Card content -->
        <div class="relative flex flex-col h-full z-10 p-6">
          <!-- Card chip and logo -->
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-10 bg-yellow-500 bg-opacity-90 rounded-md flex items-center justify-center overflow-hidden">
              <div class="w-full h-4 border-t border-b border-black border-opacity-30"></div>
            </div>
            <div class="text-white opacity-70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 22h20M2 11h20M2 16h20"/>
              </svg>
            </div>
          </div>
          
          <!-- Card number field -->
          <div class="mb-5">
            <label class="text-white text-opacity-70 text-xs mb-1 block">Card Number</label>
            <input type="text" placeholder="•••• •••• •••• ••••" class="w-full bg-transparent border-none outline-none text-white text-xl tracking-wider font-medium placeholder-white placeholder-opacity-50" />
          </div>
          
          <!-- Bottom row - card holder and expiry -->
          <div class="mt-auto flex justify-between items-end">
            <div>
              <label class="text-white text-opacity-70 text-xs mb-1 block">Card Holder</label>
              <input type="text" placeholder="YOUR NAME" class="bg-transparent border-none outline-none text-white tracking-wide font-medium placeholder-white placeholder-opacity-50" />
            </div>
            <div>
              <label class="text-white text-opacity-70 text-xs mb-1 block">Expires</label>
              <input type="text" placeholder="MM/YY" class="bg-transparent border-none outline-none text-white tracking-wide font-medium text-center placeholder-white placeholder-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes successBounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

.animate-success-bounce {
  animation: successBounce 1s ease-out;
}

.scale-102 {
  transform: scale(1.02);
}

/* Card brand gradients */
.card-visa {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #1a4db8;
  --tw-gradient-to: #60a5fa;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.card-mastercard {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #ea580c;
  --tw-gradient-to: #ef4444;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.card-amex {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #0891b2;
  --tw-gradient-to: #22d3ee;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.card-discover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  --tw-gradient-from: #f97316;
  --tw-gradient-to: #facc15;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}`,
    fullcode: `import React, { useState, useEffect } from 'react';
import { CheckCircle, Lock, Wifi } from 'lucide-react';

export const CreditCardPayment = () => {
  // Card data state
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  // UI state
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Rest of the component implementation...
  // Full implementation in credit-card-payment.tsx
}`
  },
  "Feedback Card2": {
    component: FeedbackCard2,
    preview: `
      <div class="relative max-w-md w-full mx-auto scale-75">
        <div class="relative bg-white rounded-xl shadow-lg w-full p-8">
          <button class="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4 text-black">We appreciate your feedback.</h2>
            <p class="text-gray-800 mb-6">
              We are always looking for ways to improve your experience.
              <br />
              Please take a moment to evaluate and tell us what you think.
            </p>
            <div class="flex justify-center mb-4">
              <button class="mx-2">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
              <!-- Repeat for 5 stars -->
            </div>
          </div>
        </div>
      </div>
    `,
    html: `
<div class="relative max-w-md w-full mx-auto">
  <div class="relative bg-white rounded-xl shadow-lg w-full p-8 transition-all duration-300 ease-in-out transform">
    <!-- Close button -->
    <button class="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <!-- Content -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-4 text-black">We appreciate your feedback.</h2>
      <p class="text-gray-800 mb-6">
        We are always looking for ways to improve your experience.
        <br />
        Please take a moment to evaluate and tell us what you think.
      </p>
      
      <!-- Star rating -->
      <div class="flex justify-center mb-4">
        <!-- Star 1 -->
        <button class="mx-2 focus:outline-none transition-all duration-200">
          <svg class="w-8 h-8 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
        <!-- Repeat for stars 2-5 -->
      </div>
      
      <!-- Feedback text area -->
      <div class="mb-6">
        <textarea class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black" rows="4" placeholder="What can we do to improve your experience?"></textarea>
      </div>
      
      <!-- Submit button -->
      <button class="w-full bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden">
        Submit My Feedback
      </button>
    </div>
  </div>
</div>
    `,
    css: `
/* Base styles */
.feedback-card {
  position: relative;
  max-width: 28rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.feedback-card-inner {
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  padding: 2rem;
  transition: all 300ms ease-in-out;
}

/* Close button */
.close-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #f3f4f6;
  color: #6b7280;
}

.close-button:hover {
  background-color: #e5e7eb;
  transition: background-color 200ms;
}

/* Content */
.feedback-content {
  text-align: center;
}

.feedback-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000000;
}

.feedback-description {
  color: #1f2937;
  margin-bottom: 1.5rem;
}

/* Star rating */
.star-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.star-button {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition: all 200ms;
}

.star-button:focus {
  outline: none;
}

.star-button:hover {
  transform: scale(1.2);
}

.star-icon {
  width: 2rem;
  height: 2rem;
  transition: all 300ms;
  stroke: #000000;
}

/* Textarea */
.feedback-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  transition: all 150ms;
  color: #000000;
}

.feedback-textarea:focus {
  outline: none;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: #3b82f6;
  border-color: #3b82f6;
}

/* Submit button */
.submit-button {
  width: 100%;
  background-color: #1d4ed8;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  transition: all 300ms;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.submit-button:hover {
  background-color: #2563eb;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.submit-button:active {
  transform: scale(0.98);
}

/* Success state */
.success-container {
  text-align: center;
  padding: 3rem 0;
  transform: transition-all 500ms ease-out;
}

.success-icon {
  margin-bottom: 1rem;
  color: #10b981;
  display: flex;
  justify-content: center;
}

.success-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000000;
}

.success-message {
  color: #1f2937;
}

/* Error message */
.error-message {
  color: #dc2626;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
    `,
    fullcode: `import React, { useState } from 'react';

export const FeedbackCard2 = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleStarHover = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
    if (error) setError('');
  };

  const handleSubmit = () => {
    // Validation
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Close after showing success
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="relative max-w-md w-full mx-auto">
      <div 
        className="relative bg-white rounded-xl shadow-lg w-full p-8 transition-all duration-300 ease-in-out transform"
        style={{
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}
      >
        {/* Close button */}
        <button 
          onClick={handleClose} 
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {submitted ? (
          <div className="text-center py-12 transform transition-all duration-500 ease-out">
            <div className="mb-4 text-green-500 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2">Thank you!</h2>
            <p className="text-gray-600">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">We appreciate your feedback.</h2>
            <p className="text-gray-600 mb-6">
              We are always looking for ways to improve your experience.
              <br />
              Please take a moment to evaluate and tell us what you think.
            </p>
            
            {/* Star rating */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="mx-2 focus:outline-none transition-all duration-200"
                  style={{
                    transform: star <= hoveredRating ? 'scale(1.2)' : 'scale(1)',
                  }}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={() => handleStarHover(0)}
                  onClick={() => handleStarClick(star)}
                >
                  <svg
                    className="w-8 h-8 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill={star <= (hoveredRating || rating) ? "#FFD700" : "none"}
                    stroke={star <= (hoveredRating || rating) ? "#FFD700" : "currentColor"}
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
            
            {/* Error message */}
            {error && (
              <div className="text-red-500 mb-2 text-sm animate-bounce">
                {error}
              </div>
            )}
            
            {/* Feedback text area */}
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                rows="4"
                placeholder="What can we do to improve your experience?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            
            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden"
              style={{
                transform: isSubmitting ? 'scale(0.98)' : '',
                boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.boxShadow = '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)';
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit My Feedback"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
    `
  },
  "Night/Day Toggle 2": {
    component: NightDayToggle2,
    preview: `
      <div class="flex flex-col items-center justify-center p-4">
        <div class="relative w-20 h-10 flex items-center rounded-full p-1 cursor-pointer bg-gradient-to-r from-amber-300 to-yellow-400">
          <!-- Day indicator (sun) -->
          <div class="absolute inset-0 flex justify-between items-center px-2">
            <div class="text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M6.34 17.66l-1.41 1.41" />
                <path d="M19.07 4.93l-1.41 1.41" />
              </svg>
            </div>
            <div class="text-white opacity-0"></div>
          </div>
          
          <!-- Toggle Button with sun rays -->
          <div class="absolute w-8 h-8 rounded-full shadow-lg bg-white flex items-center justify-center overflow-hidden">
            <!-- Sun design -->
            <div class="absolute inset-0">
              <!-- Base sun circle -->
              <div class="absolute inset-1 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `
<div class="flex flex-col items-center justify-center p-8">
  <div class="relative w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ease-in-out bg-gradient-to-r from-amber-300 to-yellow-400">
    <!-- Night indicator (moon) -->
    <div class="absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 opacity-0">
      <div class="text-white opacity-0"></div>
      <div class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
    
    <!-- Day indicator (sun) -->
    <div class="absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 opacity-100">
      <div class="text-amber-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>
      <div class="text-white opacity-0"></div>
    </div>

    <!-- Toggle Button with sun rays -->
    <div class="absolute w-8 h-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out translate-x-0 bg-white flex items-center justify-center overflow-hidden">
      <!-- Sun design for day mode -->
      <div class="absolute inset-0 transition-opacity duration-300 opacity-100">
        <!-- Base sun circle -->
        <div class="absolute inset-1 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full"></div>
        
        <!-- Primary rays -->
        <div class="absolute w-full h-full">
          <!-- Long rays -->
          <div class="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 scale-x-125"></div>
          <div class="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-300 transform -translate-x-1/2 scale-y-125"></div>
          <div class="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-45 scale-x-110"></div>
          <div class="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-45 scale-x-110"></div>
        </div>
        
        <!-- Center highlight -->
        <div class="absolute inset-2 bg-yellow-200 rounded-full opacity-60"></div>
      </div>
      
      <!-- Moon surface for night mode -->
      <div class="absolute inset-0 transition-opacity duration-300 opacity-0">
        <div class="absolute inset-0 bg-blue-100 rounded-full"></div>
        <div class="absolute top-2 right-2 w-2 h-2 bg-blue-200 rounded-full opacity-70"></div>
        <div class="absolute bottom-2 left-3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-70"></div>
        <div class="absolute top-3 left-2 w-1 h-1 bg-blue-200 rounded-full opacity-70"></div>
      </div>
    </div>
  </div>
</div>
    `,
    css: `
/* Container */
.toggle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Toggle base */
.toggle-base {
  position: relative;
  width: 5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem;
  cursor: pointer;
  transition: all 500ms ease-in-out;
}

.toggle-day {
  background: linear-gradient(to right, #fcd34d, #fbbf24);
}

.toggle-night {
  background: linear-gradient(to right, #60a5fa, #6366f1);
}

/* Night indicator */
.night-indicator {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: opacity 300ms;
}

.night-indicator-visible {
  opacity: 1;
}

.night-indicator-hidden {
  opacity: 0;
}

.moon-icon {
  color: white;
  height: 1.25rem;
  width: 1.25rem;
}

/* Day indicator */
.day-indicator {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: opacity 300ms;
}

.day-indicator-visible {
  opacity: 1;
}

.day-indicator-hidden {
  opacity: 0;
}

.sun-icon {
  color: #d97706;
  height: 1.5rem;
  width: 1.5rem;
}

/* Toggle button */
.toggle-button {
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: white;
  transform: translateX(0);
  transition: all 500ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.toggle-button-night {
  transform: translateX(2.5rem);
}

/* Sun design */
.sun-design {
  position: absolute;
  inset: 0;
  transition: opacity 300ms;
}

.sun-design-visible {
  opacity: 1;
}

.sun-design-hidden {
  opacity: 0;
}

.sun-circle {
  position: absolute;
  inset: 0.25rem;
  background: linear-gradient(to bottom right, #fcd34d, #f59e0b);
  border-radius: 9999px;
}

.sun-rays {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ray {
  position: absolute;
  background-color: #fcd34d;
}

.ray-horizontal {
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.125rem;
  transform: translateY(-50%) scaleX(1.25);
}

.ray-vertical {
  top: 0;
  left: 50%;
  width: 0.125rem;
  height: 100%;
  transform: translateX(-50%) scaleY(1.25);
}

.ray-diagonal-1 {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 0.125rem;
  transform: translate(-50%, -50%) rotate(45deg) scaleX(1.1);
}

.ray-diagonal-2 {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 0.125rem;
  transform: translate(-50%, -50%) rotate(-45deg) scaleX(1.1);
}

.sun-center {
  position: absolute;
  inset: 0.5rem;
  background-color: #fef08a;
  border-radius: 9999px;
  opacity: 0.6;
}

/* Moon design */
.moon-design {
  position: absolute;
  inset: 0;
  transition: opacity 300ms;
}

.moon-design-visible {
  opacity: 1;
}

.moon-design-hidden {
  opacity: 0;
}

.moon-circle {
  position: absolute;
  inset: 0;
  background-color: #e0f2fe;
  border-radius: 9999px;
}

.moon-crater-1 {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bfdbfe;
  border-radius: 9999px;
  opacity: 0.7;
}

.moon-crater-2 {
  position: absolute;
  bottom: 0.5rem;
  left: 0.75rem;
  width: 0.375rem;
  height: 0.375rem;
  background-color: #bfdbfe;
  border-radius: 9999px;
  opacity: 0.7;
}

.moon-crater-3 {
  position: absolute;
  top: 0.75rem;
  left: 0.5rem;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #bfdbfe;
  border-radius: 9999px;
  opacity: 0.7;
}
    `,
    fullcode: `
import React, { useState } from 'react';

export const NightDayToggle2 = () => {
  const [isOn, setIsOn] = useState(false);
  
  const toggleSwitch = () => setIsOn(!isOn);
  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div 
        onClick={toggleSwitch}
        className={\`relative w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ease-in-out \${
          isOn ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-gradient-to-r from-amber-300 to-yellow-400'
        }\`}
      >
        {/* Night indicator (moon) */}
        <div className={\`absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 \${isOn ? 'opacity-100' : 'opacity-0'}\`}>
          <div className="text-white opacity-0"></div>
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
        
        {/* Improved Day indicator (sun) */}
        <div className={\`absolute inset-0 flex justify-between items-center px-2 transition-opacity duration-300 \${isOn ? 'opacity-0' : 'opacity-100'}\`}>
          <div className="text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>
          <div className="text-white opacity-0"></div>
        </div>

        {/* Toggle Button with enhanced sun rays */}
        <div
          className={\`absolute w-8 h-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out \${
            isOn ? 'translate-x-10 bg-white' : 'translate-x-0 bg-white'
          } flex items-center justify-center overflow-hidden\`}
        >
          {/* Enhanced Sun design for day mode */}
          <div className={\`absolute inset-0 transition-opacity duration-300 \${isOn ? 'opacity-0' : 'opacity-100'}\`}>
            {/* Base sun circle */}
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full" />
            
            {/* Primary rays */}
            <div className="absolute w-full h-full">
              {/* Long rays */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 scale-x-125" />
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-300 transform -translate-x-1/2 scale-y-125" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-45 scale-x-110" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-45 scale-x-110" />
              
              {/* Short rays */}
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-22.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-22.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 rotate-67.5 scale-x-105" />
              <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -translate-x-1/2 -rotate-67.5 scale-x-105" />
            </div>
            
            {/* Center highlight */}
            <div className="absolute inset-2 bg-yellow-200 rounded-full opacity-60" />
          </div>
          
          {/* Moon surface for night mode */}
          <div className={\`absolute inset-0 transition-opacity duration-300 \${isOn ? 'opacity-100' : 'opacity-0'}\`}>
            <div className="absolute inset-0 bg-blue-100 rounded-full" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-200 rounded-full opacity-70" />
            <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-70" />
            <div className="absolute top-3 left-2 w-1 h-1 bg-blue-200 rounded-full opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};
    `
  },
  "Delete Account Card": {
    component: DeleteAccountCard,
    preview: `
      <div class="flex items-center justify-center">
        <div class="relative overflow-hidden rounded-xl shadow-lg bg-white w-72">
          <div class="p-6 cursor-pointer">
            <div class="flex items-center mb-4">
              <div class="p-3 rounded-full mr-4 bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Delete Account</h3>
                <p class="text-sm text-gray-500">Remove all your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `
<div class="flex items-center justify-center">
  <div class="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 bg-white w-72">
    <!-- Initial state -->
    <div class="p-6 cursor-pointer">
      <div class="flex items-center mb-4">
        <div class="p-3 rounded-full mr-4 transition-colors duration-300 bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-colors duration-300 text-gray-500">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800">Delete Account</h3>
          <p class="text-sm text-gray-500">Remove all your data</p>
        </div>
      </div>
      <div class="h-1 w-0 bg-red-500 rounded-full transition-all duration-300"></div>
    </div>
    
    <!-- Confirmation state would be shown here in the interactive component -->
  </div>
</div>
    `,
    css: `
/* Card container */
.delete-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  background-color: white;
  width: 18rem;
}

.delete-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.delete-card-confirming {
  background-color: #FEF2F2;
  width: 20rem;
}

.delete-card-success {
  background-color: #F0FDF4;
}

/* Card content */
.card-content {
  padding: 1.5rem;
  cursor: pointer;
}

/* Icon container */
.icon-container {
  padding: 0.75rem;
  border-radius: 9999px;
  margin-right: 1rem;
  transition: background-color 0.3s;
  background-color: #F3F4F6;
}

.icon-container-hover {
  background-color: #FEE2E2;
}

/* Trash icon */
.trash-icon {
  transition: color 0.3s;
  color: #6B7280;
}

.trash-icon-hover {
  color: #EF4444;
}

.trash-icon-success {
  color: #10B981;
}

/* Progress indicator */
.progress-indicator {
  height: 0.25rem;
  width: 0;
  background-color: #EF4444;
  border-radius: 9999px;
  transition: width 0.3s;
}

.progress-indicator-full {
  width: 100%;
}

/* Confirmation view */
.confirmation-view {
  padding: 1.5rem;
}

.confirmation-icon-container {
  margin: 0 auto;
  padding: 0.75rem;
  border-radius: 9999px;
  background-color: #FEE2E2;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.confirmation-title {
  font-weight: 600;
  color: #1F2937;
  font-size: 1.125rem;
}

.confirmation-description {
  font-size: 0.875rem;
  color: #6B7280;
  margin-top: 0.25rem;
}

/* Buttons */
.button-container {
  display: flex;
  gap: 0.75rem;
}

.cancel-button {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: #4B5563;
  background-color: #F3F4F6;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #E5E7EB;
}

.confirm-button {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: white;
  background-color: #EF4444;
  transition: background-color 0.3s;
}

.confirm-button:hover {
  background-color: #DC2626;
}

.confirm-button-disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}

/* Loading spinner */
.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success indicator */
.success-indicator {
  width: 100%;
  background-color: #10B981;
  height: 0.25rem;
  margin-top: 1rem;
}

.success-indicator-pulse {
  height: 100%;
  background-color: #6EE7B7;
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  width: 100%;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
    `,
    fullcode: `import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

export const DeleteAccountCard = () => {
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
    <div 
      className={\`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 \${
        isConfirming ? 'bg-red-50 w-80' : 'bg-white w-72'
      } \${isSuccess ? 'bg-green-50' : ''}\`}
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
            <div className={\`p-3 rounded-full mr-4 transition-colors duration-300 \${
              isHovering ? 'bg-red-100' : 'bg-gray-100'
            }\`}>
              <Trash2 
                className={\`transition-colors duration-300 \${
                  isHovering ? 'text-red-500' : 'text-gray-500'
                }\`} 
                size={24} 
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Delete Account</h3>
              <p className="text-sm text-gray-500">Remove all your data</p>
            </div>
          </div>
          <div className={\`h-1 w-0 bg-red-500 rounded-full transition-all duration-300 \${
            isHovering ? 'w-full' : 'w-0'
          }\`} />
        </div>
      ) : (
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mx-auto p-3 rounded-full bg-red-100 inline-block mb-3">
              <Trash2 
                className={\`\${isSuccess ? 'text-green-500' : 'text-red-500'}\`}
                size={28} 
              />
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
                className={\`flex-1 py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 \${
                  isDeleting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                }\`}
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
  );
};
    `
  },
  "Range Slider": {
    component: RangeSlider,
    preview: `
      <div class="w-full max-w-xl mx-auto p-4">
        <div class="relative h-10 w-full">
          <!-- Track background -->
          <div class="absolute inset-0 h-4 top-3 bg-gray-200 rounded-full"></div>
          
          <!-- Filled track with stripes -->
          <div class="absolute h-4 top-3 left-0 rounded-full overflow-hidden" style="width: 50%;">
            <div class="w-full h-full bg-blue-500 relative" style="background-image: linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent); background-size: 16px 16px;"></div>
          </div>
          
          <!-- Thumb -->
          <div class="absolute h-8 w-8 bg-white rounded-full top-1 shadow-md" style="left: 50%; margin-left: -16px;"></div>
        </div>
      </div>
    `,
    html: `
<div class="w-full max-w-xl mx-auto p-4">
  <div class="relative h-10 w-full">
    <!-- Track background -->
    <div class="absolute inset-0 h-4 top-3 bg-gray-200 rounded-full"></div>
    
    <!-- Filled track with stripes -->
    <div class="absolute h-4 top-3 left-0 rounded-full overflow-hidden" style="width: 50%;">
      <div 
        class="w-full h-full bg-blue-500 relative" 
        style="
          background-image: linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent);
          background-size: 16px 16px;
          animation: slideStripes 1s linear infinite;
        "
      ></div>
    </div>
    
    <!-- Thumb -->
    <div
      class="absolute h-8 w-8 bg-white rounded-full top-1 -ml-4 shadow-md"
      style="left: 50%;"
      role="slider"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="50"
      tabindex="0"
    ></div>
    
    <!-- Tooltip -->
    <div
      class="absolute -top-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-90 transform -translate-x-1/2"
      style="left: 50%;"
    >
      50
      <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
    </div>
  </div>
  
  <!-- Hidden native input for accessibility -->
  <input
    type="range"
    min="0"
    max="100"
    value="50"
    class="sr-only"
    aria-label="Slider"
  />
</div>

<style>
  @keyframes slideStripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 16px 0;
    }
  }
</style>
    `,
    css: `
/* Container */
.slider-container {
  width: 100%;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  touch-action: none;
}

/* Slider track container */
.slider-track-container {
  position: relative;
  height: 2.5rem;
  width: 100%;
}

/* Track background */
.slider-track-bg {
  position: absolute;
  inset: 0;
  height: 1rem;
  top: 0.75rem;
  background-color: #E5E7EB;
  border-radius: 9999px;
}

/* Filled track */
.slider-track-filled {
  position: absolute;
  height: 1rem;
  top: 0.75rem;
  left: 0;
  border-radius: 9999px;
  overflow: hidden;
  transition: width 0.1s linear;
}

/* Striped background */
.slider-track-stripes {
  width: 100%;
  height: 100%;
  background-color: #3B82F6;
  position: relative;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 75%,
    transparent 75%,
    transparent
  );
  background-size: 16px 16px;
  animation: slideStripes 1s linear infinite;
}

/* Thumb */
.slider-thumb {
  position: absolute;
  height: 2rem;
  width: 2rem;
  background-color: white;
  border-radius: 9999px;
  top: 0.25rem;
  margin-left: -1rem;
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: left 0.1s linear, transform 0.15s ease, box-shadow 0.15s ease;
}

.slider-thumb:focus {
  outline: none;
}

.slider-thumb-dragging {
  cursor: grabbing;
  transform: scale(1.1);
  box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider-thumb-hovering {
  transform: scale(1.05);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Inner glow effect */
.slider-thumb-glow {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: #3B82F6;
  opacity: 0.1;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Tooltip */
.slider-tooltip {
  position: absolute;
  top: -2.5rem;
  padding: 0.25rem 0.5rem;
  background-color: #1F2937;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  opacity: 0.9;
  transform: translateX(-50%);
  transition: opacity 0.2s;
}

.slider-tooltip-arrow {
  position: absolute;
  bottom: -0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: #1F2937;
  transform: translateX(-50%) rotate(45deg);
}

.slider-tooltip-visible {
  opacity: 1;
}

.slider-tooltip-hidden {
  opacity: 0;
}

/* Hidden native input */
.slider-native-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Animations */
@keyframes slideStripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 16px 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}
    `,
    fullcode: `
import React, { useState, useRef, useEffect } from 'react';

export const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef(null);
  
  // For sliding animation when value changes
  const [slideAnimation, setSlideAnimation] = useState(false);
  
  useEffect(() => {
    setSlideAnimation(true);
    const timer = setTimeout(() => setSlideAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [value]);
  
  // Handle keyboard controls for accessibility
  const handleKeyDown = (e) => {
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
  
  const [requestAnimationId, setRequestAnimationId] = useState(null);
  
  // Use requestAnimationFrame for smoother dragging
  const startSmoothTracking = (e) => {
    if (requestAnimationId) {
      cancelAnimationFrame(requestAnimationId);
    }
    
    const trackMouse = () => {
      if (isDragging) {
        updateValueFromEvent(e);
        setRequestAnimationId(requestAnimationFrame(() => trackMouse()));
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
  
  const handleMouseDown = (e) => {
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
  
  const updateValueFromEvent = (e) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const offsetX = clientX - rect.left;
    
    // Calculate exact percentage (not rounded) for smoother movement
    const exactPercentage = (offsetX / rect.width) * 100;
    
    // Clamp between 0-100 and limit to integers
    const newValue = Math.max(0, Math.min(100, Math.round(exactPercentage)));
    
    if (newValue !== value) {
      setValue(newValue);
    }
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      startSmoothTracking(e);
    }
  };
  
  const handleTouchMove = (e) => {
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
  const handleTrackClick = (e) => {
    updateValueFromEvent(e);
  };
  
  const handleSliderChange = (e) => {
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
            width: \`\${value}%\`,
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
          className={\`absolute h-8 w-8 bg-white rounded-full top-1 -ml-4 transform cursor-grab \${
            isDragging ? 'cursor-grabbing scale-110' : ''
          } \${
            isHovering && !isDragging ? 'scale-105' : ''
          } shadow-md transition-all duration-150\`}
          style={{ 
            left: \`\${value}%\`,
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
            className={\`absolute -top-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-90 transform -translate-x-1/2 transition-opacity duration-200 \${
              isDragging || isHovering ? 'opacity-100' : 'opacity-0'
            }\`}
            style={{ left: \`\${value}%\` }}
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
      
      <style>
        {\`
          @keyframes slideStripes {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 16px 0;
            }
          }
        \`}
      </style>
    </div>
  );
};
    `
  },
  "Notifications Popup": {
    component: NotificationsPopup,
    preview: `
      <div class="flex items-center justify-center p-4">
        <div class="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 h-16 w-64">
          <div class="flex cursor-pointer items-center px-4 py-4">
            <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div class="text-lg font-semibold text-gray-800">2 Notifications</div>
            <div class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <div class="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50"></div>
        </div>
      </div>
    `,
    html: `
<div class="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 h-16 w-64">
  <!-- Top header section -->
  <div class="flex cursor-pointer items-center px-4 py-4">
    <!-- Notification bell -->
    <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    </div>
    
    <!-- Notification count -->
    <div class="text-lg font-semibold text-gray-800">2 Notifications</div>
    
    <!-- Dropdown indicator -->
    <div class="ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </div>
  
  <!-- Top highlight effect -->
  <div class="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50"></div>
</div>
    `,
    css: `
/* Base styles */
.notifications-popup {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 
              0 8px 10px -6px rgba(59, 130, 246, 0.1);
  width: 16rem;
  height: 4rem;
  transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);
}

.notifications-popup.expanded {
  height: auto;
  max-height: 24rem;
  width: 20rem;
}

/* Header styles */
.notifications-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}

.bell-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  margin-right: 0.75rem;
  background: linear-gradient(to right, #6366f1, #3b82f6);
  transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bell-icon:hover {
  transform: scale(1.1);
}

.notification-count {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

.dropdown-indicator {
  margin-left: auto;
  color: #9ca3af;
  transition: transform 300ms ease;
}

.notifications-popup.expanded .dropdown-indicator {
  transform: rotate(180deg);
}

/* Top highlight */
.top-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.125rem;
  background: linear-gradient(to right, #6366f1, #3b82f6);
  opacity: 0.5;
}

/* Notification items */
.notification-content {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);
}

.notifications-popup.expanded .notification-content {
  max-height: 20rem;
  opacity: 1;
}

.notification-item {
  display: flex;
  margin: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 200ms ease;
}

.notification-item:hover {
  background-color: #f9fafb;
}

/* Animations */
@keyframes bell-shake {
  0% { transform: rotate(0); }
  10% { transform: rotate(10deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(6deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(2deg); }
  60% { transform: rotate(0); }
  100% { transform: rotate(0); }
}
    `,
    fullcode: `import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export const NotificationsPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'John Doe',
      action: 'followed you',
      avatar: '/api/placeholder/32/32',
      time: '2m ago'
    },
    {
      id: 2,
      name: 'Jane Doe',
      action: 'followed you',
      avatar: '/api/placeholder/32/32',
      time: '5m ago'
    }
  ]);

  // Animation timing variables
  const animationDuration = 350; // in ms
  const animationEasing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // iOS-like easing

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div 
        className={\`relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 \${
          isExpanded 
            ? 'h-auto max-h-96 w-80' 
            : 'h-16 w-64'
        }\`}
        style={{
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
          transition: \`all \${animationDuration}ms \${animationEasing}\`
        }}
      >
        {/* Top header section */}
        <div 
          className="flex cursor-pointer items-center px-4 py-4"
          onClick={toggleExpanded}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Notification bell with animation */}
          <div 
            className={\`mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 \${
              isHovered ? 'scale-110' : 'scale-100'
            }\`}
            style={{
              transition: \`transform 250ms \${animationEasing}\`
            }}
          >
            <Bell 
              size={20} 
              className="text-white" 
              style={{
                animation: isHovered ? 'bell-shake 0.8s ease-in-out' : 'none'
              }}
            />
          </div>
          
          {/* Notification count */}
          <div className="text-lg font-semibold text-gray-800">
            {notifications.length} Notifications
          </div>
          
          {/* Animated indicator */}
          <div 
            className={\`ml-auto transition-transform duration-300 \${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }\`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        
        {/* Expandable content */}
        <div 
          className={\`overflow-hidden transition-all duration-300 \${
            isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }\`}
          style={{
            transition: \`all \${animationDuration}ms \${animationEasing}\`
          }}
        >
          <div className="px-2 pb-4">
            {/* Notification items */}
            {notifications.map(notification => (
              <div 
                key={notification.id}
                className="group mx-2 my-2 flex rounded-xl p-3 transition-all duration-200 hover:bg-gray-50"
              >
                {/* Avatar */}
                <div className="mr-3 h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-gray-300 to-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-1 text-gray-400">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                
                {/* Notification content */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <div className="font-medium text-gray-700">
                      {notification.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {notification.time}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {notification.action}
                  </div>
                </div>
              </div>
            ))}
            
            {/* View all button */}
            <div className="mt-2 px-4">
              <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg">
                View All
              </button>
            </div>
          </div>
        </div>
        
        {/* Top highlight effect */}
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50"></div>
      </div>
      
      {/* Custom animations */}
      <style>{\`
        @keyframes bell-shake {
          0% { transform: rotate(0); }
          10% { transform: rotate(10deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(6deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(2deg); }
          60% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
      \`}</style>
    </div>
  );
};`
  },
  "Teal Auth Form": {
    component: TealAuthForm,
    preview: `
      <div class="flex items-center justify-center scale-[0.85] -mt-6 -mb-6">
        <div class="w-64">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Select Options</label>
          </div>
          <div class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 rounded-xl">
            <span class="text-gray-400">Select an option</span>
            <div class="dropdown-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="w-full max-w-md mx-auto">
  <!-- Dropdown container -->
  <div class="relative">
    <!-- Dropdown title -->
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button (closed state) -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 hover:border-teal-400 rounded-xl transition-all duration-150">
      <span class="text-gray-400">Select an option</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </button>
  </div>
</div>

<!-- Dropdown Open State Example -->
<div class="w-full max-w-md mx-auto mt-8">
  <div class="relative">
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button (open state) -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-teal-500 ring-2 ring-teal-100 rounded-xl transition-all duration-150">
      <span class="text-gray-400">Select an option</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </button>
    
    <!-- Dropdown options -->
    <div class="dropdown-options absolute z-20 w-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="py-1 max-h-60 overflow-auto">
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer bg-teal-50">
          <span className="text-gray-700">Design System</span>
        </div>
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-teal-600 font-medium">Components</span>
          <div className="checkmark-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div className="option-item flex items-center justify-between px-4 py-3 cursor-pointer">
          <span className="text-gray-700">Templates</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Selected State Example -->
<div class="w-full max-w-md mx-auto mt-8">
  <div class="relative">
    <div class="mb-2">
      <label class="block text-sm font-medium text-gray-700">Select Options</label>
    </div>
    
    <!-- Dropdown trigger button with selection -->
    <button class="dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white border border-gray-200 hover:border-teal-400 rounded-xl transition-all duration-150">
      <span class="text-gray-800">Components</span>
      <div class="dropdown-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </button>
  </div>
</div>`,
    css: `/* Basic Dropdown Animation Styles */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes bobble {
  0% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}

@keyframes checkmark {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.dropdown-options {
  animation: scaleIn 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transform-origin: top center;
}

.dropdown-backdrop {
  animation: fadeIn 0.15s ease-out;
}

.option-item {
  transition: all 0.2s ease;
}

.option-item:hover {
  background-color: rgba(236, 253, 252, 1);
}

.dropdown-icon {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dropdown-trigger:hover .dropdown-icon {
  animation: bobble 0.6s ease;
}

.checkmark-animation {
  animation: checkmark 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Dropdown Container Styles */
.dropdown-container {
  position: relative;
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

.dropdown-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  text-align: left;
  transition: all 0.15s ease;
}

.dropdown-button:hover {
  border-color: #14b8a6;
}

.dropdown-button.active {
  border-color: #14b8a6;
  box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.1);
}

.dropdown-placeholder {
  color: #9ca3af;
}

.dropdown-selected {
  color: #1f2937;
}

.dropdown-menu {
  position: absolute;
  z-index: 20;
  width: 100%;
  margin-top: 0.25rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  overflow: hidden;
}

.dropdown-options-list {
  padding: 0.25rem 0;
  max-height: 15rem;
  overflow-y: auto;
}

.dropdown-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
}

.dropdown-option:hover {
  background-color: #ecfdfc;
}

.dropdown-option-text {
  color: #374151;
}

.dropdown-option-text.selected {
  color: #0d9488;
  font-weight: 500;
}

.dropdown-check {
  color: #14b8a6;
}`,
    fullcode: `import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

type Option = {
  id: number;
  label: string;
  value: string;
};

export const BasicDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const options: Option[] = [
    { id: 1, label: 'Design System', value: 'design' },
    { id: 2, label: 'Components', value: 'components' },
    { id: 3, label: 'Templates', value: 'templates' }
  ];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Dropdown container */}
      <div ref={dropdownRef} className="relative">
        {/* Dropdown title */}
        <div className="mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Options</label>
        </div>
        
        {/* Dropdown trigger button */}
        <button
          className={\`dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white dark:bg-gray-800 border rounded-xl transition-all duration-150 \${
            isOpen ? 'border-teal-500 ring-2 ring-teal-100 dark:ring-teal-900 dark:border-teal-400' : 'border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500'
          }\`}
          onClick={toggleDropdown}
        >
          <span className={\`\${selectedOption ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}\`}>
            {selectedOption ? selectedOption.label : 'Select an option'}
          </span>
          <div className="dropdown-icon">
            {isOpen ? (
              <ChevronUp size={18} className="text-teal-500" />
            ) : (
              <ChevronDown size={18} className="text-gray-400 dark:text-gray-500" />
            )}
          </div>
        </button>
        
        {/* Dropdown menu */}
        {isOpen && (
          <>
            {/* Backdrop overlay - mobile only */}
            <div className="dropdown-backdrop fixed inset-0 bg-black bg-opacity-5 z-10 md:hidden" onClick={() => setIsOpen(false)} />
            
            {/* Dropdown options */}
            <div className="dropdown-options absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="py-1 max-h-60 overflow-auto">
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className={\`option-item flex items-center justify-between px-4 py-3 cursor-pointer \${
                      hoverIndex === index ? 'bg-teal-50 dark:bg-teal-900/30' : ''
                    }\`}
                    onClick={() => handleOptionSelect(option)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <span className={\`\${selectedOption?.id === option.id ? 'text-teal-600 dark:text-teal-400 font-medium' : 'text-gray-700 dark:text-gray-300'}\`}>
                      {option.label}
                    </span>
                    
                    {selectedOption?.id === option.id && (
                      <div className="checkmark-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};`
  },
  "Minimal Auth Form": {
    component: MinimalAuthForm,
    preview: `
      <div class="flex items-center justify-center scale-[0.75]">
        <div class="relative w-full max-w-md overflow-hidden rounded-2xl bg-white">
          <div class="p-8">
            <h2 class="mb-8 text-2xl font-medium text-gray-900">Sign in</h2>
            <div class="space-y-4">
              <div class="relative">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900"
                />
              </div>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900"
                />
              </div>
              <button
                class="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-white"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="flex min-h-screen w-full items-center justify-center bg-white p-4">
  <div class="relative w-full max-w-md overflow-hidden rounded-2xl bg-white">
    <div class="p-8">
      <h2 class="mb-8 text-2xl font-medium text-gray-900">Sign in</h2>
      
      <form class="space-y-4">
        <div class="relative">
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
            required
          />
        </div>

        <div class="relative">
          <input
            type="password"
            placeholder="Password"
            class="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </button>
        </div>

        <button
          type="submit"
          class="relative w-full rounded-lg bg-gray-900 px-4 py-2.5 text-white transition-all duration-200 hover:bg-gray-800"
        >
          Sign in
        </button>

        <div class="flex items-center justify-between text-sm">
          <button
            type="button"
            class="text-gray-600 hover:text-gray-900"
          >
            Need an account?
          </button>
          
          <button
            type="button"
            class="text-gray-600 hover:text-gray-900"
          >
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`,
    css: `/* Minimal Auth Form Animations */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-animate-in {
  animation: fadeSlideUp 0.5s ease forwards;
}

.input-field {
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #111827;
  outline: none;
}

.btn-animate {
  transition: all 0.2s ease;
}

.btn-animate:hover {
  transform: translateY(-1px);
}

.btn-animate:active {
  transform: translateY(0);
}`,
    fullcode: `import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const MinimalAuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formActive, setFormActive] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormActive(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  const toggleAuthMode = () => {
    setFormActive(false);
    
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setEmail('');
      setPassword('');
      
      setTimeout(() => {
        setFormActive(true);
      }, 100);
    }, 400);
  };
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div 
        className={\`relative w-full max-w-md overflow-hidden rounded-2xl bg-white transition-all duration-500 \${
          formActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }\`}
        style={{
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="p-8">
          <div 
            className={\`transition-all duration-500 \${
              formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }\`}
          >
            <h2 className="mb-8 text-2xl font-medium text-gray-900">
              {isSignUp ? 'Create account' : 'Sign in'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div 
              className={\`transition-all duration-500 \${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }\`}
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div 
              className={\`transition-all duration-500 \${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }\`}
            >
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-900"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={\`relative w-full rounded-lg bg-gray-900 px-4 py-2.5 text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-70 \${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }\`}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </>
                ) : (
                  <>{isSignUp ? 'Create account' : 'Sign in'}</>
                )}
              </span>
            </button>

            <div 
              className={\`flex items-center justify-between text-sm transition-all duration-500 \${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }\`}
            >
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-gray-600 hover:text-gray-900"
              >
                {isSignUp ? 'Already have an account?' : 'Need an account?'}
              </button>
              
              {!isSignUp && (
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Forgot password?
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MinimalAuthForm;`
  },
  "IOS Styled Auth Form": {
    component: IOSStyledAuthForm,
    preview: `
      <div class="flex items-center justify-center scale-[0.75] origin-top -mb-40">
        <div class="w-full max-w-[450px] flex flex-col gap-2.5 bg-white p-8 rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
          <h2 class="text-center font-bold text-xl mb-4">Sign In</h2>
          
          <div class="flex-column">
            <label class="text-[#1c1c1e] font-semibold mb-1.5 block">Email</label>
          </div>
          <div class="border-[1.5px] border-[#e2e2e7] rounded-[10px] h-[50px] flex items-center pl-2.5 bg-[#f8f8fa]">
            <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input placeholder="Enter your Email" class="ml-2.5 rounded-[10px] border-none w-full h-full bg-transparent" type="email" />
          </div>
          
          <div class="flex-column">
            <label class="text-[#1c1c1e] font-semibold mb-1.5 block">Password</label>
          </div>
          <div class="border-[1.5px] border-[#e2e2e7] rounded-[10px] h-[50px] flex items-center pl-2.5 bg-[#f8f8fa]">
            <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input placeholder="Enter your Password" class="ml-2.5 rounded-[10px] border-none w-full h-full bg-transparent" type="password" />
          </div>
          
          <button class="mt-5 mb-2.5 bg-[#5856d6] text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full">
            Sign In
          </button>
        </div>
      </div>
    `,
    html: `<div class="flex items-center justify-center p-4">
  <div class="form w-full max-w-[450px] flex flex-col gap-2.5 bg-white p-8 rounded-[20px] font-[-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_sans-serif] shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
    <h2 class="text-center font-bold text-xl mb-4">Sign In</h2>
    
    <div class="flex-column">
      <label class="text-[#1c1c1e] font-semibold mb-1.5 block">Email</label>
    </div>
    <div class="inputForm border-[1.5px] border-[#e2e2e7] rounded-[10px] h-[50px] flex items-center pl-2.5 transition-all duration-200 ease-in-out mb-2.5 bg-[#f8f8fa] focus-within:border-[#5856d6] focus-within:bg-white">
      <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      <input placeholder="Enter your Email" class="ml-2.5 rounded-[10px] border-none w-full h-full bg-transparent focus:outline-none" type="email" />
    </div>
    
    <div class="flex-column">
      <label class="text-[#1c1c1e] font-semibold mb-1.5 block">Password</label>
    </div>
    <div class="inputForm border-[1.5px] border-[#e2e2e7] rounded-[10px] h-[50px] flex items-center pl-2.5 transition-all duration-200 ease-in-out mb-2.5 bg-[#f8f8fa] focus-within:border-[#5856d6] focus-within:bg-white">
      <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <input placeholder="Enter your Password" class="ml-2.5 rounded-[10px] border-none w-full h-full bg-transparent focus:outline-none" type="password" />
    </div>

    <div class="flex justify-end">
      <span class="text-sm text-[#5856d6] font-medium cursor-pointer hover:text-[#4a3df5] transition-colors">
        Forgot password?
      </span>
    </div>
    
    <button class="group relative mt-5 mb-2.5 bg-[#5856d6] text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:bg-[#4a3df5] hover:shadow-[0_5px_15px_rgba(88,86,214,0.3)] hover:-translate-y-0.5">
      Sign In
      <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"></div>
    </button>
    
    <p class="text-center text-black text-sm my-1.5">
      Don't have an account? 
      <span class="text-[#5856d6] font-medium cursor-pointer hover:text-[#4a3df5] transition-colors">Sign Up</span>
    </p>
    
    <p class="text-center text-black text-sm my-1.5 relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[35%] before:h-px before:bg-[#e0e0e0] after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[35%] after:h-px after:bg-[#e0e0e0]">
      Or With
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      <button class="group relative h-[50px] rounded-[10px] flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:border-[#5856d6] hover:shadow-[0_5px_15px_rgba(88,86,214,0.1)] hover:-translate-y-0.5">
        <svg class="w-5 h-5" viewBox="0 0 512 512">
          <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
          <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
          <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
          <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"></path>
        </svg>
        Google
        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"></div>
      </button>
      
      <button class="group relative h-[50px] rounded-[10px] flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:border-[#5856d6] hover:shadow-[0_5px_15px_rgba(88,86,214,0.1)] hover:-translate-y-0.5">
        <svg class="w-5 h-5" viewBox="0 0 22.773 22.773">
          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
        </svg>
        Apple
        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"></div>
      </button>
    </div>
  </div>
</div>`,
    css: `/* IOS Styled Auth Form Animations */
@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(30deg);
    opacity: 0;
  }
  100% {
    transform: translateX(100%) rotate(30deg);
    opacity: 1;
  }
}

.shimmer-button:before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shimmer 0.7s ease-in-out infinite;
  z-index: 1;
  opacity: 0;
}

.shimmer-button:hover:before {
  opacity: 1;
}`,
    fullcode: IOSStyledAuthForm.toString()
  },
  "Newsletter Subscribe": {
    component: NewsletterSubscribe,
    preview: `
      <div class="w-full max-w-md mx-auto">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="#22C55E">
                <path d="M502.3 190.8c3.9-3.1 9.7-0.4 9.7 4.6v204.1c0 26.5-21.5 48-48 48H48c-26.5 
                0-48-21.5-48-48V195.4c0-5 5.7-7.7 9.7-4.6c22.4 17.5 52.1 40.6 154.1 
                113.2c21.1 15.4 56.7 47.8 92.2 47.7c35.7 0.3 72.2-32.8 92.3-47.7 
                c102-72.6 131.7-95.7 154.1-113.2z"/>
              </svg>
            </div>
            <h2 class="text-lg font-semibold">Subscribe to Newsletter</h2>
          </div>
          <div class="relative">
            <input type="email" placeholder="Enter your email" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200" />
            <button class="mt-3 w-full bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<div class="w-full max-w-md mx-auto">
  <div class="newsletter-container">
    <div class="newsletter-header">
      <div class="icon-circle">
        <svg viewBox="0 0 512 512" width="20" height="20" fill="#22C55E">
          <path d="M502.3 190.8c3.9-3.1 9.7-0.4 9.7 4.6v204.1c0 26.5-21.5 48-48 48H48c-26.5 
          0-48-21.5-48-48V195.4c0-5 5.7-7.7 9.7-4.6c22.4 17.5 52.1 40.6 154.1 
          113.2c21.1 15.4 56.7 47.8 92.2 47.7c35.7 0.3 72.2-32.8 92.3-47.7 
          c102-72.6 131.7-95.7 154.1-113.2zM256 320c23.2 0.4 56.8-29.2 73.4-41 
          c132.6-94.3 142.2-102.7 173.4-126.2c5.8-4.3 9.2-11.1 9.2-18.4c0-13-10.5-23.6-23.6-23.6
          H23.6C10.5 110.8 0 121.4 0 134.4c0 7.3 3.4 14 9.2 18.4c31.2 23.4 40.8 
          31.8 173.4 126.2c16.6 11.9 50.1 41.3 73.4 41z"/>
        </svg>
      </div>
      <h2>Subscribe to Our Newsletter</h2>
    </div>

    <form class="newsletter-form">
      <label for="email">Email Address</label>
      <input
        type="email"
        id="email"
        placeholder="e.g., name@example.com"
      />

      <button type="submit">
        Subscribe
      </button>
    </form>
  </div>
</div>`,
    css: `/* Container */
.newsletter-container {
  max-width: 24rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 1.5rem;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Header */
.newsletter-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.newsletter-header h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
}

.icon-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #bbf7d0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

/* Form */
.newsletter-form {
  display: flex;
  flex-direction: column;
}

.newsletter-form label {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.newsletter-form input {
  padding: 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s;
  background-color: #fff;
}

.newsletter-form input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.newsletter-form button {
  position: relative;
  overflow: hidden;
  background: #22c55e;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
}

.newsletter-form button:hover {
  transform: translateY(-1px);
  background: #16a34a;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
}

/* Success state */
.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.success-message h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #1a1a1a;
  font-weight: 600;
}

.success-message p {
  font-size: 0.9rem;
  color: #4b5563;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  background: #bbf7d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  animation: bounce 1.5s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: translateY(0); }
}

/* Responsive */
@media (max-width: 640px) {
  .newsletter-container {
    max-width: 100%;
    margin: 0;
    border-radius: 0.75rem;
  }
  .newsletter-header h2 {
    font-size: 1.1rem;
  }
}`,
    fullcode: NewsletterSubscribe.toString()
  },
  "Animated Checklist": {
    component: AnimatedChecklist,
    preview: `
      <div class="flex items-center justify-center w-full">
        <div id="checklist">
          <input type="checkbox" id="item1" checked />
          <label for="item1">List Item 1</label>
          <input type="checkbox" id="item2" />
          <label for="item2">List Item 2</label>
          <input type="checkbox" id="item3" />
          <label for="item3">List Item 3</label>
        </div>
      </div>
    `,
    html: `
      <div id="checklist">
        <input type="checkbox" id="01" checked />
        <label for="01">List Item 1</label>
        <input type="checkbox" id="02" />
        <label for="02">List Item 2</label>
        <input type="checkbox" id="03" />
        <label for="03">List Item 3</label>
        <input type="checkbox" id="04" />
        <label for="04">List Item 4</label>
        <input type="checkbox" id="05" />
        <label for="05">List Item 5</label>
      </div>
    `,
    css: `
      #checklist {
        --background: #f8fafc;
        --text: #1e293b;
        --check: #1da1f2;
        --check-hover: #0c85d0;
        --disabled: #a0aec0;
        --border-radius: 16px;
        background: var(--background);
        width: 100%;
        max-width: 260px;
        border-radius: var(--border-radius);
        box-shadow: 0 12px 50px rgba(0,0,0,0.06);
        padding: 24px;
        display: grid;
        grid-template-columns: 30px auto;
        align-items: center;
        row-gap: 18px;
      }

      #checklist label {
        color: var(--text);
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 100%;
        transition: color 0.3s ease;
      }

      #checklist input[type="checkbox"] {
        -webkit-appearance: none;
        position: relative;
        height: 20px;
        width: 20px;
        outline: none;
        border: 2px solid #d1d5db;
        border-radius: 50%;
        margin: 0 15px 0 0;
        cursor: pointer;
        background: var(--background);
        transition: all 0.2s ease;
      }

      #checklist input[type="checkbox"]:checked {
        background: var(--check);
        border-color: var(--check);
      }

      #checklist input[type="checkbox"]:hover {
        border-color: var(--check-hover);
        transform: scale(1.05);
      }

      #checklist input[type="checkbox"]:checked + label {
        color: var(--disabled);
        animation: move 0.3s ease forwards;
      }

      @keyframes move {
        50% {
          padding-left: 8px;
          padding-right: 0px;
        }
        100% {
          padding-right: 4px;
        }
      }
    `,
    fullcode: `import React from 'react';
import './animated-checklist.css';

export const AnimatedChecklist: React.FC = () => {
  return (
    <div className="relative flex justify-center w-full">
      <div id="checklist">
        <input defaultChecked defaultValue={1} name="r" type="checkbox" id="01" />
        <label htmlFor="01">List Item 1</label>
        <input defaultValue={2} name="r" type="checkbox" id="02" />
        <label htmlFor="02">List Item 2</label>
        <input defaultValue={3} name="r" type="checkbox" id="03" />
        <label htmlFor="03">List Item 3</label>
        <input defaultValue={4} name="r" type="checkbox" id="04" />
        <label htmlFor="04">List Item 4</label>
        <input defaultValue={5} name="r" type="checkbox" id="05" />
        <label htmlFor="05">List Item 5</label>
      </div>
    </div>
  );
};

export default AnimatedChecklist;`
  }
};

// Export the registry
export const getComponentCode = (name: string): ComponentCode | null => {
  return componentRegistry2[name] || null;
};
