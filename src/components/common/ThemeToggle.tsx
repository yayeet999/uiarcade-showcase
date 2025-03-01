
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="transition-transform duration-200 hover:scale-110"
      aria-label="Dark theme"
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
