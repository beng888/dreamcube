import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { BlogContent } from "./content";

const Blogs = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ maxWidth: "1450px", margin: "auto", textAlign: "center" }}
    >
      <Typography variant="h4">PARABOX BLOGS</Typography>
      <Grid container>
        {BlogContent.map((blog, i) => (
          <Grid xs={12} sm={6} key={i} style={{ padding: "1rem" }}>
            <Link to={`/blogs/${i}`}>
              <img
                src={blog.img[0]}
                alt={blog.title}
                style={{ width: "100%", maxHeight: "500px" }}
              />
            </Link>
            <Typography gutterBottom variant="body2">
              {blog.date}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {blog.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Blogs;
