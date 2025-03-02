import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AnimatedSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const AnimatedSearchInput = React.forwardRef<HTMLInputElement, AnimatedSearchInputProps>(
  ({ className, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside to collapse the search bar
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          if (isExpanded && query === '') {
            setIsExpanded(false);
          }
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isExpanded, query]);

    // Focus input when expanded
    useEffect(() => {
      if (isExpanded && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isExpanded]);

    const handleExpand = () => {
      setIsExpanded(true);
    };

    const handleClear = () => {
      setQuery('');
      inputRef.current?.focus();
    };

    return (
      <div className={cn("flex justify-center items-center", className)}>
        <div 
          ref={containerRef}
          className={cn(
            "relative flex items-center rounded-full shadow-md transition-all duration-500 ease-in-out",
            isExpanded 
              ? "w-64 bg-background border border-input hover:border-primary" 
              : "w-12 h-12 bg-primary hover:bg-primary/90 cursor-pointer"
          )}
          onClick={!isExpanded ? handleExpand : undefined}
        >
          <div 
            className={cn(
              "flex items-center justify-center transition-all duration-500",
              isExpanded 
                ? "w-12 h-12 text-primary" 
                : "w-12 h-12 text-primary-foreground"
            )}
          >
            <Search 
              size={20} 
              className="transition-transform duration-300 ease-out hover:scale-110" 
            />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className={cn(
              "outline-none bg-transparent text-foreground placeholder:text-muted-foreground",
              "transition-all duration-500 ease-in-out focus-visible:outline-none",
              isExpanded ? "w-full opacity-100 pr-8" : "w-0 opacity-0 absolute"
            )}
            {...props}
          />
          
          {isExpanded && query && (
            <button 
              onClick={handleClear}
              className={cn(
                "absolute right-3 w-6 h-6 flex items-center justify-center rounded-full",
                "hover:bg-accent transition-all duration-200 text-muted-foreground hover:text-foreground"
              )}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

AnimatedSearchInput.displayName = "AnimatedSearchInput"; 