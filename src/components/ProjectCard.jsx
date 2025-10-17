import React from "react";
import TechTag from "./TechTag";

const ProjectCard = ({
  icon,
  iconBgClass,
  title,
  description,
  tags,
  category,
  buttonLabel
}) => {
  return (
    <div className="card-3d bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className={`h-48 ${iconBgClass} flex items-center justify-center`}>
        <i className={`fas ${icon} text-white text-6xl opacity-80`}></i>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <TechTag key={index}>{tag}</TechTag>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          <button className="text-primary hover:text-blue-400 transition flex items-center">
            <i className="fas fa-external-link-alt mr-1" />
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
