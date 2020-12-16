import React, { useContext, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AddShoppingCart } from "@material-ui/icons";

import { AppContext } from "../../lib/commerce";
import Product from "./Product/Product";
import useStyles from "./styles";
import Offers from "./sections/Offers";
import DreamCube from "./sections/DreamCube";
import ItemList from "./sections/ItemList";

const Home = () => {
  const classes = useStyles();
  const value = useContext(AppContext);
  console.log(value.products);
  // console.log(value.products[0].categories[0].name);

  return (
    <motion.main className={classes.container}>
      <Grid
        container
        justify="center"
        direction="column"
        style={{ textAlign: "center" }}
      >
        <Grid container direction="column" className={classes.quote}>
          <Typography variant="h4">WELCOME TO PARABOX</Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: "1.2rem" }}
          >
            Abandon the urge to simplify everything, to look for formulas and
            easy answers, and to begin to think multidimensionally, to glory in
            the mystery and paradoxes of life, not to be dismayed by the
            multitude of causes and consequences that are inherent in each
            experience
          </Typography>
          <Typography variant="body1" gutterBottom>
            -- to appreciate the fact that life is complex.
          </Typography>
          <Typography variant="body1">M. Scott Peck</Typography>
        </Grid>

        {/* COMPONENTS */}
        <Offers />
        <ItemList />
        <DreamCube />
        {/* COMPONENTS */}
      </Grid>
    </motion.main>
  );
};

export default Home;
