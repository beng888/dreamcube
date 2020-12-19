import {
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import Skeletons2 from "../../../utils/Skeletons2";
import useStyles from "../styles";
import { AppContext } from "../../../lib/commerce";

const ItemList = ({ menus }) => {
  const classes = useStyles();
  const value = useContext(AppContext);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const itemList = {
    animate: { transition: { staggerChildren: 0.2 } },
  };
  const items = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Divider style={{ margin: "60px 0" }} />
      <Grid container justify="center" direction="column">
        <Typography variant="h4" gutterBottom>
          HAND CARVED DREAMWARE
        </Typography>
        <Button
          component={Link}
          variant="outlined"
          style={{ width: "fit-content", margin: "auto" }}
          to={`/collections/${menus[2].name},${menus[2].url}`}
        >
          View All
        </Button>
      </Grid>
      <motion.div
        ref={ref}
        variants={itemList}
        initial="initial"
        animate={controls}
        style={{ width: "100%", overflowX: "auto" }}
      >
        {!value.products.length ? (
          <Skeletons2 fill2={4} nowrap="nowrap" />
        ) : (
          <Grid container spacing={4} className={classes.Items}>
            {value.products &&
              value.products.slice(0, 4).map((product) => (
                <Grid item xs={3} key={product.id}>
                  <motion.img
                    variants={items}
                    src={product.media.source}
                    alt="items"
                  ></motion.img>
                  <Typography variant="body1">
                    {product.name} | {product.categories[0].name}
                  </Typography>
                  <Typography variant="body1">
                    from&nbsp;{product.price.formatted_with_symbol}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        )}
      </motion.div>
    </>
  );
};

export default ItemList;
