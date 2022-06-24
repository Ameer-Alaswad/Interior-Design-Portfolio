import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import exploreProjectsUtils from "../exploreProjectsUtils";
import projectImageStyles from "./projectImageStyles";

export default function ProjectImageDisplay({ visible, setVisible, image }) {
  const matches = useMediaQuery("(max-width:860px)");
  const matches2 = useMediaQuery("(max-width:450px)");
  const projectImageContainerStyle = { ...projectImageStyles.style };
  const projectImageStyle = { ...projectImageStyles.imageStyle };
  const buttonsContainerStyles = {
    ...projectImageStyles.buttonsContainerStyle,
  };
  const projectCloseButtonStyles = {
    ...projectImageStyles.closeProjectButtonStyle,
  };
  const checkProjectButtonStyles = {
    ...projectImageStyles.checkProjectButtonStyle,
  };
  exploreProjectsUtils.handleImageDisplayPopupResponsiveness(
    checkProjectButtonStyles,
    image,
    projectImageContainerStyle,
    projectImageStyle,
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
          <img style={projectImageStyle} alt="DisplayImage" src={image.src} />
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
            <Button style={checkProjectButtonStyles}>View Project</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
