
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building, Calendar, User, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useProjectContext } from "@/components/PostProjectForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyProfile: React.FC = () => {
  const { projects } = useProjectContext();
  const [activeTab, setActiveTab] = useState("companyInfo");
  
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
          <Button 
            variant="primary" 
            className="bg-[#FF4B55] hover:bg-[#e03e48] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/elite-construction-project">Post Project</Link>
          </Button>
          <Link to="/contractor-dashboard">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
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
              <Button 
                variant="outline" 
                className="w-full border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white transition-colors duration-300"
              >
                Back to Dashboard
              </Button>
            </Link>
            
            <Link to="/login" className="w-full mt-2">
              <Button 
                variant="outline" 
                className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-colors duration-300"
              >
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
            <Tabs defaultValue="companyInfo" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-gray-200 mb-6 pb-4">
                <TabsList className="bg-transparent space-x-6">
                  <TabsTrigger 
                    value="companyInfo" 
                    className={activeTab === 'companyInfo' ? "text-[#FF4B55] border-b-2 border-[#FF4B55] pb-2" : "text-gray-500 hover:text-[#FF4B55] pb-2"}
                  >
                    Company Info
                  </TabsTrigger>
                  <TabsTrigger 
                    value="postedJobs" 
                    className={activeTab === 'postedJobs' ? "text-[#FF4B55] border-b-2 border-[#FF4B55] pb-2" : "text-gray-500 hover:text-[#FF4B55] pb-2"}
                  >
                    Posted Jobs
                  </TabsTrigger>
                </TabsList>
              </div>
            
              <TabsContent value="companyInfo" className="mt-0">
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
              </TabsContent>
              
              <TabsContent value="postedJobs" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Posted Jobs</h2>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-colors duration-300"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Filter Jobs
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="rounded-md mb-4 w-full">
                      <input
                        type="text"
                        placeholder="Search jobs by title or location..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {projects && projects.length > 0 ? (
                      projects.map((project) => (
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
                                View Details →
                              </Button>
                            </Link>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-10">
                        <Building className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                        <h3 className="text-lg font-medium text-gray-600">No Jobs Posted Yet</h3>
                        <p className="text-gray-500 mb-4">Start posting jobs to find workers for your projects</p>
                        <Link to="/elite-construction-project">
                          <Button 
                            variant="primary" 
                            className="bg-[#FF4B55] hover:bg-[#e03e48] transition-colors duration-300"
                          >
                            Post Your First Job
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
