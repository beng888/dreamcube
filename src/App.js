import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Navbar,
  CartPage,
  Checkout,
  Category,
  Categories,
  ProductDetails,
  Footer,
  Blogs,
  Blog,
} from "./components";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:blog" component={Blog} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route exact path="/collections/:categories" component={Categories} /> */}
        <Route
          exact
          path="/collections/:categories/"
          render={(props) => {
            const {
              match: {
                params: { categories },
              },
            } = props;
            return <Categories key={`categories=${categories}`} {...props} />;
          }}
        />
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
