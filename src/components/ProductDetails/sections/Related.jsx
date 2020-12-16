import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useStyles from "../styles";

const Related = ({ productDetails }) => {
  const classes = useStyles();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

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
    <motion.div
      ref={ref}
      variants={itemList}
      initial="initial"
      animate={controls}
      style={{ width: "100%", overflowX: "auto" }}
    >
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        className={classes.related}
        style={{ minHeight: "20vw", gap: "1rem" }}
      >
        {productDetails && productDetails.related_products !== undefined ? (
          productDetails.related_products.slice(0, 5).map((product) => (
            <Grid item xs={2} key={product.id} className={classes.relatedItems}>
              <Link to={`/collections/:categories/:category/${product.id}`}>
                {" "}
                <motion.img
                  variants={items}
                  src={product.media.source}
                  alt={product.name}
                />
              </Link>

              <Typography variant="body1">
                {" "}
                {product.name}&nbsp;|&nbsp;{productDetails.categories[0].name}
              </Typography>
              <Typography variant="body2">
                {productDetails.price.formatted_with_symbol}
              </Typography>
            </Grid>
          ))
        ) : (
          <div>
            <h1>loading...</h1>
          </div>
        )}
      </Grid>
    </motion.div>
  );
};

export default Related;
