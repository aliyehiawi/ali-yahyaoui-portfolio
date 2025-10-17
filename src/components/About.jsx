import React from "react";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          {t("about.heading")}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <article className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-start">
                <div className="flex-shrink-0 me-4">
                  <i className="fas fa-graduation-cap text-4xl text-accent"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-accent">
                    {t("about.education.masters")}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <Trans
                      i18nKey="about.education.mastersUniversity"
                      values={{
                        school1: t("about.education.mastersSchool1"),
                        school2: t("about.education.mastersSchool2")
                      }}
                    />
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {t("about.education.mastersYears")}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("about.education.mastersDescription")}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <article className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("about.languages.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="language-badge">{t("about.languages.english")}</span>
                <span className="language-badge">{t("about.languages.arabic")}</span>
                <span className="language-badge">{t("about.languages.french")}</span>
              </div>
            </article>

            <article className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("about.education.title")}
              </h3>
              <p className="mb-2 font-medium">
                {t("about.education.degree")}
              </p>
              <p className="text-gray-400 text-sm">
                <Trans
                  i18nKey="about.education.university"
                  values={{
                    school: t("about.education.universitySchool"),
                    years: "2019–2022"
                  }}
                />
              </p>
              <p className="mt-4 mb-2 font-medium">
                {t("about.education.highschool")}
              </p>
              <p className="text-gray-400 text-sm">
                <Trans
                  i18nKey="about.education.highschoolDetails"
                  values={{
                    track: t("about.education.track"),
                    years: "2018–2019"
                  }}
                />
              </p>
            </article>

            <article className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("about.methods.title")}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>{t("about.methods.agile")}</p>
                <p>{t("about.methods.microservices")}</p>
              </div>
            </article>

          </div>

          <p className="text-lg text-gray-300 mb-6">{t("about.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
