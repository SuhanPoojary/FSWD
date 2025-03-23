
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, DollarSign, Clock, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PostServiceForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectLocation: "",
    budgetRange: "",
    timeline: "",
    projectScope: "",
    contractorRequirements: "",
    materialsEquipment: "",
    insuranceRequired: false,
    permitsRequired: false,
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post Service Form submitted:", formData);
    
    // Here you would normally send the data to your backend
    toast({
      title: "Service Posted",
      description: "Your service has been successfully posted.",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-2">Post a Contracting Job</h2>
      <p className="text-gray-500 mb-8">Create a new opportunity with project details</p>

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Project Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="projectTitle">Project Title</Label>
              <div className="relative mt-1">
                <Input
                  id="projectTitle"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  placeholder="e.g. Kitchen Renovation"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="projectLocation">Project Location</Label>
              <div className="relative mt-1">
                <Input
                  id="projectLocation"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleChange}
                  placeholder="e.g. Vancouver, BC"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="budgetRange">Budget Range (CAD)</Label>
              <div className="relative mt-1">
                <Input
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  placeholder="e.g. $15,000 - $20,000"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <div className="relative mt-1">
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. 2-3 months"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          
          <div className="mb-6">
            <Label htmlFor="projectScope">Project Scope</Label>
            <Textarea
              id="projectScope"
              name="projectScope"
              value={formData.projectScope}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1"
              placeholder="Describe the project scope and objectives..."
              required
            />
          </div>
          
          <div className="mb-6">
            <Label htmlFor="contractorRequirements">Contractor Requirements</Label>
            <Textarea
              id="contractorRequirements"
              name="contractorRequirements"
              value={formData.contractorRequirements}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1"
              placeholder="List required qualifications, experience, certifications, etc..."
            />
          </div>
          
          <div className="mb-6">
            <Label htmlFor="materialsEquipment">Materials & Equipment</Label>
            <Textarea
              id="materialsEquipment"
              name="materialsEquipment"
              value={formData.materialsEquipment}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1"
              placeholder="Specify any materials or equipment needed..."
            />
          </div>
          
          <div className="flex gap-8 mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="insuranceRequired"
                name="insuranceRequired"
                checked={formData.insuranceRequired}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-[#FF4B55] border-gray-300 rounded focus:ring-[#FF4B55]"
              />
              <Label htmlFor="insuranceRequired" className="ml-2">
                Insurance Required
              </Label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="permitsRequired"
                name="permitsRequired"
                checked={formData.permitsRequired}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-[#FF4B55] border-gray-300 rounded focus:ring-[#FF4B55]"
              />
              <Label htmlFor="permitsRequired" className="ml-2">
                Permits Required
              </Label>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Project Images & Plans</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Upload Images or Plans</p>
              <p className="text-gray-400 text-sm mb-4">Drag & drop images or PDF files here</p>
              <input type="file" className="hidden" multiple accept="image/*,.pdf" id="file-upload" />
              <label htmlFor="file-upload">
                <Button type="button" variant="outline" className="text-gray-600">
                  Select Files
                </Button>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">Save Draft</Button>
          <Button type="submit" variant="primary">Post Project</Button>
        </div>
      </form>
    </div>
  );
};

export default PostServiceForm;
