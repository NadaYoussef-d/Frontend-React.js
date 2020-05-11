import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import UpperHeader from "./upperHeader";
import MiddleHeader from "./middleHeader";
import PrdListing from "./prdListing";
import About from "./about";
import NotFound from "./not-found";
import NavBar from "./navBar";
import AddPrd from "./addPrd";
import PrdDetails from "./prdDetails";
import Register from "./register";
import Login from "./login";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <UpperHeader />
        <MiddleHeader />
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/prdListing" component={PrdListing} />
          <Route path="/addProduct" component={AddPrd} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/productDetails" component={PrdDetails} />
          <Redirect from="/" exact to="/login" />
          {/* <Redirect from="/home" exact to="/prdListing" /> */}
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
