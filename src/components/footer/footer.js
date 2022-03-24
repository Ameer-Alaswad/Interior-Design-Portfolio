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
const { name, jobTitle } = text.footerText.underLogoText;
const { instagram, linkedIn, facebook, fiver } = text.footerText.socialLinks;
const { forMoreInformation, emailLink } = text.footerText.contactingEmail;

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
    },
    accountsLinks: {
      color: BLACK_SOLID,
      textDecoration: "none",
      marginLeft: "30px",
    },
  },
});

export default function Footer() {
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
              <Typography
                style={theme.custom.paragraphsUnderLogo}
                variant="h5"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography
                style={theme.custom.paragraphsUnderLogo}
                variant="h6"
                gutterBottom
              >
                {jobTitle}
              </Typography>
            </Box>

            <Typography
              style={theme.custom.paragraphsUnderLogo}
              variant="h6"
              gutterBottom
            >
              {forMoreInformation}{" "}
              <Link style={theme.custom.emailLinkInSectionTwo}>
                <em>{emailLink}</em>
              </Link>{" "}
              .
            </Typography>
            <Typography style={theme.custom.accountsLinksContainer}>
              <Link
                style={theme.custom.accountsLinks}
                href="https://www.instagram.com/ghaith37/"
              >
                {instagram}
              </Link>
              <Link
                style={theme.custom.accountsLinks}
                href="https://www.linkedin.com/in/ghaith-konbaz-8ab714193/"
              >
                {linkedIn}
              </Link>
              <Link
                style={theme.custom.accountsLinks}
                href="https://www.facebook.com/ghaithkonbaz/"
              >
                {facebook}
              </Link>
              <Link
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
