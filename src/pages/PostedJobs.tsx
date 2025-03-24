
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Plus, Clock, User, Filter, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostProjectForm from "@/components/PostProjectForm";
import { useProjectContext } from "@/components/PostProjectForm";
import { motion } from "framer-motion";

const PostedJobs: React.FC = () => {
  const { projects } = useProjectContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    projectType: "all",
    status: "all"
  });
  
  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Filter projects based on current filters
  const filteredProjects = projects.filter(project => {
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (filters.projectType !== "all" && !project.category?.toLowerCase().includes(filters.projectType.toLowerCase())) {
      return false;
    }
    
    if (filters.status !== "all" && project.status !== filters.status) {
      return false;
    }
    
    return true;
  });

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
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55] transition-colors">Dashboard</Link>
            <Link to="/elite-construction-project" className="hover:text-[#FF4B55] transition-colors">Projects</Link>
            <Link to="/workers" className="hover:text-[#FF4B55] transition-colors">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55] transition-colors">Analytics</Link>
            <Link to="/posted-jobs" className="hover:text-[#FF4B55] text-[#FF4B55] transition-colors">Posted Jobs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="primary" 
                className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
              >
                <Plus className="mr-2 h-4 w-4" /> Post Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <PostProjectForm />
            </DialogContent>
          </Dialog>
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Posted Jobs</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="primary" 
                className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
              >
                <Plus className="mr-2 h-4 w-4" /> Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <PostProjectForm />
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
                  placeholder="Search jobs..."
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
                {["All Status", "Active", "Pending", "Completed"].map((status) => (
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
            {filteredProjects.length > 0 ? (
              <div className="space-y-6">
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.01, borderColor: "#FF4B55" }}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <p className="text-gray-500 text-sm">{project.location} • {project.employmentType}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[#004A57]">{project.hourlyRate}/hr</p>
                        <p className="text-xs text-gray-500">{project.timeline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 my-3 line-clamp-2">{project.jobDescription}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Posted {project.postedAt || "recently"}</span>
                        <User className="h-4 w-4 ml-3 mr-1" />
                        <span>{project.applicantsCount || 0} applicants</span>
                      </div>
                      
                      <Link to={`/project-detail-view/${project.id}`}>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-[#FF4B55] border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white transition-colors duration-300"
                        >
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-600 mb-2">No Jobs Found</h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery ? "No jobs match your search criteria." : "You haven't posted any jobs yet."}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="primary" 
                      className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300"
                    >
                      <Plus className="mr-2 h-4 w-4" /> Post Your First Job
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <PostProjectForm />
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostedJobs;
