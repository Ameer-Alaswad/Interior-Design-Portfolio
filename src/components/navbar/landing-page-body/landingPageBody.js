import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  custom: {
    LandingPageBodyContainer: {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
      },
    },
  },
});

export default function LandingPageBody() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={theme.custom.LandingPageBodyContainer.sx}>
        <Typography
          style={{ border: "solid 2px black" }}
          variant="h4"
          component="div"
          gutterBottom
        >
          h1. Heading
        </Typography>
        <Typography
          style={{ border: "solid 2px black" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          h2. Heading
          <Stack spacing={2} direction="row">
            <Button style={{ margin: "0 auto" }} variant="contained">
              Contained
            </Button>
          </Stack>
        </Typography>
        <Typography
          style={{ border: "solid 2px black" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          h3. Heading
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
