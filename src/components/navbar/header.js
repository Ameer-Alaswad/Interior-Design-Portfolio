import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./DropDownMenu";
import { logo } from "../../utils/assets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ZEUS, WHITE_SOLID } from "../../default-colors/colors";
import { makeStyles } from "@mui/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const useStyles = makeStyles(() => ({
  navbarButtonsMargin: {
    marginRight: "10px",
  },
}));

const theme = createTheme({
  custom: {
    header: {
      backgroundColor: ZEUS,
      position: "static",
    },
    logoStyling: {
      width: "100px",
      height: "90px",
      marginTop: "7px",
    },
    menuIconStyling: {
      color: { WHITE_SOLID },
      fontSize: "2.5rem",
    },
  },
});
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" style={theme.custom.header}>
          <Toolbar disableGutters>
            <Typography style={{ marginLeft: "15px" }} sx={{ flexGrow: 1 }}>
              <img
                style={theme.custom.logoStyling}
                src={logo}
                alt="logo-on-the-navbar"
              />
            </Typography>
            <Hidden xsDown>
              <Typography style={{ marginRight: "10px" }}>
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
            </Hidden>
            <Hidden smUp>
              <IconButton>
                <MenuIcon
                  style={theme.custom.menuIconStyling}
                  onClick={() => setOpen(true)}
                />
              </IconButton>
            </Hidden>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
            >
              <div>
                <IconButton>
                  <ChevronRightIcon onClick={() => setOpen(false)} />
                </IconButton>
              </div>
              <Divider />

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
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
