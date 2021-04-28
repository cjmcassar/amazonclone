import React, { useEffect } from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../src/Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  // checks if the user is logged in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
