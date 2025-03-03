import React, { useState, useRef, useEffect } from 'react';
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Options</label>
        </div>
        
        {/* Dropdown trigger button */}
        <button
          className={`dropdown-trigger w-full flex items-center justify-between px-4 py-3 text-left bg-white dark:bg-gray-800 border rounded-xl transition-all duration-150 ${
            isOpen ? 'border-teal-500 ring-2 ring-teal-100 dark:ring-teal-900 dark:border-teal-400' : 'border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500'
          }`}
          onClick={toggleDropdown}
        >
          <span className={`${selectedOption ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}`}>
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
            <div className="dropdown-options absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="py-1 max-h-60 overflow-auto">
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className={`option-item flex items-center justify-between px-4 py-3 cursor-pointer ${
                      hoverIndex === index ? 'bg-teal-50 dark:bg-teal-900/30' : ''
                    }`}
                    onClick={() => handleOptionSelect(option)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <span className={`${selectedOption?.id === option.id ? 'text-teal-600 dark:text-teal-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                      {option.label}
                    </span>
                    
                    {selectedOption?.id === option.id && (
                      <div className="checkmark-animation">
                        <Check size={16} className="text-teal-500" />
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
}; 