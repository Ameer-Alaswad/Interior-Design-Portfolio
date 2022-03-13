import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles, theme } from "./landingPageStyles";
const landingPageBodyText =
  require("../../projects-assets/projectText.json")[0];
export default function LandingPageBody() {
  const sectionOneText = landingPageBodyText.landingPageText.sectionOneText;
  const sectionTwoText = landingPageBodyText.landingPageText.sectionTwoText;
  const sectionThreeText = landingPageBodyText.landingPageText.sectionThreeText;
  const weLoveToHearAboutYourProjectButtonText =
    landingPageBodyText.landingPageText.weLoveToHearAboutYourProjectButtonText;
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
          {sectionOneText.line1}
          {!matches ? <br /> : false}
          {sectionOneText.line2}
          <Stack spacing={2} direction="row">
            <Button
              data-test-id="view-projects-button"
              style={theme.custom.viewProjectsButton}
              variant="contained"
            >
              {sectionOneText.buttonText}
            </Button>
          </Stack>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography className={classes.sectionTwo}>
            {sectionTwoText.line1}
            {!matches ? <br /> : false}
            {sectionTwoText.line2}
            {!matches ? <br /> : false}
            {sectionTwoText.line3}
          </Typography>

          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography style={{ marginTop: "40px" }}>
          <Typography style={theme.custom.sectionThreeStyling}>
            {sectionThreeText.line1}
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            {sectionThreeText.line2}
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            {sectionThreeText.line3}
          </Typography>

          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <div style={{ height: "200px" }}>
          <Stack spacing={2} direction="row">
            <Button
              data-test-id="contact-us-button"
              style={theme.custom.weLoveToHearAboutYourProjectButton}
              variant="outlined"
            >
              {weLoveToHearAboutYourProjectButtonText}
            </Button>
          </Stack>
        </div>
      </Box>
    </ThemeProvider>
  );
}
