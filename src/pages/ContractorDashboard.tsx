
import React from "react";
import { Link } from "react-router-dom";

const ContractorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="#" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" className="bg-[#FF4B55] text-white px-4 py-2 rounded hover:bg-[#E43F49] transition-colors">
            Post Project
          </Link>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#121224]">Find Construction Projects & Workers</h1>
          <p className="text-[#717B9E]">Connect with top builders and manage your workforce efficiently</p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-grow">
            <input 
              type="text" 
              placeholder="Search for workers or projects..." 
              className="w-full p-3 border border-gray-300 rounded hover:border-[#FF4B55] focus:border-[#FF4B55] focus:outline-none transition-colors"
            />
          </div>
          <button className="bg-[#FF4B55] text-white px-6 py-3 rounded hover:bg-[#E43F49] transition-colors">
            Search
          </button>
        </div>

        {/* Available Projects Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#121224] mb-4">Available Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Commercial</span>
                  <span className="text-sm text-gray-500">3 weeks</span>
                </div>
                <h3 className="font-semibold mb-1">Retail Center Remodel</h3>
                <p className="text-sm text-gray-500 mb-3">Oakland, CA</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF4B55] font-bold">$30-45/hr</span>
                  <button className="text-[#FF4B55] text-sm font-medium hover:underline">Apply Now →</button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Residential</span>
                  <span className="text-sm text-gray-500">1 month</span>
                </div>
                <h3 className="font-semibold mb-1">Custom Home Construction</h3>
                <p className="text-sm text-gray-500 mb-3">Denver, CO</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF4B55] font-bold">$28-40/hr</span>
                  <button className="text-[#FF4B55] text-sm font-medium hover:underline">Apply Now →</button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-[#FF4B55] transition-colors">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Industrial</span>
                  <span className="text-sm text-gray-500">2 months</span>
                </div>
                <h3 className="font-semibold mb-1">Warehouse Expansion</h3>
                <p className="text-sm text-gray-500 mb-3">Phoenix, AZ</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF4B55] font-bold">$35-50/hr</span>
                  <button className="text-[#FF4B55] text-sm font-medium hover:underline">Apply Now →</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#121224] mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Commercial</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Residential</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Industrial</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#FF4B55] transition-colors cursor-pointer">
              <h3 className="font-semibold">Infrastructure</h3>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-t border-gray-200 pt-8">
          <div>
            <h3 className="font-semibold mb-4">About LabourNet</h3>
            <p className="text-gray-600">Connecting quality workers with great construction projects across the nation.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="#" className="hover:text-[#FF4B55]">Find Jobs</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Post a Project</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Our Services</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">For Employers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="#" className="hover:text-[#FF4B55]">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Training Programs</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Career Resources</Link></li>
              <li><Link to="#" className="hover:text-[#FF4B55]">Safety Guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Build St., Suite 700</li>
              <li>San Francisco, CA 94103</li>
              <li>(555) 123-4567</li>
              <li>support@labournet.com</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContractorDashboard;
