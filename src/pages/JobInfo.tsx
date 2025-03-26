
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, MapPin, Clock, User, Building, ArrowLeft, 
  Phone, Mail, FileText, CheckCircle, AlertCircle, 
  Calendar as CalendarIcon, CheckSquare
} from "lucide-react";

// Sample job data - in a real app this would come from context or API
const jobsData = [
  {
    id: "job1",
    title: "Senior Mason",
    company: "Elite Constructions",
    location: "Downtown Commercial Complex",
    startDate: "2024-04-18",
    endDate: "2024-07-18",
    hourlyRate: "$55/hr",
    status: "active",
    address: "123 Construction Ave, Building Site 48",
    phone: "+1 (555) 123-4567",
    supervisor: "Michael Johnson",
    supervisorContact: "michael@eliteconstructions.com",
    workHours: "Mon-Fri, 8:00 AM - 5:00 PM",
    description: "Work on masonry requirements for the new commercial complex. Responsibilities include brick laying, concrete work, and finishing touches on the exterior facade.",
    requirements: "5+ years of experience in commercial masonry. Knowledge of modern techniques and safety protocols.",
    attendance: [
      { date: "2024-04-18", status: "present" },
      { date: "2024-04-19", status: "present" },
      { date: "2024-04-20", status: "weekend" },
      { date: "2024-04-21", status: "weekend" },
      { date: "2024-04-22", status: "present" },
      { date: "2024-04-23", status: "present" },
      { date: "2024-04-24", status: "present" },
    ]
  },
  {
    id: "job2",
    title: "Residential Renovation",
    company: "HomeBuilders Inc",
    location: "Westside Housing Development",
    startDate: "2024-04-15",
    endDate: "2024-06-15",
    hourlyRate: "$48/hr",
    status: "active",
    address: "456 Builder Rd, Phase 2",
    phone: "+1 (555) 987-6543",
    supervisor: "Sarah Wilson",
    supervisorContact: "sarah@homebuilders.com",
    workHours: "Mon-Fri, 7:30 AM - 4:30 PM",
    description: "General construction work on residential renovation projects. Tasks include demolition, framing, drywall installation, and basic finish work.",
    requirements: "2+ years of construction experience. Ability to follow blueprints and work independently.",
    attendance: [
      { date: "2024-04-15", status: "present" },
      { date: "2024-04-16", status: "present" },
      { date: "2024-04-17", status: "present" },
      { date: "2024-04-18", status: "present" },
      { date: "2024-04-19", status: "absent" },
      { date: "2024-04-20", status: "weekend" },
      { date: "2024-04-21", status: "weekend" },
      { date: "2024-04-22", status: "present" },
      { date: "2024-04-23", status: "present" },
      { date: "2024-04-24", status: "present" },
    ]
  }
];

const JobInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the job by ID
  const job = jobsData.find(j => j.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F6F7]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary" onClick={() => navigate('/active-work')}>
            Return to Active Work
          </Button>
        </div>
      </div>
    );
  }
  
  // Calculate attendance statistics
  const totalWorkdays = job.attendance.filter(a => a.status !== 'weekend').length;
  const presentDays = job.attendance.filter(a => a.status === 'present').length;
  const attendanceRate = totalWorkdays > 0 ? Math.round((presentDays / totalWorkdays) * 100) : 0;
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/worker-dashboard" className="hover:text-gray-300">Find Work</Link>
          <Link to="/active-work" className="hover:text-gray-300">Active Work</Link>
          <Link to="#" className="hover:text-gray-300">Contact us</Link>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Back button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/active-work')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Active Work
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                  
                  <span className="mx-2">•</span>
                  
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.status === 'active' ? 'Active' : job.status}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-[#004A57]">{job.hourlyRate}</div>
                <div className="text-sm text-gray-500 flex items-center justify-end gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{job.startDate} - {job.endDate}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Attendance Rate</h3>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{attendanceRate}%</span>
                  <div className="ml-auto">
                    <CheckCircle className={`h-6 w-6 ${attendanceRate >= 90 ? 'text-green-500' : attendanceRate >= 75 ? 'text-yellow-500' : 'text-red-500'}`} />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Days Present</h3>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{presentDays}</span>
                  <span className="text-gray-500 ml-2">/ {totalWorkdays}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Work Hours</h3>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>{job.workHours}</span>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="details" className="w-full">
            <div className="px-6 border-b border-gray-200">
              <TabsList className="bg-transparent mb-0 h-auto">
                <TabsTrigger 
                  value="details" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Job Details
                </TabsTrigger>
                <TabsTrigger 
                  value="attendance" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Attendance History
                </TabsTrigger>
                <TabsTrigger 
                  value="contact" 
                  className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#FF4B55] data-[state=active]:text-[#FF4B55] rounded-none"
                >
                  Contact Info
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="details" className="p-6 mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">Job Description</h2>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-3">Requirements</h2>
                  <p className="text-gray-700">{job.requirements}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-3">Company</h2>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{job.company}</h3>
                      <p className="text-gray-600 text-sm">{job.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="attendance" className="p-6 mt-0">
              <h2 className="text-lg font-semibold mb-4">Attendance History</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.attendance.map((record, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg flex items-center ${
                      record.status === 'present' ? 'bg-green-50' : 
                      record.status === 'absent' ? 'bg-red-50' : 'bg-gray-50'
                    }`}
                  >
                    <CalendarIcon className="h-5 w-5 mr-3 text-gray-500" />
                    <div>
                      <div className="font-medium">{record.date}</div>
                      <div className="text-sm flex items-center mt-1">
                        {record.status === 'present' ? (
                          <>
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            <span className="text-green-700">Present</span>
                          </>
                        ) : record.status === 'absent' ? (
                          <>
                            <AlertCircle className="h-3 w-3 text-red-500 mr-1" />
                            <span className="text-red-700">Absent</span>
                          </>
                        ) : (
                          <span className="text-gray-500">Weekend/Holiday</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="p-6 mt-0">
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Supervisor</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <User className="h-6 w-6 text-gray-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{job.supervisor}</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <a href={`tel:${job.phone}`} className="text-[#004A57] hover:underline">
                            {job.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <a href={`mailto:${job.supervisorContact}`} className="text-[#004A57] hover:underline">
                            {job.supervisorContact}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Work Location</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <MapPin className="h-6 w-6 text-gray-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{job.location}</p>
                      <p className="text-gray-600 mt-1">{job.address}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3"
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(job.address)}`, '_blank')}
                      >
                        View on Map
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Company</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Building className="h-6 w-6 text-gray-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{job.company}</p>
                      <div className="flex items-center mt-2">
                        <Phone className="h-4 w-4 text-gray-500 mr-2" />
                        <a href={`tel:${job.phone}`} className="text-[#004A57] hover:underline">
                          {job.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default JobInfo;
