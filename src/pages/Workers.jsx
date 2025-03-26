
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Star, Search, Filter, Clock, CheckCircle, User, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Workers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample worker data
  const workers = [
    {
      id: 1,
      name: "John Doe",
      role: "Master Carpenter",
      location: "Toronto, ON",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$35-45",
      experience: "10+ years",
      skills: ["Woodworking", "Framing", "Finishing"],
      availability: "Available Now"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Electrician",
      location: "Vancouver, BC",
      rating: 4.8,
      reviews: 93,
      hourlyRate: "$40-55",
      experience: "8 years",
      skills: ["Wiring", "Troubleshooting", "Installation"],
      availability: "Available in 2 weeks"
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "HVAC Technician",
      location: "Calgary, AB",
      rating: 4.7,
      reviews: 64,
      hourlyRate: "$38-50",
      experience: "12 years",
      skills: ["Installation", "Maintenance", "Repair"],
      availability: "Available Now"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Plumber",
      location: "Montreal, QC",
      rating: 4.9,
      reviews: 58,
      hourlyRate: "$35-48",
      experience: "7 years",
      skills: ["Pipefitting", "Repair", "Installation"],
      availability: "Available in 1 week"
    },
    {
      id: 5,
      name: "David Lee",
      role: "General Laborer",
      location: "Edmonton, AB",
      rating: 4.5,
      reviews: 39,
      hourlyRate: "$25-35",
      experience: "3 years",
      skills: ["Demolition", "Material Handling", "Cleanup"],
      availability: "Available Now"
    },
    {
      id: 6,
      name: "Emily Johnson",
      role: "Painter",
      location: "Ottawa, ON",
      rating: 4.8,
      reviews: 47,
      hourlyRate: "$30-40",
      experience: "6 years",
      skills: ["Interior", "Exterior", "Finishing"],
      availability: "Available Now"
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55] text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/contractor-dashboard')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Available Workers</h1>
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search workers..."
                className="pl-9 w-56 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-10">
              <Filter size={16} className="mr-2" /> Filter
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map(worker => (
            <div key={worker.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{worker.name}</h3>
                      <p className="text-gray-600 text-sm">{worker.role}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        {worker.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} fill="#FFB800" className="text-[#FFB800]" />
                    <span className="font-medium">{worker.rating}</span>
                    <span className="text-gray-500 text-sm">({worker.reviews})</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Rate:</span>
                    <span className="font-semibold text-[#004A57]">{worker.hourlyRate}/hr</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Experience:</span>
                    <span>{worker.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Availability:</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#0D9E55]" />
                      <span className={worker.availability.includes("Now") ? "text-[#0D9E55]" : ""}>
                        {worker.availability}
                      </span>
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                    onClick={() => navigate(`/worker-profile/${worker.id}`)}
                  >
                    View Profile
                  </Button>
                  <Button 
                    variant="primary" 
                    className="flex-1"
                    onClick={() => navigate('/appoint-workers')}
                  >
                    Appoint
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workers;
