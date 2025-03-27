
import React, { createContext, useState, useContext, useEffect } from "react";

// Define available languages
export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
];

// Create the language context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    return savedLanguage ? 
      languages.find(lang => lang.code === savedLanguage) || languages[0] : 
      languages[0];
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage.code);
  }, [currentLanguage]);

  // Change the language
  const changeLanguage = (languageCode) => {
    const newLanguage = languages.find(lang => lang.code === languageCode);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
