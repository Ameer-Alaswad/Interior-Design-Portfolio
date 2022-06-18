import { React, useState, useEffect } from "react";
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
import clsx from "clsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import text from "../../projects-assets/projectText.json";
const { home, explore, contract, contact } = text.headerText;

const useStyles = makeStyles(() => ({
  navbarButtonsMargin: {
    marginRight: "10px",
  },
  animatedItem: {
    animation: `$myEffect 2s 3 ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(0%)",
    },
    "15%": {
      transform: "translateX(30px)",
    },
    "60%": {
      transform: "translateX(-50px)",
    },
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
      color: WHITE_SOLID,
      fontSize: "2.5rem",
    },
    slideIconLeftStyle: {
      width: "50px",
      height: "50px",
      position: "absolute",
      right: "30px",
      top: "120px",
      zIndex: "100",
    },
  },
});

export default function Navbar() {
  const theTheme = useTheme();
  const [open, setOpen] = useState(false);
  const [slideLeftIconVisiable, setSlideLeftIconVisiable] = useState(true);
  const screenWidthIsLessThan600px = useMediaQuery(
    theTheme.breakpoints.down("sm")
  );
  const screenWidthIsGreaterThan600px = useMediaQuery(
    theTheme.breakpoints.up("sm")
  );
  function closeAndOpenSlideLeftIcon() {
    if (screenWidthIsGreaterThan600px) setSlideLeftIconVisiable(true);
    else if (screenWidthIsLessThan600px) {
      setTimeout(function () {
        return setSlideLeftIconVisiable(false);
      }, 6000);
    }
  }
  useEffect(() => {
    closeAndOpenSlideLeftIcon();
  });

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar style={theme.custom.header}>
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
                <Button color="inherit">{home}</Button>
                <Button className={classes.navbarButtonsMargin} color="inherit">
                  <BasicMenu className={classes.navbarButtonsMargin} />
                </Button>
                <Button className={classes.navbarButtonsMargin} color="inherit">
                  {explore}
                </Button>
                <Button className={classes.navbarButtonsMargin} color="inherit">
                  {contact}
                </Button>
                <Button className={classes.navbarButtonsMargin} color="inherit">
                  {contract}
                </Button>
              </Typography>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon style={theme.custom.menuIconStyling} />
              </IconButton>
            </Hidden>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
            >
              <div>
                <IconButton onClick={() => setOpen(false)}>
                  <ChevronRightIcon />
                </IconButton>
              </div>
              <Divider />

              <Button color="inherit">{home}</Button>
              <Button className={classes.navbarButtonsMargin} color="inherit">
                <BasicMenu />
              </Button>
              <Button className={classes.navbarButtonsMargin} color="inherit">
                {explore}
              </Button>
              <Button className={classes.navbarButtonsMargin} color="inherit">
                {contact}
              </Button>
              <Button className={classes.navbarButtonsMargin} color="inherit">
                {contract}
              </Button>
            </SwipeableDrawer>
            <Hidden smUp>
              {slideLeftIconVisiable && (
                <img
                  className={clsx(classes.animatedItem)}
                  style={theme.custom.slideIconLeftStyle}
                  src="/icons/flick-to-left.png"
                  alt="slide-left-sign"
                />
              )}
            </Hidden>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
