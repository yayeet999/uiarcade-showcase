import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Star } from 'lucide-react';

interface FeedbackCardProps {
  className?: string;
}

export const FeedbackCard = ({ className }: FeedbackCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showThanks, setShowThanks] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarClick = (rating: number) => {
    setCurrentRating(rating);
  };

  const handleSubmit = () => {
    setShowThanks(true);
    setTimeout(() => {
      setIsOpen(false);
      setShowThanks(false);
      // Reset form
      setCurrentRating(0);
      setHoverRating(0);
      setFeedback('');
    }, 2000);
  };

  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      {/* Main Card */}
      <div className="relative bg-white/75 backdrop-blur-xl rounded-3xl p-8 shadow-lg overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-emerald-400 via-blue-500 to-pink-500 rounded-3xl -z-10">
          <div className="absolute inset-0 bg-white/75 backdrop-blur-xl rounded-3xl" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Feedback</h2>
          
          {/* Star Rating */}
          <div className="flex justify-center gap-3 mb-6">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className="relative group"
                onMouseEnter={() => handleStarHover(rating)}
                onMouseLeave={() => handleStarHover(0)}
                onClick={() => handleStarClick(rating)}
              >
                <Star
                  size={32}
                  className={cn(
                    "transition-all duration-300 transform",
                    (hoverRating || currentRating) >= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200",
                    "hover:scale-110 hover:-translate-y-1"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Feedback Text Area */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Optional: share your thoughts..."
            className="w-full h-20 px-4 py-3 rounded-2xl bg-white/60 border-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700 placeholder-gray-400 shadow-inner transition-all duration-300"
          />

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Submit
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200 active:scale-95 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Thanks Card */}
      {showThanks && (
        <div className="absolute inset-0 bg-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thanks for your feedback!</h2>
          <p className="text-gray-600">We appreciate you taking the time.</p>
          <div className="text-4xl mt-4">😊</div>
        </div>
      )}
    </div>
  );
}; 