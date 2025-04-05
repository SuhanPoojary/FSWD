
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Component to enforce authentication
export const RequireAuth = ({ children, allowedRoles = [] }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // Show loading state if still checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4B55]"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified, check if user has permission
  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    // Redirect to appropriate dashboard based on role
    let redirectPath = "/";
    
    switch (currentUser.role) {
      case "worker":
        redirectPath = "/worker-dashboard";
        break;
      case "professional":
        redirectPath = "/professional-dashboard";
        break;
      case "contractor":
        redirectPath = "/contractor-dashboard";
        break;
      default:
        redirectPath = "/";
    }
    
    return <Navigate to={redirectPath} replace />;
  }

  // User is authenticated and has permission
  return children;
};

export default RequireAuth;
