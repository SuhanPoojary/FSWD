
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const EditWorkerProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    experience: "",
    skills: [],
    hourlyRate: "",
    availability: "",
    bio: "",
    email: "",
    profileImage: null
  });

  const skillOptions = [
    "Carpentry", "Plumbing", "Electrical", "Masonry", 
    "Painting", "Roofing", "Concrete", "Flooring", 
    "HVAC", "Demolition", "Landscaping", "Equipment Operation"
  ];

  useEffect(() => {
    const savedProfile = localStorage.getItem("workerProfile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setFormData(parsed);
    } else {
      navigate("/worker-portfolio");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prevState => {
      const currentSkills = [...prevState.skills];
      const skillIndex = currentSkills.indexOf(skill);
      
      if (skillIndex === -1) {
        currentSkills.push(skill);
      } else {
        currentSkills.splice(skillIndex, 1);
      }
      
      return {
        ...prevState,
        skills: currentSkills
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prevState => ({
        ...prevState,
        profileImage: imageUrl
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.phoneNumber || !formData.location || formData.skills.length === 0) {
      toast.error("Please fill all required fields");
      return;
    }

    // Save updated profile data
    localStorage.setItem("workerProfile", JSON.stringify(formData));
    toast.success("Profile updated successfully");
    navigate("/worker-profile");
  };

  if (!profile) {
    return <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6">
            <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/worker-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/active-work" className="hover:text-[#FF4B55]">Active Work</Link>
          <Link to="/worker-profile" className="hover:text-[#FF4B55] text-[#FF4B55]">My Profile</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 bg-gray-300">
            <AvatarImage src={profile.profileImage} alt={profile.fullName} />
            <AvatarFallback>{profile.fullName ? profile.fullName.charAt(0).toUpperCase() : 'W'}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-[#004A57] mb-6">Edit Your Worker Profile</h1>
          <p className="text-gray-600 mb-8">Update your profile information to find the best job opportunities.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input 
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input 
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input 
                  id="experience"
                  name="experience"
                  type="number"
                  min="0"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Years of experience"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                <Input 
                  id="hourlyRate"
                  name="hourlyRate"
                  type="number"
                  min="0"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                  placeholder="Your hourly rate"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="availability">Availability</Label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
                >
                  <option value="">Select availability</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Weekends">Weekends only</option>
                  <option value="Evenings">Evenings only</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="profileImage">Profile Photo</Label>
                <Input 
                  id="profileImage"
                  name="profileImage"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label>Skills *</Label>
              <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
                {skillOptions.map(skill => (
                  <div 
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                      formData.skills.includes(skill) 
                        ? "bg-[#004A57] text-white border-[#004A57]" 
                        : "border-gray-300 hover:border-[#FF4B55]"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself and your work experience"
                rows={4}
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
              />
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/worker-profile")}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#FF4B55] hover:bg-[#E43F49] text-white">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditWorkerProfile;
