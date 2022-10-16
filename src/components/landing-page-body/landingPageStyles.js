import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { CONCRETE, ZEUS } from "../../default-colors/colors";

export const useStyles = makeStyles(() => ({
  sectionTwo: {
    fontSize: "30px",
    marginTop: "15px",
    fontFamily: "'Century Gothic', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  sectionOneStyling: {
    fontSize: "32px",
    fontFamily: "'Century Gothic', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));
export const theme = createTheme({
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
    sectionOneStyling: {
      fontSize: "20px",
      fontFamily: "'Century Gothic', sans-serif",
      margin: "0 auto",
      maxWidth: "1000px",
    },
    sectionTwoStyling: {
      fontSize: "20px",
      fontFamily: "'Century Gothic', sans-serif",
      backgroundColor: CONCRETE,
    },

    sectionThreeStyling: {
      fontSize: "15px",
      marginTop: "25px",
      fontFamily: "'Century Gothic', sans-serif",
      backgroundColor: CONCRETE,
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
      fontWeight: "bald",
    },
  },
});
