import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";

// Helper: Convert western digits to Arabic
const toArabicDigits = (str) => str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already protects from XSS
    format: (value, format, lng) => {
      if (format === "digits") {
        return lng === "ar" ? toArabicDigits(String(value)) : String(value);
      }
      return value;
    },
  },
});

export default i18n;
