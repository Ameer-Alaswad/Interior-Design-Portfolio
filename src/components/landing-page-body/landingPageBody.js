import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles, theme } from "./landingPageStyles";

export default function LandingPageBody() {
  const theTheme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theTheme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={theme.custom.LandingPageBodyContainer}
        sx={theme.custom.LandingPageBodyContainer.sx}
      >
        <Typography className={classes.sectionOneStyling}>
          Destination Eichler creates inviting and functional modern interiors
          {!matches ? <br /> : false}
          SAN FRANCISCO BAY AREA & BEYOND
          <Stack spacing={2} direction="row">
            <Button style={theme.custom.viewProjectsButton} variant="contained">
              VIEW PROJECTS
            </Button>
          </Stack>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography className={classes.sectionTwo}>
            LET'S WORK TOGETHER TO DESIGHN A JOYFUL..COLLESIVE, INSPIRING SPACE
            {!matches ? <br /> : false}_ ONE THATS A REFLECTION OF YOUR UNIQUE
            PERSONALITY, INTERSTS
            {!matches ? <br /> : false}
            AND DAY-TO-DAY NEEDS.
          </Typography>

          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography style={theme.custom.sectionThreeStyling}>
            GHAITH KONBAZ DESIGHN IS A FULL-SERVICE INTERIOR DESIGHN FIRM BASED
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            IN GERMANY, BERLIN. WE SERVICE RESIDENTAL AND COMMERCIAL PROJECTS
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            NATIONWIDE- WITH CREATIVE AND CUSTOM SOLUTIONS.
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
