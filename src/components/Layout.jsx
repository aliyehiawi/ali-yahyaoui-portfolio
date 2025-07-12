// src/components/Layout.jsx
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import useGsapEffects from "../hooks/useGsapEffects";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  useGsapEffects();

  // Header menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Email copy-to-clipboard state
  const [copied, setCopied] = useState(false);

  // Sections for nav 
  // const sections = ["about", "skills", "experience", "projects", "contact"];
  const sections = ["about", "skills", "experience", "contact"];
  const langs = [
    { code: "en", label: "En" },
    { code: "ar", label: "Ar" },
    { code: "fr", label: "Fr" },
  ];

  // Raw contact values (could be moved into your i18n JSON)
  const rawEmail = t("contact.email", {
    defaultValue: "ali.yehiawii@gmail.com",
  });
  const rawPhone = t("contact.phoneRaw", { defaultValue: "96178962143" });

  // Format "+96178962143" → "+961 78 962 143"
  const formattedPhone = useMemo(() => {
    const country = rawPhone.slice(0, rawPhone.length - 8);
    const rest = rawPhone.slice(-8);
    const groups = rest.match(/(\d{2})(\d{3})(\d{3})/);
    if (!groups) return rawPhone;
    return `+${country} ${groups[1]} ${groups[2]} ${groups[3]}`;
  }, [rawPhone]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(rawEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Helper to map "contact" to the correct section id
  const hrefFor = (section) =>
    section === "contact" ? "#animated-contact" : `#${section}`;

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Home */}
          <a
            href="#hero"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.brand")}
          </a>

          {/* DESKTOP nav links */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section}
                href={hrefFor(section)}
                className="text-gray-300 hover:text-white transition hover:scale-105"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
          </div>

          {/* language picker + mobile toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-2">
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
            <button
              className="md:hidden text-white hover:text-primary transition"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6">
          {sections.map((section) => (
            <a
              key={section}
              href={hrefFor(section)}
              className="text-white text-2xl hover:opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`nav.${section}`)}
            </a>
          ))}

          <div className="flex space-x-4 pt-4">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  i18n.changeLanguage(code);
                  setIsMenuOpen(false);
                }}
                className={
                  `language-badge text-sm uppercase px-4 py-1 ` +
                  `${i18n.language === code ? "ring-2 ring-white" : ""}`
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-24">{children}</main>

      {/* Footer with contact info */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ——— Contact ——— */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contactTitle", { defaultValue: "Contact" })}
            </h4>
            <ul className="space-y-3">
              {/* Email with copy button */}
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary text-lg mr-3" />
                <a
                  href={`mailto:${rawEmail}`}
                  className="hover:text-white transition mr-2"
                >
                  {rawEmail}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label={
                    copied
                      ? t("contact.copied", { defaultValue: "Copied!" })
                      : t("contact.copyEmail", { defaultValue: "Copy email" })
                  }
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fas fa-copy" />
                </button>
                {copied && (
                  <span className="ml-2 text-sm text-green-400">
                    {t("contact.copied", { defaultValue: "Copied!" })}
                  </span>
                )}
              </li>
              {/* Phone */}
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-primary text-lg mr-3" />
                <a
                  href={`tel:+${rawPhone}`}
                  className="hover:text-white transition"
                >
                  {formattedPhone}
                </a>
              </li>
              {/* Location */}
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary text-lg mr-3" />
                <span>{t("contact.location")}</span>
              </li>
            </ul>
          </div>

          {/* ——— Quick Links ——— */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.linksTitle", { defaultValue: "Quick Links" })}
            </h4>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={hrefFor(section)}
                    className="hover:text-white transition capitalize"
                  >
                    {t(`nav.${section}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ——— Built With / Social ——— */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t("footer.builtWithTitle", {
                  defaultValue: "Built With",
                })}
              </h4>
              <p className="mb-4">
                {t("footer.builtWith", {
                  heart: "❤️",
                  defaultValue: "Built with {{heart}} and modern web technologies",
                })}
              </p>
            </div>
            <div className="space-x-4">
              <a
                href="https://github.com/aliyehiawi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition"
              >
                <i className="fab fa-github text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-yehiawi-a49a6421b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                <i className="fab fa-linkedin text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="bg-gray-800 py-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} {t("nav.brand")}.{" "}
            {t("footer.rightsReserved", {
              defaultValue: "All rights reserved.",
            })}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
