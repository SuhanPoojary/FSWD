
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon, MapPinIcon, CalendarIcon, ClockIcon, BriefcaseIcon, PhoneIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WorkerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [jobs, setJobs] = useState([
    { id: "1", company: "Elite Builders", distance: "2.5 km", location: "Commercial Tower", duration: "3 months", hourlyRate: "$55/hr", address: "123 Construction Ave, Building Site 48", phone: "+1 (555) 123-4567", startDate: "2024-02-01 08:00 AM" },
    { id: "2", company: "BuildRight Inc", distance: "4.8 km", location: "Office Building", duration: "6 months", hourlyRate: "$48/hr" },
    { id: "3", company: "City Construction", distance: "1.2 km", location: "Shopping Mall", duration: "4 months", hourlyRate: "$52/hr" },
  ]);
  
  const [recommendedJobs, setRecommendedJobs] = useState([
    {
      id: "4",
      title: "Commercial Building Project",
      company: "Arlington Construction",
      hourlyRate: "$35/hr",
      type: "Full-time",
      skill: "Carpentry"
    },
    {
      id: "5",
      title: "Residential Renovation",
      company: "HomeBuilders Inc",
      hourlyRate: "$32/hr",
      type: "Contract",
      skill: "General Labor"
    }
  ]);
  
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAcceptDialog, setShowAcceptDialog] = useState(false);
  const [activeJobs, setActiveJobs] = useState([]);

  // Load active jobs from localStorage on component mount
  useEffect(() => {
    const savedActiveJobs = localStorage.getItem('activeJobs');
    if (savedActiveJobs) {
      setActiveJobs(JSON.parse(savedActiveJobs));
    }
    
    // Clean up jobs that have already been accepted
    const savedAcceptedJobIds = localStorage.getItem('acceptedJobIds');
    if (savedAcceptedJobIds) {
      const acceptedIds = JSON.parse(savedAcceptedJobIds);
      setJobs(prevJobs => prevJobs.filter(job => !acceptedIds.includes(job.id)));
      setRecommendedJobs(prevJobs => prevJobs.filter(job => !acceptedIds.includes(job.id)));
    }
  }, []);

  const handleAccept = (job) => {
    setSelectedJob(job);
    setShowAcceptDialog(true);
  };

  const confirmAccept = () => {
    if (selectedJob) {
      // Add job to active jobs
      const updatedActiveJobs = [...activeJobs, {...selectedJob, accepted: true}];
      setActiveJobs(updatedActiveJobs);
      
      // Save to localStorage
      localStorage.setItem('activeJobs', JSON.stringify(updatedActiveJobs));
      
      // Track accepted job IDs to remove them from available jobs
      const acceptedJobIds = JSON.parse(localStorage.getItem('acceptedJobIds') || '[]');
      acceptedJobIds.push(selectedJob.id);
      localStorage.setItem('acceptedJobIds', JSON.stringify(acceptedJobIds));
      
      // Remove the job from available jobs
      setJobs(jobs.filter(j => j.id !== selectedJob.id));
      setRecommendedJobs(recommendedJobs.filter(j => j.id !== selectedJob.id));
      
      setShowAcceptDialog(false);
      
      toast({
        title: "Job Accepted",
        description: "The job has been added to your Active Work.",
      });
    }
  };

  const handleReject = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    setRecommendedJobs(recommendedJobs.filter(job => job.id !== jobId));
  };

  const goToProfile = () => {
    navigate('/worker-profile');
  };

  const goToActiveWork = () => {
    navigate('/active-work');
  };

  const handleLogout = () => {
    navigate('/login?role=worker');
  };

  const handleViewJobDetail = (jobId) => {
    navigate(`/job-detail/${jobId}`);
  };

  const allAvailableJobs = [
    ...jobs.map(job => ({
      id: job.id,
      company: job.company,
      distance: job.distance,
      location: job.location,
      duration: job.duration,
      hourlyRate: job.hourlyRate,
      address: job.address,
      phone: job.phone,
      startDate: job.startDate
    })),
    ...recommendedJobs.map(rj => ({
      id: rj.id,
      company: rj.company,
      distance: "Nearby",
      location: rj.title,
      duration: "Variable",
      hourlyRate: rj.hourlyRate
    }))
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-[#FF4B55] flex items-center justify-center text-white text-xs">
              {activeJobs.length}
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span>John Doe</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {showAllJobs ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Jobs Near You</h1>
              <Button variant="primary" onClick={() => setShowAllJobs(false)}>
                Back to Dashboard
              </Button>
            </div>
            <div className="space-y-4">
              {allAvailableJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-lg font-semibold">{job.company}</h2>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        <span>{job.distance}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <BriefcaseIcon className="w-4 h-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">{job.hourlyRate}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <Button 
                      className="flex items-center justify-center" 
                      onClick={() => handleAccept(job)}
                      variant="primary"
                    >
                      <CheckIcon className="w-4 h-4 mr-1" /> Accept
                    </Button>
                    <Button 
                      className="flex items-center justify-center bg-[#FF4B55] hover:bg-[#E43F49] text-white" 
                      onClick={() => handleReject(job.id)}
                    >
                      <XIcon className="w-4 h-4 mr-1" /> Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-gray-500 text-sm mb-2">Total Applications</h2>
                <p className="text-4xl font-bold">45</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-gray-500 text-sm mb-2">Interviews Scheduled</h2>
                <p className="text-4xl font-bold">12</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-gray-500 text-sm mb-2">Active Jobs</h2>
                <p className="text-4xl font-bold">{activeJobs.length}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Recommended Jobs */}
              <div className="col-span-2 bg-[#FF4B55] text-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.5839C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className="text-xl font-bold">Recommended Jobs</h2>
                </div>
                <p className="mb-6">Find jobs matched to your skills and experience</p>
                
                <div className="grid grid-cols-1 gap-4">
                  {recommendedJobs.map(job => (
                    <div key={job.id} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer" onClick={() => handleViewJobDetail(job.id)}>
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{job.title}</h3>
                        <span className="text-sm">{job.hourlyRate}</span>
                      </div>
                      <p className="text-sm opacity-80">{job.company}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">{job.type}</span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">{job.skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowAllJobs(true)}
                  className="mt-4 bg-white text-[#FF4B55] font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  View All Jobs
                </button>
              </div>
              
              {/* Profile & Active Work */}
              <div className="flex flex-col gap-6">
                <div 
                  className="bg-white rounded-lg shadow-sm p-6 hover:border-[#FF4B55] hover:border cursor-pointer transition-colors"
                  onClick={goToProfile}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className="text-xl font-bold text-[#121224]">Update Profile</h2>
                  </div>
                  <p className="text-[#717B9E] text-sm">Keep your profile information up to date</p>
                </div>
                
                <div 
                  className="bg-white rounded-lg shadow-sm p-6 hover:border-[#FF4B55] hover:border cursor-pointer transition-colors"
                  onClick={goToActiveWork}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className="text-xl font-bold text-[#121224]">Active Work</h2>
                  </div>
                  <p className="text-[#717B9E] text-sm">Manage your ongoing work assignments</p>
                </div>
                
                <button 
                  className="bg-[#FF4B55] text-white font-medium py-3 px-4 rounded hover:bg-[#E43F49] transition-colors w-full"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Job Accepted Dialog */}
      <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckIcon className="h-5 w-5 text-green-600" />
              </div>
              Job Accepted!
            </DialogTitle>
          </DialogHeader>
          
          {selectedJob && (
            <div className="py-4">
              <h3 className="text-lg font-semibold mb-4">Contractor Details</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.company}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPinIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.address || "Address information not available"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <PhoneIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.phone || "Contact information not available"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <ClockIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.startDate || "Start date not specified"}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Job Details</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CalendarIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{selectedJob.duration}</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-gray-500 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>{selectedJob.hourlyRate}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Accepted on: {new Date().toLocaleString()}</span>
                </div>
                <div className="flex items-start gap-2">
                  <BriefcaseIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>Job ID: JOB-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              className="w-full bg-[#004A57] hover:bg-[#003440] text-white" 
              onClick={confirmAccept}
            >
              Back to Home
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkerDashboard;
