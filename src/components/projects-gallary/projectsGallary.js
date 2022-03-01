import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, dividerClasses } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { items } from "../../projects-pictures/pictures";

const useStyles = makeStyles({
  carousel: {
    backgroundColor: "blue",
  },
});
export default function PhotosGallery(props) {
  const classes = useStyles();
  //   var pictures = items;

  return (
    <div style={{ width: "100vw", backgroundColor: "#a69d98" }}>
      <Carousel style={{ height: "1400px", backgroundColor: "grey" }}>
        {items.map((item, i) => {
          console.log("items", items);
          return <Item key={i} item={item} />;
        })}
      </Carousel>
    </div>
  );
}

function Item(props) {
  //   const classes = useStyles();

  return (
    <Paper
      style={{
        height: "590px",
        width: "900px",
        margin: "0 auto",
      }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <img
        src={props.item.img}
        alt=""
        style={{ height: "620px", width: "100%" }}
      />
    </Paper>
  );
}
