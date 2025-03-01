
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ComponentCardProps {
  component: Component;
  index: number;
}

export const ComponentCard = ({ component, index }: ComponentCardProps) => {
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
      <Link to={`/components/${component.name.toLowerCase()}`} className="block h-full">
        <Card className="h-full transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{component.name}</CardTitle>
              {component.status && (
                <Badge variant={component.status === 'stable' ? 'default' : (component.status === 'beta' ? 'secondary' : 'destructive')}>
                  {component.status}
                </Badge>
              )}
            </div>
            <CardDescription>
              {component.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Component Preview
            </div>
            {component.tags && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {component.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="ml-auto">
              View Details
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
