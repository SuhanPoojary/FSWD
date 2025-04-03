import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Building, Users, PieChart as PieChartIcon, Calendar, BarChartIcon } from "lucide-react";
import { useProjectContext } from "../components/PostProjectForm";

const progressData = [
  { name: 'Week 1', planned: 10, actual: 8 },
  { name: 'Week 2', planned: 20, actual: 18 },
  { name: 'Week 3', planned: 30, actual: 25 },
  { name: 'Week 4', planned: 40, actual: 35 },
  { name: 'Week 5', planned: 50, actual: 48 },
  { name: 'Week 6', planned: 60, actual: 55 },
  { name: 'Week 7', planned: 70, actual: 65 },
  { name: 'Week 8', planned: 80, actual: 78 },
];

const workerAllocationData = [
  { name: 'Carpenters', value: 35 },
  { name: 'Electricians', value: 20 },
  { name: 'Plumbers', value: 15 },
  { name: 'Masons', value: 25 },
  { name: 'Painters', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Analytics = () => {
  const { projects } = useProjectContext();
  
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <header className="bg-[#004A57] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4B55] transform rotate-45" />
            <span className="text-[#EEE] text-xl font-medium">LabourNet</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-12">
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55] text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Job Analytics</h1>
          <p className="text-gray-600">Track job progress and resource allocation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Total Jobs</h2>
              <Building className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">{projects.length || 0}</p>
            <p className="text-gray-500 text-sm mt-1">Currently active</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Total Workers</h2>
              <Users className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">156</p>
            <p className="text-gray-500 text-sm mt-1">Across all jobs</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Average Completion</h2>
              <PieChartIcon className="h-6 w-6 text-[#004A57]" />
            </div>
            <p className="text-3xl font-bold">67%</p>
            <p className="text-gray-500 text-sm mt-1">Of planned progress</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Job Progress Over Time</h2>
            </div>
            <select 
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4B55]"
            >
              <option value="retail-center">Retail Center Job</option>
              <option value="warehouse">Warehouse Expansion</option>
              <option value="custom-home">Custom Home Build</option>
            </select>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={progressData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="planned" 
                  stroke="#8884d8" 
                  strokeWidth={2} 
                  name="Planned Progress (%)"
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#FF4B55" 
                  strokeWidth={2} 
                  name="Actual Progress (%)"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Worker Allocation</h2>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={workerAllocationData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {workerAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} workers`, 'Count']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-[#004A57]" />
              <h2 className="text-xl font-bold">Time Spent vs Planned</h2>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={progressData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="planned" name="Planned" fill="#8884d8" />
                  <Bar dataKey="actual" name="Actual" fill="#FF4B55" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Active Jobs</h2>
            <Link to="/contractor-job-posting" className="text-[#FF4B55] hover:underline text-sm">
              View All Jobs
            </Link>
          </div>
          
          <div className="space-y-4">
            {projects && projects.length > 0 ? (
              projects.slice(0, 3).map((project) => (
                <div 
                  key={project.id}
                  className="border border-gray-100 rounded-lg p-4 shadow-sm hover:border-[#FF4B55] transition-all duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-500">{project.location}</p>
                    <p className="text-sm text-gray-500">{project.timeline}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                    <div className="bg-[#FF4B55] h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Progress: 65%</span>
                    <span>Workers assigned: 24</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <Building className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-600">No Active Jobs</h3>
                <p className="text-gray-500 mb-4">Post a job to see analytics</p>
                <Link to="/contractor-job-posting">
                  <Button 
                    variant="primary" 
                    className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300"
                  >
                    Post Job
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;