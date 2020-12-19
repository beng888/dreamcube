import { makeStyles } from "@material-ui/core/styles";
import BG from "../../assets/navBG.jpg";

export default makeStyles((theme, location) => ({
  carousel: {
    background: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "40px",
    padding: "0 1rem",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
    "& span": {
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    "& span:first-child": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },

  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.down("xs")]: {
      height: "250px !important",
    },
    height: "650px",
    color: "#fff",
  },

  appBarBackground: {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    position: "absolute",
    margin: "auto",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    zIndex: "-2",
    "&:nth-child(2)": { background: "transparent", zIndex: "-1" },
  },

  toolbar: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: `calc(150px + 10vw)`,
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },

  menuContainer: { [theme.breakpoints.down("xs")]: { display: "none" } },

  menu: {
    padding: "0.5rem 1.5rem",
    cursor: "pointer",
    letterSpacing: "5px",
    margin: "0 1px",

    "&:hover": {
      color: "#000",
    },
  },
  menuListContainer: {
    position: "absolute",
    background: "inherit",
    width: "inherit",
    boxShadow: "0px 4px 5px 3px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column-reverse",
  },

  menuList: {
    fontSize: "1rem",
    padding: "8px 15px",
  },
  menuLink: {
    padding: "0.5rem 1.5rem",
    color: "inherit",
    letterSpacing: "5px",
    "&:hover:after": {
      color: "inherit",
      width: "100%",
      transition: "0.5s ease-out",
      border: "1px solid",
    },
    "&:after": {
      content: '""',
      display: "block",
      width: "0",
      border: "1px solid transparent",
      transition: "0.5s",
    },
  },
}));
