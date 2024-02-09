import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Address from "./Address";
import Footer from "./Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from "./AddProduct";
import SignUp from "./SignUp";
import OrdersProduct from "./OrdersProduct";
import styled from "styled-components";

const promise = loadStripe(
  "pk_test_51MCmygSAWc9nxuIsDH8NfbRdswrNxsx5pfwCQcQ8SwOCIrknGfI6pBlVOd3AwUrBVx1fff96cX0kgFLV0XsQkjYy00rVg41Zyh"
);
function App() {
  // const [{ user, setLoginUser }] = useState({});
  return (
    //BEM convention
    <Router>
      <Container>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/address">
            <Header />
            <Address />
            <Footer />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/orders">
            <Header />
            <OrdersProduct />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  &::--webkit-scrollbar {
    display: none;
  }
`;
export default App;
