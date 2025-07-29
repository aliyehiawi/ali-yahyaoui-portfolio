// src/components/Experience.jsx
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import TimelineItem from "./TimelineItem";

const Experience = () => {
  const { t } = useTranslation();

  // Localize your date ranges via the translation files
  const periodFadel = t("experience.item1.period", { start: 2022 });
  const periodPoyesis = t("experience.item2.period");
  const year8thGate = t("experience.item3.year", { year: 2021 });

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
      title: t("experience.item2.title"),
      company: t("experience.item2.company", {
        company: "POYESIS",
        period: periodPoyesis,
      }),
      paragraphs: [
        <Trans
          key="p1"
          i18nKey="experience.item2.p1"
          components={{ 1: <span className="text-primary" /> }}
          values={{ systems: t("experience.item2.systems") }}
        />,
        <Trans
          key="p2"
          i18nKey="experience.item2.p2"
          components={{ 1: <span className="text-primary" /> }}
          values={{ auth: t("experience.item2.auth") }}
        />,
        <Trans
          key="p3"
          i18nKey="experience.item2.p3"
          components={{ 1: <span className="text-primary" /> }}
          values={{ tech: t("experience.item2.tech") }}
        />,
        <p key="p4">{t("experience.item2.p4")}</p>,
      ],
    },
    {
      title: t("experience.item3.title"),
      company: t("experience.item3.company", {
        company: "8TH GATE",
        year:    year8thGate,
      }),
      paragraphs: [
        <Trans
          key="p1"
          i18nKey="experience.item3.p1"
          components={{ 1: <span className="text-primary" /> }}
          values={{
            tech:       t("experience.item3.tech"),
            ui:         t("experience.item3.ui"),
            responsive: t("experience.item3.responsive"),
          }}
        />,
      ],
    },
    {
      title: t("experience.item4.title"),
      company: t("experience.item4.company"),
      paragraphs: [
        t("experience.item4.p1")
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
