
import React, { useState, createContext, useContext } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Briefcase, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Create a context to share job data across components
export const JobContext = createContext({
  jobs: [],
  addJob: () => {},
  removeJob: () => {},
});

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };

  const removeJob = (id) => {
    setJobs((prev) => prev.filter(job => job.id !== id));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
};

const PostJobForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { addJob } = useJobContext();
  
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobCategory: "",
    jobType: "",
    workersNeeded: 1,
    duration: "",
    startDate: "",
    payRate: "",
    paymentTerms: "Hourly",
    description: "",
    requirements: "",
    benefits: "",
    applicationDeadline: "",
    contactEmail: "",
    contactPhone: "",
    company: localStorage.getItem("contractorProfile") ? JSON.parse(localStorage.getItem("contractorProfile")).companyName : "Your Company",
    postedDate: new Date().toISOString(),
    status: "Open"
  });

  const jobCategoryOptions = [
    "Construction", "Masonry", "Carpentry", "Electrical", 
    "Plumbing", "Painting", "Landscaping", "Demolition",
    "Roofing", "Flooring", "HVAC", "General Labor"
  ];

  const jobTypeOptions = [
    "Full-time", "Part-time", "Contract", "Temporary",
    "Seasonal", "Day Labor", "Project-based"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prev) => ({
      ...prev,
      jobCategory: category
    }));
  };

  const handleJobTypeSelect = (type) => {
    setFormData((prev) => ({
      ...prev,
      jobType: type
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.jobTitle || !formData.jobLocation || !formData.jobCategory || !formData.payRate) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Generate a job ID
    const jobId = Date.now();
    
    // Add the job to context
    const newJob = {
      id: jobId,
      ...formData,
      postedAt: new Date().toLocaleDateString(),
      applicantsCount: 0
    };
    
    // Save job to local storage for demo
    const existingJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    localStorage.setItem("postedJobs", JSON.stringify([...existingJobs, newJob]));
    
    // Add to context
    addJob(newJob);
    
    toast({
      title: "Job Posted Successfully",
      description: "Your job has been posted and is now visible to workers",
    });
    
    // Navigate to dashboard after successful submission
    setTimeout(() => {
      navigate("/contractor-dashboard");
    }, 1500);
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm max-h-[80vh] overflow-y-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-2">Post a New Job</h2>
      <p className="text-gray-500 mb-8">Create a new job listing to find qualified workers</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Job Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="jobTitle">Job Title *</Label>
              <div className="relative mt-1">
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Construction Worker"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="jobLocation">Location *</Label>
              <div className="relative mt-1">
                <Input
                  id="jobLocation"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <Label>Job Category *</Label>
            <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
              {jobCategoryOptions.map(category => (
                <div 
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                    formData.jobCategory === category
                      ? "bg-[#004A57] text-white border-[#004A57]" 
                      : "border-gray-300 hover:border-[#FF4B55]"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <Label>Job Type *</Label>
            <div className="grid grid-cols-3 gap-2 mt-1 sm:grid-cols-4">
              {jobTypeOptions.map(type => (
                <div 
                  key={type}
                  onClick={() => handleJobTypeSelect(type)}
                  className={`p-2 border rounded-md cursor-pointer text-center text-sm ${
                    formData.jobType === type
                      ? "bg-[#004A57] text-white border-[#004A57]" 
                      : "border-gray-300 hover:border-[#FF4B55]"
                  }`}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="workersNeeded">Number of Workers Needed</Label>
              <div className="relative mt-1">
                <Input
                  id="workersNeeded"
                  name="workersNeeded"
                  type="number"
                  min="1"
                  value={formData.workersNeeded}
                  onChange={handleChange}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="duration">Job Duration</Label>
              <div className="relative mt-1">
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g. 3 months, 2 weeks"
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <div className="relative mt-1">
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="payRate">Pay Rate *</Label>
              <div className="relative mt-1">
                <Input
                  id="payRate"
                  name="payRate"
                  value={formData.payRate}
                  onChange={handleChange}
                  placeholder="e.g. ₹500-₹700"
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="paymentTerms">Payment Terms</Label>
              <select
                id="paymentTerms"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
              >
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Project-based">Project-based</option>
              </select>
            </div>
            <div>
              <Label htmlFor="applicationDeadline">Application Deadline</Label>
              <Input
                id="applicationDeadline"
                name="applicationDeadline"
                type="date"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Job Details</h3>

          <div className="mb-6">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the job responsibilities and tasks..."
              rows={4}
              className="mt-1"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="requirements">Job Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="List required skills, experience, and qualifications..."
              rows={4}
              className="mt-1"
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="benefits">Benefits (Optional)</Label>
            <Textarea
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              placeholder="List any benefits or perks for this position..."
              rows={3}
              className="mt-1"
            />
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="Email for applicants to contact"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="Phone number for inquiries"
                className="mt-1"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex justify-end gap-4 mt-8">
          <Button type="button" variant="outline" onClick={() => navigate("/contractor-dashboard")}>
            Cancel
          </Button>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button type="submit" className="bg-[#FF4B55] text-white hover:bg-[#E43F49]">
              Post Job
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default PostJobForm;
