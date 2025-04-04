import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProjectProvider } from './components/PostProjectForm';
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";

// Import all pages
import Index from "./pages/Index";
import Journey from "./pages/Journey";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import WorkerDashboard from "./pages/WorkerDashboard";
import WorkerProfile from "./pages/WorkerProfile";
import ActiveWork from "./pages/ActiveWork";
import JobInfo from './pages/JobInfo';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import ContractorDashboard from "./pages/ContractorDashboard";
import ContractorJobPosting from "./pages/ContractorJobPosting";
import ProfessionalProfile from './pages/ProfessionalProfile';
import ProjectDetails from './pages/ProjectDetails';
import ProjectView from "./pages/ProjectView";
import ProfessionalMessages from "./pages/ProfessionalMessages";
import ProfessionalProjects from "./pages/ProfessionalProjects";
import CompanyProfile from "./pages/CompanyProfile";
import ProjectDetailView from "./pages/ProjectDetailView";
import Workers from "./pages/Workers";
import AppointWorkers from './pages/AppointWorkers';
import Analytics from './pages/Analytics';
import PostProjectForm from './components/PostProjectForm';

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <ProjectProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/login" element={<Login />} />
                <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                <Route path="/worker-profile" element={<WorkerProfile />} />
                <Route path="/active-work" element={<ActiveWork />} />
                <Route path="/job-detail/:id" element={<JobInfo />} />
                <Route path="/job-info/:id" element={<JobInfo />} />
                <Route
                  path="/professional-dashboard"
                  element={
                    <ProtectedRoute>
                      <ProfessionalDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/contractor-dashboard"
                  element={
                    <ProtectedRoute>
                      <ContractorDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/contractor-job-posting"
                  element={
                    <ProtectedRoute>
                      <ContractorJobPosting />
                    </ProtectedRoute>
                  }
                />
                <Route path="/professional-profile" element={<ProfessionalProfile />} />
                <Route path="/project-details/:id" element={<ProjectDetails />} />
                <Route path="/project-view/:id" element={<ProjectView />} />
                <Route path="/professional-messages" element={<ProfessionalMessages />} />
                <Route path="/professional-projects" element={<ProfessionalProjects />} />
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route path="/project-detail-view/:id" element={<ProjectDetailView />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/appoint-workers" element={<AppointWorkers />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route
                  path="/post-project"
                  element={
                    <ProtectedRoute>
                      <PostProjectForm />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </ProjectProvider>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  </QueryClientProvider>
);

export default App;
