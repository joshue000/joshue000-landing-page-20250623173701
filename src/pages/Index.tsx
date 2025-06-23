
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg animate-pulse">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 tracking-tight">
          Your Codlylabs Blank Canvas
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
          A beautiful foundation ready for your next amazing project. 
          Start building something extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Design</h3>
              <p className="text-gray-600 text-sm">Clean, responsive interface built with the latest technologies</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600 text-sm">Optimized performance with smooth animations and interactions</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ready to Scale</h3>
              <p className="text-gray-600 text-sm">Built with scalability and maintainability in mind</p>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 text-sm text-gray-500">
          Built with React, TypeScript, and Tailwind CSS
        </div>
      </div>
    </div>
  );
};

export default Index;
