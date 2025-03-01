import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Component } from "@/types/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSubmitButton } from "@/components/ui/animated-submit-button";
import BuyNowButton from "@/components/ui/buy-now-button";
import DownloadButton from "@/components/ui/download-button";
import DeleteButton from "@/components/ui/delete-button";
import GoogleAuthButton from "@/components/ui/google-auth-button";
import { GreyRetroAuthForm } from "@/components/ui/grey-retro-auth-form";
import { LavenderAuthForm } from "@/components/ui/lavender-auth-form";
import { CyberPunkAuthForm } from "@/components/ui/cyber-punk-auth-form";

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
  const ComponentPreview = () => (
    <div className="flex items-center justify-center w-full h-full">
      {component.name === "Lavender Auth Form" && (
        <div onClick={(e) => e.stopPropagation()}>
          <LavenderAuthForm />
        </div>
      )}
      {component.name === "Card" && (
        <div className="w-full max-w-[200px] h-[80px] bg-background border rounded-md p-2 text-xs">
          Sample Card
        </div>
      )}
      {component.name === "Grey Retro Auth Form" && (
        <div onClick={(e) => e.stopPropagation()}>
          <GreyRetroAuthForm />
        </div>
      )}
      {component.name === "Cyber Punk Auth Form" && (
        <div onClick={(e) => e.stopPropagation()} className="transform scale-y-[0.75] scale-x-[0.85] origin-top -mb-40">
          <CyberPunkAuthForm />
        </div>
      )}
      {component.name === "Animated Submit Button" && (
        <div onClick={(e) => e.stopPropagation()}>
          <AnimatedSubmitButton />
        </div>
      )}
      {component.name === "Buy Now Button" && (
        <div onClick={(e) => e.stopPropagation()}>
          <BuyNowButton />
        </div>
      )}
      {component.name === "Download Button" && (
        <div onClick={(e) => e.stopPropagation()}>
          <DownloadButton />
        </div>
      )}
      {component.name === "Delete Button" && (
        <div onClick={(e) => e.stopPropagation()}>
          <DeleteButton />
        </div>
      )}
      {component.name === "Google Auth Button" && (
        <div onClick={(e) => e.stopPropagation()}>
          <GoogleAuthButton />
        </div>
      )}
      {component.name !== "Lavender Auth Form" && 
       component.name !== "Card" && 
       component.name !== "Grey Retro Auth Form" &&
       component.name !== "Cyber Punk Auth Form" &&
       component.name !== "Animated Submit Button" &&
       component.name !== "Buy Now Button" &&
       component.name !== "Download Button" &&
       component.name !== "Delete Button" &&
       component.name !== "Google Auth Button" && (
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
        data-category={component.category}
      >
        <CardHeader>
          <CardTitle>{component.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Actual Component Preview */}
            <div className={`${component.category === "forms" ? "min-h-[300px]" : "h-32"} bg-muted rounded-md flex items-center justify-center`}>
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
