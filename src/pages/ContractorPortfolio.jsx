import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';
import { useAuth } from '../contexts/AuthContext';
import { createContractorProfile } from '../services/profileService';

const ContractorPortfolio = () => {
  const { user, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    businessName: '',
    businessLicense: '',
    businessType: '',
    yearsOfExperience: '',
    licenseNumber: '',
    insuranceInfo: '',
    projectTypes: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authLoading && !user) {
      navigate('/login?role=contractor');
      return;
    }
  }, [user, authLoading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!user) {
      toast({
        title: "Error",
        description: "Please log in to save your profile",
        variant: "destructive",
      });
      navigate('/login?role=contractor');
      return;
    }

    setIsLoading(true);

    try {
      // Convert yearsOfExperience to number
      const profileData = {
        ...formData,
        yearsOfExperience: parseInt(formData.yearsOfExperience)
      };

      console.log('Submitting contractor profile:', profileData);
      const response = await createContractorProfile(profileData);
      console.log('Profile creation response:', response);
      
      navigate('/contractor-dashboard');
      toast({
        title: "Profile Created",
        description: "Your contractor profile has been created successfully",
      });
    } catch (error) {
      console.error('Error creating profile:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create profile. Please check all required fields.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4B55] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">Please log in to access this page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Contractor Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete your contractor profile to start posting projects
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
              <Label htmlFor="businessType">Business Type</Label>
              <Input
                id="businessType"
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="e.g., General Contractor, Subcontractor"
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

export default ContractorPortfolio;
