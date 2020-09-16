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
              <p className="font-weight-light pt-5 para pb-4">
                Today, we are publishing the first Release Candidate for React
                17. It has been two and a half years since the previous major
                release of React, which is a long time even by our standards! In
                this blog post, we will describe the role of this major release,
                what changes you can expect in it, and how you can try this
                release.
              </p>

              <hr />

              <h1 className="font-weight-bold display-6 pb-4">
                No New Features
              </h1>
              <p className="pb-3 pr-6">
                The React 17 release is unusual because it doesn’t add any new
                developer-facing features. Instead, this release is primarily
                focused on{" "}
                <strong>making it easier to upgrade React itself.</strong>
              </p>
              <p className="pb-3 pr-6">
                We’re actively working on the new React features, but they’re
                not a part of this release. The React 17 release is a key part
                of our strategy to roll them out without leaving anyone behind.
              </p>
              <p className="pb-3 pr-6 pb-4">
                In particular,{" "}
                <strong>React 17 is a “stepping stone” release</strong> that
                makes it safer to embed a tree managed by one version of React
                inside a tree managed by a different version of React.
              </p>

              <hr />

              <h1 className="font-weight-bold display-6 pb-4">
                Gradual Upgrades
              </h1>
              <p className="pb-3 pr-6">
                For the past seven years, React upgrades have been
                “all-or-nothing”. Either you stay on an old version, or you
                upgrade your whole app to a new version. There was no
                in-between.
              </p>
              <p className="pb-3 pr-6">
                This has worked out so far, but we are running into the limits
                of the “all-or-nothing” upgrade strategy. Some API changes, for
                example, deprecating the legacy context API, are impossible to
                do in an automated way. Even though most apps written today
                don’t ever use them, we still support them in React. We have to
                choose between supporting them in React indefinitely or leaving
                some apps behind on an old version of React. Both of these
                options aren’t great.
              </p>
              <p className="pb-3 pr-6">
                So we wanted to provide another option.
              </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&usqp=CAU"></img>
            </div>
            <div className="col-md-3">
              <div className="vertical-menu pl-4">
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React v17.0 Release Candidate: No New Features
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React v16.13.0
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  Building Great User Experiences with Concurrent Mode and
                  Suspense
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  Preparing for the Future with React Prereleases
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  Introducing the New React DevTools
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React v16.9.0 and the Roadmap Update
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  Is React Translated Yet? ¡Sí! Sim! はい！
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React v16.8: The One With Hooks
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React v16.7: No, This Is Not the One With Hooks
                </NavLink>
                <NavLink to="#" activeClassName="active" className="pb-0">
                  React 16.x Roadmap
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
