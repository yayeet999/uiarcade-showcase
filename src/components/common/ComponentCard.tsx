
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ComponentCardProps {
  component: Component;
  index: number;
  layout?: string;
  showDescription?: boolean;
}

export const ComponentCard = ({ component, index, layout = "grid", showDescription = true }: ComponentCardProps) => {
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

  // Render a grid layout card
  if (layout === "grid") {
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
              {showDescription && (
                <CardDescription>
                  {component.description}
                </CardDescription>
              )}
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
  }
  
  // Render a list layout card
  if (layout === "list") {
    return (
      <motion.div variants={item}>
        <Link to={`/components/${component.name.toLowerCase()}`} className="block w-full">
          <Card className="transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col md:flex-row md:items-center p-4">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="h-20 md:h-16 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  Preview
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{component.name}</h3>
                  {component.status && (
                    <Badge variant={component.status === 'stable' ? 'default' : (component.status === 'beta' ? 'secondary' : 'destructive')}>
                      {component.status}
                    </Badge>
                  )}
                </div>
                {showDescription && <p className="text-muted-foreground text-sm mb-2">{component.description}</p>}
                {component.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {component.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </Link>
      </motion.div>
    );
  }
  
  // Render a compact layout card
  if (layout === "compact") {
    return (
      <motion.div variants={item}>
        <Link to={`/components/${component.name.toLowerCase()}`} className="block h-full">
          <Card className="h-full transition-all duration-300 hover:shadow-md">
            <div className="p-4">
              <div className="h-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground mb-3">
                Preview
              </div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">{component.name}</h3>
                {component.status && (
                  <Badge variant={component.status === 'stable' ? 'default' : (component.status === 'beta' ? 'secondary' : 'destructive')} className="text-xs">
                    {component.status}
                  </Badge>
                )}
              </div>
              {showDescription && <p className="text-xs text-muted-foreground">{component.description}</p>}
            </div>
          </Card>
        </Link>
      </motion.div>
    );
  }
  
  // Default fallback to grid
  return (
    <motion.div variants={item}>
      <Link to={`/components/${component.name.toLowerCase()}`} className="block h-full">
        <Card className="h-full transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle>{component.name}</CardTitle>
            {showDescription && <CardDescription>{component.description}</CardDescription>}
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
