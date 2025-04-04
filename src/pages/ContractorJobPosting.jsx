
import React from 'react';
import PostJobForm from '../components/PostJobForm';

// Header component for consistent navigation
const ContractorHeader = () => (
  <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
    <div className="flex items-center gap-4">
      <a href="/" className="flex items-center gap-2">
        <div className="w-6 h-6">
          <img src="/LabourNet_logo.png" alt="LabourNet Logo" className="w-full h-full object-contain" />
        </div>
        <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
      </a>
      <nav className="hidden md:flex space-x-6 ml-12">
        <a href="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</a>
        <a href="/contractor-job-posting" className="hover:text-[#FF4B55] text-[#FF4B55]">Jobs</a>
        <a href="/workers" className="hover:text-[#FF4B55]">Workers</a>
        <a href="/analytics" className="hover:text-[#FF4B55]">Analytics</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <a href="/company-profile">
        <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300">
          {/* Profile image will render here if available */}
        </div>
      </a>
    </div>
  </header>
);

const ContractorJobPosting = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <ContractorHeader />
      
      <main className="container mx-auto py-8 px-4">
        <PostJobForm />
      </main>
    </div>
  );
};

export default ContractorJobPosting;
