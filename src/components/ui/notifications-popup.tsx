import React, { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';

export const NotificationsPopup: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'John Doe',
      action: 'followed you',
      avatar: '/api/placeholder/32/32',
      time: '2m ago',
      unread: true
    },
    {
      id: 2,
      name: 'Jane Doe',
      action: 'followed you',
      avatar: '/api/placeholder/32/32',
      time: '5m ago',
      unread: true
    },
    {
      id: 3,
      name: 'Alex Smith',
      action: 'liked your post',
      avatar: '/api/placeholder/32/32',
      time: '15m ago',
      unread: false
    }
  ]);

  // Animation timing variables
  const animationDuration = 400; // slightly longer for smoother feel
  const animationEasing = 'cubic-bezier(0.2, 1, 0.3, 1)'; // refined iOS-like easing
  
  // Add hover effect for the entire component
  const [componentHovered, setComponentHovered] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    
    // Add subtle haptic-like effect
    if (headerRef.current) {
      headerRef.current.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transform = 'scale(1)';
        }
      }, 100);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div 
        className={`relative overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-300 ${
          isExpanded 
            ? 'h-auto max-h-96 w-80' 
            : 'h-16 w-64'
        }`}
        style={{
          backgroundColor: componentHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
          boxShadow: componentHovered 
            ? '0 20px 30px -8px rgba(59, 130, 246, 0.15), 0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.05)'
            : '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.02)',
          transition: `all ${animationDuration}ms ${animationEasing}`
        }}
        onMouseEnter={() => setComponentHovered(true)}
        onMouseLeave={() => setComponentHovered(false)}
      >
        {/* Top header section */}
        <div 
          ref={headerRef}
          className="flex cursor-pointer items-center px-4 py-4"
          onClick={toggleExpanded}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: `transform 200ms ${animationEasing}`
          }}
        >
          {/* Notification bell with animation */}
          <div 
            className={`mr-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{
              background: `linear-gradient(135deg, ${isHovered ? '#4f46e5' : '#6366f1'}, ${isHovered ? '#2563eb' : '#3b82f6'})`,
              boxShadow: isHovered ? '0 0 20px rgba(79, 70, 229, 0.3)' : '0 0 0 rgba(79, 70, 229, 0)',
              transition: `all 350ms ${animationEasing}`
            }}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-20' : 'opacity-0'
            }`}></div>
            
            <Bell 
              size={20} 
              className="text-white" 
              style={{
                animation: isHovered ? 'bell-shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97)' : 'none',
                transformOrigin: 'top center'
              }}
            />
            
            {/* Ripple effect when clicked */}
            <div className={`absolute inset-0 rounded-full bg-white opacity-0 ${
              isExpanded ? 'animate-ping-subtle' : ''
            }`}></div>
          </div>
          
          {/* Notification count */}
          <div className="text-lg font-semibold text-gray-800">
            {notifications.length} Notifications
          </div>
          
          {/* Animated indicator */}
          <div 
            className={`ml-auto text-gray-400 transition-all duration-500 ${
              isExpanded ? 'rotate-180 text-indigo-500' : 'rotate-0'
            }`}
            style={{
              transition: `all 400ms ${animationEasing}`
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        
        {/* Expandable content */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            transition: `all ${animationDuration}ms ${animationEasing}`
          }}
        >
          <div className="px-2 pb-4">
            {/* Notification items */}
            {notifications.map((notification, index) => (
              <div 
                key={notification.id}
                className="group relative mx-2 my-2 flex cursor-pointer rounded-xl p-3 transition-all duration-300 hover:bg-indigo-50"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isExpanded ? 'fade-in 400ms forwards' : 'none',
                  opacity: 0,
                  transform: 'translateY(10px)'
                }}
              >
                {/* Unread indicator */}
                {notification.unread && (
                  <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-indigo-500"></div>
                )}
                
                {/* Avatar */}
                <div className="mr-3 h-8 w-8 overflow-hidden rounded-full bg-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <div className="h-full w-full rounded-full bg-gradient-to-tr from-indigo-100 to-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-1 text-indigo-400 opacity-80">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                
                {/* Notification content */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <div className={`font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {notification.time}
                    </div>
                  </div>
                  <div className={`text-sm ${notification.unread ? 'text-gray-700' : 'text-gray-500'}`}>
                    {notification.action}
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-full w-0.5 rounded-full bg-indigo-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
            
            {/* View all button */}
            <div className="mt-2 px-4">
              <button 
                className="group relative w-full overflow-hidden rounded-xl py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
                  animation: isExpanded ? 'fade-in-up 500ms forwards' : 'none',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  animationDelay: '300ms'
                }}
              >
                <span className="relative z-10">View All</span>
                
                {/* Gradient hover effect */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, #4338ca, #1d4ed8)'
                  }}
                ></div>
                
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 -translate-x-full skew-x-12 bg-white opacity-0 transition-transform group-hover:translate-x-full group-hover:opacity-20"
                  style={{
                    transitionDuration: '750ms'
                  }}
                ></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Top highlight effect */}
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50"></div>
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes bell-shake {
          0% { transform: rotate(0); }
          10% { transform: rotate(8deg); }
          20% { transform: rotate(-7deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-3deg); }
          50% { transform: rotate(2deg); }
          60% { transform: rotate(-1deg); }
          70% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping-subtle {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          70%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationsPopup; 