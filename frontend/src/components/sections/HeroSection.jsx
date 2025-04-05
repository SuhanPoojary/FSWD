import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button"; // Adjust path if needed

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/journey");
  };

  return (
    <section className="flex justify-center items-center bg-[#004A57] px-2 max-md:flex-col">
      <div className="flex flex-col items-center gap-10 max-w-[720px] text-center py-16 md:py-24">
        <h1 className="text-[#EEE] text-6xl leading-[1.2] tracking-[-0.72px] font-bold max-md:text-5xl max-sm:text-4xl">
          Empowering Builders Everywhere
        </h1>
        <p className="text-white text-xl leading-[1.4] max-w-[540px] max-sm:text-lg">
          Join a community of skilled professionals and contractors.
        </p>
        <Button 
          variant="default" 
          size="lg"
          onClick={handleStartJourney}
          className="bg-[#FF4B55] hover:bg-[#e03e48] text-white px-8 py-6 rounded-md text-lg font-medium"
        >
          Start Your Journey
        </Button>
      </div>
      <div
        className="w-[1500px] h-[872px] flex items-center justify-center bg-[#EDEEF1] rounded-[200px_0_0_100px] max-md:w-full max-md:rounded-[100px_0_0_100px] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Construction site in India"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
