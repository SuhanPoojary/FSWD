import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, User, MessageSquare, BadgeCheck } from "lucide-react";
import { toast } from "sonner";
import ReviewForm from "@/components/ReviewForm";

const ProjectView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("details");
  
  const handleApply = () => {
    toast.success("Application Submitted Successfully!", {
      description: "Your application has been sent to the contractor for review.",
      duration: 5000,
    });
  };
  
  const project = {
    id: id,
    title: "Commercial Building Project",
    description: "Looking for skilled workers to complete a commercial retail space construction. Experience with modern design elements required.",
    budget: "$225,000",
    location: "Chicago, IL",
    category: "Commercial",
    postedBy: {
      name: "City Developers Inc",
      rating: 4.7,
      image: "/placeholder.svg"
    },
    timeline: {
      startDate: "Apr 2023",
      endDate: "Oct 2023"
    },
    requirements: [
      "5+ years of commercial construction experience",
      "Knowledge of modern building codes",
      "Experience with sustainable building practices",
      "Team of at least 3 skilled professionals"
    ],
    reviews: [
      {
        id: 1,
        user: "John Smith",
        rating: 5,
        comment: "Great project to work on. The team was very professional and the payment was prompt.",
        date: "2023-02-15"
      },
      {
        id: 2,
        user: "Maria Rodriguez",
        rating: 4,
        comment: "Well organized project with clear expectations. Would work with them again.",
        date: "2023-01-30"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <header className="bg-[#004A57] text-white py-3 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
          <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/professional-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
          <Link to="/professional-projects" className="hover:text-[#FF4B55]">Find Projects</Link>
          <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
          <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/professional-profile">
            <Avatar className="h-8 w-8 bg-gray-300">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Posted on {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-[#FF4B55]">{project.budget}</p>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                {project.category}
              </span>
            </div>
          </div>

          <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-gray-100 mb-6 h-auto rounded-lg">
              <TabsTrigger 
                value="details" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'details' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Project Details
              </TabsTrigger>
              <TabsTrigger 
                value="company" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'company' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Company Info
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className={`flex-1 rounded-none py-3 ${activeTab === 'reviews' ? 'border-b-2 border-[#FF4B55]' : ''}`}
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Timeline</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-medium">{project.timeline.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">End Date</p>
                      <p className="font-medium">{project.timeline.endDate}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end space-x-4 mt-6">
                  <Button variant="outline" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white transition-all duration-300 hover:scale-105">
                    Save Project
                  </Button>
                  <Button 
                    variant="primary" 
                    className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
                    onClick={handleApply}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="mt-0">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={project.postedBy.image} alt={project.postedBy.name} />
                  <AvatarFallback className="bg-gray-200">{project.postedBy.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{project.postedBy.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < Math.floor(project.postedBy.rating) ? "#FF4B55" : "none"} 
                        className="h-4 w-4 text-[#FF4B55]" 
                      />
                    ))}
                    <span className="text-xs ml-1">({project.postedBy.rating})</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  This company has been a member since January 2020 and has completed over 25 projects through our platform with consistently high ratings.
                </p>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                  Contact Company
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary">
                        Write a Review
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                      <ReviewForm 
                        entityName={project.postedBy.name} 
                        entityType="contractor" 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                
                {project.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            fill={i < review.rating ? "#FF4B55" : "none"} 
                            className="h-4 w-4 text-[#FF4B55]" 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
                
                {project.reviews.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProjectView;
