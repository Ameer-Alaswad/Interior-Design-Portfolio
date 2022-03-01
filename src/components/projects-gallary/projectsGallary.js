import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { projectSHomePictures } from "../../projects-pictures/pictures";

export default function PhotosGallery(props) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#a69d98" }}>
      <Carousel style={{ height: "1400px", backgroundColor: "grey" }}>
        {projectSHomePictures.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        backgroundColor: "#a69d98",
        height: "590px",
        width: "900px",
        margin: "0 auto",
      }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <img
        src="/public/carousel/pic1.jpg"
        alt=""
        style={{ height: "620px", width: "100%" }}
      ></img>
    </Paper>
  );
}
