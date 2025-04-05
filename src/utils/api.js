
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Intercept requests to add authorization token if available
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

// Auth services
export const authService = {
  // Register a new user
  register: async (userData) => {
    try {
      const response = await api.post('/auth/signup', userData);
      if (response.data.token) {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred during registration' };
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      if (response.data.token) {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred during login' };
    }
  },

  // Logout user
  logout: async () => {
    try {
      await api.get('/auth/logout');
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      localStorage.removeItem('workerProfile');
      localStorage.removeItem('contractorProfile');
      localStorage.removeItem('professionalProfile');
      return { success: true };
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred during logout' };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get current user' };
    }
  }
};

// Profile services
export const profileService = {
  // Update profile
  updateProfile: async (profileData) => {
    try {
      const response = await api.patch('/users/profile', profileData);
      
      // Update localStorage based on user role
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        if (user.role === 'worker') {
          localStorage.setItem('workerProfile', JSON.stringify(response.data.data.profile));
        } else if (user.role === 'contractor') {
          localStorage.setItem('contractorProfile', JSON.stringify(response.data.data.profile));
        } else if (user.role === 'professional') {
          localStorage.setItem('professionalProfile', JSON.stringify(response.data.data.profile));
        }
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update profile' };
    }
  },

  // Get profile
  getProfile: async (userId) => {
    try {
      const url = userId ? `/users/profile/${userId}` : '/users/profile';
      const response = await api.get(url);
      
      // Update localStorage based on user role
      const user = response.data.data.user;
      if (user) {
        if (user.role === 'worker') {
          localStorage.setItem('workerProfile', JSON.stringify(response.data.data.profile));
        } else if (user.role === 'contractor') {
          localStorage.setItem('contractorProfile', JSON.stringify(response.data.data.profile));
        } else if (user.role === 'professional') {
          localStorage.setItem('professionalProfile', JSON.stringify(response.data.data.profile));
        }
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get profile' };
    }
  },

  // Get all workers
  getAllWorkers: async () => {
    try {
      const response = await api.get('/users/workers');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get workers' };
    }
  },

  // Get all professionals
  getAllProfessionals: async () => {
    try {
      const response = await api.get('/users/professionals');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get professionals' };
    }
  },

  // Get all contractors
  getAllContractors: async () => {
    try {
      const response = await api.get('/users/contractors');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get contractors' };
    }
  }
};

// Job services
export const jobService = {
  // Create a job
  createJob: async (jobData) => {
    try {
      const response = await api.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create job' };
    }
  },

  // Get all jobs
  getAllJobs: async (filters = {}) => {
    try {
      const response = await api.get('/jobs', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get jobs' };
    }
  },

  // Get a single job
  getJob: async (jobId) => {
    try {
      const response = await api.get(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get job' };
    }
  },

  // Update a job
  updateJob: async (jobId, jobData) => {
    try {
      const response = await api.patch(`/jobs/${jobId}`, jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update job' };
    }
  },

  // Delete a job
  deleteJob: async (jobId) => {
    try {
      const response = await api.delete(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete job' };
    }
  },

  // Apply for a job
  applyForJob: async (jobId) => {
    try {
      const response = await api.post(`/jobs/${jobId}/apply`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to apply for job' };
    }
  },

  // Update application status
  updateApplicationStatus: async (data) => {
    try {
      const response = await api.patch('/jobs/applications/status', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update application status' };
    }
  },

  // Get recommended jobs for worker
  getRecommendedJobs: async () => {
    try {
      const response = await api.get('/jobs/worker/recommended');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get recommended jobs' };
    }
  },

  // Get jobs posted by a contractor
  getContractorJobs: async () => {
    try {
      const response = await api.get('/jobs/contractor/myjobs');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get your jobs' };
    }
  }
};

// Project services
export const projectService = {
  // Create a project
  createProject: async (projectData) => {
    try {
      const response = await api.post('/projects', projectData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create project' };
    }
  },

  // Get all projects
  getAllProjects: async (filters = {}) => {
    try {
      const response = await api.get('/projects', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get projects' };
    }
  },

  // Get a single project
  getProject: async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get project' };
    }
  },

  // Update a project
  updateProject: async (projectId, projectData) => {
    try {
      const response = await api.patch(`/projects/${projectId}`, projectData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update project' };
    }
  },

  // Delete a project
  deleteProject: async (projectId) => {
    try {
      const response = await api.delete(`/projects/${projectId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete project' };
    }
  },

  // Apply for a project
  applyForProject: async (projectId) => {
    try {
      const response = await api.post(`/projects/${projectId}/apply`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to apply for project' };
    }
  },

  // Update contractor status
  updateContractorStatus: async (data) => {
    try {
      const response = await api.patch('/projects/contractors/status', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update contractor status' };
    }
  },

  // Get available projects for contractor
  getAvailableProjects: async () => {
    try {
      const response = await api.get('/projects/contractor/available');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get available projects' };
    }
  },

  // Get projects posted by a professional
  getProfessionalProjects: async () => {
    try {
      const response = await api.get('/projects/professional/myprojects');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get your projects' };
    }
  }
};

export default {
  authService,
  profileService,
  jobService,
  projectService
};
