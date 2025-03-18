
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  delay = 0
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 ease-out hover:shadow-md border border-slate-200 h-full",
        "hover:translate-y-[-4px]",
        delay > 0 && "opacity-0",
        delay > 0 && "animate-fade-in",
        delay > 0 && `animation-delay-${delay}`,
        className
      )}
    >
      <CardHeader className="pb-2">
        <div className="p-2 w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 mb-3">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
