import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./DropDownMenu";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "../../utils/assets";
import { createTheme } from "@mui/material/styles";
const useStyles = makeStyles({
  navbarButtonsMargin: {
    marginLeft: "25px",
  },
});
const theme = createTheme({
  typography: {
    variant: "h6",
    component: "div",
  },
});
export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "#261f18",
          height: "100px",
        }}
        position="static"
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <img
              style={{
                width: "100px",
                height: "90px",
                marginTop: "7px",
              }}
              src={Logo}
              alt=""
            />
          </Typography>
          <Typography>
            <Button color="inherit">HOME</Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              <BasicMenu />
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              EXPLORE
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              PROJECTS
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              CONTRACT
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
