import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { WHITE_SOLID } from "../../default-colors/colors";
const projects = require("../../projects-assets/projectText.json")[0].headerText
  .projects;
const profile = require("../../projects-assets/projectText.json")[0]
  .dropDownMenuText.profile;
const myAccount = require("../../projects-assets/projectText.json")[0]
  .dropDownMenuText.myAccount;
const logout = require("../../projects-assets/projectText.json")[0]
  .dropDownMenuText.logout;
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
      <Button
        style={{
          color: { WHITE_SOLID },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {projects}
      </Button>
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
