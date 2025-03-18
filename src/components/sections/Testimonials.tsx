
import React from "react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "I was able to create a professional website for my business in under an hour. The AI understood exactly what I needed and delivered beyond my expectations.",
      name: "Alex Morgan",
      role: "Small Business Owner",
      delay: 200
    },
    {
      content: "As a photographer, I needed a portfolio that would showcase my work in the best light. SiteForge created exactly what I envisioned with minimal input.",
      name: "Sarah Chen",
      role: "Professional Photographer",
      delay: 400
    },
    {
      content: "The speed and quality are unmatched. I was skeptical about an AI building my site, but the results were stunning and required very little tweaking.",
      name: "Michael Johnson",
      role: "Marketing Director",
      delay: 600
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 bg-blue-50 text-primary font-medium text-sm py-1 px-3 rounded-full">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            What our users are saying
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of satisfied customers who have created stunning websites with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
