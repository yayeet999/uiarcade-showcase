
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComponentCardProps {
  component: Component;
  index: number;
  layout?: string;
  showDescription?: boolean;
}

export const ComponentCard = ({ component, index, layout = "grid" }: ComponentCardProps) => {
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

  // Render a grid layout card (simplified)
  return (
    <motion.div variants={item}>
      <Link to={`/components/${component.name.toLowerCase()}`} className="block h-full">
        <Card className="h-full transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle>{component.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Component Preview
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
