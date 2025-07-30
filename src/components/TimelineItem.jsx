import React from "react";

const TimelineItem = ({ title, company, paragraphs }) => {
  return (
    <div className="timeline-item card-3d bg-gray-900 p-6 rounded-xl shadow-lg mb-8">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="text-xl font-semibold text-primary md:flex-1 md:mr-4">{title}</h3>
        <span className="text-gray-400 md:flex-shrink-0 md:whitespace-nowrap">{company}</span>
      </div>

      <div className="text-gray-300 space-y-4">
        {paragraphs.map((p, i) => {
          if (React.isValidElement(p)) {
            return React.cloneElement(p, { key: i });
          }
          return <p key={i}>{p}</p>;
        })}
      </div>
    </div>
  );
};

export default TimelineItem;
