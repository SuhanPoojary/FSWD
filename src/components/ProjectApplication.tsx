
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectApplicationProps {
  projectId?: string;
  projectTitle?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const ProjectApplication: React.FC<ProjectApplicationProps> = ({
  projectId,
  projectTitle = "Project",
  onSuccess,
  onCancel
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    coverLetter: "",
    startDate: "",
    proposedBudget: "",
    estimatedDuration: "",
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Application Submitted",
        description: "Your application for this project was submitted successfully.",
      });

      // Call success callback after a delay to show success state
      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-6">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold mb-2">Application Submitted Successfully</h2>
        <p className="text-gray-600 mb-6">
          Your application for {projectTitle} has been received. We will review your application and contact you soon.
        </p>
        <Button 
          variant="primary" 
          className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300"
          onClick={onSuccess}
        >
          Return to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Apply for Project</h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="coverLetter">Cover Letter / Proposal</Label>
          <Textarea 
            id="coverLetter"
            name="coverLetter"
            placeholder="Introduce yourself and explain why you're a good fit for this project..."
            value={formData.coverLetter}
            onChange={handleChange}
            className="min-h-[120px]"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Earliest Start Date</Label>
            <Input 
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="proposedBudget">Proposed Budget (USD)</Label>
            <Input 
              id="proposedBudget"
              name="proposedBudget"
              type="text"
              placeholder="$0.00"
              value={formData.proposedBudget}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="estimatedDuration">Estimated Duration (in weeks)</Label>
          <Input 
            id="estimatedDuration"
            name="estimatedDuration"
            type="number"
            placeholder="Number of weeks"
            value={formData.estimatedDuration}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex items-start pt-2">
          <input 
            id="termsAccepted"
            name="termsAccepted"
            type="checkbox"
            className="h-4 w-4 mt-1 rounded border-gray-300 text-[#FF4B55] focus:ring-[#FF4B55]"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
            required
          />
          <Label htmlFor="termsAccepted" className="ml-2 text-sm">
            I confirm that I have the necessary skills and availability to complete this project according to the requirements.
          </Label>
        </div>
        
        <div className="flex justify-end gap-3 pt-2">
          <Button 
            type="button" 
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="primary"
            className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectApplication;
