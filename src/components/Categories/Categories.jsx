import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";

import Skeletons from "../../utils/Skeletons";
import Skeletons2 from "../../utils/Skeletons2";
import Pagination from "./Pagination/Pagination";

const Categories = ({ location, match }) => {
  const classes = useStyles();

  const a = match.params.categories.split(",");
  const [, ...b] = a;
  const [c] = a;

  // console.log(c);
  // const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // TODO ||||||||||||||||||||||||||||||||||||||
  const fetchProducts = async function (error) {
    let results = await Promise.all(
      b.map(async (item) => {
        let data = await commerce.products.list({ category_slug: item });
        return data;
      })
    );

    setProducts(results);
    setLoading(false);
    return Promise.reject(error);
  };

  useEffect(() => {
    setLoading(true);

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
      {!loading ? (
        <>
          <Grid container direction="column" item xs={12}>
            <Typography variant="h3" gutterBottom>
              {c}
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              Traditionally handcrafted from the finest hardwoods, dreamcube is
              the heart and soul of Parabox. Long before we began offering other
              fine Puzzle Boxes made by talented artisans around the Japan, our
              family was hand carving the puzzles of your dreams. Each piece is
              still designed, crafted and packaged by our own family, right on
              our workshop. Dreamcube is how Parabox started, and will always be
              the pillar of our brand. We have sent thousands of pieces of our
              luxury puzzles all over the entire world, and it is a special
              pleasure to us to be able to offer the finest Puzzleboxes
              available anywhere. We hope that you treasure and enjoy using our
              dreamcube as much as we love making it.
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              These items are all MADE TO ORDER. Please refer to the scrolling
              banner at the top of our webpage for current processing times. If
              you need something right away, please visit our Ready To Ship
              Dreamcube or Ready to Ship Gift Sets collections!
            </Typography>
            <br /> <br />
            <Typography
              variant="body1"
              gutterBottom
              style={{ alignSelf: "flex-start" }}
            >
              {datas.length
                ? datas.length + " products"
                : "Loading Products..."}
            </Typography>
            <br />
          </Grid>
          <Pagination category={category} datas={datas} c={c} />
        </>
      ) : (
        <>
          {c === "ALL PRODUCTS" && (
            <Typography variant="h2">This will take a while</Typography>
          )}
          <Skeletons fill={20} />
          <Skeletons2 fill2={4} />
        </>
      )}
      {/* {product} */}
    </Grid>
  );
};

export default Categories;
