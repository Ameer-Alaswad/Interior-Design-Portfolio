import React from "react";
import Carousel from "react-material-ui-carousel";
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
    [theme.breakpoints.down("lg")]: {},
  },

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
      height: "50%",
      width: "100%",
    },
  },
});

export default function PhotosGallery(props) {
  return (
    <Carousel>
      {projectSHomePictures.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      <img
        src={props.item.img}
        alt="imgs-in-carousel"
        className={classes.imagesInCarousel}
      />
    </div>
  );
}
