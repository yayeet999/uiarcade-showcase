import React, { useState, useRef, useEffect } from 'react';
import { Phone, Check, ChevronDown, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface PhoneNumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface Country {
  code: string;
  flag: string;
  format: string;
}

export const PhoneNumberInput = React.forwardRef<HTMLInputElement, PhoneNumberInputProps>(
  ({ className, ...props }, ref) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [touched, setTouched] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
      code: '+1',
      flag: '🇺🇸',
      format: '(XXX) XXX-XXXX'
    });
    
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const countries: Country[] = [
      { code: '+1', flag: '🇺🇸', format: '(XXX) XXX-XXXX' },
      { code: '+44', flag: '🇬🇧', format: 'XXXX XXXXXX' },
      { code: '+33', flag: '🇫🇷', format: 'X XX XX XX XX' },
      { code: '+49', flag: '🇩🇪', format: 'XXXX XXXXXXX' },
      { code: '+81', flag: '🇯🇵', format: 'XX-XXXX-XXXX' },
      { code: '+86', flag: '🇨🇳', format: 'XXX XXXX XXXX' },
      { code: '+91', flag: '🇮🇳', format: 'XXXXX-XXXXX' },
    ];

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formatPhoneNumber = (value: string) => {
      if (!value) return '';
      
      const digits = value.replace(/\D/g, '');
      
      if (selectedCountry.code === '+1') {
        if (digits.length <= 3) {
          return digits;
        } else if (digits.length <= 6) {
          return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        } else {
          return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
        }
      } else if (selectedCountry.code === '+44') {
        if (digits.length <= 4) {
          return digits;
        } else {
          return `${digits.slice(0, 4)} ${digits.slice(4, 10)}`;
        }
      } else {
        return digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
      }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      
      if (/^[\d\s()\-]*$/.test(value) || value === '') {
        const formatted = formatPhoneNumber(value);
        setPhoneNumber(formatted);
        
        if (touched) {
          validatePhoneNumber(formatted);
        }
      }
    };

    const validatePhoneNumber = (number: string) => {
      const digits = number.replace(/\D/g, '');
      const isValidByLength = digits.length >= 10;
      setIsValid(isValidByLength);
      return isValidByLength;
    };

    const handleCountrySelect = (country: Country) => {
      setSelectedCountry(country);
      setIsDropdownOpen(false);
      setPhoneNumber('');
      setIsValid(null);
      
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    };

    return (
      <div className={cn("w-full", className)} ref={containerRef}>
        <div className="relative">
          {/* Main input container */}
          <div 
            className={cn(
              "flex items-stretch rounded-xl overflow-hidden transition-all duration-300 ease-out",
              isFocused ? "shadow-lg shadow-blue-100/50" : "shadow-sm",
              isValid === false && touched ? "shadow-lg shadow-red-100/50" : "",
              isValid === true ? "shadow-lg shadow-green-100/50" : ""
            )}
          >
            {/* Country selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center h-14 pl-4 pr-2 border-y border-l transition-all duration-200 rounded-l-xl",
                  isFocused ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-gray-50",
                  isValid === false && touched ? "border-red-200 bg-red-50" : "",
                  isValid === true ? "border-green-200 bg-green-50" : ""
                )}
              >
                <span className="text-2xl mr-1 transform transition-transform duration-300 hover:scale-110">
                  {selectedCountry.flag}
                </span>
                <ChevronDown 
                  size={14} 
                  className={cn(
                    "text-gray-400 ml-1 transition-transform duration-200",
                    isDropdownOpen ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              
              {/* Country dropdown */}
              <div 
                className={cn(
                  "absolute z-10 mt-1 bg-white border border-gray-100 rounded-xl",
                  "transition-all duration-300 ease-out origin-top-left",
                  "shadow-xl shadow-gray-100/80 overflow-hidden",
                  isDropdownOpen 
                    ? "opacity-100 transform scale-100 translate-y-0" 
                    : "opacity-0 transform scale-95 -translate-y-4 pointer-events-none"
                )}
              >
                <div className="py-1">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={cn(
                        "flex items-center w-full px-4 py-3 text-left text-gray-700",
                        "hover:bg-blue-50 transition-colors duration-150",
                        selectedCountry.code === country.code ? "bg-blue-50" : ""
                      )}
                    >
                      <span className="text-xl mr-3">{country.flag}</span>
                      <span className="font-medium">{country.code}</span>
                      {selectedCountry.code === country.code && (
                        <Check size={16} className="ml-2 text-blue-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Phone input */}
            <div className="relative flex-grow">
              <div 
                className={cn(
                  "absolute top-0 left-0 w-full h-full border-y border-r rounded-r-xl transition-all duration-200",
                  isFocused ? "border-blue-200 bg-white" : "border-gray-200 bg-white",
                  isValid === false && touched ? "border-red-200" : "",
                  isValid === true ? "border-green-200" : ""
                )}
              ></div>
              
              <div className="relative flex items-center h-14">
                <div 
                  className={cn(
                    "flex items-center justify-center w-12 transition-colors duration-200",
                    isFocused ? "text-blue-500" : "text-gray-400",
                    isValid === false && touched ? "text-red-500" : "",
                    isValid === true ? "text-green-500" : ""
                  )}
                >
                  <Phone size={18} />
                </div>
                
                <input
                  ref={inputRef}
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    setIsFocused(false);
                    setTouched(true);
                    validatePhoneNumber(phoneNumber);
                  }}
                  placeholder={selectedCountry.format}
                  className="h-full flex-grow bg-transparent text-gray-800 outline-none pr-10"
                  {...props}
                />
                
                {/* Status indicators */}
                {touched && phoneNumber && (
                  <div 
                    className={cn(
                      "absolute right-3 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300",
                      isValid === true 
                        ? "bg-green-100 text-green-500 animate-fadeIn" 
                        : isValid === false 
                          ? "bg-red-100 text-red-500 animate-fadeIn" 
                          : "opacity-0"
                    )}
                  >
                    {isValid === true ? (
                      <Check size={14} />
                    ) : (
                      <X size={14} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Helper text */}
          <div className="mt-2 flex justify-between">
            <p className="text-xs text-gray-500">
              {selectedCountry.format.replace(/X/g, '0')}
            </p>
            
            {touched && phoneNumber && !isValid && (
              <p className="text-xs text-red-500 animate-fadeIn">
                Please enter a valid phone number
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PhoneNumberInput.displayName = "PhoneNumberInput"; 