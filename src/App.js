import React, { Component } from "react";
import "./stylesheets/style.css";
import { Route, Switch } from "react-router-dom";
import Cover from "./Components/Cover";
import Form from "./Components/Form";
import Blog from "./Components/Blog";

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Form} />
        </Switch>
      </>
    );
  }
}
