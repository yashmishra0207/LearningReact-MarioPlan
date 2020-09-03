import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = (props) => {
  return (
    <div className="project-list section">
      {props.projects ? (
        props.projects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))
       ) : "Loading..."
      }
    </div>
  );
};

export default ProjectList;
