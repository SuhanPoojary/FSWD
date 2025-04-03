
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Star, MapPin, Calendar, LogOut, Briefcase, MessageSquare, CheckCircle } from "lucide-react";

const ProfessionalProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");
  
  // Mock profile data
  const profile = {
    name: "Michael Anderson",
    title: "Expert Builder",
    description: "An Expert with 12 years of experience in residential and commercial construction.",
    stats: {
      projects: 127,
      satisfaction: 98,
      experience: 12
    },
    certifications: [
      "Master General Contractor",
      "OSHA Safety Certified",
      "Historic Restoration Specialist"
    ],
    projects: [
      {
        id: 1,
        title: "Luxury Home Restoration",
        description: "Complete renovation of a high-end, historic home featuring custom finishes and detailed carpentry",
        rating: 4.9,
        completedDate: "Aug 2023",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Commercial Plaza Construction",
        description: "New construction of a 3-story retail plaza with modern design elements and eco-friendly systems",
        rating: 4.8,
        completedDate: "May 2023",
        image: "/placeholder.svg"
      }
    ],
    workHistory: [
      {
        company: "Heritage Restoration Inc.",
        description: "Lead for high-end residential and commercial restoration projects. Specialized in fine finish carpentry and historical restoration techniques."
      }
    ]
  };

  const handleLogout = () => {
    navigate("/login?role=professional");
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-projects" className="hover:text-[#FF4B55]">Find Projects</Link>
          <Link to="/professional-profile" className="hover:text-[#FF4B55] text-[#FF4B55]">My Profile</Link>
          <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 bg-gray-300">
            <AvatarImage src="/placeholder.svg" alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Profile Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6 flex flex-col items-center">
              <Avatar className="h-20 w-20 border-2 border-[#FF4B55] mb-4">
                <AvatarImage src="/placeholder.svg" alt={profile.name} />
                <AvatarFallback className="text-xl">{profile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <h1 className="text-xl font-bold mb-1">{profile.name}</h1>
              <div className="bg-[#004A57] text-white text-xs px-3 py-1 rounded-full mb-2">
                {profile.title}
              </div>
              
              <p className="text-sm text-gray-600 text-center mb-6">
                {profile.description}
              </p>
              
              <div className="grid grid-cols-3 w-full gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">{profile.stats.projects}</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">{profile.stats.satisfaction}%</p>
                  <p className="text-xs text-gray-500">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">{profile.stats.experience}yr</p>
                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full bg-[#FF4B55] text-white hover:bg-[#E43F49] border-[#FF4B55]"
                onClick={() => navigate("/professional-edit-profile")}
              >
                Edit Profile
              </Button>
              <Link to="/professional-resume" className="mt-4 text-sm text-[#004A57] hover:underline">
                Download Resume
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Certifications</h2>
              <ul className="space-y-3">
                {profile.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#004A57] mt-0.5" />
                    <span className="text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button
              variant="outline"
              className="w-full text-[#FF4B55] border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </div>
          
          {/* Right Column - Tabs Content */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="projects" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full bg-white mb-6 p-0 h-auto rounded-lg">
                <TabsTrigger 
                  value="projects" 
                  className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'projects' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Projects (127)
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'reviews' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Reviews (83)
                </TabsTrigger>
                <TabsTrigger 
                  value="availability" 
                  className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'availability' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Availability
                </TabsTrigger>
                <TabsTrigger 
                  value="applications" 
                  className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'applications' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Incoming applications
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="mt-0 space-y-6">
                {profile.projects.map(project => (
                  <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-40 bg-gray-200">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill={i < Math.floor(project.rating) ? "#FF4B55" : "none"} className="h-4 w-4 text-[#FF4B55]" />
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Completed {project.completedDate}</span>
                        <Link to={`/project-details/${project.id}`} className="text-[#FF4B55] text-sm hover:underline">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-3">Work History & Experience</h3>
                  {profile.workHistory.map((work, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-4 w-4 text-gray-500" />
                        <h4 className="font-medium">{work.company}</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{work.description}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/professional-projects" 
                  className="block text-center p-3 bg-[#FF4B55] text-white rounded-lg hover:bg-[#E43F49] transition-colors"
                >
                  Available Projects
                </Link>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Client Reviews</h3>
                  <p className="text-gray-600">Reviews from clients will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="availability">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Availability Settings</h3>
                  <p className="text-gray-600">Manage your availability for new projects here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="applications">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Job Applications</h3>
                  <p className="text-gray-600">Manage your submitted job applications here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalProfile;
