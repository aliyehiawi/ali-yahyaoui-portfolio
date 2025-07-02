import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailto = `mailto:${t("contact.email")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          {t("contact.heading")}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contact.infoTitle")}</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary text-xl mr-4" />
                <span>{t("contact.email")}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-primary text-xl mr-4" />
                <span>
                  {t("contact.phone", { phone: 96178962143 })}
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary text-xl mr-4" />
                <span>{t("contact.location")}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  {t("contact.form.label.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  {t("contact.form.label.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block mb-2">
                  {t("contact.form.label.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  {t("contact.form.label.message")}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition w-full flex items-center justify-center transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {t("contact.form.button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
