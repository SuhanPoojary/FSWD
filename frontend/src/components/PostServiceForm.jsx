import React, { useState, createContext, useContext } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Calendar, MapPin, DollarSign, Clock, Upload } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";

// Create a context to share contractor service data across components
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
    
    // Here you would normally send the data to your backend
    toast({
      title: "Service Posted",
      description: "Your service has been successfully posted.",
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
      <h2 className="text-2xl font-bold mb-2">Post a Contracting Job</h2>
      <p className="text-gray-500 mb-8">Create a new opportunity with project details</p>

      <form onSubmit={handleSubmit}>
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
        </motion.div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">Save Draft</Button>
          <Button type="submit" variant="primary">Post Project</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default PostServiceForm;
