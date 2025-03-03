import React, { useState } from 'react';

export const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (emailValue: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <div className="icon-circle">
            <svg
              viewBox="0 0 512 512"
              width="20"
              height="20"
              aria-hidden="true"
              fill="#22C55E"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-0.4 9.7 4.6v204.1c0 26.5-21.5 48-48 48H48c-26.5 
              0-48-21.5-48-48V195.4c0-5 5.7-7.7 9.7-4.6c22.4 17.5 52.1 40.6 154.1 
              113.2c21.1 15.4 56.7 47.8 92.2 47.7c35.7 0.3 72.2-32.8 92.3-47.7 
              c102-72.6 131.7-95.7 154.1-113.2zM256 320c23.2 0.4 56.8-29.2 73.4-41 
              c132.6-94.3 142.2-102.7 173.4-126.2c5.8-4.3 9.2-11.1 9.2-18.4c0-13-10.5-23.6-23.6-23.6
              H23.6C10.5 110.8 0 121.4 0 134.4c0 7.3 3.4 14 9.2 18.4c31.2 23.4 40.8 
              31.8 173.4 126.2c16.6 11.9 50.1 41.3 73.4 41z"/>
            </svg>
          </div>
          <h2>Subscribe to Our Newsletter</h2>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g., name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error-text">{error}</p>}

            <button type="submit" disabled={isSubmitting}>
              <div className="shimmer" />
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  <span className="button-text"> Subscribing...</span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 512 512" width="36" height="36" fill="#22C55E">
                <path d="M256 48C141.125 48 48 141.133 48 256s93.125 208 208 
                208 208-93.125 208-208S370.875 48 256 48zm114.7 150.1L247.6 
                321.2c-3.6 3.6-8.5 5.8-13.6 5.8s-10-2.2-13.6-5.8l-59.3-59.4c-7.8-7.8-7.8-20.5 
                0-28.3 7.8-7.8 20.5-7.8 28.3 0l45.7 45.7L342.4 170c7.8-7.8 20.5-7.8 
                28.3 0 7.8 7.8 7.8 20.5-.0 28.1z"/>
              </svg>
            </div>
            <h3>Thank you!</h3>
            <p>You'll receive our updates at <strong>{email}</strong></p>
          </div>
        )}

        <style jsx>{`
          .newsletter-container {
            max-width: 24rem;
            margin: 0 auto;
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            padding: 1.5rem;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          }
          .newsletter-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
          }
          .newsletter-header h2 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
          }
          .icon-circle {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background: #bbf7d0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.75rem;
          }

          .newsletter-form {
            display: flex;
            flex-direction: column;
          }
          .newsletter-form label {
            font-size: 0.875rem;
            color: #4b5563;
            margin-bottom: 0.25rem;
            font-weight: 500;
          }
          .newsletter-form input {
            padding: 0.75rem;
            font-size: 0.9rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            outline: none;
            transition: all 0.2s;
            background-color: #fff;
          }
          .newsletter-form input:focus {
            border-color: #22c55e;
            box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
          }
          .error-text {
            margin-top: 0.25rem;
            color: #dc2626;
            font-size: 0.8rem;
          }

          .newsletter-form button {
            position: relative;
            overflow: hidden;
            background: #22c55e;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            padding: 0.75rem;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s;
          }
          .newsletter-form button:hover:not(:disabled) {
            transform: translateY(-1px);
            background: #16a34a;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
          }
          .newsletter-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .shimmer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.4) 50%,
              rgba(255,255,255,0) 100%
            );
            background-size: 200% 100%;
            animation: shimmerAnimation 2s infinite;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .newsletter-form button:hover .shimmer {
            opacity: 1;
          }
          @keyframes shimmerAnimation {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          .spinner {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 0.5rem;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top: 2px solid rgba(255,255,255,0.4);
            animation: spin 0.8s linear infinite;
            vertical-align: -4px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .button-text {
            vertical-align: middle;
          }

          .success-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem;
          }
          .success-message h3 {
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
            color: #1a1a1a;
            font-weight: 600;
          }
          .success-message p {
            font-size: 0.9rem;
            color: #4b5563;
          }
          .success-icon {
            width: 4rem;
            height: 4rem;
            background: #bbf7d0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            animation: bounce 1.5s ease infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(0); }
          }

          @media (max-width: 640px) {
            .newsletter-container {
              max-width: 100%;
              margin: 0;
              border-radius: 0.75rem;
            }
            .newsletter-header h2 {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default NewsletterSubscribe; 