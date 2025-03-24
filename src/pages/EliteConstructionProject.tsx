
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, ArrowLeft, ArrowRight, Building, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostProjectForm from "@/components/PostProjectForm";
import { motion } from "framer-motion";
import { useProjectContext } from "@/components/PostProjectForm";

const EliteConstructionProject: React.FC = () => {
  const { projects } = useProjectContext();
  const [page, setPage] = useState(1);
  
  // Base projects data
  const baseProjects = [
    {
      id: 1,
      name: "Retail Center Remodel",
      type: "Commercial",
      location: "Oakland, CA",
      timeline: "Oct 15 - Nov 30",
      workersNeeded: 15,
      workersHired: 12,
      image: "/public/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
    },
    {
      id: 2,
      name: "Custom Home Construction",
      type: "Residential",
      location: "Denver, CO",
      timeline: "Sep 1 - Dec 15",
      workersNeeded: 10,
      workersHired: 8,
      image: "/public/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
    },
    {
      id: 3,
      name: "Warehouse Expansion",
      type: "Industrial",
      location: "Phoenix, AZ",
      timeline: "Nov 1 - Jan 15",
      workersNeeded: 20,
      workersHired: 15,
      image: "/public/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
    },
    {
      id: 4,
      name: "Skyline Commercial Tower",
      type: "Commercial",
      location: "Downtown Toronto, ON",
      timeline: "Oct 1 - Mar 30",
      workersNeeded: 85,
      workersHired: 85,
      image: "/public/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
    }
  ];
  
  // Combine base projects with any newly added projects
  const allProjects = [...baseProjects, ...projects.map(p => ({
    id: p.id,
    name: p.title,
    type: p.projectType || "Commercial",
    location: p.location,
    timeline: `${new Date().toLocaleDateString()} - ${p.timeline}`,
    workersNeeded: 10,
    workersHired: 0,
    image: "/public/lovable-uploads/9a9ec47f-9e06-4682-9ecf-5a5110bff90e.png"
  }))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-6">
          <Link to="/contractor-dashboard" className="text-gray-600 hover:text-[#FF4B55] flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-[#121224]">Elite Construction Ltd. Projects</h1>
          <p className="text-gray-600">Manage your projects and track worker applications</p>
        </div>

        {/* Project Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Active Projects</h3>
            <p className="text-2xl font-bold">{allProjects.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Applications</h3>
            <p className="text-2xl font-bold">48</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Hired Workers</h3>
            <p className="text-2xl font-bold">36</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Avg. Time-to-Hire</h3>
            <p className="text-2xl font-bold">5 days</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button variant="primary" className="flex items-center gap-2 transition-colors duration-300 bg-[#FF4B55] hover:bg-[#c13941]">
                  <Plus size={18} /> Post New Project
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <PostProjectForm />
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="border-[#004A57] text-[#004A57] flex items-center gap-2">
            <Users size={18} /> View All Workers
          </Button>
          <Button variant="outline" className="border-[#004A57] text-[#004A57] flex items-center gap-2">
            <Building size={18} /> Manage Projects
          </Button>
        </motion.div>

        {/* Current Projects */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Current Projects</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-4 text-gray-600 font-medium">Project Name</th>
                  <th className="p-4 text-gray-600 font-medium">Location</th>
                  <th className="p-4 text-gray-600 font-medium">Timeline</th>
                  <th className="p-4 text-gray-600 font-medium">Workers Needed</th>
                  <th className="p-4 text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map(project => (
                  <tr key={project.id} className="border-t border-gray-100">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded"></div>
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-gray-500 text-sm">{project.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-gray-400" />
                        <span>{project.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" />
                        <span>{project.timeline}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-gray-400" />
                        <span>{project.workersHired} / {project.workersNeeded}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                          <Link to={`/project-detail-view/${project.id}`}>View</Link>
                        </Button>
                        <Button variant="primary" size="sm">
                          Manage
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">Showing {allProjects.length} of {allProjects.length} projects</div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#004A57] text-[#004A57]"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                <ArrowLeft size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#004A57] text-[#004A57]"
                onClick={() => setPage(page + 1)}
                disabled={page * 5 >= allProjects.length}
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

// Fix missing import
const Plus: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default EliteConstructionProject;
