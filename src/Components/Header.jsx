import React, { Component } from "react";
import { FaReact } from "react-icons/fa";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
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
              <a href="#" className="react pr-2">
                <FaReact />
              </a>
              <a href="#" className="react" id="hide">
                React
              </a>
            </div>
            <div className="nav">
              <a href="#">Docs</a>
            </div>
            <div className="nav">
              <a href="#">Tutorial</a>
            </div>
            <div className="nav">
              <a href="#">Blog</a>
            </div>
            <div className="nav flex-grow-1">
              <a href="#">Community</a>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="flex-sm-shrink"
            />
            <div className="nav small" id="hide">v16.13.1</div>
            <div className="nav small">Languages</div>
            <div className="nav small" id="hide">Github</div>
          </div>
        </div>
      </>
    );
  }
}
