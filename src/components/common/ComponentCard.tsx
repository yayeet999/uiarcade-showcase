
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSubmitButton } from "@/components/ui/animated-submit-button";

interface ComponentCardProps {
  component: Component;
  index: number;
  layout?: string;
  showDescription?: boolean;
  categoryId?: string;
}

export const ComponentCard = ({ component, index, layout = "grid", categoryId = "all" }: ComponentCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (categoryId && categoryId !== "all") {
      navigate(`/components/${categoryId}/${component.id}`);
    } else {
      navigate(`/components/${component.id}`);
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.05 
      }
    }
  };

  // This would be where we'd render the actual component
  // For demo purposes, this is a placeholder
  const ComponentPreview = () => (
    <div className="flex items-center justify-center w-full h-full">
      {component.name === "Button" && (
        <Button>Sample Button</Button>
      )}
      {component.name === "Card" && (
        <div className="w-full max-w-[200px] h-[80px] bg-background border rounded-md p-2 text-xs">
          Sample Card
        </div>
      )}
      {component.name === "Animated Submit Button" && (
        <AnimatedSubmitButton>Submit</AnimatedSubmitButton>
      )}
      {component.name !== "Button" && component.name !== "Card" && component.name !== "Animated Submit Button" && (
        <div className="text-sm text-muted-foreground">
          {component.name} Preview
        </div>
      )}
    </div>
  );

  return (
    <motion.div variants={item}>
      <Card 
        className="h-full transition-all duration-300 hover:shadow-md cursor-pointer relative"
        onClick={handleClick}
      >
        <CardHeader>
          <CardTitle>{component.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Actual Component Preview */}
            <div className="h-32 bg-muted rounded-md flex items-center justify-center">
              <ComponentPreview />
            </div>
            
            {/* View Code button moved to bottom right */}
            <div className="absolute bottom-2 right-2">
              <Button 
                variant="secondary" 
                size="sm" 
                className="text-xs gap-1 opacity-70 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  if (categoryId && categoryId !== "all") {
                    navigate(`/components/${categoryId}/${component.id}`);
                  } else {
                    navigate(`/components/${component.id}`);
                  }
                }}
              >
                View Code <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
