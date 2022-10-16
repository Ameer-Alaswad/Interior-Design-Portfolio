import {
  ZEUS,
  WHITE_SOLID,
  FLINT,
  BLACK_SOLID,
} from "../../default-colors/colors";
import * as React from "react";
import Box from "@mui/material/Box";
import { logo } from "../../utils/assets";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import text from "../../projects-assets/projectText.json";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const { name, jobTitle } = text.footerText.underLogoText;
const { instagram, linkedIn, facebook, fiver } = text.footerText.socialLinks;
const { forMoreInformation, emailLink } = text.footerText.contactingEmail;
const useStyles = makeStyles(() => ({
  contactingByEmail: {
    fontFamily: "'Century Gothic', sans-serif",
    letterSpacing: "5px",
    fontSize: "18px",
    backgroundColor: "#676767",

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
      width: "100%",
      objectFit: "cover",
      borderColor: WHITE_SOLID,
      borderBottom: "none",
    },
    footerLogoAndParagraphsContainer: {
      height: "650px",
      backgroundColor: FLINT,
      width: "100%",
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
      color: BLACK_SOLID,
      backgroundColor: "#676767",
    },
    emailLinkInSectionTwo: {
      color: ZEUS,
      textDecorationColor: ZEUS,
      backgroundColor: "#676767",
    },
    accountsLinksContainer: {
      letterSpacing: "5px",
      fontWeight: "bold",
      fontFamily: "'Century Gothic', sans-serif",
      marginBottom: "40px",
      marginRight: "20px",
      backgroundColor: "#676767",
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
          src="/icons/pic1.jpg"
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
                {name}
              </Typography>
              <Typography gutterBottom style={theme.custom.paragraphsUnderLogo}>
                {jobTitle}
              </Typography>
            </Box>

            <p className={classes.contactingByEmail}>
              {forMoreInformation}
              {matches ? <br /> : false}
              <Link style={theme.custom.emailLinkInSectionTwo}>
                <em>{emailLink}</em>
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
                {instagram}
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.linkedin.com/in/ghaith-konbaz-8ab714193/"
              >
                {linkedIn}
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.facebook.com/ghaithkonbaz/"
              >
                {facebook}
              </Link>
              <Link
                className={classes.accountsLinks}
                style={theme.custom.accountsLinks}
                href="https://www.fiverr.com/ghaith37"
              >
                {fiver}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
