import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="container-fluid header-container">
          <div className="row">
            <h1>
              Black Lives Matter.
              <span className="col-sm-12 support">
                Support the Equal Justice Initiative.
              </span>
            </h1>
          </div>
          <div className="d-flex justify-content-start">
            <div className="logo flex-grow-1">
              <NavLink to="/">
                <span className="react pr-2 pb-3">
                  <FaReact />
                </span>
                <span className="react pb-3 hide">React</span>
              </NavLink>
            </div>
            <div className="nav">
              <NavLink to="/docs" activeClassName="menu-active">
                Docs
              </NavLink>
            </div>
            <div className="nav pb-3">
              <NavLink to="/tutorial" activeClassName="menu-active">
                Tutorial
              </NavLink>
            </div>
            <div className="nav">
              <NavLink to="/blog" activeClassName="menu-active">
                Blog
              </NavLink>
            </div>
            <div className="nav flex-grow-1">
              <NavLink to="/tutorial" activeClassName="menu-active">
                Community
              </NavLink>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="flex-sm-shrink"
            />
            <div className="nav small hide">v16.13.1</div>
            <div className="nav small">Languages</div>
            <div className="nav small hide">Github</div>
          </div>
        </div>
      </>
    );
  }
}
