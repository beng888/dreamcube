import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  Grid,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { AppContext } from "../../../lib/commerce";
import CheckoutCart from "./sections/CheckoutCart";
import CheckoutAccordion from "./sections/CheckoutAccordion.jsx";
import globalStyles from "../../../globalStyles";

const steps = ["Cart", "Shipping details", "Payment", "Confirmation"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const value = useContext(AppContext);
  const cart = value.cart;
  const order = value.order;
  const error = value.errorMessage;
  const globalClasses = globalStyles();

  console.log(cart);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);

        setCheckoutToken(token);
      } catch (error) {
        // history.push("/");
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep + 1);
  const backStep = () =>
    setActiveStep((previousActiveStep) => previousActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
      value.refreshCart();
    }, 5000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
          <br />
          <Button
            component={Link}
            to="/"
            className={globalClasses.button}
            type="button"
          >
            Back to home
          </Button>
        </div>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase</Typography>
          <Divider className={classes.divider} />
          <br />
          <Button
            component={Link}
            to="/"
            className={globalClasses.button}
            type="button"
          >
            Back to home
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button
        component={Link}
        to="/"
        className={globalClasses.button}
        type="button"
      >
        Back to home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 1 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        timeout={timeout}
        shippingData={shippingData}
      />
    );

  const subtotal = cart && cart.subtotal && cart.subtotal.formatted_with_symbol;

  return (
    <Grid
      container
      style={{ maxWidth: "1300px", margin: "auto", minHeight: "100vh" }}
    >
      <Grid
        item
        md={activeStep !== 3 ? 7 : 12}
        xs={12}
        alignItems="center"
        container
        direction="column"
        className={classes.info}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "150px",
              margin: "auto",
              cursor: "pointer !important",
            }}
          />
        </Link>
        <CheckoutAccordion subtotal={subtotal} cart={cart} />
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 3 ? <Confirmation /> : checkoutToken && <Form />}
      </Grid>
      {/* <Divider orientation="vertical" flexItem /> */}
      {activeStep !== 3 && (
        <Grid item md={5} className={classes.cart}>
          <CheckoutCart subtotal={subtotal} cart={cart} />
        </Grid>
      )}

      {/* <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main> */}
    </Grid>
  );
};

export default Checkout;
