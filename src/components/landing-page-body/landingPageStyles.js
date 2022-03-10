import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CONCRETE, ZEUS } from "../../default-colors/colors";

export const useStyles = makeStyles(() => ({
  sectionTwo: {
    [theme.breakpoints.down("sm")]: {
      color: "blue",
    },
  },
}));
export let theme = createTheme();
theme = createTheme({
  custom: {
    LandingPageBodyContainer: {
      paddingTop: "96px",
      backgroundColor: CONCRETE,
      width: "100%",

      sx: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      },
    },
    sectionsWrapper: {
      borderBottom: "solid 0.5px",
      borderWidth: "50%",
      fontSize: "32px",
      width: "62%",
      margin: "0 auto",
      opacity: "0.2",
      marginTop: "65px",
    },
    sectionOneStyling: {
      fontSize: "32px",
      fontFamily: "'Century Gothic', sans-serif",
    },
    secondTypographyInSectionOne: {
      marginTop: "25px",
      fontFamily: "'Century Gothic', sans-serif",
      fontSize: "23px",
    },
    viewProjectsButton: {
      margin: "0 auto",
      marginTop: "20px",
      backgroundColor: ZEUS,
      borderRadius: "0",
      fontSize: "12px",
      letterSpacing: "3px",
      padding: "13px",
      width: "185px",
    },
    sectionTwoStyling: {
      fontSize: "30px",
      marginTop: "15px",
      fontFamily: "'Century Gothic', sans-serif",
      [theme.breakpoints.down("sm")]: {
        color: "blue",
      },
    },
    sectionThreeStyling: {
      fontSize: "15px",
      marginTop: "25px",
      fontFamily: "'Century Gothic', sans-serif",
    },
    weLoveToHearAboutYourProjectButton: {
      border: "solid 2px",
      margin: "0 auto",
      marginTop: "40px",
      borderRadius: "0",
      fontSize: "12px",
      letterSpacing: "3px",
      padding: "13px",
      width: "420px",
      color: "black",
      letterSpacing: "1.5px",
      padding: "15px 15px",
      fontWeight: "bald",
    },
  },
});
