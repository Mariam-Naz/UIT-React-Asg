import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    console.log(this.State);
  };

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
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
