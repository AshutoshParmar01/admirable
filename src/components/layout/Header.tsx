
import React, { useEffect, useState } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-gradient">SiteForge</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            How it Works
          </a>
          <a 
            href="#testimonials" 
            className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="relative text-sm font-medium text-slate-600 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <AnimatedButton size="sm" variant="outline" className="hidden md:inline-flex">
            Log in
          </AnimatedButton>
          <AnimatedButton size="sm" variant="primary" withArrow>
            Get Started
          </AnimatedButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
