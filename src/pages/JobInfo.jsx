
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
} from "@/components/ui/alert-dialog";

const JobInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [showApplyDialog, setShowApplyDialog] = React.useState(false);

  // This would usually come from an API call based on the ID
  const job = {
    id,
    title: "Commercial Construction Helper",
    company: "ABC Construction Ltd",
    companyRating: 4.7,
    reviews: 128,
    location: "Toronto, ON",
    address: "123 Construction Ave, Toronto, ON M5V 2L7",
    jobType: "Full-time",
    duration: "3 months",
    hourlyRate: "$22-25",
    experience: "1-2 years",
    education: "High School Diploma",
    postedDate: "May 15, 2023",
    startDate: "June 1, 2023",
    deadline: "May 30, 2023",
    schedule: "Monday to Friday, 7:00 AM - 4:00 PM",
    description: "We are seeking reliable, hardworking Construction Helpers to join our team for a commercial building project in downtown Toronto. The ideal candidate has some construction experience, is reliable, and can work well in a team environment.",
    responsibilities: [
      "Assist skilled tradespeople with various tasks on the construction site",
      "Transport materials, tools, and equipment to workers",
      "Clean work areas, machines, tools, and remove debris",
      "Set up and take down temporary structures like scaffolding",
      "Follow safety protocols and report any hazards or unsafe conditions",
      "Perform basic construction tasks as directed by supervisors"
    ],
    requirements: [
      "1-2 years of experience in construction or related field preferred",
      "Ability to lift up to 50 lbs and stand for extended periods",
      "Valid driver's license is an asset",
      "High school diploma or equivalent",
      "Knowledge of basic construction tools and techniques",
      "Reliable transportation to job sites"
    ],
    benefits: [
      "Competitive hourly rate",
      "Overtime opportunities",
      "On-the-job training",
      "Potential for permanent employment for top performers",
      "Weekly pay schedule"
    ],
    skills: [
      "Construction", "Material Handling", "Physical Stamina", "Team Collaboration", "Safety Compliance"
    ]
  };

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
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/worker-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/job-info/1742961196903" className="hover:text-[#FF4B55] text-[#FF4B55]">Jobs</Link>
            <Link to="/active-work" className="hover:text-[#FF4B55]">Active Work</Link>
            <Link to="/worker-profile" className="hover:text-[#FF4B55]">Profile</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <div>
                <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-200">
                  {job.jobType}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                <div className="flex items-center mt-2">
                  <Link to="/company/abc-construction" className="text-[#004A57] hover:underline font-medium">
                    {job.company}
                  </Link>
                  <div className="flex items-center ml-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm">{job.companyRating}</span>
                    <span className="ml-1 text-xs text-gray-500">({job.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <AlertDialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="primary" size="lg" className="w-full md:w-auto">
                      Apply for Position
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
                      <AlertDialogAction onClick={handleApply}>
                        Confirm Application
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-600">{job.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Start Date</div>
                    <div className="text-gray-600">{job.startDate}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Schedule</div>
                    <div className="text-gray-600">{job.schedule}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Job Type</div>
                    <div className="text-gray-600">{job.jobType} | {job.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Compensation</div>
                    <div className="text-gray-600">{job.hourlyRate} per hour</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#004A57] mt-0.5" />
                  <div>
                    <div className="font-medium">Application Deadline</div>
                    <div className="text-gray-600">{job.deadline}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.benefits.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Building className="h-5 w-5 text-[#004A57] mr-2" />
                <h2 className="text-xl font-semibold">About {job.company}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4">
                    ABC Construction Ltd is a leading construction company specializing in commercial and residential projects across Ontario. With over 25 years of experience, we pride ourselves on safety, quality workmanship, and timely project delivery.
                  </p>
                  
                  <div className="flex items-center text-sm text-[#004A57] mt-4">
                    <Globe className="h-4 w-4 mr-2" />
                    <a href="#" className="hover:underline">Visit company website</a>
                  </div>
                  
                  <div className="flex items-center text-sm text-[#004A57] mt-2">
                    <FileText className="h-4 w-4 mr-2" />
                    <a href="#" className="hover:underline">View all jobs from this company</a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Employees</span>
                    <span className="text-sm font-medium">50-200</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Founded</span>
                    <span className="text-sm font-medium">1998</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Industry</span>
                    <span className="text-sm font-medium">Construction</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Specializations</span>
                    <span className="text-sm font-medium">Commercial, Residential</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => navigate(-1)}
              >
                Back to Jobs
              </Button>
              
              <AlertDialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
                <AlertDialogTrigger asChild>
                  <Button variant="primary">
                    Apply for Position
                  </Button>
                </AlertDialogTrigger>
              </AlertDialog>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobInfo;
