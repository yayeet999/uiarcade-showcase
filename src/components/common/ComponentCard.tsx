
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ComponentCardProps {
  component: Component;
  index: number;
  layout?: string;
  showDescription?: boolean;
}

export const ComponentCard = ({ component, index, layout = "grid" }: ComponentCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/components/${component.id}`);
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

  return (
    <motion.div variants={item}>
      <Card 
        className="h-full transition-all duration-300 hover:shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <CardHeader>
          <CardTitle>{component.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Component Preview */}
            <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Component Preview
            </div>
            
            {/* Overlay with "View Code" on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
              <span className="text-white font-medium flex items-center gap-2">
                View Code <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
