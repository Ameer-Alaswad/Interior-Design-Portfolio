import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./DropDownMenu";
import { logo } from "../../utils/assets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ZEUS } from "../../default-colors/colors";

const theme = createTheme({
  custom: {
    navbarButtonsMargin: {
      marginLeft: "25px",
    },
    header: {
      backgroundColor: ZEUS,
      position: "static",
    },
    logoStyling: {
      width: "100px",
      height: "90px",
      marginTop: "7px",
    },
  },
});
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar style={theme.custom.header}>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <img
                style={theme.custom.logoStyling}
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
