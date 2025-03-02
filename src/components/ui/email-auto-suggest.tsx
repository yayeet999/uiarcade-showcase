import React, { useState, useRef, useEffect } from 'react';
import { Mail, X, Check, AlertCircle, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface EmailAutoSuggestProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const EmailAutoSuggest = React.forwardRef<HTMLInputElement, EmailAutoSuggestProps>(
  ({ className, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [touched, setTouched] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [userName, setUserName] = useState('');
    const [domain, setDomain] = useState('');
    const [animationState, setAnimationState] = useState<'initial' | 'expanding' | 'expanded' | 'collapsing' | 'submitting' | 'submitted'>('initial');
    
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const commonDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'icloud.com',
      'hotmail.com',
      'protonmail.com',
      'aol.com',
      'me.com'
    ];
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const handleExpand = () => {
      setAnimationState('expanding');
      setIsExpanded(true);
      
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
        setAnimationState('expanded');
      }, 400);
    };
    
    const handleCollapse = () => {
      if (email) {
        setEmail('');
        inputRef.current?.focus();
        return;
      }
      
      setAnimationState('collapsing');
      setShowSuggestions(false);
      
      setTimeout(() => {
        setIsExpanded(false);
        setAnimationState('initial');
      }, 300);
    };
    
    useEffect(() => {
      if (email.includes('@')) {
        const [prefix, suffix] = email.split('@');
        setUserName(prefix);
        setDomain(suffix);
      } else {
        setUserName(email);
        setDomain('');
      }
    }, [email]);
    
    useEffect(() => {
      if (domain && domain.length > 0 && !domain.includes('.')) {
        const filtered = commonDomains.filter(d => 
          d.startsWith(domain.toLowerCase())
        );
        setSuggestions(filtered);
        setShowSuggestions(filtered.length > 0 && isFocused);
        setHighlightedIndex(-1);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, [domain, isFocused]);
    
    const validateEmail = (email: string) => {
      const isValidFormat = emailRegex.test(email);
      setIsValid(isValidFormat);
      return isValidFormat;
    };
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      
      if (touched) {
        validateEmail(value);
      }
    };
    
    const applySuggestion = (suggestion: string) => {
      const newEmail = `${userName}@${suggestion}`;
      setEmail(newEmail);
      setShowSuggestions(false);
      validateEmail(newEmail);
      setIsValid(true);
      setTouched(true);
      
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    };
    
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        setTimeout(() => {
          if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
              containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setShowSuggestions(false);
          }
        }, 100);
      }
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        handleCollapse();
        return;
      }
      
      if (e.key === 'Tab' && showSuggestions && suggestions.length > 0) {
        e.preventDefault();
        const selectedIndex = highlightedIndex >= 0 ? highlightedIndex : 0;
        applySuggestion(suggestions[selectedIndex]);
      }
      
      if (e.key === 'ArrowDown' && showSuggestions) {
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp' && showSuggestions) {
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      } else if (e.key === 'Enter' && showSuggestions && highlightedIndex >= 0) {
        e.preventDefault();
        applySuggestion(suggestions[highlightedIndex]);
      }
    };
    
    const handleSubmit = () => {
      if (isValid) {
        setAnimationState('submitting');
        setTimeout(() => {
          setAnimationState('submitted');
          setTimeout(() => {
            setAnimationState('collapsing');
            setTimeout(() => {
              setIsExpanded(false);
              setEmail('');
              setAnimationState('initial');
            }, 300);
          }, 1500);
        }, 400);
      }
    };

    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        {/* Container with smooth transitions */}
        <div 
          ref={containerRef}
          className={cn(
            "relative overflow-hidden rounded-full shadow-md bg-white transition-all duration-300 ease-out",
            isExpanded ? "w-64 rounded-xl" : "w-48",
            {
              'expanding': animationState === 'expanding',
              'collapsing': animationState === 'collapsing',
              'submitting': animationState === 'submitting',
              'submitted': animationState === 'submitted'
            }
          )}
        >
          {/* Button state */}
          {!isExpanded && (
            <button
              type="button"
              onClick={handleExpand}
              className="flex items-center justify-center w-full h-12 px-4 text-gray-800 group"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-2.5 
                   transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                <Mail size={16} className="text-blue-600" />
              </div>
              <span className="font-medium text-sm">Enter your email</span>
              <ChevronRight size={16} className="ml-auto text-gray-400 transition-transform duration-300 
                   group-hover:translate-x-1" />
            </button>
          )}
          
          {/* Expanded input state */}
          {isExpanded && (
            <>
              <div className={cn(
                "flex items-center h-12 px-2 transition-opacity duration-300",
                {
                  'animate-fadeIn': animationState === 'expanding',
                  'animate-fadeOut': animationState === 'collapsing',
                  'opacity-0 pointer-events-none': animationState === 'submitting' || animationState === 'submitted'
                }
              )}>
                <button
                  type="button"
                  onClick={handleCollapse}
                  className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center 
                       transition-colors duration-150 hover:bg-gray-100"
                >
                  <X size={14} className="text-gray-500" />
                </button>
                
                <div className={cn(
                  "flex items-center ml-1 flex-grow relative transition-colors duration-200",
                  isFocused ? "text-blue-500" : "text-gray-400",
                  isValid === false && touched ? "text-red-500" : "",
                  isValid === true ? "text-green-500" : ""
                )}>
                  <Mail size={14} className="flex-shrink-0" />
                  
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={() => {
                      setIsFocused(true);
                      if (domain && !domain.includes('.')) {
                        setShowSuggestions(suggestions.length > 0);
                      }
                    }}
                    onBlur={(e) => {
                      if (suggestionsRef.current && suggestionsRef.current.contains(e.relatedTarget as Node)) {
                        return;
                      }
                      
                      setIsFocused(false);
                      setTouched(true);
                      validateEmail(email);
                      
                      setTimeout(() => {
                        setShowSuggestions(false);
                      }, 300);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="example@gmail.com"
                    className="w-full h-full ml-2 outline-none bg-transparent text-gray-800 text-sm"
                    autoComplete="off"
                    {...props}
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValid}
                  className={cn(
                    "ml-1 h-8 px-2.5 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-200",
                    isValid 
                      ? "bg-blue-500 text-white shadow-sm hover:bg-blue-600" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  )}
                >
                  Done
                </button>
              </div>
              
              {/* Success animation container */}
              <div className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                animationState === 'submitting' || animationState === 'submitted' ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className={cn(
                  "relative w-11 h-11 bg-green-50 rounded-full flex items-center justify-center transition-all duration-500",
                  animationState === 'submitted' ? "scale-110" : "scale-0"
                )}>
                  {/* Ripple effect for the success animation */}
                  <div className="absolute inset-0 rounded-full animate-success-ripple"></div>
                  <div className="absolute inset-0 rounded-full animate-success-ripple animation-delay-200"></div>
                  
                  {/* Checkmark with drawing animation */}
                  <div className="relative w-5 h-5">
                    <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full">
                      <path
                        d="M5 12l5 5L20 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 animate-draw-check"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Error message */}
        <div className={cn(
          "mt-2 text-xs text-red-500 flex items-center transition-all duration-200",
          isValid === false && touched && isExpanded ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"
        )}>
          <AlertCircle size={12} className="mr-1" />
          <span>Please enter a valid email address</span>
        </div>
        
        {/* Domain suggestions dropdown */}
        <div 
          ref={suggestionsRef}
          className={cn(
            "mt-1 bg-white border border-gray-200 rounded-lg shadow-lg",
            "overflow-hidden z-10 w-64 transform origin-top",
            "transition-all duration-200 ease-out",
            showSuggestions && isExpanded
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="p-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  applySuggestion(suggestion);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={cn(
                  "w-full px-3 py-2 text-left rounded-md flex items-center",
                  "transition-colors duration-150 text-sm",
                  highlightedIndex === index 
                    ? "bg-blue-50 text-blue-800" 
                    : "hover:bg-gray-50 text-gray-700",
                  "active:bg-blue-100"
                )}
              >
                <span className="flex-grow">
                  <span className="text-gray-800">{userName}@</span>
                  <span className="font-medium">{suggestion}</span>
                </span>
                {highlightedIndex === index && (
                  <span className="text-xs text-blue-500 ml-2">Tab ↹</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

EmailAutoSuggest.displayName = "EmailAutoSuggest"; 