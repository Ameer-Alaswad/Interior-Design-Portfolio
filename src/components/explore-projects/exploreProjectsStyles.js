import { BLACK_SOLID } from "../../default-colors/colors";

const projectImagesStyles = {
  objectFit: "cover",
  height: "100%",
  width: "100%",
  position: "absolute",
};
const onHoverClass = {
  zIndex: "4",
  transform: "scale(1.2)",
  transition: "transform 0.4s ease-in-out",
  cursor: "pointer",
  opacity: "1",
};
const onMouseLeaveStyle = {
  zIndex: "4",
  transform: "none",
  boxShadow: "none",
  opacity: "1",
};
const noneHoveredProjectImagesStyle = {
  zIndex: "1",
  boxShadow: "none",
};
const projectImagesContainer = {
  margin: "0 auto",
  marginBottom: "210px",
  height: "1700px",
  width: "810px",
  overFlow: "visible",
  padding: "50px 50px",
};
const projectImagesLayout = {
  position: "absolute",
  backgroundColor: BLACK_SOLID,
  opacity: "0.5",
  height: "302vh",
  width: "100vw",
  zIndex: "2",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};
const exploreProjectsStyles = {
  projectImagesLayout,
  projectImagesContainer,
  noneHoveredProjectImagesStyle,
  onMouseLeaveStyle,
  onHoverClass,
  projectImagesStyles,
};
export default exploreProjectsStyles;
