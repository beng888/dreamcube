import { makeStyles } from "@material-ui/core/styles";

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
    background: `url('https://cdn.shopify.com/s/files/1/0122/9422/products/DSCF0510_2080x.jpg?v=1598506193')`,
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
    backgroundColor: "transparent",

    "&:hover": {
      color: "#000",
    },
  },
  menuListContainer: {
    position: "absolute",
    background: "inherit",
    width: "inherit",
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.2)",
  },

  menuList: {
    fontSize: "1rem",
    padding: "8px 15px",
  },
}));
