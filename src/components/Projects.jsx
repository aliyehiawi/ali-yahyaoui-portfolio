import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      icon: "fa-code",
      iconBgClass: "bg-gradient-to-r from-blue-500 to-purple-600",
      title: t("projects.item1.title"),
      description: t("projects.item1.description"),
      tags: [
        t("projects.item1.tags.java"),
        t("projects.item1.tags.jsf"),
        t("projects.item1.tags.spring"),
        t("projects.item1.tags.hibernate"),
        t("projects.item1.tags.oracle"),
        t("projects.item1.tags.microservices")
      ],
      category: t("projects.item1.category"),
      buttonLabel: t("projects.item1.button")
    },
    {
      icon: "fa-project-diagram",
      iconBgClass: "bg-gradient-to-r from-green-500 to-teal-600",
      title: t("projects.item2.title"),
      description: t("projects.item2.description"),
      tags: [
        t("projects.item2.tags.angular"),
        t("projects.item2.tags.springBoot"),
        t("projects.item2.tags.docker"),
        t("projects.item2.tags.kubernetes"),
        t("projects.item2.tags.rest"),
        t("projects.item2.tags.oauth2")
      ],
      category: t("projects.item2.category"),
      buttonLabel: t("projects.item2.button")
    },
    {
      icon: "fa-chart-line",
      iconBgClass: "bg-gradient-to-r from-purple-500 to-pink-600",
      title: t("projects.item3.title"),
      description: t("projects.item3.description"),
      tags: [
        t("projects.item3.tags.react"),
        t("projects.item3.tags.typeScript"),
        t("projects.item3.tags.nodeJs"),
        t("projects.item3.tags.mongoDb"),
        t("projects.item3.tags.webSockets"),
        t("projects.item3.tags.d3")
      ],
      category: t("projects.item3.category"),
      buttonLabel: t("projects.item3.button")
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          {t("projects.heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
