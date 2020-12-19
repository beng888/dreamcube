import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

const Skeleton2 = ({ fill2, nowrap }) => {
  return (
    <Grid
      container
      style={{ flexWrap: nowrap, margin: "2rem auto" }}
      spacing={2}
    >
      {Array(fill2)
        .fill()
        .map((item, index) => (
          <Grid item xs={6} sm={2} key={index} style={{ margin: "auto" }}>
            <Skeleton
              variant="rect"
              animation="wave"
              width="100%"
              style={{ height: "calc(150px + 5vw)", margin: "auto" }}
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

export default Skeleton2;
