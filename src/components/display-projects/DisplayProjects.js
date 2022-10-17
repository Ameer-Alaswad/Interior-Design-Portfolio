import React, { useContext, useEffect } from "react";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";
import {
  projectSHomePictures,
  projectData,
} from "../../projects-assets/projects-images";
import data from "../../projects-assets/projectText.json";
import "./displayProjects.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Projects = () => {
  const mobile = useMediaQuery("(max-width:976px)");

  const { projectsData: info } = data;
  const projectsData = useContext(SelectedProjectContext);
  const { selectedProject, setSelectedProject } = projectsData;

  const filterSelectedProject = info.filter((project) => {
    if (selectedProject === project.projectName) {
      return project;
    }
    return null;
  });

  const filterSelectedProjectImages = projectData.filter((project) => {
    if (selectedProject === project.name) return project.img;
    return null;
  });

  const { projectTitle, projectDescription } = filterSelectedProject[0];

  const handleClick = (e) => {
    setSelectedProject(e.target.innerText);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#b1b4bd" }}>
      {projectSHomePictures.map((project) => {
        if (selectedProject === project.name) {
          return (
            <img
              key={project.img}
              className="main-project-image"
              src={project.img}
              alt="main-img"
            />
          );
        }
        return null;
      })}
      <div
        className={
          mobile
            ? "content-under-image-container-responsive"
            : "content-under-image-container"
        }
      >
        <section className="projects-navigator-container">
          <h1 className="list-of-projects-title">Ghaith Konbaz Projects</h1>
          <div className="project-names-container">
            {info.map((project) => {
              const { projectName } = project;
              return (
                <button
                  key={project.projectName}
                  onClick={handleClick}
                  className={
                    selectedProject === projectName
                      ? "selectedProject"
                      : "swapProjects"
                  }
                >
                  {projectName}
                </button>
              );
            })}
          </div>
        </section>
        <section
          className={
            mobile
              ? "project-text-image-container-responsive"
              : "project-text-image-container"
          }
        >
          <h1 className={mobile ? "project-title-responsive" : "project-title"}>
            {projectTitle}
          </h1>
          <div className="project-description">{projectDescription}</div>
          <div className="images-container">
            {filterSelectedProjectImages &&
              filterSelectedProjectImages.map((image) => {
                return (
                  <img
                    key={image.img}
                    className={
                      mobile ? "project-images-responsive" : "project-images"
                    }
                    src={image.img}
                    alt="project-imgs"
                  />
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};
