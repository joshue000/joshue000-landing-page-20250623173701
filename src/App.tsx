import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import TournamentLanding from "@/pages/TournamentLanding";
import PlayerDetail from "@/pages/PlayerDetail";

function App() {
  return (
    <TooltipProvider delayDuration={0}>
      <Router>
        <Routes>
          <Route path="/" element={<TournamentLanding />} />
          <Route path="/player/:id" element={<PlayerDetail />} />
        </Routes>
      </Router>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}

export default App;
