import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import itemData from "../../utils/assets";
const projectImages = itemData;
const imageListStyles = {
  margin: "0 auto",
  marginBottom: "210px",
  marginTop: "100px",
  height: "1750px",
  width: "810px",
  overFlow: "visible",
  padding: "35px 35px",
};
const imagesStyles = {
  objectFit: "fill",
  height: "100%",
  width: "100%",
  position: "absolute",
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ExploreProjects() {
  const handleHover = (e) => {
    // console.log(e.target.parentNode.children);
    const children = e.target.parentNode.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      // console.log(element.children[0]);
      if (element.children[0] === e.target) {
        console.log(element.children[0]);
        e.target.style.zIndex = "10";
      } else {
        element.children[0].style.zIndex = "1";
      }
    }

    e.target.style.transform = "scale(1.2)";
    // e.target.style.position = "absolute";
  };
  const handleMouseLeave = (e) => {
    // e.target.style.zIndex = "10";

    e.target.style.transform = "none";
  };
  return (
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
            key={index}
            style={imagesStyles}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
