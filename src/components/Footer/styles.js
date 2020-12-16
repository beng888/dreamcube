import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    margin: "auto",
    width: "fit-content",
    maxWidth: "1450px",
    textAlign: "center",
    "& div": {
      width: "100%",
      height: "100%",
    },
    "& img": { width: "100%", maxHeight: "400px" },
  },
  footerDivider: {
    marginBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0",
    },
  },
}));
