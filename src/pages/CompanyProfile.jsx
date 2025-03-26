
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Clock, Star, Users } from "lucide-react";

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-6">
          <Link to="/jobs-near-you" className="text-[#004A57] hover:underline flex items-center gap-1">
            <span>← Back to Jobs</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="bg-[#004A57] h-48 relative">
            <div className="absolute -bottom-16 left-8 w-32 h-32 bg-white rounded-lg border-4 border-white shadow-sm flex items-center justify-center">
              <span className="text-4xl font-bold text-[#004A57]">ABC</span>
            </div>
          </div>
          
          <div className="pt-20 pb-6 px-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">ABC Construction</h1>
                <p className="text-gray-600">Commercial Construction Company</p>
              </div>
              
              <motion.div 
                component={Button}
                variant="primary"
                className="bg-[#FF4B55] text-white px-4 py-2 rounded-lg"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-lg font-bold mb-4">About</h2>
                <p className="text-gray-700 mb-6">
                  ABC Construction is a leading commercial construction company with over 25 years of experience in delivering high-quality projects across the country. We specialize in commercial buildings, industrial facilities, and infrastructure projects.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>123 Construction Ave, Building City, ST 12345</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>info@abcconstruction.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <span>www.abcconstruction.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-bold mb-4">Company Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-medium">Founded</span>
                      <p>1998</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-medium">Company Size</span>
                      <p>201-500 employees</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-medium">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="ml-1">(4.2)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Open Positions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <Link to="/jobs-near-you/1" className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{`Construction ${i === 1 ? 'Worker' : i === 2 ? 'Manager' : 'Engineer'}`}</h3>
                    <p className="text-sm text-gray-600">Full-time • Posted 3 days ago</p>
                  </div>
                  <span className="text-[#004A57] font-bold">$35/hr</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
