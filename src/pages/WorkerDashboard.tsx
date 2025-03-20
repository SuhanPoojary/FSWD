
import React from "react";
import { Link } from "react-router-dom";

const WorkerDashboard: React.FC = () => {
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
              2
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
            <p className="text-4xl font-bold">3</p>
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
              <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Commercial Building Project</h3>
                  <span className="text-sm">$35/hr</span>
                </div>
                <p className="text-sm opacity-80">Arlington Construction</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Full-time</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Carpentry</span>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex justify-between">
                  <h3 className="font-semibold">Residential Renovation</h3>
                  <span className="text-sm">$32/hr</span>
                </div>
                <p className="text-sm opacity-80">HomeBuilders Inc</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Contract</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">General Labor</span>
                </div>
              </div>
            </div>
            
            <button className="mt-4 bg-white text-[#FF4B55] font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
              View All Jobs
            </button>
          </div>
          
          {/* Profile & Active Work */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#121224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="text-xl font-bold text-[#121224]">Update Profile</h2>
              </div>
              <p className="text-[#717B9E] text-sm">Keep your profile information up to date</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
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
            
            <button className="bg-[#FF4B55] text-white font-medium py-3 px-4 rounded hover:bg-[#E43F49] transition-colors w-full">
              Log Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;
