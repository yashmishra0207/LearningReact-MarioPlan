import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = (props) => {
  // if(props.projects)
  return (
    <div className="project-list section">
      {props.projects ? (
        props.projects.map((project, index) => (
          <Link key={project.id} to={"/project/" + project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))
      ) : (
        <div className=" container center ">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
