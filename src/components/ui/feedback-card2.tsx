import React, { useState } from 'react';

export const FeedbackCard2: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleStarHover = (starValue: number) => {
    setHoveredRating(starValue);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
    if (error) setError('');
  };

  const handleSubmit = () => {
    // Validation
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Close after showing success
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="relative max-w-md w-full mx-auto">
      <div 
        className="relative bg-white rounded-xl shadow-lg w-full p-8 transition-all duration-300 ease-in-out transform"
        style={{
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}
      >
        {/* Close button */}
        <button 
          onClick={handleClose} 
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {submitted ? (
          <div className="text-center py-12 transform transition-all duration-500 ease-out">
            <div className="mb-4 text-green-500 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-black">Thank you!</h2>
            <p className="text-gray-800">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">We appreciate your feedback.</h2>
            <p className="text-gray-800 mb-6">
              We are always looking for ways to improve your experience.
              <br />
              Please take a moment to evaluate and tell us what you think.
            </p>
            
            {/* Star rating */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="mx-2 focus:outline-none transition-all duration-200"
                  style={{
                    transform: star <= hoveredRating ? 'scale(1.2)' : 'scale(1)',
                  }}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={() => handleStarHover(0)}
                  onClick={() => handleStarClick(star)}
                >
                  <svg
                    className="w-8 h-8 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill={star <= (hoveredRating || rating) ? "#FFD700" : "none"}
                    stroke={star <= (hoveredRating || rating) ? "#FFD700" : "black"}
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
            
            {/* Error message */}
            {error && (
              <div className="text-red-600 mb-2 text-sm animate-bounce font-medium">
                {error}
              </div>
            )}
            
            {/* Feedback text area */}
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black"
                rows={4}
                placeholder="What can we do to improve your experience?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            
            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden"
              style={{
                transform: isSubmitting ? 'scale(0.98)' : '',
                boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.boxShadow = '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)';
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit My Feedback"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackCard2; 