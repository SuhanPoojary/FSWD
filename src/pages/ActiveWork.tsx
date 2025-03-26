
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Calendar, Clock, CheckCircle, MapPin, FileText, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ActiveWork: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAttendanceDialog, setShowAttendanceDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [attendanceMarked, setAttendanceMarked] = useState<Record<string, boolean>>({});

  // Sample active work data - in a real app, this would come from context or API
  const activeJobs = [
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
      supervisor: "Michael Johnson"
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
      supervisor: "Sarah Wilson"
    }
  ];

  const handleMarkAttendance = (jobId: string) => {
    setSelectedJob(jobId);
    setShowAttendanceDialog(true);
  };

  const confirmAttendance = () => {
    if (selectedJob) {
      setAttendanceMarked({
        ...attendanceMarked,
        [selectedJob]: true
      });
      
      toast({
        title: "Attendance Marked",
        description: "Your attendance has been recorded successfully for today.",
      });
      
      setShowAttendanceDialog(false);
    }
  };

  const handleViewJobDetails = (jobId: string) => {
    navigate(`/job-info/${jobId}`);
  };

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
          <Link to="#" className="hover:text-gray-300">Contact us</Link>
          <Link to="#" className="hover:text-gray-300">About</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Active Work</h1>
        
        {activeJobs.length > 0 ? (
          <div className="space-y-6">
            {activeJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-col md:flex-row">
                      <div>
                        <h2 className="text-lg font-semibold">{job.title}</h2>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.status === 'active' ? 'Active' : job.status}
                        </span>
                        <p className="text-gray-600 mt-1">{job.hourlyRate}</p>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{job.startDate} - {job.endDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-sm"
                        onClick={() => handleViewJobDetails(job.id)}
                      >
                        <FileText className="w-4 h-4 mr-1" /> View Details
                      </Button>
                      
                      <Button 
                        variant={attendanceMarked[job.id] ? "outline" : "primary"}
                        size="sm"
                        className={`text-sm ${attendanceMarked[job.id] ? "bg-green-100 text-green-800 border-green-200" : ""}`}
                        onClick={() => handleMarkAttendance(job.id)}
                        disabled={attendanceMarked[job.id]}
                      >
                        {attendanceMarked[job.id] ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-1" /> Attendance Marked
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 mr-1" /> Mark Attendance
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BriefcaseIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-600">No Active Jobs</h3>
            <p className="text-gray-500 max-w-md mx-auto mt-2 mb-6">
              You don't have any active jobs at the moment. Browse available jobs to find work.
            </p>
            <Button onClick={() => navigate('/worker-dashboard')} variant="primary">
              Find Work
            </Button>
          </div>
        )}
        
        <div className="mt-8">
          <Button onClick={() => navigate('/worker-dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </main>
      
      {/* Attendance Dialog */}
      <Dialog open={showAttendanceDialog} onOpenChange={setShowAttendanceDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Mark Attendance</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <p className="mb-4">You are marking your attendance for today ({new Date().toLocaleDateString()}).</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="font-medium">Time:</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="font-medium">Location:</span>
                <span>Current Location</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              By confirming, you agree that you are physically present at the work location.
            </p>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline"
              onClick={() => setShowAttendanceDialog(false)}
              className="w-full md:w-auto"
            >
              Cancel
            </Button>
            <Button 
              onClick={confirmAttendance}
              variant="primary"
              className="w-full md:w-auto"
            >
              Confirm Attendance
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActiveWork;
