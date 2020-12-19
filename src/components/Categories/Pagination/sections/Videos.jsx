import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

const Videos = ({ d }) => {
  const video = getYouTubeID(
    d &&
      d.variants &&
      d.variants[0] &&
      d.variants[0].options &&
      d.variants[0].options[0] &&
      d.variants[0].options[0].name &&
      d.variants[0].options[0].name
  );

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Grid item sm={6} key={d.id} style={{ width: "100%" }}>
      <YouTube videoId={video} opts={opts} />{" "}
      <Link to={`/collections/:categories/${d.categories[0].slug}/${d.id}`}>
        <Typography variant="body1">
          {d.name}&nbsp;|&nbsp;{d.categories[0].name}
        </Typography>
        <Typography variant="body2">{d.price.formatted_with_symbol}</Typography>{" "}
      </Link>
    </Grid>
  );
};

export default Videos;
