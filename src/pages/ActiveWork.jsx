
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Briefcase } from "lucide-react";

const ActiveWork = () => {
  const [activeJobs, setActiveJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch active jobs from localStorage
    const fetchActiveJobs = () => {
      try {
        setLoading(true);
        const storedActiveJobs = localStorage.getItem("activeJobs");
        if (storedActiveJobs) {
          setActiveJobs(JSON.parse(storedActiveJobs));
        }
      } catch (error) {
        console.error("Error fetching active jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F6F7] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#004A57]"></div>
      </div>
    );
  }

  if (activeJobs.length === 0) {
    return (
      <div className="min-h-screen bg-[#F6F6F7]">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold mb-6">Active Work</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Briefcase className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">No Active Jobs</h2>
            <p className="text-gray-500 mb-6">
              You don't have any active jobs at the moment. Browse available jobs to find work.
            </p>
            <Link to="/jobs-near-you">
              <Button variant="primary">Find Jobs</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Active Work</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {activeJobs.map((job) => (
            <motion.div 
              key={job.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-lg font-bold">{job.title}</h2>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Start date: {job.startDate || "Immediate"}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-[#004A57] font-bold">{job.hourlyRate}/hr</div>
                  <Link to={`/active-work/${job.id}`}>
                    <Button variant="outline" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveWork;
