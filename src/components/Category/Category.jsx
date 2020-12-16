import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const Category = ({ match }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const slug = match.params.category;
  const fetchCategoryProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
    });

    setCategoryProducts(data);
  };
  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  console.log(categoryProducts.length);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ padding: "3rem 2rem", maxWidth: "1450px", margin: "auto" }}
      >
        <Typography variant="h3" style={{ marginBottom: "3rem" }}>
          {slug}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ alignSelf: "flex-start" }}
        >
          {categoryProducts.length} products
        </Typography>
        <Grid container justify="center" spacing={3}>
          {categoryProducts &&
            categoryProducts.map((product) => (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={6}
                style={{ textAlign: "center" }}
              >
                <Link to={`/collections/:categories/${slug}/${product.id}`}>
                  <img
                    style={{ width: "100%" }}
                    src={product.media.source}
                    alt={product.name}
                  />
                </Link>
                <Typography variant="body1">
                  {" "}
                  {product.name}&nbsp;|&nbsp;{product.categories[0].name}
                </Typography>
                <Typography variant="body2">
                  {product.price.formatted_with_symbol}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Divider style={{ width: "100%", marginBottom: "4rem" }} />
    </>
  );
};

export default Category;
