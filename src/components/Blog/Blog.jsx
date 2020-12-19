import {
  Grid,
  Typography,
  makeStyles,
  Divider,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { BlogContent } from "../Blogs/content";
import globalStyles from "../../globalStyles";

const useStyles = makeStyles({
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "1rem",

    "& img": { maxWidth: "100%", margin: "2rem auto" },
    "& p": { marginBottom: "2rem" },
    "& h3": { marginBottom: "2rem" },
  },
});

const Blog = ({ match }) => {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const path = match.params.blog;

  return (
    <>
      <Grid
        container
        alignItems="flex-start"
        direction="column"
        className={classes.container}
      >
        <img src={BlogContent[path].img[0]} alt={BlogContent[path].img[0]} />
        <Typography variant="body2">{BlogContent[path].date}</Typography>
        <Typography variant="h3">{BlogContent[path].title}</Typography>
        <Typography variant="body1">
          {BlogContent[path].description[0]}
        </Typography>
        <img src={BlogContent[path].img[1]} alt={BlogContent[path].img[2]} />
        <Typography variant="body1">
          {BlogContent[path].description[1]}
        </Typography>
        <img src={BlogContent[path].img[2]} alt={BlogContent[path].img[3]} />
        <Typography variant="body1">
          {BlogContent[path].description[2]}
        </Typography>
        <img src={BlogContent[path].img[3]} alt={BlogContent[path].img[1]} />
        <Typography variant="body1">
          {BlogContent[path].description[3]}
        </Typography>{" "}
        <Divider style={{ width: "100%" }} />
        <Button
          component={Link}
          to="/blogs"
          className={globalClasses.button}
          type="button"
          style={{ width: "fit-content", margin: "3rem auto" }}
        >
          <ArrowRightAltIcon />
          &nbsp;Back to home
        </Button>
      </Grid>
      <Divider />
    </>
  );
};

export default Blog;
