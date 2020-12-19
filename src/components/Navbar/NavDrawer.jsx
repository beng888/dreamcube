import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Drawer,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavDrawer = ({ menus }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const useStyles = makeStyles((theme) => ({
    accordionRoot: { width: "300px", maxWidth: "100vw" },
    accordionSummaryRoot: { width: "100%" },
    formControlLabelRoot: { width: "100%", margin: "0" },
    buttonRoot: {
      width: "100%",
      padding: "0.7 rem 1rem",
      fontSize: "1rem",
    },
    accordionSummaryContent: {
      borderRight: "1px solid #b9b9b9",
    },
    menuButton: {
      padding: "0",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();

  const menuList = menus.map(({ name, list }, i) => (
    <Accordion classes={{ root: classes.accordionRoot }} key={i}>
      <AccordionSummary
        component={Button}
        classes={{
          root: classes.accordionSummaryRoot,
          content: classes.accordionSummaryContent,
        }}
        expandIcon={<ExpandMoreIcon classes={{}} />}
      >
        <FormControlLabel
          classes={{ root: classes.formControlLabelRoot }}
          onClick={(event) => event.stopPropagation()}
          control={
            <Button
              classes={{ root: classes.buttonRoot }}
              component={Link}
              to={`/collections/${name},${list}`}
            >
              {name}
            </Button>
          }
        />
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {list.map((listItem, l) => (
            <li key={l}>
              <Typography gutterBottom variant="subtitle2">
                <Link to={`/collections/:categories/${listItem.slug}`}>
                  {listItem.name}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div>
      <Drawer
        transitionDuration={400}
        title="Menu"
        onClose={onClose}
        open={visible}
      >
        <Button
          onClick={onClose}
          style={{ alignSelf: "flex-end", margin: "0.5rem" }}
        >
          <CloseIcon />
        </Button>
        <Button
          style={{
            borderTop: "1px solid lightgrey",
            padding: "1.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          HOME
        </Button>
        {menuList}
        <Button
          style={{
            borderBottom: "1px solid lightgrey",
            padding: "1.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          BLOG
        </Button>
      </Drawer>
      <Grid
        color="inherit"
        component={Button}
        item
        onClick={showDrawer}
        className={classes.menuButton}
      >
        <PlaylistPlayIcon style={{ fontSize: "40px" }} />
      </Grid>
    </div>
  );
};

export default NavDrawer;
