import React from "react";
import "./stylesheets/style.css";
import { Switch, Route } from "react-router-dom";
import Cover from "./Components/Cover";
import Form from "./Components/Form";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" Component={Form} />
        <Route exact path="/react.org" Component={Cover} />
      </Switch>
    </>
  );
}
