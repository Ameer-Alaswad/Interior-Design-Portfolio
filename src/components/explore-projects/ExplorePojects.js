import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDisplay from "./imageDisplay";
import itemData from "../../utils/assets";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  listStyles,
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
const ExploreProjects = () => {
  const imagesStyle = { ...imagesStyles };
  const listStyle = { ...listStyles };
  const matches = useMediaQuery("(max-width:860px)");
  const matches2 = useMediaQuery("(max-width:720px)");
  const matches3 = useMediaQuery("(max-width:525px)");
  const matches4 = useMediaQuery("(max-width:390px)");
  const imageListItem = {};
  if (matches) {
    listStyle.gridTemplateColumns = "repeat(2, 1fr)";
    listStyle.height = "3400px";
    listStyle.width = "650px";
  }
  if (matches2) {
    listStyle.width = "450px";
    listStyle.gridTemplateColumns = "repeat(1, 1fr)";
    imageListItem.gridColumnEnd = "auto";
    listStyle.height = "4300px";
  }
  if (matches3) {
    listStyle.width = "320px";
    listStyle.height = "3400px";

    imageListItem.height = "210px";
    imageListItem.gridColumnEnd = "auto";
    listStyle.height = "4400px";
  }
  if (matches4) {
    imageListItem.height = "150px";
    listStyle.height = "3200px";

    listStyle.width = "210px";
  }
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = React.useState();
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
        style={listStyle}
      >
        {projectImages.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={imageListItem}
          >
            <img
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleOnClick}
              key={index}
              style={imagesStyle}
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {visible && (
        <ImageDisplay
          visible={visible}
          setVisible={setVisible}
          image={image.src}
        />
      )}
    </div>
  );
};
export default ExploreProjects;
