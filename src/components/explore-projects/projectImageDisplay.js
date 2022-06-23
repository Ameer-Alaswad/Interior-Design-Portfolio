import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { handleImageDisplayPoupupResponsiveness } from "./ExploreProjectUtils";
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
  backgroundColor: "white",
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
  backgroundColor: "white",
  cursor: "pointer",
};
const imageStyle = {
  width: "800px",
  height: "492px",
};

export default function ProjectImageDisplay({ visible, setVisible, image }) {
  const matches = useMediaQuery("(max-width:860px)");
  const matches2 = useMediaQuery("(max-width:450px)");
  const projectImageContainerStyle = { ...style };
  const projectImageStyles = { ...imageStyle };
  const buttonsContainerStyles = { ...buttonsContainerStyle };
  const projectCloseButtonStyles = { ...closeProjectButtonStyle };
  handleImageDisplayPoupupResponsiveness(
    image,
    projectImageContainerStyle,
    projectImageStyles,
    projectCloseButtonStyles,
    matches2,
    matches
  );

  const [open, setOpen] = React.useState(visible);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVisible(false);
  };

  return (
    <div style={{ position: "absolute" }}>
      <Button onClick={handleOpen}></Button>
      <Modal
        style={{ border: "none" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={projectImageContainerStyle}>
          <img style={projectImageStyles} alt="DisplayImage" src={image.src} />
          <Box style={buttonsContainerStyles}>
            <button style={projectCloseButtonStyles} onClick={handleClose}>
              <img
                style={{
                  width: "25px",
                }}
                alt="close-icon"
                src="/icons/close.png"
              />
            </button>
            <Button style={checkProjectButtonStyle}>Check Project!</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
