// src/context/LanguageContext.jsx
import { createContext, useState } from "react";
import { texts } from "../constants/texts"; // <--- هنا استدعاء texts.js

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "ar" : "en"));
    document.documentElement.dir = lang === "en" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
