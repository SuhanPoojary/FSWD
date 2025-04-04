import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { api } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

// Create a context to share project data across components
export const ProjectContext = React.createContext({
  projects: [],
  addProject: () => {},
  removeProject: () => {},
});

export const useProjectContext = () => React.useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, removeProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

const PostProjectForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    projectType: "Commercial",
    hourlyRate: "",
    description: "",
    timeline: "",
    status: "active",
    employmentType: "Contract"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if user is authenticated
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please login to post a project.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      navigate('/login');
      return;
    }

    // Validate form
    const requiredFields = ['title', 'location', 'projectType', 'hourlyRate', 'description', 'employmentType'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in the following fields: ${missingFields.join(', ')}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Format the hourly rate
      const [minRate, maxRate] = formData.hourlyRate.split('-').map(rate => parseInt(rate.trim().replace('$', '')));
      
      // Prepare project data for API
      const projectData = {
        title: formData.title,
        location: formData.location,
        projectType: formData.projectType,
        description: formData.description,
        hourlyRate: {
          min: minRate,
          max: maxRate
        },
        timeline: {
          startDate: new Date(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
        },
        contractor: user._id,
        employmentType: formData.employmentType,
        status: 'active'
      };

      console.log('Sending project data:', projectData);

      // Send data to backend
      const response = await api.createProject(projectData);
      
      console.log('API Response:', response);

      // Show success toast notification
      toast({
        title: "Job Posted Successfully!",
        description: "Your job has been posted and is now visible to professionals.",
      });

      // Navigate to dashboard
      navigate("/professional-dashboard");

    } catch (error) {
      console.error('Error posting project:', error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to post the job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="p-6 max-h-[80vh] overflow-y-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6">{t("project.postNew")}</h2>
      <p className="text-gray-500 mb-8">{t("project.fillDetails")}</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">{t("project.basicInfo")}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="title">{t("project.jobTitle")}</Label>
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
              <Label htmlFor="location">{t("project.location")}</Label>
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
              <Label htmlFor="projectType">{t("project.projectType")}</Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            <div>
              <Label htmlFor="employmentType">{t("project.employmentType")}</Label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="hourlyRate">{t("project.hourlyRate")}</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g. 25-35"
                className="mt-1"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="description">{t("project.jobDescription")}</Label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the project details..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              rows="4"
              required
            />
          </div>
        </motion.div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/professional-dashboard")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#FF4B55] text-white hover:bg-[#E43F49]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post Job"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default PostProjectForm;
