import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, User, Search, Check, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Mock worker data
const availableWorkers = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Senior Carpenter",
    experience: "8 years",
    status: "Active",
    currentProject: "Skyline Tower",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Electrician",
    experience: "5 years",
    status: "On Leave",
    currentProject: "Harbor Point",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Plumber",
    experience: "12 years",
    status: "Active",
    currentProject: "Metro Station",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Heavy Equipment Operator",
    experience: "6 years",
    status: "Active",
    currentProject: "City Center",
    image: "/placeholder.svg"
  }
];

const applicants = [
  {
    id: 5,
    name: "Robert Miller",
    role: "Concrete Specialist",
    experience: "10 years",
    appliedFor: "Retail Center Remodel",
    image: "/placeholder.svg",
    status: "Pending"
  },
  {
    id: 6,
    name: "Lisa Garcia",
    role: "HVAC Technician",
    experience: "7 years",
    appliedFor: "Commercial Building Project",
    image: "/placeholder.svg",
    status: "Pending"
  }
];

const Workers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("active");
  
  const filteredWorkers = availableWorkers.filter(worker => 
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredApplicants = applicants.filter(applicant => 
    applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    applicant.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
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
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <Users className="mr-2 h-6 w-6 text-[#004A57]" /> 
              Worker Management
            </h1>
            <p className="text-gray-600">Manage your current workers and review applications</p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search workers..." 
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
            <div className="px-6 border-b border-gray-200">
              <TabsList className="bg-transparent h-auto">
                <TabsTrigger 
                  value="active" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Active Workers
                </TabsTrigger>
                <TabsTrigger 
                  value="applicants" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Applicants {filteredApplicants.length > 0 && <Badge className="ml-2 bg-[#FF4B55]">{filteredApplicants.length}</Badge>}
                </TabsTrigger>
                <TabsTrigger 
                  value="appointed" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Appointed Workers
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="active" className="mt-0">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#004A57]">Active Workers <Badge className="ml-2 bg-[#004A57]">{filteredWorkers.length}</Badge></h2>
                  <Button variant="outline" className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white transition-all duration-300 hover:scale-105">
                    Filter Workers
                  </Button>
                </div>
                
                {filteredWorkers.length > 0 ? (
                  <div className="space-y-4">
                    {filteredWorkers.map((worker) => (
                      <motion.div 
                        key={worker.id}
                        className="border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:border-[#FF4B55] transition-all duration-300"
                        whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={worker.image} alt={worker.name} />
                            <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{worker.name}</h3>
                              <Badge className={`ml-3 ${worker.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                                {worker.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500">{worker.role} • {worker.experience}</p>
                            <p className="text-xs text-gray-500">Current Project: {worker.currentProject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#FF4B55]">
                            review
                          </Button>
                          <Link to={`/worker-profile/${worker.id}`}>
                            <Button variant="outline" size="sm" className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white">
                              View Profile →
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <User className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium text-gray-600">No Active Workers Found</h3>
                    <p className="text-gray-500">
                      {searchTerm ? "Try adjusting your search terms" : "Add workers to your team"}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="applicants" className="mt-0">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#004A57]">Workers Applications <Badge className="ml-2 bg-[#004A57]">{filteredApplicants.length}</Badge></h2>
                </div>
                
                {filteredApplicants.length > 0 ? (
                  <div className="space-y-4">
                    {filteredApplicants.map((applicant) => (
                      <motion.div 
                        key={applicant.id}
                        className="border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:border-[#FF4B55] transition-all duration-300"
                        whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={applicant.image} alt={applicant.name} />
                            <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{applicant.name}</h3>
                              <Badge className="ml-3 bg-yellow-100 text-yellow-800">
                                {applicant.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500">{applicant.role} • {applicant.experience}</p>
                            <p className="text-xs text-gray-500">Applied For: {applicant.appliedFor}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
                          >
                            <Check className="mr-1 h-4 w-4" /> Accept
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105"
                          >
                            <X className="mr-1 h-4 w-4" /> Reject
                          </Button>
                          <Link to={`/worker-profile/${applicant.id}`}>
                            <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300 hover:scale-105">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <User className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium text-gray-600">No Worker Applications</h3>
                    <p className="text-gray-500">
                      {searchTerm ? "Try adjusting your search terms" : "When workers apply to your projects, they will appear here"}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="appointed" className="mt-0">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#004A57]">Appointed Workers</h2>
                  <Link to="/appoint-workers">
                    <Button 
                      variant="primary" 
                      className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                    >
                      Appoint Workers
                    </Button>
                  </Link>
                </div>
                
                <div className="text-center py-8">
                  <Users className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium text-gray-600">No Workers Appointed Yet</h3>
                  <p className="text-gray-500 mb-4">
                    Assign workers to projects to see them listed here
                  </p>
                  <Link to="/appoint-workers">
                    <Button 
                      variant="primary" 
                      className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                    >
                      Appoint Workers
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Workers;
