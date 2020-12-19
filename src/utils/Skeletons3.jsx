import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const Skeletons3 = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={7}>
        <Skeleton variant="rect" width="100%" height="40vmax" />
      </Grid>
      <Grid item xs={12} md={5} style={{}}>
        {" "}
        <Skeleton variant="text" width="100%" height="4rem" />
        <Skeleton variant="text" width="50%" height="4rem" />
        <Skeleton variant="text" width="20%" height="4rem" />
        <br />
        <br />
        <br />
        <Skeleton variant="rect" width="100%" height="2.5rem" />
        <br />
        <br />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <Skeleton variant="text" width="100%" height="1.5rem" />
        <br />
        <br />
        <Grid container justify="space-around">
          <Skeleton variant="circle" width={30} height={30} />
          <Skeleton variant="circle" width={30} height={30} />
          <Skeleton variant="circle" width={30} height={30} />
        </Grid>
        <br />
        <br />
        <Skeleton variant="rect" width="100%" height="500px" />
      </Grid>
    </Grid>
  );
};

export default Skeletons3;
