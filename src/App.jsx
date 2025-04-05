
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import JobDetails from "./pages/JobDetails";
import Journey from "./pages/Journey";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";
import WorkerDashboard from "./pages/WorkerDashboard";
import WorkerProfile from "./pages/WorkerProfile";
import WorkerPortfolio from "./pages/WorkerPortfolio";
import ProfessionalPortfolio from "./pages/ProfessionalPortfolio";
import ContractorPortfolio from "./pages/ContractorPortfolio";
import ActiveWork from "./pages/ActiveWork";
import JobInfo from "./pages/JobInfo";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ContractorDashboard from "./pages/ContractorDashboard";
import ContractorJobPosting from "./pages/ContractorJobPosting";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectView from "./pages/ProjectView";
import ProfessionalMessages from "./pages/ProfessionalMessages";
import ProfessionalProjects from "./pages/ProfessionalProjects";
import CompanyProfile from "./pages/CompanyProfile";
import ProjectDetailView from "./pages/ProjectDetailView";
import Workers from "./pages/Workers";
import AppointWorkers from "./pages/AppointWorkers";
import Analytics from "./pages/Analytics";
import { ProjectProvider } from "./components/PostProjectForm";
import { JobProvider } from "./components/PostJobForm";
import EditWorkerProfile from "./pages/EditWorkerProfile";
import EditProfessionalProfile from "./pages/EditProfessionalProfile";
import EditContractorProfile from "./pages/EditContractorProfile";

const queryClient = new QueryClient();

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const style = document.createElement('style');
    style.innerHTML = `
      button {
        transition: all 0.3s ease;
      }
      .bg-[#FF4B55]:hover, 
      button:has(.bg-[#FF4B55]):hover,
      button.bg-[#FF4B55]:hover,
      a:has(.bg-[#FF4B55]):hover {
        background-color: #e03e48 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.head.removeChild(style);
    };
  }, []);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ProjectProvider>
        <JobProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <SmoothScroll>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/journey" element={<Journey />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                  <Route path="/worker-profile" element={<WorkerProfile />} />
                  <Route path="/worker-portfolio" element={<WorkerPortfolio />} />
                  <Route path="/professional-portfolio" element={<ProfessionalPortfolio />} />
                  <Route path="/contractor-portfolio" element={<ContractorPortfolio />} />
                  <Route path="/active-work" element={<ActiveWork />} />
                  <Route path="/job-detail/:id" element={<JobInfo />} />
                  <Route path="/job-info/:id" element={<JobInfo />} />
                  <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
                  <Route path="/professional-profile" element={<ProfessionalProfile />} />
                  <Route path="/project-details/:id" element={<ProjectDetails />} />
                  <Route path="/project-view/:id" element={<ProjectView />} />
                  <Route path="/professional-messages" element={<ProfessionalMessages />} />
                  <Route path="/professional-projects" element={<ProfessionalProjects />} />
                  <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
                  <Route path="/contractor-job-posting" element={<ContractorJobPosting />} />
                  <Route path="/company-profile" element={<CompanyProfile />} />
                  <Route path="/project-detail-view/:id" element={<ProjectDetailView />} />
                  <Route path="/workers" element={<Workers />} />
                  <Route path="/appoint-workers" element={<AppointWorkers />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/edit-worker-profile" element={<EditWorkerProfile />} />
                  <Route path="/edit-professional-profile" element={<EditProfessionalProfile />} />
                  <Route path="/edit-contractor-profile" element={<EditContractorProfile />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/Our-story" element={<OurStory />} />
                  <Route path="/job-details/:jobId" element={<JobDetails />} />
                </Routes>
              </BrowserRouter>
            </SmoothScroll>
          </TooltipProvider>
        </JobProvider>
      </ProjectProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
