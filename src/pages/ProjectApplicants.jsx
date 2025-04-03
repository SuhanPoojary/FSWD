
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calendar, MapPin, Clock, User, Building, ArrowLeft, Check, X } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useProjectContext } from "../components/PostProjectForm";
import { motion } from "framer-motion";

// Mock applicant data - in a real app, this would come from an API
const mockApplicants = [
  {
    id: 1,
    name: "John Carpenter",
    title: "Senior Construction Manager",
    location: "Toronto, ON",
    experience: "12 years",
    rating: 4.8,
    hourlyRate: "$35-45",
    avatar: "/placeholder.svg",
    skills: ["Project Management", "Residential", "Commercial"],
    applied: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    title: "Electrical Contractor",
    location: "Vancouver, BC",
    experience: "8 years",
    rating: 4.7,
    hourlyRate: "$30-40",
    avatar: "/placeholder.svg",
    skills: ["Electrical", "Industrial", "Building Code"],
    applied: "1 day ago"
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "General Contractor",
    location: "Montreal, QC",
    experience: "15 years",
    rating: 4.9,
    hourlyRate: "$40-50",
    avatar: "/placeholder.svg",
    skills: ["Residential", "Renovations", "Project Planning"],
    applied: "3 days ago"
  }
];

const ProjectApplicants: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id.toString() === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F6F7]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/professional-dashboard">
            <Button variant="primary">Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleHire = (applicantId: number) => {
    toast({
      title: "Contractor Hired",
      description: "You've successfully hired this contractor.",
    });
  };
  
  const handleReject = (applicantId: number) => {
    toast({
      title: "Application Rejected",
      description: "You've rejected this contractor's application.",
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
            <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/professional-projects" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
            <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/professional-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
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
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Project
          </Button>
        </div>
      
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold">Applicants for: {project.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
              
              <span className="mx-2">•</span>
              
              <Badge variant="outline" className="bg-gray-50">
                {project.projectType}
              </Badge>
              
              <span className="mx-2">•</span>
              
              <Badge 
                className={`${
                  project.status === 'active' ? 'bg-green-100 text-green-700' :
                  project.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                  project.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                } border-0`}
              >
                {project.status === 'active' ? 'Active' :
                 project.status === 'completed' ? 'Completed' :
                 project.status === 'cancelled' ? 'Cancelled' : 'Posted'}
              </Badge>
            </div>
          </div>
        </motion.div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Contractors who applied ({mockApplicants.length})</h2>
          
          {mockApplicants.map((applicant, index) => (
            <motion.div 
              key={applicant.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#FF4B55] transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                    <img src={applicant.avatar} alt={applicant.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{applicant.name}</h3>
                      <p className="text-gray-600">{applicant.title}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{applicant.location}</span>
                        <span className="mx-1">•</span>
                        <span>{applicant.experience} experience</span>
                        <span className="mx-1">•</span>
                        <span>Applied {applicant.applied}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 md:mt-0 text-right">
                      <div className="text-lg font-bold text-[#004A57]">{applicant.hourlyRate}/hr</div>
                      <div className="text-sm text-yellow-500">★ {applicant.rating}/5</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {applicant.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end">
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => handleReject(applicant.id)}
                    >
                      <X className="h-4 w-4 mr-2" /> Reject
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      onClick={() => handleHire(applicant.id)}
                    >
                      <Check className="h-4 w-4 mr-2" /> Hire
                    </Button>
                    <Link to={`/contractor-profile/${applicant.id}`}>
                      <Button variant="outline">View Profile</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {mockApplicants.length === 0 && (
            <div className="text-center py-10 bg-white rounded-lg shadow-sm">
              <User className="h-16 w-16 mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-600">No Applicants Yet</h3>
              <p className="text-gray-500 mb-4">
                When contractors apply to your project, they will appear here.
              </p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <div className="bg-[#004A57] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LabourNet</h3>
              <p className="text-gray-300 text-sm">
                Connecting skilled professionals with contractors for construction projects across Canada.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/professional-dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
                <li><Link to="/professional-projects" className="text-gray-300 hover:text-white">My Projects</Link></li>
                <li><Link to="/professional-profile" className="text-gray-300 hover:text-white">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300 text-sm">
                support@labournet.com<br />
                1-800-555-5555<br />
                123 Construction Ave, Toronto, ON
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            © 2023 LabourNet. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectApplicants;
