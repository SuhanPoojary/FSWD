import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password, role, onSuccess) => {
    setLoading(true);
    try {
      // Mock login - in a real app, this would be an API call
      const mockUser = {
        _id: '507f1f77bcf86cd799439011', // Valid MongoDB ObjectId format
        name: 'John Doe',
        email: email,
        role: role || 'contractor', // Use the provided role or default to contractor
        skills: ['Construction', 'Project Management'],
        location: 'New York, NY',
        title: role === 'worker' ? 'Construction Worker' : 
               role === 'professional' ? 'Professional Builder' : 
               'General Contractor',
        experience: 10,
        hourlyRate: 50,
        about: 'Experienced professional with 10 years in the industry',
        rating: 4.8,
        reviews: 42,
        availability: 'Available Now',
        profileImage: 'https://example.com/profile.jpg'
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUser(mockUser);
      if (onSuccess) onSuccess();
      return mockUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = (onSuccess) => {
    setUser(null);
    if (onSuccess) onSuccess();
  };

  const value = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 