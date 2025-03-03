import React from 'react';

type SocialMediaPlatform = {
  id: string;
  name: string;
  color: string;
  url?: string;
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
            aria-label={`${platform.name} icon`}
            type="button"
          >
            <div 
              className={`
                relative z-10 p-4 rounded-full flex items-center justify-center
                bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-out
                group-hover:text-white group-hover:scale-110 group-hover:shadow-xl
                ${platform.gradient ? `group-hover:${platform.gradient}` : `group-hover:bg-[${platform.color}]`}
              `}
            >
              {platform.icon}
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping-once"
                style={{ background: platform.color }}
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
              <span 
                className={`
                  text-xs font-medium px-2.5 py-1 rounded-full text-white
                  ${platform.gradient ? platform.gradient : `bg-[${platform.color}]`}
                `}
              >
                {platform.name}
              </span>
            </div>
            
            <div 
              className={`
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-30
                transition-opacity duration-300 blur-lg scale-110
                ${platform.gradient ? platform.gradient : `bg-[${platform.color}]`}
              `}
            />
          </button>
        ))}
      </div>
      
      {/* Animation styles are added in the global CSS file */}
    </div>
  );
}; 