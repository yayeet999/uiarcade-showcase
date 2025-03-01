import React, { useState, useEffect } from 'react';

interface AuthProviderProps {
  provider: 'google' | 'x' | 'github';
}

export const CyberPunkAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Calculate form completion score
  useEffect(() => {
    let score = 0;
    if (email) score += 25;
    if (password) score += 25;
    if (password.length >= 8) score += 25;
    else if (password.length > 0) score += 10;
    
    // Update XP based on form activities
    if (score > 50 && xp < 50) setXp(50);
    else if (score > 75 && xp < 75) setXp(75);
  }, [email, password, isSignUp, xp]);

  // Level up when XP reaches certain thresholds
  useEffect(() => {
    if (xp >= 75 && currentLevel === 1) {
      setCurrentLevel(2);
      triggerGlitch();
    }
  }, [xp, currentLevel]);

  // Modified to remove the glitch effect when switching between login/signup
  const triggerGlitch = () => {
    // Only trigger glitch for level-ups and form submissions, not for login/signup toggle
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    triggerGlitch();
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setXp(100);
      setCurrentLevel(3);
    }, 1500);
  };

  const handleAuthProvider = (provider: AuthProviderProps['provider']) => {
    setIsLoading(true);
    triggerGlitch();
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setXp(100);
      setCurrentLevel(3);
    }, 1500);
  };

  return (
    <div className={`bg-blue-950 flex items-start justify-center pt-8 pb-4 px-4 overflow-hidden ${glitchEffect ? 'animate-pulse' : ''}`}>
      {/* Game-inspired container */}
      <div className={`relative w-full max-w-md rounded-lg border-4 border-pink-500 shadow-lg overflow-hidden z-10 bg-blue-900 ${glitchEffect ? 'animate-pulse' : ''}`}>
        {/* Header with game UI elements */}
        <div className="p-4 text-center relative bg-blue-950">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2 tracking-wide">
            {isSignUp ? 'NEW PLAYER' : 'PLAYER LOGIN'}
          </h2>
          <p className="text-cyan-400 mb-3">LEVEL {currentLevel} ACCESS</p>
          
          {/* XP progress bar */}
          <div className="w-full bg-gray-800 h-6 rounded-full mb-3 relative overflow-hidden border-2 border-cyan-800">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 ease-in-out" 
              style={{ width: `${xp}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-sm font-mono text-white z-10 font-bold tracking-wider">
                XP: {xp}/100
              </div>
            </div>
          </div>
          
          {/* Form status */}
          <div className="flex items-center justify-between px-2">
            <div className="text-xs font-mono text-green-400">SYSTEM.READY</div>
            <div className="text-xs font-mono text-green-400">{isLoading ? 'PROCESSING...' : 'AWAITING INPUT'}</div>
          </div>
        </div>
        
        {/* Main form section */}
        <div className="p-4 relative bg-blue-950">
          {/* Social auth options */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button 
              type="button"
              onClick={() => handleAuthProvider('google')}
              className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-3 rounded-md border-b-4 border-blue-600 hover:border-blue-500 transition-all duration-150 transform"
            >
              <div className="flex justify-center items-center">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </button>
            
            <button 
              type="button"
              onClick={() => handleAuthProvider('x')}
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded-md border-b-4 border-gray-600 hover:border-gray-500 transition-all duration-150 transform"
            >
              <div className="flex justify-center items-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </button>
            
            <button 
              type="button"
              onClick={() => handleAuthProvider('github')}
              className="bg-purple-800 hover:bg-purple-700 text-white py-2 px-3 rounded-md border-b-4 border-purple-600 hover:border-purple-500 transition-all duration-150 transform"
            >
              <div className="flex justify-center items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </button>
          </div>
          
          {/* Form divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-cyan-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-950 px-4 text-xs text-cyan-400 font-mono">OR MANUAL LOGIN</span>
            </div>
          </div>
          
          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-cyan-400 font-mono mb-1 block">EMAIL</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-blue-900 border-2 border-cyan-800 text-white px-4 py-2 rounded-md focus:border-pink-500 focus:outline-none placeholder-cyan-700"
                  placeholder="Enter your email"
                  required
                />
                <div className="absolute right-2 top-2 h-4 w-4">
                  {email && <div className="h-full w-full bg-green-500 rounded-full"></div>}
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm text-cyan-400 font-mono">PASSWORD</label>
                {!isSignUp && (
                  <a href="#" className="text-xs text-pink-400 hover:text-pink-300 transition-all duration-150">FORGOT?</a>
                )}
              </div>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-blue-900 border-2 border-cyan-800 text-white px-4 py-2 rounded-md focus:border-pink-500 focus:outline-none placeholder-cyan-700 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-2.5 text-cyan-500 hover:text-cyan-400 transition-all duration-150"
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
                <div className="absolute right-12 top-2 h-4 w-4">
                  {password && <div className="h-full w-full bg-green-500 rounded-full"></div>}
                </div>
              </div>
              {password && (
                <div className="mt-1">
                  <div className="text-xs text-cyan-500 font-mono">SECURITY LEVEL:</div>
                  <div className="w-full bg-gray-800 h-1 mt-1 rounded-full">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        password.length > 8 ? 'bg-green-500 w-full' : 
                        password.length > 5 ? 'bg-yellow-500 w-2/3' : 
                        'bg-red-500 w-1/3'
                      }`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 text-center text-white font-bold relative overflow-hidden transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-pink-500 bg-gradient-to-r from-pink-500 to-cyan-500"
              >
                <span className="relative z-10 tracking-wider text-lg">
                  {isLoading ? "PROCESSING..." : (isSignUp ? "CREATE ACCOUNT" : "LOGIN")}
                </span>
              </button>
            </div>
          </form>
          
          {/* Mode toggle */}
          <div className="mt-6 text-center text-sm text-cyan-400 font-mono">
            {isSignUp ? "ALREADY REGISTERED? " : "NEW USER? "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
              className="text-pink-500 hover:text-pink-400 font-bold transition-colors duration-200"
            >
              {isSignUp ? 'LOGIN' : 'SIGN UP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 