import React, { useState, createContext, useContext } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Calendar, MapPin, DollarSign, Clock, CheckSquare } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";

// Context for managing services
export const ServiceContext = createContext({
  services: [],
  addService: () => {},
  removeService: () => {},
});

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prev) => [...prev, service]);
  };

  const removeService = (id) => {
    setServices((prev) => prev.filter(service => service.id !== id));
  };

  return (
    <ServiceContext.Provider value={{ services, addService, removeService }}>
      {children}
    </ServiceContext.Provider>
  );
};

const PostServiceForm = () => {
  const { toast } = useToast();
  const { addService } = useServiceContext();
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
    status: "posted",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Service Form submitted:", formData);

    // Add the new service to context
    addService({
      id: Date.now(),
      ...formData,
    });

    // Show success message
    toast({
      title: "Project Posted",
      description: "Your project has been successfully posted.",
    });

    // Reset form
    setFormData({
      projectTitle: "",
      projectLocation: "",
      budgetRange: "",
      timeline: "",
      projectScope: "",
      contractorRequirements: "",
      materialsEquipment: "",
      insuranceRequired: false,
      permitsRequired: false,
      status: "posted",
    });
  };

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto bg-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-2">Post a Contracting Service</h2>
      <p className="text-gray-500 mb-8">Fill out the details to list your service</p>

      <form onSubmit={handleSubmit}>
        {/* Project Information */}
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4">Project Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="e.g. Kitchen Renovation"
                required
              />
            </div>
            <div>
              <Label htmlFor="projectLocation">Project Location</Label>
              <Input
                id="projectLocation"
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleChange}
                placeholder="e.g. Kurla, Chembur"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="budgetRange">Budget Range</Label>
              <Input
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="e.g. ₹2,00,000 - ₹5,00,000"
              />
            </div>
            <div>
              <Label htmlFor="timeline">Expected Timeline</Label>
              <Input
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g. 3 months"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Scope & Requirements */}
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Project Scope & Requirements</h3>

          <div className="mb-6">
            <Label htmlFor="projectScope">Project Scope</Label>
            <Textarea
              id="projectScope"
              name="projectScope"
              value={formData.projectScope}
              onChange={handleChange}
              placeholder="Describe the project scope..."
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="contractorRequirements">Contractor Requirements</Label>
            <Textarea
              id="contractorRequirements"
              name="contractorRequirements"
              value={formData.contractorRequirements}
              onChange={handleChange}
              placeholder="Describe any specific requirements..."
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="materialsEquipment">Materials & Equipment Needed</Label>
            <Textarea
              id="materialsEquipment"
              name="materialsEquipment"
              value={formData.materialsEquipment}
              onChange={handleChange}
              placeholder="List materials & equipment required..."
            />
          </div>
        </motion.div>

        {/* Additional Options */}
        <motion.div 
          className="bg-gray-50 p-6 rounded-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Additional Requirements</h3>

          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="insuranceRequired"
                checked={formData.insuranceRequired}
                onChange={handleCheckboxChange}
              />
              <span>Insurance Required</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="permitsRequired"
                checked={formData.permitsRequired}
                onChange={handleCheckboxChange}
              />
              <span>Permits Required</span>
            </label>
          </div>
        </motion.div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button type="button" classname="bg-[#004A57] text-[#EEE] hover:bg-[#00424E] ">Save Draft</Button>
          <Button type="submit" variant="primary">Post Project</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default PostServiceForm;
