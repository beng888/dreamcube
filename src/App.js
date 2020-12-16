import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Navbar,
  Cart,
  CartPage,
  Checkout,
  Category,
  Categories,
  ProductDetails,
  Footer,
} from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/collections/:categories" component={Categories} />
        <Route
          exact
          path="/collections/:categories/:category"
          render={(props) => {
            const {
              match: {
                params: { category },
              },
            } = props;
            return <Category key={`category=${category}`} {...props} />;
          }}
        />
        <Route
          exact
          path="/collections/:categories/:category/:productId"
          render={(props) => {
            const {
              match: {
                params: { category, productId },
              },
            } = props;
            return (
              <ProductDetails
                key={`category=${category}&productId=${productId}`}
                {...props}
              />
            );
          }}
        />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
