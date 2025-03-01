import { AnimatedSubmitButton } from "@/components/ui/animated-submit-button";
import BuyNowButton from "@/components/ui/buy-now-button";
import DownloadButton from "@/components/ui/download-button";
import DeleteButton from "@/components/ui/delete-button";
import { GreyRetroAuthForm } from "@/components/ui/grey-retro-auth-form";
import { LavenderAuthForm } from "@/components/ui/lavender-auth-form";
import { CyberPunkAuthForm } from "@/components/ui/cyber-punk-auth-form";

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
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.92 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
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
  }
};

export const getComponentCode = (name: string): ComponentCode | null => {
  return componentRegistry[name] || null;
};
