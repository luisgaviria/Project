import React from "react";
import ProjectTile from "./ProjectTile";

const ProjectList = (props) => {
  const dataListItems = props.projects.map((proj) => {
    return <ProjectTile key={proj.id} projectData={proj} />;
  });
  return <div className="list-item">{dataListItems}</div>;
};

export default ProjectList;
