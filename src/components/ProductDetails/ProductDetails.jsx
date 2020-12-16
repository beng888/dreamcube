import { Button, Grid, Typography, Divider } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import useStyles from "./styles";
import globalStyles from "../../globalStyles";
import { commerce } from "../../lib/commerce";
import { AppContext } from "../../lib/commerce";
import ImgGallery from "./sections/ImgGallery";
import Related from "./sections/Related";
import Context from "../../GlobalState/context";

const ProductDetails = ({ match, location }) => {
  const { globalDispatch } = useContext(Context);

  const classes = useStyles();
  const globalClasses = globalStyles();
  const [productDetails, setProductDetails] = useState({});
  const value = useContext(AppContext);

  const href = window.location.href;
  // console.log(href);

  const fetchProductDetails = async () => {
    setProductDetails(await commerce.products.retrieve(match.params.productId));
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);

  //   imgSource = productDetails.media.source;

  // console.log(productDetails);
  // console.log(productDetails.assets);

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const video = getYouTubeID(
    productDetails &&
      productDetails.variants &&
      productDetails.variants[0] &&
      productDetails.variants[0].options &&
      productDetails.variants[0].options[0] &&
      productDetails.variants[0].options[0].name &&
      productDetails.variants[0].options[0].name
  );

  // const useStyles2 = makeStyles((theme) => ({

  //   category: {
  //     minHeight: "20vw",
  //     [theme.breakpoints.down("xs")]: {
  //       minHeight: "150vw",
  //     },
  //   },
  // }));

  // const classes2 = useStyles2();

  const slug =
    productDetails.categories &&
    productDetails.categories[0] &&
    productDetails.categories[0].slug;

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        {/* {!cart.line_items.length ? <EmptyCart /> : <FilledCart />} */}
        <Grid style={{ margin: "auto" }} container>
          <Grid item xs={12} md={7}>
            <ImgGallery assets={productDetails.assets} />
          </Grid>
          <Grid item xs={12} md={5} className={classes.details}>
            <Typography variant="h3">{productDetails.name}</Typography>
            <Typography variant="subtitle1">
              {productDetails &&
              productDetails.price &&
              productDetails.price.formatted_with_symbol !== undefined
                ? productDetails.price.formatted_with_symbol
                : "loading price"}
            </Typography>
            <Divider />{" "}
            <Button
              className={globalClasses.button}
              // () => globalDispatch({ type: "OPENCART" })
              onClick={() => {
                value.handleAddToCart(productDetails.id, 1);
                globalDispatch({ type: "OPENCART" });
              }}
            >
              ADD TO CART
            </Button>
            <Typography
              dangerouslySetInnerHTML={{ __html: productDetails.description }}
              variant="subtitle2"
            />
            <Grid
              container
              justify="center"
              style={{ gap: "5rem", marginBottom: "2rem" }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
            </Grid>
            {video ? <YouTube videoId={video} opts={opts} /> : <div></div>}
          </Grid>
        </Grid>
        <Typography variant="h4" style={{ margin: "3rem 0" }}>
          YOU MAY ALSO LIKE
        </Typography>
        <Related productDetails={productDetails} />
        <Button
          component={Link}
          to={`/collections/:categories/${slug}`}
          className={globalClasses.button}
          style={{
            marginTop: "5rem",
            width: "fit-content",
          }}
        >
          <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
          &nbsp;Back to {slug}
        </Button>
      </Grid>
      <Divider style={{ width: "100%", marginBottom: "4rem" }} />
    </>
  );
};

export default ProductDetails;
