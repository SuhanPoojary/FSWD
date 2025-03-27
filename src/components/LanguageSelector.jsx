
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-white hover:text-gray-300 focus:outline-none"
        onClick={toggleDropdown}
      >
        <span>{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage.code === lang.code ? 'bg-gray-50 text-[#004A57] font-medium' : 'text-gray-700'
              }`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
