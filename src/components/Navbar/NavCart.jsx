import { Badge, IconButton, Drawer } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React, { useContext } from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import Cart from "../Cart/Cart";
import Context from "../../GlobalState/context";

const NavCart = ({ value }) => {
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <>
      <Drawer
        transitionDuration={300}
        anchor="right"
        title="Menu"
        onClose={() => globalDispatch({ type: "CLOSECART" })}
        open={globalState.isOpen}
      >
        <Cart onClose={() => globalDispatch({ type: "CLOSECART" })} />
      </Drawer>

      <IconButton
        onClick={() => globalDispatch({ type: "OPENCART" })}
        // component={Link}
        // to="/cart"
        aria-label="Show cart items"
        color="inherit"
      >
        <Badge badgeContent={value.cart.total_items} color="secondary">
          <ShoppingBasketIcon fontSize="large" />
        </Badge>
      </IconButton>
    </>
  );
};

export default NavCart;
