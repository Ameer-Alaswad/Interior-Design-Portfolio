import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./DropDownMenu";
import { makeStyles } from "@material-ui/core/styles";
import { logo } from "../../utils/assets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const useStyles = makeStyles({
  bar: {
    backgroundColor: "#261f18",
    height: "100px",
  },
  logoStyling: {
    width: "100px",
    height: "90px",
    marginTop: "7px",
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#261f18",
    },
  },
  custom: {
    navbarButtonsMargin: {
      marginLeft: "25px",
    },
  },
});
export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <img
                className={classes.logoStyling}
                src={logo}
                alt="logo-on-the-navbar"
              />
            </Typography>
            <Typography>
              <Button color="inherit">HOME</Button>
              <Button
                className={theme.custom.navbarButtonsMargin}
                color="inherit"
              >
                <BasicMenu />
              </Button>
              <Button
                className={theme.custom.navbarButtonsMargin}
                color="inherit"
              >
                EXPLORE
              </Button>
              <Button
                className={theme.custom.navbarButtonsMargin}
                color="inherit"
              >
                PROJECTS
              </Button>
              <Button
                className={theme.custom.navbarButtonsMargin}
                color="inherit"
              >
                CONTRACT
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
