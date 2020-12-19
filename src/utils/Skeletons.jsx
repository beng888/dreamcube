import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

const Skeletons = ({ fill }) => {
  return (
    <Grid container justify="center" spacing={4}>
      <Skeleton variant="text" width="60%" height="calc(1rem + 6vw)" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Skeleton variant="text" width="90%" height="1.5rem" />
      <Grid item xs={12}>
        <Skeleton variant="text" width="120px" height="1.5rem" />
      </Grid>

      {Array(fill)
        .fill()
        .map((item, index) => (
          <Grid xs={12} sm={6} item key={index}>
            <Skeleton
              variant="rect"
              animation="wave"
              width="100%"
              style={{ height: "calc(400px + 5vw)" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width="80%"
              style={{ margin: "auto" }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width="30%"
              style={{ margin: "auto" }}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default Skeletons;
