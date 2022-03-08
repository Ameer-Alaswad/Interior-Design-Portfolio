import * as React from "react";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      style={{ width: "100%" }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <img
        alt="img-in-footer"
        src="/carousel/pic1.jpg"
        style={{
          height: "100px",
          //   width: "99%",
          //   padding: "5px 5px",
          objectFit: "cover",
          border: "solid 7px white",
        }}
      />
      <Box style={{ height: "1000px" }}></Box>
    </Box>
  );
}
