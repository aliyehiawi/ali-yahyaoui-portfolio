// src/components/Experience.jsx
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  const { t } = useTranslation();

  // Localize your date ranges via the translation files
  const periodFadel = t("experience.item1.period", { start: 2022 });
  const year8thGate = t("experience.item2.year",    { year: 2021 });
  const periodFreelance = t("experience.item3.period", { start: 2022 });

  const experiences = [
    {
      title: t("experience.item1.title"),
      company: t("experience.item1.company", {
        company: "FADEL",
        period: periodFadel,
      }),
      paragraphs: [
        <Trans
          key="p1"
          i18nKey="experience.item1.p1"
          components={{ 1: <span className="text-primary" /> }}
          values={{
            stack:    t("experience.item1.stack"),
            database: t("experience.item1.database"),
          }}
        />,
        <Trans
          key="p2"
          i18nKey="experience.item1.p2"
          components={{ 1: <span className="text-primary" /> }}
          values={{
            architecture: t("experience.item1.architecture"),
            frontend:     t("experience.item1.frontend"),
          }}
        />,
        <p key="p3">{t("experience.item1.p3")}</p>,
        <Trans
          key="p4"
          i18nKey="experience.item1.p4"
          components={{ 1: <span className="text-primary" /> }}
          values={{ methodology: t("experience.item1.methodology") }}
        />,
        <Trans
          key="p5"
          i18nKey="experience.item1.p5"
          components={{ 1: <span className="text-primary" /> }}
          values={{ tools: t("experience.item1.tools") }}
        />,
        <Trans
          key="p6"
          i18nKey="experience.item1.p6"
          components={{ 2: <span className="text-accent" /> }}
          values={{ clients: t("experience.item1.clients") }}
        />,
      ],
    },
    {
      title:   t("experience.item2.title"),
      company: t("experience.item2.company", {
        company: "8TH GATE",
        year:    year8thGate,
      }),
      paragraphs: [
        <Trans
          key="p1"
          i18nKey="experience.item2.p1"
          components={{ 1: <span className="text-primary" /> }}
          values={{
            tech:       t("experience.item2.tech"),
            ui:         t("experience.item2.ui"),
            responsive: t("experience.item2.responsive"),
          }}
        />,
      ],
    },
    {
      title:   t("experience.item3.title"),
      company: t("experience.item3.company", {
        role:   t("experience.item3.title"),
        period: periodFreelance,
      }),
      paragraphs: [
        t("experience.item3.p1"),
        t("experience.item3.p2"),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 bg-opacity-50 section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          {t("experience.heading")}
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              title={exp.title}
              company={exp.company}
              paragraphs={exp.paragraphs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
