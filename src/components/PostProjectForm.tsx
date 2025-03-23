import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PostProjectForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    employmentType: "",
    hourlyRate: "",
    jobDescription: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post Project Form submitted:", formData);
    
    // Show success toast notification
    toast({
      title: "Project Posted Successfully!",
      description: "Your project has been posted and is now visible to professionals.",
    });
    
    // Reset form or close dialog if needed
    setFormData({
      title: "",
      location: "",
      employmentType: "",
      hourlyRate: "",
      jobDescription: "",
      requirements: "",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
      <p className="text-gray-500 mb-8">Fill in the details below to create your job listing</p>

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Construction Manager"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. San Francisco, CA"
                className="mt-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="employmentType">Employment Type</Label>
              <Input
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                placeholder="e.g. Full-time, Contract"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g. $25-35"
                className="mt-1"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Job Details</h3>
          
          <div className="mb-6">
            <Label htmlFor="jobDescription">Job Description</Label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder="Describe the job responsibilities and expectations..."
              required
            />
          </div>
          
          <div>
            <Label htmlFor="requirements">Requirements</Label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder="List required skills, experience, certifications, etc..."
              required
            />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Project Images</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Click to upload images</p>
              <p className="text-gray-400 text-sm mb-4">or drag and drop</p>
              <input type="file" className="hidden" multiple accept="image/*" id="file-upload" />
              <label htmlFor="file-upload">
                <Button type="button" variant="outline" className="text-gray-600">
                  Select Files
                </Button>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" variant="primary">Post Job</Button>
        </div>
      </form>
    </div>
  );
};

export default PostProjectForm;
