
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Briefcase, MapPin, Calendar, Bell, ChevronRight, User, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WorkerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Sample data for jobs
  const recommendedJobs = [
    {
      id: "1742961196903",
      title: "Commercial Construction Helper",
      company: "ABC Construction Ltd",
      location: "Toronto, ON",
      hourlyRate: "$22-25",
      postedDate: "2 days ago",
      deadline: "May 30, 2023",
      status: "Open"
    },
    {
      id: "1742961196904",
      title: "Residential Renovation Assistant",
      company: "HomeBuilders Inc",
      location: "Vancouver, BC",
      hourlyRate: "$20-23",
      postedDate: "3 days ago",
      deadline: "May 28, 2023",
      status: "Open"
    },
    {
      id: "1742961196905",
      title: "Construction Site Cleanup",
      company: "Clean Sites Co",
      location: "Calgary, AB",
      hourlyRate: "$18-20",
      postedDate: "1 week ago",
      deadline: "May 25, 2023",
      status: "Open"
    }
  ];

  const activeJobs = [
    {
      id: "1742961196906",
      title: "Highway Expansion Project",
      company: "RoadWorks Construction",
      location: "Edmonton, AB",
      hourlyRate: "$24-28",
      startDate: "June 5, 2023",
      endDate: "August 30, 2023",
      schedule: "Mon-Fri, 7am-4pm",
      attendance: 15,
      totalDays: 20
    },
    {
      id: "1742961196907",
      title: "Office Building Renovation",
      company: "Urban Development Corp",
      location: "Toronto, ON",
      hourlyRate: "$26-30",
      startDate: "May 15, 2023",
      endDate: "July 25, 2023",
      schedule: "Mon-Fri, 8am-5pm",
      attendance: 8,
      totalDays: 10
    }
  ];

  const upcomingShifts = [
    {
      id: 1,
      date: "Tomorrow",
      time: "7:00 AM - 4:00 PM",
      location: "123 Construction Site, Toronto"
    },
    {
      id: 2,
      date: "May 24, 2023",
      time: "8:00 AM - 5:00 PM",
      location: "456 Building Project, Scarborough"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "Job Application Accepted",
      message: "Your application for 'Office Building Renovation' was accepted",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "New Job Recommendation",
      message: "A new job matching your skills is available",
      time: "1 day ago"
    },
    {
      id: 3,
      title: "Payment Processed",
      message: "Your payment of $560 has been processed",
      time: "2 days ago"
    }
  ];

  const handleApplyJob = (jobId) => {
    // In a real app, this would send an application to the backend
    console.log("Applied for job:", jobId);
    
    toast({
      title: "Application Submitted",
      description: "Your job application has been successfully submitted.",
    });
  };

  const handleAcceptJob = (jobId) => {
    // In a real app, this would accept the job offer
    console.log("Accepted job:", jobId);
    
    toast({
      title: "Job Accepted",
      description: "You have successfully accepted this job offer. It has been added to your Active Jobs.",
    });
  };

  const handleViewAllJobs = () => {
    navigate('/job-info/1742961196903');
  };

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
            <Link to="/worker-dashboard" className="hover:text-[#FF4B55] text-[#FF4B55]">Dashboard</Link>
            <Link to="/job-info/1742961196903" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/active-work" className="hover:text-[#FF4B55]">Active Work</Link>
            <Link to="/worker-profile" className="hover:text-[#FF4B55]">Profile</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-100 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-[#FF4B55] text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
          <button 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-6 w-6 text-gray-100" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-[#004A57] text-white py-2 px-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/worker-dashboard" className="py-2 hover:text-[#FF4B55] text-[#FF4B55]">Dashboard</Link>
            <Link to="/job-info/1742961196903" className="py-2 hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/active-work" className="py-2 hover:text-[#FF4B55]">Active Work</Link>
            <Link to="/worker-profile" className="py-2 hover:text-[#FF4B55]">Profile</Link>
          </nav>
        </div>
      )}

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Worker Dashboard</h1>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === "dashboard" ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </Button>
            <Button
              variant={activeTab === "notifications" ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </Button>
          </div>
        </div>

        {activeTab === "dashboard" ? (
          <div className="space-y-8">
            {/* Recommended Jobs */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recommended Jobs</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleViewAllJobs}
                  className="text-[#004A57]"
                >
                  View All Jobs
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedJobs.map(job => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-gray-600 text-sm">{job.company}</p>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        {job.status}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Rate:</span>
                        <span className="font-medium ml-1">{job.hourlyRate}/hr</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Posted:</span>
                        <span className="ml-1">{job.postedDate}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      <Calendar size={14} className="inline mr-1" />
                      <span>Apply by {job.deadline}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                        onClick={() => navigate(`/job-info/${job.id}`)}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="primary" 
                        className="flex-1"
                        onClick={() => handleAcceptJob(job.id)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Jobs */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Active Jobs</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/active-work')}
                  className="text-[#004A57]"
                >
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeJobs.map(job => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-500">Rate:</span>
                        <span className="font-medium ml-1">{job.hourlyRate}/hr</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Schedule:</span>
                        <span className="ml-1">{job.schedule}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Start:</span>
                        <span className="ml-1">{job.startDate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">End:</span>
                        <span className="ml-1">{job.endDate}</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Attendance</span>
                        <span>{job.attendance}/{job.totalDays} days</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-[#004A57] h-2 rounded-full"
                          style={{ width: `${(job.attendance / job.totalDays) * 100}%` }}
                        />
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                      onClick={() => navigate(`/active-work/${job.id}`)}
                    >
                      View Job Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Shifts */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Upcoming Shifts</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {upcomingShifts.length > 0 ? (
                  <div className="divide-y">
                    {upcomingShifts.map(shift => (
                      <div key={shift.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{shift.date}</div>
                            <div className="text-sm text-gray-500 mt-1">
                              <Clock size={14} className="inline mr-1" />
                              {shift.time}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              <MapPin size={14} className="inline mr-1" />
                              {shift.location}
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                          >
                            Check In
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No upcoming shifts</h3>
                    <p className="mt-1 text-sm text-gray-500">You don't have any scheduled shifts coming up.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
            {notifications.length > 0 ? (
              <div className="divide-y">
                {notifications.map(notification => (
                  <div key={notification.id} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <Bell size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{notification.message}</div>
                        <div className="text-xs text-gray-400 mt-2">{notification.time}</div>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Bell className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No notifications</h3>
                <p className="mt-1 text-sm text-gray-500">You're all caught up! No new notifications.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkerDashboard;
