
import React, { createContext, useState, useEffect, useContext } from "react";
import { authService, profileService } from "../utils/api";
import { toast } from "sonner";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        // Check for stored token
        const token = localStorage.getItem('jwt');
        if (!token) {
          setLoading(false);
          return;
        }

        // Verify token validity by getting current user
        const { data } = await authService.getCurrentUser();
        setCurrentUser(data.user);
        setUserProfile(data.profile);
      } catch (error) {
        console.error("Authentication error:", error);
        // Clear invalid credentials
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Register a new user
  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await authService.register(userData);
      setCurrentUser(response.data.user);
      toast.success("Registration successful");
      return response;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await authService.login(credentials);
      setCurrentUser(response.data.user);
      
      // Load user profile
      try {
        const profileRes = await profileService.getProfile();
        setUserProfile(profileRes.data.profile);
      } catch (profileError) {
        console.log("No profile found or error loading profile");
      }
      
      toast.success("Login successful");
      return response;
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      setCurrentUser(null);
      setUserProfile(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.response?.data?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      const response = await profileService.updateProfile(profileData);
      setUserProfile(response.data.profile);
      toast.success("Profile updated successfully");
      return response;
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    userProfile,
    loading,
    register,
    login,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
