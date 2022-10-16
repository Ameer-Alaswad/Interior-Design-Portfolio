import * as React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { projectSHomePictures } from "../../projects-assets/projects-images";
import { CONCRETE, WHITE_SOLID, ZEUS } from "../../default-colors/colors";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  dot: {
    backgroundColor: WHITE_SOLID,
  },
  dotActive: {
    backgroundColor: CONCRETE,
  },
});

function PhotosGallery() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projectSHomePictures.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {projectSHomePictures.map((step, index) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  height: 550,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.img}
                alt={step.name}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        style={{
          backgroundColor: ZEUS,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        classes={{
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
        nextButton={
          <Button
            style={{
              color: CONCRETE,
            }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{
              color: CONCRETE,
            }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default PhotosGallery;
