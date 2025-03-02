import { ComponentCode } from "./types";
import { NumberCodeCheck } from "@/components/ui/number-code-check";

export const numberCodeCheckRegistry: ComponentCode = {
  component: NumberCodeCheck,
  preview: `
    <div class="flex flex-col items-center justify-center">
      <div class="bg-white rounded-xl shadow-md overflow-hidden w-64">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Verification Code</h2>
          <div class="flex justify-center space-x-2 mb-4">
            <div class="w-10 h-12 border-2 border-blue-500 bg-blue-50 rounded-lg flex items-center justify-center">
              <span class="text-xl font-bold text-blue-600">1</span>
            </div>
            <div class="w-10 h-12 border-2 border-blue-500 bg-blue-50 rounded-lg flex items-center justify-center">
              <span class="text-xl font-bold text-blue-600">2</span>
            </div>
            <div class="w-10 h-12 border border-gray-300 rounded-lg"></div>
            <div class="w-10 h-12 border border-gray-300 rounded-lg"></div>
            <div class="w-10 h-12 border border-gray-300 rounded-lg"></div>
            <div class="w-10 h-12 border border-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  html: `
    <div class="w-full max-w-sm mx-auto">
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Verification Code</h2>
          <p class="text-gray-600 mb-6">Enter the 6-digit code sent to your device</p>
          
          <div class="flex justify-center space-x-2 mb-6">
            <!-- Input boxes -->
            <div class="relative w-10 h-12">
              <input
                type="text"
                inputmode="numeric"
                maxlength="1"
                class="w-full h-full text-center text-xl font-bold rounded-lg outline-none border-2 border-blue-500 bg-blue-50 text-blue-600"
                value="1"
              />
            </div>
            <!-- Repeat for all 6 digits -->
          </div>
          
          <!-- Timer -->
          <div class="flex items-center justify-center text-gray-500 text-sm">
            <span class="mr-2">Code expires in:</span>
            <span class="font-medium">0:59</span>
          </div>
        </div>
      </div>
    </div>
  `,
  css: `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .animate-shake {
      animation: shake 0.6s cubic-bezier(.36,.07,.19,.97) both;
    }
    
    @keyframes inputPulse {
      0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
      50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
    }
    
    .animate-input-pulse {
      animation: inputPulse 1.5s ease-in-out infinite;
    }
    
    @keyframes lineExpand {
      0% { width: 0; opacity: 0; }
      100% { width: 8px; opacity: 1; }
    }
    
    .animate-line-expand {
      animation: lineExpand 0.3s ease-out forwards;
      width: 0;
    }
    
    @keyframes successBounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-20px); }
      60% { transform: translateY(-10px); }
    }
    
    .animate-success-bounce {
      animation: successBounce 1s ease-out;
    }
  `,
  fullcode: `import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NumberCodeCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NumberCodeCheck = React.forwardRef<HTMLDivElement, NumberCodeCheckProps>(
  ({ className, ...props }, ref) => {
    // Component implementation
  }
);

NumberCodeCheck.displayName = "NumberCodeCheck";`
}; 