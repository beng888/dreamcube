import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

import Skeletons from "../../utils/Skeletons";
import LazyImage from "../../utils/LazyImage";

const Category = ({ match }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const slug = match.params.category;

  const fetchCategory = async () => {
    setCategory(
      await commerce.categories.retrieve(slug, {
        type: "slug",
      })
    );
  };
  const fetchCategoryProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
    });

    setCategoryProducts(data);
    setloading(false);
  };
  useEffect(() => {
    setloading(true);

    fetchCategory();
    fetchCategoryProducts();
  }, []);

  console.log(categoryProducts);
  console.log(category);

  return (
    <>
      {" "}
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          padding: "3rem 2rem",
          maxWidth: "1450px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {!loading ? (
          <>
            <Typography
              variant="h4"
              style={{ marginBottom: "3rem", textTransform: "uppercase" }}
            >
              {category.name}
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "3rem", maxWidth: "100ch" }}
            >
              {category.description}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ alignSelf: "flex-start" }}
            >
              {categoryProducts.length
                ? categoryProducts.length + " products"
                : "Loading Products..."}
            </Typography>

            <Grid container justify="center" spacing={3}>
              {categoryProducts &&
                categoryProducts.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    xs={12}
                    sm={6}
                    style={{ textAlign: "center", minheight: "50vw" }}
                  >
                    <Link to={`/collections/:categories/${slug}/${product.id}`}>
                      <LazyImage
                        src={product.media.source}
                        alt={product.name}
                      />
                    </Link>
                    <Typography variant="body1">
                      {" "}
                      {product.name}&nbsp;|&nbsp;{product.categories[0].name}
                    </Typography>
                    {product.quantity === 0 ? (
                      <Typography variant="body2">Sold Out</Typography>
                    ) : (
                      <Typography variant="body2">
                        {product.price.formatted_with_symbol}
                      </Typography>
                    )}
                  </Grid>
                ))}
            </Grid>
          </>
        ) : (
          <Skeletons fill={4} />
        )}
      </Grid>
      <Divider style={{ width: "100%", marginBottom: "4rem" }} />
    </>
  );
};

export default Category;
