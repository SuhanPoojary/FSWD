import { api } from './api';

export const createBuilderProfile = async (profileData) => {
  try {
    const response = await api.post('/profiles/builder', profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createContractorProfile = async (profileData) => {
  try {
    const response = await api.post('/profiles/contractor', profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createWorkerProfile = async (profileData) => {
  try {
    const response = await api.post('/profiles/worker', profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBuilderProfile = async (id) => {
  try {
    const response = await api.get(`/profiles/builder/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getContractorProfile = async (id) => {
  try {
    const response = await api.get(`/profiles/contractor/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getWorkerProfile = async (id) => {
  try {
    const response = await api.get(`/profiles/worker/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateBuilderProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/profiles/builder/${id}`, profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateContractorProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/profiles/contractor/${id}`, profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateWorkerProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/profiles/worker/${id}`, profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 