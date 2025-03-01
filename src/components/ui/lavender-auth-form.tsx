import React, { useState } from 'react';

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
    <div className="flex items-center justify-center bg-gradient-to-br from-violet-100 to-teal-100 p-4">
      <div className="w-full max-w-[420px]">
        {/* Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl">
          {/* Form header */}
          <div className="relative h-28 bg-gradient-to-r from-violet-500 to-indigo-600">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 pattern-dots pattern-indigo-500 pattern-bg-transparent pattern-size-4 pattern-opacity-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full px-7 py-5">
              <h2 className="text-[22px] font-bold text-white">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-sm text-indigo-100">
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
              className="absolute top-5 right-5 text-sm text-white bg-white/20 px-4 py-1.5 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </div>
          
          {/* Form content */}
          <div className="px-7 py-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username field - only shown for signup */}
              {isSignUp && (
                <div className="space-y-1.5">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-3.5 py-2.5 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition text-sm"
                    placeholder="johndoe"
                    required={isSignUp}
                  />
                </div>
              )}
              
              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              {/* Password field */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-3.5 py-2.5 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition pr-9 text-sm"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-500 hover:text-gray-700"
                  >
                    {passwordVisible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline">Forgot password?</a>
                </div>
              )}
              
              {/* Submit button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-5 py-2.5 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            <div className="mt-5 text-center text-sm text-gray-500">
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
      
      {/* Add blob animation to background */}
      <div className="fixed top-16 left-16 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-56 right-40 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-20 left-40 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <style>{`
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
        
        .pattern-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px);
        }

        .pattern-size-4 {
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
}; 