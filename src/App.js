import React from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../src/Components/Checkout";
import Login from "./Components/Login";

function App() {
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
