import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles, theme } from "./landingPageStyles";
import { useNavigate } from "react-router-dom";

import text from "../../projects-assets/projectText.json";
const {
  sectionOneText,
  sectionTwoText,
  sectionThreeText,
  weLoveToHearAboutYourProjectButtonText,
} = text.landingPageText;

export default function LandingPageBody() {
  const navigate = useNavigate();
  const theTheme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theTheme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={theme.custom.LandingPageBodyContainer}
        sx={theme.custom.LandingPageBodyContainer.sx}
      >
        <Typography
          style={theme.custom.sectionOneStyling}
          className={classes.sectionOneStyling}
        >
          {sectionOneText.line1SectionOne}
          {!matches ? <br /> : false}
          {sectionOneText.line2SectionOne}
          <Stack component={"span"} spacing={2} direction="row">
            <Button
              onClick={() => navigate("/projects")}
              data-test-id="view-projects-button"
              style={theme.custom.viewProjectsButton}
              variant="contained"
            >
              {sectionOneText.buttonTextSectionOne}
            </Button>
          </Stack>

          {/* <span style={theme.custom.sectionsWrapper}></span> */}
        </Typography>
        <Typography component={"span"} style={{ marginTop: "40px" }}>
          <Typography
            style={theme.custom.sectionTwoStyling}
            className={classes.sectionTwo}
          >
            {sectionTwoText.line1SectionTwo}
            {!matches ? <br /> : false}
            {sectionTwoText.line2SectionTwo}
            {!matches ? <br /> : false}
            {sectionTwoText.line3SectionTwo}
          </Typography>

          <span style={theme.custom.sectionsWrapper}></span>
        </Typography>
        <Typography component={"span"} style={{ marginTop: "40px" }}>
          <Typography style={theme.custom.sectionThreeStyling}>
            {sectionThreeText.line1SectionThree}
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            {sectionThreeText.line2SectionThree}
            {!matches ? <br /> : false}
            {!matches ? <br /> : false}
            {sectionThreeText.line3SectionThree}
          </Typography>

          <span style={theme.custom.sectionsWrapper}></span>
        </Typography>
        <span style={{ height: "200px" }}>
          <Stack component={"span"} spacing={2} direction="row">
            <Button
              onClick={() => navigate("/contract")}
              data-test-id="contact-us-button"
              style={theme.custom.weLoveToHearAboutYourProjectButton}
              variant="outlined"
            >
              {weLoveToHearAboutYourProjectButtonText}
            </Button>
          </Stack>
        </span>
      </Box>
    </ThemeProvider>
  );
}
