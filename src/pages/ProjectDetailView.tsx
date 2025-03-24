
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Calendar, MapPin, Briefcase, Clock, Users, FileText, User, Building2, HardHat } from "lucide-react";
import ProjectApplication from "@/components/ProjectApplication";
import { useToast } from "@/hooks/use-toast";

const ProjectDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [showApplicationSuccess, setShowApplicationSuccess] = useState(false);
  const [applicationDialogOpen, setApplicationDialogOpen] = useState(false);
  
  // Mock project data
  const project = {
    id,
    title: "Skyline Commercial Tower Construction",
    client: "Elite Construction Ltd",
    location: "Downtown Area, San Francisco, CA",
    category: "Commercial",
    budget: "$800-$950/day",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    description: "A modern commercial tower featuring specialized design elements, state-of-the-art HVAC systems, premium electrical installations, eco-friendly fixtures, smart building technology, and LEED certification requirements.",
    status: "In Progress",
    timeline: {
      projectStarting: "Oct 2023",
      structureComplete: "Dec 2023",
      interiorComplete: "Mar 2024",
    },
    requiredWorkers: [
      {
        title: "Carpenters",
        description: "Commercial-grade cabinetry, fixtures, interior finishing and custom installations.",
        count: 10,
        rateRange: "$30-40/hr"
      },
      {
        title: "Electricians",
        description: "Experience in commercial installations. Smart building systems installation & configuration.",
        count: 8,
        rateRange: "$35-45/hr"
      },
      {
        title: "Plumbers",
        description: "Commercial plumbing expertise required. Knowledge of modern water management systems.",
        count: 6,
        rateRange: "$32-42/hr"
      }
    ],
    safetyRequirements: [
      "OSHA safety training certification",
      "PPE requirements (hard hat, safety boots, etc.)",
      "Daily safety briefings"
    ]
  };

  const handleApplicationSuccess = () => {
    setApplicationDialogOpen(false);
    setShowApplicationSuccess(true);
    toast({
      title: "Application Successful",
      description: "Your application has been submitted. We'll review it and get back to you soon."
    });
  };

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
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55] transition-colors">Dashboard</Link>
            <Link to="/elite-construction-project" className="hover:text-[#FF4B55] text-[#FF4B55] transition-colors">Projects</Link>
            <Link to="/workers" className="hover:text-[#FF4B55] transition-colors">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55] transition-colors">Analytics</Link>
            <Link to="/posted-jobs" className="hover:text-[#FF4B55] transition-colors">Posted Jobs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Link to="/elite-construction-project" className="text-[#004A57] hover:text-[#FF4B55] transition-colors">
              Projects
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate max-w-[200px] sm:max-w-xs">{project.title}</span>
          </div>
          
          <div className="flex gap-2">
            {showApplicationSuccess ? (
              <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-md">
                <Check className="h-4 w-4 mr-1" />
                <span className="text-sm">Application Submitted</span>
              </div>
            ) : (
              <Dialog open={applicationDialogOpen} onOpenChange={setApplicationDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="primary" 
                    className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                  >
                    Apply for Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <ProjectApplication 
                    projectId={project.id} 
                    projectTitle={project.title}
                    onSuccess={handleApplicationSuccess}
                    onCancel={() => setApplicationDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            )}
            <Link to="/appoint-workers">
              <Button 
                variant="outline" 
                className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300 hover:scale-105"
              >
                <HardHat className="mr-2 h-4 w-4" />
                Appoint Workers
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Project Image */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="aspect-video bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">
                Project Image
              </div>
              
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <MapPin className="h-4 w-4 mr-1" /> {project.location}
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <Building2 className="h-4 w-4 mr-1" /> {project.client}
              </div>
              
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Project Duration:</span>
                <span className="font-medium">{project.startDate} - {project.endDate}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Budget Range:</span>
                <span className="font-medium">{project.budget}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Project Status:</span>
                <span className="font-medium">{project.status}</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Project Starting</p>
                    <p className="text-gray-500 text-xs">{project.timeline.projectStarting}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Structure Complete</p>
                    <p className="text-gray-500 text-xs">{project.timeline.structureComplete}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Project Completion</p>
                    <p className="text-gray-500 text-xs">{project.timeline.interiorComplete}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Project Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full bg-gray-100 mb-6 h-auto rounded-lg">
                  <TabsTrigger 
                    value="details" 
                    className={`flex-1 rounded-none py-3 ${activeTab === 'details' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Project Details
                  </TabsTrigger>
                  <TabsTrigger 
                    value="workers" 
                    className={`flex-1 rounded-none py-3 ${activeTab === 'workers' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Required Workers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="safety" 
                    className={`flex-1 rounded-none py-3 ${activeTab === 'safety' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                  >
                    <HardHat className="h-4 w-4 mr-2" />
                    Safety Requirements
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Location</h3>
                      <div className="rounded-md bg-gray-100 h-40 flex items-center justify-center text-gray-500">
                        Map placeholder
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Link to="/elite-construction-project">
                        <Button 
                          variant="outline" 
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          Back to Projects
                        </Button>
                      </Link>
                      
                      {showApplicationSuccess ? (
                        <div className="flex items-center text-green-600 bg-green-50 px-3 py-2 rounded-md">
                          <Check className="h-4 w-4 mr-1" />
                          <span>Application Submitted</span>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="primary" 
                              className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                            >
                              Apply for Project
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <ProjectApplication 
                              projectId={project.id} 
                              projectTitle={project.title}
                              onSuccess={handleApplicationSuccess}
                            />
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="workers" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Required Workers</h3>
                    
                    {project.requiredWorkers.map((worker, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{worker.title}</h4>
                            <p className="text-sm text-gray-600">{worker.description}</p>
                          </div>
                          <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs whitespace-nowrap">
                            {worker.count} needed
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-4">
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Full Time</span>
                            <User className="h-4 w-4 ml-3 mr-1" />
                            <span>{worker.count} positions</span>
                          </div>
                          <div className="font-medium">{worker.rateRange}</div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex justify-between mt-4">
                      <Link to="/workers">
                        <Button 
                          variant="outline" 
                          className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          View Available Workers
                        </Button>
                      </Link>
                      
                      <Link to="/appoint-workers">
                        <Button 
                          variant="primary" 
                          className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                        >
                          <HardHat className="mr-2 h-4 w-4" />
                          Appoint Workers
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="safety" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Safety Requirements</h3>
                    
                    <ul className="space-y-3">
                      {project.safetyRequirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mt-0.5">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="ml-3">{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-medium text-blue-800 mb-2">Safety Compliance</h4>
                      <p className="text-blue-700 text-sm">
                        All workers must adhere to OSHA safety guidelines and complete site-specific safety training before beginning work. Daily safety meetings will be conducted.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailView;
