import React from "react";
import { Button } from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-[#004A57] px-6 py-[120px] max-md:flex-col">
      <div className="flex flex-col items-center gap-10 max-w-[720px] text-center">
        <h1 className="text-[#EEE] text-7xl leading-[77.76px] tracking-[-0.72px] max-md:text-5xl max-sm:text-4xl">
          Empowering Builders Everywhere
        </h1>
        <p className="text-white text-[22px] leading-[30.8px] max-sm:text-lg">
          Join a community of skilled professionals and contractors.
        </p>
        <Button variant="default" size="default">
          Start Your Journey
        </Button>
      </div>
      <div
        className="w-[640px] h-[872px] flex items-center justify-center bg-[#EDEEF1] rounded-[200px_0_0_100px] max-md:w-full max-md:rounded-[100px_0_0_100px]"
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;
