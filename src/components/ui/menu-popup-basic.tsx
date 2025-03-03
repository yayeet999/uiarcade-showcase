import React, { useState, useRef, useEffect } from 'react';
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
                    console.log(`Selected: ${item.label}`);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ 
                      backgroundColor: `${item.color}15`, // 15% opacity
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
          className={`plus-icon flex items-center justify-center w-14 h-14 rounded-full shadow-md focus:outline-none z-20 relative ${
            isOpen ? 'bg-purple-600 plus-to-x' : 'bg-gradient-to-r from-purple-500 to-indigo-500 x-to-plus'
          } ${isHovering && !isOpen ? 'plus-pulse' : ''}`}
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
}; 