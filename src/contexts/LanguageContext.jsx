
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../utils/translations.js";

// Create the context with a default value
const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the saved language from localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage");
    // Verify that the saved language is valid
    const validLanguages = ["en", "hi", "mr", "te", "ml", "ta", "kn", "gu", "pa"];
    return validLanguages.includes(savedLanguage) ? savedLanguage : "en";
  });

  // Save the language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  // Translation function
  const t = (key) => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to English if translation is missing
      return translations.en[key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
