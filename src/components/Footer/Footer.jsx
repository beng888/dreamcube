import { Button, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PolymerIcon from "@material-ui/icons/Polymer";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";

import useStyles from "./styles";
import { withRouter } from "react-router-dom";

const Footer = withRouter(({ location }) => {
  const classes = useStyles();

  return (
    <>
      {" "}
      {location.pathname !== "/checkout" && (
        <Grid
          container
          alignItems="flex-start"
          spacing={3}
          className={classes.footer}
        >
          <Grid item md={4}>
            <img
              src="https://static.toiimg.com/photo/66476526.cms"
              alt="advert pic"
            />
            <Typography variant="h5">SAVE 20% ON DREAMCUBE</Typography>
            <Typography variant="subtitle2">
              Sign up for our TEXT ALERTS and we will send you a code for 20%
              off your next dreamcube order! This is the most reliable way to
              stay informed about new product launches & sales. To sign up, text
              DREAMCUBE to 29071.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img
              src="https://static.toiimg.com/photo/66476526.cms"
              alt="advert pic"
            />
            <Typography variant="h5">JOIN OUR EMAIL LIST</Typography>
            <Typography variant="subtitle2" gutterBottom>
              Sign up for our email updates and we will keep you informed about
              new products, sales, news about our family and projects and more!
            </Typography>
            <Button variant="outlined">SIGN ME UP</Button>
          </Grid>
          <Grid item md={4}>
            <img
              src="https://static.toiimg.com/photo/66476526.cms"
              alt="advert pic"
            />{" "}
            <Typography variant="h5">LIFETIME GUARANTEE</Typography>
            <Typography variant="subtitle2">
              We stand behind our work. Our hand carved PuzzleBoxes (dreamcube)
              are designed to last a lifetime. If one of our PuzzleBoxes fail
              due to defects in material or workmanship, we will replace it free
              of charge. We promise.
            </Typography>
          </Grid>
          <Grid item>
            <br />
            <Divider className={classes.footerDivider} />
            <Grid container direction="column" alignItems="center">
              <Grid
                container
                justify="center"
                style={{ gap: "1rem", marginBottom: "3rem" }}
              >
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <PinterestIcon />
                <RedditIcon />
                <TwitterIcon />
                <WhatsAppIcon />
                <PolymerIcon />
                <GTranslateIcon />
                <YouTubeIcon />
                <TelegramIcon />
              </Grid>
              <Grid>
                <Typography variant="caption">
                  © 2020 Old World Kitchen | Jonesville, Virginia, USA
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
});

export default Footer;
