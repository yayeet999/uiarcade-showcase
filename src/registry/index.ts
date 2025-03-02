import { AnimatedSubmitButton } from "@/components/ui/animated-submit-button";
import BuyNowButton from "@/components/ui/buy-now-button";
import DownloadButton from "@/components/ui/download-button";
import DeleteButton from "@/components/ui/delete-button";
import { GreyRetroAuthForm } from "@/components/ui/grey-retro-auth-form";
import { LavenderAuthForm } from "@/components/ui/lavender-auth-form";
import { CyberPunkAuthForm } from "@/components/ui/cyber-punk-auth-form";
import { PersonalNameCard } from "@/components/ui/personal-name-card";
import { DesignNameCard } from "@/components/ui/design-name-card";
import { FlipHoverCard } from "@/components/ui/flip-hover-card";
import GoogleAuthButton from "@/components/ui/google-auth-button";
import { PaymentPopupCard } from "@/components/ui/payment-popup-card";
import { PaymentTierCard } from "@/components/ui/payment-tier-card";
import { GitHubAuthButton } from "@/components/ui/github-auth-button";
import { XAuthButton } from "@/components/ui/x-auth-button";
import { FacebookAuthButton } from "@/components/ui/facebook-auth-button";
import { NavyAuthForm } from "@/components/ui/navy-auth-form";
import { ModernAuthForm } from "@/components/ui/modern-auth-form";
import { VioletAuthForm } from "@/components/ui/violet-auth-form";
import { SendButton } from "@/components/ui/send-button";
import { RedditAuthButton } from "@/components/ui/reddit-auth-button";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { AppleAuthButton } from "@/components/ui/apple-auth-button";
import { WarningSign } from "@/components/ui/warning-sign";
import { BuyMeCoffee } from "@/components/ui/buy-me-coffee";
import { FeedbackCard } from "@/components/ui/feedback-card";

interface ComponentCode {
  preview: string;
  html: string;
  css: string;
  fullcode: string;
  name?: string;
  component?: React.ComponentType<any>;
}

// Simple component registry with example components
const componentRegistry: Record<string, ComponentCode> = {
  "Lavender Auth Form": {
    preview: '<div class="flex items-center justify-center bg-gradient-to-br from-violet-100 to-teal-100 p-4"><div class="w-full max-w-[420px] bg-white rounded-2xl overflow-hidden shadow-xl"><div class="relative h-28 bg-gradient-to-r from-violet-500 to-indigo-600"><div class="absolute bottom-0 left-0 w-full px-7 py-5"><h2 class="text-[22px] font-bold text-white">Welcome Back</h2></div></div></div></div>',
    html: `<div class="flex items-center justify-center bg-gradient-to-br from-violet-100 to-teal-100 p-4">
  <div class="w-full max-w-[420px]">
    <div class="bg-white rounded-2xl overflow-hidden shadow-xl">
      <div class="relative h-28 bg-gradient-to-r from-violet-500 to-indigo-600">
        <div className="absolute bottom-0 left-0 w-full px-7 py-5">
          <h2 className="text-[22px] font-bold text-white">Welcome Back</h2>
        <div class="absolute bottom-0 left-0 w-full px-7 py-5">
          <h2 class="text-[22px] font-bold text-white">Welcome Back</h2>
          <p class="text-sm text-indigo-100">Sign in to continue</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `/* Add your CSS styles here */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 10s infinite;
}

.pattern-dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
}

.pattern-size-4 {
  background-size: 24px 24px;
}`,
    fullcode: `import React, { useState } from 'react';

