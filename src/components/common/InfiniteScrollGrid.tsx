import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollItemProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollItem = ({ children, className }: ScrollItemProps) => (
  <div className={cn("flex-shrink-0 px-1", className)}>
    {children}
  </div>
);

const StaticGrid = ({
  children,
  className,
  offset = 0,
}: {
  children: React.ReactNode[];
  className?: string;
  offset?: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-4 overflow-hidden relative",
        className
      )}
    >
      {offset > 0 && (
        <div style={{ width: `${offset}px` }} className="hidden md:block" />
      )}
      {children.map((child, index) => (
        <div key={index} className="flex-shrink-0 px-1">
          {child}
        </div>
      ))}
    </div>
  );
};

// Pacman alone (no ghosts) in one component so it lines up exactly.
// We reuse the same keyframes but remove the ghosts behind Pacman.

const PacmanWithGhosts = ({ direction = "left" }) => {
  // Define ghost colors
  const ghostColors = [
    "#FF0000", // Blinky (red)
    "#FFB8FF", // Pinky (pink)
    "#00FFFF", // Inky (cyan)
    "#FFB852", // Clyde (orange)
  ];

  return (
    <div className="relative h-6 w-full overflow-hidden mx-auto">
      {/* Keyframes for both Pacman and Ghosts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `\n          @keyframes pacman-chomp1 {\n            0% { transform: rotate(0deg); }\n            50% { transform: rotate(45deg); }\n            100% { transform: rotate(0deg); }\n          }\n          \n          @keyframes pacman-chomp2 {\n            0% { transform: rotate(0deg); }\n            50% { transform: rotate(-45deg); }\n            100% { transform: rotate(0deg); }\n          }\n          \n          @keyframes pacman-move-left {\n            0% { left: -20px; }\n            100% { left: calc(100% + 20px); }\n          }\n          \n          @keyframes pacman-move-right {\n            0% { right: -20px; }\n            100% { right: calc(100% + 20px); }\n          }\n        `,
        }}
      />
      {/* Pacman only */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: `translateY(-50%) ${
            direction === "right" ? "rotateY(180deg)" : ""}
          `,
          left: direction === "left" ? "-20px" : "auto",
          right: direction === "right" ? "-20px" : "auto",
          width: "0",
          height: "0",
          border: "10px solid #FDD835",
          borderRadius: "50%",
          borderRightColor: "transparent",
          animation: `pacman-move-${direction} 7s linear 0s infinite normal forwards`,
          zIndex: 2,
        }}
      >
        {/* Upper mouth */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "0",
            height: "0",
            border: "10px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation:
              "pacman-chomp1 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
        {/* Lower mouth */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "0",
            height: "0",
            border: "10px solid #FDD835",
            borderRadius: "50%",
            borderRightColor: "transparent",
            animation:
              "pacman-chomp2 0.25s ease-in-out 0s infinite normal forwards",
          }}
        />
      </div>
    </div>
  );
};

