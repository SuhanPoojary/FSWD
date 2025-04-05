
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/PrivateRoute";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Journey from "./pages/Journey";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";

// Worker pages
import WorkerDashboard from "./pages/WorkerDashboard";
import WorkerProfile from "./pages/WorkerProfile";
import WorkerPortfolio from "./pages/WorkerPortfolio";
import EditWorkerProfile from "./pages/EditWorkerProfile";
import JobInfo from "./pages/JobInfo";
import ActiveWork from "./pages/ActiveWork";

// Professional pages
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import ProfessionalPortfolio from "./pages/ProfessionalPortfolio";
import EditProfessionalProfile from "./pages/EditProfessionalProfile";
import ProfessionalProjects from "./pages/ProfessionalProjects";
import ProfessionalMessages from "./pages/ProfessionalMessages";
import ProjectDetailView from "./pages/ProjectDetailView";

// Contractor pages
import ContractorDashboard from "./pages/ContractorDashboard";
import ContractorJobPosting from "./pages/ContractorJobPosting";
import ContractorPortfolio from "./pages/ContractorPortfolio";
import CompanyProfile from "./pages/CompanyProfile";
import EditContractorProfile from "./pages/EditContractorProfile";
import AppointWorkers from "./pages/AppointWorkers";
import Workers from "./pages/Workers";
import Analytics from "./pages/Analytics";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectView from "./pages/ProjectView";
import JobDetails from "./pages/JobDetails";
import ProjectApplicants from "./pages/ProjectApplicants";

// Job Provider context
import { JobProvider } from "./components/PostJobForm";

const App = () => {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/our-story" element={<OurStory />} />
            
            {/* Worker Routes - Protected */}
            <Route 
              path="/worker-dashboard" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <WorkerDashboard />
                </RequireAuth>
              } 
            />
            <Route 
              path="/worker-profile" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <WorkerProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/worker-portfolio" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <WorkerPortfolio />
                </RequireAuth>
              } 
            />
            <Route 
              path="/edit-worker-profile" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <EditWorkerProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/job-info/:id" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <JobInfo />
                </RequireAuth>
              } 
            />
            <Route 
              path="/active-work" 
              element={
                <RequireAuth allowedRoles={["worker"]}>
                  <ActiveWork />
                </RequireAuth>
              } 
            />
            
            {/* Professional Routes - Protected */}
            <Route 
              path="/professional-dashboard" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProfessionalDashboard />
                </RequireAuth>
              } 
            />
            <Route 
              path="/professional-profile" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProfessionalProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/professional-portfolio" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProfessionalPortfolio />
                </RequireAuth>
              } 
            />
            <Route 
              path="/edit-professional-profile" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <EditProfessionalProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/professional-projects" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProfessionalProjects />
                </RequireAuth>
              } 
            />
            <Route 
              path="/professional-messages" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProfessionalMessages />
                </RequireAuth>
              } 
            />
            <Route 
              path="/project-details/:id" 
              element={
                <RequireAuth allowedRoles={["professional"]}>
                  <ProjectDetailView />
                </RequireAuth>
              } 
            />
            
            {/* Contractor Routes - Protected */}
            <Route 
              path="/contractor-dashboard" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ContractorDashboard />
                </RequireAuth>
              } 
            />
            <Route 
              path="/contractor-job-posting" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ContractorJobPosting />
                </RequireAuth>
              } 
            />
            <Route 
              path="/contractor-portfolio" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ContractorPortfolio />
                </RequireAuth>
              } 
            />
            <Route 
              path="/company-profile" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <CompanyProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/edit-contractor-profile" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <EditContractorProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/appoint-workers" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <AppointWorkers />
                </RequireAuth>
              } 
            />
            <Route 
              path="/workers" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <Workers />
                </RequireAuth>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <Analytics />
                </RequireAuth>
              } 
            />
            <Route 
              path="/project-details" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ProjectDetails />
                </RequireAuth>
              } 
            />
            <Route 
              path="/project-view/:id" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ProjectView />
                </RequireAuth>
              } 
            />
            <Route 
              path="/job-details/:id" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <JobDetails />
                </RequireAuth>
              } 
            />
            <Route 
              path="/project-applicants/:id" 
              element={
                <RequireAuth allowedRoles={["contractor"]}>
                  <ProjectApplicants />
                </RequireAuth>
              } 
            />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </Router>
      </JobProvider>
    </AuthProvider>
  );
};

export default App;