export const LavenderAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form after "successful" submission
      setEmail('');
      setPassword('');
      setUsername('');
      alert(isSignUp ? "Account created successfully!" : "Logged in successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 to-teal-100 p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl">
          {/* Form header */}
          <div className="relative h-32 bg-gradient-to-r from-violet-500 to-indigo-600">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 pattern-dots pattern-indigo-500 pattern-bg-transparent pattern-size-4 pattern-opacity-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full px-8 py-6">
              <h2 className="text-2xl font-bold text-white">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-indigo-100">
                {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
              </p>
            </div>
            
            {/* Toggle button */}
            <button 
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setUsername('');
              }}
              className="absolute top-6 right-6 text-sm text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </div>
          
          {/* Form content */}
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username field - only shown for signup */}
              {isSignUp && (
                <div className="space-y-1">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                    placeholder="johndoe"
                    required={isSignUp}
                  />
                </div>
              )}
              
              {/* Email field */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              {/* Password field */}
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                  >
                    {passwordVisible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Forgot password - only shown for login */}
              {!isSignUp && (
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline">Forgot password?</a>
                </div>
              )}
              
              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </span>
                  ) : (
                    <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                  )}
                </button>
              </div>
            </form>
            
            {/* Alternative sign up/in link */}
            <div className="mt-8 text-center text-sm text-gray-500">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setUsername('');
                }}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {isSignUp ? 'Sign in instead' : 'Sign up now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`,
    component: LavenderAuthForm
  },
  "Button": {
    preview: '<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Primary Button</button>',
    html: '<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">\n  Primary Button\n</button>',
    css: '.button-primary {\n  background-color: rgb(59, 130, 246);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  transition-property: background-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.button-primary:hover {\n  background-color: rgb(37, 99, 235);\n}',
    fullcode: 'import React from "react";\n\nexport const Button = () => {\n  return (\n    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">\n      Primary Button\n    </button>\n  );\n};'
  },
  "Card": {
    preview: '<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">Card Title</div><p class="text-gray-700 text-base">Card description with some text content.</p></div></div>',
    html: '<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">\n  <div class="px-6 py-4">\n    <div className="font-bold text-xl mb-2">Card Title</div>\n    <p className="text-gray-700 text-base">Card description with some text content.</p>\n  </div>\n</div>',
    css: '.card {\n  max-width: 24rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  background-color: white;\n}\n\n.card-body {\n  padding: 1.5rem 1.5rem;\n}\n\n.card-title {\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n\n.card-text {\n  color: #4b5563;\n  font-size: 1rem;\n}',
    fullcode: 'import React from "react";\n\nexport const Card = () => {\n  return (\n    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">\n      <div className="px-6 py-4">\n        <div className="font-bold text-xl mb-2">Card Title</div>\n        <p className="text-gray-700 text-base">Card description with some text content.</p>\n      </div>\n    </div>\n  );\n};'
  },
  "Input": {
    preview: '<input type="text" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter text...">',
    html: '<input type="text" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter text...">',
    css: '.input {\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n}\n\n.input:focus {\n  outline: none;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: rgb(59, 130, 246);\n  border-color: transparent;\n}',
    fullcode: 'import React from "react";\n\nexport const Input = () => {\n  return (\n    <input\
      type="text"\
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\
      placeholder="Enter text..."\
    />\n  );\n};'
  },
  "Dropdown": {
    preview: '<div class="relative inline-block text-left"><button class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">Options</button></div>',
    html: '<div class="relative inline-block text-left">\n  <button class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">Options</button>\n</div>',
    css: '.dropdown {\n  position: relative;\n  display: inline-block;\n  text-align: left;\n}\n\n.dropdown-button {\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n  border-radius: 0.375rem;\n  border: 1px solid #d1d5db;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  padding: 0.5rem 1rem;\n  background-color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n\n.dropdown-button:hover {\n  background-color: #f9fafb;\n}\n\n.dropdown-button:focus {\n  outline: none;\n}',
    fullcode: 'import React, { useState } from "react";\n\nexport const Dropdown = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div className="relative inline-block text-left">\n      <button\
        onClick={() => setIsOpen(!isOpen)}\
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"\
      >\n        Options\n      </button>\n      \n      {isOpen && (\n        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">\n          <div className="py-1" role="menu" aria-orientation="vertical">\n            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>\n            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>\n            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};'
  },
  "Modal": {
    preview: '<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"><div class="bg-white rounded-lg p-6 max-w-md mx-auto"><h3 class="text-lg font-medium mb-4">Modal Title</h3><p class="mb-4">Modal content goes here.</p><button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button></div></div>',
    html: '<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">\n  <div class="bg-white rounded-lg p-6 max-w-md mx-auto">\n    <h3 class="text-lg font-medium mb-4">Modal Title</h3>\n    <p class="mb-4">Modal content goes here.</p>\n    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>\n  </div>\n</div>',
    css: '.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content {\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  max-width: 28rem;\n  margin: 0 auto;\n}\n\n.modal-title {\n  font-size: 1.125rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n\n.modal-body {\n  margin-bottom: 1rem;\n}\n\n.modal-button {\n  padding: 0.5rem 1rem;\n  background-color: rgb(59, 130, 246);\n  color: white;\n  border-radius: 0.25rem;\n}\n\n.modal-button:hover {\n  background-color: rgb(37, 99, 235);\n}',
    fullcode: 'import React, { useState } from "react";\n\nexport const Modal = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button\
        onClick={() => setIsOpen(true)}\
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\
      >\n        Open Modal\n      </button>\n\n      {isOpen && (\n        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">\n          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">\n            <h3 className="text-lg font-medium mb-4">Modal Title</h3>\n            <p className="mb-4">Modal content goes here.</p>\n            <button\
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\
              onClick={() => setIsOpen(false)}\
            >\n              Close\n            </button>\n          </div>\n        </div>\n      )}\n    </>\n  );\n};'
  },
  "Tabs": {
    preview: '<div class="border-b border-gray-200"><nav class="-mb-px flex" aria-label="Tabs"><a href="#" class="border-blue-500 text-blue-600 border-b-2 py-4 px-4 text-sm font-medium">Tab 1</a><a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-4 text-sm font-medium">Tab 2</a><a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-4 text-sm font-medium">Tab 3</a></nav></div>',
    html: '<div class="border-b border-gray-200">\n  <nav class="-mb-px flex" aria-label="Tabs">\n    <a href="#" class="border-blue-500 text-blue-600 border-b-2 py-4 px-4 text-sm font-medium">Tab 1</a>\n    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-4 text-sm font-medium">Tab 2</a>\n    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-4 text-sm font-medium">Tab 3</a>\n  </nav>\n</div>',
    css: '.tabs-container {\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.tabs-nav {\n  display: flex;\n  margin-bottom: -1px;\n}\n\n.tab {\n  border-bottom: 2px solid transparent;\n  padding: 1rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n}\n\n.tab:hover {\n  color: #374151;\n  border-bottom-color: #d1d5db;\n}\n\n.tab.active {\n  border-bottom-color: rgb(59, 130, 246);\n  color: rgb(37, 99, 235);\n}',
    fullcode: 'import React, { useState } from "react";\n\nexport const Tabs = () => {\n  const [activeTab, setActiveTab] = useState(0);\n  const tabs = ["Tab 1", "Tab 2", "Tab 3"];\n\n  return (\n    <div>\n      <div className="border-b border-gray-200">\n        <nav className="-mb-px flex" aria-label="Tabs">\n          {tabs.map((tab, index) => (\n            <a\
              key={index}\
              href="#"\
              onClick={(e) => {\n                e.preventDefault();\n                setActiveTab(index);\n              }}\
              className={`\
                ${index === activeTab\
                ? "border-blue-500 text-blue-600"\
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}\
                border-b-2 py-4 px-4 text-sm font-medium\
              `}\
            >\n              {tab}\
            </a>\n          ))}\
        </nav>\n      </div>\n      <div className="py-4">\n        {activeTab === 0 && <div>Content for Tab 1</div>}\n        {activeTab === 1 && <div>Content for Tab 2</div>}\n        {activeTab === 2 && <div>Content for Tab 3</div>}\n      </div>\n    </div>\n  );\n};'
  },
  "Table": {
    preview: '<table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Cooper</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regional Paradigm Technician</td></tr></tbody></table>',
    html: '<table class="min-w-full divide-y divide-gray-200">\n  <thead class="bg-gray-50">\n    <tr>\n      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>\n      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>\n    </tr>\n  </thead>\n  <tbody class="bg-white divide-y divide-gray-200">\n    <tr>\n      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Cooper</td>\n      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regional Paradigm Technician</td>\n    </tr>\n  </tbody>\n</table>',
    css: '.table {\n  min-width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.table thead {\n  background-color: #f9fafb;\n}\n\n.table thead th {\n  padding: 0.75rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.table tbody {\n  background-color: white;\n}\n\n.table tbody tr {\n  border-top: 1px solid #e5e7eb;\n}\n\n.table tbody td {\n  padding: 1rem 1.5rem;\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n\n.table tbody td:first-child {\n  font-weight: 500;\n  color: #111827;\n}\n\n.table tbody td:not(:first-child) {\n  color: #6b7280;\n}',
    fullcode: 'import React from "react";\n\nexport const Table = () => {\n  const people = [\n    { name: "Jane Cooper", title: "Regional Paradigm Technician" },\n    { name: "Cody Fisher", title: "Product Directives Officer" },\n    { name: "Esther Howard", title: "Forward Response Developer" },\n  ];\n\n  return (\n    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">\n      <table className="min-w-full divide-y divide-gray-200">\n        <thead className="bg-gray-50">\n          <tr>\n            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\n              Name\n            </th>\n            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\n              Title\n            </th>\n          </tr>\n        </thead>\n        <tbody className="bg-white divide-y divide-gray-200">\n          {people.map((person) => (\n            <tr key={person.name}>\n              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">\n                {person.name}\n              </td>\n              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\n                {person.title}\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n};'
  },
  "Toggle": {
    preview: '<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false"><span class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span></button>',
    html: '<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false">\n  <span class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>\n</button>',
    css: '.toggle {\n  background-color: #e5e7eb;\n  position: relative;\n  display: inline-flex;\n  height: 1.5rem;\n  width: 2.75rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  border-radius: 9999px;\n  border: 2px solid transparent;\n  transition-property: background-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.toggle:focus {\n  outline: none;\n}\n\n.toggle-on {\n  background-color: #3b82f6;\n}\n\n.toggle-handle {\n  translate: 0px;\n  pointer-events: none;\n  display: inline-block;\n  height: 1.25rem;\n  width: 1.25rem;\n  transform: translateX(0);\n  border-radius: 9999px;\n  background-color: white;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition-property: transform;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.toggle-on .toggle-handle {\n  transform: translateX(100%);\n}',
    fullcode: 'import React, { useState } from "react";\n\nexport const Toggle = () => {\n  const [enabled, setEnabled] = useState(false);\n\n  return (\n    <button\
      type="button"\
      onClick={() => setEnabled(!enabled)}\
      className={`${enabled ? "bg-blue-500" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}\
      role="switch"\
      aria-checked={enabled}\
    >\n      <span\
        className={`${enabled ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}\
      />\n    </button>\n  );\n};'
  },
  "Animated Submit Button": {
    preview: '<button class="submit-button">Submit</button>',
    html: `<button class="submit-button">
  <div class="splash"></div>
  <div class="button-content">
    <div class="button-label-container">
      <div class="button-label">
        <span class="label-text">Submit</span>
        <span class="label-text">Ready</span>
      </div>
    </div>
    <div class="btn-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div class="loader"></div>
    <div class="success-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7L9.5 15.5L6 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
</button>`,
    css: `/* Add your CSS styles here */`,
    fullcode: `import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const AnimatedSubmitButton = React.forwardRef<HTMLButtonElement, AnimatedSubmitButtonProps>(
  ({ className, ...props }, ref) => {
    // ... rest of the component code
  }
);

AnimatedSubmitButton.displayName = 'AnimatedSubmitButton';`,
    component: AnimatedSubmitButton
  },
  "Buy Now Button": {
    preview: `<button class="group relative overflow-hidden rounded-full p-px font-medium text-base shadow-lg">
  <span class="absolute inset-0 overflow-hidden rounded-full">
    <span class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate"></span>
  </span>
  <span class="relative flex items-center justify-center rounded-full py-3 px-8 m-0.5 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
    <span class="font-bold tracking-wide text-white">Buy Now</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</button>`,
    html: `<button class="group relative overflow-hidden rounded-full p-px font-medium text-base shadow-lg">
  <!-- Gradient border -->
  <span class="absolute inset-0 overflow-hidden rounded-full">
    <span class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate"></span>
  </span>
  
  <!-- Main button -->
  <span class="relative flex items-center justify-center rounded-full py-3 px-8 m-0.5 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <!-- Shopping bag icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
    
    <!-- Button text -->
    <span class="font-bold tracking-wide text-white">Buy Now</span>
    
    <!-- Arrow icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </span>
</button>`,
    css: `.animate-gradient-rotate {
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    fullcode: `import React, { useState } from 'react';

const BuyNowButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center p-8 h-full">
      <button 
        className={\`
          group relative overflow-hidden rounded-full p-px
          font-medium text-base shadow-lg
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
          transform transition-all duration-300
          \${isClicked ? 'scale-95 opacity-90' : 'scale-100'}
        \`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
        disabled={isClicked}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate"></span>
        </span>
        <span className={\`
          relative flex items-center justify-center rounded-full
          py-3 px-8 m-0.5 z-10 transition-all duration-300
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          \${isHovering ? 'opacity-90' : 'opacity-100'}
        \`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={\`h-5 w-5 mr-2 text-white transition-all duration-300 \${isHovering ? 'scale-110' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="font-bold tracking-wide text-white transition-all duration-300">Buy Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={\`h-5 w-5 ml-2 text-white transition-all duration-300 \${isHovering ? 'translate-x-1' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        {isClicked && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-green-500 bg-opacity-90 rounded-full animate-success-fade text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-success-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2 font-semibold animate-success-text">Added to Cart!</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default BuyNowButton;`,
    component: BuyNowButton
  },
  "Download Button": {
    preview: `<button class="download-button">
  <span class="button-content">
    <span class="button-text">Download</span>
    <span class="done-text">Done!</span>
    <span class="button-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="arrow-path" d="M12 4L12 16M12 16L7 11M12 16L17 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="progress-path" d="M3 20H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </span>
  <div class="progress-indicator">
    <div class="progress-bar"></div>
  </div>
</button>`,
    html: `<button class="download-button">
  <span class="button-content">
    <span class="button-text">Download</span>
    <span class="done-text">Done!</span>
    <span class="button-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="arrow-path" d="M12 4L12 16M12 16L7 11M12 16L17 11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="progress-path" d="M3 20H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </span>
  <div class="progress-indicator">
    <div class="progress-bar"></div>
  </div>
</button>`,
    css: `@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(29, 78, 216, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(29, 78, 216, 0); }
  100% { box-shadow: 0 0 0 0 rgba(29, 78, 216, 0); }
}

@keyframes progress {
  0% { width: 0%; }
  20% { width: 35%; }
  50% { width: 65%; }
  80% { width: 85%; }
  100% { width: 100%; }
}

.download-button {
  position: relative;
  width: 180px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.download-button.complete {
  background: linear-gradient(135deg, #10b981, #047857);
  animation: pulse 0.8s;
}`,
    fullcode: `import React, { useState } from 'react';

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handleClick = () => {
    if (isDownloading || isComplete) return;
    
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    }, 3000);
  };
  
  return (
    <div className="button-container">
      <button 
        className={\`download-button \${isDownloading ? 'downloading' : ''} \${isComplete ? 'complete' : ''}\`}
        onClick={handleClick}
      >
        <span className="button-content">
          <span className="button-text">Download</span>
          <span className="done-text">Done!</span>
          <span className="button-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                className="arrow-path" 
                d="M12 4L12 16M12 16L7 11M12 16L17 11" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                className="progress-path" 
                d="M3 20H21" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
        <div className="progress-indicator">
          <div className="progress-bar"></div>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;`,
    component: DownloadButton
  },
  "Delete Button": {
    preview: `<button class="group relative flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-sm bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-600 hover:border-red-200">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
  Delete
</button>`,
    html: `<div class="flex items-center justify-center p-8 bg-gray-50 h-full rounded-lg shadow-inner">
  <button class="group relative flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden min-w-24 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-600 hover:border-red-200 focus:ring-gray-500">
    <span className="relative flex items-center justify-center w-5 h-5 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18"></path>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      </svg>
    </span>
    <span className="relative z-10 transition-all duration-300 ease-out whitespace-nowrap">Delete</span>
  </button>
</div>`,
    css: `@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@keyframes check {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

.animate-check {
  animation: check 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

button:not(:disabled):hover {
  transform: translateY(-1px);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

button:not(:disabled):active {
  transform: translateY(0px);
  transition: all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
    fullcode: `import React, { useState, useEffect } from 'react';

const DeleteButton = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    let timer;
    if (isConfirming && !isDeleting) {
      timer = setTimeout(() => {
        setIsConfirming(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isConfirming, isDeleting]);
  
  useEffect(() => {
    let progressTimer;
    if (isDeleting) {
      progressTimer = setInterval(() => {
        setProgress(prev => {
          const increment = Math.max(1, 8 - Math.floor(prev / 12));
          const newValue = prev + increment;
          if (newValue >= 100) {
            clearInterval(progressTimer);
            setIsCompleted(true);
            setTimeout(() => {
              setIsDeleting(false);
              setIsConfirming(false);
              setProgress(0);
              setTimeout(() => {
                setIsCompleted(false);
              }, 150);
            }, 800);
            return 100;
          }
          return newValue;
        });
      }, 40);
    }
    return () => clearInterval(progressTimer);
  }, [isDeleting]);
  
  const handleClick = () => {
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }
    if (!isDeleting) {
      setIsDeleting(true);
    }
  };
  
  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 h-full rounded-lg shadow-inner">
      <button
        onClick={handleClick}
        disabled={isDeleting}
        className={\`
          group relative flex items-center justify-center gap-2 px-4 py-2
          rounded-md font-medium text-sm transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden min-w-24
          \${isDeleting 
            ? 'bg-red-600 text-white' 
            : isConfirming 
              ? 'bg-red-500 text-white focus:ring-red-500' 
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-600 hover:border-red-200 focus:ring-gray-500'}
          \${isConfirming && !isDeleting ? 'shadow-md' : 'shadow-sm hover:shadow'}
          \${isCompleted ? 'bg-green-600 text-white' : ''}
        \`}
      >
        {isDeleting && (
          <div 
            className="absolute inset-0 bg-white bg-opacity-10"
            style={{ 
              width: \`\${progress}%\`, 
              transition: 'width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              left: 0,
              top: 0,
              bottom: 0,
              borderRight: progress < 100 ? '1px solid rgba(255,255,255,0.2)' : 'none'
            }}
          />
        )}
        <span className="relative flex items-center justify-center w-5 h-5 transition-transform duration-300">
          {!isDeleting && !isCompleted && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={\`absolute transition-all duration-300 ease-out
                \${isConfirming ? 'scale-110 animate-pulse' : 'scale-100 group-hover:scale-110 group-hover:text-red-500'}\`}
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          )}
          {isDeleting && !isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6-8.5"></path>
            </svg>
          )}
          {isCompleted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute text-white animate-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </span>
        <span className="relative z-10 transition-all duration-300 ease-out whitespace-nowrap">
          {isCompleted 
            ? 'Deleted!'
            : isDeleting 
              ? 'Deleting...' 
              : isConfirming 
                ? 'Confirm' 
                : 'Delete'}
        </span>
      </button>
    </div>
  );
};

export default DeleteButton;`,
    component: DeleteButton
  },
  "Grey Retro Auth Form": {
    preview: `<div class="auth-form-wrapper">
      <form class="form">
        <div class="welcome-text">
          Welcome back!
          <span>Sign in to continue</span>
        </div>
        <div class="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <button type="button" class="oauthButton">
          <svg class="icon google-icon" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c2.17 0 4.1.78 5.63 2.07l4.2-4.2C19.26 0.64 15.88-.12 12 0 7.32 0 3.2 2.7.96 6.61l4.84 3.76c1.17-3.52 4.46-6.09 8.37-5.33z"/>
            <path fill="#4285F4" d="M23.76 12.25c0-.76-.07-1.51-.2-2.23H12v4.26h6.56c-.29 1.51-1.15 2.79-2.42 3.66v3.05h3.92c2.29-2.1 3.62-5.19 3.62-8.74z"/>
            <path fill="#FBBC05" d="M5.79 14.33l-4.84 3.76C2.7 21.3 7.32 24 12 24c3.88 0 7.26-1.27 9.68-3.51l-3.92-3.05c-1.08.72-2.46 1.15-3.99 1.15-3.91 0-7.2-2.57-8.37-6.09z"/>
            <path fill="#34A853" d="M12 24c4.68 0 8.6-1.55 11.46-4.19l-4.2-4.2c-1.53 1.29-3.46 2.07-5.63 2.07-3.91 0-7.2-2.57-8.37-6.09L.96 15.35C3.2 20.3 7.32 24 12 24z"/>
          </svg>
          Continue with Google
        </button>
        <button type="button" class="oauthButton">
          <svg class="icon github-icon" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.92 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>
        <div class="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <input type="email" class="auth-input" placeholder="Email address" />
        <input type="password" class="auth-input password-field" placeholder="Password" />
        <button type="button" class="oauthButton">
          Sign In
          <svg class="icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
        <div class="toggle-section">
          <button type="button" class="toggle-button">
            Don't have an account? Sign up
          </button>
        </div>
      </form>
    </div>`,
    html: `<div class="auth-form-wrapper">
      <form class="form">
        <div class="welcome-text">
          Welcome back!
          <span>Sign in to continue</span>
        </div>
        <div class="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <button type="button" class="oauthButton">
          <svg class="icon google-icon" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c2.17 0 4.1.78 5.63 2.07l4.2-4.2C19.26 0.64 15.88-.12 12 0 7.32 0 3.2 2.7.96 6.61l4.84 3.76c1.17-3.52 4.46-6.09 8.37-5.33z"/>
            <path fill="#4285F4" d="M23.76 12.25c0-.76-.07-1.51-.2-2.23H12v4.26h6.56c-.29 1.51-1.15 2.79-2.42 3.66v3.05h3.92c2.29-2.1 3.62-5.19 3.62-8.74z"/>
            <path fill="#FBBC05" d="M5.79 14.33l-4.84 3.76C2.7 21.3 7.32 24 12 24c3.88 0 7.26-1.27 9.68-3.51l-3.92-3.05c-1.08.72-2.46 1.15-3.99 1.15-3.91 0-7.2-2.57-8.37-6.09z"/>
            <path fill="#34A853" d="M12 24c4.68 0 8.6-1.55 11.46-4.19l-4.2-4.2c-1.53 1.29-3.46 2.07-5.63 2.07-3.91 0-7.2-2.57-8.37-6.09L.96 15.35C3.2 20.3 7.32 24 12 24z"/>
          </svg>
          Continue with Google
        </button>
        <button type="button" class="oauthButton">
          <svg class="icon github-icon" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.92 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>
        <div class="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <input type="email" class="auth-input" placeholder="Email address" />
        <input type="password" class="auth-input password-field" placeholder="Password" />
        <button type="button" class="oauthButton">
          Sign In
          <svg class="icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
        <div class="toggle-section">
          <button type="button" class="toggle-button">
            Don't have an account? Sign up
          </button>
        </div>
      </form>
    </div>`,
    css: `/* Grey Retro Auth Form Styles */
.auth-form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f5f5f5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.form {
  background: #d3d3d3;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  border-radius: 5px;
  border: 2px solid #323232;
  box-shadow: 3px 3px #323232;
  width: 240px;
  transition: all 0.3s ease;
}

.welcome-text {
  font-weight: 700;
  font-size: 16px;
  color: #323232;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
}

.welcome-text > span {
  color: #666;
  font-weight: 600;
  font-size: 14px;
  margin-top: 2px;
}

.separator {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 5px 0;
}

.separator > div {
  width: 100px;
  height: 3px;
  border-radius: 5px;
  background-color: #666;
}

.separator > span {
  color: #323232;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
}

.oauthButton {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  border-radius: 5px;
  border: 2px solid #323232;
  background-color: #fff;
  box-shadow: 3px 3px #323232;
  font-size: 14px;
  font-weight: 600;
  color: #323232;
  cursor: pointer;
  transition: all 250ms;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.oauthButton::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #212121;
  z-index: -1;
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.oauthButton:hover {
  color: #e8e8e8;
}

.oauthButton:hover::before {
  width: 100%;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.google-icon {
  margin-right: 4px;
}

.github-icon {
  margin-right: 4px;
  fill: currentColor;
}

.arrow-icon {
  margin-left: 4px;
}

.auth-input {
  width: 100%;
  height: 32px;
  border-radius: 5px;
  border: 2px solid #323232;
  background-color: #fff;
  box-shadow: 3px 3px #323232;
  font-size: 14px;
  font-weight: 600;
  color: #323232;
  padding: 5px 10px;
  outline: none;
}

.auth-input:focus {
  border-color: #2d8cf0;
}

.password-field {
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.toggle-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.toggle-button {
  background: none;
  border: none;
  color: #323232;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.toggle-button:hover {
  color: #2d8cf0;
}`,
    fullcode: `import React, { useState } from 'react';

export const GreyRetroAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="welcome-text">
          {isSignUp ? 'Create Account' : 'Welcome back!'}
          <span>{isSignUp ? 'Sign up to get started' : 'Sign in to continue'}</span>
        </div>
        
        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <button type="button" className="oauthButton">
          <svg className="icon google-icon" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.04c2.17 0 4.1.78 5.63 2.07l4.2-4.2C19.26 0.64 15.88-.12 12 0 7.32 0 3.2 2.7.96 6.61l4.84 3.76c1.17-3.52 4.46-6.09 8.37-5.33z"/>
            <path fill="#4285F4" d="M23.76 12.25c0-.76-.07-1.51-.2-2.23H12v4.26h6.56c-.29 1.51-1.15 2.79-2.42 3.66v3.05h3.92c2.29-2.1 3.62-5.19 3.62-8.74z"/>
            <path fill="#FBBC05" d="M5.79 14.33l-4.84 3.76C2.7 21.3 7.32 24 12 24c3.88 0 7.26-1.27 9.68-3.51l-3.92-3.05c-1.08.72-2.46 1.15-3.99 1.15-3.91 0-7.2-2.57-8.37-6.09z"/>
            <path fill="#34A853" d="M12 24c4.68 0 8.6-1.55 11.46-4.19l-4.2-4.2c-1.53 1.29-3.46 2.07-5.63 2.07-3.91 0-7.2-2.57-8.37-6.09L.96 15.35C3.2 20.3 7.32 24 12 24z"/>
          </svg>
          Continue with Google
        </button>

        <button type="button" className="oauthButton">
          <svg className="icon github-icon" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.92 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.43.372.823 1.102.823 2.222v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>

        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <input
          type="email"
          className="auth-input"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          className="auth-input password-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="oauthButton" disabled={isLoading}>
          {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          <svg className="icon arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>

        <div className="toggle-section">
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};`,
    component: GreyRetroAuthForm
  },
  "Cyber Punk Auth Form": {
    preview: `
    <div class="bg-blue-950 min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <div class="relative w-full max-w-md rounded-lg border-4 border-pink-500 shadow-lg overflow-hidden z-10 bg-blue-900">
        <div class="p-6 text-center relative bg-blue-950">
          <h2 class="text-3xl font-bold text-cyan-400 mb-2 tracking-wide">PLAYER LOGIN</h2>
          <p class="text-cyan-400 mb-4">LEVEL 1 ACCESS</p>
          <div class="w-full bg-gray-800 h-6 rounded-full mb-4 relative overflow-hidden border-2 border-cyan-800">
            <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 ease-in-out w-0"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="text-sm font-mono text-white z-10 font-bold tracking-wider">XP: 0/100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    html: `
    <div class="bg-blue-950 min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <div class="relative w-full max-w-md rounded-lg border-4 border-pink-500 shadow-lg overflow-hidden z-10 bg-blue-900">
        <div class="p-6 text-center relative bg-blue-950">
          <h2 class="text-3xl font-bold text-cyan-400 mb-2 tracking-wide">PLAYER LOGIN</h2>
          <p class="text-cyan-400 mb-4">LEVEL 1 ACCESS</p>
          <div class="w-full bg-gray-800 h-6 rounded-full mb-4 relative overflow-hidden border-2 border-cyan-800">
            <div class="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 ease-in-out w-0"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="text-sm font-mono text-white z-10 font-bold tracking-wider">XP: 0/100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
    css: `
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    .animate-blob {
      animation: blob 10s infinite;
    }
    `,
    fullcode: `import { CyberPunkAuthForm } from "@/components/ui/cyber-punk-auth-form";

export default function CyberPunkAuthFormPreview() {
  return <CyberPunkAuthForm />;
}`,
    component: CyberPunkAuthForm
  },
  "Personal Name Card": {
    preview: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div class="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg">
        <div class="h-20 bg-gradient-to-r from-violet-500 to-indigo-500 relative overflow-hidden">
          <div class="absolute -right-6 -top-10 w-24 h-24 rounded-full bg-white/10"></div>
          <div class="absolute left-10 -bottom-6 w-12 h-12 rounded-full bg-white/10"></div>
        </div>
        <div class="bg-white relative z-10 p-6 pb-4">
          <div class="mx-auto -mt-16 mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md">
            <div class="w-full h-full bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div class="text-center mb-6">
            <h2 class="text-gray-800 text-xl font-semibold mb-1">Alex Kim</h2>
            <p class="text-indigo-500 text-sm font-medium">Product Designer</p>
          </div>
        </div>
        <div class="bg-gray-50">
          <button class="w-full flex items-center justify-center py-3 text-indigo-600 font-medium text-sm">
            <span class="mr-2">View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </div>`,
    html: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div class="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg">
        <!-- Card top color band -->
        <div class="h-20 bg-gradient-to-r from-violet-500 to-indigo-500 relative overflow-hidden">
          <!-- Decorative circles -->
          <div class="absolute -right-6 -top-10 w-24 h-24 rounded-full bg-white/10"></div>
          <div class="absolute left-10 -bottom-6 w-12 h-12 rounded-full bg-white/10"></div>
        </div>
        
        <!-- Card body -->
        <div class="bg-white relative z-10 p-6 pb-4">
          <!-- Profile image -->
          <div class="mx-auto -mt-16 mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md">
            <div class="w-full h-full bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          
          <!-- Name & title -->
          <div class="text-center mb-6">
            <h2 class="text-gray-800 text-xl font-semibold mb-1">Alex Kim</h2>
            <p class="text-indigo-500 text-sm font-medium">Product Designer</p>
          </div>
          
          <!-- Bio text -->
          <div class="overflow-hidden mb-6">
            <p class="text-center text-gray-600 text-sm">
              Creating meaningful digital experiences through thoughtful design and intuitive interfaces.
            </p>
          </div>
          
          <!-- Social links -->
          <div class="flex justify-center space-x-3 mt-4">
            <!-- Twitter -->
            <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <!-- Other social links follow the same pattern -->
          </div>
        </div>
        
        <!-- Card footer -->
        <div class="bg-gray-50">
          <button class="w-full flex items-center justify-center py-3 text-indigo-600 font-medium text-sm group hover:bg-indigo-50">
            <span class="mr-2">View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </div>`,
    css: `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}`,
    fullcode: `import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Linkedin, Mail, Github, ExternalLink, User } from 'lucide-react';

export const PersonalNameCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div 
        className={\`relative w-full max-w-xs rounded-2xl overflow-hidden transition-all duration-700 ease-out transform \${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } \${isHovered ? 'shadow-xl shadow-indigo-200/50' : 'shadow-lg'}\`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card content */}
        {/* ... Rest of the component code ... */}
      </div>
    </div>
  );
};`,
    component: PersonalNameCard
  },
  "Google Auth Button": {
    preview: `<div class="flex items-center justify-center p-12">
      <button class="relative flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span class="font-medium">Sign in with Google</span>
      </button>
    </div>`,
    html: `<div class="flex items-center justify-center p-12">
      <button class="google-auth-button">
        <div class="magnetic-outline"></div>
        <div class="button-content">
          <div class="logo-container">
            <svg class="google-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div class="logo-particles"></div>
          </div>
          <span class="button-text">Sign in with Google</span>
        </div>
        <div class="button-background"></div>
        <div class="click-ripple"></div>
      </button>
    </div>`,
    css: `.google-auth-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: white;
  border: none;
  border-radius: 12px;
  font-family: 'Google Sans', sans-serif;
  color: #3c4043;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.magnetic-outline {
  position: absolute;
  inset: -2px;
  border: 2px solid #4285f4;
  border-radius: 14px;
  opacity: 0;
  transition: all 0.3s ease;
}

.google-auth-button:hover .magnetic-outline {
  opacity: 0.5;
}

.button-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-container {
  position: relative;
  width: 20px;
  height: 20px;
}

.google-logo {
  width: 100%;
  height: 100%;
}

.logo-particles {
  position: absolute;
  inset: -50%;
  pointer-events: none;
}

.logo-particles::before,
.logo-particles::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
}

.google-auth-button:hover .logo-particles::before {
  animation: particle1 0.4s ease-out;
}

.google-auth-button:hover .logo-particles::after {
  animation: particle2 0.4s ease-out;
}

@keyframes particle1 {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-20px, -20px) rotate(45deg);
    opacity: 0;
  }
}

@keyframes particle2 {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(20px, -20px) rotate(-45deg);
    opacity: 0;
  }
}

.button-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #4285f4, #34a853, #fbbc05, #ea4335);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.google-auth-button:hover .button-background {
  opacity: 0.05;
}

.click-ripple {
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, rgba(66, 133, 244, 0.2) 0%, rgba(66, 133, 244, 0) 100%);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
}

@keyframes ripple {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(40);
    opacity: 0;
  }
}`,
    fullcode: `import React, { useEffect, useRef } from 'react';

const GoogleAuthButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const magneticOutlineRef = useRef<HTMLDivElement>(null);
  const clickRippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const magneticOutline = magneticOutlineRef.current;
    const clickRipple = clickRippleRef.current;

    if (!button || !magneticOutline || !clickRipple) return;

    // Magnetic effect - outline follows cursor
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate position as percentage of button dimensions
      const xPercent = (x / rect.width - 0.5) * 15;
      const yPercent = (y / rect.height - 0.5) * 15;
      
      magneticOutline.style.transform = \`translate(\${xPercent}px, \${yPercent}px)\`;
    };
    
    // Reset position when mouse leaves
    const handleMouseLeave = () => {
      magneticOutline.style.transform = 'translate(0, 0)';
    };
    
    // Click effect
    const handleClick = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      clickRipple.style.left = \`\${x}px\`;
      clickRipple.style.top = \`\${y}px\`;
      
      // Restart the animation
      clickRipple.style.animation = 'none';
      setTimeout(() => {
        clickRipple.style.animation = 'ripple 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards';
      }, 10);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-12">
      <button ref={buttonRef} className="google-auth-button">
        <div ref={magneticOutlineRef} className="magnetic-outline"></div>
        <div className="button-content">
          <div className="logo-container">
            <svg className="google-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="logo-particles"></div>
          </div>
          <span className="button-text">Sign in with Google</span>
        </div>
        <div className="button-background"></div>
        <div ref={clickRippleRef} className="click-ripple"></div>
      </button>
    </div>
  );
};

export default GoogleAuthButton;`,
    component: GoogleAuthButton
  },
  "Design Name Card": {
    preview: `<div class="relative w-full max-w-sm rounded-xl overflow-hidden shadow-md">
      <div class="relative h-64 bg-gradient-to-r from-teal-500 to-cyan-400">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-36 h-36 rounded-full border-4 border-white/30 overflow-hidden">
            <div class="w-full h-full bg-white flex items-center justify-center">
              <span class="text-4xl font-light text-teal-600">JD</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white h-48 relative">
        <div class="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h2 class="text-gray-800 text-2xl font-medium mb-2">Jane Doe</h2>
          <p class="text-teal-600 text-lg font-medium">UI/UX Designer</p>
        </div>
      </div>
    </div>`,
    html: `<div class="relative w-full max-w-sm rounded-xl overflow-hidden shadow-md">
      <div class="relative h-64 bg-gradient-to-r from-teal-500 to-cyan-400">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-36 h-36 rounded-full border-4 border-white/30 overflow-hidden">
            <div class="w-full h-full bg-white flex items-center justify-center">
              <span class="text-4xl font-light text-teal-600">JD</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white h-48 relative">
        <div class="absolute inset-0 flex flex-col items-center justify-center p-6">
          <h2 class="text-gray-800 text-2xl font-medium mb-2">Jane Doe</h2>
          <p class="text-teal-600 text-lg font-medium">UI/UX Designer</p>
          <div class="flex space-x-8 mt-6">
            <a href="#" class="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.32 3.3 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>`,
    css: `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}`,
    fullcode: `import React, { useState, useEffect } from 'react';
import { Instagram, Github, Mail } from 'lucide-react';

export const DesignNameCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={\`relative w-full max-w-sm rounded-xl overflow-hidden transition-all duration-700 ease-out transform \${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } \${isHovered ? 'shadow-xl' : 'shadow-md'}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component implementation */}
    </div>
  );
};`,
    component: DesignNameCard
  },
  "Flip Hover Card": {
    preview: `<div class="flip-card w-72 h-[310px]" style="perspective: 1000px">
      <div class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu shadow-lg rounded-2xl hover:rotate-y-180" style="transform-style: preserve-3d">
        <div class="flip-card-front absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white" style="backface-visibility: hidden">
          <!-- Front content -->
        </div>
        <div class="flip-card-back absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rotate-y-180" style="backface-visibility: hidden">
          <!-- Back content -->
        </div>
      </div>
    </div>`,
    html: `<div class="flip-card w-72 h-[310px]" style="perspective: 1000px">
      <div class="flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu shadow-lg rounded-2xl hover:rotate-y-180" style="transform-style: preserve-3d">
        <!-- Card content -->
      </div>
    </div>`,
    css: `.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}`,
    fullcode: `import React from 'react';

export const FlipHoverCard = () => {
  return (
    <div className="flip-card w-72 h-[310px]">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu shadow-lg rounded-2xl" 
           style={{ transformStyle: "preserve-3d" }}>
        
        {/* Front of card */}
        <div className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
             style={{ backfaceVisibility: "hidden" }}>
          <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H4M12 3V4M20 12H21M12 20V21M5.63605 5.63605L6.3432 6.3432M18.364 5.63605L17.6568 6.3432M18.364 18.364L17.6568 17.6568M5.63605 18.364L6.3432 17.6568" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-2xl font-bold tracking-wide mb-2">EXPLORE</p>
          <p className="text-sm opacity-80">Hover to discover</p>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
             style={{ backfaceVisibility: "hidden" }}>
          <div className="max-w-[85%] text-center">
            <p className="text-2xl font-bold tracking-wide mb-4">DISCOVER</p>
            <p className="text-base leading-relaxed mb-6">
              Find new opportunities and connections in a digital world of endless possibilities.
            </p>
            <button className="bg-white text-indigo-600 font-semibold text-sm py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`,
    component: FlipHoverCard
  },
  "Payment Popup Card": {
    preview: `<div class="flex items-center justify-center bg-gray-50 p-4">
      <div class="bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden">
        <div class="bg-blue-600 p-6">
          <h2 class="text-white text-xl font-bold">Checkout</h2>
          <div class="mt-4 flex justify-between">
            <span class="text-blue-100">Total</span>
            <span class="text-white text-xl font-bold">$89.99</span>
          </div>
        </div>
        <div class="p-6">
          <div class="flex border border-gray-300 rounded-md overflow-hidden mb-4">
            <div class="bg-gray-50 p-2">
              <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <input type="text" placeholder="Card number" class="w-full py-2 px-3 focus:outline-none" />
          </div>
          <button class="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Pay Now
          </button>
        </div>
      </div>
    </div>`,
    html: `<div class="flex items-center justify-center bg-gray-50 p-4">
      <div class="bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden">
        <!-- Header -->
        <div class="bg-blue-600 p-6">
          <h2 class="text-white text-xl font-bold">Checkout</h2>
          <div class="mt-4 flex justify-between">
            <span class="text-blue-100">Total</span>
            <span class="text-white text-xl font-bold">$89.99</span>
          </div>
        </div>
        
        <!-- Payment Form -->
        <form class="p-6">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2">Card Information</label>
            <div class="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <div class="bg-gray-50 p-2">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <input type="text" placeholder="Card number" class="w-full py-2 px-3 focus:outline-none" />
            </div>
          </div>
          
          <button type="submit" class="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Pay Now
          </button>
        </form>
      </div>
    </div>`,
    css: `@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus-within\\:ring-blue-500:focus-within {
  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}`,
    fullcode: `import React, { useState } from 'react';
import { CreditCard, Calendar, Lock, CheckCircle } from 'lucide-react';

export const PaymentPopupCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\\D/g, '');
    
    if (value.length > 2) {
      setExpiryDate(\`\${value.substring(0, 2)}/\${value.substring(2, 4)}\`);
    } else {
      setExpiryDate(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1500);
  };

  if (isComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-center">
          <div className="mb-4">
            <CheckCircle size={48} className="mx-auto text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-4">Your order has been processed.</p>
          <div className="bg-gray-50 rounded p-4 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Total Paid</span>
              <span className="font-medium">$89.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Card</span>
              <span className="font-medium">•••• {cardNumber.slice(-4) || '0000'}</span>
            </div>
          </div>
          <button 
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            onClick={() => {
              setIsComplete(false);
              setCardNumber('');
              setExpiryDate('');
              setCvv('');
            }}
          >
            Back to Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6">
          <h2 className="text-white text-xl font-bold">Checkout</h2>
          <div className="mt-4 flex justify-between">
            <span className="text-blue-100">Total</span>
            <span className="text-white text-xl font-bold">$89.99</span>
          </div>
        </div>
        
        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Card Information</label>
            <div className="mb-2">
              <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <div className="bg-gray-50 p-2">
                  <CreditCard size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full py-2 px-3 focus:outline-none"
                  maxLength={19}
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <div className="bg-gray-50 p-2">
                    <Calendar size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full py-2 px-3 focus:outline-none"
                    maxLength={5}
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <div className="bg-gray-50 p-2">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full py-2 px-3 focus:outline-none"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\\D/g, ''))}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Name on Card</label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className={\`w-full py-3 text-white font-medium rounded-md transition \${
              isProcessing 
                ? 'bg-blue-400 cursor-wait' 
                : 'bg-blue-600 hover:bg-blue-700'
            }\`}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>
          
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <Lock size={14} className="mr-1" />
            Secure payment
          </div>
        </form>
      </div>
    </div>
  );
};`,
    component: PaymentPopupCard
  },
  "Payment Tier Card": {
    preview: `<div class="relative w-full max-w-sm">
      <div class="relative bg-white rounded-3xl overflow-hidden shadow-lg">
        <div class="absolute -right-12 top-8 bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-1.5 text-white text-xs font-semibold rotate-45 transform origin-top-left shadow-md">
          POPULAR
        </div>
        <div class="pt-8 px-8 pb-4">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Pro Plan</h3>
              <p class="text-gray-500 text-sm mt-1">For growing businesses</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5h3.5L12 7l4-3h3.5a2.5 2.5 0 0 1 0 5H18"></path>
                <path d="M6 9v13"></path>
                <path d="M18 9v13"></path>
              </svg>
            </div>
          </div>
          <div class="mt-5 mb-6">
            <span class="text-4xl font-bold text-gray-900">$29</span>
            <span class="text-gray-500 ml-2">/ month</span>
          </div>
        </div>
      </div>
    </div>`,
    html: `<div class="relative w-full max-w-sm">
      <div class="relative bg-white rounded-3xl overflow-hidden shadow-lg">
        <!-- Popular tag -->
        <div class="absolute -right-12 top-8 bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-1.5 text-white text-xs font-semibold rotate-45 transform origin-top-left shadow-md">
          POPULAR
        </div>
        
        <!-- Card header -->
        <div class="pt-8 px-8 pb-4">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Pro Plan</h3>
              <p class="text-gray-500 text-sm mt-1">For growing businesses</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5h3.5L12 7l4-3h3.5a2.5 2.5 0 0 1 0 5H18"></path>
                <path d="M6 9v13"></path>
                <path d="M18 9v13"></path>
              </svg>
            </div>
          </div>
          
          <!-- Price -->
          <div class="mt-5 mb-6">
            <span class="text-4xl font-bold text-gray-900">$29</span>
            <span class="text-gray-500 ml-2">/ month</span>
          </div>
        </div>
        
        <!-- Features -->
        <div class="px-8 pt-6 pb-8">
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg class="mr-3 mt-0.5 flex-shrink-0 w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-600">Up to 10 team members</span>
            </li>
            <!-- More features... -->
          </ul>
        </div>
        
        <!-- Action button -->
        <div class="px-8 pb-8">
          <button class="w-full py-3.5 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200">
            Choose Plan
          </button>
        </div>
      </div>
    </div>`,
    css: `@keyframes button-shine {
  from {
    transform: translateX(-100%) rotate(45deg);
  }
  to {
    transform: translateX(100%) rotate(45deg);
  }
}

.animate-button-shine {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: button-shine 2s infinite;
}`,
    fullcode: `import React, { useState } from 'react';
import { Check, Star, Trophy, ChevronRight } from 'lucide-react';

export const PaymentTierCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full max-w-sm transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <div 
        className={\`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ease-out \${
          isHovered 
            ? 'shadow-xl shadow-blue-500/10 scale-[1.02] -translate-y-1' 
            : 'shadow-lg'
        }\`}
      >
        {/* Popular tag */}
        <div className="absolute -right-12 top-8 bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-1.5 text-white text-xs font-semibold rotate-45 transform origin-top-left shadow-md">
          POPULAR
        </div>
        
        {/* Card header */}
        <div className="pt-8 px-8 pb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Pro Plan</h3>
              <p className="text-gray-500 text-sm mt-1">For growing businesses</p>
            </div>
            <div className={\`w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-500 \${isHovered ? 'bg-blue-500 text-white scale-110' : 'text-blue-500'}\`}>
              <Trophy size={20} />
            </div>
          </div>
          
          {/* Price */}
          <div className="mt-5 mb-6">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-500 ml-2">/ month</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="px-8 pt-6 pb-8">
          <ul className="space-y-4">
            {[
              "Up to 10 team members",
              "20GB of storage",
              "Advanced analytics",
              "24/7 customer support",
              "Custom branding options"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={\`mr-3 mt-0.5 flex-shrink-0 transition-all duration-500 \${isHovered ? 'text-blue-500 scale-110' : 'text-blue-400'}\`}>
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action button */}
        <div className="px-8 pb-8">
          <button 
            className={\`relative w-full py-3.5 rounded-full font-semibold text-white transition-all duration-500 overflow-hidden group \${
              isHovered ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'bg-blue-500'
            }\`}
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Choose Plan</span>
              <ChevronRight 
                size={18} 
                className={\`ml-2 transition-transform duration-500 \${isHovered ? 'translate-x-1' : ''}\`} 
              />
            </span>
            
            {/* Button shine effect */}
            <div className={\`absolute inset-0 transition-opacity duration-700 \${isHovered ? 'opacity-100' : 'opacity-0'}\`}>
              <div className="absolute inset-0 translate-x-full animate-button-shine"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Reflection effect */}
      <div 
        className={\`w-full h-[130%] absolute top-0 left-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent rounded-3xl transform rotate-180 transition-opacity duration-500 \${
          isHovered ? 'opacity-30' : 'opacity-0'
        }\`}
        style={{ 
          filter: 'blur(8px)',
          transformOrigin: 'center',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0))',
        }}
      ></div>
      
      {/* Decorative balls */}
      <div 
        className={\`absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 transition-all duration-500 \${
          isHovered ? 'scale-125 opacity-70' : 'opacity-0 scale-0'
        }\`}
        style={{ filter: 'blur(8px)' }}
      ></div>
      <div 
        className={\`absolute -left-4 -top-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 transition-all duration-500 \${
          isHovered ? 'scale-125 opacity-70' : 'opacity-0 scale-0'
        }\`}
        style={{ filter: 'blur(6px)' }}
      ></div>
    </div>
  );
};`,
    component: PaymentTierCard
  },
  "GitHub Auth Button": {
    preview: `<button class="relative group overflow-hidden">
      <div class="relative z-10 flex items-center bg-gray-800 border border-gray-700 rounded-lg px-5 py-3">
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.58v-2.03c-3.34.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.74-1.333-1.74-1.1-.75.083-.73.083-.73 1.2.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.32 3.3 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z" fill="#FFFFFF"/>
        </svg>
        <span class="ml-2.5 text-white font-medium text-sm">Continue with GitHub</span>
      </div>
    </button>`,
    html: `<button class="relative group overflow-hidden">
      <!-- Main button -->
      <div class="relative z-10 flex items-center bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:bg-gray-900 group-hover:shadow-lg group-hover:shadow-teal-500/20">
        <!-- GitHub icon -->
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.58v-2.234c-3.34.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.74-1.333-1.74-1.1-.75.083-.73.083-.73 1.2.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.32 3.3 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#FFFFFF"/>
        </svg>
        <span class="ml-2.5 text-white font-medium text-sm">Continue with GitHub</span>
      </div>
      
      <!-- Background glow effect -->
      <div class="absolute inset-0 rounded-lg bg-teal-500 blur-xl opacity-0 scale-100 transition-all duration-500"></div>
    </button>`,
    css: `@keyframes ping-slow {
  0% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(0.8); opacity: 0.6; }
}

@keyframes ping-slower {
  0% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.2; }
  100% { transform: scale(0.8); opacity: 0.6; }
}

@keyframes ping-slowest {
  0% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 0.2; }
  100% { transform: scale(0.8); opacity: 0.6; }
}`,
    fullcode: `import React, { useState } from 'react';

export const GitHubAuthButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://github.com/login/oauth/authorize"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:bg-gray-900 group-hover:shadow-lg group-hover:shadow-teal-500/20">
        {/* GitHub icon */}
        <svg 
          className={\`mr-2.5 transition-all duration-700 \${isHovered ? 'rotate-[360deg]' : ''}\`} 
          width="22" 
          height="22" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.32 3.3 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill={isHovered ? '#10B981' : '#FFFFFF'}
            className="transition-all duration-500"
          />
        </svg>
        
        {/* Text container with individual letters for animation */}
        <div className="flex items-center overflow-hidden h-6">
          <div className="flex space-x-0.5 text-white font-medium text-sm tracking-wide">
            {["C", "o", "n", "t", "i", "n", "u", "e", " ", "w", "i", "t", "h", " ", "G", "i", "t", "H", "u", "b"].map((letter, index) => (
              <span 
                key={index} 
                className={\`transition-all duration-300 transform \${
                  isHovered 
                    ? 'translate-y-0 opacity-100' 
                    : index < 15 ? 'translate-y-8 opacity-0' : 'opacity-100'
                }\`}
                style={{ 
                  transitionDelay: isHovered 
                    ? \`\${50 + (index * 20)}ms\` 
                    : \`\${(20 - index) * 20}ms\` 
                }}
              >
                {letter === " " ? "\\u00A0" : letter}
              </span>
            ))}
          </div>
        </div>
        
        {/* Arrow icon */}
        <svg 
          className={\`ml-2 transition-all duration-500 \${
            isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'
          }\`} 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      
      {/* Background glow effect */}
      <div 
        className={\`absolute inset-0 rounded-lg bg-teal-500 blur-xl transition-all duration-500 \${
          isHovered ? 'opacity-20 scale-110' : 'opacity-0 scale-100'
        }\`}
      ></div>
      
      {/* Particle effects */}
      {isHovered && (
        <>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400/30 [animation:ping-slow_3s_infinite]"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-teal-400/20 [animation:ping-slower_2.5s_infinite_0.5s]"></div>
          <div className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-teal-300/40 [animation:ping-slowest_4s_infinite_1s]"></div>
        </>
      )}
    </button>
  );
};`,
    component: GitHubAuthButton
  },
  "X Auth Button": {
    preview: `<button class="relative group overflow-hidden">
      <div class="relative z-10 flex items-center bg-black rounded-lg px-5 py-3 border border-gray-800">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
        <span class="ml-3 text-white font-medium text-sm">Continue with X</span>
      </div>
    </button>`,
    html: `<button class="relative group overflow-hidden">
      <div class="relative z-10 flex items-center bg-black rounded-lg px-5 py-3 border border-gray-800 transition-all duration-500 transform overflow-hidden group-hover:shadow-lg group-hover:shadow-white/10">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
        <span class="ml-3 text-white font-medium text-sm">Continue with X</span>
      </div>
    </button>`,
    css: `@keyframes pulse-ring {
      0% { transform: scale(1); opacity: 0.3; }
      70% { transform: scale(1.1); opacity: 0; }
      100% { transform: scale(1.1); opacity: 0; }
    }
    
    @keyframes spark-vertical {
      0% { height: 0; opacity: 0; }
      50% { height: 12px; opacity: 0.8; }
      100% { height: 0; opacity: 0; }
    }`,
    fullcode: `import React, { useState } from 'react';

interface XAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const XAuthButton: React.FC<XAuthButtonProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://twitter.com/i/oauth2/authorize"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-black rounded-lg px-5 py-3 border border-gray-800 transition-all duration-500 transform overflow-hidden group-hover:shadow-lg group-hover:shadow-white/10">
        {/* X logo container with rotation effect */}
        <div 
          className={\`relative z-10 transition-all duration-700 transform \${
            isHovered ? 'rotate-[360deg] scale-110' : ''
          }\`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </div>
        
        {/* Text container */}
        <div className="relative z-10 ml-3 overflow-hidden">
          {["C", "o", "n", "t", "i", "n", "u", "e", " ", "w", "i", "t", "h", " ", "X"].map((letter, index) => (
            <span 
              key={index}
              className="inline-block text-white font-medium text-sm"
              style={{
                transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                opacity: isHovered ? 1 : 0,
                transition: \`transform 500ms, opacity 300ms\`,
                transitionDelay: \`\${index * 30}ms\`,
                position: letter === " " ? "relative" : "relative",
                width: letter === " " ? "4px" : "auto"
              }}
            >
              {letter === " " ? "\\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};`,
    component: XAuthButton
  },
  "Facebook Auth Button": {
    preview: `<button class="relative group overflow-hidden">
      <div class="relative z-10 flex items-center bg-[#1877F2] rounded-lg px-5 py-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span class="ml-3 text-white font-medium text-sm">Continue with Facebook</span>
      </div>
    </button>`,
    html: `<button class="relative group overflow-hidden">
      <div class="relative z-10 flex items-center bg-[#1877F2] rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:shadow-lg group-hover:shadow-blue-500/30 overflow-hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span class="ml-3 text-white font-medium text-sm">Continue with Facebook</span>
      </div>
    </button>`,
    css: `@keyframes circleScale {
      0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.4; }
      100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
    }
    
    @keyframes wave {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }`,
    fullcode: `import React, { useState } from 'react';

interface FacebookAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FacebookAuthButton: React.FC<FacebookAuthButtonProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = "https://www.facebook.com/v13.0/dialog/oauth"}
    >
      {/* Main button */}
      <div className="relative z-10 flex items-center bg-[#1877F2] rounded-lg px-5 py-3 transition-all duration-500 transform group-hover:shadow-lg group-hover:shadow-blue-500/30 overflow-hidden">
        {/* Facebook icon */}
        <div className={\`relative z-10 transition-all duration-500 transform \${isHovered ? 'scale-110' : ''}\`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        
        {/* Text container */}
        <div className="relative z-10 ml-3 overflow-hidden">
          <div className="relative overflow-hidden">
            <p className="text-white font-medium text-sm tracking-wide">
              Continue with Facebook
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};`,
    component: FacebookAuthButton
  },
  "Navy Auth Form": {
    preview: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-950 to-black p-4">
      <div class="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl p-6 w-full max-w-md">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-white mb-1">Welcome Back</h2>
          <p class="text-gray-400 text-sm">Sign in to continue</p>
        </div>
        <form class="space-y-4">
          <input type="email" placeholder="Email address" class="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800" />
          <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800" />
          <button class="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg">Sign In</button>
        </form>
      </div>
    </div>`,
    html: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-950 to-black p-4">
      <div class="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl p-6 w-full max-w-md">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-white mb-1">Welcome Back</h2>
          <p class="text-gray-400 text-sm">Sign in to continue</p>
        </div>
        <form class="space-y-4">
          <input type="email" placeholder="Email address" class="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800" />
          <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800" />
          <button class="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg">Sign In</button>
        </form>
      </div>
    </div>`,
    css: `/* Add your CSS styles here */`,
    fullcode: `import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface NavyAuthFormProps {
  className?: string;
}

export const NavyAuthForm = ({ className }: NavyAuthFormProps): JSX.Element => {
  // ... component implementation
};`,
    component: NavyAuthForm
  },
  "Modern Auth Form": {
    preview: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div class="relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-2xl">
        <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-xl"></div>
        <div class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-50 blur-xl"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p class="text-gray-400">Sign in to continue to your account</p>
        </div>
      </div>
    </div>`,
    html: `<div class="flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div class="relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-2xl">
        <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-xl"></div>
        <div class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-50 blur-xl"></div>
        <div class="relative z-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p class="text-gray-400">Sign in to continue to your account</p>
        </div>
      </div>
    </div>`,
    css: `/* Add your CSS styles here */`,
    fullcode: `import React, { useState } from 'react';

interface ModernAuthFormProps {
  className?: string;
}

export const ModernAuthForm = ({ className }: ModernAuthFormProps): JSX.Element => {
  // ... component implementation
};`,
    component: ModernAuthForm
  },
  "Violet Auth Form": {
    preview: `<div class="flex items-center justify-center bg-gradient-to-bl from-teal-900 via-purple-900 to-black p-4">
      <div class="relative w-full max-w-md rounded-3xl bg-white/5 p-6 shadow-xl backdrop-blur-sm border border-white/10">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-white">Hello Again</h1>
          <p class="mt-2 text-sm text-gray-300">Sign in to continue</p>
        </div>
      </div>
    </div>`,
    html: `<div class="flex items-center justify-center bg-gradient-to-bl from-teal-900 via-purple-900 to-black p-4">
      <div class="relative w-full max-w-md rounded-3xl bg-white/5 p-6 shadow-xl backdrop-blur-sm border border-white/10">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-white">Hello Again</h1>
          <p class="mt-2 text-sm text-gray-300">Sign in to continue</p>
        </div>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" class="w-full rounded-lg border border-white/10 bg-white/10 py-2 px-4 text-white" placeholder="name@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input type="password" class="w-full rounded-lg border border-white/10 bg-white/10 py-2 px-4 text-white" placeholder="••••••••" />
          </div>
          <button type="submit" class="w-full rounded-lg bg-teal-600 py-2.5 px-4 font-semibold text-white">Sign In</button>
        </form>
      </div>
    </div>`,
    css: `@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}`,
    fullcode: `import React, { useState } from 'react';

interface VioletAuthFormProps {
  className?: string;
}

export const VioletAuthForm = ({ className }: VioletAuthFormProps): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return (
    <div className={\`min-h-screen w-full bg-gradient-to-bl from-teal-900 via-purple-900 to-black
      flex items-center justify-center overflow-hidden font-sans \${className || ''}\`}>
      {/* Component implementation */}
    </div>
  );
};`,
    component: VioletAuthForm
  },
  "Send Button": {
    component: SendButton,
    preview: `
      <button class="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 
        bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full">
        <span class="font-semibold text-lg tracking-wide">Send</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    `,
    html: `
      <button class="relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 
        bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full 
        shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-blue-700
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
        <span class="font-semibold text-lg tracking-wide">Send</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    `,
    css: `
      @keyframes ripple {
        0% { transform: scale(0); }
        100% { transform: scale(4); }
      }
      .animate-ripple {
        animation: ripple 0.8s ease-out;
      }
    `,
    fullcode: `
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const SendButton = () => {
  const [animationState, setAnimationState] = useState('idle');
  
  const handleClick = () => {
    if (animationState !== 'idle') return;
    
    setAnimationState('sending');
    setTimeout(() => setAnimationState('success'), 1200);
    setTimeout(() => setAnimationState('idle'), 2400);
  };
  
  return (
    <button 
      onClick={handleClick}
      disabled={animationState !== 'idle'}
      className={\`relative overflow-hidden group flex items-center justify-center gap-2 px-8 py-4 
        bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full 
        shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-blue-700
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
        \${animationState === 'sending' ? 'animate-pulse' : ''}
        \${animationState === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : ''}\`}
    >
      <span className={\`font-semibold text-lg tracking-wide transition-all duration-300 \${animationState === 'sending' ? 'opacity-0 translate-y-2' : 'opacity-100'}\`}>
        {animationState === 'success' ? 'Sent!' : 'Send'}
      </span>
      
      <div className="relative w-6">
        <Send 
          size={24} 
          className={\`transition-all duration-300 \${animationState !== 'idle' ? 'opacity-0' : 'opacity-100'}\`} 
        />
        
        <Send 
          size={24} 
          className={\`absolute top-0 left-0 transition-all duration-1000 ease-out transform
            \${animationState === 'sending' 
              ? 'opacity-100 translate-x-16 -translate-y-16 scale-50 rotate-12' 
              : 'opacity-0 translate-x-0 translate-y-0 scale-100 rotate-0'}\`} 
        />
        
        <svg 
          className={\`absolute top-0 left-0 w-6 h-6 transition-all duration-500 \${animationState === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}\`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      
      <svg 
        className={\`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 \${animationState === 'sending' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}\`} 
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        >
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate" 
            from="0 12 12" 
            to="360 12 12" 
            dur="1s" 
            repeatCount="indefinite" 
          />
        </path>
      </svg>
      
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className={\`absolute inset-0 transform scale-0 rounded-full bg-white opacity-30 transition-transform duration-500 ease-out \${animationState === 'sending' ? 'animate-ripple' : ''}\`}></span>
      </span>
    </button>
  );
};
    `,
  },
  "Reddit Auth Button": {
    preview: `<button class="relative flex items-center justify-center gap-2 px-5 py-3 bg-white rounded-full">
      <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="10" cy="10" r="10" fill="#FF4500"/>
          <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z" fill="white"/>
        </g>
      </svg>
      <span class="font-medium">Continue with Reddit</span>
    </button>`,
    html: `<button class="relative flex items-center justify-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
      <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="10" cy="10" r="10" fill="#FF4500"/>
          <path d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z" fill="white"/>
        </g>
      </svg>
      <span class="font-medium">Continue with Reddit</span>
    </button>`,
    css: `@keyframes blink {
      0%, 45%, 55%, 100% { 
        opacity: 0; 
        transform: scaleY(1);
      }
      50% { 
        opacity: 1; 
        transform: scaleY(0.2);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1.05);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.3;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }

    .blinkAnimation {
      animation: blink 2.5s infinite;
    }

    .blinkAnimationDelayed {
      animation: blink 2.5s 0.3s infinite;
    }

    .pulseAnimation {
      animation: pulse 2s infinite;
    }`,
    fullcode: `import React, { useEffect, useRef } from 'react';
import styles from './reddit-auth-button.module.css';

interface RedditAuthButtonProps {
  className?: string;
}

export const RedditAuthButton = ({ className }: RedditAuthButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const logoContainer = logoContainerRef.current;

    if (!button || !logoContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const buttonRect = button.getBoundingClientRect();
      const logoRect = logoContainer.getBoundingClientRect();
      
      // Calculate mouse position relative to the logo center
      const logoX = logoRect.left + logoRect.width / 2;
      const logoY = logoRect.top + logoRect.height / 2;
      
      // Calculate angle based on mouse position
      const deltaX = e.clientX - logoX;
      const deltaY = e.clientY - logoY;
      
      // Limit rotation to a small range
      const maxRotation = 10;
      const rotationX = Math.max(Math.min(deltaY * 0.1, maxRotation), -maxRotation);
      const rotationY = Math.max(Math.min(deltaX * -0.1, maxRotation), -maxRotation);
      
      // Apply subtle rotation
      logoContainer.style.transform = \`perspective(300px) rotateX(\${rotationX}deg) rotateY(\${rotationY}deg)\`;
    };

    const handleMouseLeave = () => {
      logoContainer.style.transform = 'perspective(300px) rotateX(0) rotateY(0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center p-8 bg-gray-50 rounded-2xl">
      <button 
        ref={buttonRef}
        className={\`relative w-[250px] h-[50px] border-none rounded-[25px] bg-none cursor-pointer p-0 overflow-visible transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[3px] active:translate-y-[1px] \${className || ''}\`}
      >
        <div className="relative flex items-center justify-start gap-3 w-full h-full px-5 z-[3]">
          <div 
            ref={logoContainerRef}
            className="relative w-[30px] h-[30px]"
          >
            <svg className="w-full h-full transition-transform duration-300 ease-out hover:rotate-[-5deg] hover:scale-110" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle className="transition-[fill] duration-300 ease-out fill-[#FF4500] hover:fill-[#ff5414]" cx="10" cy="10" r="10"/>
                <path className="fill-white" d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z"/>
              </g>
            </svg>
            <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              <div className={\`absolute w-[3px] h-[3px] bg-[#FF4500] rounded-full top-2 left-2 \${styles.blinkAnimation}\`}></div>
              <div className={\`absolute w-[3px] h-[3px] bg-[#FF4500] rounded-full top-2 right-2 \${styles.blinkAnimationDelayed}\`}></div>
            </div>
          </div>
          <span className="font-['IBM_Plex_Sans'] font-semibold text-[15px] text-[#1c1c1c] transition-all duration-300 ease-out">
            Continue with Reddit
          </span>
        </div>
        
        <div className="absolute inset-0 bg-white rounded-[25px] z-[1] transition-all duration-300 ease-out shadow-[0_2px_10px_rgba(255,69,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(255,69,0,0.15),0_3px_10px_rgba(0,0,0,0.08)] hover:bg-[#fffaf8] active:shadow-[0_1px_5px_rgba(255,69,0,0.1),0_1px_2px_rgba(0,0,0,0.05)]"></div>
        
        <div className="absolute -inset-5 rounded-[35px] z-0 pointer-events-none">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={\`absolute inset-0 rounded-[35px] border border-[rgba(255,69,0,0.1)] opacity-0 transition-all duration-500 ease-out hover:opacity-100 \${styles.pulseAnimation} \${
                i === 1 ? 'scale-[1.05] delay-0' :
                i === 2 ? 'scale-[1.1] delay-[0.05s]' :
                'scale-[1.15] delay-[0.1s]'
              }\`}
              style={{
                animationDelay: \`\${(i - 1) * 0.4}s\`
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};`,
    component: RedditAuthButton
  },
  "Add-to-Cart Button": {
    preview: `<button class="relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
      <span>Add to Cart</span>
    </button>`,
    html: `<button class="cart-btn">
      <span class="cart-icon">
        <svg viewBox="0 0 24 24">
          <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      </span>
      <span class="text">Add to Cart</span>
      <span class="checkmark">
        <svg viewBox="0 0 24 24">
          <path d="M6 12l4 4L18 6" />
        </svg>
      </span>
    </button>`,
    css: `/* Add your CSS styles here */`,
    fullcode: `import React, { useRef } from 'react';
import styles from './add-to-cart-button.module.css';

interface AddToCartButtonProps {
  className?: string;
}

export const AddToCartButton = ({ className }: AddToCartButtonProps): JSX.Element => {
  // Component implementation
};`,
    component: AddToCartButton
  },
  "Apple Auth Button": {
    preview: `<button class="relative flex items-center justify-center w-64 py-3 px-4 rounded-lg bg-black">
      <div class="mr-3">
        <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </div>
      <span class="font-medium text-base text-white">Sign in with Apple</span>
    </button>`,
    html: `<button class="relative flex items-center justify-center w-64 py-3 px-4 rounded-lg bg-black hover:bg-gray-800 transition-all duration-300">
      <div class="mr-3 transition-all duration-300 hover:scale-125">
        <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </div>
      <span class="font-medium text-base text-white transition-all duration-300 hover:tracking-wider hover:translate-x-1">Sign in with Apple</span>
      <div class="absolute inset-0 border-2 rounded-lg transition-all duration-300 border-transparent opacity-0 hover:border-white hover:opacity-30"></div>
    </button>`,
    css: `/* Add any additional CSS if needed */`,
    fullcode: `import React, { useState } from 'react';

interface AppleAuthButtonProps {
  className?: string;
}

export const AppleAuthButton = ({ className }: AppleAuthButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={\`relative flex items-center justify-center w-64 py-3 px-4 rounded-lg transition-all duration-300 \${
        isHovered ? 'bg-gray-800' : 'bg-black'
      } \${className || ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      {/* Apple logo */}
      <div className={\`mr-3 transition-all duration-300 \${isHovered ? 'transform scale-125' : ''}\`}>
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 text-white" 
          fill="currentColor"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </div>
      
      {/* Text with letter spacing animation */}
      <span 
        className={\`font-medium text-base text-white transition-all duration-300 \${
          isHovered ? 'tracking-wider transform translate-x-1' : ''
        }\`}
      >
        Sign in with Apple
      </span>
      
      {/* Animated border */}
      <div className={\`absolute inset-0 border-2 rounded-lg transition-all duration-300 \${
        isHovered ? 'border-white opacity-30' : 'border-transparent opacity-0'
      }\`></div>
    </button>
  );
};`,
    component: AppleAuthButton
  },
  "Warning Sign": {
    preview: `<div class="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div class="bg-red-500 py-6 flex justify-center items-center">
        <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
      </div>
      <div class="px-6 py-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Warning!</h2>
        <p class="text-gray-600 text-center mb-6">An error has occurred while creating an error report.</p>
        <button class="px-10 py-2.5 rounded-full bg-red-500 text-white font-medium">CLOSE</button>
      </div>
    </div>`,
    html: `<div class="bg-white rounded-2xl overflow-hidden shadow-lg">
      <!-- Header with warning icon -->
      <div class="bg-red-500 py-6 flex justify-center items-center relative overflow-hidden">
        <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="px-6 py-8 flex flex-col items-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Warning!</h2>
        <p class="text-gray-600 text-center mb-6">An error has occurred while creating an error report.</p>
        <button class="px-10 py-2.5 rounded-full bg-red-500 text-white font-medium">CLOSE</button>
      </div>
    </div>`,
    css: `@keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }`,
    fullcode: `import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningSignProps {
  className?: string;
}

export const WarningSign = ({ className }: WarningSignProps): JSX.Element => {
  // Component implementation
};`,
    component: WarningSign
  },
  "Buy Me Coffee": {
    preview: `<div class="relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-rose-50 p-8 shadow-lg">
      <div class="mb-6 flex justify-center">
        <div class="relative text-5xl">☕</div>
      </div>
      <div class="text-center">
        <h2 class="mb-2 text-2xl font-bold text-gray-800">Buy Me a Coffee</h2>
        <p class="mb-6 text-gray-600">Love my work? Support me with a coffee and help me keep going!</p>
        <button class="rounded-full bg-blue-500 px-6 py-2.5 text-white font-medium hover:bg-blue-600">
          Support $5
        </button>
      </div>
    </div>`,
    html: `<div class="relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-rose-50 p-8 shadow-lg">
      <!-- Coffee icon -->
      <div class="mb-6 flex justify-center">
        <div class="relative text-5xl transition-transform duration-500 hover:animate-bounce">☕</div>
      </div>
      
      <!-- Content -->
      <div class="text-center">
        <h2 class="mb-2 text-2xl font-bold text-gray-800">Buy Me a Coffee</h2>
        <p class="mb-6 text-gray-600">Love my work? Support me with a coffee and help me keep going!</p>
        
        <!-- Support button -->
        <button class="group relative overflow-hidden rounded-full bg-blue-500 px-6 py-2.5 text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg">
          <span class="relative z-10 font-medium">Support $5</span>
          <!-- Button shine effect -->
          <div class="absolute inset-0 z-0 translate-x-[-100%] transform bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-transform duration-500 group-hover:translate-x-[100%] group-hover:opacity-100"></div>
        </button>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
      <div class="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 blur-xl"></div>
    </div>`,
    css: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-bounce {
  animation: bounce 1s ease infinite;
}`,
    fullcode: `import React, { useState } from 'react';

interface BuyMeCoffeeProps {
  className?: string;
}

export const BuyMeCoffee = ({ className }: BuyMeCoffeeProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={\`relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-rose-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl \${className || ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component implementation */}
    </div>
  );
};`,
    component: BuyMeCoffee
  },
  "Feedback Card": {
    preview: `<div class="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white/75 backdrop-blur-xl p-8 shadow-lg">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Your Feedback</h2>
        <div class="flex justify-center gap-3 mb-6">
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-gray-200">★</div>
          <div class="w-8 h-8 text-gray-200">★</div>
        </div>
      </div>
    </div>`,
    html: `<div class="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white/75 backdrop-blur-xl p-8 shadow-lg">
      <div class="absolute inset-0 p-[2px] bg-gradient-to-r from-emerald-400 via-blue-500 to-pink-500 rounded-3xl -z-10">
        <div class="absolute inset-0 bg-white/75 backdrop-blur-xl rounded-3xl" />
      </div>
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Your Feedback</h2>
        <div class="flex justify-center gap-3 mb-6">
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-yellow-400">★</div>
          <div class="w-8 h-8 text-gray-200">★</div>
          <div class="w-8 h-8 text-gray-200">★</div>
        </div>
        <textarea placeholder="Optional: share your thoughts..." class="w-full h-20 px-4 py-3 rounded-2xl bg-white/60 border-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
        <div class="flex justify-center gap-4 mt-6">
          <button class="px-6 py-2.5 bg-blue-500 text-white rounded-full font-medium">Submit</button>
          <button class="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-full font-medium">Close</button>
        </div>
      </div>
    </div>`,
    css: `@keyframes pulse {
  0% { transform: scale(1.1) translateY(-2px); }
  50% { transform: scale(1.3) translateY(-4px); }
  100% { transform: scale(1.1) translateY(-2px); }
}

.star-pulse {
  animation: pulse 0.6s ease;
}`,
    fullcode: `import React, { useState } from 'react';
import { Star } from 'lucide-react';

export const FeedbackCard = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showThanks, setShowThanks] = useState(false);

  // Component implementation
};`,
    component: FeedbackCard
  },
};

export const getComponentCode = (name: string): ComponentCode | null => {
  return componentRegistry[name] || null;
};
