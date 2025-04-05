
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { CheckCircle, Clock, MapPin, Star, User, X } from "lucide-react";

const ProfessionalMessages = () => {
  const [filters, setFilters] = useState({
    availableNow: false,
    verifiedOnly: false,
    minRating: 0
  });

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  
  
  // Mock data for applicants
  const applicants = [
    {
      id: 1,
      name: "Elite Constructions",
      avatar: "/placeholder.svg",
      verified: true,
      rating: 4.9,
      projects: 127,
      experience: 12,
      status: "available",
      projectName: "Residential construction"
    },
    {
      id: 2,
      name: "Commercial Projects",
      avatar: "/placeholder.svg",
      verified: true,
      rating: 4.8,
      projects: 98,
      experience: 8,
      status: "busy"
    },
    {
      id: 3,
      name: "Industrial Construction",
      avatar: "/placeholder.svg",
      verified: true,
      rating: 4.7,
      projects: 156,
      experience: 15,
      status: "available"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-projects" className="hover:text-[#FF4B55]">Find Projects</Link>
          <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
          <Link to="/professional-messages" className="hover:text-[#FF4B55] text-[#FF4B55]">Messages</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 bg-gray-300">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar - Filters */}
          <div className="w-full md:w-1/4 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="availableNow"
                  name="availableNow"
                  checked={filters.availableNow}
                  onChange={handleFilterChange}
                  className="h-4 w-4 text-[#FF4B55] border-gray-300 rounded focus:ring-[#FF4B55]"
                />
                <label htmlFor="availableNow" className="ml-2 text-sm text-gray-700">
                  Available Now
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="verifiedOnly"
                  name="verifiedOnly"
                  checked={filters.verifiedOnly}
                  onChange={handleFilterChange}
                  className="h-4 w-4 text-[#FF4B55] border-gray-300 rounded focus:ring-[#FF4B55]"
                />
                <label htmlFor="verifiedOnly" className="ml-2 text-sm text-gray-700">
                  Verified Only
                </label>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Minimum Rating</h3>
                <div className="flex items-center gap-1">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                      className={`p-2 rounded ${
                        filters.minRating === rating 
                          ? "bg-[#FF4B55] text-white" 
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {rating}+
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#004A57]">Incoming Applicants</h1>
                <div className="text-xl font-medium text-gray-700">
                  For {applicants[0].projectName}
                </div>
              </div>
              
              <div className="space-y-6">
                {applicants.map(applicant => (
                  <div key={applicant.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={applicant.avatar} alt={applicant.name} />
                        <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                              {applicant.name}
                              {applicant.verified && (
                                <span className="bg-[#004A57] text-white text-xs px-2 py-0.5 rounded-full">
                                  Verified Pro
                                </span>
                              )}
                            </h3>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  fill={i < Math.floor(applicant.rating) ? "#FF4B55" : "none"} 
                                  className="h-4 w-4 text-[#FF4B55]" 
                                />
                              ))}
                              <span className="text-xs ml-1">({applicant.rating})</span>
                            </div>
                          </div>
                          
                          <Button
                            variant="primary"
                            size="sm"
                            className="ml-auto"
                          >
                            Contact
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-3">
                          <div className="text-center">
                            <p className="text-lg font-bold">{applicant.projects}</p>
                            <p className="text-xs text-gray-500">Projects</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold">{applicant.rating}</p>
                            <p className="text-xs text-gray-500">Avg Rating</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold">{applicant.experience} years</p>
                            <p className="text-xs text-gray-500">Experience</p>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          {applicant.status === "available" ? (
                            <span className="flex items-center text-green-600 text-sm">
                              <CheckCircle className="h-4 w-4 mr-1" /> Available now
                            </span>
                          ) : (
                            <span className="flex items-center text-orange-500 text-sm">
                              <Clock className="h-4 w-4 mr-1" /> Currently busy
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalMessages;
