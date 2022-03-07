import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { projectSHomePictures } from "../../projects-assets/projects-images";
import { makeStyles } from "@mui/styles";
import { CLOUDY } from "../../default-colors/colors";
const useStyles = makeStyles({
  carouselContainer: {
    width: "100vw",
    backgroundColor: CLOUDY,
    height: "600px",
  },
  carousel: {
    height: "100%",
    backgroundColor: CLOUDY,
  },
  containerOfImageInCarousel: {
    backgroundColor: CLOUDY,
    height: "590px",
    width: "900px",
    margin: "0 auto",
    boxShadow: "none",
    sx: {
      display: "flex",
      justifyContent: "center",
    },
  },
  imagesInCarousel: {
    height: "600px",
    width: "100%",
  },
});

export default function PhotosGallery(props) {
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      <Carousel style={classes.carousel}>
        {projectSHomePictures.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.containerOfImageInCarousel}
      sx={classes.containerOfImageInCarousel.sx}
    >
      <img
        src={props.item.img}
        alt="imgs-in-carousel"
        className={classes.imagesInCarousel}
      />
    </Paper>
  );
}
