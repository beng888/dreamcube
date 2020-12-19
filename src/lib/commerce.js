import { createContext, useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  // const fetchCategory = async () => {
  //   setCategory(
  //     await commerce.categories.retrieve("samsung", {
  //       type: "slug",
  //     })
  //   );
  // };

  // const fetchCategoryProducts = async () => {
  //   const { data } = await commerce.products.list({
  //     category_slug: "samsung",
  //   });

  //   setCategoryProducts(data);
  // };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    // fetchCategory();
    // fetchCategoryProducts();
    fetchCart();
  }, []);

  // console.log(products);
  // console.log(categories);
  // console.log(category);
  // console.log(categoryProducts);
  // console.log(cart);

  const value = {
    products,
    categories,
    cart,
    order,
    errorMessage,
    handleAddToCart,
    handleUpdateCartQty,
    handleEmptyCart,
    handleRemoveFromCart,
    handleCaptureCheckout,
    refreshCart,
  };

  // console.log(cart);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
