
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";

const WorkerProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Michael Thompson",
    title: "Professional Carpenter",
    email: "mthompson@email.com",
    phone: "(+91)77755-55555",
    location: "VESIT, CHEMBUR",
    experience: "15",
    hourlyRate: "45",
    about: "Skilled carpenter with expertise in custom furniture, home renovations, and architectural woodworking. Specializing in hardwood installations and custom cabinetry."
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setProfile(formData);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Profile Information</h1>
            <Button 
              variant="primary" 
              onClick={handleEditToggle}
            >
              {isEditing ? "Save Profile" : "Edit Profile"}
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-full bg-gray-200 border-2 border-[#FF4B55] flex items-center justify-center text-gray-400">
              120 × 120
            </div>
            
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">Professional Title</label>
                    <Input 
                      id="title" 
                      name="title" 
                      value={formData.title} 
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-gray-600">{profile.title}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              {isEditing ? (
                <Input 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded p-2">{profile.email}</div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              {isEditing ? (
                <Input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded p-2">{profile.phone}</div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              {isEditing ? (
                <Input 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded p-2">{profile.location}</div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Years of Experience</label>
              {isEditing ? (
                <Input 
                  name="experience" 
                  type="number" 
                  value={formData.experience} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded p-2">{profile.experience}</div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Hourly Rate ($)</label>
              {isEditing ? (
                <Input 
                  name="hourlyRate" 
                  type="number" 
                  value={formData.hourlyRate} 
                  onChange={handleChange}
                />
              ) : (
                <div className="border rounded p-2">{profile.hourlyRate}</div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">About</label>
            {isEditing ? (
              <Textarea 
                name="about" 
                className="min-h-[100px]" 
                value={formData.about} 
                onChange={handleChange}
              />
            ) : (
              <div className="border rounded p-2">{profile.about}</div>
            )}
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button 
              variant="default" 
              onClick={() => window.history.back()}
            >
              Back to Dashboard
            </Button>
            
            {isEditing && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setFormData({...profile});
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkerProfile;
