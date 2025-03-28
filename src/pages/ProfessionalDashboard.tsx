
import React from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import PostProjectForm from "@/components/PostProjectForm";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { useProjectContext } from "@/components/PostProjectForm";

const ProfessionalDashboard: React.FC = () => {
  const { projects } = useProjectContext();

  return (
    <div className="min-h-screen bg-[#F6F6F7] flex flex-col">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/professional-dashboard" className="text-[#FF4B55]">Dashboard</Link>
            <Link to="/professional-projects" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
            <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="bg-[#FF4B55] text-white px-4 py-2 rounded hover:bg-[#E43F49] transition-colors">
                  Post Project
                </button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <DialogTitle>Post Your Project</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new project.
              </DialogDescription>
              <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-2">
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
      <main className="container mx-auto py-8 px-4 flex-grow">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-[#121224]">My Projects</h1>
          <p className="text-[#717B9E]">Manage your posted construction projects</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex-grow">
            <input 
              type="text" 
              placeholder="Search your projects..." 
              className="w-full p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <select className="p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors">
              <option>All Categories</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="bg-[#FF4B55] text-white px-6 py-3 rounded hover:bg-[#E43F49] transition-colors">
              Search
            </button>
          </motion.div>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex gap-2 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="bg-[#004A57] text-white px-3 py-1 rounded-full text-sm">All Projects</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer">Active</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer">Completed</span>
        </motion.div>

        {/* Project Listings */}
        <div className="space-y-4">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div 
                key={project.id || index}
                className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <div className="flex justify-between mb-3">
                  <h2 className="text-lg font-semibold text-[#121224]">{project.title}</h2>
                  <span className="text-[#FF4B55] font-bold">${project.hourlyRate}</span>
                </div>
                <p className="text-[#717B9E] mb-4">{project.jobDescription?.substring(0, 150)}...</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{project.projectType}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{project.location}</span>
                  </div>
                  <Link to={`/project-view/1`} className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
              <p className="text-gray-500 mb-4">You haven't posted any projects yet. Create your first project to get started!</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#FF4B55] text-white px-4 py-2 rounded hover:bg-[#E43F49] transition-colors">
                    Post Your First Project
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                  <DialogTitle>Post Your Project</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to create a new project.
                  </DialogDescription>
                  <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-2">
                    <PostProjectForm />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <div>
            <p className="text-2xl font-bold text-[#121224]">{projects?.length || 0}</p>
            <p className="text-[#717B9E]">Active Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">42</p>
            <p className="text-[#717B9E]">Applications Received</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">8</p>
            <p className="text-[#717B9E]">Workers Hired</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">4.8/5</p>
            <p className="text-[#717B9E]">Average Rating</p>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfessionalDashboard;
