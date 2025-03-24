// Fix the Button component without motion properties
// The error was with whileHover and whileTap props which shouldn't be directly on the Button
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User, Building, ChevronLeft, Briefcase, MapPin, Hammer, ClipboardList } from "lucide-react";
import { useProjectContext } from "@/components/PostProjectForm";

const CompanyProfile: React.FC = () => {
  const { projects } = useProjectContext();
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex space-x-6 ml-12">
          <Link to="/contractor-dashboard" className="hover:text-[#FF4B55] transition-colors">Dashboard</Link>
          <Link to="/elite-construction-project" className="hover:text-[#FF4B55] transition-colors">Projects</Link>
          <Link to="/workers" className="hover:text-[#FF4B55] transition-colors">Workers</Link>
          <Link to="/analytics" className="hover:text-[#FF4B55] transition-colors">Analytics</Link>
          <Link to="/posted-jobs" className="hover:text-[#FF4B55] transition-colors">Posted Jobs</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="primary" 
            className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
          >
            <Link to="/worker-profile">View Profile</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <Link to="/contractor-dashboard" className="inline-flex items-center mb-6 text-[#004A57] hover:text-[#FF4B55] transition-colors">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Elite Construction Ltd.</h1>
            <Button 
              variant="primary" 
              className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
            >
              Edit Profile
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-gray-100 mb-6 h-auto rounded-lg">
              <TabsTrigger 
                value="overview" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'overview' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="postedJobs" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'postedJobs' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Posted Jobs
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'analytics' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                  <p className="text-gray-600 mb-4">
                    Elite Construction Ltd. is a leading construction company specializing in commercial and residential projects. With over 20 years of experience, we are committed to delivering high-quality results and innovative solutions.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Industry: Construction</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Location: San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Founded: 2003</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <p className="text-gray-600 mb-4">
                    For inquiries, please contact us using the details below.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Contact Person: John Doe</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Email: info@eliteconstruction.com</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Phone: (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="postedJobs" className="mt-0">
              <div>
                <h3 className="text-lg font-semibold mb-4">Posted Jobs</h3>
                {projects && projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-md mb-2">{project.title}</h4>
                        <p className="text-gray-500 text-sm mb-3">{project.jobDescription}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[#004A57] font-bold">{project.hourlyRate}/hr</span>
                          <Link to={`/project-detail-view/${project.id}`}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-[#FF4B55] border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white transition-colors duration-300"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ClipboardList className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-500">No jobs posted yet.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div>
                <h3 className="text-lg font-semibold mb-4">Analytics</h3>
                <p className="text-gray-600">
                  Here you can view analytics related to your company's performance.
                </p>
                <p className="text-gray-500">
                  (Placeholder for analytics content)
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
