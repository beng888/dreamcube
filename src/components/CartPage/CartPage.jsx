import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../lib/commerce";
import useStyles from "./styles";
import globalStyles from "../../globalStyles";

const CartPage = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const value = useContext(AppContext);
  const cart = value.cart;
  const filled = cart && cart.line_items && cart.line_items.length;
  //   const [quantity, setQuantity] = useState(cart.line_items.length);

  console.log(cart);

  const EmptyCart = () => <p> Your cart is currently empty.</p>;

  const FilledCart = () => (
    <Grid container direction="column" className={classes.cartContainer}>
      {cart.line_items.map((item) => (
        <Grid
          item
          xs={12}
          container
          key={item.id}
          className={classes.cartItemContainer}
        >
          <Divider />
          <Grid item xs={12} sm={7} container className={classes.itemDetail}>
            <Grid item xs={6} sm={3}>
              <img src={item.media.source} alt={item.name} />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              xs={6}
              sm={9}
            >
              {item.name}
              <Button
                variant="outlined"
                onClick={() => value.handleRemoveFromCart(item.id)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} container className={classes.itemPrice}>
            <Grid
              item
              container
              direction="column"
              xs={4}
              className={classes.itemPriceDiv}
            >
              <Typography variant="body1">Price</Typography>
              <Typography variant="body1">
                {item.price.formatted_with_symbol}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={4}
              className={classes.itemPriceDiv}
            >
              <Typography variant="body1"> Quantity</Typography>
              <Grid container alignItems="center">
                <Button
                  type="button"
                  size="small"
                  onClick={() =>
                    value.handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                <Button
                  type="button"
                  size="small"
                  onClick={() =>
                    value.handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                >
                  +
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={4}
              className={classes.itemPriceDiv}
            >
              <Typography variant="body1">Total</Typography>
              <Typography variant="body1">
                ₱{item.quantity * item.price.raw}.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Divider />
      <Grid item xs={12} container className={classes.checkoutContainer}>
        <Grid item container direction="column" xs={12} md={6}>
          <Typography variant="subtitle2" style={{ marginBottom: "1rem" }}>
            {" "}
            ORDER NOTE
          </Typography>
          <textarea rows="5" />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="flex-end"
          xs={12}
          md={6}
          justify="space-between"
          className={classes.checkout}
        >
          <Grid item container justify="space-between">
            <Typography variant="subtitle2">SUBTOTAL</Typography>
            <Typography variant="body2">
              {cart.subtotal.formatted_with_symbol}
            </Typography>
          </Grid>
          <Typography variant="body2">
            Shipping, taxes, and discount codes calculated at checkout.
          </Typography>
          <Grid item container justify="flex-end" style={{ gap: "1vw" }}>
            <Button variant="outlined" onClick={value.handleEmptyCart}>
              Empty Cart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              className={globalClasses.button}
              style={{ width: "fit-content" }}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.cart}
    >
      <Grid item xs={12} container alignItems="center" direction="column">
        <Typography variant="h4">Cart</Typography>
        <Typography
          component={Link}
          to="/"
          variant="body1"
          className={classes.continueShopping}
        >
          Continue Shopping
        </Typography>
      </Grid>
      {!filled ? <EmptyCart /> : <FilledCart />}
      <Divider />
    </Grid>
  );
};

export default CartPage;
