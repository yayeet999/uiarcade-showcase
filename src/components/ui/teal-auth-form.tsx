import React, { useState, useEffect } from 'react';
import { User, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const TealAuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formRotateClass, setFormRotateClass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const toggleForm = () => {
    // Add animation class
    setFormRotateClass('form-rotate-out');
    
    // Wait for animation to complete before changing form
    setTimeout(() => {
      setIsLogin(!isLogin);
      // Reset form
      setFormRotateClass('form-rotate-in');
      
      setTimeout(() => {
        setFormRotateClass('');
      }, 500);
    }, 400);
  };

  return (
    <div className="flex items-center justify-center w-full p-4 sm:p-6">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.4); }
          50% { box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.2); }
        }
        
        @keyframes socialIconPop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .social-btn-hover:hover svg {
          animation: socialIconPop 0.3s ease-out;
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes buttonHover {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        }
        
        @keyframes rotateOut {
          0% { transform: rotateY(0deg); opacity: 1; }
          100% { transform: rotateY(90deg); opacity: 0; }
        }
        
        @keyframes rotateIn {
          0% { transform: rotateY(-90deg); opacity: 0; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        
        .form-rotate-out {
          animation: rotateOut 0.4s ease-in-out forwards;
        }
        
        .form-rotate-in {
          animation: rotateIn 0.4s ease-in-out forwards;
        }
        
        .input-field {
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        
        .input-field:focus {
          border-color: #2dd4bf;
          box-shadow: 0 0 0 2px rgba(45, 212, 191, 0.2);
          outline: none;
        }
        
        .bg-gradient-animated {
          background-size: 200% 200%;
          animation: gradientFlow 10s ease infinite;
        }
        
        /* Shimmer animation for buttons */
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          background-position: -200% 0;
          transform: skewX(-30deg);
          animation: none;
          transition: background-position 0.3s ease;
        }
        
        .btn-shimmer:hover::after {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Left Side - Graphic */}
        <div className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 bg-gradient-animated p-4 lg:p-5 text-white flex flex-col lg:justify-center lg:w-2/5 relative overflow-hidden min-h-24 lg:min-h-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300 opacity-20 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 opacity-10 rounded-full -mb-16 -ml-16"></div>
          
          <div className="relative z-10 flex flex-col items-center lg:items-start justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center lg:text-left tracking-tight">
              Welcome
            </h1>
            <p className="text-sm text-white opacity-90 max-w-xs text-center lg:text-left">
              Sign in to your account
            </p>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
          <div className={`transition-all duration-300 ${formRotateClass}`}>
            <h2 className="text-3xl font-bold text-teal-500 mb-8">
              {isLogin ? 'LOGIN' : 'SIGN UP'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin ? (
                <div className="space-y-1">
                  <label className="text-sm text-gray-400 block" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field w-full py-3 px-4 border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-teal-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <label className="text-sm text-gray-400 block" htmlFor="username">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-field w-full py-3 px-4 border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-teal-400"
                      placeholder="yourusername"
                      required
                    />
                    <User 
                      size={16} 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-400"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-1">
                <label className="text-sm text-gray-400 block" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field w-full py-3 px-4 border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-teal-400"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active-btn-pulse relative overflow-hidden btn-shimmer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    Processing...
                  </span>
                ) : (
                  <span>{isLogin ? 'Login' : 'Create Account'}</span>
                )}
              </button>
              
              {/* Social login options */}
              <div className="relative mt-6 mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-400">or continue with</span>
                </div>
              </div>
              
              {/* Two column auth buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Google login button */}
                <div 
                  className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md group btn-shimmer cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7218182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </div>
                
                {/* Apple login button */}
                <div 
                  className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md group btn-shimmer cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6,13.8c0-3,2.5-4.5,2.6-4.6c-1.4-2.1-3.6-2.3-4.4-2.4c-1.9-0.2-3.6,1.1-4.6,1.1 c-0.9,0-2.4-1.1-4-1c-2,0-3.9,1.2-5,3c-2.1,3.7-0.5,9.1,1.5,12c1,1.5,2.2,3.1,3.8,3c1.5-0.1,2.1-1,3.9-1c1.8,0,2.4,1,4,1 c1.7,0,2.7-1.5,3.7-2.9c1.2-1.7,1.6-3.3,1.7-3.4C20.8,18.5,17.7,16.6,17.6,13.8z"/>
                    <path d="M14.1,4.2c0.8-1,1.4-2.4,1.2-3.8c-1.2,0-2.7,0.8-3.5,1.8c-0.8,0.9-1.5,2.3-1.3,3.7 C11.9,6,13.2,5.2,14.1,4.2z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Apple</span>
                </div>
              </div>
            </form>
            
            <div className="mt-8 flex justify-between items-center">
              <div
                className="text-teal-500 hover:text-teal-700 transition-colors flex items-center gap-1 font-medium text-sm cursor-pointer"
                onClick={toggleForm}
              >
                {isLogin ? 'Create an account' : 'Back to login'}
                <ArrowRight size={16} />
              </div>
              
              {isLogin && (
                <div>
                  <span className="text-gray-400 hover:text-teal-500 transition-colors text-sm cursor-pointer">
                    Forgot
                  </span>
                  <span className="text-gray-300 mx-1">•</span>
                  <span className="text-gray-400 hover:text-teal-500 transition-colors text-sm cursor-pointer">
                    Help
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TealAuthForm; 