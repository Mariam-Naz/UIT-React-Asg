import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect:false
    };
  }

  render() {
    return (
      <>
        <div className="col-6 mx-auto my-5">
          <h1 className="text-center display-4">Login</h1>
          <form className="mt-5">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                value={this.state.email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                value={this.state.password}
              />
            </div>
            <Link to="/blog" className='btn btn-primary'>Submit</Link>
          </form>
         
        </div>
      </>
    );
  }
}
