import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { projectSHomePictures } from "../../projects-assets/projects-images";
import { makeStyles } from "@mui/styles";
import { CLOUDY } from "../../default-colors/colors";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({});
const useStyles = makeStyles({
  carouselContainer: {
    width: "100%",
    backgroundColor: CLOUDY,
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      // height: "500px",
    },
  },
  // carousel: {
  //   height: "100%",
  //   backgroundColor: CLOUDY,
  // },
  // containerOfImageInCarousel: {
  //   backgroundColor: CLOUDY,
  //   height: "100%",
  //   width: "1100px",
  //   margin: "0 auto",
  //   boxShadow: "none",
  //   sx: {
  //     display: "flex",
  //     justifyContent: "center",
  //   },
  // },
  imagesInCarousel: {
    height: "100%",
    width: "600px%",
    [theme.breakpoints.down("xl")]: {
      height: "85%",
      width: "65%",
    },
    [theme.breakpoints.down("lg")]: {
      height: "85%",
      width: "73%",
    },
    [theme.breakpoints.down("md")]: {
      height: "75%",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40%",
      width: "100%",
    },
  },
});

export default function PhotosGallery(props) {
  const classes = useStyles();
  return (
    // <div style={{ height: "600px" }}>
    <Carousel>
      {projectSHomePictures.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
    // </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      {/* <Paper
        className={classes.containerOfImageInCarousel}
        sx={classes.containerOfImageInCarousel.sx}
      > */}
      <img
        src={props.item.img}
        alt="imgs-in-carousel"
        className={classes.imagesInCarousel}
      />
      {/* </Paper> */}
    </div>
  );
}
