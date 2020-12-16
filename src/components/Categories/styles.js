import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    maxWidth: "1450px",
    margin: "auto",
    padding: "15px",
    textAlign: "center",

    "& h3": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
  categories: {
    position: "relative",
    margin: "auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "10px",
      bottom: "12px",
      left: "10px",
      right: "10px",
      background: "#f5f5f5",
      zIndex: -1,
    },
    "& img": {
      minWidth: "50%",
      width: "100%",
    },

    "& div ": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "1rem",

      "& p ": {
        background: "#fff",
        width: "fit-content",
        margin: "auto",
        padding: "0.2rem 1rem",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
    },
  },
  gridRoot: { "& .MuiTableCell-root": { border: "0px" } },
  paginationRoot: {
    "& .MuiToolbar-root": { flexDirection: "column" },
    "& .MuiToolbar-gutters": { padding: "0" },
    "& .MuiInputBase-root": { display: "none" },
    "& .MuiTypography-colorInherit:nth-child(2)": { display: "none" },
    "& .MuiTypography-colorInherit": {
      position: "absolute",
      top: "8px",
    },
  },
  toolbar: { minHeight: "30px" },
  gutters: { padding: "0" },
}));
