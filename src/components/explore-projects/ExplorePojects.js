import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDisplay from "./imageDisplay";
import projectData from "../../utils/assets";
import {
  setStyesOnProjectImage,
  handleHoverLogic,
  handleResponsiveness,
} from "./ExploreProjectUtils";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  projectImagesContainer,
  projectImagesStyles,
  onHoverClass,
  onMouseLeaveStyle,
  noneHoveredProjectImagesStyle,
} from "./ExploreProjectsStyles";
const projectImages = projectData;

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const ExploreProjects = () => {
  // handles the visibility of the popup
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = React.useState();

  const projectImagesStyle = { ...projectImagesStyles };
  const ImagesContainer = { ...projectImagesContainer };
  const matches = useMediaQuery("(max-width:860px)");
  const matches2 = useMediaQuery("(max-width:720px)");
  const matches3 = useMediaQuery("(max-width:525px)");
  const matches4 = useMediaQuery("(max-width:390px)");
  let props = {
    visible: visible,
    setVisible: setVisible,
    image: image,
  };
  // all images are wrapped in lists and the lists are wrapped in an container
  const projectImagesLists = {};

  handleResponsiveness(
    matches,
    matches2,
    matches3,
    matches4,
    ImagesContainer,
    projectImagesLists
  );
  // These functions handle actions on the images in exploreProject page.
  const handleHover = (e) => {
    handleHoverLogic(e, onHoverClass, noneHoveredProjectImagesStyle);
  };
  const handleMouseLeave = (e) => {
    const hoveredImage = e.target;
    setStyesOnProjectImage(onMouseLeaveStyle, hoveredImage);
  };
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
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {visible && <ImageDisplay {...props} />}
    </div>
  );
};
export default ExploreProjects;
