
import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import LoginLayout from "@/components/layout/LoginLayout";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role");

  // Redirect to worker login if no role specified
  if (!role) {
    return <Navigate to="/login?role=worker" replace />;
  }

  // Role-specific content
  const getRoleContent = () => {
    switch (role) {
      case "worker":
        return {
          title: "Welcome, Skilled Worker!",
          subtitle: "Access your profile, track job applications, and connect with top contractors in your area.",
          stats: {
            stat1: { value: "2,500+", label: "Active Job Listings" },
            stat2: { value: "500+", label: "Verified Contractors" },
          },
          formTitle: "Sign In",
          redirectPath: "/worker-dashboard"
        };
      case "professional":
        return {
          title: "Welcome, Professional Builder!",
          subtitle: "Access your professional dashboard, manage your services, and connect with clients.",
          stats: {
            stat1: { value: "1,200+", label: "Active Projects" },
            stat2: { value: "85%", label: "Booking Rate" },
          },
          formTitle: "Professional Sign In",
          redirectPath: "/professional-dashboard"
        };
      case "contractor":
        return {
          title: "Welcome, Contractor!",
          subtitle: "Access your business dashboard, manage projects, and find skilled workers for your construction needs.",
          stats: {
            stat1: { value: "10,000+", label: "Verified Workers" },
            stat2: { value: "95%", label: "Project Success Rate" },
          },
          testimonial: {
            quote: "LabourNet has transformed how we hire skilled workers. Exceptional talent pool.",
            author: "John Smith",
            position: "ABC Construction",
          },
          formTitle: "Contractor Login",
          emailLabel: "Business Email",
          emailPlaceholder: "company@business.com",
          showPasswordToggle: true,
          actionButtonText: "Sign in to Dashboard",
          alternateActionText: "Need a contractor account?",
          alternateActionLinkText: "Register your business",
          supportLink: true,
          redirectPath: "/contractor-dashboard"
        };
      default:
        return null;
    }
  };

  const content = getRoleContent();
  if (!content) {
    return <Navigate to="/login?role=worker" replace />;
  }

  // Common login page structure with role-specific content
  return (
    <LoginLayout
      title={content.title}
      subtitle={content.subtitle}
      stat1={content.stats?.stat1}
      stat2={content.stats?.stat2}
      testimonial={content.testimonial}
    >
      <LoginForm
        title={content.formTitle || "Sign In"}
        emailLabel={content.emailLabel}
        emailPlaceholder={content.emailPlaceholder}
        showPasswordToggle={content.showPasswordToggle}
        actionButtonText={content.actionButtonText}
        alternateActionText={content.alternateActionText}
        alternateActionLinkText={content.alternateActionLinkText}
        socialLogins={content.socialLogins}
        supportLink={content.supportLink}
        redirectPath={content.redirectPath}
      />
    </LoginLayout>
  );
};

export default Login;
