import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Briefcase, MapPin, Calendar, Clock, CheckCircle, X, ChevronDown, Phone, Mail, User } from "lucide-react";
import { Separator } from "../components/ui/separator";

const ActiveWork = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState(null);
  
  // Updated active jobs data with Indian companies and locations
  const activeJobs = [
    {
      id: "1742961196906",
      title: "Metro Line Extension Project",
      company: "L&T Infrastructure",
      location: "Mumbai, Maharashtra",
      hourlyRate: "₹280-320",
      startDate: "June 5, 2023",
      endDate: "August 30, 2023",
      schedule: "Mon-Sat, 8am-5pm",
      attendance: 15,
      totalDays: 20,
      shifts: [
        { date: "June 5, 2023", status: "completed", hours: 8 },
        { date: "June 6, 2023", status: "completed", hours: 8 },
        { date: "June 7, 2023", status: "completed", hours: 8 },
        { date: "June 8, 2023", status: "completed", hours: 8 },
        { date: "June 9, 2023", status: "completed", hours: 8 },
        { date: "June 12, 2023", status: "completed", hours: 8 },
        { date: "June 13, 2023", status: "completed", hours: 8 },
        { date: "June 14, 2023", status: "completed", hours: 8 },
        { date: "June 15, 2023", status: "completed", hours: 8 },
        { date: "June 16, 2023", status: "completed", hours: 8 },
        { date: "June 19, 2023", status: "upcoming" },
        { date: "June 20, 2023", status: "upcoming" },
        { date: "June 21, 2023", status: "upcoming" },
        { date: "June 22, 2023", status: "upcoming" },
        { date: "June 23, 2023", status: "upcoming" },
      ]
    },
    {
      id: "1742961196907",
      title: "IT Park Development",
      company: "Godrej Properties",
      location: "Bengaluru, Karnataka",
      hourlyRate: "₹300-350",
      startDate: "May 15, 2023",
      endDate: "July 25, 2023",
      schedule: "Mon-Fri, 9am-6pm",
      attendance: 8,
      totalDays: 10,
      shifts: [
        { date: "May 15, 2023", status: "completed", hours: 8 },
        { date: "May 16, 2023", status: "completed", hours: 8 },
        { date: "May 17, 2023", status: "completed", hours: 8 },
        { date: "May 18, 2023", status: "completed", hours: 8 },
        { date: "May 19, 2023", status: "completed", hours: 8 },
        { date: "May 22, 2023", status: "completed", hours: 8 },
        { date: "May 23, 2023", status: "completed", hours: 8 },
        { date: "May 24, 2023", status: "missed", hours: 0 },
        { date: "May 25, 2023", status: "upcoming" },
        { date: "May 26, 2023", status: "upcoming" },
      ]
    },
    {
      id: "1742961196908",
      title: "Residential Complex Construction",
      company: "DLF Builders",
      location: "Gurgaon, Haryana",
      hourlyRate: "₹250-300",
      startDate: "July 10, 2023",
      endDate: "October 20, 2023",
      schedule: "Mon-Sat, 7am-4pm",
      attendance: 5,
      totalDays: 15,
      shifts: [
        { date: "July 10, 2023", status: "completed", hours: 8 },
        { date: "July 11, 2023", status: "completed", hours: 8 },
        { date: "July 12, 2023", status: "completed", hours: 8 },
        { date: "July 13, 2023", status: "completed", hours: 8 },
        { date: "July 14, 2023", status: "completed", hours: 8 },
        { date: "July 17, 2023", status: "upcoming" },
        { date: "July 18, 2023", status: "upcoming" },
        { date: "July 19, 2023", status: "upcoming" },
        { date: "July 20, 2023", status: "upcoming" },
        { date: "July 21, 2023", status: "upcoming" },
      ]
    },
    {
      id: "1742961196909",
      title: "Highway Repair & Maintenance",
      company: "GMR Infrastructure",
      location: "Chennai, Tamil Nadu",
      hourlyRate: "₹220-270",
      startDate: "June 20, 2023",
      endDate: "September 5, 2023",
      schedule: "Mon-Fri, 6am-3pm",
      attendance: 7,
      totalDays: 12,
      shifts: [
        { date: "June 20, 2023", status: "completed", hours: 8 },
        { date: "June 21, 2023", status: "completed", hours: 8 },
        { date: "June 22, 2023", status: "completed", hours: 8 },
        { date: "June 23, 2023", status: "completed", hours: 8 },
        { date: "June 26, 2023", status: "completed", hours: 8 },
        { date: "June 27, 2023", status: "completed", hours: 8 },
        { date: "June 28, 2023", status: "missed", hours: 0 },
        { date: "June 29, 2023", status: "completed", hours: 8 },
        { date: "June 30, 2023", status: "upcoming" },
        { date: "July 3, 2023", status: "upcoming" },
        { date: "July 4, 2023", status: "upcoming" },
        { date: "July 5, 2023", status: "upcoming" },
      ]
    }
  ];

  const toggleJobExpansion = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
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
            <Link to="/worker-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/job-info/1742961196903" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/active-work" className="hover:text-[#FF4B55] text-[#FF4B55]">Active Work</Link>
            <Link to="/worker-profile" className="hover:text-[#FF4B55]">Profile</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/worker-dashboard')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ChevronDown className="mr-2 h-4 w-4 rotate-90" /> Back to Dashboard
          </Button>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Active Jobs</h1>
        </div>
        
        <div className="space-y-6">
          {activeJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/job-details/${job.id}`)}
                      className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white"
                    >
                      Job Details
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => toggleJobExpansion(job.id)}
                    >
                      Mark Attendance
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2 text-[#004A57]" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2 text-[#004A57]" />
                    {job.startDate} - {job.endDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2 text-[#004A57]" />
                    {job.schedule}
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Attendance Progress</span>
                    <span>{job.attendance}/{job.totalDays} days</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-[#004A57] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(job.attendance / job.totalDays) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {expandedJob === job.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <Separator className="mb-4" />
                  <h3 className="text-lg font-medium mb-4">Attendance Record</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Completed Shifts</h4>
                      <div className="space-y-2">
                        {job.shifts.filter(shift => shift.status === "completed").map((shift, index) => (
                          <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-md">
                            <div className="flex items-center">
                              <CheckCircle size={16} className="text-green-500 mr-2" />
                              <span>{shift.date}</span>
                            </div>
                            <span className="text-sm text-gray-600">{shift.hours} hrs</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Upcoming & Missed Shifts</h4>
                      <div className="space-y-2">
                        {job.shifts.filter(shift => shift.status === "missed").map((shift, index) => (
                          <div key={index} className="flex items-center justify-between bg-red-50 p-3 rounded-md">
                            <div className="flex items-center">
                              <X size={16} className="text-red-500 mr-2" />
                              <span>{shift.date}</span>
                            </div>
                            <span className="text-sm text-red-600">Missed</span>
                          </div>
                        ))}
                        
                        {job.shifts.filter(shift => shift.status === "upcoming").map((shift, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                            <div className="flex items-center">
                              <Briefcase size={16} className="text-gray-400 mr-2" />
                              <span>{shift.date}</span>
                            </div>
                            <span className="text-sm text-gray-600">Upcoming</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default ActiveWork;