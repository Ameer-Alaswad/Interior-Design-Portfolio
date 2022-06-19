import { WHITE_SOLID } from "../../default-colors/colors";
export const imageListStyles = {
  margin: "0 auto",
  marginBottom: "210px",
  height: "1700px",
  width: "810px",
  overFlow: "visible",
  padding: "35px 35px",
};
export const imagesStyles = {
  objectFit: "fill",
  height: "100%",
  width: "100%",
  position: "absolute",
};
export const onHoverClass = {
  zIndex: "10",
  transform: "scale(1.2)",
  cursor: "pointer",
  boxShadow: `-1px 3px 8px 5px ${WHITE_SOLID}`,
};
export const onMouseLeaveStyle = {
  transform: "none",
  boxShadow: "none",
};
export const noneHoveredImagesStyle = {
  zIndex: "1",
  boxShadow: "none",
};
