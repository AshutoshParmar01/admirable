
import React, { useState } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Copy, Check } from "lucide-react";

interface GeneratedWebsitePreviewProps {
  generatedCode: {
    frontend: string;
    backend: string;
    structure: { fileName: string; content: string }[];
  };
  projectName: string;
}

const GeneratedWebsitePreview: React.FC<GeneratedWebsitePreviewProps> = ({ generatedCode, projectName }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyCode = (codeType: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(codeType);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDownloadAll = () => {
    // In a real implementation, this would create a zip file with all the code
    alert("In a real implementation, this would download a zip file with all the generated code");
  };

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Generated Website: {projectName}</h2>
          <AnimatedButton onClick={handleDownloadAll} variant="outline" size="default">
            <Download className="mr-2 h-4 w-4" />
            Download All Files
          </AnimatedButton>
        </div>

        <Tabs defaultValue="structure">
          <TabsList className="mb-6">
            <TabsTrigger value="structure">Project Structure</TabsTrigger>
            <TabsTrigger value="frontend">Frontend Code</TabsTrigger>
            <TabsTrigger value="backend">Backend Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="structure">
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-medium mb-3">File Structure</h3>
              <ul className="space-y-2">
                {generatedCode.structure.map((file, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-mono text-xs bg-primary/10 px-2 py-1 rounded mr-2">
                      {file.fileName}
                    </span>
                    <span className="text-slate-600 text-sm">{file.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="frontend">
            <div className="relative">
              <button
                onClick={() => handleCopyCode('frontend', generatedCode.frontend)}
                className="absolute top-2 right-2 p-1.5 bg-slate-800/80 text-white rounded-md hover:bg-slate-700"
                aria-label="Copy code"
              >
                {copied === 'frontend' ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono">{generatedCode.frontend}</code>
              </pre>
            </div>
          </TabsContent>
          
          <TabsContent value="backend">
            <div className="relative">
              <button
                onClick={() => handleCopyCode('backend', generatedCode.backend)}
                className="absolute top-2 right-2 p-1.5 bg-slate-800/80 text-white rounded-md hover:bg-slate-700"
                aria-label="Copy code"
              >
                {copied === 'backend' ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono">{generatedCode.backend}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Next Steps</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
            <li>Download the generated code files</li>
            <li>Set up your development environment (Node.js, npm/yarn)</li>
            <li>Install dependencies with <code className="bg-blue-100 px-1 rounded">npm install</code></li>
            <li>Start your backend with <code className="bg-blue-100 px-1 rounded">node server/index.js</code></li>
            <li>Start your frontend with <code className="bg-blue-100 px-1 rounded">npm start</code></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GeneratedWebsitePreview;
