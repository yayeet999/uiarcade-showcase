import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface NavyAuthFormProps {
  className?: string;
}

export const NavyAuthForm = ({ className }: NavyAuthFormProps): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Show animation
    setTimeout(() => {
      setFormSubmitted(true);
      
      // Reset form after animation completes
      setTimeout(() => {
        setIsLoading(false);
        setFormSubmitted(false);
        setEmail('');
        setPassword('');
      }, 1500);
    }, 700);
  };

  return (
    <div className={`relative min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-black transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'} ${className || ''}`}>
      <div className="relative w-full max-w-md mx-auto p-6">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                  placeholder="Email address"
                  required
                />
                <div className={`absolute inset-0 rounded-lg bg-blue-500/20 transition-opacity duration-200 pointer-events-none ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 pr-10"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className={`absolute inset-0 rounded-lg bg-blue-500/20 transition-opacity duration-200 pointer-events-none ${focusedField === 'password' ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-200 ease-out transform ${isLoading ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600`} />
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  isSignUp ? 'Create Account' : 'Sign In'
                )}
              </span>
            </button>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <span className="text-blue-500 hover:text-blue-400">
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 