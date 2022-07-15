import { createContext, useContext } from "react";
import { useState } from "react";
import text_eng from "../assets/json/text_eng.json";
import text_esp from "../assets/json/text_esp.json";

export const LanguageContext = createContext();

export const UseLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [content, setContent] = useState(text_esp);
  const [language, setLanguage] = useState(false);

  const toggle_language = () => {
    setLanguage(!language);
    if (language) {
      setContent(text_esp);
    } else {
      setContent(text_eng);
    }
  };
  return (
    <LanguageContext.Provider value={{ content, language, toggle_language }}>
      {children}
    </LanguageContext.Provider>
  );
};
