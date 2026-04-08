import { useLanguage } from "../../hooks/useLanguage";
import type { Language } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const options: { value: Language; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "km", label: "ខ្មែរ" },
  ];

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600"
      role="group"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLanguage(opt.value)}
          aria-pressed={language === opt.value}
          className={`px-3 py-1 text-[11px] font-bold rounded-md transition-colors duration-200 ${
            language === opt.value
              ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
              : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;