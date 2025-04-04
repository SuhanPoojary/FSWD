import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';

const ProfessionalPortfolio = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessLicense: '',
    yearsOfExperience: '',
    specialties: '',
    licenseNumber: '',
    insuranceInfo: '',
    projectTypes: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/professional-dashboard');
      toast({
        title: "Profile Updated",
        description: "Your professional profile has been updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Professional Builder Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete your professional profile to start posting projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your business name"
              />
            </div>

            <div>
              <Label htmlFor="businessLicense">Business License Number</Label>
              <Input
                id="businessLicense"
                name="businessLicense"
                type="text"
                value={formData.businessLicense}
                onChange={handleChange}
                placeholder="Your business license number"
              />
            </div>

            <div>
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                value={formData.yearsOfExperience}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="licenseNumber">Professional License Number</Label>
              <Input
                id="licenseNumber"
                name="licenseNumber"
                type="text"
                value={formData.licenseNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="insuranceInfo">Insurance Information</Label>
              <Input
                id="insuranceInfo"
                name="insuranceInfo"
                type="text"
                value={formData.insuranceInfo}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="projectTypes">Project Types</Label>
              <Input
                id="projectTypes"
                name="projectTypes"
                type="text"
                value={formData.projectTypes}
                onChange={handleChange}
                placeholder="e.g., Residential, Commercial"
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your contact number"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#FF4B55] hover:bg-[#E43F49]"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Profile'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalPortfolio;
