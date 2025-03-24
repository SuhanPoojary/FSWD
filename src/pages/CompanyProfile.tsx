
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useProjectContext } from "@/components/PostProjectForm";

const CompanyProfile: React.FC = () => {
  const { projects } = useProjectContext();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="primary" className="bg-[#FF4B55]">
            <Link to="/elite-construction-project">Post Project</Link>
          </Button>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Profile Header */}
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center md:w-1/3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 bg-gray-200 rounded-lg mb-4"></div>
            <h1 className="text-2xl font-bold text-center">Elite Construction Ltd</h1>
            <p className="text-gray-500 text-center mb-6">General Contractor</p>
            
            <div className="flex justify-between w-full mb-6">
              <div className="text-center">
                <p className="text-[#004A57] text-xl font-bold">24</p>
                <p className="text-gray-500 text-sm">Active Projects</p>
              </div>
              <div className="text-center">
                <p className="text-[#004A57] text-xl font-bold">156</p>
                <p className="text-gray-500 text-sm">Workers</p>
              </div>
            </div>
            
            <Link to="/contractor-dashboard" className="w-full">
              <Button variant="outline" className="w-full border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white">
                Back to Dashboard
              </Button>
            </Link>
            
            <Link to="/contractor-dashboard" className="w-full mt-2">
              <Button variant="outline" className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                Log Out
              </Button>
            </Link>
          </motion.div>
          
          {/* Company Information */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="border-b border-gray-200 mb-6 pb-4">
              <div className="flex space-x-6">
                <button className="text-[#FF4B55] font-medium border-b-2 border-[#FF4B55] pb-2">Company Info</button>
                <button className="text-gray-500 hover:text-[#FF4B55] pb-2">Posted Jobs</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">
                Elite Construction Ltd is a leading construction company with over 20 years of experience in commercial and residential projects. We specialize in high-rise buildings, commercial complexes, and infrastructure development.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="text-[#FF4B55]" size={18} />
                  <span>123 Construction Ave, Toronto, ON M5V 2T6</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="text-[#FF4B55]" size={18} />
                  <span>(416) 555-0123</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="text-[#FF4B55]" size={18} />
                  <span>info@eliteconstruction.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Company Stats</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#004A57] text-2xl font-bold">150+</p>
                  <p className="text-gray-500">Projects Completed</p>
                </div>
                <div>
                  <p className="text-[#004A57] text-2xl font-bold">20+</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-[#004A57] text-2xl font-bold">98%</p>
                  <p className="text-gray-500">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
