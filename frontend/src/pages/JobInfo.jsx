import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Briefcase, 
  DollarSign, 
  ChevronLeft, 
  Star,
  Building,
  FileText,
  Globe
} from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { useToast } from "../hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const JobInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [showApplyDialog, setShowApplyDialog] = React.useState(false);

  // Sample job data with Indian context
  const jobs = {
    "1": {
      id: "1",
      title: "Commercial Construction Helper",
      company: "Ashoka Builders Pvt Ltd",
      companyRating: 4.3,
      reviews: 86,
      location: "Mumbai, MH",
      address: "123 Andheri East, Mumbai, Maharashtra 400069",
      jobType: "Full-time",
      duration: "3 months",
      hourlyRate: "₹150-180",
      experience: "1-2 years",
      education: "10th Pass",
      postedDate: "10 April, 2025",
      startDate: "20 April, 2025",
      deadline: "18 April, 2025",
      schedule: "Monday to Saturday, 8:00 AM - 5:00 PM",
      description: "We are seeking reliable, hardworking Construction Helpers for our commercial project in Mumbai. The ideal candidate has some construction experience and works well in a team.",
      responsibilities: [
        "Assist skilled workers at construction site",
        "Transport materials and tools as needed",
        "Clean work areas and remove debris",
        "Follow safety protocols and report hazards"
      ],
      requirements: [
        "1-2 years experience in construction",
        "Ability to lift up to 25 kg",
        "Basic knowledge of construction tools",
        "Reliable attendance"
      ],
      benefits: [
        "PF and ESI benefits",
        "Weekly payment",
        "On-site accommodation available",
        "Possibility of permanent role"
      ],
      skills: [
        "Construction", "Labour Work", "Teamwork", "Safety Compliance"
      ]
    },
    "2": {
      id: "2",
      title: "Data Entry Operator",
      company: "TechMind Solutions",
      companyRating: 4.1,
      reviews: 52,
      location: "Bengaluru, KA",
      address: "42 Koramangala, Bengaluru, Karnataka 560034",
      jobType: "Part-time",
      duration: "6 months",
      hourlyRate: "₹120-140",
      experience: "0-1 years",
      education: "12th Pass",
      postedDate: "8 April, 2025",
      startDate: "22 April, 2025",
      deadline: "19 April, 2025",
      schedule: "Monday to Friday, 10:00 AM - 4:00 PM",
      description: "Looking for accurate and fast Data Entry Operators to join our growing team in Bengaluru.",
      responsibilities: [
        "Enter data into company systems",
        "Verify data accuracy",
        "Update records and databases",
        "Scan and organize documents"
      ],
      requirements: [
        "Good typing speed (40+ WPM)",
        "Basic computer knowledge",
        "Attention to detail",
        "English communication skills"
      ],
      benefits: [
        "Flexible work hours",
        "Monthly incentives for accuracy",
        "Free snacks and tea",
        "Transportation allowance"
      ],
      skills: [
        "Data Entry", "MS Excel", "Typing", "Record Keeping"
      ]
    },
    "3": {
      id: "3",
      title: "Delivery Associate",
      company: "Swiggy",
      companyRating: 4.0,
      reviews: 205,
      location: "Delhi NCR",
      address: "Various locations across Delhi NCR",
      jobType: "Full-time",
      duration: "Permanent",
      hourlyRate: "₹130-200",
      experience: "No experience required",
      education: "8th Pass",
      postedDate: "5 April, 2025",
      startDate: "Immediate",
      deadline: "20 April, 2025",
      schedule: "Flexible shifts, 8-hour rotations",
      description: "Join India's leading food delivery platform as a Delivery Associate and earn competitive pay with flexible hours.",
      responsibilities: [
        "Pick up and deliver food orders",
        "Navigate city streets efficiently",
        "Maintain delivery vehicle in good condition",
        "Provide excellent customer service"
      ],
      requirements: [
        "Own two-wheeler with valid driving license",
        "Smartphone with internet connectivity",
        "Knowledge of city roads",
        "Aadhaar card and PAN card"
      ],
      benefits: [
        "Daily payouts available",
        "Accident insurance",
        "Fuel allowance",
        "Incentives during peak hours"
      ],
      skills: [
        "Driving", "Navigation", "Customer Service", "Time Management"
      ]
    }
  };

  const job = jobs[id] || jobs["1"];

  const handleApply = () => {
    // In a real app, you would submit the application to the backend
    console.log("Applying for job:", job.id);
    setShowApplyDialog(false);
    
    toast({
      title: "Application Submitted",
      description: "Your job application has been successfully submitted.",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-[#004a57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF0000] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/worker-dashboard" className="hover:text-[#FFC300]">Dashboard</Link>
            <Link to="/job-info/1" className="hover:text-[#FFC300] text-[#FFC300]">Jobs</Link>
            <Link to="/active-work" className="hover:text-[#FFC300]">Active Work</Link>
            <Link to="/worker-profile" className="hover:text-[#FFC300]">Profile</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FFC300] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 max-w-4xl">
        <div className="mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#FF5733] transition-all duration-300"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-5 md:p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-200">
                  {job.jobType}
                </Badge>
                <h1 className="text-xl md:text-2xl font-bold">{job.title}</h1>
                <div className="flex items-center mt-2">
                  <Link to={`/company/${job.id}`} className="text-[#FF5733] hover:underline font-medium">
                    {job.company}
                  </Link>
                  <div className="flex items-center ml-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm">{job.companyRating}</span>
                    <span className="ml-1 text-xs text-gray-500">({job.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <AlertDialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="primary" size="lg" className="w-full md:w-auto bg-[#FF5733] hover:bg-[#E24B2C]">
                      Apply
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apply for this job?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You are about to apply for the position of {job.title} at {job.company}. Your profile information will be shared with the employer.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleApply} className="bg-[#FF5733]">
                        Confirm Application
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">{job.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Start Date</div>
                    <div className="text-gray-600">{job.startDate}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Schedule</div>
                    <div className="text-gray-600">{job.schedule}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Briefcase className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Job Type</div>
                    <div className="text-gray-600">{job.jobType} | {job.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Pay</div>
                    <div className="text-gray-600">{job.hourlyRate} per hour</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-[#FF5733] mt-0.5" />
                  <div>
                    <div className="font-medium">Application Deadline</div>
                    <div className="text-gray-600">{job.deadline}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Job Description</h2>
              <p className="text-gray-700">{job.description}</p>
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-1">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Requirements</h2>
              <ul className="list-disc pl-5 space-y-1">
                {job.requirements.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Benefits</h2>
              <ul className="list-disc pl-5 space-y-1">
                {job.benefits.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="bg-[#FFF8E8] p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Building className="h-5 w-5 text-[#FF5733] mr-2" />
                <h2 className="text-lg font-semibold">About {job.company}</h2>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Employees</span>
                  <span className="font-medium">50-200</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">2008</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="font-medium">
                    {id === "1" ? "Construction" : 
                     id === "2" ? "IT" : "Food Delivery"}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-[#FF5733] mt-3">
                <FileText className="h-4 w-4 mr-2" />
                <a href="#" className="hover:underline">View all jobs from this company</a>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => navigate('/job-listing')}
              >
                View All Jobs
              </Button>
              
              <AlertDialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
                <AlertDialogTrigger asChild>
                  <Button variant="primary" className="bg-[#FF5733] hover:bg-[#E24B2C]">
                    Apply
                  </Button>
                </AlertDialogTrigger>
              </AlertDialog>
            </div>
          </div>
        </div>
        
        {/* Job Navigation */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-medium mb-3">Similar Jobs</h3>
          <div className="space-y-2">
            {Object.values(jobs)
              .filter(j => j.id !== id)
              .map(otherJob => (
                <Link 
                  key={otherJob.id} 
                  to={`/job-info/${otherJob.id}`}
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md"
                >
                  <div>
                    <div className="font-medium">{otherJob.title}</div>
                    <div className="text-sm text-gray-600">{otherJob.company} • {otherJob.location}</div>
                  </div>
                  <div className="text-[#FF5733]">{otherJob.hourlyRate}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobInfo;