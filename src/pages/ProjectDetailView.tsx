
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Circle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews'>('overview');
  
  // Mock project data
  const project = {
    id: id || "1",
    title: "Skyline Commercial Tower Construction",
    location: "Downtown Toronto, ON",
    startDate: "Oct 1, 2023",
    description: "A 25-story commercial tower featuring sustainable design elements, state-of-the-art office spaces, and retail areas. The project includes advanced HVAC systems, smart building technology, and LEED certification.",
    duration: "18 months",
    value: "$45M",
    teamSize: "85 workers",
    company: "Elite Construction Ltd",
    foundedYear: "2005",
    status: "Active Project",
    timeline: {
      groundBreaking: "Oct 2023",
      structureComplete: "Jun 2024",
      completion: "Mar 2025"
    },
    workSchedule: "Monday to Friday\n7:00 AM - 3:30 PM",
    safetyRequirements: [
      "Safety certification required",
      "PPE provided",
      "Daily safety briefings"
    ],
    workers: [
      { id: 1, name: "John Smith", role: "Carpenter", status: "active" },
      { id: 2, name: "Maria Garcia", role: "Electrician", status: "active" },
      { id: 3, name: "David Chen", role: "Plumber", status: "break" }
    ],
    progress: [
      { phase: "Foundation Work", progress: 100, workers: 8 },
      { phase: "Structural Framing", progress: 75, workers: 12 },
      { phase: "Electrical Installation", progress: 45, workers: 6 },
      { phase: "Plumbing Systems", progress: 30, workers: 4 },
      { phase: "Interior Finishing", progress: 10, workers: 10 }
    ],
    reviews: [
      { id: 1, author: "Michael Johnson", role: "Project Manager", rating: 5, content: "Elite Construction delivered exceptional quality work for our commercial building. Their team was professional, efficient, and completed the project ahead of schedule.", date: "2023-09-15" },
      { id: 2, author: "Sarah Williams", role: "Architect", rating: 4, content: "Great working relationship with the Elite team. They were responsive to design changes and maintained high standards throughout the project.", date: "2023-08-22" }
    ]
  };
  
  // State for review form
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: ""
  });
  
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", reviewForm);
    // Reset form
    setReviewForm({ rating: 5, comment: "" });
    // Show success message or update UI
    alert("Review submitted successfully!");
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" className="bg-[#FF4B55]">
              <Link to="/elite-construction-project">Post Project</Link>
            </Button>
          </motion.div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="md:col-span-2">
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-64 bg-gray-200"></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full mb-2">
                      {project.status}
                    </span>
                    <h1 className="text-2xl font-bold text-gray-800">{project.title}</h1>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} />
                      <span>Start Date: {project.startDate}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 my-4">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm text-gray-500">Project Duration</h3>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm text-gray-500">Project Value</h3>
                    <p className="font-medium">{project.value}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="text-sm text-gray-500">Total Team Size</h3>
                    <p className="font-medium">{project.teamSize}</p>
                  </div>
                </div>
                
                {/* Tab Navigation */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex space-x-8">
                    <button 
                      onClick={() => setActiveTab('overview')}
                      className={`pb-4 text-sm font-medium ${activeTab === 'overview' 
                        ? 'text-[#FF4B55] border-b-2 border-[#FF4B55]' 
                        : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Project Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab('reviews')}
                      className={`pb-4 text-sm font-medium ${activeTab === 'reviews' 
                        ? 'text-[#FF4B55] border-b-2 border-[#FF4B55]' 
                        : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      Reviews
                    </button>
                  </div>
                </div>
                
                {/* Tab Content */}
                {activeTab === 'overview' ? (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Work Progress</h2>
                    
                    {project.progress.map((phase, index) => (
                      <div key={index} className="mb-6">
                        <div className="flex justify-between mb-1">
                          <h3 className="text-sm font-medium">{phase.phase}</h3>
                          <span className="text-xs text-gray-500">{phase.workers} workers</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded overflow-hidden">
                          <motion.div 
                            className="h-full bg-[#FF4B55]"
                            initial={{ width: 0 }}
                            animate={{ width: `${phase.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-600">{phase.progress}% complete</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Project Reviews</h2>
                    
                    {project.reviews.map(review => (
                      <motion.div 
                        key={review.id} 
                        className="mb-6 border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-medium">{review.author}</h3>
                            <p className="text-sm text-gray-500">{review.role}</p>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.content}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(review.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </motion.div>
                    ))}
                    
                    {/* Review Form */}
                    <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-4">Leave a Review</h3>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Your Rating
                          </label>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))}
                                className="focus:outline-none"
                              >
                                <svg 
                                  className={`w-6 h-6 ${star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="comment">
                            Your Review
                          </label>
                          <textarea
                            id="comment"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
                            placeholder="Share your experience with this project..."
                            value={reviewForm.comment}
                            onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                            required
                          ></textarea>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button 
                            type="submit" 
                            variant="primary"
                            className="transition-all duration-300 ease-in-out bg-[#FF4B55] hover:bg-[#c13941]"
                          >
                            Submit Review
                          </Button>
                        </motion.div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Additional Info */}
          <div>
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">Construction Company</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded"></div>
                <div>
                  <p className="font-medium">{project.company}</p>
                  <p className="text-sm text-gray-500">Since {project.foundedYear}</p>
                </div>
              </div>
              <Link to="/company-profile">
                <Button variant="outline" className="w-full border-[#004A57] text-[#004A57] hover:bg-[#004A57] hover:text-white">
                  View Company Profile
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold mb-4">Project Timeline</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Ground Breaking</p>
                  <p className="text-sm font-medium">{project.timeline.groundBreaking}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Structure Complete</p>
                  <p className="text-sm font-medium">{project.timeline.structureComplete}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Project Completion</p>
                  <p className="text-sm font-medium">{project.timeline.completion}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-4">Work Schedule</h2>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock size={18} className="text-[#FF4B55]" />
                <p className="whitespace-pre-line">{project.workSchedule}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold mb-4">Safety Requirements</h2>
              <ul className="space-y-2">
                {project.safetyRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Circle size={16} className="text-[#FF4B55] mt-1" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-4">Active Workers</h2>
              <div className="space-y-4">
                {project.workers.map(worker => (
                  <div key={worker.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-medium">{worker.name}</p>
                        <p className="text-sm text-gray-500">{worker.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        worker.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      <span className="text-xs text-gray-500">{worker.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailView;
