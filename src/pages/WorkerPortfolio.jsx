import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';

const WorkerPortfolio = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    yearsOfExperience: '',
    skills: '',
    certifications: '',
    hourlyRate: '',
    availability: '',
    description: '',
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
      
      navigate('/worker-dashboard');
      toast({
        title: "Profile Updated",
        description: "Your worker profile has been updated successfully",
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
            Worker Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Complete your worker profile to start finding projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                name="yearsOfExperience"
                type="number"
                required
                value={formData.yearsOfExperience}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                name="skills"
                type="text"
                required
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., Carpentry, Plumbing, Electrical"
              />
            </div>

            <div>
              <Label htmlFor="certifications">Certifications</Label>
              <Input
                id="certifications"
                name="certifications"
                type="text"
                required
                value={formData.certifications}
                onChange={handleChange}
                placeholder="e.g., OSHA, First Aid"
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

            <div>
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                type="number"
                required
                value={formData.hourlyRate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="availability">Availability</Label>
              <Input
                id="availability"
                name="availability"
                type="text"
                required
                value={formData.availability}
                onChange={handleChange}
                placeholder="e.g., Full-time, Part-time"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">About Me</Label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your experience and what you can offer..."
            />
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

export default WorkerPortfolio;
