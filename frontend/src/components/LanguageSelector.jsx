
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Check, Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "mr", name: "मराठी" },
  { code: "te", name: "తెలుగు" },
  { code: "ml", name: "മലയാളം" },
  { code: "ta", name: "தமிழ்" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef(null);
  
  const selectedLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang.code);
    setIsOpen(false);
    console.log(`Language changed to: ${lang.name}`);
  };
  
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white text-xs flex items-center gap-1 hover:text-gray-300 bg-[#004050]/50 px-3 py-2 rounded-lg transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={14} className="mr-1" />
        {selectedLanguage.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-[#00353F] border border-[#004A57] rounded-md shadow-lg z-50 min-w-[150px] py-1 animate-fade-in">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => selectLanguage(lang)}
                  className={`flex w-full items-center px-4 py-2 text-xs text-left ${
                    selectedLanguage.code === lang.code
                      ? "bg-[#004A57] text-white"
                      : "text-[#EEE] hover:bg-[#004A57]/60"
                  } transition-colors`}
                >
                  {selectedLanguage.code === lang.code && <Check size={12} className="mr-2" />}
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
