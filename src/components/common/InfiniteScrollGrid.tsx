import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollItemProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollItem = ({ children, className }: ScrollItemProps) => (
  <div className={cn("flex-shrink-0 px-2", className)}>
    {children}
  </div>
);

interface InfiniteScrollRowProps {
  children: React.ReactNode[];
  direction: "left" | "right";
  speed?: number;
  className?: string;
}

const InfiniteScrollRow = ({ 
  children, 
  direction, 
  speed = 25, 
  className 
}: InfiniteScrollRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [duplicateCount, setDuplicateCount] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  
  // Calculate how many duplicates we need to ensure smooth infinite scrolling
  useEffect(() => {
    if (!contentRef.current || !scrollRef.current) return;
    
    const calculateDuplicates = () => {
      const containerWidth = scrollRef.current?.clientWidth || 0;
      const contentWidth = contentRef.current?.scrollWidth || children.length;
      
      // We need to divide by the number of children to get the width of a single set
      const singleSetWidth = contentWidth / duplicateCount;
      setContentWidth(singleSetWidth);
      
      // Calculate how many duplicates we need to fill the container at least 3 times
      // This ensures smooth infinite scrolling
      const needed = Math.ceil((containerWidth * 3) / singleSetWidth);
      setDuplicateCount(Math.max(3, needed));
    };
    
    // Initial calculation
    calculateDuplicates();
    
    // Recalculate on resize
    const resizeObserver = new ResizeObserver(calculateDuplicates);
    resizeObserver.observe(scrollRef.current);
    
    return () => {
      if (scrollRef.current) resizeObserver.unobserve(scrollRef.current);
      resizeObserver.disconnect();
    };
  }, [children.length]);
  
  // Create duplicates of the content for seamless scrolling
  const duplicatedChildren = Array(duplicateCount)
    .fill(null)
    .flatMap(() => children);
  
  return (
    <div 
      ref={scrollRef}
      className={cn(
        "flex overflow-hidden relative", 
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
      
      <motion.div
        ref={contentRef}
        className="flex"
        animate={{
          x: direction === "left" 
            ? [0, -contentWidth] 
            : [-contentWidth, 0]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: contentWidth / (speed * 8),
          ease: "linear",
          paused: isPaused
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <ScrollItem key={index}>{child}</ScrollItem>
        ))}
      </motion.div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

// New PacmanAnimation component
const PacmanAnimation = ({ direction = "left" }) => {
  return (
    <div className="relative h-12 w-full overflow-hidden mx-auto">
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pacman-chomp1 {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(45deg); }
            100% { transform: rotate(0deg); }
          }
          
          @keyframes pacman-chomp2 {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-45deg); }
            100% { transform: rotate(0deg); }
          }
          
          @keyframes pacman-move-left {
            0% { left: -50px; }
            100% { left: calc(100% + 50px); }
          }
          
          @keyframes pacman-move-right {
            0% { right: -50px; }
            100% { right: calc(100% + 50px); }
          }
          
          /* Dot animations for left movement */
          @keyframes pacman-dot-left-0 { 0% { opacity: 1; } 8% { opacity: 1; } 9% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-1 { 0% { opacity: 1; } 18% { opacity: 1; } 19% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-2 { 0% { opacity: 1; } 28% { opacity: 1; } 29% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-3 { 0% { opacity: 1; } 38% { opacity: 1; } 39% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-4 { 0% { opacity: 1; } 48% { opacity: 1; } 49% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-5 { 0% { opacity: 1; } 58% { opacity: 1; } 59% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-6 { 0% { opacity: 1; } 68% { opacity: 1; } 69% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-7 { 0% { opacity: 1; } 78% { opacity: 1; } 79% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-8 { 0% { opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-left-9 { 0% { opacity: 1; } 88% { opacity: 1; } 89% { opacity: 0; } 99% { opacity: 0; } 100% { opacity: 1; } }
          
          /* Dot animations for right movement */
          @keyframes pacman-dot-right-0 { 0% { opacity: 1; } 8% { opacity: 1; } 9% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-1 { 0% { opacity: 1; } 18% { opacity: 1; } 19% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-2 { 0% { opacity: 1; } 28% { opacity: 1; } 29% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-3 { 0% { opacity: 1; } 38% { opacity: 1; } 39% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-4 { 0% { opacity: 1; } 48% { opacity: 1; } 49% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-5 { 0% { opacity: 1; } 58% { opacity: 1; } 59% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-6 { 0% { opacity: 1; } 68% { opacity: 1; } 69% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-7 { 0% { opacity: 1; } 78% { opacity: 1; } 79% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-8 { 0% { opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90% { opacity: 0; } 91% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes pacman-dot-right-9 { 0% { opacity: 1; } 88% { opacity: 1; } 89% { opacity: 0; } 99% { opacity: 0; } 100% { opacity: 1; } }
        `
      }} />
      
      {/* Blue Dots */}
      <div className="flex justify-around items-center absolute inset-0">
        {Array(10).fill(null).map((_, index) => {
          const actualIndex = direction === "left" ? index : 9 - index;
          return (
            <div 
              key={`dot-${index}`}
              className="w-3 h-3 rounded-full bg-blue-500"
              style={{ 
                animation: `pacman-dot-${direction}-${actualIndex} 7s linear 0s infinite normal`,
                position: "relative",
                margin: "0 10px",
              }}
            />
          );
        })}
      </div>
      
      {/* Pacman */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: `translateY(-50%) ${direction === "right" ? "rotateY(180deg)" : ""}`,
          left: direction === "left" ? "-50px" : "auto",
          right: direction === "right" ? "-50px" : "auto",
          width: "0",
          height: "0",
          border: "20px solid #FDD835",
          borderRadius: "50%",
          borderRightColor: "transparent",
          animation: `pacman-move-${direction} 7s linear 0s infinite normal forwards`,
          zIndex: 1
        }}
      >
        {/* Upper mouth */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            width: "0",
            height: "0",
            border: "20px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation: "pacman-chomp1 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
        {/* Lower mouth */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            width: "0",
            height: "0",
            border: "20px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation: "pacman-chomp2 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
      </div>
    </div>
  );
};

// Component Card for the scrolling items
interface ComponentCardProps {
  title: string;
  category: string;
}

const ComponentCard = ({ title, category }: ComponentCardProps) => (
  <div className="w-[280px] h-[160px] bg-card rounded-lg border border-border overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
    <div className="h-full p-6 flex flex-col justify-between transition-all duration-300 group-hover:bg-accent/50">
      <div className="text-xs font-medium text-primary uppercase tracking-wider">{category}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span className="group-hover:text-foreground transition-colors">View Component</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface InfiniteScrollGridProps {
  className?: string;
}

const InfiniteScrollGrid = ({ className }: InfiniteScrollGridProps) => {
  // First row items (left to right)
  const row1Items = [
    <ComponentCard key="card1-1" title="Modern Auth Form" category="Forms" />,
    <ComponentCard key="card1-2" title="Animated Button" category="Buttons" />,
    <ComponentCard key="card1-3" title="Payment Card" category="Cards" />,
    <ComponentCard key="card1-4" title="Social Login" category="Auth" />,
    <ComponentCard key="card1-5" title="Notification" category="Feedback" />,
    <ComponentCard key="card1-6" title="Progress Bar" category="Indicators" />,
    <ComponentCard key="card1-7" title="Data Table" category="Tables" />,
    <ComponentCard key="card1-8" title="Modal Dialog" category="Overlays" />,
  ];
  
  // Second row items (right to left)
  const row2Items = [
    <ComponentCard key="card2-1" title="Toggle Switch" category="Inputs" />,
    <ComponentCard key="card2-2" title="Dropdown Menu" category="Navigation" />,
    <ComponentCard key="card2-3" title="Search Input" category="Inputs" />,
    <ComponentCard key="card2-4" title="Profile Card" category="Cards" />,
    <ComponentCard key="card2-5" title="Calendar" category="Date & Time" />,
    <ComponentCard key="card2-6" title="Tooltip" category="Overlays" />,
    <ComponentCard key="card2-7" title="Accordion" category="Disclosure" />,
    <ComponentCard key="card2-8" title="Tabs" category="Navigation" />,
  ];
  
  // Third row items (left to right)
  const row3Items = [
    <ComponentCard key="card3-1" title="Slider" category="Inputs" />,
    <ComponentCard key="card3-2" title="Rating" category="Feedback" />,
    <ComponentCard key="card3-3" title="Avatar" category="Data Display" />,
    <ComponentCard key="card3-4" title="Timeline" category="Data Display" />,
    <ComponentCard key="card3-5" title="Stepper" category="Navigation" />,
    <ComponentCard key="card3-6" title="File Upload" category="Inputs" />,
    <ComponentCard key="card3-7" title="Chart" category="Data Visualization" />,
    <ComponentCard key="card3-8" title="Carousel" category="Media" />,
  ];
  
  return (
    <div className={cn("pt-0 pb-8 overflow-hidden", className)}>
      <div className="space-y-4">
        {/* First row */}
        <InfiniteScrollRow 
          direction="left" 
          speed={6}
          className="h-[180px]"
        >
          {row1Items}
        </InfiniteScrollRow>
        
        {/* Pacman left-to-right */}
        <div>
          <PacmanAnimation direction="left" />
        </div>
        
        {/* Second row */}
        <InfiniteScrollRow 
          direction="right" 
          speed={6}
          className="h-[180px]"
        >
          {row2Items}
        </InfiniteScrollRow>
        
        {/* Pacman right-to-left */}
        <div>
          <PacmanAnimation direction="right" />
        </div>
        
        {/* Third row */}
        <InfiniteScrollRow 
          direction="left" 
          speed={6}
          className="h-[180px]"
        >
          {row3Items}
        </InfiniteScrollRow>
      </div>
    </div>
  );
};

export default InfiniteScrollGrid; 