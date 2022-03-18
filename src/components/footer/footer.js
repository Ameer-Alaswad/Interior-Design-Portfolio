import * as React from "react";
import Box from "@mui/material/Box";
import { logo } from "../../utils/assets";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ZEUS,
  WHITE_SOLID,
  FLINT,
  BLACK_SOLID,
} from "../../default-colors/colors";

const useStyles = makeStyles(() => ({
  contactingByEmail: {
    fontFamily: "'Century Gothic', sans-serif",
    letterSpacing: "5px",
    fontSize: "18px",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "19px",
      letterSpacing: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  accountsLinksContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  accountsLinks: {
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
  },
}));

const theme = createTheme({
  custom: {
    footerContainer: {
      sx: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    imageInFooter: {
      height: "150px",
      width: "99%",
      objectFit: "cover",
      border: "solid 7px",
      borderColor: WHITE_SOLID,
      borderBottom: "none",
    },
    footerLogoAndParagraphsContainer: {
      height: "650px",
      backgroundColor: FLINT,
      width: "99%",
      border: "solid 7px",
      borderColor: WHITE_SOLID,

      borderTop: "none",
    },
    sectionOneInFooterLogoAndParagraphsContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    sectionTwoInFooterLogoAndParagraphsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "60px",
    },
    logoInFooter: {
      width: "150px",
      height: "150px",
      marginBottom: "10px",
    },
    paragraphsUnderLogo: {
      fontFamily: "'Century Gothic', sans-serif",
      letterSpacing: "5px",
      fontWeight: "bold",
    },
    emailLinkInSectionTwo: {
      color: ZEUS,
      textDecorationColor: ZEUS,
    },
    accountsLinksContainer: {
      letterSpacing: "5px",
      fontWeight: "bold",
      fontFamily: "'Century Gothic', sans-serif",
      marginBottom: "40px",
      marginRight: "20px",
    },
    accountsLinks: {
      color: BLACK_SOLID,
      textDecoration: "none",
      marginLeft: "30px",
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  const theTheme = useTheme();
  const matches = useMediaQuery(theTheme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ width: "100%" }} sx={theme.custom.footerContainer.sx}>
        <img
          alt="img-in-footer"
          src="/carousel/pic1.jpg"
          style={theme.custom.imageInFooter}
        />
        <Box style={theme.custom.footerLogoAndParagraphsContainer}>
          <Box
            style={theme.custom.sectionOneInFooterLogoAndParagraphsContainer}
          >
            <Box
              style={theme.custom.sectionTwoInFooterLogoAndParagraphsContainer}
            >
              <img
                src={logo}
                alt="logo-in-footer"
                style={theme.custom.logoInFooter}
              />
              <Typography gutterBottom style={theme.custom.paragraphsUnderLogo}>
                GHAITH KONBAZ
              </Typography>
              <Typography gutterBottom style={theme.custom.paragraphsUnderLogo}>
                INTERIOR DESIGN
              </Typography>
            </Box>

            <p className={classes.contactingByEmail}>
              FOR MORE INFORMATION, EMAIL:
              {matches ? <br /> : false}
              <Link style={theme.custom.emailLinkInSectionTwo}>
                <em>ghaith.konbaz@gmail.com</em>
              </Link>
              .
            </p>
            <Typography
              className={classes.accountsLinksContainer}
              style={theme.custom.accountsLinksContainer}
            >
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.instagram.com/ghaith37/"
              >
                INSTAGRAM
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.linkedin.com/in/ghaith-konbaz-8ab714193/"
              >
                LINKEDIN
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.facebook.com/ghaithkonbaz/"
              >
                FACEBOOK
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.fiverr.com/ghaith37"
              >
                FIVERR
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
