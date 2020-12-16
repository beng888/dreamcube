import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: "4rem 2.5rem",
    maxWidth: "1500px",
    margin: "auto",
    overflow: "hidden",
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
  },
  details: {
    paddingLeft: "4rem",
    "& h6": { marginBottom: "2rem" },
    "& button": {
      overflow: "hidden",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      textAlign: "center",
      paddingLeft: "0",
    },
  },
  related: {
    display: "flex",
    flexDirection: "row",
    height: "fit-content",
    flexWrap: "nowrap",

    "& div": {
      margin: "0 auto",
      textAlign: "center",
      "& img": { width: "100%" },
    },
  },
  relatedItems: {
    minWidth: "200px",
  },
}));
