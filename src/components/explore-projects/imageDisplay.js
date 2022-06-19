import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 520,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const buttonsContainerStyle = {
  height: "70px",
  display: `flex`,
  justifyContent: "flex-end",
  width: "100%",
  alignItems: "flex-end",
};
const checkProjectButtonStyle = { height: "40px", marginLeft: "10px" };
const imageStyle = { width: "800px", height: "450px" };

export default function ImageDisplay({ visible, setVisible, image }) {
  console.log(image);
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img style={imageStyle} alt="DisplayImage" src={image} />
          <Box style={buttonsContainerStyle}>
            <Button
              style={{ height: "40px" }}
              variant="outlined"
              color="error"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button style={checkProjectButtonStyle} variant="contained">
              Check Project!
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
