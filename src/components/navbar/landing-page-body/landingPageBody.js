import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CONCRETE } from "../../../default-colors/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  custom: {
    LandingPageBodyContainer: {
      marginTop: "96px",
      backgroundColor: CONCRETE,
      width: "100%",

      sx: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      },
    },
    sectionsWrapper: {
      borderBottom: "solid 0.5px #1f1f1f",
      borderWidth: "50%",
      fontSize: "32px",
      width: "55%",
      margin: "0 auto",
      opacity: "0.2",
    },
  },
});

export default function LandingPageBody() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={theme.custom.LandingPageBodyContainer}
        sx={theme.custom.LandingPageBodyContainer.sx}
      >
        <Typography
          style={{
            fontSize: "32px",
          }}
          variant="h2"
          component="div"
          gutterBottom
        >
          Destination Eichler creates inviting and functional modern interiors
          <Typography variant="h6" component="div" gutterBottom>
            SAN FRANCISCO BAY AREA & BEYOND
          </Typography>
          <Stack spacing={2} direction="row">
            <Button style={{ margin: "0 auto" }} variant="contained">
              Contained
            </Button>
          </Stack>
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h2. Heading
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h3. Heading
          <div style={theme.custom.sectionsWrapper}></div>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
