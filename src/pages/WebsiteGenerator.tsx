
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Loader2 } from "lucide-react";
import GeneratedWebsitePreview from "@/components/sections/GeneratedWebsitePreview";
import { useToast } from "@/hooks/use-toast";

const GEMINI_API_KEY = "AIzaSyAGRPEyAUzW2pZHfSxPJpM2V4MHfgrFvbc";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

const WebsiteGenerator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [requirements, setRequirements] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<null | {
    frontend: string;
    backend: string;
    structure: { fileName: string; content: string }[];
  }>(null);

  const generateWebsite = async (projectName: string, requirements: string) => {
    try {
      const prompt = `Generate a website structure for a project named "${projectName}" with the following requirements: ${requirements}. 
      
      Please provide:
      1. A React frontend code sample for the main App.jsx or App.tsx file
      2. A Node.js backend code sample for the main server file
      3. A file structure for the project

      Format your response as JSON with three fields: 
      - frontend (string with React code)
      - backend (string with Node.js code)
      - structure (array of objects with fileName and content fields)
      
      Only respond with valid JSON.`;

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate website');
      }

      const data = await response.json();
      
      // Extract the text from the response
      const textResponse = data.candidates[0].content.parts[0].text;
      
      // Find the JSON portion in the text
      const jsonMatch = textResponse.match(/```json\n([\s\S]*?)\n```/) || 
                        textResponse.match(/```\n([\s\S]*?)\n```/) || 
                        textResponse.match(/{[\s\S]*}/);
      
      let jsonResponse;
      if (jsonMatch) {
        jsonResponse = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        // If no JSON formatting, try to parse the whole response
        try {
          jsonResponse = JSON.parse(textResponse);
        } catch (e) {
          throw new Error('Failed to parse Gemini response');
        }
      }

      return jsonResponse;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requirements.trim() || !projectName.trim()) return;

    setIsGenerating(true);
    
    try {
      const generatedResult = await generateWebsite(projectName, requirements);
      setGeneratedCode(generatedResult);
      toast({
        title: "Website generated successfully!",
        description: `Your ${projectName} website structure is ready.`,
      });
    } catch (error) {
      console.error("Error generating website:", error);
      toast({
        title: "Generation failed",
        description: "An error occurred while generating your website.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4 bg-blue-50 text-primary font-medium text-sm py-1 px-3 rounded-full">
                AI-Powered Website Generator
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Build <span className="text-gradient">React & Node.js</span> websites from your description
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Describe your website requirements and our AI will generate a complete React frontend and Node.js backend structure for you.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8 max-w-4xl mx-auto">
              <form onSubmit={handleGenerate}>
                <div className="mb-6">
                  <label htmlFor="projectName" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Name
                  </label>
                  <Input
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="My Awesome Website"
                    className="w-full"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">
                    Describe your website requirements in detail
                  </label>
                  <Textarea
                    id="requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="I need an e-commerce website with product listings, shopping cart, user authentication, and payment integration..."
                    className="min-h-[200px] w-full"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <AnimatedButton 
                    type="submit" 
                    size="lg" 
                    variant="primary" 
                    disabled={isGenerating || !requirements.trim() || !projectName.trim()}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Website...
                      </>
                    ) : (
                      "Generate Website"
                    )}
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </section>

          {generatedCode && <GeneratedWebsitePreview generatedCode={generatedCode} projectName={projectName} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteGenerator;
