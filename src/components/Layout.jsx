// src/components/Layout.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import useGsapEffects from "../hooks/useGsapEffects";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  useGsapEffects();

  const langs = [
    { code: "en", label: "En" },
    { code: "ar", label: "Ar" },
    { code: "fr", label: "Fr" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Home */}
          <a
            href="#hero"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition"
          >
            {t("nav.brand")}
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {["about", "skills", "experience", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition hover:scale-105"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
          </div>

          {/* Language Picker + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Buttons */}
            <div className="flex space-x-2">
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className={
                    `language-badge text-sm uppercase px-4 py-1 ` +
                    `${i18n.language === code ? "ring-2 ring-white" : ""}`
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white hover:text-primary transition">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24">{children}</main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-90 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              brand: t("nav.brand")
            })}
          </p>
          <p className="text-gray-500 mt-2">
            {t("footer.builtWith", { heart: "❤️" })}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
