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

        <div className="max-w-4xl mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Languages Card */}
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

            {/* Education Card */}
            <article className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("about.education.title")}
              </h3>
              <p className="mb-2 font-medium">
                {t("about.education.degree")}
              </p>
              <p className="text-gray-400">
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
              <p className="text-gray-400">
                <Trans
                  i18nKey="about.education.highschoolDetails"
                  values={{
                    track: t("about.education.track"),
                    years: "2018–2019"
                  }}
                />
              </p>
            </article>

            {/* Methodologies Card */}
            <article className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {t("about.methods.title")}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>{t("about.methods.agile")}</p>
                <p>{t("about.methods.microservices")}</p>
                <p>{t("about.methods.tdd")}</p>
              </div>
            </article>

          </div>

          {/* About description */}
          <p className="text-lg text-gray-300 mb-6">{t("about.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
