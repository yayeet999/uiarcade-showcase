import React, { useState } from 'react';

export const IOSStyledAuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center p-2 w-full">
      <div className="form">
        <h2 className="text-center font-bold text-lg mb-4 text-black">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>
        
        <div className="flex-column w-full">
          <label className="text-sm">Email </label>
        </div>
        <div className="inputForm w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <input placeholder="Enter your Email" className="input text-sm text-black" type="email" />
        </div>
        
        <div className="flex-column w-full">
          <label className="text-sm">Password </label>
        </div>
        <div className="inputForm w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="-64 0 512 512">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input placeholder="Enter your Password" className="input text-sm text-black" type="password" />
        </div>
        
        {isLogin && (
          <div className="flex-row justify-end w-full">
            <span className="span text-sm">Forgot password?</span>
          </div>
        )}
        
        <button className="button-submit shimmer-button w-full">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
        
        <div className="text-center w-full">
          <p className="p text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="span" onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
          
          <p className="p line text-sm">Or With</p>
        </div>
        
        <div className="auth-buttons">
          <button className="btn google shimmer-button">
            <svg viewBox="0 0 512 512" width={16} height={16} version="1.1">
              <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" style={{fill: '#FBBB00'}} />
              <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{fill: '#518EF8'}} />
              <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{fill: '#28B446'}} />
              <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" style={{fill: '#F14336'}} />
            </svg>
            <span className="text-black text-sm">Google</span>
          </button>
          <button className="btn apple shimmer-button">
            <svg viewBox="0 0 22.773 22.773" width={16} height={16} version="1.1">
              <g>
                <g>
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                </g>
              </g>
            </svg>
            <span className="text-black text-sm">Apple</span>
          </button>
        </div>
      </div>

      <style>{`
        .form {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background-color: #ffffff;
          padding: 24px;
          width: 100%;
          max-width: 480px;
          border-radius: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        ::placeholder {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: #6b7280;
        }

        .flex-column > label {
          color: #1c1c1e;
          font-weight: 600;
          margin-bottom: 4px;
          display: block;
        }

        .inputForm {
          border: 1.5px solid #e2e2e7;
          border-radius: 10px;
          height: 42px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          transition: 0.2s ease-in-out;
          margin-bottom: 8px;
          background-color: #f8f8fa;
        }

        .input {
          margin-left: 10px;
          border-radius: 10px;
          border: none;
          width: 100%;
          height: 100%;
          background-color: transparent;
          color: #1c1c1e;
        }

        .input:focus {
          outline: none;
        }

        .inputForm:focus-within {
          border: 1.5px solid #5856d6;
          background-color: #ffffff;
        }

        .flex-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          justify-content: space-between;
        }

        .span {
          font-size: 14px;
          margin-left: 5px;
          color: #5856d6;
          font-weight: 500;
          cursor: pointer;
        }

        .button-submit {
          margin: 16px 0 8px 0;
          background-color: #5856d6;
          border: none;
          color: white;
          font-size: 14px;
          font-weight: 500;
          border-radius: 10px;
          height: 42px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .p {
          text-align: center;
          color: black;
          font-size: 14px;
          margin: 4px 0;
        }

        .p.line {
          position: relative;
        }

        .p.line:before, .p.line:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 35%;
          height: 1px;
          background-color: #e0e0e0;
        }

        .p.line:before {
          left: 0;
        }

        .p.line:after {
          right: 0;
        }

        .auth-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          width: 100%;
        }

        .btn {
          height: 42px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          gap: 8px;
          border: 1px solid #ededef;
          background-color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        /* Shimmer effect */
        .shimmer-button:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          transition: transform 0.5s ease-out;
          z-index: 1;
          opacity: 0;
        }

        .shimmer-button:hover:before {
          transform: translateX(100%) rotate(30deg);
          opacity: 1;
          transition: transform 0.7s ease-in-out, opacity 0.1s linear;
        }

        .button-submit:hover {
          background-color: #4a3df5;
          box-shadow: 0 5px 15px rgba(88, 86, 214, 0.3);
          transform: translateY(-2px);
        }

        .btn:hover {
          border: 1px solid #5856d6;
          box-shadow: 0 5px 15px rgba(88, 86, 214, 0.1);
          transform: translateY(-2px);
        }

        /* Responsive styles */
        @media (max-width: 500px) {
          .form {
            padding: 20px;
            max-width: 360px;
          }
          
          .auth-buttons {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 360px) {
          .form {
            padding: 16px;
            max-width: 320px;
          }

          .inputForm, .button-submit, .btn {
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default IOSStyledAuthForm; 