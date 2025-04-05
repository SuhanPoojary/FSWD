import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MapPin, Clock, Calendar, User, ArrowLeft, Share2, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog";
import { toast } from "../hooks/use-toast";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplyDialog, setShowApplyDialog] = useState(false);

  // Simulate project data
  const project = {
    id: Number(id) || 1,
    title: "Skyline Commercial Tower Construction",
    location: "Downtown Toronto, ON",
    startDate: "Oct 1, 2023",
    description:
      "A 25-story commercial tower featuring sustainable design elements, state-of-the-art office spaces, and retail areas. The project includes advanced HVAC systems, smart building technology, and LEED certification requirements.",
    projectType: "Commercial",
    status: "Active Project",
    duration: "18 months",
    value: "$45M",
    teamSize: "85 workers",
    companyName: "Elite Construction Ltd",
    foundedYear: "2005",
    timeline: [
      { phase: "Ground Breaking", date: "Oct 2023" },
      { phase: "Structure Complete", date: "Jun 2024" },
      { phase: "Project Completion", date: "Mar 2025" },
    ],
    workSchedule: {
      days: "Monday to Friday",
      hours: "7:00 AM - 3:30 PM",
    },
    safetyRequirements: ["Safety certification required", "PPE provided", "Daily safety briefings"],
  };

  const handleApply = () => {
    setShowApplyDialog(false);
    toast({
      title: "Application Submitted",
      description: "Your application has been successfully submitted!",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="primary">Post Project</Button>
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="outline" className="bg-white/90">
                    <Share2 size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>Start Date: {project.startDate}</span>
                </div>
                <Badge className="bg-[#E5F7ED] text-[#0D9E55] border-0 mb-4">{project.status}</Badge>
                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div className="mb-6">
                <h3 className="text-sm text-gray-500 mb-2">Construction Company</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#004A57] rounded-md flex items-center justify-center text-white">EC</div>
                  <div>
                    <p className="font-medium">{project.companyName}</p>
                    <p className="text-xs text-gray-500">Since {project.foundedYear}</p>
                  </div>
                </div>
              </div>
              <Button variant="primary" className="w-full" onClick={() => setShowApplyDialog(true)}>
                Apply for Position
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for Position</DialogTitle>
            <DialogDescription>
              You're applying for the {project.title} project with {project.companyName}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">Are you sure you want to submit your application for this position?</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApplyDialog(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleApply}>Submit Application</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectView;
