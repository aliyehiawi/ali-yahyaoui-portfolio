import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import useGsapEffects from "../hooks/useGsapEffects";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  useGsapEffects();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const sections = ["about", "skills", "experience", "contact"];
  const langs = [
    { code: "en", label: "En" },
    { code: "ar", label: "Ar" },
    { code: "fr", label: "Fr" },
  ];

  const rawEmail = t("contact.email", {
    defaultValue: "ali.yehiawii@gmail.com",
  });
  const rawPhone = t("contact.phoneRaw", { defaultValue: "33765776014" });

  const formattedPhone = useMemo(() => {
    if (!rawPhone) return '';
    
    const digits = rawPhone.replace(/\D/g, '');
    const length = digits.length;
    
    const patterns = {
      11: {
        country: 2,
        groups: [1, 2, 2, 2, 2]
      },
      12: {
        country: 3,
        groups: [2, 3, 3]
      },
      10: {
        country: 1,
        groups: [3, 3, 4]
      }
    };

    const pattern = patterns[length];
    
    if (!pattern) {
      return `+${digits}`;
    }

    const countryCode = digits.slice(0, pattern.country);
    let remaining = digits.slice(pattern.country);
    const parts = [countryCode];

    for (const groupSize of pattern.groups) {
      if (remaining.length >= groupSize) {
        parts.push(remaining.slice(0, groupSize));
        remaining = remaining.slice(groupSize);
      }
    }

    if (remaining) {
      parts.push(remaining);
    }

    return `+${parts.join(' ')}`;
  }, [rawPhone]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(rawEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const hrefFor = (section) =>
    section === "contact" ? "#animated-contact" : `#${section}`;

  return (
    <>
      <header className="fixed w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.brand")}
          </a>

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

      <main className="pt-24">{children}</main>

      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contactTitle", { defaultValue: "Contact" })}
            </h4>
            <ul className="space-y-3">
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
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-primary text-lg mr-3" />
                <a
                  href={`tel:+${rawPhone}`}
                  className="hover:text-white transition"
                >
                  {formattedPhone}
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary text-lg mr-3" />
                <span>{t("contact.location")}</span>
              </li>
            </ul>
          </div>

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
                href="https://www.linkedin.com/in/ali-yahyaoui-a49a6421b"
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
