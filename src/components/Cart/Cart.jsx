import React, { useContext } from "react";
import {
  Typography,
  Button,
  Grid,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import globalStyles from "../../globalStyles";
import { AppContext } from "../../lib/commerce";

const Cart = ({ onClose }) => {
  const value = useContext(AppContext);
  const cart = value.cart;
  const globalClasses = globalStyles();

  console.log(cart);

  const useStyles = makeStyles((theme) => ({
    cartContainer: {
      padding: "1.5rem",
      height: "100%",
      width: "400px",
      transition: "1s",
      [theme.breakpoints.down("sm")]: { width: "300px" },
    },
  }));
  const classes = useStyles();

  const EmptyCart = () => (
    <div>
      {" "}
      <Typography style={{ marginTop: "1rem" }} variant="subtitle1">
        Your cart is currently empty.
      </Typography>
    </div>
  );

  const FilledCart = () => (
    <>
      <Grid
        container
        direction="column"
        style={{
          flex: 1,
          overflowY: "auto",
          flexWrap: "nowrap",
        }}
      >
        {cart.line_items.map((item) => (
          <Grid container key={item.id} style={{ paddingTop: "1rem" }}>
            <Grid item xs={4}>
              <img
                src={item.media.source}
                alt={item.name}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              container
              justify="flex-start"
              xs={8}
              style={{ textAlign: "left", padding: "0 1rem" }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {item.name}
                <br /> {item.line_total.formatted_with_symbol}
              </Typography>
              <Grid container justify="center" alignItems="center">
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

            <Divider style={{ width: "100%", marginTop: "1rem" }} />
          </Grid>
        ))}
      </Grid>

      <Grid container direction="column">
        <Grid container justify="space-between">
          <Typography variant="subtitle1">Subtotal</Typography>
          <Typography variant="subtitle1">
            {cart.subtotal.formatted_with_symbol}
          </Typography>
        </Grid>
        <Typography gutterBottom variant="subtitle2">
          Shipping, taxes, and discount codes calculated at checkout.
        </Typography>
        <Button
          component={Link}
          to="/checkout"
          className={globalClasses.button}
          onClick={onClose}
        >
          Checkout
        </Button>
      </Grid>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Grid container direction="column" className={classes.cartContainer}>
      <Grid container justify="space-between" style={{ marginBottom: "2rem" }}>
        {" "}
        <Typography variant="h4">Cart</Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Grid>
      <Divider />
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Grid>
  );
};

export default Cart;
