import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  accordion: {
    marginTop: "1rem",
    background: "#f5f5f5",

    [theme.breakpoints.up("md")]: { display: "none" },
  },
  info: {
    padding: "4rem 3rem",
    [theme.breakpoints.down("sm")]: {
      border: "0",
      padding: "4rem 1rem",
      maxWidth: "530px",
      margin: "auto",
    },
  },
  cart: {
    background: "#f5f5f5",
    padding: "3rem",
    borderLeft: "1px solid lightGrey",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      "& svg": { fontSize: "1rem" },
      "& span": { paddingRight: "4px", fontSize: "0.7rem" },
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
