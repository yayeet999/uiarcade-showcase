import React, { useState } from 'react';

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
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
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
}; 