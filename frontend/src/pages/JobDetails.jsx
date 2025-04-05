import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Briefcase, MapPin, Calendar, Clock, Phone, Mail, User, Building, ChevronDown, Users, Banknote, FileText, Shield } from "lucide-react";
import { Separator } from "../components/ui/separator";

const JobDetails = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Job details data
  const jobsData = {
    "1742961196906": {
      id: "1742961196906",
      title: "Metro Line Extension Project",
      company: "L&T Infrastructure",
      location: "Mumbai, Maharashtra",
      address: "L&T Construction, Andheri East, Mumbai, Maharashtra 400069",
      contactPerson: "Rajesh Sharma",
      contactPhone: "+91-9876543210",
      contactEmail: "rajesh.sharma@ltinfra.com",
      hourlyRate: "₹280-320",
      startDate: "June 5, 2023",
      endDate: "August 30, 2023",
      schedule: "Mon-Sat, 8am-5pm",
      skillsRequired: ["Heavy Equipment Operation", "Concrete Work", "Steel Fixing", "Traffic Management"],
      description: "L&T Infrastructure is seeking skilled workers for the Metro Line Extension Project in Mumbai. This project involves extending the existing metro line by 12 kilometers with 8 new stations. Workers will be involved in various aspects including foundation work, concrete pouring, steel structure assembly, and station construction.",
      responsibilities: [
        "Operating construction equipment as directed by site supervisors",
        "Performing concrete work including mixing, pouring, and finishing",
        "Following safety protocols at all times",
        "Assisting with material handling and site cleanup",
        "Reporting any safety concerns or equipment issues immediately",
        "Maintaining work site cleanliness"
      ],
      requiredExperience: "Minimum 2 years in similar construction projects",
      safetyRequirements: "All workers must attend mandatory safety training before starting work. Safety equipment will be provided and must be worn at all times.",
      amenities: ["On-site restrooms", "Water stations", "Rest area", "First-aid facilities"],
      transportationInfo: "Workers can access the site via Mumbai Metro Line 1 (Andheri Station) or BEST bus routes 392, 398"
    },
    "1742961196907": {
      id: "1742961196907",
      title: "IT Park Development",
      company: "Godrej Properties",
      location: "Bengaluru, Karnataka",
      address: "Godrej Properties, Electronic City Phase II, Bengaluru, Karnataka 560100",
      contactPerson: "Priya Venkatesh",
      contactPhone: "+91-8765432109",
      contactEmail: "p.venkatesh@godrejproperties.com",
      hourlyRate: "₹300-350",
      startDate: "May 15, 2023",
      endDate: "July 25, 2023",
      schedule: "Mon-Fri, 9am-6pm",
      skillsRequired: ["Electrical Installation", "Plumbing", "Carpentry", "Interior Finishing"],
      description: "Godrej Properties is developing a state-of-the-art IT Park in Bengaluru's Electronic City. This project includes construction of 3 buildings spanning over 1.5 million sq. ft. of office space. The current phase requires workers for interior finishing, electrical work, plumbing, and landscaping.",
      responsibilities: [
        "Performing quality electrical installation work according to specifications",
        "Installing plumbing systems and fixtures as per design plans",
        "Executing interior work including partitioning, ceiling, and flooring",
        "Following all building codes and safety regulations",
        "Working collaboratively with other trade professionals"
      ],
      requiredExperience: "3+ years in commercial property development",
      safetyRequirements: "Daily safety briefings and mandatory use of PPE. Weekly safety audits will be conducted.",
      amenities: ["Air-conditioned rest areas", "Canteen facility", "Changing rooms", "Medical room"],
      transportationInfo: "Company shuttle available from Bommanahalli Bus Terminal and Electronic City Metro Station"
    },
    "1742961196908": {
      id: "1742961196908",
      title: "Residential Complex Construction",
      company: "DLF Builders",
      location: "Gurgaon, Haryana",
      address: "DLF Phase 5, Sector 53, Gurgaon, Haryana 122002",
      contactPerson: "Amit Chaudhary",
      contactPhone: "+91-7654321098",
      contactEmail: "a.chaudhary@dlfbuilders.com",
      hourlyRate: "₹250-300",
      startDate: "July 10, 2023",
      endDate: "October 20, 2023",
      schedule: "Mon-Sat, 7am-4pm",
      skillsRequired: ["Masonry", "Tile Work", "Painting", "General Labor"],
      description: "DLF Builders is constructing a premium residential complex consisting of 5 towers with 20 floors each. The project includes luxury apartments, community spaces, swimming pools, and landscaped gardens. Workers are needed for various construction phases including masonry, tiling, painting, and finishing work.",
      responsibilities: [
        "Building and repairing structures using bricks, concrete blocks, and other materials",
        "Installing ceramic, porcelain, and stone tiles on floors and walls",
        "Preparing surfaces and applying paint to walls, ceilings, and exteriors",
        "Assisting skilled tradespeople and carrying out general construction tasks",
        "Maintaining a clean and organized work area"
      ],
      requiredExperience: "1+ years in residential construction",
      safetyRequirements: "Safety orientation required on first day. Regular safety drills conducted monthly.",
      amenities: ["Rest shelters", "Drinking water stations", "Mobile toilet facilities", "First-aid station"],
      transportationInfo: "Site is accessible via Delhi Metro Yellow Line (IFFCO Chowk) and local bus routes 122, 125"
    },
    "1742961196909": {
      id: "1742961196909",
      title: "Highway Repair & Maintenance",
      company: "GMR Infrastructure",
      location: "Chennai, Tamil Nadu",
      address: "NH45, Tambaram, Chennai, Tamil Nadu 600045",
      contactPerson: "Senthil Kumar",
      contactPhone: "+91-6543210987",
      contactEmail: "s.kumar@gmrinfra.com",
      hourlyRate: "₹220-270",
      startDate: "June 20, 2023",
      endDate: "September 5, 2023",
      schedule: "Mon-Fri, 6am-3pm",
      skillsRequired: ["Asphalt Work", "Road Marking", "Traffic Management", "Heavy Equipment Operation"],
      description: "GMR Infrastructure is undertaking repair and maintenance work on a 30km stretch of National Highway 45 near Chennai. The project involves road resurfacing, drainage improvement, barrier installation, and road marking. Workers will be involved in various aspects of highway maintenance and repair.",
      responsibilities: [
        "Preparing road surfaces for asphalt application",
        "Operating asphalt pavers and rollers",
        "Installing road signs and barriers",
        "Applying road markings according to specifications",
        "Managing traffic flow around work zones",
        "Ensuring work quality meets highway standards"
      ],
      requiredExperience: "Minimum 1 year in road construction or maintenance",
      safetyRequirements: "High-visibility clothing mandatory. Safety training provided before deployment.",
      amenities: ["Mobile rest stations", "Drinking water supply", "Portable toilets", "First-aid kits"],
      transportationInfo: "Pickup points available at Tambaram Railway Station and Velachery Bus Terminal"
    }
  };

  useEffect(() => {
    // Simulate fetching job details
    setTimeout(() => {
      if (jobsData[jobId]) {
        setJob(jobsData[jobId]);
      }
      setLoading(false);
    }, 500);
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading job details...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-xl text-red-600">Job not found</div>
      </div>
    );
  }

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

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/active-work')}
            className="text-gray-600 hover:text-[#004A57] transition-all duration-300"
          >
            <ChevronDown className="mr-2 h-4 w-4 rotate-90" /> Back to Active Jobs
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-lg text-gray-600">{job.company}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button 
                  variant="primary" 
                  size="sm"
                  className="bg-[#004A57] hover:bg-[#003642]"
                >
                  Contact Supervisor
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div>{job.location}</div>
                    <div className="text-sm">{job.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Calendar size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div>{job.startDate} - {job.endDate}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Work Schedule</div>
                    <div>{job.schedule}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Banknote size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Pay Rate</div>
                    <div>{job.hourlyRate} per hour</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <User size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Contact Person</div>
                    <div>{job.contactPerson}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Phone size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div>{job.contactPhone}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Mail size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div>{job.contactEmail}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Building size={18} className="mr-3 text-[#004A57]" />
                  <div>
                    <div className="font-medium">Company</div>
                    <div>{job.company}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 mb-4">{job.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skillsRequired.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-[#004A57]" />
                  Safety Requirements
                </h2>
                <p className="text-gray-700">{job.safetyRequirements}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-[#004A57]" />
                  Experience Required
                </h2>
                <p className="text-gray-700">{job.requiredExperience}</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Site Amenities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Transportation</h2>
                <p className="text-gray-700">{job.transportationInfo}</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-700 mb-4 md:mb-0">
                <p>For any questions or concerns about this job, please contact the supervisor.</p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/active-work')}
                  className="border-[#FF4B55] text-[#FF4B55] hover:bg-[#FF4B55] hover:text-white"
                >
                  Back to List
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => window.open(`tel:${job.contactPhone}`)}
                >
                  Call Supervisor
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetails;