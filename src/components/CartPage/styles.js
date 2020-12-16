import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  continueShopping: {
    borderBottom: "0.5px solid lightgray",
    "&:hover:after": {
      width: "100%",
      transition: "0.5s ease-out",
      border: "1px solid black",
    },
    "&:after": {
      content: '""',
      display: "block",
      width: "0",
      border: "1px solid lightgray",
      transition: "0.5s",
    },
  },
  cart: {
    padding: "3rem 0",
    minHeight: "80vh",
    "& hr": { width: "100%", margin: "1rem 0" },
  },
  cartContainer: {
    maxWidth: "1450px",
    padding: "2rem",
    "& button": { width: "fit-content" },
    [theme.breakpoints.down("xs")]: { padding: "1rem" },
  },
  cartItemContainer: { [theme.breakpoints.down("xs")]: { gap: "1rem" } },
  itemDetail: {
    "& img": { width: "100%" },
    "& div:nth-child(2)": { paddingLeft: "3vw", gap: "1rem" },
    [theme.breakpoints.down("xs")]: {
      "& button": { background: "#000", color: "#fff", fontSize: "0.8rem" },
    },
  },
  itemPrice: {
    textAlign: "right",
    "& button": { padding: "0", minWidth: "2rem" },
  },
  itemPriceDiv: {
    gap: "4rem",
    "& div": { justifyContent: "flex-end" },
    [theme.breakpoints.down("xs")]: {
      gap: "0",
      alignItems: "center",
      "& div": { justifyContent: "center" },
    },
  },
  checkoutContainer: {
    "& textarea": { border: "1px solid lightgrey" },
  },
  checkout: {
    paddingLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      paddingLeft: "0",
      "& div": { margin: "1rem 0" },
      "& div:first-child": { justifyContent: "space-around" },
      "& div:last-child": { justifyContent: "center" },
    },
  },
}));
