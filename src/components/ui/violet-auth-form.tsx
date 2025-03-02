import React, { useState } from 'react';

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
      // Reset inputs
      setEmail('');
      setPassword('');
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-bl from-teal-900 via-purple-900 to-black p-3 ${className || ''}`}
    >
      {/* Container */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-white/5 p-5
        shadow-xl backdrop-blur-sm border border-white/10
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            {isSignUp ? "Let's Get Started" : "Hello Again"}
          </h1>
          <p className="mt-1.5 text-sm text-gray-300">
            {isSignUp
              ? 'Join us for an unforgettable experience!'
              : 'Sign in to continue'}
          </p>
        </div>

        {/* Social sign in buttons */}
        <div className="mb-3 flex flex-col gap-2">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-600 
            bg-gray-800 py-2 px-4 text-white transition duration-300 hover:bg-gray-700 active:scale-95"
          >
            {/* Google icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.35 11.1H12v2.8h5.34c-.24 1.31-.93 2.41-1.98 3.14v2.6h3.2c1.87-1.72 2.94-4.26 2.94-7.26 0-.48-.04-.95-.15-1.38z" fill="#4285F4"/>
              <path d="M12 22c2.7 0 4.97-.9 6.63-2.4l-3.2-2.6c-.9.6-2.07.96-3.43.96-2.63 0-4.86-1.77-5.66-4.16H2.4v2.61C4.05 19 7.67 22 12 22z" fill="#34A853"/>
              <path d="M6.34 13.8a5.64 5.64 0 010-3.6V7.59H2.4a9.99 9.99 0 000 8.82l3.94-2.61z" fill="#FBBC05"/>
              <path d="M12 6.4c1.47 0 2.79.51 3.83 1.51l2.86-2.86C16.95 3.6 14.68 2.8 12 2.8c-4.33 0-7.95 3-9.6 7l3.95 2.62C7.14 8.17 9.37 6.4 12 6.4z" fill="#EA4335"/>
            </svg>
            <span className="font-medium">Continue with Google</span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-600 
            bg-gray-800 py-2 px-4 text-white transition duration-300 hover:bg-gray-700 active:scale-95"
          >
            {/* Apple icon */}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.366 1.586c.106.069.202.153.288.249.335.392.646.98.505 1.586-.199.84-.794 1.538-1.268 2.001-.462.454-1.155.962-1.895.883-.085-.408-.013-.867.193-1.264.209-.402.569-.818.965-1.125.352-.262.8-.505 1.212-.33z" />
              <path d="M19.265 8.18c-1.07-.199-2.264.221-3.087.221-.856 0-1.762-.206-2.794.223-1.023.429-2.06 1.44-2.785 2.633-1.183 1.944-.995 4.876.474 7.103.551.829 1.255 1.761 2.16 1.745.8-.015 1.127-.51 2.163-.51 1.046 0 1.323.51 2.162.495.899-.014 1.541-.879 2.093-1.706.403-.605.557-.91.836-1.58-2.183-.867-2.535-4.023-.372-5.325-.946-1.293-.182-2.98.24-3.502z" />
              <path d="M13.277 4.452c.676-.85 1.134-2.048.962-3.236-.933.061-2.056.63-2.72 1.448-.593.75-1.11 1.947-.95 3.093.977.02 2.012-.551 2.708-1.305z" />
            </svg>
            <span className="font-medium">Continue with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-3 flex items-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative mx-auto px-2 text-sm text-gray-300">or use your email</div>
        </div>

        {/* Email/Password form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-white/10 py-2 px-4 
                text-white placeholder-gray-400 focus:border-teal-300 focus:outline-none 
                focus:ring-2 focus:ring-teal-300"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">Password</label>
              {!isSignUp && (
                <button
                  type="button"
                  className="text-xs text-teal-300 hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/10 py-2 px-4 pr-10 
                  text-white placeholder-gray-400 focus:border-teal-300 focus:outline-none 
                  focus:ring-2 focus:ring-teal-300"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {passwordVisible ? (
                  // Hide password (eye crossed)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.094 2.105a1 1 0 10-1.414 1.414l1.09 1.09A11.076 11.076 0 000 10c1.273 4.027 5.073 7 10 7 1.44 0 2.837-.272 4.065-.766l2.841 2.84a1 1 0 001.414-1.414L3.094 2.105zM9.349 10.628l1.503 1.503A4 4 0 019.6 9.439l-1.503 1.189z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  // Show password (standard eye)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.458 10C3.732 5.943 7.522 3 12 3s8.268 2.943 9.542 7a9.805 9.805 0 01-1.47 2.777 1 1 0 01-1.556-1.222A7.832 7.832 0 0012 5c-3.073 0-5.745 1.664-7.043 4.202A7.782 7.782 0 003 10c0 .53.065 1.046.187 1.545a1 1 0 11-1.95.454A9.964 9.964 0 012.458 10z" />
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full rounded-lg bg-teal-600 py-2 px-4 font-semibold text-white 
              transition-all duration-300 hover:bg-teal-500 active:translate-y-[1px] disabled:opacity-70"
          >
            {isLoading ? (
              <svg className="mx-auto h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <span className="tracking-wide">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </span>
            )}
          </button>
        </form>

        {/* Toggle sign up / sign in */}
        <p className="mt-4 text-center text-sm text-gray-300">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button
                onClick={toggleMode}
                className="text-teal-300 hover:underline"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account yet?{' '}
              <button
                onClick={toggleMode}
                className="text-teal-300 hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}; 