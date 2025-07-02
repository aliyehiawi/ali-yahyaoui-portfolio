import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          {t("skills.heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            iconClass="fas fa-laptop-code"
            title={t("skills.frontend.title")}
            techs={[
              t("skills.frontend.html5"),
              t("skills.frontend.css3"),
              t("skills.frontend.javascript"),
              t("skills.frontend.typeScript"),
              t("skills.frontend.angular"),
              t("skills.frontend.react"),
              t("skills.frontend.primeNg"),
              t("skills.frontend.jsp"),
              t("skills.frontend.jsf"),
              t("skills.frontend.tailwindCss")
            ]}
          />

          <SkillCard
            iconClass="fas fa-server"
            title={t("skills.backend.title")}
            techs={[
              t("skills.backend.java"),
              t("skills.backend.springBoot"),
              t("skills.backend.hibernate"),
              t("skills.backend.restApis"),
              t("skills.backend.microservices"),
              t("skills.backend.jpa"),
              t("skills.backend.nodeJs"),
              t("skills.backend.express"),
              t("skills.backend.graphql")
            ]}
          />

          <SkillCard
            iconClass="fas fa-database"
            title={t("skills.database.title")}
            techs={[
              t("skills.database.oracle"),
              t("skills.database.mySql"),
              t("skills.database.plSql"),
              t("skills.database.mongoDb"),
              t("skills.database.postgreSql"),
              t("skills.database.docker"),
              t("skills.database.kubernetes"),
              t("skills.database.aws"),
              t("skills.database.ciCd")
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
