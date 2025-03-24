
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostProjectForm from "@/components/PostProjectForm";
import { useProjectContext } from "@/components/PostProjectForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Calendar, User, Building, ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

const EliteConstructionProject: React.FC = () => {
  const { projects } = useProjectContext();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/elite-construction-project" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="primary" 
                className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
              >
                <Plus className="mr-2 h-4 w-4" /> Post Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <PostProjectForm />
            </DialogContent>
          </Dialog>
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Elite Construction Ltd. Projects</h1>
            <p className="text-gray-600">Manage and post construction projects</p>
          </div>
          <div className="flex gap-3">
            <Link to="/company-profile">
              <Button 
                variant="outline" 
                className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Building className="mr-2 h-4 w-4" />
                View Company Profile
              </Button>
            </Link>
            <Link to="/workers">
              <Button 
                variant="outline" 
                className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Workers
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="primary" 
                  className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                >
                  <Plus className="mr-2 h-4 w-4" /> Post Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <PostProjectForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Active Projects</h2>
              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Active</div>
            </div>
            <p className="text-3xl font-bold">{projects.length || 0}</p>
            <p className="text-gray-500 text-sm mt-1">Currently in progress</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Workers Employed</h2>
              <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Current</div>
            </div>
            <p className="text-3xl font-bold">156</p>
            <p className="text-gray-500 text-sm mt-1">Across all projects</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">New Applications</h2>
              <div className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Pending</div>
            </div>
            <p className="text-3xl font-bold">45</p>
            <p className="text-gray-500 text-sm mt-1">Waiting for review</p>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Posted Projects</h2>
            <Link to="/company-profile?tab=postedJobs" className="text-[#FF4B55] hover:underline text-sm">
              View All Projects
            </Link>
          </div>

          {projects && projects.length > 0 ? (
            <div className="space-y-6">
              {projects.map((project) => (
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
            <div className="text-center py-10">
              <Building className="h-16 w-16 mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-600">No Projects Posted Yet</h3>
              <p className="text-gray-500 mb-4">Start by posting your first construction project</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="primary" 
                    className="bg-[#FF4B55] hover:bg-[#e03e48] transition-colors duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Post Your First Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <PostProjectForm />
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EliteConstructionProject;
