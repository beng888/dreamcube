import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";

import Pagination from "./Pagination/Pagination";

const Categories = ({ location, match }) => {
  const classes = useStyles();

  const a = match.params.categories.split(",");
  const [, ...b] = a;
  const [c] = a;

  console.log(c);
  // const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   b.forEach(async (i) => {
  //     setCategory(
  //       await commerce.categories.retrieve(i, {
  //         type: "slug",
  //       })
  //     );
  //   });
  // }, []);

  //*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const fetchProducts = async function () {
    let results = await Promise.all(
      b.map(async (item) => {
        let data = await commerce.products.list({ category_slug: item });
        return data;
      })
    );
    setProducts(results);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  //*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // const product = products.map((p, i) =>
  //   p.data.map((d, i) => <div key={i}>{d.name}</div>)
  // );

  // console.log(product);

  // const product = products.map((p) => p.data.map((d) => d.name));
  const category = products.map((p) => p.data[0]);

  console.log(category);

  //*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const datas = [].concat.apply(
    [],
    products.map((p) => p.data.map((d) => d))
  );

  console.log(datas);

  //*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  return (
    <Grid
      container
      justify="center"
      direction="row"
      className={classes.container}
    >
      <Grid container direction="column" item xs={12}>
        <Typography variant="h3" gutterBottom>
          DREAMWARE COLLECTION
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Traditionally handcrafted from the finest hardwoods, dreamware is the
          heart and soul of Old World Kitchen. Long before we began offering
          other fine kitchen and dining products made by talented artisans
          around the USA, our family was hand carving the kitchenware of your
          dreams. Each piece is still designed, crafted and packaged by our own
          family, right on our farm. Dreamware is how Old World Kitchen started,
          and will always be the pillar of our brand. We have sent thousands of
          pieces of our luxury kitchenware all over the entire world, and it is
          a special pleasure to us to be able to offer the finest handmade
          kitchen utensils available anywhere. We hope that you treasure and
          enjoy using our dreamware as much as we love making it.{" "}
        </Typography>{" "}
        <br />
        <Typography variant="body1" gutterBottom>
          These items are all MADE TO ORDER. Please refer to the scrolling
          banner at the top of our webpage for current processing times. If you
          need something right away, please visit our Ready To Ship Dreamware or
          Ready to Ship Gift Sets collections!
        </Typography>{" "}
        <br /> <br />
        <Typography
          variant="body1"
          gutterBottom
          style={{ alignSelf: "flex-start" }}
        >
          {datas.length} products
        </Typography>
        <br />
      </Grid>
      <Pagination category={category} datas={datas} />

      {/* {product} */}
    </Grid>
  );
};

export default Categories;
