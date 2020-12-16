import { Button, Grid, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

import useStyles from "../styles";
import globalStyles from "../../../globalStyles";

const DreamCube = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const animateDreamCubeBg = {
    initial: { scale: 1.2, filter: "brightness(0%)" },
    animate: {
      scale: 1,
      transition: { duration: 2 },
      filter: "brightness(100%)",
    },
  };

  const animateDreamCubeInfo = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <motion.div ref={ref} initial="initial" animate={controls}>
      <Grid container className={classes.dreamCube}>
        <motion.div
          variants={animateDreamCubeBg}
          className={classes.dreamCubeBG}
        />
        <div className={classes.dreamCubeInfoContainer}>
          <motion.div
            variants={animateDreamCubeInfo}
            className={classes.dreamCubeInfo}
          >
            <Typography
              gutterBottom
              variant="subtitle2"
              style={{ letterSpacing: "3px" }}
            >
              HAND CARVED
            </Typography>
            <Typography gutterBottom variant="h5">
              DREAMCUBE
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              The heart and soul of our brand will always be the stunning wooden
              Puzzles that expert craftsmen carves. We call it dreamcube,
              because it's the puzzlecube of your dreams. We can't wait to
              create something beautiful for you!
            </Typography>
            <Button className={globalClasses.button}>
              SHOP READY TO SHIP DREAMCUBE NOW
            </Button>
          </motion.div>
        </div>
      </Grid>
    </motion.div>
  );
};

export default DreamCube;
