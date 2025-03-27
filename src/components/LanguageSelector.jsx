
import React, { useState, useRef, useEffect } from "react";
import { useLanguage, languages } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
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
        className="text-white text-xs flex items-center gap-1 hover:text-gray-300 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentLanguage.name}
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
        <div className="absolute top-full mt-1 right-0 bg-[#00353F] border border-[#004A57] rounded-md shadow-lg z-50 min-w-[140px] overflow-hidden">
          <ul className="py-1 max-h-[250px] overflow-y-auto">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => selectLanguage(language.code)}
                  className={`block px-4 py-2 text-xs w-full text-left transition-colors ${
                    currentLanguage.code === language.code
                      ? "bg-[#004A57] text-white"
                      : "text-[#EEE] hover:bg-[#004A57]"
                  }`}
                >
                  {language.name}
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
