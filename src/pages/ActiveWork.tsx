
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ActiveWork: React.FC = () => {
  // Sample active work data
  const activeJobs = [
    {
      id: "job1",
      title: "Senior Mason",
      company: "Elite Constructions",
      location: "Downtown Commercial Complex",
      status: "active"
    },
    {
      id: "job2",
      title: "Senior Mason",
      company: "Elite Constructions",
      location: "Downtown Commercial Complex",
      status: "active"
    }
  ];

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
        
        <div className="space-y-6">
          {activeJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.status === 'active' ? 'Active' : job.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Button onClick={() => window.history.back()}>
            Back to Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ActiveWork;
