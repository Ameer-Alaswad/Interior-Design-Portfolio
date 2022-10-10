import React, { useContext } from "react";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";
import {
  projectSHomePictures,
  projectData,
} from "../../projects-assets/projects-images";
import data from "../../projects-assets/projectText.json";
import "./displayProjects.css";
export const Projects = () => {
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
  });
  console.log(filterSelectedProjectImages);
  const { projectTitle, projectDescription } = filterSelectedProject[0];
  const handleClick = (e) => {
    setSelectedProject(e.target.innerText);
  };

  console.log(info);
  return (
    <div>
      {projectSHomePictures.map((project) => {
        if (selectedProject === project.name) {
          return (
            <img
              key={project.img}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                marginBottom: "40px",
              }}
              src={project.img}
              alt="main-img"
            />
          );
        }
        return null;
      })}
      <div
        style={{
          width: "1020px",
          minHeight: "600px",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <section
          style={{
            width: "191px",
            height: "500px",
            marginTop: "40px",
          }}
        >
          <h1 className="list-of-projects-title">Ghaith Konbaz Projects</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
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
          style={{
            width: "701px",
          }}
        >
          <h1 className="project-title">{projectTitle}</h1>
          <div className="project-description">{projectDescription}</div>
          <div className="images-container">
            {filterSelectedProjectImages &&
              filterSelectedProjectImages.map((image) => {
                return (
                  <img
                    key={image.img}
                    className="project-images"
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
