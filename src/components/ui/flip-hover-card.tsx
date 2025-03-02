import React from 'react';

export const FlipHoverCard = () => {
  return (
    <div className="flip-card w-72 h-[310px]">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu shadow-lg rounded-2xl" 
           style={{ transformStyle: "preserve-3d" }}>
        
        {/* Front of card */}
        <div className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
             style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H4M12 3V4M20 12H21M12 20V21M5.63605 5.63605L6.3432 6.3432M18.364 5.63605L17.6568 6.3432M18.364 18.364L17.6568 17.6568M5.63605 18.364L6.3432 17.6568" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-2xl font-bold tracking-wide mb-2">EXPLORE</p>
          <p className="text-sm opacity-80">Hover to discover</p>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
             style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="max-w-[85%] text-center">
            <p className="text-2xl font-bold tracking-wide mb-4">DISCOVER</p>
            <p className="text-base leading-relaxed mb-6">
              Find new opportunities and connections in a digital world of endless possibilities.
            </p>
            <button className="bg-white text-indigo-600 font-semibold text-sm py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}; 