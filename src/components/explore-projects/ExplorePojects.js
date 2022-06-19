import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDisplay from "./imageDisplay";
import itemData from "../../utils/assets";
import {
  imageListStyles,
  imagesStyles,
  onHoverClass,
  onMouseLeaveStyle,
  noneHoveredImagesStyle,
} from "./ExploreProjectsStyles";
const projectImages = itemData;

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ExploreProjects() {
  const [visible, setVisible] = React.useState(false);
  const setStylesOnImage = (styles, element) => {
    Object.assign(element.style, styles);
  };
  const handleHover = (e) => {
    const imagesList = e.target.parentNode.parentNode.children;
    [...imagesList].map((imageList) => {
      const image = imageList.children[0];
      const hoveredImage = e.target;
      if (image === hoveredImage) {
        setStylesOnImage(onHoverClass, hoveredImage);
      } else {
        setStylesOnImage(noneHoveredImagesStyle, image);
      }
    });
  };
  const handleMouseLeave = (e) => {
    const hoveredImage = e.target;
    setStylesOnImage(onMouseLeaveStyle, hoveredImage);
  };
  const handleOnClick = (e) => {
    setVisible(true);
  };
  return (
    <div>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={165}
        style={imageListStyles}
      >
        {projectImages.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleOnClick}
              key={index}
              style={imagesStyles}
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {visible && <ImageDisplay visible={visible} setVisible={setVisible} />}
    </div>
  );
}
