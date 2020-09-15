import React, { Component } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 pl-5 ml-5 mt-3 pr-5">
              <h1 className="font-weight-bold display-3 pb-0">
                React v17.0 Release Candidate: No New Features
              </h1>
              <h6 className="font-weight-normal">
                August 10, 2020 by Dan Abramov and Rachel Nabors
              </h6>
              <p className="font-weight-light pt-5 para">
                Today, we are publishing the first Release Candidate for React
                17. It has been two and a half years since the previous major
                release of React, which is a long time even by our standards! In
                this blog post, we will describe the role of this major release,
                what changes you can expect in it, and how you can try this
                release.
              </p>
            </div>
            <div className="col-md-3">
              <div className="vertical-menu">
                <NavLink to="#" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="#" activeClassName="active">
                  Link 1
                </NavLink>
                <NavLink to="#" activeClassName="active">
                  Link 2
                </NavLink>
                <NavLink to="#" activeClassName="active">
                  Link 3
                </NavLink>
                <NavLink to="#" activeClassName="active">
                  Link 4
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
