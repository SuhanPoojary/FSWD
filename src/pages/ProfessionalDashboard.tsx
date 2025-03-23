
import React from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostServiceForm from "@/components/PostServiceForm";

const ProfessionalDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/professional-dashboard" className="text-[#FF4B55]">Dashboard</Link>
            <Link to="/professional-projects" className="hover:text-[#FF4B55]">Find Projects</Link>
            <Link to="/professional-profile" className="hover:text-[#FF4B55]">My Profile</Link>
            <Link to="/professional-messages" className="hover:text-[#FF4B55]">Messages</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Link to="#" className="bg-[#FF4B55] text-white px-4 py-2 rounded hover:bg-[#E43F49] transition-colors">
                Post Services
              </Link>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <PostServiceForm />
            </DialogContent>
          </Dialog>
          <Link to="/professional-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#121224]">Find Skilled Construction Professionals</h1>
          <p className="text-[#717B9E]">Connect with reliable workers for your construction projects</p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-grow">
            <input 
              type="text" 
              placeholder="Search for projects..." 
              className="w-full p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <select className="p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors">
              <option>All Categories</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <button className="bg-[#FF4B55] text-white px-6 py-3 rounded hover:bg-[#E43F49] transition-colors">
            Search
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-2 mb-6">
          <span className="bg-[#004A57] text-white px-3 py-1 rounded-full text-sm">All Jobs</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer">Nearby</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer">Commercial</span>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#121224]">Commercial Building Project</h2>
              <span className="text-[#FF4B55] font-bold">$225,000</span>
            </div>
            <p className="text-[#717B9E] mb-4">Looking for skilled workers to complete a commercial retail space construction. Experience with modern design elements required.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Commercial</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Chicago, IL</span>
              </div>
              <Link to="/project-view/1" className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#121224]">Residential Complex</h2>
              <span className="text-[#FF4B55] font-bold">$180,000</span>
            </div>
            <p className="text-[#717B9E] mb-4">New residential complex construction requiring multiple skilled professionals. Long-term project with consistent work.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Residential</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Austin, TX</span>
              </div>
              <Link to="/project-view/2" className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#121224]">Hospital Renovation</h2>
              <span className="text-[#FF4B55] font-bold">$430,000</span>
            </div>
            <p className="text-[#717B9E] mb-4">Major renovation of existing hospital wing. Requires specific expertise in healthcare facility construction and strict adherence to codes.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Healthcare</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Boston, MA</span>
              </div>
              <Link to="/project-view/3" className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:border-[#FF4B55] border border-transparent transition-colors cursor-pointer">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold text-[#121224]">School Construction</h2>
              <span className="text-[#FF4B55] font-bold">$520,000</span>
            </div>
            <p className="text-[#717B9E] mb-4">New elementary school construction project requiring full team of construction professionals. Public project with stable funding.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Education</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Denver, CO</span>
              </div>
              <Link to="/project-view/4" className="text-[#FF4B55] font-medium text-sm hover:underline">View Details →</Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-[#121224]">23</p>
            <p className="text-[#717B9E]">Active Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">156</p>
            <p className="text-[#717B9E]">Skilled Professionals</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">12</p>
            <p className="text-[#717B9E]">Project Types</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#121224]">$4.2M</p>
            <p className="text-[#717B9E]">Budget Total</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalDashboard;
