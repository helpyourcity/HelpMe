import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ConnectedSignUp from ".././containers/SignUp/index";
import ConnectedUserLocation from ".././containers/SignUp/location";
import Locations from "";

const ReactRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Logout</Link>
        </li>
        <Link to="/">Help Notification</Link>
      </ul>

      <br />

      <Route exact path="/" component={ConnectedSignUp} />
      <Route path="/location/map" component={ConnectedUserLocation} />
    </div>
  </Router>
);

export default ReactRouter;
