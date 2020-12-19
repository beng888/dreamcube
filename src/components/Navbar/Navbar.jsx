import React, { useContext } from "react";
import { AppBar, Grid, Container, Divider } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Link, withRouter } from "react-router-dom";
import { motion } from "framer-motion";

import NavDrawer from "./NavDrawer";
import { AppContext } from "../../lib/commerce";
import logo from "../../assets/logo.svg";
import useStyles from "./styles";
import { reminders, icons } from "./content";
import NavVideo from "./NavVideo";
import NavCart from "./NavCart";

const Navbar = withRouter(({ totalItems, location }) => {
  const classes = useStyles();
  const value = useContext(AppContext);
  let categories = value.categories;

  console.log(categories);

  const categoryOne = categories.slice(14, 20);
  const categoryTwo = categories.slice(10, 14);
  const categoryThree = categories.slice(0, 10);

  // console.log(categoryOne);
  // console.log(categoryTwo);

  const socialIcons = icons.map((icon, i) => (
    <Grid item key={i}>
      {icon}
    </Grid>
  ));

  const menus = [
    {
      name: "JAPANESE BOXES",
      list: categoryOne,
      url: [categoryOne.map((m) => m.slug)],
    },
    {
      name: "WESTERN BOXES",
      list: categoryTwo,
      url: [categoryTwo.map((m) => m.slug)],
    },
    {
      name: "BY CRAFTSMAN",
      list: categoryThree,
      url: [categoryThree.map((m) => m.slug)],
    },
  ];

  // console.log(menus[0].list[0]);

  // var names = data.map(d => d.Name);

  // const Menu = menus[0].list.map((m) => m.slug);
  // console.log(Menu);

  const showMenu = {
    hover: {
      backgroundColor: "#fff",
    },
  };

  const stretchHr = {
    initial: { width: "0" },
    hover: {
      display: "block",
      width: "100%",
      transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      border: "1px solid #000",
    },
  };

  const showList = {
    initial: {
      y: -15,
      visibility: "hidden",
    },
    hover: {
      y: 5,
      visibility: "visible",
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuList = menus.map(({ name, list, url }, i) => (
    <Grid item key={i}>
      <motion.div
        variants={showMenu}
        whileHover="hover"
        initial="initial"
        transition={{ duration: 0.5 }}
        className={classes.menu}
      >
        <Link style={{ color: "inherit" }} to={`/collections/${name},${url}`}>
          {name}
        </Link>
        <motion.hr variants={stretchHr} transition={{ duration: 0.5 }} />
        <motion.ul variants={showList} className={classes.menuListContainer}>
          {list.map((listItem, l) => (
            <motion.li key={l} className={classes.menuList}>
              <Link to={`/collections/:categories/${listItem.slug}`}>
                {listItem.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Grid>
  ));

  return (
    <>
      {location.pathname !== "/checkout" && (
        <Grid>
          <Carousel
            indicators={false}
            autoPlay
            interval={6000}
            animation="slide"
            timeout={700}
            className={classes.carousel}
          >
            {reminders.map((item, i) => (
              <div key={i}>
                <span style={{ fontSize: "0.85rem" }}>{item.title} &nbsp;</span>
                <span>{item.sub}</span>
              </div>
            ))}
          </Carousel>
          <AppBar
            // initial={{ backgroundColor: "#000" }}
            // animate={{ backgroundColor: "transparent" }}
            // transition={{ duration: 2 }}
            position="relative"
            className={classes.appBar}
            style={{
              color: location.pathname !== "/" && "#000",
              height: location.pathname !== "/" && "450px",
            }}
          >
            {location.pathname === "/" && (
              <motion.div
                initial={{ scale: 1.2, filter: "brightness(0%)" }}
                animate={{ scale: 1, filter: "brightness(100%)" }}
                transition={{ duration: 2 }}
                className={classes.appBarBackground}
              />
            )}
            <Container style={{ maxWidth: "1500px" }}>
              <Grid container justify="space-between" alignItems="center">
                <NavDrawer menus={menus} />
                <Grid item>
                  <Grid container spacing={4}>
                    {socialIcons}
                  </Grid>
                </Grid>
              </Grid>
              <Divider
                style={{
                  backgroundColor: "gray",
                  marginBottom: "1rem",
                }}
              />
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <NavVideo />
                </Grid>
                <Grid item>
                  <Link to="/">
                    <img src={logo} alt="Shopper" className={classes.image} />
                  </Link>
                </Grid>
                <Grid item>
                  <NavCart value={value} />
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.menuContainer}
              >
                <Link to="/" className={classes.menuLink}>
                  HOME
                </Link>
                {menuList}
                <Link to="/blogs" className={classes.menuLink}>
                  PARABLOGX
                </Link>
              </Grid>
            </Container>
          </AppBar>
        </Grid>
      )}
    </>
  );
});

export default Navbar;
