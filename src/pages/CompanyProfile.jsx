
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Users, Calendar, ArrowLeft } from "lucide-react";

const CompanyProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [company, setCompany] = useState({
    name: "BuildTech Solutions",
    industry: "Construction & Engineering",
    location: "Toronto, ON",
    founded: "2010",
    size: "50-200 employees",
    website: "www.buildtechsolutions.com",
    email: "contact@buildtechsolutions.com",
    phone: "+1 (123) 456-7890",
    about: "BuildTech Solutions is a leading construction and engineering firm specializing in commercial and residential projects. With over a decade of experience, we provide innovative solutions and exceptional craftsmanship to our clients. Our team of skilled professionals is committed to delivering projects on time and within budget without compromising on quality."
  });

  const [formData, setFormData] = useState({ ...company });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setCompany(formData);
      toast({
        title: "Profile Updated",
        description: "Your company profile has been successfully updated.",
      });
    }
    setIsEditing(!isEditing);
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

      <main className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Company Profile</h1>
              <motion.button
                className="bg-[#FF4B55] hover:bg-[#e03e48] text-white font-medium py-2 px-4 rounded"
                onClick={handleEditToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEditing ? "Save Profile" : "Edit Profile"}
              </motion.button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 rounded-lg bg-gray-200 border-2 border-[#004A57] flex items-center justify-center text-gray-400">
                Logo
              </div>
              
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Company Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
                      <Input 
                        id="industry" 
                        name="industry" 
                        value={formData.industry} 
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold">{company.name}</h2>
                    <p className="text-gray-600">{company.industry}</p>
                  </div>
                )}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Company Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="location" 
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        {company.location}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Founded</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="founded" 
                          value={formData.founded}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        {company.founded}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Size</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="size" 
                          value={formData.size}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        {company.size}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="website" 
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Globe className="h-5 w-5 text-gray-400 mr-2" />
                        {company.website}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="email" 
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        {company.email}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    {isEditing ? (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <Input 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        {company.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1">About Company</label>
              {isEditing ? (
                <Textarea 
                  name="about" 
                  className="min-h-[150px]" 
                  value={formData.about} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded-md p-3 text-gray-600 whitespace-pre-line">
                  {company.about}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CompanyProfile;
