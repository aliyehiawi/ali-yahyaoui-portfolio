import React from "react";
import TechTag from "./TechTag";

const SkillCard = ({ iconClass, title, techs }) => (
  <div className="card-3d bg-gray-900 p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <div className="skill-icon text-3xl text-primary me-4">
        <i className={iconClass}></i>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap">
      {techs.map((label, index) => (
        <TechTag key={index}>{label}</TechTag>
      ))}
    </div>
  </div>
);

export default SkillCard;
