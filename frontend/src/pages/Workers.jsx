import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Star, Search, Filter, Clock, CheckCircle, User, ArrowLeft, Phone, Calendar, Briefcase } from "lucide-react";
import { Badge } from "../components/ui/badge";

const Workers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  
  // Sample worker data with Indian names and locations
  const workers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Master Carpenter",
      location: "Andheri, Mumbai",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "₹350-450",
      experience: "10+ years",
      skills: ["Woodworking", "Framing", "Finishing"],
      availability: "Available Now",
      contactNo: "+91 98765 43210",
      previousProjects: [
        "Residential Complex, Powai",
        "Office Interiors, BKC",
        "Retail Store, Juhu"
      ]
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Electrician",
      location: "Koramangala, Bengaluru",
      rating: 4.8,
      reviews: 93,
      hourlyRate: "₹400-550",
      experience: "8 years",
      skills: ["Wiring", "Troubleshooting", "Installation"],
      availability: "Available in 2 weeks",
      contactNo: "+91 87654 32109",
      previousProjects: [
        "Tech Park, Whitefield",
        "Apartment Building, HSR Layout",
        "Commercial Complex, MG Road"
      ]
    },
    {
      id: 3,
      name: "Suresh Patel",
      role: "HVAC Technician",
      location: "Ahmedabad, Gujarat",
      rating: 4.7,
      reviews: 64,
      hourlyRate: "₹380-500",
      experience: "12 years",
      skills: ["Installation", "Maintenance", "Repair"],
      availability: "Available Now",
      contactNo: "+91 76543 21098",
      previousProjects: [
        "Hospital Building, Satellite",
        "Shopping Mall, CG Road",
        "IT Campus, GIFT City"
      ]
    },
    {
      id: 4,
      name: "Meena Verma",
      role: "Plumber",
      location: "Aundh, Pune",
      rating: 4.9,
      reviews: 58,
      hourlyRate: "₹350-480",
      experience: "7 years",
      skills: ["Pipefitting", "Repair", "Installation"],
      availability: "Available in 1 week",
      contactNo: "+91 65432 10987",
      previousProjects: [
        "Hotel Complex, Viman Nagar",
        "Residential Society, Baner",
        "College Campus, Kothrud"
      ]
    },
    {
      id: 5,
      name: "Arjun Singh",
      role: "General Laborer",
      location: "Lajpat Nagar, Delhi",
      rating: 4.5,
      reviews: 39,
      hourlyRate: "₹250-350",
      experience: "3 years",
      skills: ["Demolition", "Material Handling", "Cleanup"],
      availability: "Available Now",
      contactNo: "+91 54321 09876",
      previousProjects: [
        "Residential Project, Vasant Kunj",
        "Metro Station Work, Saket",
        "Demolition Work, Connaught Place"
      ]
    },
    {
      id: 6,
      name: "Ananya Reddy",
      role: "Painter",
      location: "Banjara Hills, Hyderabad",
      rating: 4.8,
      reviews: 47,
      hourlyRate: "₹300-400",
      experience: "6 years",
      skills: ["Interior", "Exterior", "Finishing"],
      availability: "Available Now",
      contactNo: "+91 43210 98765",
      previousProjects: [
        "Corporate Office, Hitech City",
        "Luxury Apartments, Jubilee Hills",
        "Retail Store, Gachibowli"
      ]
    }
  ];

  const handleViewProfile = (workerId) => {
    // Just set the selected ID to show the profile in-page
    setSelectedWorkerId(workerId);
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet India</span>
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
          {workers
            .filter(worker => 
              searchQuery === "" || 
              worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              worker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
              worker.location.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(worker => (
            <div key={worker.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {selectedWorkerId === worker.id ? (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{worker.name} - Profile</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedWorkerId(null)}
                    >
                      Back
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#004A57]">Contact Information</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone size={16} className="text-gray-500" />
                        <span>{worker.contactNo}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={16} className="text-gray-500" />
                        <span>{worker.location}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#004A57]">Work History</h4>
                      <div className="mt-2 space-y-2">
                        {worker.previousProjects.map((project, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Briefcase size={16} className="text-gray-500 mt-1" />
                            <span>{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#004A57]">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {worker.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        className="w-full bg-[#FF4B55] hover:bg-[#e03e48] text-white"
                        onClick={() => navigate('/appoint-workers')}
                      >
                        Appoint This Worker
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
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
                      onClick={() => handleViewProfile(worker.id)}
                    >
                      View Profile
                    </Button>
                    <Button 
                      className="flex-1 bg-[#FF4B55] hover:bg-[#e03e48] text-white"
                      onClick={() => navigate('/appoint-workers')}
                    >
                      Appoint
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workers;