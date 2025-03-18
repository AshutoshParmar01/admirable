
import React from "react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Sparkles, Layout, Code, Zap, PaintBucket, RefreshCw } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Design",
      description: "Our advanced AI understands your requirements and generates beautiful websites tailored to your specific needs.",
      delay: 200
    },
    {
      icon: Layout,
      title: "Responsive Layouts",
      description: "All websites are fully responsive and look perfect on any device, from mobile phones to large desktop screens.",
      delay: 400
    },
    {
      icon: PaintBucket,
      title: "Customizable Styles",
      description: "Easily change colors, fonts, and layouts to match your brand identity with our intuitive design tools.",
      delay: 600
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Under the hood, we generate clean, optimized code that follows best practices for performance and SEO.",
      delay: 200
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Lightning-fast websites that load quickly and provide smooth experiences for your visitors.",
      delay: 400
    },
    {
      icon: RefreshCw,
      title: "Iterative Design",
      description: "Not happy with the first version? Simply adjust your requirements and regenerate until it's perfect.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-blue-50 text-primary font-medium text-sm py-1 px-3 rounded-full">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Everything you need to create the perfect website
          </h2>
          <p className="text-lg text-slate-600">
            Our AI-powered platform makes it easy to create stunning, functional websites that perfectly match your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
