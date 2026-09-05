
import React, { useState, useRef, useEffect } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BuilderPreview: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Describe Your Website",
      description: "Simply tell us what kind of website you need, including its purpose, style preferences, and any specific features you want.",
      image: "step1-requirements"
    },
    {
      id: 2,
      title: "Review & Customize",
      description: "Our AI generates a complete website based on your requirements. Review it and make any adjustments to perfect the design.",
      image: "step2-customize"
    },
    {
      id: 3,
      title: "Publish & Share",
      description: "With just one click, publish your website to a custom domain and share it with the world. It's that simple!",
      image: "step3-publish"
    }
  ];

  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleStepChange = (stepId: number) => {
    if (isAnimating || activeStep === stepId) return;
    
    setIsAnimating(true);
    setActiveStep(stepId);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    // Auto-cycle through steps
    intervalRef.current = window.setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 8000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-blue-50 text-primary font-medium text-sm py-1 px-3 rounded-full">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Build your website in three simple steps
          </h2>
          <p className="text-lg text-slate-600">
            Our streamlined process makes website creation faster and easier than ever before. No technical skills required.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Steps navigation */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(step.id)}
                  className={cn(
                    "w-full text-left p-6 rounded-xl transition-all duration-300 relative overflow-hidden",
                    activeStep === step.id
                      ? "bg-white shadow-md border border-slate-100"
                      : "bg-transparent hover:bg-white/50"
                  )}
                >
                  {activeStep === step.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent animate-pulse-subtle" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center mb-2">
                      <span 
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mr-3",
                          activeStep === step.id
                            ? "bg-primary text-white"
                            : "bg-slate-200 text-slate-600"
                        )}
                      >
                        {step.id}
                      </span>
                      <h3 
                        className={cn(
                          "font-medium text-lg",
                          activeStep === step.id ? "text-primary" : "text-slate-700"
                        )}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 pl-11">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preview window */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative aspect-[16/10] bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
              {/* Browser chrome */}
              <div className="absolute inset-x-0 top-0 h-12 bg-slate-50 flex items-center px-4 border-b border-slate-200">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full max-w-md h-6 rounded-full bg-white border border-slate-200 flex items-center px-3">
                  <span className="text-xs text-slate-400">admirable.app/builder</span>
                </div>
              </div>

              {/* Step content */}
              <div className="absolute inset-0 top-12 p-6 transition-opacity duration-500">
                {activeStep === 1 && (
                  <div className={cn("h-full", isAnimating ? "opacity-0" : "opacity-100")}>
                    <div className="bg-slate-50 rounded-lg p-6 h-full flex flex-col">
                      <h3 className="text-xl font-medium mb-4">What kind of website do you need?</h3>
                      <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4 h-40 text-sm text-slate-600">
                        I need a portfolio website for my photography business. It should have a modern, minimal design with a dark theme. I want a gallery page to showcase my work, an about page with my bio, and a contact form. The homepage should have a full-screen image slider.
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">+</span>
                          <span className="text-sm text-slate-600">Add pages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">+</span>
                          <span className="text-sm text-slate-600">Add features</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs">+</span>
                          <span className="text-sm text-slate-600">Add style preferences</span>
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <AnimatedButton variant="primary" className="w-full">
                          Generate Website
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className={cn("h-full flex", isAnimating ? "opacity-0" : "opacity-100")}>
                    <div className="w-1/4 bg-slate-50 border-r border-slate-200 p-4">
                      <div className="text-sm font-medium mb-3">Pages</div>
                      <ul className="space-y-2">
                        <li className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md">Home</li>
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">Gallery</li>
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">About</li>
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">Contact</li>
                      </ul>
                      <div className="text-sm font-medium mt-4 mb-3">Components</div>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">Hero</li>
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">Gallery</li>
                        <li className="text-sm text-slate-600 px-3 py-1.5 rounded-md hover:bg-slate-100">Contact Form</li>
                      </ul>
                    </div>
                    <div className="w-3/4 bg-white p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <button className="text-xs px-2 py-1 bg-slate-100 rounded hover:bg-slate-200">Desktop</button>
                          <button className="text-xs px-2 py-1 text-slate-600 rounded hover:bg-slate-100">Tablet</button>
                          <button className="text-xs px-2 py-1 text-slate-600 rounded hover:bg-slate-100">Mobile</button>
                        </div>
                        <button className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Preview</button>
                      </div>
                      <div className="flex-grow bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3"></div>
                          <div className="w-32 h-4 bg-slate-200 rounded mx-auto mb-2"></div>
                          <div className="w-48 h-3 bg-slate-200 rounded mx-auto"></div>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end mt-4">
                        <button className="text-sm px-3 py-1.5 border border-slate-200 rounded-md">Reset</button>
                        <button className="text-sm px-3 py-1.5 bg-primary text-white rounded-md">Save Changes</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className={cn("h-full", isAnimating ? "opacity-0" : "opacity-100")}>
                    <div className="flex flex-col h-full">
                      <div className="text-xl font-medium mb-4">Publish your website</div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <div className="text-sm font-medium mb-2">Connect Domain</div>
                          <div className="flex">
                            <input 
                              type="text" 
                              placeholder="yourdomain.com" 
                              className="flex-grow text-sm rounded-l-md border border-r-0 border-slate-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button className="bg-slate-200 text-slate-600 rounded-r-md border border-slate-200 px-3 py-2 text-sm">Verify</button>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <div className="text-sm font-medium mb-2">SEO Settings</div>
                          <button className="w-full text-left text-sm text-primary py-2 border-b border-slate-200 flex justify-between items-center">
                            <span>Configure settings</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-6 mb-6 border border-primary/20">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <div className="text-sm font-medium mb-1">Ready to go live?</div>
                            <div className="text-sm text-slate-600">Your website has passed all checks and is ready to be published. Once published, it will be live and accessible to everyone.</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex justify-between">
                        <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-600 text-sm">Save as Draft</button>
                        <AnimatedButton variant="primary" withArrow>
                          Publish Website
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderPreview;
