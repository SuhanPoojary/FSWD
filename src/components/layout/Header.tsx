import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex w-full justify-between items-center bg-[#00353F] p-2">
      <div className="text-[#EEE] text-base px-2 py-0">LabourNet</div>
      <nav className="flex items-center gap-4 max-sm:hidden">
        <a href="#dashboard" className="text-[#EEE] text-xs px-4 py-0">
          Dashboard
        </a>
        <a href="#story" className="text-[#EEE] text-xs px-4 py-0">
          Our Story
        </a>
        <a href="#marketplace" className="text-[#EEE] text-xs px-4 py-0">
          Marketplace
        </a>
      </nav>
      <div className="text-white text-xs">Language</div>
      <button className="border text-[#EEE] text-xs px-6 py-4 rounded-lg border-solid border-[#EEE] hover:bg-[#004A57] transition-colors">
        Get in Touch
      </button>
    </header>
  );
};

export default Header;
