
import React from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-3xl"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 bg-blue-50 text-primary font-medium text-sm py-1 px-3 rounded-full opacity-0 animate-fade-in">
            Website builder reimagined
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance opacity-0 animate-fade-in animation-delay-200">
            Create <span className="text-gradient">stunning websites</span> from your requirements
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-400">
            Just describe what you need, and we'll build you a custom React and Node.js website that perfectly matches your vision. No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <AnimatedButton 
              size="lg" 
              variant="primary" 
              withArrow 
              delay={600}
              onClick={() => navigate('/generator')}
            >
              Get Started Free
            </AnimatedButton>
            <AnimatedButton size="lg" variant="outline" delay={800}>
              See Examples
            </AnimatedButton>
          </div>
          
          <div className="relative mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden opacity-0 animate-slide-in-bottom animation-delay-800 shadow-xl">
            <div className="absolute inset-0 bg-gray-900/5 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-12 bg-white/90 backdrop-blur flex items-center px-4">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full max-w-md mx-auto h-6 rounded-full bg-slate-100 flex items-center px-3">
                  <span className="text-xs text-slate-400">https://siteforge.app</span>
                </div>
              </div>
              <div className="absolute inset-0 top-12 bg-white/80 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="max-w-md w-full">
                  <h3 className="text-2xl font-medium mb-4">Describe your website</h3>
                  <div className="w-full h-32 bg-slate-50 rounded-lg border border-slate-200 p-4 mb-4 text-left text-slate-500 text-sm">
                    I want a professional e-commerce website with React frontend and Node.js backend, product listings, shopping cart, and user authentication...
                  </div>
                  <AnimatedButton variant="primary" className="w-full" onClick={() => navigate('/generator')}>
                    Generate Website
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
