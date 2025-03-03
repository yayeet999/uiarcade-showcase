import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const MinimalAuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formActive, setFormActive] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormActive(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  const toggleAuthMode = () => {
    setFormActive(false);
    
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setEmail('');
      setPassword('');
      
      setTimeout(() => {
        setFormActive(true);
      }, 100);
    }, 400);
  };
  
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div 
        className={`relative w-full max-w-md overflow-hidden rounded-2xl bg-white transition-all duration-500 ${
          formActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="p-8">
          <div 
            className={`transition-all duration-500 ${
              formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: formActive ? '200ms' : '0ms'
            }}
          >
            <h2 className="mb-8 text-2xl font-medium text-gray-900">
              {isSignUp ? 'Create account' : 'Sign in'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div 
              className={`group transition-all duration-500 ${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: formActive ? '300ms' : '0ms'
              }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-gray-900 transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200 bg-transparent pl-10 pr-4 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div 
              className={`group transition-all duration-500 ${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: formActive ? '400ms' : '0ms'
              }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-gray-900 transition-colors duration-200" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-200 bg-transparent pl-10 pr-10 py-2.5 text-gray-900 transition-colors duration-200 focus:border-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-70 ${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: formActive ? '500ms' : '0ms'
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </>
                ) : (
                  <>{isSignUp ? 'Create account' : 'Sign in'}</>
                )}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-900/0 via-white/20 to-gray-900/0 opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"></div>
            </button>

            <div 
              className={`flex items-center justify-between text-sm transition-all duration-500 ${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: formActive ? '600ms' : '0ms'
              }}
            >
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-gray-600 hover:text-gray-900 inline-flex items-center"
              >
                {isSignUp ? 'Already have an account?' : 'Need an account?'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
              
              {!isSignUp && (
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Forgot password?
                </button>
              )}
            </div>

            {/* Social Auth Buttons */}
            <div 
              className={`mt-6 grid grid-cols-2 gap-4 transition-all duration-500 ${
                formActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: formActive ? '700ms' : '0ms'
              }}
            >
              {/* Google Button */}
              <button
                type="button"
                className="group relative overflow-hidden flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 transition-all duration-300 ease-out hover:border-gray-300 hover:scale-105 hover:shadow-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/40 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"></div>
              </button>

              {/* Apple Button */}
              <button
                type="button"
                className="group relative overflow-hidden flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 transition-all duration-300 ease-out hover:border-gray-300 hover:scale-105 hover:shadow-sm"
              >
                <svg className="h-5 w-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/40 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MinimalAuthForm; 