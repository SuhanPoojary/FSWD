
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";
import { 
  Building, 
  Users, 
  Clock, 
  ChevronRight,
  BarChart2, 
  PieChart, 
  TrendingUp,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for charts
const projectProgressData = [
  { name: "Jan", projected: 20, actual: 15 },
  { name: "Feb", projected: 40, actual: 35 },
  { name: "Mar", projected: 60, actual: 55 },
  { name: "Apr", projected: 80, actual: 70 },
  { name: "May", projected: 100, actual: 90 },
];

const workerAllocationData = [
  { name: "Carpenters", allocated: 24, required: 30 },
  { name: "Electricians", allocated: 18, required: 20 },
  { name: "Plumbers", allocated: 15, required: 15 },
  { name: "Masons", allocated: 12, required: 15 },
  { name: "Painters", allocated: 8, required: 10 },
];

const projectCompletionData = [
  { name: "Skyline Tower", completed: 75, remaining: 25 },
  { name: "Retail Center", completed: 60, remaining: 40 },
  { name: "Apartment Complex", completed: 90, remaining: 10 },
  { name: "Office Building", completed: 40, remaining: 60 },
];

const Analytics: React.FC = () => {
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
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55] transition-colors">Dashboard</Link>
            <Link to="/elite-construction-project" className="hover:text-[#FF4B55] transition-colors">Projects</Link>
            <Link to="/workers" className="hover:text-[#FF4B55] transition-colors">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55] text-[#FF4B55] transition-colors">Analytics</Link>
            <Link to="/posted-jobs" className="hover:text-[#FF4B55] transition-colors">Posted Jobs</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/worker-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-600">Track project progress, worker allocation, and performance metrics</p>
        </div>

        <Tabs defaultValue="projects" className="w-full mb-8">
          <TabsList className="w-full bg-white mb-6 h-auto p-1 rounded-lg">
            <TabsTrigger value="projects" className="flex-1 py-3 rounded-md data-[state=active]:bg-[#004A57] data-[state=active]:text-white">
              <BarChart2 className="mr-2 h-4 w-4" />
              Project Progress
            </TabsTrigger>
            <TabsTrigger value="workers" className="flex-1 py-3 rounded-md data-[state=active]:bg-[#004A57] data-[state=active]:text-white">
              <Users className="mr-2 h-4 w-4" />
              Worker Allocation
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex-1 py-3 rounded-md data-[state=active]:bg-[#004A57] data-[state=active]:text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Completion Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Projects Ongoing</CardTitle>
                  <CardDescription>Currently active projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Average Completion</CardTitle>
                  <CardDescription>Progress across all projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">67%</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">On Schedule</CardTitle>
                  <CardDescription>Projects on planned timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Project Completion Status</CardTitle>
                <CardDescription>Percentage of completed work by project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={projectCompletionData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" stackId="a" fill="#004A57" name="Completed %" />
                      <Bar dataKey="remaining" stackId="a" fill="#FF4B55" name="Remaining %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workers" className="mt-0">
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Worker Allocation vs. Requirements</CardTitle>
                <CardDescription>Current worker distribution by trade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={workerAllocationData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="allocated" fill="#004A57" name="Workers Allocated" />
                      <Bar dataKey="required" fill="#FF4B55" name="Workers Required" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Worker Efficiency</CardTitle>
                  <CardDescription>Average productivity per worker type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span>Carpenters</span>
                      <span className="font-semibold">92%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Electricians</span>
                      <span className="font-semibold">88%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Plumbers</span>
                      <span className="font-semibold">95%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Masons</span>
                      <span className="font-semibold">89%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Painters</span>
                      <span className="font-semibold">86%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Worker Attendance</CardTitle>
                  <CardDescription>Average attendance rate last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center mb-4">93%</div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-[#004A57] h-4 rounded-full" style={{ width: "93%" }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-0">
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Project Progress Timeline</CardTitle>
                <CardDescription>Projected vs. actual completion percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={projectProgressData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="projected" stroke="#004A57" activeDot={{ r: 8 }} name="Projected %" />
                      <Line type="monotone" dataKey="actual" stroke="#FF4B55" name="Actual %" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Projects Ahead</CardTitle>
                  <CardDescription>Faster than scheduled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">2</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">On Schedule</CardTitle>
                  <CardDescription>As per timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-500">4</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Delayed</CardTitle>
                  <CardDescription>Behind schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#FF4B55]">2</div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Avg. Delay</CardTitle>
                  <CardDescription>Days behind schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3.5</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Analytics;
