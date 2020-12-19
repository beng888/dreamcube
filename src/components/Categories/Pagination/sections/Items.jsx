import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import LazyImage from "../../../../utils/LazyImage";

const Items = ({ d }) => {
  return (
    <Grid item sm={6} key={d.id} style={{ width: "100%" }}>
      <Link to={`/collections/:categories/${d.categories[0].slug}/${d.id}`}>
        {" "}
        <LazyImage src={d.media.source} alt="categories images" />
      </Link>
      <Typography variant="body1">
        {d.name}&nbsp;|&nbsp;{d.categories[0].name}
      </Typography>
      <Typography variant="body2">{d.price.formatted_with_symbol}</Typography>{" "}
    </Grid>
  );
};

export default Items;
