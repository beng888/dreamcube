import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  button: {
    color: "#fff",
    background: "#000",
    width: "100%",
    overflow: "hidden",
    padding: "0.5rem 1.5rem",
    letterSpacing: "2px",
    fontWeight: "600",
    borderRadius: "0",

    "&:hover": {
      background: "#000",
      opacity: "0.9",
      "&:after": {
        transition: "1s",
        transform: " translateX(-100%)",
      },
    },

    "&:after": {
      content: '""',
      position: "absolute",
      height: "100%",
      width: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,1),transparent)",
      transform: "translateX(100%)",
      opacity: "0.3",
    },
  },
}));
