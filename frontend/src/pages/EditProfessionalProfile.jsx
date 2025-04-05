
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import ProfessionalNavbar from "../components/layout/ProfessionalNavbar";

const EditProfessionalProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
    businessName: "",
    specialization: "",
    professionalLicense: "",
    yearsExperience: "",
    serviceRadius: "",
    hourlyRate: "",
    skills: [],
    pastProjects: [],
    bio: "",
    profileImage: null
  });

  const specializationOptions = [
    "Electrical", "Plumbing", "Carpentry", "Masonry", 
    "Architecture", "Interior Design", "Structural Engineering", "HVAC",
    "Welding", "Painting", "Flooring", "Roofing"
  ];

  useEffect(() => {
    const savedProfile = localStorage.getItem("professionalProfile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setFormData(parsed);
    } else {
      navigate("/professional-portfolio");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSpecializationSelect = (specialization) => {
    setFormData(prevState => ({
      ...prevState,
      specialization
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

  const handleAddProject = () => {
    const newProject = {
      title: "",
      description: "",
      year: ""
    };
    
    setFormData(prevState => ({
      ...prevState,
      pastProjects: [...prevState.pastProjects, newProject]
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setFormData(prevState => {
      const updatedProjects = [...prevState.pastProjects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [field]: value
      };
      
      return {
        ...prevState,
        pastProjects: updatedProjects
      };
    });
  };

  const handleRemoveProject = (index) => {
    setFormData(prevState => {
      const updatedProjects = [...prevState.pastProjects];
      updatedProjects.splice(index, 1);
      
      return {
        ...prevState,
        pastProjects: updatedProjects
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
    if (!formData.fullName || !formData.phoneNumber || !formData.location || !formData.specialization) {
      toast.error("Please fill all required fields");
      return;
    }

    // Save updated profile data
    localStorage.setItem("professionalProfile", JSON.stringify(formData));
    toast.success("Profile updated successfully");
    navigate("/professional-profile");
  };

  if (!profile) {
    return <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F7] flex flex-col">
      <ProfessionalNavbar />

      <main className="container mx-auto py-8 px-4 flex-grow">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-[#004A57] mb-6">Edit Your Professional Profile</h1>
          <p className="text-gray-600 mb-8">Update your profile to showcase your expertise and connect with clients.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
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
                <Label htmlFor="businessName">Business Name</Label>
                <Input 
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
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
                <Label htmlFor="serviceRadius">Service Radius (km)</Label>
                <Input 
                  id="serviceRadius"
                  name="serviceRadius"
                  type="number"
                  min="0"
                  value={formData.serviceRadius}
                  onChange={handleChange}
                  placeholder="How far you can travel for work"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="professionalLicense">License Number</Label>
                <Input 
                  id="professionalLicense"
                  name="professionalLicense"
                  value={formData.professionalLicense}
                  onChange={handleChange}
                  placeholder="Your professional license number"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="yearsExperience">Years of Experience *</Label>
                <Input 
                  id="yearsExperience"
                  name="yearsExperience"
                  type="number"
                  min="0"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  placeholder="Years of experience"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="hourlyRate">Hourly Rate (₹) *</Label>
                <Input 
                  id="hourlyRate"
                  name="hourlyRate"
                  type="number"
                  min="0"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                  placeholder="Your hourly rate"
                  required
                  className="mt-1"
                />
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
              <Label>Specialization *</Label>
              <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
                {specializationOptions.map(specialization => (
                  <div 
                    key={specialization}
                    onClick={() => handleSpecializationSelect(specialization)}
                    className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                      formData.specialization === specialization
                        ? "bg-[#004A57] text-white border-[#004A57]" 
                        : "border-gray-300 hover:border-[#FF4B55]"
                    }`}
                  >
                    {specialization}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label>Additional Skills</Label>
              <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
                {specializationOptions.map(skill => (
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
              <div className="flex justify-between items-center mb-2">
                <Label>Past Projects</Label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddProject}
                >
                  Add Project
                </Button>
              </div>
              
              {formData.pastProjects.length === 0 && (
                <p className="text-sm text-gray-500">No past projects added yet. Click "Add Project" to add your work experience.</p>
              )}
              
              {formData.pastProjects.map((project, index) => (
                <div key={index} className="border border-gray-300 rounded-md p-4 mb-3">
                  <div className="grid gap-3">
                    <div>
                      <Label htmlFor={`project-title-${index}`}>Project Title</Label>
                      <Input 
                        id={`project-title-${index}`}
                        value={project.title}
                        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                        placeholder="Project title"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`project-year-${index}`}>Year</Label>
                      <Input 
                        id={`project-year-${index}`}
                        value={project.year}
                        onChange={(e) => handleProjectChange(index, 'year', e.target.value)}
                        placeholder="Year completed"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`project-description-${index}`}>Description</Label>
                      <textarea
                        id={`project-description-${index}`}
                        value={project.description}
                        onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        placeholder="Brief description of the project"
                        rows={2}
                        className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
                      />
                    </div>
                    
                    <div className="text-right">
                      <Button 
                        type="button" 
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveProject(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell clients about your professional experience and expertise"
                rows={4}
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
              />
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/professional-profile")}
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

export default EditProfessionalProfile;
