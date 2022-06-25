import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ProjectImageDisplay from "./project-image-display/ProjectImageDisplay";
import { projectData as projectImages } from "../../projects-assets/projects-images";
import exploreProjectsStyles from "./exploreProjectsStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import exploreProjectsUtils from "./exploreProjectsUtils";

exploreProjectsUtils.handleProjectImagesGrid();
const ExploreProjects = () => {
  // handles the visibility of the popup
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = React.useState();
  const [layoutVisible, setLayoutVisible] = React.useState(false);

  const projectImagesStyle = { ...exploreProjectsStyles.projectImagesStyles };
  const ImagesContainer = { ...exploreProjectsStyles.projectImagesContainer };

  const tablet = useMediaQuery("(max-width:860px)");
  const betweenTabletAndBigPhones = useMediaQuery("(max-width:720px)");
  const phones = useMediaQuery("(max-width:525px)");
  const smallPhones = useMediaQuery("(max-width:390px)");
  const projectImagesLists = {};
  let props = {
    visible: visible,
    setVisible: setVisible,
    image: image,
  };
  // All images are wrapped in lists and lists are wrapped a container.

  exploreProjectsUtils.handleResponsiveness({
    tablet,
    betweenTabletAndBigPhones,
    phones,
    smallPhones,
    ImagesContainer,
    projectImagesLists,
  });
  // These functions handle actions on the images in exploreProjects page.
  const handleHover = (e) => {
    exploreProjectsUtils.handleHoverLogic(
      e,
      exploreProjectsStyles.onHoverClass,
      exploreProjectsStyles.noneHoveredProjectImagesStyle,
      setLayoutVisible,
      projectImagesLists
    );
  };
  const handleMouseLeave = (e) => {
    const imagesList = e.target.parentNode.parentNode.children;
    [...imagesList].map((imageList) => {
      const image = imageList.children[0];
      const hoveredImage = e.target.parentNode;
      image.style.opacity = "1";
      exploreProjectsUtils.setStyesOnProjectImage(
        exploreProjectsStyles.onMouseLeaveStyle,
        hoveredImage,
        e
      );
    });
    setLayoutVisible(false);
  };
  // When an image gets clicked it gets displayed in a div by this handler.
  const handleClick = (e) => {
    const image = e.target;
    setVisible(true);
    setImage(image);
  };
  return (
    <div>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={165}
        style={ImagesContainer}
      >
        {projectImages.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={projectImagesLists}
          >
            <img
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              key={index}
              style={projectImagesStyle}
              {...exploreProjectsUtils.handleProjectImagesGrid(
                item.img,
                121,
                item.rows,
                item.cols
              )}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {layoutVisible && (
        <div style={exploreProjectsStyles.projectImagesLayout}></div>
      )}
      {visible && <ProjectImageDisplay {...props} />}
    </div>
  );
};
export default ExploreProjects;
