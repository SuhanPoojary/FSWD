import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Star, MapPin, Calendar, Building, Phone, Mail, Wrench, FileCheck, BadgeCheck } from "lucide-react";


const ProjectDetails= () => {


  const { id } = useParams(); // No TypeScript type annotations
  
  const [activeTab, setActiveTab] = useState("current");
  
  const project = {
    id: 1,
    title: "Skyline Commercial Tower",
    subtitle: "High commercial building with sustainable design features.",
    company: {
      name: "Elite Construction Ltd",
      location: "Toronto, Ontario",
      email: "contact@elite.com",
      phone: "(555) 123-4567",
      logo: "/placeholder.svg",
      rating: 4.8,
      projects: 243,
      experience: 19,
      satisfaction: 98,
      description: "Elite Construction Ltd is a leading construction company with 19 years of experience in delivering high-quality commercial, residential, and industrial projects. Our commitment to excellence and sustainable building practices has earned us a reputation as one of the most trusted contractors in the region."
    },
    timeline: {
      startDate: "Jan 2023",
      endDate: "Dec 2024"
    },
    progress: 75,
    team: {
      workers: 12
    },
    specializations: [
      "Commercial", "Residential", "Industrial", "Renovation"
    ],
    licenses: [
      "Licensed General Contractor",
      "$5M Liability Insurance",
      "Workers Compensation"
    ]
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 bg-gray-300">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <div className="flex flex-col items-center mb-4">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={project.company.logo} alt={project.company.name} />
                  <AvatarFallback className="bg-gray-200">{project.company.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold">{project.company.name}</h1>
                <div className="bg-[#004A57] text-white text-xs px-3 py-1 rounded-full my-2">
                  Verified Pro
                </div>
                <div className="flex items-center mt-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      fill={i < Math.floor(project.company.rating) ? "#FF4B55" : "none"} 
                      className="h-4 w-4 text-[#FF4B55]" 
                    />
                  ))}
                  <span className="text-xs ml-1">({project.company.rating})</span>
                </div>
                
                <div className="grid grid-cols-3 w-full gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-lg font-bold">{project.company.projects}</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">{project.company.experience}yr</p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">{project.company.satisfaction}%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  className="w-full"
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full mt-2 border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                >
                  Review
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Company Details</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{project.company.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{project.company.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{project.company.phone}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h2 className="font-bold mb-4">Specializations</h2>
              <div className="flex flex-wrap gap-2">
                {project.specializations.slice(0, 2).map((spec, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.specializations.slice(2).map((spec, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-bold mb-4">Licenses & Insurance</h2>
              <ul className="space-y-3">
                {project.licenses.map((license, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BadgeCheck className="h-5 w-5 text-[#004A57] mt-0.5" />
                    <span className="text-sm">{license}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="current" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full bg-white mb-6 h-auto rounded-lg">
                <TabsTrigger 
                  value="current" 
                  className={`flex-1 rounded-none py-3 ${activeTab === 'current' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Current Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="completed" 
                  className={`flex-1 rounded-none py-3 ${activeTab === 'completed' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Completed Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className={`flex-1 rounded-none py-3 ${activeTab === 'team' ? 'border-b-2 border-[#FF4B55]' : ''}`}
                >
                  Our Team
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <h2 className="text-xl font-bold mb-6">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.subtitle}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-medium">{project.timeline.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">End Date</p>
                      <p className="font-medium">{project.timeline.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium">{project.team.workers} workers</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm text-[#FF4B55] font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#FF4B55] h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="text-[#FF4B55] border-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                    >
                      View Details →
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-bold mb-4">Company Overview</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.company.description}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Completed Projects</h3>
                  <p className="text-gray-600">The company's past projects will be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="team">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Team Members</h3>
                  <p className="text-gray-600">Information about the team will be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
