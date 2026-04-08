import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

/**
 * Provides access to the current language, the setter, and the `t()` translator.
 * Must be used inside <LanguageProvider>.
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <LanguageProvider>");
  return ctx;
}
