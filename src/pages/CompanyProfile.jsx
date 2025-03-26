
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin, Phone, Mail, Globe, User, Users, Briefcase, FileText, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompanyProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "ABC Construction Ltd",
    tagline: "Building excellence since 1995",
    description: "ABC Construction Ltd is a full-service construction company specializing in commercial and residential projects. With over 25 years of experience, we pride ourselves on quality workmanship, timely project delivery, and exceptional customer service. Our team of skilled professionals is dedicated to bringing your construction vision to life.",
    location: "Toronto, ON",
    address: "123 Construction Avenue, Toronto, ON M5V 2L7",
    phone: "(416) 555-1234",
    email: "info@abcconstruction.com",
    website: "www.abcconstruction.com",
    yearFounded: "1995",
    employees: "50-200",
    specializations: ["Commercial Construction", "Residential Construction", "Renovations", "Project Management"],
    certifications: ["ISO 9001:2015", "Safety Certified", "Green Building Council Member"]
  });
  
  // Sample data for projects and employees
  const projects = [
    {
      id: 1,
      title: "Downtown Office Building",
      status: "Completed",
      location: "Toronto, ON",
      duration: "Jan 2022 - Dec 2022",
      type: "Commercial",
      image: "https://placehold.co/800x600/004A57/white?text=Office+Building"
    },
    {
      id: 2,
      title: "Luxury Condominium Complex",
      status: "In Progress",
      location: "Vancouver, BC",
      duration: "Mar 2023 - Present",
      type: "Residential",
      image: "https://placehold.co/800x600/004A57/white?text=Condominium"
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      status: "In Planning",
      location: "Calgary, AB",
      duration: "Starting Aug 2023",
      type: "Commercial",
      image: "https://placehold.co/800x600/004A57/white?text=Shopping+Mall"
    }
  ];
  
  const key_employees = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://placehold.co/200x200/004A57/white?text=JS"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Project Manager",
      image: "https://placehold.co/200x200/004A57/white?text=SJ"
    },
    {
      id: 3,
      name: "Michael Lee",
      position: "Lead Engineer",
      image: "https://placehold.co/200x200/004A57/white?text=ML"
    }
  ];
  
  const handleSaveProfile = () => {
    setEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your company profile has been successfully updated.",
    });
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
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
          <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/contractor-dashboard')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            Back to Dashboard
          </Button>
        </div>
        
        {/* Company Profile */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-[#004A57] to-[#006d7e] rounded-t-lg"></div>
            <div className="absolute top-24 left-8 w-44 h-44 bg-white rounded-lg border-4 border-white shadow-md flex items-center justify-center">
              <Building className="w-20 h-20 text-[#004A57]" />
            </div>
            <div className="h-24"></div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-gray-600 mt-1">{profile.tagline}</p>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Briefcase size={16} />
                    <span>Since {profile.yearFounded}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users size={16} />
                    <span>{profile.employees} employees</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Star size={16} />
                    <span>4.8/5 (24 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Button 
                  variant="primary" 
                  className="transition-transform duration-300 hover:scale-105 active:scale-95"
                  onClick={() => setEditing(!editing)}
                >
                  {editing ? "Save Profile" : "Edit Profile"}
                </Button>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">About Company</h2>
                {editing ? (
                  <textarea 
                    className="w-full p-3 border rounded-md focus:ring-1 focus:ring-[#004A57] focus:outline-none h-40"
                    value={profile.description}
                    onChange={(e) => setProfile({...profile, description: e.target.value})}
                  />
                ) : (
                  <p className="text-gray-700 whitespace-pre-line mb-8">{profile.description}</p>
                )}
                
                <h2 className="text-xl font-semibold mb-4 mt-8">Specializations</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {profile.specializations.map((spec, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-semibold mb-4 mt-8">Certifications</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.certifications.map((cert, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      {editing ? (
                        <input 
                          className="w-full p-2 border rounded-md mt-1 focus:ring-1 focus:ring-[#004A57] focus:outline-none"
                          value={profile.address}
                          onChange={(e) => setProfile({...profile, address: e.target.value})}
                        />
                      ) : (
                        <div>{profile.address}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      {editing ? (
                        <input 
                          className="w-full p-2 border rounded-md mt-1 focus:ring-1 focus:ring-[#004A57] focus:outline-none"
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      ) : (
                        <div>{profile.phone}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      {editing ? (
                        <input 
                          className="w-full p-2 border rounded-md mt-1 focus:ring-1 focus:ring-[#004A57] focus:outline-none"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      ) : (
                        <div>{profile.email}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Website</div>
                      {editing ? (
                        <input 
                          className="w-full p-2 border rounded-md mt-1 focus:ring-1 focus:ring-[#004A57] focus:outline-none"
                          value={profile.website}
                          onChange={(e) => setProfile({...profile, website: e.target.value})}
                        />
                      ) : (
                        <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-[#004A57] hover:underline">
                          {profile.website}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {editing && (
                  <Button 
                    variant="primary" 
                    className="w-full mt-6"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Employees */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Key Team Members</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {key_employees.map(employee => (
              <div key={employee.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6 flex items-center gap-4">
                  <img 
                    src={employee.image} 
                    alt={employee.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{employee.name}</h3>
                    <p className="text-gray-600">{employee.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Projects */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Recent Projects</h2>
            <Button variant="outline" size="sm">View All Projects</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : project.status === "In Progress" 
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{project.type}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <MapPin size={14} className="inline mr-1" />
                    {project.location}
                  </div>
                  <div className="text-sm text-gray-500">
                    <Calendar size={14} className="inline mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
