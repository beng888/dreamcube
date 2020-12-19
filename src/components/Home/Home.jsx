import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

import { AppContext } from "../../lib/commerce";
import useStyles from "./styles";
import Offers from "./sections/Offers";
import DreamCube from "./sections/DreamCube";
import ItemList from "./sections/ItemList";

const Home = () => {
  const classes = useStyles();
  const value = useContext(AppContext);

  let categories = value.categories;

  const categoryGroup = categories.slice(10, 20);
  const categoryGroup2 = categories.slice(0, 10);
  const categoryGroup3 = categories.slice(0, 20);

  const menus = [
    {
      name: "PUZZLE BOXES",
      list: categoryGroup,
      url: [categoryGroup.map((m) => m.slug)],
    },
    {
      name: "NOTABLES CRAFTSMEN WORKS",
      list: categoryGroup2,
      url: [categoryGroup2.map((m) => m.slug)],
    },
    {
      name: "ALL PRODUCTS",
      list: categoryGroup3,
      url: [categoryGroup3.map((m) => m.slug)],
    },
  ];

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
        <Offers menus={menus} />

        <ItemList menus={menus} />
        <DreamCube />
        {/* COMPONENTS */}
      </Grid>
    </motion.main>
  );
};

export default Home;
