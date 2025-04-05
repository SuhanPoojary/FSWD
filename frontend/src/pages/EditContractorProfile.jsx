
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const EditContractorProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    website: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    establishedYear: "",
    employeeCount: "",
    licensesAndCertifications: [],
    specializationAreas: [],
    description: "",
    companyLogo: null
  });

  const specializationOptions = [
    "Residential", "Commercial", "Industrial", "Infrastructure",
    "Renovation", "New Construction", "Demolition", "Interior",
    "Exterior", "Landscaping", "Electrical", "Plumbing"
  ];

  useEffect(() => {
    const savedProfile = localStorage.getItem("contractorProfile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setFormData(parsed);
    } else {
      navigate("/contractor-portfolio");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSpecializationToggle = (specialization) => {
    setFormData(prevState => {
      const currentSpecs = [...prevState.specializationAreas];
      const specIndex = currentSpecs.indexOf(specialization);
      
      if (specIndex === -1) {
        currentSpecs.push(specialization);
      } else {
        currentSpecs.splice(specIndex, 1);
      }
      
      return {
        ...prevState,
        specializationAreas: currentSpecs
      };
    });
  };

  const handleAddLicense = () => {
    const newLicense = {
      name: "",
      number: "",
      issuedBy: "",
      expiryDate: ""
    };
    
    setFormData(prevState => ({
      ...prevState,
      licensesAndCertifications: [...prevState.licensesAndCertifications, newLicense]
    }));
  };

  const handleLicenseChange = (index, field, value) => {
    setFormData(prevState => {
      const updatedLicenses = [...prevState.licensesAndCertifications];
      updatedLicenses[index] = {
        ...updatedLicenses[index],
        [field]: value
      };
      
      return {
        ...prevState,
        licensesAndCertifications: updatedLicenses
      };
    });
  };

  const handleRemoveLicense = (index) => {
    setFormData(prevState => {
      const updatedLicenses = [...prevState.licensesAndCertifications];
      updatedLicenses.splice(index, 1);
      
      return {
        ...prevState,
        licensesAndCertifications: updatedLicenses
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prevState => ({
        ...prevState,
        companyLogo: imageUrl
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill all required fields");
      return;
    }

    // Save updated profile data
    localStorage.setItem("contractorProfile", JSON.stringify(formData));
    toast.success("Company profile updated successfully");
    navigate("/company-profile");
  };

  if (!profile) {
    return <div className="min-h-screen bg-[#F6F6F7] flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </a>
          <nav className="hidden md:flex space-x-6 ml-12">
            <a href="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</a>
            <a href="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</a>
            <a href="/workers" className="hover:text-[#FF4B55]">Workers</a>
            <a href="/analytics" className="hover:text-[#FF4B55]">Analytics</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300">
              {formData.companyLogo && (
                <img src={formData.companyLogo} alt="Company Logo" className="w-full h-full rounded-full object-cover" />
              )}
            </div>
          </a>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-[#004A57] mb-6">Edit Company Profile</h1>
          <p className="text-gray-600 mb-8">Update your company information to connect with the right professionals.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
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
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Company email"
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
                  placeholder="Company phone number"
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
                <Label htmlFor="companyLogo">Company Logo</Label>
                <Input 
                  id="companyLogo"
                  name="companyLogo"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input 
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="state">State</Label>
                <Input 
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input 
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label>Areas of Specialization</Label>
              <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
                {specializationOptions.map(specialization => (
                  <div 
                    key={specialization}
                    onClick={() => handleSpecializationToggle(specialization)}
                    className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                      formData.specializationAreas.includes(specialization) 
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
              <div className="flex justify-between items-center mb-2">
                <Label>Licenses & Certifications</Label>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddLicense}
                >
                  Add License
                </Button>
              </div>
              
              {formData.licensesAndCertifications.length === 0 && (
                <p className="text-sm text-gray-500">No licenses or certifications added yet. Click "Add License" to add your credentials.</p>
              )}
              
              {formData.licensesAndCertifications.map((license, index) => (
                <div key={index} className="border border-gray-300 rounded-md p-4 mb-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor={`license-name-${index}`}>License Name</Label>
                      <Input 
                        id={`license-name-${index}`}
                        value={license.name}
                        onChange={(e) => handleLicenseChange(index, 'name', e.target.value)}
                        placeholder="License/Certification name"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`license-number-${index}`}>License Number</Label>
                      <Input 
                        id={`license-number-${index}`}
                        value={license.number}
                        onChange={(e) => handleLicenseChange(index, 'number', e.target.value)}
                        placeholder="License number"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`license-issuedBy-${index}`}>Issued By</Label>
                      <Input 
                        id={`license-issuedBy-${index}`}
                        value={license.issuedBy}
                        onChange={(e) => handleLicenseChange(index, 'issuedBy', e.target.value)}
                        placeholder="Issuing authority"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`license-expiryDate-${index}`}>Expiry Date</Label>
                      <Input 
                        id={`license-expiryDate-${index}`}
                        type="date"
                        value={license.expiryDate}
                        onChange={(e) => handleLicenseChange(index, 'expiryDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="col-span-2 text-right">
                      <Button 
                        type="button" 
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveLicense(index)}
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
                placeholder="Describe your company, services, and expertise"
                rows={4}
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-[#FF4B55] focus:border-[#FF4B55]"
              />
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/company-profile")}
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

export default EditContractorProfile;
