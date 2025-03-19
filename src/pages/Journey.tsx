
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeader } from "@/components/PageHeader";
import { RoleCard } from "@/components/RoleCard";
import { Button } from "@/components/ui/button";

const Journey: React.FC = () => {
  const checkIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/70b17f95af25fb1ca7f0dae89feda5083f69926b14013c5a2773d4964e3d6a6f?apiKey=c295e679d9414a73a1381f5a8a56ab87&";
  
  const roles = [
    {
      title: "Construction Worker",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9f4bb7a27c7e52988dcb0b49ed14b5ca985afe91a6fe34c7f2a42b4e8d5f9fb?apiKey=c295e679d9414a73a1381f5a8a56ab87&",
      description: "Join our network of skilled construction workers and find regular employment opportunities across various projects.",
      features: [
        { icon: checkIcon, text: "Access to daily and weekly job opportunities" },
        { icon: checkIcon, text: "Competitive pay rates" },
        { icon: checkIcon, text: "Skills development and training" },
        { icon: checkIcon, text: "Safety equipment and guidelines" },
      ],
    },
    {
      title: "Skilled Professional",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c9b1b0e1b0a7e7a4e9f3c7e8c9f5c6a3e9f4b7a6b7f3c9e8b7f3c7e8c9f5c6a3?apiKey=c295e679d9414a73a1381f5a8a56ab87&",
      description: "For licensed professionals in electrical, plumbing, carpentry and other specialized trades. Connect with clients and projects directly.",
      features: [
        { icon: checkIcon, text: "Showcase your certifications and portfolio" },
        { icon: checkIcon, text: "Connect with contractors and clients" },
        { icon: checkIcon, text: "Manage your availability and bookings" },
        { icon: checkIcon, text: "Get paid securely through our platform" },
      ],
    },
    {
      title: "Contractor",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9c5f7b3e8a7c7f4b8e5c7f4b8a5c7f4b8e5c7f4b8a5c7f4b8e5c7f4b8a5c7f4?apiKey=c295e679d9414a73a1381f5a8a56ab87&",
      description: "Streamline your project management and find the right workers for each job. Build reliable teams for your construction projects.",
      features: [
        { icon: checkIcon, text: "Post jobs and find qualified workers quickly" },
        { icon: checkIcon, text: "Verify worker qualifications and experience" },
        { icon: checkIcon, text: "Manage payments and documentation" },
        { icon: checkIcon, text: "Track project progress and team performance" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-[#EDEEF1] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <PageHeader 
            title="Start Your Journey with LabourNet" 
            subtitle="Choose the role that best fits your needs and begin your construction career journey today"
          />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-md:grid-cols-1">
            {roles.map((role, index) => (
              <RoleCard 
                key={index}
                title={role.title}
                icon={role.icon}
                description={role.description}
                features={role.features}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-[rgba(113,123,158,1)] text-lg mb-8">
              Ready to take the next step? Create your profile and start exploring opportunities.
            </p>
            <Button variant="primary" size="lg">
              Create Your Profile
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Journey;
