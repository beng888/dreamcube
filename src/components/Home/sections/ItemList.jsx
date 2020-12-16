import {
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../lib/commerce";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useStyles from "../styles";

const ItemList = () => {
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
          variant="outlined"
          style={{ width: "fit-content", margin: "auto" }}
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
        <Grid container spacing={4} className={classes.Items}>
          {value.products.slice(0, 4).map((product) => (
            <Grid item key={product.id}>
              <motion.img
                variants={items}
                src={product.media.source}
                alt="items"
              ></motion.img>
              <Typography variant="body1">{product.name}</Typography>
              <Typography variant="body1">
                from&nbsp;{product.price.formatted_with_symbol}
              </Typography>
              <Typography variant="body1">
                {product.categories[0].name}
              </Typography>
              <IconButton
                aria-label="Add to Cart"
                onClick={() => value.handleAddToCart(product.id, 1)}
              >
                <AddShoppingCart />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </>
  );
};

export default ItemList;
