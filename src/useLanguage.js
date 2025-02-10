import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const [language, setLanguage] = useState("RU");
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    let newLanguage;
    switch (language) {
      case "EE":
        newLanguage = "RU";
        break;
      case "RU":
        newLanguage = "EN";
        break;
      case "EN":
        newLanguage = "EE";
        break;
      default:
        newLanguage = "EE";
    }
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage.toLowerCase());
  };

  return { language, toggleLanguage, t };
};
