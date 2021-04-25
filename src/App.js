import React from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../src/Components/Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
