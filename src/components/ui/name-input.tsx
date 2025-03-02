import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface NameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const NameInput = React.forwardRef<HTMLInputElement, NameInputProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    
    const isLabelFloating = isFocused || value;

    return (
      <div className={cn("w-full max-w-md", className)}>
        <div className="relative">
          <input
            type="text"
            id="floating-input"
            className="peer block w-full px-4 pt-6 pb-2 text-base bg-background border border-input rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            ref={ref}
            {...props}
          />
          <label
            htmlFor="floating-input"
            className={cn(
              "absolute left-4 pointer-events-none transition-all duration-200 ease-in-out text-muted-foreground",
              isLabelFloating
                ? "top-2 text-xs text-primary"
                : "top-4 text-base"
            )}
          >
            Your Name
          </label>
        </div>
      </div>
    );
  }
);

NameInput.displayName = "NameInput"; 