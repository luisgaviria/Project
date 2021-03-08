import React from "react";

import "./style.css";

const ProjectTile = (props) => {
  const { companyName, category, description, icon } = props.projectData;
  return (
    <div className="list-container ">
      <div className="icon-image">
        <img height="40" src={icon} alt="Icon from category"></img>
      </div>
      <div className="title ">{companyName}</div>
      <div className="description ">{category}</div>
      <div className="content-text ">{description}</div>
    </div>
  );
};

export default ProjectTile;
