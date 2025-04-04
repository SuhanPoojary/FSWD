import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Projects
  getProjects: () => axios.get(`${API_URL}/projects`),
  getProject: (id) => axios.get(`${API_URL}/projects/${id}`),
  createProject: (data) => axios.post(`${API_URL}/projects`, data),
  updateProject: (id, data) => axios.put(`${API_URL}/projects/${id}`, data),
  deleteProject: (id) => axios.delete(`${API_URL}/projects/${id}`),

  // Applications
  getProjectApplications: (projectId) => 
    axios.get(`${API_URL}/applications/project/${projectId}`),
  applyToProject: (data) => axios.post(`${API_URL}/applications`, data),
  updateApplicationStatus: (id, status) => 
    axios.patch(`${API_URL}/applications/${id}/status`, { status }),

  // Users/Profile
  getProfile: () => axios.get(`${API_URL}/users/me`),
  updateProfile: (data) => axios.put(`${API_URL}/users/me`, data),
  getWorkers: () => axios.get(`${API_URL}/users?role=worker`),

  // Profiles
  post: (endpoint, data) => axios.post(`${API_URL}${endpoint}`, data),
  get: (endpoint) => axios.get(`${API_URL}${endpoint}`),
  put: (endpoint, data) => axios.put(`${API_URL}${endpoint}`, data)
}; 