import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Image from "./Image";

const Items = ({ d }) => {
  return (
    <Grid item sm={6} key={d.id} style={{ width: "100%" }}>
      <Link to={`/collections/:categories/${d.categories[0].slug}/${d.id}`}>
        {" "}
        <Image src={d.media.source} alt="categories images" />
      </Link>
      <Typography variant="body1">
        {d.name}&nbsp;|&nbsp;{d.categories[0].name}
      </Typography>
      <Typography variant="body2">{d.price.formatted_with_symbol}</Typography>{" "}
    </Grid>
    // <Grid item key={d.id} className={classes.categories}>
    //   <Image src={d.media.source} alt="category img" />

    //   <div>
    //     {" "}
    //     <Typography variant="body1">{d.categories[0].name}</Typography>
    //   </div>
    // </Grid>
  );
};

export default Items;
