import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "te" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleLanguage}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
        title={`Switch to ${currentLanguage === "en" ? "Telugu" : "English"}`}
      >
        <Languages className="w-4 h-4" />
        <span className="hidden sm:inline">
          {currentLanguage === "en" ? "EN" : "TE"}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
