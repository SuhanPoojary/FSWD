
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

// Auth service
export const authService = {
  register: (userData) => api.post('/auth/signup', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.get('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me')
};

// Profile service
export const profileService = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.patch('/users/profile', profileData),
  uploadProfileImage: (formData) => api.post('/users/profile/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

// Job service
export const jobService = {
  getAllJobs: () => api.get('/jobs'),
  getJob: (id) => api.get(`/jobs/${id}`),
  createJob: (jobData) => api.post('/jobs', jobData),
  updateJob: (id, jobData) => api.patch(`/jobs/${id}`, jobData),
  deleteJob: (id) => api.delete(`/jobs/${id}`),
  applyForJob: (id) => api.post(`/jobs/${id}/apply`),
  getJobsForWorker: () => api.get('/jobs/worker/available'),
  getContractorJobs: () => api.get('/jobs/contractor/myjobs')
};

// Project service
export const projectService = {
  getAllProjects: () => api.get('/projects'),
  getProject: (id) => api.get(`/projects/${id}`),
  createProject: (projectData) => api.post('/projects', projectData),
  updateProject: (id, projectData) => api.patch(`/projects/${id}`, projectData),
  deleteProject: (id) => api.delete(`/projects/${id}`),
  applyForProject: (id) => api.post(`/projects/${id}/apply`),
  updateContractorStatus: (data) => api.patch('/projects/contractors/status', data),
  getProjectsForContractor: () => api.get('/projects/contractor/available'),
  getProfessionalProjects: () => api.get('/projects/professional/myprojects')
};

// Add token to all requests if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 unauthorized errors (token expired, etc.)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
