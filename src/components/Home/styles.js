import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/offer1.jpg";
import Background2 from "../../assets/offer2.jpg";
import Background3 from "../../assets/dreamcube.jpg";

export default makeStyles((theme) => ({
  container: {},
  quote: {
    maxWidth: "900px",
    textAlign: "center",
    padding: "70px 30px",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 30px",
    },
    margin: "auto",
  },
  //* |||||||||||||||||||||||||||||||||||||||||||OFFER||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  offerContainer: {
    padding: "1rem",
    gap: "1rem",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: { flexDirection: "column" },
  },
  offer: {
    position: "relative",
    color: "#fff",
    textShadow: "0px 0px 2px #000",
    textAlign: "center",
    height: "99vh",
    padding: "60px 60px 0px 60px",
    width: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    "& h4": { margin: "1rem" },
    "& button": {
      margin: "1rem",
      width: "fit-content",
      alignSelf: "center",
      padding: "11px 20px",
      letterSpacing: "0.3em",
      border: "2px solid #fff",
      textShadow: "0px 0px 2px #000",

      "& a": { color: "#fff" },
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: "8px",
      bottom: "8px",
      left: "8px",
      right: "8px",
      border: "2px solid #F4F1E9",
      pointerEvents: "none",
    },
    "&:first-child:after": { border: "2px solid #48494D" },
    "&:first-child": {
      backgroundImage: `url(${Background})`,
    },
    "&:nth-child(2)": {
      backgroundImage: `url(${Background2})`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    [theme.breakpoints.down("sm")]: {
      "& h4": { fontSize: "1.3rem", margin: "0" },
      "& h6": { fontSize: "1rem" },
      "& p": { fontSize: "0.8rem", margin: "0.5rem" },
      "& button": { padding: "6px 14px", fontSize: "0.7rem", margin: "0" },
      padding: "30px",
      width: "100%",

      // flexWrap: "nowrap",
      "&:first-child": {
        height: "470px",
      },
      "&:nth-child(2)": { height: "fit-content" },
    },
  },
  //*||||||||||||||||||||||||||||||||||||||||||||ITEMLIST||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  Items: {
    flexWrap: "nowrap",
    padding: "3rem 2rem",
    maxWidth: "1450px",
    width: "100%",
    minWidth: "fit-content",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 1rem",
      "& div": { minWidth: "200px" },
    },

    "& img": {
      background: "blue",
      position: "relative",
      width: "100%",
    },
  },
  //* ||||||||||||||||||||||||||||||||||||||||||||DREAMCUBE|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  dreamCube: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    minHeight: "95vh",
    margin: "52px 0",
    [theme.breakpoints.down("xs")]: {
      height: "fit-content",
      minHeight: "480px",
      padding: "0.5rem",
    },
  },
  dreamCubeBG: {
    backgroundImage: `url(${Background3})`,
    backgroundSize: "cover",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
  },
  dreamCubeInfoContainer: {
    overflow: "hidden",
    position: "relative",
    top: "60px",
    left: "60px",
    width: "380px",
    height: "440px",

    [theme.breakpoints.down("xs")]: {
      position: "initial",
      marginTop: "240px",
      width: "100%",
      height: "fit-content",
    },
  },
  dreamCubeInfo: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    background: "#fff",
    padding: "35px",
    textAlign: "left",
    "& button": {
      marginTop: "auto",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "10px",
      bottom: "10px",
      left: "10px",
      right: "10px",
      border: "2px solid #000",
      pointerEvents: "none",
    },

    [theme.breakpoints.down("xs")]: {
      position: "relative",
      height: "fit-content",
      textAlign: "center",
      "& h6": {
        fontSize: "0.8rem",
      },
      "& button": {
        padding: "0.3rem 1rem",
        width: "fit-content",
        margin: "auto",
      },
    },
  },
  advert: {
    margin: "auto",
    width: "fit-content",
    maxWidth: "1450px",
    "& div": {
      width: "100%",
      height: "100%",
    },
    "& img": { width: "100%", maxHeight: "400px" },
  },
}));
