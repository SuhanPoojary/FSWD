
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Plus, MapPin, Clock, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";
import PostProjectForm from "@/components/PostProjectForm";

const ContractorDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleApplyClick = (e: React.MouseEvent, projectId: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Application Submitted",
      description: "Your application has been successfully submitted!",
    });
  };
  
  const projectCards = [
    {
      id: 1,
      title: "Retail Center Remodel",
      type: "Commercial",
      duration: "3 weeks",
      location: "Oakland, CA",
      hourlyRate: "$30-45/hr"
    },
    {
      id: 2,
      title: "Custom Home Construction",
      type: "Residential",
      duration: "1 month",
      location: "Denver, CO",
      hourlyRate: "$28-40/hr"
    },
    {
      id: 3,
      title: "Warehouse Expansion",
      type: "Industrial",
      duration: "2 months",
      location: "Phoenix, AZ",
      hourlyRate: "$35-50/hr"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary" className="flex items-center gap-2 transition-transform hover:scale-105">
                <Plus size={18} />
                Post Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
                <DialogDescription>Fill out the form below to post a new job listing</DialogDescription>
              </DialogHeader>
              <PostProjectForm />
            </DialogContent>
          </Dialog>
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-[#004A57] text-white py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Find Construction Jobs & Workers</h1>
          <p className="text-[#EEE] mb-6">Connect with top builders and manage your workforce efficiently.<br />
          Access high-value construction jobs and skilled laborers.</p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for workers or jobs..." 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="primary" className="md:w-auto">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        {/* Available Projects Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#121224] mb-6">Available projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectCards.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors card-hover cursor-pointer"
                onClick={() => navigate(`/project-detail-view/${project.id}`)}
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{project.type}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock size={14} /> {project.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                    <MapPin size={14} /> {project.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FF4B55] font-bold">{project.hourlyRate}</span>
                    <Button 
                      variant="outline" 
                      className="text-[#FF4B55] text-sm font-medium border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                      onClick={(e) => handleApplyClick(e, project.id)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#121224] mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Commercial</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Residential</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Industrial</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Infrastructure</h3>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-t border-gray-200 pt-8">
          <div>
            <h3 className="font-semibold mb-4">About LabourNet</h3>
            <p className="text-gray-600">Connecting quality workers with great construction jobs across the nation.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Find Jobs</Link></li>
              <li><Dialog>
                <DialogTrigger asChild>
                  <span className="hover:text-[#FF4B55] cursor-pointer">Post a Job</span>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Post a New Job</DialogTitle>
                    <DialogDescription>Fill out the form below to post a new job listing</DialogDescription>
                  </DialogHeader>
                  <PostProjectForm />
                </DialogContent>
              </Dialog></li>
              <li><Link to="/workers" className="hover:text-[#FF4B55]">Our Services</Link></li>
              <li><Link to="/company-profile" className="hover:text-[#FF4B55]">For Employers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="#" className="hover:text-[#FF4B55]">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Training Programs</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Career Resources</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Safety Guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mb-4">Contact Us</Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>Send us a message and we'll get back to you</DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <ul className="space-y-2 text-gray-600">
              <li>123 Build St., Suite 700</li>
              <li>San Francisco, CA 94103</li>
              <li>(555) 123-4567</li>
              <li>support@labournet.com</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContractorDashboard;
