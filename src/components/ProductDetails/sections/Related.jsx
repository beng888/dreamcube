import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "../styles";

const Related = ({ productDetails }) => {
  const classes = useStyles();

  const controls = useAnimation();
  const [ref, inView] = useInView({ delay: 3 });

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

  const related = productDetails && productDetails.related_products;

  console.log(related);

  let random = related && related.sort(() => 0.5 - Math.random()).slice(0, 5);

  console.log(random);

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
        {related !== undefined ? (
          random.map((product) => (
            <Grid item xs={2} key={product.id} className={classes.relatedItems}>
              <Link to={`/collections/:categories/:category/${product.id}`}>
                {" "}
                <motion.img
                  layout
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
                {product.price.formatted_with_symbol}
              </Typography>
            </Grid>
          ))
        ) : (
          <Skeleton variant="rect" width="100%" height="400px" />
        )}
      </Grid>
    </motion.div>
  );
};

export default Related;
