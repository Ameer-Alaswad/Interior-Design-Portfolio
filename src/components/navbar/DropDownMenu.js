import * as React from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { CONCRETE } from "../../default-colors/colors";
import text from "../../projects-assets/projectText.json";

const { projects } = text.headerText;
const { profile, myAccount, logout } = text.dropDownMenuText;

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        style={{
          color: CONCRETE,
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {projects}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>{profile}</MenuItem>
        <MenuItem onClick={handleClose}>{myAccount}</MenuItem>
        <MenuItem onClick={handleClose}>{logout}</MenuItem>
      </Menu>
    </div>
  );
}
