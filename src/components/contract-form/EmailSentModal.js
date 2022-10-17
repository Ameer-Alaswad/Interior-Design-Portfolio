import * as React from "react";
// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const closeButtonStyles = {
  margin: "0 auto",
  marginTop: "20px",
  backgroundColor: "#261F18",
  borderRadius: "0",
  fontSize: "12px",
  letterSpacing: "3px",
  padding: "13px",
  width: "185px",
  color: "white",
};
const containerStyles = { display: "flex", flexDirection: "column" };
export default function BasicModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={containerStyles} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your request has been received, will get back to you soon!
          </Typography>
          <Button style={closeButtonStyles} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
