import React, { useContext, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ProjectImageDisplay from "./project-image-display/ProjectImageDisplay";
import { projectData as projectImages } from "../../projects-assets/projects-images";
import exploreProjectsStyles from "./exploreProjectsStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import exploreProjectsUtils from "./exploreProjectsUtils";
import data from "../../projects-assets/projectText.json";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";
const {
  handleResponsiveness,
  handleHoverLogic,
  setStyesOnProjectImage,
  handleProjectImagesGrid,
} = exploreProjectsUtils;
const {
  projectImagesLayout,
  projectImagesContainer,
  noneHoveredProjectImagesStyle,
  onMouseLeaveStyle,
  onHoverClass,
  projectImagesStyles,
} = exploreProjectsStyles;
handleProjectImagesGrid();
const ExploreProjects = () => {
  const projectsData = useContext(SelectedProjectContext);
  const { selectedProject, setSelectedProject } = projectsData;

  // handles the visibility of the popup
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = React.useState();
  const [layoutVisible, setLayoutVisible] = React.useState(false);

  const cashedProjectImages = React.useMemo(() => {
    return projectImages;
  }, []);

  const projectImagesStyle = { ...projectImagesStyles };
  const ImagesContainer = { ...projectImagesContainer };

  const tabletSize = useMediaQuery("(max-width:860px)");
  const betweenTabletSizeAndBigMobileSize = useMediaQuery("(max-width:720px)");
  const mobileSize = useMediaQuery("(max-width:525px)");
  const smallMobileSize = useMediaQuery("(max-width:390px)");
  const projectImagesLists = {};
  let props = {
    visible: visible,
    setVisible: setVisible,
    image: image,
  };
  const filterSelectedProject = data.projectsData.map((project) => {
    return project.projectName;
  });
  // All images are wrapped in lists and lists are wrapped a container.

  handleResponsiveness({
    tabletSize,
    betweenTabletSizeAndBigMobileSize,
    mobileSize,
    smallMobileSize,
    ImagesContainer,
    projectImagesLists,
  });
  // These functions handle actions on the images in exploreProjects page.
  const handleHover = (e) => {
    handleHoverLogic({
      e,
      onHoverClass,
      noneHoveredProjectImagesStyle,
      setLayoutVisible,
    });
  };
  const handleMouseLeave = (e) => {
    const imagesList = e.target.parentNode.parentNode.children;
    [...imagesList].map((imageList) => {
      const image = imageList.children[0];
      const hoveredImage = e.target.parentNode;
      image.style.opacity = "1";
      return setStyesOnProjectImage(onMouseLeaveStyle, hoveredImage);
    });
    setLayoutVisible(false);
  };
  // When an image gets clicked it gets displayed in a div by this handler.
  const handleProjectImageClick = (e) => {
    const image = e.target;
    setVisible(true);
    setImage(image);
    filterSelectedProject.forEach((imageName) => {
      if (image.src.includes(imageName)) {
        setSelectedProject(imageName);
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#b1b4bd", marginBottom: "-16px" }}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={165}
        style={ImagesContainer}
      >
        {cashedProjectImages.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={projectImagesLists}
          >
            <img
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleProjectImageClick}
              key={index}
              style={projectImagesStyle}
              {...handleProjectImagesGrid(item.img, 121, item.rows, item.cols)}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {layoutVisible && <div style={projectImagesLayout}></div>}
      {visible && <ProjectImageDisplay {...props} />}
    </div>
  );
};
export default ExploreProjects;
