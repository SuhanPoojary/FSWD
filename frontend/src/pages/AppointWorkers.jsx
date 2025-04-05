import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Search, Users, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

// Mock worker data
const availableWorkers = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Senior Carpenter",
    experience: "8 years",
    status: "Active",
    skills: ["Framing", "Finish Carpentry", "Cabinet Installation"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Electrician",
    experience: "5 years",
    status: "On Leave",
    skills: ["Wiring", "Circuit Installation", "Troubleshooting"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Plumber",
    experience: "12 years",
    status: "Active",
    skills: ["Pipe Installation", "Fixture Installation", "Drainage Systems"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Heavy Equipment Operator",
    experience: "6 years",
    status: "Active",
    skills: ["Excavator", "Bulldozer", "Crane Operation"],
    image: "/placeholder.svg"
  }
];

// Mock project data
const projects = [
  { id: 1, title: "Retail Center Remodel" },
  { id: 2, title: "Custom Home Construction" },
  { id: 3, title: "Warehouse Expansion" },
  { id: 4, title: "Skyline Commercial Tower" }
];

const AppointWorkers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedPositions, setSelectedPositions] = useState({});
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const filteredWorkers = availableWorkers.filter(worker => 
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const handleWorkerSelect = (workerId) => {
    if (selectedWorkers.includes(workerId)) {
      setSelectedWorkers(selectedWorkers.filter(id => id !== workerId));
      const newPositions = { ...selectedPositions };
      delete newPositions[workerId];
      setSelectedPositions(newPositions);
    } else {
      setSelectedWorkers([...selectedWorkers, workerId]);
    }
  };
  
  const handlePositionChange = (workerId, position) => {
    setSelectedPositions({
      ...selectedPositions,
      [workerId]: position
    });
  };
  
  const handleAppointWorkers = () => {
    if (!selectedProject) {
      toast({
        title: "No Project Selected",
        description: "Please select a project to appoint workers to.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedWorkers.length === 0) {
      toast({
        title: "No Workers Selected",
        description: "Please select at least one worker to appoint.",
        variant: "destructive"
      });
      return;
    }
    
    const missingPositions = selectedWorkers.some(id => !selectedPositions[id]);
    if (missingPositions) {
      toast({
        title: "Missing Positions",
        description: "Please assign positions to all selected workers.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Workers Appointed",
      description: `${selectedWorkers.length} workers have been appointed to the project.`,
    });
    
    navigate("/workers");
  };
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/elite-construction-project" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center">
            <Users className="mr-2 h-6 w-6 text-[#004A57]" /> 
            Appoint Workers to Project
          </h1>
          <p className="text-gray-600">Select workers and assign them to your project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search workers by name, role or skills..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Select onValueChange={setSelectedProject} value={selectedProject}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map(project => (
                  <SelectItem key={project.id} value={project.id.toString()}>
                    {project.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-sm overflow-hidden mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#004A57]">Available Workers <Badge className="ml-2 bg-[#004A57]">{filteredWorkers.length}</Badge></h2>
              <Badge className="bg-[#FF4B55]">{selectedWorkers.length} Selected</Badge>
            </div>
            
            {filteredWorkers.length > 0 ? (
              <div className="space-y-4">
                {filteredWorkers.map((worker) => (
                  <motion.div 
                    key={worker.id}
                    className={`border rounded-lg p-4 flex items-center justify-between transition-all duration-300 ${
                      selectedWorkers.includes(worker.id) 
                        ? 'border-[#FF4B55] bg-red-50' 
                        : 'border-gray-100 hover:border-[#FF4B55]'
                    }`}
                    whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-center gap-4">
                      <Checkbox 
                        id={`worker-${worker.id}`} 
                        checked={selectedWorkers.includes(worker.id)}
                        onCheckedChange={() => handleWorkerSelect(worker.id)}
                        className="h-5 w-5 rounded border-gray-300 text-[#FF4B55]"
                      />
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={worker.image} alt={worker.name} />
                        <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">{worker.name}</h3>
                          <Badge className={`ml-3 ${worker.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                            {worker.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">{worker.role} • {worker.experience}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {worker.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {selectedWorkers.includes(worker.id) && (
                      <div className="ml-4 w-48">
                        <Select 
                          onValueChange={(value) => handlePositionChange(worker.id, value)}
                          value={selectedPositions[worker.id] || ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Lead">Lead</SelectItem>
                            <SelectItem value="Senior">Senior</SelectItem>
                            <SelectItem value="Junior">Junior</SelectItem>
                            <SelectItem value="Apprentice">Apprentice</SelectItem>
                            <SelectItem value="Supervisor">Supervisor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-600">No Workers Found</h3>
                <p className="text-gray-500">
                  {searchTerm ? "Try adjusting your search terms" : "Add workers to your team"}
                </p>
              </div>
            )}
          </div>
        </motion.div>
        
        <div className="flex justify-end space-x-4">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="border-gray-300 text-gray-600 hover:bg-gray-100 transition-all duration-300"
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleAppointWorkers}
            className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
            disabled={selectedWorkers.length === 0 || !selectedProject}
          >
            <Check className="mr-2 h-4 w-4" /> Appoint Selected Workers
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AppointWorkers;
