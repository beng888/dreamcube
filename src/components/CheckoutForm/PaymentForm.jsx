import React, { useContext } from "react";
import {
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import test from "../../assets/test.png";

import { AppContext } from "../../lib/commerce";
import globalStyles from "../../globalStyles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  nextStep,
  backStep,
  shippingData,
  timeout,
}) => {
  const value = useContext(AppContext);
  const globalClasses = globalStyles();

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      value.handleCaptureCheckout(checkoutToken.id, orderData);

      timeout();

      nextStep();
    }
  };

  return (
    <>
      {/* <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography> */}
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              style={{ width: "100%" }}
              onSubmit={(e) => handleSubmit(e, elements, stripe)}
            >
              <CardElement />
              <br /> <br />
              <Grid container justify="space-between">
                <Grid
                  component={Button}
                  onClick={backStep}
                  container
                  alignItems="center"
                  style={{ width: "fit-content" }}
                >
                  <ArrowBackIosIcon fontSize="small" />
                  <h5>Return to Shipping</h5>
                </Grid>
                <Button
                  className={globalClasses.button}
                  style={{
                    borderRadius: "5px",
                    width: "fit-content",
                  }}
                  type="submit"
                  disabled={!stripe}
                >
                  Pay now
                </Button>
              </Grid>
              <Accordion style={{ marginTop: "1rem" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Click here for Testing
                </AccordionSummary>
                <AccordionDetails>
                  <img
                    src={test}
                    alt="test payment"
                    style={{ width: "100%" }}
                  />
                </AccordionDetails>
              </Accordion>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Return to shipping
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div> */}
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
