import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CheckoutCart from "./CheckoutCart";
import useStyles from "../styles";

const CheckoutAccordion = ({ subtotal, cart }) => {
  const classes = useStyles();

  return (
    <Accordion style={{ width: "100%" }} className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container alignItems="center">
          <ShoppingCartIcon />
          <Typography variant="subtitle1">&nbsp;Show order summary</Typography>
          <span style={{ flex: 1 }} />
          <Typography variant="subtitle1"> {subtotal}</Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <CheckoutCart subtotal={subtotal} cart={cart} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CheckoutAccordion;
