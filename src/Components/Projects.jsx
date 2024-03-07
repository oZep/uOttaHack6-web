import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="page" data-page="projects" style={{ display: "none", opacity: 0 }}>
      <div className="page_content project">
        <div className="project_section">
          <h2 className="project_heading">■ Projects</h2>
          <ProjectItem name="Project 1" info="Project 1 info" link="https://github.com" />
        </div>
      </div>
    </section>
  );
}
