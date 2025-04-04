
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const ContractorPortfolio = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: userData.fullName || "",
    email: userData.email || "",
    phoneNumber: "",
    website: "",
    location: "",
    businessType: "",
    establishedYear: "",
    employeeCount: "",
    licenseNumber: "",
    taxNumber: "",
    serviceTypes: [],
    pastProjects: [],
    description: "",
    logo: null
  });

  const serviceTypeOptions = [
    "Residential Construction", "Commercial Construction", "Industrial Construction", 
    "Infrastructure", "Renovation", "Interior Finishing", "Landscaping", 
    "Electrical", "Plumbing", "HVAC", "Demolition", "Excavation"
  ];

  const businessTypeOptions = [
    "Sole Proprietorship", "Partnership", "Limited Liability Company (LLC)", 
    "Corporation", "Joint Venture"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prevState => {
      const currentServices = [...prevState.serviceTypes];
      const serviceIndex = currentServices.indexOf(service);
      
      if (serviceIndex === -1) {
        currentServices.push(service);
      } else {
        currentServices.splice(serviceIndex, 1);
      }
      
      return {
        ...prevState,
        serviceTypes: currentServices
      };
    });
  };

  const handleAddProject = () => {
    const newProject = {
      name: "",
      location: "",
      year: "",
      description: "",
      value: ""
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

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        logo: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.companyName || !formData.contactPerson || !formData.phoneNumber || !formData.location || !formData.businessType) {
      toast.error("Please fill all required fields");
      return;
    }

    // Save profile data to local storage for demo purposes
    const profileData = {
      ...formData,
      logo: formData.logo ? URL.createObjectURL(formData.logo) : null,
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem("contractorProfile", JSON.stringify(profileData));
    toast.success("Company profile created successfully");
    navigate("/contractor-dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#EDEEF1] py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-[#004A57] mb-6">Create Your Contractor Profile</h1>
          <p className="text-gray-600 mb-8">Complete your company profile to start posting projects and connecting with skilled workers.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-lg font-semibold text-[#004A57] border-b pb-2">Company Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input 
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input 
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Primary contact person"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Business Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business email address"
                  className="mt-1"
                  readOnly
                />
              </div>
              
              <div>
                <Label htmlFor="phoneNumber">Business Phone *</Label>
                <Input 
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Business phone number"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Company website"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="location">Business Location *</Label>
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
            </div>
            
            <h2 className="text-lg font-semibold text-[#004A57] border-b pb-2 pt-4">Business Details</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessType">Business Type *</Label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
                  required
                >
                  <option value="">Select business type</option>
                  {businessTypeOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="establishedYear">Year Established</Label>
                <Input 
                  id="establishedYear"
                  name="establishedYear"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={formData.establishedYear}
                  onChange={handleChange}
                  placeholder="Year company was established"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="employeeCount">Number of Employees</Label>
                <Input 
                  id="employeeCount"
                  name="employeeCount"
                  type="number"
                  min="1"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  placeholder="Number of employees"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input 
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="Business license number"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="taxNumber">GST/Tax Number</Label>
                <Input 
                  id="taxNumber"
                  name="taxNumber"
                  value={formData.taxNumber}
                  onChange={handleChange}
                  placeholder="GST or Tax ID number"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label>Services Offered *</Label>
              <div className="grid grid-cols-2 gap-2 mt-1 sm:grid-cols-3">
                {serviceTypeOptions.map(service => (
                  <div 
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                      formData.serviceTypes.includes(service) 
                        ? "bg-[#004A57] text-white border-[#004A57]" 
                        : "border-gray-300 hover:border-[#FF4B55]"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
              {formData.serviceTypes.length === 0 && (
                <p className="text-xs text-red-500 mt-1">Please select at least one service</p>
              )}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Notable Projects</Label>
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
                <p className="text-sm text-gray-500">No projects added yet. Click "Add Project" to showcase your company's work.</p>
              )}
              
              {formData.pastProjects.map((project, index) => (
                <div key={index} className="border border-gray-300 rounded-md p-4 mb-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                      <Input 
                        id={`project-name-${index}`}
                        value={project.name}
                        onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                        placeholder="Project name"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`project-location-${index}`}>Location</Label>
                      <Input 
                        id={`project-location-${index}`}
                        value={project.location}
                        onChange={(e) => handleProjectChange(index, 'location', e.target.value)}
                        placeholder="Project location"
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
                      <Label htmlFor={`project-value-${index}`}>Project Value</Label>
                      <Input 
                        id={`project-value-${index}`}
                        value={project.value}
                        onChange={(e) => handleProjectChange(index, 'value', e.target.value)}
                        placeholder="Project value"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
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
                    
                    <div className="md:col-span-2 text-right">
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
              <Label htmlFor="description">Company Description</Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your company, its history, and what makes it unique"
                rows={4}
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
              />
            </div>
            
            <div>
              <Label htmlFor="logo">Company Logo</Label>
              <Input 
                id="logo"
                name="logo"
                type="file"
                onChange={handleLogoChange}
                accept="image/*"
                className="mt-1"
              />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-[#FF4B55] hover:bg-[#E43F49] text-white">
                Complete Company Profile
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContractorPortfolio;
