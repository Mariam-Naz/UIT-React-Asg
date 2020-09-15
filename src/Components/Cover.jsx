import React, { Component } from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

export default class Cover extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid cover">
          <div className="row">
            <h1 className="main-heading col-lg-12 col-sm-12">React</h1>
            <h2 className="col-lg-12 col-sm-12 col-8 mx-auto">
              A JavaScript library for building user interfaces
            </h2>
          </div>
          <div className="row">
            <div className="mx-auto get-take">
              <Link className="col-md-6 get-btn mr-3" to='/login'>
                Get Started
              </Link>
              <a className="col-md-6 take-tutorial" href="#">
                Take the Tutorial >
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
