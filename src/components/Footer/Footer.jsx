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
import { withRouter } from "react-router-dom";

import BG1 from "../../assets/footer1.jpg";
import BG2 from "../../assets/footer2.jpg";
import BG3 from "../../assets/footer3.jpg";
import useStyles from "./styles";

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
            <img src={BG1} alt="advert pic" />
            <Typography variant="h5">SAVE 20% ON DREAMCUBE</Typography>
            <Typography variant="subtitle2">
              Sign up for our TEXT ALERTS and we will send you a code for 20%
              off your next dreamcube order! This is the most reliable way to
              stay informed about new product launches & sales. To sign up, text
              DREAMCUBE to 29071.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={BG2} alt="advert pic" />
            <Typography variant="h5">GOT A QUESTION? EMAIL US!</Typography>
            <Typography variant="subtitle2" gutterBottom>
              Sign up for our email updates and we will keep you informed about
              new products, sales, news about our family and projects and more!
            </Typography>
            <Button
              variant="outlined"
              onClick={() => window.open("mailto:lawrenceardosa@gmail.com")}
            >
              SEND AN EMAIL
            </Button>
          </Grid>
          <Grid item md={4}>
            <img src={BG3} alt="advert pic" />{" "}
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
              <Typography gutterBottom variant="BUTTON ">
                DISCLAIMER!!!{" "}
              </Typography>
              <Typography gutterBottom variant="caption ">
                This is a{" "}
                <a href="https://lawrenceardosa.netlify.app/">PORTFOLIO</a>{" "}
                Website, the design is based from{" "}
                <a href="https://www.poldersoldworldmarket.com/">
                  OLD WORLD KITCHEN
                </a>
                &nbsp;and the products are from{" "}
                <a href="https://puzzleboxworld.com/collections/sale">
                  PUZZLEBOXWORLD
                </a>{" "}
              </Typography>
              <Grid>
                <Typography variant="caption">
                  © 2020 ParaBox | Taguig, Philippines
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
