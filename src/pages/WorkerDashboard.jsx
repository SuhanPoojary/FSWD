
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Clock, BriefcaseIcon, Star, CheckCircle, Bell } from "lucide-react";

// Mock data
const jobsNearYou = [
  {
    id: 1,
    title: "Construction Worker",
    company: "ABC Construction",
    location: "San Francisco, CA",
    distance: "5 miles away",
    hourlyRate: "$25/hr",
    postedAt: "2 days ago",
    badgeText: "Urgent",
    badgeVariant: "destructive",
    description: "We need experienced construction workers for a commercial building project.",
    requirements: "At least 2 years of experience in commercial construction.",
    match: 95
  },
  {
    id: 2,
    title: "Plumber Assistant",
    company: "XYZ Plumbing",
    location: "Oakland, CA",
    distance: "8 miles away",
    hourlyRate: "$22/hr",
    postedAt: "3 days ago",
    description: "Looking for a plumber assistant to help with residential projects.",
    requirements: "Basic knowledge of plumbing tools and systems.",
    match: 82
  },
  {
    id: 3,
    title: "Electrician",
    company: "Bright Sparks Electric",
    location: "San Jose, CA",
    distance: "15 miles away",
    hourlyRate: "$30/hr",
    postedAt: "1 day ago",
    badgeText: "New",
    badgeVariant: "secondary",
    description: "Electrician needed for commercial and residential projects.",
    requirements: "Licensed electrician with at least 3 years of experience.",
    match: 78
  }
];

const upcomingShifts = [
  {
    id: 1,
    title: "Construction Helper",
    company: "Big Building Inc.",
    date: "Today",
    time: "8:00 AM - 5:00 PM",
    location: "123 Main St, San Francisco, CA"
  },
  {
    id: 2,
    title: "Demolition Worker",
    company: "Clear Site Co.",
    date: "Tomorrow",
    time: "7:30 AM - 4:30 PM",
    location: "456 Park Ave, Oakland, CA"
  }
];

const WorkerDashboard = () => {
  const [jobsPending, setJobsPending] = useState([...jobsNearYou]);
  const [activeJobs, setActiveJobs] = useState([]);
  
  // Load active jobs from localStorage on component mount
  useEffect(() => {
    const storedActiveJobs = localStorage.getItem("activeJobs");
    if (storedActiveJobs) {
      setActiveJobs(JSON.parse(storedActiveJobs));
    }
  }, []);

  const handleAcceptJob = (jobId) => {
    // Find the job that was accepted
    const acceptedJob = jobsPending.find(job => job.id === jobId);
    
    if (acceptedJob) {
      // Remove the job from pending jobs
      const updatedPendingJobs = jobsPending.filter(job => job.id !== jobId);
      setJobsPending(updatedPendingJobs);
      
      // Add the job to active jobs
      const updatedActiveJobs = [...activeJobs, acceptedJob];
      setActiveJobs(updatedActiveJobs);
      
      // Store active jobs in localStorage
      localStorage.setItem("activeJobs", JSON.stringify(updatedActiveJobs));
      
      // Optional: Show success notification
      console.log(`Job ${jobId} has been accepted and moved to active jobs`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header with notification */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/worker-dashboard" className="text-[#FF4B55] font-medium">Dashboard</Link>
            <Link to="/jobs-near-you" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/active-work" className="hover:text-[#FF4B55]">Active Work</Link>
            <Link to="/worker-profile" className="hover:text-[#FF4B55]">Profile</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative hover:text-[#FF4B55]">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#FF4B55] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          <Link to="/worker-profile">
            <Avatar className="h-8 w-8 hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Welcome section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Welcome back, John</h1>
            <div className="text-sm text-gray-500">Monday, October 2, 2023</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-lg font-medium mb-1">Your next shift is coming up</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Today, 8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>123 Main St, San Francisco, CA</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link to="/active-work/1">
                  <Button variant="outline" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                    View Details
                  </Button>
                </Link>
                <Link to="/attendance/1">
                  <Button variant="primary">
                    Mark Attendance
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Hours Worked</h3>
                <div className="text-2xl font-bold mt-1">37.5 hrs</div>
                <div className="text-xs text-gray-500 mt-1">This Week</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Active Jobs</h3>
                <div className="text-2xl font-bold mt-1">{activeJobs.length}</div>
                <div className="text-xs text-gray-500 mt-1">Current</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BriefcaseIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">Rating</h3>
                <div className="flex items-center text-2xl font-bold mt-1">
                  4.8
                  <div className="flex ml-2 items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">From 12 jobs</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </Card>
        </section>

        {/* Main content area */}
        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="grid grid-cols-3 max-w-md">
            <TabsTrigger value="jobs">Recommended Jobs</TabsTrigger>
            <TabsTrigger value="shifts">Upcoming Shifts</TabsTrigger>
            <TabsTrigger value="active">Active Jobs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Jobs Near You</h2>
              <Link to="/jobs-near-you">
                <Button variant="link" className="text-[#004A57]">View All Jobs</Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobsPending.slice(0, 3).map((job) => (
                <motion.div 
                  key={job.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold">{job.title}</h3>
                      {job.badgeText && (
                        <Badge variant={job.badgeVariant || "default"}>
                          {job.badgeText}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">{job.company}</div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>Posted {job.postedAt}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-sm">Hourly rate</div>
                        <div className="text-[#004A57] font-bold">{job.hourlyRate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-right">Match</div>
                        <div className="flex items-center gap-1">
                          <span className="text-green-600 font-bold">{job.match}%</span>
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/jobs-near-you/${job.id}`}>
                        <Button variant="outline" className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        variant="primary" 
                        className="w-full"
                        onClick={() => handleAcceptJob(job.id)}
                      >
                        Accept Job
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="shifts" className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Upcoming Shifts</h2>
              <Link to="/active-work">
                <Button variant="link" className="text-[#004A57]">View All Shifts</Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingShifts.map((shift) => (
                <motion.div 
                  key={shift.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{shift.title}</h3>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {shift.date}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">{shift.company}</div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-1 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{shift.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{shift.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/active-work/${shift.id}`}>
                        <Button variant="outline" className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                          View Details
                        </Button>
                      </Link>
                      <Link to={`/attendance/${shift.id}`}>
                        <Button variant="primary" className="w-full">
                          Mark Attendance
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="active" className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Active Jobs</h2>
              <Link to="/active-work">
                <Button variant="link" className="text-[#004A57]">View All Active Jobs</Button>
              </Link>
            </div>
            
            {activeJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <BriefcaseIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Active Jobs</h3>
                <p className="text-gray-500 mb-6">
                  You don't have any active jobs at the moment. Browse available jobs to find work.
                </p>
                <Link to="/jobs-near-you">
                  <Button variant="primary">Find Jobs</Button>
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {activeJobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold">{job.title}</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Active
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">{job.company}</div>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-sm">Hourly rate</div>
                          <div className="text-[#004A57] font-bold">{job.hourlyRate}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Link to={`/active-work/${job.id}`}>
                          <Button variant="outline" className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                            View Details
                          </Button>
                        </Link>
                        <Link to={`/attendance/${job.id}`}>
                          <Button variant="primary" className="w-full">
                            Mark Attendance
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default WorkerDashboard;
