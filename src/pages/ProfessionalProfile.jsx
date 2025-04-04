
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Star, MapPin, Calendar, LogOut, Briefcase, MessageSquare, CheckCircle } from "lucide-react";

const ProfessionalProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem("professionalProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // If no profile exists, redirect to create one
      navigate("/professional-portfolio");
    }
  }, [navigate]);

  // If profile is still loading
  if (!profile) {
    return <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">Loading profile...</div>;
  }

  const handleLogout = () => {
    navigate("/login?role=professional");
  };

  // Get initial for avatar fallback
  const getInitials = () => {
    return profile?.fullName ? profile.fullName.charAt(0).toUpperCase() : "P";
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
            <AvatarImage src={profile.profileImage} alt={profile.fullName} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
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
                <AvatarImage src={profile.profileImage} alt={profile.fullName} />
                <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
              </Avatar>
              
              <h1 className="text-xl font-bold mb-1">{profile.fullName}</h1>
              <div className="bg-[#004A57] text-white text-xs px-3 py-1 rounded-full mb-2">
                {profile.specialization || "Professional Builder"}
              </div>
              
              <p className="text-sm text-gray-600 text-center mb-6">
                {profile.bio || "Professional builder with expertise in construction services."}
              </p>
              
              <div className="grid grid-cols-3 w-full gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">{profile.pastProjects?.length || 0}</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">98%</p>
                  <p className="text-xs text-gray-500">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#FF4B55]">{profile.yearsExperience || 0}yr</p>
                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full bg-[#FF4B55] text-white hover:bg-[#E43F49] border-[#FF4B55]"
                onClick={() => navigate("/professional-portfolio")}
              >
                Edit Profile
              </Button>
              <Link to="/professional-resume" className="mt-4 text-sm text-[#004A57] hover:underline">
                Download Resume
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Skills & Expertise</h2>
              <ul className="space-y-3">
                {profile.specialization && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#004A57] mt-0.5" />
                    <span className="text-sm">{profile.specialization} (Primary)</span>
                  </li>
                )}
                {profile.skills && profile.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#004A57] mt-0.5" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
                {(!profile.skills || profile.skills.length === 0) && !profile.specialization && (
                  <li className="text-sm text-gray-500">No skills listed yet</li>
                )}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Contact Information</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#004A57]" />
                  <span className="text-sm">{profile.location || "Location not specified"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-[#004A57]" />
                  <span className="text-sm">{profile.email || "Email not provided"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#004A57]" />
                  <span className="text-sm">₹{profile.hourlyRate || "N/A"} hourly rate</span>
                </div>
              </div>
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
                  Projects ({profile.pastProjects?.length || 0})
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'reviews' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Reviews (0)
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
                {profile.pastProjects && profile.pastProjects.length > 0 ? (
                  profile.pastProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-40 bg-gray-200">
                        <img src="/placeholder.svg" alt={project.title || project.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 md:w-2/3">
                        <h3 className="font-bold mb-2">{project.title || project.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill={i < 4 ? "#FF4B55" : "none"} className="h-4 w-4 text-[#FF4B55]" />
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Completed {project.year}</span>
                          <Link to={`/project-details/${idx}`} className="text-[#FF4B55] text-sm hover:underline">
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <p className="text-gray-600 mb-4">No past projects have been added yet.</p>
                    <Button 
                      variant="outline" 
                      className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                      onClick={() => navigate("/professional-portfolio")}
                    >
                      Add Projects
                    </Button>
                  </div>
                )}
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-3">Work Experience</h3>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <h4 className="font-medium">{profile.businessName || profile.fullName + "'s Services"}</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      {profile.bio || "Professional with experience in construction services."}
                    </p>
                  </div>
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
                  <p className="text-gray-600">No reviews yet. Complete projects to receive client feedback.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="availability">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Availability Settings</h3>
                  <p className="text-gray-600 mb-4">Set your availability for new projects here.</p>
                  <div className="p-4 border border-gray-200 rounded-md mb-4">
                    <h4 className="font-medium mb-2">Service Radius</h4>
                    <p className="text-sm text-gray-600">
                      {profile.serviceRadius ? `${profile.serviceRadius} km` : "Not specified"}
                    </p>
                  </div>
                  <Button className="w-full bg-[#004A57] hover:bg-[#003540]">
                    Update Availability
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="applications">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Job Applications</h3>
                  <p className="text-gray-600">You have no job applications yet.</p>
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
