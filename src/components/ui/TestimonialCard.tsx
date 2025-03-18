
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  avatar?: string;
  className?: string;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  content, 
  name, 
  role, 
  avatar, 
  className,
  delay = 0
}) => {
  // Generate fallback text for avatar
  const getFallback = () => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden h-full flex flex-col",
        delay > 0 && "opacity-0",
        delay > 0 && "animate-fade-in",
        delay > 0 && `animation-delay-${delay}`,
        className
      )}
    >
      <CardContent className="pt-6 flex-grow">
        <div className="mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 inline-block text-amber-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="italic text-base">{content}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-6 flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{getFallback()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
