import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import "./App.css";

// Create the QueryClient instance once
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={100}>
      {/* TODO: Add your actual application routes / pages here */}

      {/* Toast providers */}
      <Sonner />
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
