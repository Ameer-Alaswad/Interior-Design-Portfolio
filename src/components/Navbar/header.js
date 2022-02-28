import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicMenu from "./dropDownMenu";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  navbarButtonsMargin: {
    marginLeft: "25px",
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              style={{
                width: "100px",
                height: "90px",
                marginTop: "7px",
              }}
              src="https://cdn.discordapp.com/attachments/301094964086177792/941783904879276073/LOGO.png"
              alt=""
            />
          </Typography>
          <Typography>
            <Button color="inherit">HOME</Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              <BasicMenu />
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              ABOUT US
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              CONTRACT
            </Button>
            <Button className={classes.navbarButtonsMargin} color="inherit">
              SERVICES
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
