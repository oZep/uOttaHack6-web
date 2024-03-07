import React from "react";

const ProjectItem = ({ name, info, link }) => {
  return (
    <a className="project_item text-btn" href={link} target="_blank" rel="noreferrer">
      <div className="project_title">{name}</div>
      <div className="project_info">{info}</div>
    </a>
  );
};

export default ProjectItem;
