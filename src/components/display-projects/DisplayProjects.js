import React, { useContext } from "react";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";

export const Projects = () => {
  const Project = useContext(SelectedProjectContext);
  const { selectedProject, setSelectedProject } = Project;
  return <div></div>;
};
