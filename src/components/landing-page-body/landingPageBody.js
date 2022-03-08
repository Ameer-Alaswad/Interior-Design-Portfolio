import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CONCRETE, ZEUS } from "../../default-colors/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CENTURY_GOTHIC } from "../fonts/fonts";

const theme = createTheme({
  custom: {
    LandingPageBodyContainer: {
      paddingTop: "96px",
      backgroundColor: CONCRETE,
      width: "100%",

      sx: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      },
    },
    sectionsWrapper: {
      borderBottom: "solid 0.5px",
      borderWidth: "50%",
      fontSize: "32px",
      width: "62%",
      margin: "0 auto",
      opacity: "0.2",
      marginTop: "65px",
    },
    sectionOneStyling: {
      fontSize: "32px",
      fontFamily: CENTURY_GOTHIC,
    },
    secondTypographyInSectionOne: {
      marginTop: "25px",
      fontFamily: CENTURY_GOTHIC,
      fontSize: "23px",
    },
    viewProjectsButton: {
      margin: "0 auto",
      marginTop: "20px",
      backgroundColor: ZEUS,
      borderRadius: "0",
      fontSize: "12px",
      letterSpacing: "3px",
      padding: "13px",
      width: "185px",
    },
    sectionTwoStyling: {
      fontSize: "30px",
      marginTop: "15px",
      fontFamily: CENTURY_GOTHIC,
    },
    sectionThreeStyling: {
      fontSize: "15px",
      marginTop: "25px",
      fontFamily: CENTURY_GOTHIC,
    },
    weLoveToHearAboutYourProjectButton: {
      border: "solid 2px",
      margin: "0 auto",
      marginTop: "40px",
      borderRadius: "0",
      fontSize: "12px",
      letterSpacing: "3px",
      padding: "13px",
      width: "420px",
      color: "black",
      letterSpacing: "1.5px",
      padding: "15px 15px",
      fontWeight: "bald",
    },
  },
});

export default function LandingPageBody() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={theme.custom.LandingPageBodyContainer}
        sx={theme.custom.LandingPageBodyContainer.sx}
      >
        <Typography style={theme.custom.sectionOneStyling}>
          Destination Eichler creates inviting and functional modern interiors
          <br />
          SAN FRANCISCO BAY AREA & BEYOND
          <Typography
            style={theme.custom.secondTypographyInSectionOne}
          ></Typography>
          <Stack spacing={2} direction="row">
            <Button style={theme.custom.viewProjectsButton} variant="contained">
              VIEW PROJECTS
            </Button>
          </Stack>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography style={theme.custom.sectionTwoStyling}>
            LET'S WORK TOGETHER TO DESIGHN A JOYFUL..COLLESIVE, INSPIRING SPACE
            <br />_ ONE THAT'S A REFLECTION OF YOUR UNIQUE PERSONALITY,
            INTERESTS
            <br />
            AND DAY-TO-DAY NEEDS.
          </Typography>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography style={theme.custom.sectionThreeStyling}>
            GHAITH KONBAZ DESIGHN IS A FULL-SERVICE INTERIOR DESIGHN FIRM BASED
            IN GERMANY, BERLIN.
            <br />
            <br />
            WE SERVICE RESIDENTAL AND COMMERCIAL PROJECTS NATIONWIDE-
            <br />
            <br />
            WITH CREATIVE AND CUSTOM SOLUTIONS
          </Typography>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <div style={{ height: "200px" }}>
          <Stack spacing={2} direction="row">
            <Button
              style={theme.custom.weLoveToHearAboutYourProjectButton}
              variant="outlined"
            >
              WE'D LOVE TO HEAR ABOUT YOUR PROJECT
            </Button>
          </Stack>
        </div>
      </Box>
    </ThemeProvider>
  );
}
