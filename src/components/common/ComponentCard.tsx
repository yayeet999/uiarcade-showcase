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
import { PersonalNameCard } from "@/components/ui/personal-name-card";
import { DesignNameCard } from "@/components/ui/design-name-card";
import { FlipHoverCard } from "@/components/ui/flip-hover-card";
import { PaymentPopupCard } from "@/components/ui/payment-popup-card";
import { PaymentTierCard } from "@/components/ui/payment-tier-card";
import { GitHubAuthButton } from "@/components/ui/github-auth-button";
import { XAuthButton } from "@/components/ui/x-auth-button";
import { FacebookAuthButton } from "@/components/ui/facebook-auth-button";
import { VioletAuthForm } from "@/components/ui/violet-auth-form";
import { TealAuthForm } from "@/components/ui/teal-auth-form";
import { getComponentCode } from "@/registry";
import { getComponentCode as getComponentCode2 } from "@/registry/registry-2";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { AppleAuthButton } from "@/components/ui/apple-auth-button";
import { BuyMeCoffee } from "@/components/ui/buy-me-coffee";
import { FeedbackCard } from "@/components/ui/feedback-card";
import { NameInput } from "@/components/ui/name-input";
import { AnimatedSearchInput } from "@/components/ui/animated-search-input";
import { PhoneNumberInput } from "@/components/ui/phone-number-input";
import { EmailAutoSuggest } from "@/components/ui/email-auto-suggest";
import { NumberCodeCheck } from "@/components/ui/number-code-check";
import { SocialIconsAnimated } from "@/components/ui/social-icons-animated";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { DayNightToggle } from "@/components/ui/day-night-toggle";
import { BasicDropdown } from "@/components/ui/basic-dropdown";
import { MenuPopupBasic } from "@/components/ui/menu-popup-basic";
import { FeedbackCard2 } from "@/components/ui/feedback-card2";
import { NightDayToggle2 } from "@/components/ui/night-day-toggle2";
import { DeleteAccountCard } from "@/components/ui/delete-account-card";
import { RangeSlider } from "@/components/ui/range-slider";
import { NotificationsPopup } from "@/components/ui/notifications-popup";
import { MinimalAuthForm } from "@/components/ui/minimal-auth-form";
import { IOSStyledAuthForm } from "@/components/ui/ios-styled-auth-form";
import { NewsletterSubscribe } from "@/components/ui/newsletter-subscribe";
import { AnimatedChecklist } from "@/components/ui/animated-checklist";

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

  const ComponentPreview = ({ name }: { name: string }) => {
    const componentCode = getComponentCode(name) || getComponentCode2(name);
    
    if (!componentCode) {
      return <div>No preview available</div>;
    }

    if (name === "Personal Name Card") {
      return <PersonalNameCard />;
    }

    if (name === "Design Name Card") {
      return <DesignNameCard />;
    }

    if (name === "Flip Hover Card") {
      return <FlipHoverCard />;
    }

    if (name === "Payment Popup Card") {
      return (
        <div className="transform scale-y-[0.65] scale-x-[0.8]">
          <PaymentPopupCard />
        </div>
      );
    }

    if (name === "Payment Tier Card") {
      return (
        <div className="transform scale-[0.65]">
          <PaymentTierCard />
        </div>
      );
    }

    if (name === "Social Icons Animated") {
      return (
        <div className="transform scale-[0.75] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <SocialIconsAnimated />
        </div>
      );
    }

    if (name === "Loading Animation") {
      return (
        <div className="transform scale-[0.75] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <LoadingAnimation />
        </div>
      );
    }

    if (name === "Night/Day Toggle") {
      return (
        <div className="transform scale-[0.85] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <DayNightToggle />
        </div>
      );
    }

    if (name === "Night/Day Toggle 2") {
      return (
        <div className="transform scale-[0.85] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <NightDayToggle2 />
        </div>
      );
    }

    if (name === "Basic Dropdown") {
      return (
        <div className="transform scale-[0.85] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <BasicDropdown />
        </div>
      );
    }

    if (name === "Menu Popup Basic") {
      return (
        <div className="transform scale-[0.85] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <MenuPopupBasic />
        </div>
      );
    }

    if (name === "Buy Me Coffee") {
      return (
        <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <BuyMeCoffee />
        </div>
      );
    }

    if (name === "Feedback Card") {
      return (
        <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <FeedbackCard />
        </div>
      );
    }

    if (name === "Name Input") {
      return (
        <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <NameInput />
        </div>
      );
    }

    if (name === "Animated Search Input") {
      return (
        <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <AnimatedSearchInput />
        </div>
      );
    }

    if (name === "Phone Number Input") {
      return (
        <div className="flex items-center justify-center w-full max-w-md px-4" onClick={(e) => e.stopPropagation()}>
          <PhoneNumberInput />
        </div>
      );
    }

    if (name === "Email Auto Suggest") {
      return (
        <div className="flex items-center justify-center w-full" onClick={(e) => e.stopPropagation()}>
          <EmailAutoSuggest className="w-full max-w-xs" />
        </div>
      );
    }

    if (name === "Number Code Check") {
      return (
        <div className="flex items-center justify-center w-full" onClick={(e) => e.stopPropagation()}>
          <NumberCodeCheck className="w-full max-w-xs" />
        </div>
      );
    }

    if (name === "Teal Auth Form") {
      return (
        <div onClick={(e) => e.stopPropagation()} className="transform scale-[0.75] origin-top -mb-40">
          <TealAuthForm />
        </div>
      );
    }

    if (name === "Minimal Auth Form") {
      return (
        <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center h-full">
          <div className="transform scale-[0.85] w-[450px]">
            <MinimalAuthForm />
          </div>
        </div>
      );
    }

    if (name === "Lavender Auth Form" || name === "Card" || name === "Grey Retro Auth Form" || name === "Cyber Punk Auth Form" || name === "Animated Submit Button" || name === "Buy Now Button" || name === "Download Button" || name === "Delete Button" || name === "Google Auth Button" || name === "GitHub Auth Button" || name === "X Auth Button" || name === "Facebook Auth Button" || name === "Violet Auth Form" || name === "Add-to-Cart Button" || name === "Apple Auth Button") {
      return (
        <div className="flex items-center justify-center w-full h-full">
          {name === "Lavender Auth Form" && (
            <div onClick={(e) => e.stopPropagation()}>
              <LavenderAuthForm />
            </div>
          )}
          {name === "Card" && (
            <div className="w-full max-w-[200px] h-[80px] bg-background border rounded-md p-2 text-xs">
              Sample Card
            </div>
          )}
          {name === "Grey Retro Auth Form" && (
            <div onClick={(e) => e.stopPropagation()}>
              <GreyRetroAuthForm />
            </div>
          )}
          {name === "Cyber Punk Auth Form" && (
            <div onClick={(e) => e.stopPropagation()} className="transform scale-y-[0.75] scale-x-[0.85] origin-top -mb-40">
              <CyberPunkAuthForm />
            </div>
          )}
          {name === "Animated Submit Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <AnimatedSubmitButton />
            </div>
          )}
          {name === "Buy Now Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <BuyNowButton />
            </div>
          )}
          {name === "Download Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <DownloadButton />
            </div>
          )}
          {name === "Delete Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <DeleteButton />
            </div>
          )}
          {name === "Google Auth Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <GoogleAuthButton />
            </div>
          )}
          {name === "GitHub Auth Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <GitHubAuthButton />
            </div>
          )}
          {name === "X Auth Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <XAuthButton />
            </div>
          )}
          {name === "Facebook Auth Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <FacebookAuthButton />
            </div>
          )}
          {name === "Violet Auth Form" && (
            <div onClick={(e) => e.stopPropagation()}>
              <VioletAuthForm />
            </div>
          )}
          {name === "Add-to-Cart Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <AddToCartButton />
            </div>
          )}
          {name === "Apple Auth Button" && (
            <div onClick={(e) => e.stopPropagation()}>
              <AppleAuthButton />
            </div>
          )}
          {name !== "Lavender Auth Form" && 
           name !== "Card" && 
           name !== "Grey Retro Auth Form" &&
           name !== "Cyber Punk Auth Form" &&
           name !== "Animated Submit Button" &&
           name !== "Buy Now Button" &&
           name !== "Download Button" &&
           name !== "Delete Button" &&
           name !== "Google Auth Button" &&
           name !== "GitHub Auth Button" &&
           name !== "X Auth Button" &&
           name !== "Facebook Auth Button" &&
           name !== "Violet Auth Form" &&
           name !== "Add-to-Cart Button" &&
           name !== "Apple Auth Button" && (
            <div className="text-sm text-muted-foreground">
              {name} Preview
            </div>
          )}
        </div>
      );
    }

    if (name === "Feedback Card2") {
      return (
        <div className="transform scale-[0.65]" onClick={(e) => e.stopPropagation()}>
          <FeedbackCard2 />
        </div>
      );
    }

    if (name === "Delete Account Card") {
      return (
        <div className="transform scale-[0.65]" onClick={(e) => e.stopPropagation()}>
          <DeleteAccountCard />
        </div>
      );
    }

    if (name === "Range Slider") {
      return (
        <div className="transform scale-[0.65] w-full max-w-[400px] -mt-2" onClick={(e) => e.stopPropagation()}>
          <RangeSlider />
        </div>
      );
    }

    if (name === "Notifications Popup") {
      return (
        <div className="transform scale-[0.65] w-full max-w-[400px] -mt-2" onClick={(e) => e.stopPropagation()}>
          <NotificationsPopup />
        </div>
      );
    }

    if (name === "IOS Styled Auth Form") {
      return (
        <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center h-full">
          <div className="transform scale-[0.85] w-[450px]">
            <IOSStyledAuthForm />
          </div>
        </div>
      );
    }

    if (name === "Newsletter Subscribe") {
      return (
        <div onClick={(e) => e.stopPropagation()} className="transform scale-[0.85] w-full">
          <NewsletterSubscribe />
        </div>
      );
    }

    if (name === "Animated Checklist") {
      return (
        <div className="transform scale-[0.85] -mt-1 -mb-1" onClick={(e) => e.stopPropagation()}>
          <AnimatedChecklist />
        </div>
      );
    }

    if (!componentCode.component) {
      return <div dangerouslySetInnerHTML={{ __html: componentCode.preview }} />;
    }

    const Component = componentCode.component;
    return <Component />;
  };

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
        <CardContent className={component.category === "others" ? "pb-6" : ""}>
          <div className="relative">
            {/* Actual Component Preview */}
            <div className={`${
              component.category === "forms" 
                ? "min-h-[300px]" 
                : component.category === "cards"
                  ? "h-[320px]"  
                  : component.category === "inputs"
                    ? "h-56 min-w-[280px]"
                    : component.category === "others"
                      ? "h-44"
                      : "h-32"
            } bg-muted rounded-md flex items-center justify-center`}>
              <ComponentPreview name={component.name} />
            </div>
            
            {/* View Code button moved to bottom right */}
            <div className={`absolute bottom-2 right-2 ${
              component.name === "Social Icons Animated" || component.category === "others" ? "z-10" : ""
            }`}>
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
