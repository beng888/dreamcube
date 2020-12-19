import { Button, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import useStyles from "../styles";

const Offers = ({ menus }) => {
  const classes = useStyles();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        filter: "blur(0px) grayscale(0) brightness(100%)",
        transition: { duration: 1.2 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(5px) grayscale(1) brightness(150%)" }}
      animate={controls}
    >
      <Grid container className={classes.offerContainer}>
        <Grid item className={classes.offer}>
          <Typography
            variant="subtitle1"
            classes={{ body1: classes.quotebody }}
          >
            COLLECTION
          </Typography>
          <Typography variant="h4">EXQUISITELY HAND MADE PUZZLES</Typography>
          <Typography variant="body1">
            We offer unique and collectible Japanese puzzle boxes and other
            wooden puzzle boxes from around the world. You'll find Karakuri,
            Romanian, German, Czech, and Vintage secret trick puzzle boxes
            throughout our store.
          </Typography>
          <Button>
            <Link to={`/collections/${menus[0].name},${menus[0].url}`}>
              SHOP NOW
            </Link>
          </Button>
        </Grid>
        <Grid item className={classes.offer}>
          <Typography
            variant="subtitle1"
            classes={{ body1: classes.quotebody }}
          >
            INSANE CRAFTSMANSHIP
          </Typography>
          <Typography variant="h4">NOTABLE CRAFTS</Typography>
          <Typography variant="body1">
            All of our puzzle boxes are beautiful, functional and intriguing. We
            import the secrets and mystery of the puzzle box from all around the
            world. We have direct access to the finest shops and craftsmen and
            guarantee our puzzle boxes are of the finest quality and at
            affordable prices.
          </Typography>
          <Button>
            <Link to={`/collections/${menus[1].name},${menus[1].url}`}>
              SHOP NOW
            </Link>
          </Button>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Offers;
