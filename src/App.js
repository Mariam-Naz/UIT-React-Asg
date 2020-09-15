import React from "react";
import "./stylesheets/style.css";
import {Route, Switch} from 'react-router-dom';
import Cover from "./Components/Cover";
import Form from "./Components/Form";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route exact path='/react.org' component={Cover} />
      </Switch>
    </>
  );
}
