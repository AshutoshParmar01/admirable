
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Loader2 } from "lucide-react";
import GeneratedWebsitePreview from "@/components/sections/GeneratedWebsitePreview";

const WebsiteGenerator = () => {
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<null | {
    frontend: string;
    backend: string;
    structure: { fileName: string; content: string }[];
  }>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requirements.trim() || !projectName.trim()) return;

    setIsGenerating(true);
    
    try {
      // In a real implementation, this would be a call to the Gemini API
      // For this demo, we'll simulate the API call with a timeout
      setTimeout(() => {
        const mockGeneratedCode = {
          frontend: `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,
          backend: `const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
          structure: [
            { fileName: "src/App.js", content: "// React App entry point" },
            { fileName: "src/pages/Home.js", content: "// Home page component" },
            { fileName: "src/pages/About.js", content: "// About page component" },
            { fileName: "src/pages/Contact.js", content: "// Contact page component" },
            { fileName: "server/index.js", content: "// Express server" },
            { fileName: "package.json", content: "// Project dependencies" }
          ]
        };
        
        setGeneratedCode(mockGeneratedCode);
        setIsGenerating(false);
      }, 3000);
    } catch (error) {
      console.error("Error generating website:", error);
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
