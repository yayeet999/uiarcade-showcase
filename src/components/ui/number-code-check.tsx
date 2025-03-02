import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NumberCodeCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NumberCodeCheck = React.forwardRef<HTMLDivElement, NumberCodeCheckProps>(
  ({ className, ...props }, ref) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    
    // Set up input refs
    useEffect(() => {
      inputRefs.current = inputRefs.current.slice(0, code.length);
    }, []);
    
    // Focus the first input on mount
    useEffect(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, []);
    
    // Timer countdown
    useEffect(() => {
      if (timeLeft > 0 && !isSuccess) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [timeLeft, isSuccess]);
    
    // Check if code is complete and trigger verification
    useEffect(() => {
      const isComplete = code.every(digit => digit !== '');
      if (isComplete && !isVerifying && !isSuccess && !isError) {
        verifyCode();
      }
    }, [code]);
    
    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value;
      
      // Only allow digits
      if (!/^\d*$/.test(value)) return;
      
      // Update the code
      const newCode = [...code];
      newCode[index] = value.slice(-1); // Take only the last character
      setCode(newCode);
      
      // Move to next input if a digit was entered
      if (value && index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
        setCurrentIndex(index + 1);
      }
    };
    
    // Handle key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      // Handle backspace
      if (e.key === 'Backspace') {
        if (!code[index] && index > 0) {
          // Move to previous input if current is empty
          inputRefs.current[index - 1]?.focus();
          setCurrentIndex(index - 1);
        } else {
          // Clear current input
          const newCode = [...code];
          newCode[index] = '';
          setCode(newCode);
        }
      } 
      // Handle arrow keys
      else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
        setCurrentIndex(index - 1);
      } else if (e.key === 'ArrowRight' && index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
        setCurrentIndex(index + 1);
      }
    };
    
    // Handle paste event
    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, code.length);
      
      if (pastedData) {
        const newCode = [...code].map((_, i) => pastedData[i] || '');
        setCode(newCode);
        
        // Focus last input or first unfilled input
        const focusIndex = Math.min(pastedData.length, code.length - 1);
        if (inputRefs.current[focusIndex]) {
          inputRefs.current[focusIndex]?.focus();
          setCurrentIndex(focusIndex);
        }
      }
    };
    
    // Verify the code (mock implementation)
    const verifyCode = () => {
      setIsVerifying(true);
      setIsError(false);
      
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false);
        
        // For demo purposes, "123456" is the correct code
        const enteredCode = code.join('');
        if (enteredCode === '123456') {
          setIsSuccess(true);
        } else {
          setIsError(true);
          // Shake animation will be triggered by class change
          setTimeout(() => {
            // Reset code after error
            setCode(['', '', '', '', '', '']);
            // Focus first input
            if (inputRefs.current[0]) {
              inputRefs.current[0]?.focus();
              setCurrentIndex(0);
            }
          }, 1000);
        }
      }, 1500);
    };
    
    // Reset the verification process
    const resetVerification = () => {
      setCode(['', '', '', '', '', '']);
      setIsVerifying(false);
      setIsSuccess(false);
      setIsError(false);
      setTimeLeft(60);
      
      // Focus first input
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0]?.focus();
          setCurrentIndex(0);
        }
      }, 10);
    };
    
    // Format time as MM:SS
    const formatTime = (seconds: number) => {
      return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    };

    return (
      <div ref={ref} className={cn("w-full max-w-sm mx-auto", className)} {...props}>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4">
            {isSuccess ? (
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3 animate-success-bounce">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-1.5">Verification Complete</h2>
                <p className="text-gray-600 mb-4 text-center text-sm">Your identity has been successfully verified.</p>
                <button
                  type="button"
                  onClick={resetVerification}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200"
                >
                  Start Over
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-gray-800 mb-1">Verification Code</h2>
                <p className="text-gray-600 mb-4 text-sm">Enter the 6-digit code sent to your device</p>
                
                <div className={cn("flex justify-center space-x-2 mb-4", isError && "animate-shake")}>
                  {code.map((digit, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "relative w-9 h-11 transition-all duration-300 ease-out",
                        currentIndex === index && !isVerifying ? "scale-110" : "scale-100"
                      )}
                    >
                      <input
                        ref={el => inputRefs.current[index] = el}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onFocus={() => setCurrentIndex(index)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        disabled={isVerifying || isSuccess}
                        className={cn(
                          "w-full h-full text-center text-lg font-bold rounded-lg outline-none transition-all duration-300 ease-out",
                          digit ? "border-2 border-blue-500 bg-blue-50 text-blue-600" : "border border-gray-300",
                          currentIndex === index && !digit && !isVerifying && "border-blue-300 shadow-sm",
                          isVerifying && "bg-gray-100 text-gray-400 border-gray-300",
                          isError && "border-red-400 bg-red-50 text-red-600"
                        )}
                      />
                      
                      {/* Pulsing dot indicator for current input */}
                      {currentIndex === index && !digit && !isVerifying && (
                        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-input-pulse" />
                      )}
                      
                      {/* Line connector animation */}
                      {index < code.length - 1 && digit && !isVerifying && (
                        <div className="absolute top-1/2 right-0 h-0.5 bg-blue-400 transform translate-x-1 -translate-y-1/2 animate-line-expand" />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Status area */}
                <div className="text-center text-sm">
                  {isVerifying && (
                    <div className="flex items-center justify-center text-blue-600 mb-2">
                      <RefreshCw size={16} className="animate-spin mr-2" />
                      <span>Verifying code...</span>
                    </div>
                  )}
                  
                  {isError && (
                    <div className="flex items-center justify-center text-red-500 mb-2">
                      <AlertCircle size={16} className="mr-2" />
                      <span>Invalid code. Please try again.</span>
                    </div>
                  )}
                  
                  {/* Timer */}
                  {!isSuccess && (
                    <div className="flex items-center justify-center text-gray-500">
                      <span className="mr-2">Code expires in:</span>
                      <span className={cn("font-medium", timeLeft < 10 && "text-red-500")}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  )}
                  
                  {/* Resend option */}
                  {timeLeft === 0 && (
                    <button
                      type="button"
                      onClick={resetVerification}
                      className="mt-3 text-blue-600 font-medium hover:underline"
                    >
                      Resend code
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

NumberCodeCheck.displayName = "NumberCodeCheck"; 