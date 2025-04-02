import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { addProject } = useProjectContext();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    employmentType: "",
    hourlyRate: "",
    jobDescription: "",
    requirements: "",
    company: "Elite Construction Ltd",
    projectType: "Commercial",
    timeline: "3 months",
    expiresAfter: "30",
    postedDate: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.title ||
      !formData.location ||
      !formData.employmentType ||
      !formData.hourlyRate ||
      !formData.jobDescription ||
      !formData.requirements
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before posting the job.",
        variant: "destructive",
      });
      return;
    }

    console.log("Post Job Form submitted:", formData);

    // Add the new project to context
    addProject({
      id: Date.now(),
      ...formData,
      applicants: 0,
      status: "active",
      postedAt: new Date().toLocaleDateString(),
      applicantsCount: Math.floor(Math.random() * 15),
    });

    // Show success toast notification
    toast({
      title: "Job Posted Successfully!",
      description: "Your job has been posted and is now visible to professionals.",
    });

    // Navigate to dashboard
    setTimeout(() => {
      navigate("/professional-dashboard");
    }, 1500);

    // Reset form
    setFormData({
      title: "",
      location: "",
      employmentType: "",
      hourlyRate: "",
      jobDescription: "",
      requirements: "",
      company: "Elite Construction Ltd",
      projectType: "Commercial",
      timeline: "3 months",
      expiresAfter: "30",
      postedDate: new Date().toISOString(),
    });
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
              <Label htmlFor="employmentType">{t("project.employmentType")}</Label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="">{t("project.selectType")}</option>
                <option value="Full-time">{t("project.fullTime")}</option>
                <option value="Part-time">{t("project.partTime")}</option>
                <option value="Contract">{t("project.contract")}</option>
                <option value="Temporary">{t("project.temporary")}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="hourlyRate">{t("project.hourlyRate")}</Label>
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
        </motion.div>

        <div className="flex justify-end gap-4 mt-8">
          <Button type="button" variant="outline">{t("project.saveAsDraft")}</Button>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button type="submit" variant="primary" className="transition-all duration-300 ease-in-out hover:scale-105">
              {t("project.post")}
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default PostProjectForm;
