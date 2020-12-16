import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

const CheckoutCart = ({ subtotal, cart }) => {
  return (
    <Grid container direction="column">
      {cart &&
        cart.line_items &&
        cart.line_items.map((item) => (
          <Grid
            container
            key={item.id}
            spacing={3}
            style={{ padding: "1rem 0" }}
          >
            <Grid item xs={2}>
              <img
                src={item.media.source}
                alt={item.name}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems="center"
              xs={10}
            >
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="body2">
                {item.line_total.formatted_with_symbol}
              </Typography>
            </Grid>
            <Divider style={{ width: "100%" }} />
          </Grid>
        ))}
      <Grid item container justify="space-between">
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1"> {subtotal}</Typography>
      </Grid>
      <Divider style={{ margin: "1rem 0" }} />
      <Grid item container justify="space-between">
        <Typography variant="subtitle1">TOTAL</Typography>
        <Typography variant="h5"> {subtotal}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutCart;
