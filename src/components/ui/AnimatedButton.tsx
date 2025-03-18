
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
  size?: "default" | "sm" | "lg" | "icon" | "xl";
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  delay?: number;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", size = "default", children, withArrow = false, delay = 0, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "overflow-hidden group relative transition-all duration-300 ease-out",
          withArrow && "pr-10",
          delay > 0 && "opacity-0",
          delay > 0 && "animate-fade-in",
          delay > 0 && `animation-delay-${delay}`,
          variant === "primary" && "bg-primary hover:bg-primary/90 text-white",
          className
        )}
        variant={variant === "primary" ? "default" : variant}
        size={size}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
