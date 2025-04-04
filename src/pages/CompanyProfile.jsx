
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Building, MapPin, Phone, Mail, History, Users, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const CompanyProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem("contractorProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // If no profile exists, redirect to create one
      navigate("/contractor-portfolio");
    }
  }, [navigate]);

  // If profile is still loading
  if (!profile) {
    return <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">Loading company profile...</div>;
  }

  // Get initial for avatar fallback
  const getInitials = () => {
    return profile?.companyName ? profile.companyName.charAt(0).toUpperCase() : "C";
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
          <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Post Jobs</Link>
          <Link to="/workers" className="hover:text-[#FF4B55]">Find Workers</Link>
          <Link to="/company-profile" className="hover:text-[#FF4B55] text-[#FF4B55]">Company Profile</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 bg-gray-300">
            <AvatarImage src={profile.logo} alt={profile.companyName} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Company Header */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-[#FF4B55]">
                <AvatarImage src={profile.logo} alt={profile.companyName} />
                <AvatarFallback className="text-2xl">{getInitials()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold">{profile.companyName}</h1>
                <p className="text-gray-600 mb-3">{profile.businessType}</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  {profile.establishedYear && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <History className="h-4 w-4" />
                      <span>Est. {profile.establishedYear}</span>
                    </div>
                  )}
                  {profile.employeeCount && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{profile.employeeCount} employees</span>
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                onClick={() => navigate("/contractor-portfolio")}
                className="bg-[#FF4B55] text-white hover:bg-[#E43F49]"
              >
                Edit Profile
              </Button>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-white mb-6 p-0 h-auto rounded-lg">
              <TabsTrigger 
                value="about" 
                className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'about' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                About
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'projects' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Projects ({profile.pastProjects?.length || 0})
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'services' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Services
              </TabsTrigger>
              <TabsTrigger 
                value="jobs" 
                className={`flex-1 rounded-none py-3 px-6 ${activeTab === 'jobs' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Active Jobs
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-0">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-lg font-semibold mb-2">Company Description</h2>
                <p className="text-gray-600 mb-4">
                  {profile.description || "No company description provided."}
                </p>
                
                <h3 className="text-md font-medium mt-4 mb-2">Company Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-[#004A57]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Business Type</span>
                      <span>{profile.businessType}</span>
                    </div>
                  </div>
                  {profile.licenseNumber && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#004A57]" />
                      <div>
                        <span className="text-sm text-gray-500 block">License Number</span>
                        <span>{profile.licenseNumber}</span>
                      </div>
                    </div>
                  )}
                  {profile.taxNumber && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#004A57]" />
                      <div>
                        <span className="text-sm text-gray-500 block">GST/Tax Number</span>
                        <span>{profile.taxNumber}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#004A57]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Business Phone</span>
                      <span>{profile.phoneNumber}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#004A57]" />
                    <div>
                      <span className="text-sm text-gray-500 block">Business Email</span>
                      <span>{profile.email}</span>
                    </div>
                  </div>
                  {profile.website && (
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-[#004A57]" />
                      <div>
                        <span className="text-sm text-gray-500 block">Website</span>
                        <a href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-[#004A57] hover:underline">
                          {profile.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="projects" className="mt-0">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Notable Projects</h2>
                {profile.pastProjects && profile.pastProjects.length > 0 ? (
                  <div className="space-y-4">
                    {profile.pastProjects.map((project, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold mb-1">{project.name}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-sm text-gray-600">
                          {project.location && <span>Location: {project.location}</span>}
                          {project.year && <span>Year: {project.year}</span>}
                          {project.value && <span>Value: {project.value}</span>}
                        </div>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No projects have been added yet.</p>
                )}
                <div className="mt-4">
                  <Button 
                    onClick={() => navigate("/contractor-portfolio")}
                    variant="outline" 
                    className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                  >
                    Add Projects
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="mt-0">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Services Offered</h2>
                {profile.serviceTypes && profile.serviceTypes.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profile.serviceTypes.map((service, index) => (
                      <Badge key={index} className="bg-[#004A57] hover:bg-[#003540]">
                        {service}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No services have been specified yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-0">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Active Job Postings</h2>
                <p className="text-gray-600 mb-4">You currently don't have any active job postings.</p>
                <Link to="/contractor-job-posting">
                  <Button className="bg-[#FF4B55] text-white hover:bg-[#E43F49]">
                    Post New Job
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
