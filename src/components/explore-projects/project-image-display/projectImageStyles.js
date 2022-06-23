import { WHITE_SOLID } from "../../../default-colors/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 490,
  bgcolor: "background.paper",
  p: 4,
  padding: "0",
  outline: "none",
};
const buttonsContainerStyle = {
  height: "34px",
  display: `flex`,
  justifyContent: "space-between",
  width: "100%",
  alignItems: "flex-end",
  backgroundColor: WHITE_SOLID,
  marginTop: "-4px",
};
const checkProjectButtonStyle = {
  fontWeight: "bold",
  marginBottom: "3px",
  color: "black",
  paddingTop: "15px",
  lineHeight: "5px",
};
const closeProjectButtonStyle = {
  fontWeight: "bold",
  color: "black",
  border: "none",
  backgroundColor: WHITE_SOLID,
  cursor: "pointer",
};
const imageStyle = {
  width: "800px",
  height: "492px",
};
const projectImageStyles = {
  style,
  buttonsContainerStyle,
  checkProjectButtonStyle,
  closeProjectButtonStyle,
  imageStyle,
};
export default projectImageStyles;
