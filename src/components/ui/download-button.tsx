import React, { useState, useEffect } from 'react';

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handleClick = () => {
    // Don't allow multiple clicks
    if (isDownloading || isComplete) {
      return;
    }
    
    // Start downloading animation
    setIsDownloading(true);
    
    // After the progress animation completes, show completion
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Reset after animation completes
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    }, 3000); // Should match the progress animation duration
  };
  
  return (
    <div className="button-container">
      <button 
        className={`download-button ${isDownloading ? 'downloading' : ''} ${isComplete ? 'complete' : ''}`}
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

export default DownloadButton; 