// New component just for ghosts moving from right to left
const GhostsOnly = () => {
  // Define ghost colors
  const ghostColors = [
    "#FF0000", // Blinky (red)
    "#FFB8FF", // Pinky (pink)
    "#00FFFF", // Inky (cyan)
    "#FFB852", // Clyde (orange)
  ];

  return (
    <div className="relative h-6 w-full overflow-hidden mx-auto">
      {/* Keyframes are the same as in PacmanWithGhosts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `\n          @keyframes ghost-move-right {\n            0% { right: -20px; }\n            100% { right: calc(100% + 20px); }\n          }\n        `,
        }}
      />

      {/* Only ghosts in this container, moving right to left */}
      {ghostColors.map((color, i) => {
        const offsetPx = i * 20; // space ghosts out
        return (
          <div
            key={color}
            style={{
              position: "absolute",
              top: "50%",
              right: `-${offsetPx}px`,
              left: "auto",
              width: "0",
              height: "0",
              animation: `ghost-move-right 7s linear 0s infinite normal forwards`,
              animationDelay: `${0.15 * i}s`,
              zIndex: 1,
              transform: "translateY(-50%)",
            }}
          >
            {/* Scale ghost so it matches Pacman's ~20px diameter */}
            <div style={{ transform: "scale(0.5) translate(-50%, -50%)" }}>
              <svg width="40" height="40" viewBox="0 0 100 100">
                {/* Ghost body */}
                <path
                  d="M 10,50 A 40,40 0 1,1 90,50 L 90,100 L 75,85 L 60,100 L 45,85 L 30,100 L 15,85 L 10,100 Z"
                  fill={color}
                />
                {/* Eyes */}
                <circle cx="35" cy="40" r="8" fill="white" />
                <circle cx="65" cy="40" r="8" fill="white" />
                {/* Pupils */}
                <circle cx="37" cy="42" r="4" fill="blue" />
                <circle cx="67" cy="42" r="4" fill="blue" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Component Card for the scrolling items
interface ComponentCardProps {
  title: string;
  category: string;
}

const ComponentCard = ({ title, category }: ComponentCardProps) => (
  <div className="w-[165px] sm:w-[185px] md:w-[210px] lg:w-[230px] h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px] bg-card rounded-lg border border-border overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
    <div className="h-full p-3 md:p-4 flex flex-col justify-between transition-all duration-300 group-hover:bg-accent/50">
      <div className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
        {category}
      </div>
      <div>
        <h3 className="text-sm md:text-base font-semibold mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mr-1 md:mr-2"></span>
            <span className="group-hover:text-foreground transition-colors">
              View Component
            </span>
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
  // First row items (6 cards)
  const row1Items = [
    <ComponentCard key="card1-1" title="Modern Auth Form" category="Forms" />,
    <ComponentCard key="card1-2" title="Animated Button" category="Buttons" />,
    <ComponentCard key="card1-3" title="Payment Card" category="Cards" />,
    <ComponentCard key="card1-4" title="Social Login" category="Auth" />,
    <ComponentCard key="card1-5" title="Notification" category="Feedback" />,
    <ComponentCard key="card1-6" title="Progress Bar" category="Indicators" />,
  ];

  // Second row items (6 cards)
  const row2Items = [
    <ComponentCard key="card2-1" title="Toggle Switch" category="Inputs" />,
    <ComponentCard
      key="card2-2"
      title="Dropdown Menu"
      category="Navigation"
    />,
    <ComponentCard key="card2-3" title="Search Input" category="Inputs" />,
    <ComponentCard key="card2-4" title="Profile Card" category="Cards" />,
    <ComponentCard key="card2-5" title="Calendar" category="Date & Time" />,
    <ComponentCard key="card2-6" title="Tooltip" category="Overlays" />,
  ];

  // Third row items (6 cards)
  const row3Items = [
    <ComponentCard key="card3-1" title="Slider" category="Inputs" />,
    <ComponentCard key="card3-2" title="Rating" category="Feedback" />,
    <ComponentCard key="card3-3" title="Avatar" category="Data Display" />,
    <ComponentCard key="card3-4" title="Timeline" category="Data Display" />,
    <ComponentCard key="card3-5" title="Stepper" category="Navigation" />,
    <ComponentCard key="card3-6" title="File Upload" category="Inputs" />,
  ];

  return (
    <div className={cn("pt-0 pb-8 overflow-hidden", className)}>
      <div className="space-y-0">
        {/* First row */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={0}>
          {row1Items}
        </StaticGrid>

        {/* Pacman alone in one container, left-to-right */}
        <div>
          <PacmanWithGhosts direction="left" />
        </div>

        {/* Second row - with offset to stagger alignment */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={50}>
          {row2Items}
        </StaticGrid>

        {/* Ghosts only between second and third rows - moving right to left */}
        <div>
          <GhostsOnly />
        </div>

        {/* Third row - with different offset */}
        <StaticGrid className="h-[125px] sm:h-[140px] md:h-[155px] lg:h-[170px]" offset={25}>
          {row3Items}
        </StaticGrid>
      </div>
    </div>
  );
};

export default InfiniteScrollGrid; 
