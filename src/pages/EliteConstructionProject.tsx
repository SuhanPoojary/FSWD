
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, ArrowLeft, ArrowRight, Building, Calendar } from "lucide-react";

const EliteConstructionProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Projects</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="#" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-6">
          <Link to="/contractor-dashboard" className="text-gray-600 hover:text-[#FF4B55] flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-[#121224]">Elite Construction Ltd. Projects</h1>
          <p className="text-gray-600">Manage your projects and track worker applications</p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Active Projects</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Applications</h3>
            <p className="text-2xl font-bold">48</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Hired Workers</h3>
            <p className="text-2xl font-bold">36</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-2">Avg. Time-to-Hire</h3>
            <p className="text-2xl font-bold">5 days</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="primary" className="flex items-center gap-2">
            <Plus size={18} /> Post New Project
          </Button>
          <Button variant="outline" className="border-[#004A57] text-[#004A57] flex items-center gap-2">
            <Users size={18} /> View All Workers
          </Button>
          <Button variant="outline" className="border-[#004A57] text-[#004A57] flex items-center gap-2">
            <Building size={18} /> Manage Projects
          </Button>
        </div>

        {/* Current Projects */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Current Projects</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-4 text-gray-600 font-medium">Project Name</th>
                  <th className="p-4 text-gray-600 font-medium">Location</th>
                  <th className="p-4 text-gray-600 font-medium">Timeline</th>
                  <th className="p-4 text-gray-600 font-medium">Workers Needed</th>
                  <th className="p-4 text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded"></div>
                      <div>
                        <p className="font-medium">Retail Center Remodel</p>
                        <p className="text-gray-500 text-sm">Commercial</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span>Oakland, CA</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span>Oct 15 - Nov 30</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span>12 / 15</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                        View
                      </Button>
                      <Button variant="primary" size="sm">
                        Manage
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded"></div>
                      <div>
                        <p className="font-medium">Custom Home Construction</p>
                        <p className="text-gray-500 text-sm">Residential</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span>Denver, CO</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span>Sep 1 - Dec 15</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span>8 / 10</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                        View
                      </Button>
                      <Button variant="primary" size="sm">
                        Manage
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded"></div>
                      <div>
                        <p className="font-medium">Warehouse Expansion</p>
                        <p className="text-gray-500 text-sm">Industrial</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span>Phoenix, AZ</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span>Nov 1 - Jan 15</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span>15 / 20</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                        View
                      </Button>
                      <Button variant="primary" size="sm">
                        Manage
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">Showing 3 of 12 projects</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                <ArrowLeft size={16} />
              </Button>
              <Button variant="outline" size="sm" className="border-[#004A57] text-[#004A57]">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Fix missing import
const Plus = (props: any) => <div {...props}>+</div>;

export default EliteConstructionProject;
