
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostProjectForm from "@/components/PostProjectForm";
import Footer from "@/components/layout/Footer";

const ProfessionalProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    projectType: "all",
    status: "all"
  });
  
  // Mock data for available projects
  const projects = [
    {
      id: 1,
      title: "Commercial Building Renovation",
      client: "XYZ Developers",
      location: "Downtown Area",
      budget: "$250,000 - $300,000",
      deadline: "December 2023",
      posted: "2023-10-24",
      applicants: 24,
      status: "active",
      description: "Major renovation project for a 3-story commercial building including structural updates, electrical systems, and interior finishing",
      skills: ["Commercial Construction", "Project Management", "Electrical Systems"]
    },
    {
      id: 2,
      title: "Residential Complex Construction",
      client: "HomeBuilders Inc",
      location: "Suburban District",
      budget: "$500,000 - $750,000",
      deadline: "October 2023",
      posted: "2023-07-05",
      applicants: 18,
      status: "active",
      description: "New construction of a 72-unit residential complex with modern amenities and underground parking",
      skills: ["Residential Construction", "Site Management", "Foundation Work"]
    },
    {
      id: 3,
      title: "Hospital Wing Expansion",
      client: "HealthCare Solutions",
      location: "Medical District",
      budget: "$1M - $1.5M",
      deadline: "October 2023",
      posted: "2023-06-20",
      applicants: 32,
      status: "urgent",
      description: "Expansion of existing hospital facility including specialized medical infrastructure and equipment installation",
      skills: ["Healthcare Construction", "Medical Infrastructure", "HVAC Systems"]
    },
    {
      id: 4,
      title: "School Renovation Project",
      client: "Education Board",
      location: "Town Center",
      budget: "$300,000 - $450,000",
      deadline: "November 2023",
      posted: "2023-07-07",
      applicants: 15,
      status: "active",
      description: "Comprehensive renovation of existing school building including classroom modernization and safety upgrades",
      skills: ["Educational Construction", "Safety Standards", "Renovation"]
    }
  ];

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Filter projects based on current filters
  const filteredProjects = projects.filter(project => {
    if (filters.projectType !== "all" && !project.title.toLowerCase().includes(filters.projectType.toLowerCase())) {
      return false;
    }
    
    if (filters.status !== "all" && project.status !== filters.status) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-projects" className="hover:text-[#FF4B55] text-[#FF4B55]">Projects</Link>
          <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
          <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary" className="flex items-center gap-2">
                <Plus size={18} />
                Post a Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="max-h-[calc(90vh-80px)] overflow-y-auto pr-2">
                <PostProjectForm />
              </div>
            </DialogContent>
          </Dialog>
          <Link to="/professional-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-6xl flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Available Projects</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Post a Project</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="max-h-[calc(90vh-80px)] overflow-y-auto pr-2">
                <PostProjectForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-full md:w-1/4">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Project Type</h3>
              <div className="space-y-2">
                {["All Types", "Commercial", "Residential", "Healthcare", "Educational", "Industrial"].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="radio"
                      id={`type-${type}`}
                      name="projectType"
                      checked={filters.projectType === type.toLowerCase() || (type === "All Types" && filters.projectType === "all")}
                      onChange={() => handleFilterChange("projectType", type === "All Types" ? "all" : type.toLowerCase())}
                      className="h-4 w-4 text-[#FF4B55] border-gray-300 focus:ring-[#FF4B55]"
                    />
                    <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Status</h3>
              <div className="space-y-2">
                {["All Status", "Active", "Urgent"].map((status) => (
                  <div key={status} className="flex items-center">
                    <input
                      type="radio"
                      id={`status-${status}`}
                      name="status"
                      checked={filters.status === status.toLowerCase() || (status === "All Status" && filters.status === "all")}
                      onChange={() => handleFilterChange("status", status === "All Status" ? "all" : status.toLowerCase())}
                      className="h-4 w-4 text-[#FF4B55] border-gray-300 focus:ring-[#FF4B55]"
                    />
                    <label htmlFor={`status-${status}`} className="ml-2 text-sm text-gray-700">
                      {status}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Sort By</h3>
              <select className="w-full border border-gray-300 rounded p-2 text-sm">
                <option>Latest First</option>
                <option>Budget: High to Low</option>
                <option>Budget: Low to High</option>
                <option>Deadline: Closest First</option>
              </select>
            </div>
          </div>
          
          {/* Main Content - Project Listings */}
          <div className="w-full md:w-3/4">
            {filteredProjects.map(project => (
              <div key={project.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === 'urgent' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status === 'urgent' ? 'Urgent' : 'Active'}
                    </span>
                    <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>{project.client}</span>
                      <span className="mx-2">•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FF4B55] font-bold">{project.budget}</div>
                    <div className="text-sm text-gray-500">Posted {
                      new Date(project.posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                    }</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 text-sm text-gray-500">
                    <span>Deadline: {project.deadline}</span>
                    <span>{project.applicants} Applicants</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/project-view/${project.id}`}>
                      <Button variant="outline" className="text-[#FF4B55] border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="primary">
                      Save Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfessionalProjects;
