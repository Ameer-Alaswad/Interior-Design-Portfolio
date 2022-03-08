import * as React from "react";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      style={{ width: "100%" }}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        alt="img-in-footer"
        src="/carousel/pic1.jpg"
        style={{
          height: "100px",
          width: "99%",
          objectFit: "cover",
          border: "solid 7px white",
          borderBottom: "none",
        }}
      />
      <Box
        style={{
          height: "500px",
          backgroundColor: "gray",
          width: "99%",
          border: "solid 7px white",
          borderTop: "none",
        }}
      ></Box>
    </Box>
  );
}
