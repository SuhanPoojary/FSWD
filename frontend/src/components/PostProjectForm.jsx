import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

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
    company: "Bharati Construction Ltd",
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
      company: "Bharati Construction Ltd",
      projectType: "Commercial",
      timeline: "3 months",
      expiresAfter: "30",
      postedDate: new Date().toISOString(),
    });
  };

  // Animation variants for enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <motion.div
      className="p-6 max-h-[80vh] overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-2 text-[#FF4B55]">
        {t("project.postNew") || "Post New Project"}
      </h2>
      <p className="text-gray-500 mb-8">
        {t("project.fillDetails") || "Fill in the details to post your new construction project"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div
          className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF4B55] shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
            {t("project.basicInfo") || "Basic Information"}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <Label htmlFor="title">{t("project.jobTitle") || "Job Title"}</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Site Engineer"
                className="mt-1"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Label htmlFor="location">{t("project.location") || "Location"}</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Mumbai, Maharashtra"
                className="mt-1"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Label htmlFor="employmentType">{t("project.employmentType") || "Employment Type"}</Label>
              <select
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="">{t("project.selectType") || "Select Type"}</option>
                <option value="Full-time">{t("project.fullTime") || "Full-time"}</option>
                <option value="Part-time">{t("project.partTime") || "Part-time"}</option>
                <option value="Contract">{t("project.contract") || "Contract"}</option>
                <option value="Temporary">{t("project.temporary") || "Temporary"}</option>
              </select>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Label htmlFor="hourlyRate">{t("project.hourlyRate") || "Salary Range"}</Label>
              <Input
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g. ₹25,000-35,000"
                className="mt-1"
                required
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div variants={itemVariants}>
              <Label htmlFor="projectType">{t("project.jobType") || "Project Type"}</Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="Commercial">{t("project.commercial") || "Commercial"}</option>
                <option value="Residential">{t("project.residential") || "Residential"}</option>
                <option value="Industrial">{t("project.industrial") || "Industrial"}</option>
                <option value="Infrastructure">{t("project.infrastructure") || "Infrastructure"}</option>
                <option value="Government">{t("project.government") || "Government"}</option>
              </select>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Label htmlFor="timeline">{t("project.timeline") || "Project Timeline"}</Label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                required
              >
                <option value="1 month">{t("project.1month") || "1 month"}</option>
                <option value="3 months">{t("project.3months") || "3 months"}</option>
                <option value="6 months">{t("project.6months") || "6 months"}</option>
                <option value="1 year">{t("project.1year") || "1 year"}</option>
                <option value="2+ years">{t("project.2years") || "2+ years"}</option>
              </select>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-6">
            <Label htmlFor="expiresAfter">{t("project.removeAfter") || "Remove Job After"}</Label>
            <select
              id="expiresAfter"
              name="expiresAfter"
              value={formData.expiresAfter}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
            >
              <option value="7">{t("project.7days") || "7 days"}</option>
              <option value="14">{t("project.14days") || "14 days"}</option>
              <option value="30">{t("project.30days") || "30 days"}</option>
              <option value="60">{t("project.60days") || "60 days"}</option>
              <option value="90">{t("project.90days") || "90 days"}</option>
              <option value="never">{t("project.dontRemove") || "Don't remove"}</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF4B55] shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
            {t("project.jobDetails") || "Job Details"}
          </motion.h3>

          <motion.div variants={itemVariants} className="mb-6">
            <Label htmlFor="jobDescription">{t("project.description") || "Job Description"}</Label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder={t("project.descriptionPlaceholder") || "Describe the job responsibilities, daily tasks, and expectations..."}
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label htmlFor="requirements">{t("project.requirements") || "Requirements"}</Label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              placeholder={t("project.requirementsPlaceholder") || "List qualifications, skills, experience, and education requirements..."}
              required
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF4B55] shadow-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
            {t("project.images") || "Project Images"}
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
            whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <div className="flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">{t("project.uploadImages") || "Upload Project Images"}</p>
              <p className="text-gray-400 text-sm mb-4">{t("project.dragDrop") || "Drag and drop files here or click to browse"}</p>
              <input type="file" className="hidden" multiple accept="image/*" id="file-upload" />
              <label htmlFor="file-upload">
                <Button type="button" variant="outline" className="text-gray-600 hover:bg-[#FF4B55] hover:text-white transition-all">
                  {t("project.selectFiles") || "Select Files"}
                </Button>
              </label>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-end gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="button" variant="outline">
              {t("project.saveAsDraft") || "Save as Draft"}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              type="submit"
              variant="primary"
              className="bg-[#FF4B55] text-white transition-all duration-300 ease-in-out hover:bg-[#E43F49] shadow-md hover:shadow-lg"
            >
              {t("project.post") || "Post Job"}
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default PostProjectForm;