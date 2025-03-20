
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Journey from "./pages/Journey";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WorkerDashboard from "./pages/WorkerDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ContractorDashboard from "./pages/ContractorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/login" element={<Login />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
          <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
