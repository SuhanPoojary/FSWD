
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus, TrendingUp, Users, Calendar } from "lucide-react";
import PostProjectForm from "@/components/PostProjectForm";

// Sample data for charts
const projectProgressData = [
  { name: 'Week 1', planned: 20, actual: 18 },
  { name: 'Week 2', planned: 40, actual: 35 },
  { name: 'Week 3', planned: 60, actual: 55 },
  { name: 'Week 4', planned: 80, actual: 70 },
  { name: 'Week 5', planned: 100, actual: 85 },
];

const workersDistributionData = [
  { name: 'Retail Center', value: 15 },
  { name: 'Custom Home', value: 8 },
  { name: 'Warehouse', value: 12 },
  { name: 'Office Tower', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
            <Link to="/contractor-dashboard" className="hover:text-[#FF4B55]">Dashboard</Link>
            <Link to="/contractor-job-posting" className="hover:text-[#FF4B55]">Jobs</Link>
            <Link to="/workers" className="hover:text-[#FF4B55]">Workers</Link>
            <Link to="/analytics" className="hover:text-[#FF4B55]">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="primary" 
                className="bg-[#FF4B55] hover:bg-[#e03e48] transition-all duration-300 hover:scale-105"
              >
                <Plus className="mr-2 h-4 w-4" /> Post Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <PostProjectForm />
            </DialogContent>
          </Dialog>
          <Link to="/company-profile">
            <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-[#FF4B55] transition-all duration-300"></div>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor your projects and workforce metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#FF4B55]" /> 
                Active Projects
              </CardTitle>
              <CardDescription>Current projects in progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-sm text-green-600 flex items-center">
                +2 compared to last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="mr-2 h-5 w-5 text-[#FF4B55]" /> 
                Total Workers
              </CardTitle>
              <CardDescription>Workers employed across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">55</div>
              <p className="text-sm text-green-600 flex items-center">
                +8 compared to last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-[#FF4B55]" /> 
                Projects Completed
              </CardTitle>
              <CardDescription>This year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-sm text-green-600 flex items-center">
                +4 compared to last year
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="progress" className="w-full">
          <TabsList className="w-full bg-gray-100 mb-6 h-auto rounded-lg">
            <TabsTrigger value="progress" className="flex-1 rounded-none py-3">
              Project Progress
            </TabsTrigger>
            <TabsTrigger value="workers" className="flex-1 rounded-none py-3">
              Worker Distribution
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex-1 rounded-none py-3">
              Performance Metrics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="progress" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Project Completion Progress</CardTitle>
                <CardDescription>Planned vs Actual Progress (%)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={projectProgressData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="planned" fill="#8884d8" name="Planned Progress" />
                      <Bar dataKey="actual" fill="#82ca9d" name="Actual Progress" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="workers" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Worker Distribution by Project</CardTitle>
                <CardDescription>Number of workers assigned to each project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={workersDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {workersDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value} workers`, name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Project Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators for all active projects</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Retail Center Remodel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Progress:</span>
                          <span className="font-medium">62%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Budget Utilization:</span>
                          <span className="font-medium">58%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Schedule Variance:</span>
                          <span className="font-medium text-green-600">+2 days</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Custom Home Construction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Progress:</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Budget Utilization:</span>
                          <span className="font-medium">40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Schedule Variance:</span>
                          <span className="font-medium text-red-600">-3 days</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Analytics;
