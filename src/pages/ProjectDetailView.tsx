
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, User, Building, ArrowLeft, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useProjectContext } from "@/components/PostProjectForm";
import { motion } from "framer-motion";

const ProjectDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, removeProject } = useProjectContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id.toString() === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F6F7]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/elite-construction-project">
            <Button variant="primary">Return to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleRemoveProject = () => {
    removeProject(Number(id));
    toast({
      title: "Project Removed",
      description: "The project has been successfully removed.",
    });
    navigate("/elite-construction-project");
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
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contractor-dashboard">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-5xl">
        {/* Back button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#004A57]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </div>
      
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                  
                  <span className="mx-2">•</span>
                  
                  <Badge variant="outline" className="bg-gray-50">
                    {project.projectType}
                  </Badge>
                  
                  <span className="mx-2">•</span>
                  
                  <Badge variant="outline" className="bg-gray-50">
                    {project.employmentType}
                  </Badge>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-[#004A57]">{project.hourlyRate}/hr</div>
                <div className="text-sm text-gray-500">{project.timeline} project</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Posted {project.postedAt || "recently"}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>Expires in {project.expiresAfter} days</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                <span>{project.applicantsCount || 0} applicants</span>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="details" className="w-full">
            <div className="px-6 border-b border-gray-200">
              <TabsList className="bg-transparent mb-0 h-auto">
                <TabsTrigger 
                  value="details" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Project Details
                </TabsTrigger>
                <TabsTrigger 
                  value="applications" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Applications
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="details" className="p-6 mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">Project Description</h2>
                  <p className="text-gray-700 whitespace-pre-line">{project.jobDescription}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-3">Requirements</h2>
                  <p className="text-gray-700 whitespace-pre-line">{project.requirements}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-3">Company</h2>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{project.company}</h3>
                      <Link 
                        to="/company-profile" 
                        className="text-[#FF4B55] text-sm hover:underline"
                      >
                        View Company Profile
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                    onClick={handleRemoveProject}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Remove Project
                  </Button>
                  <Button variant="outline" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                    Edit Project
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="p-6 mt-0">
              <div className="text-center py-8">
                <User className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-600">No Applications Yet</h3>
                <p className="text-gray-500">
                  {project.applicantsCount ? 
                    "Applications need to be reviewed." : 
                    "When professionals apply to your project, they will appear here."}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetailView;
