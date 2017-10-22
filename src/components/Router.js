import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from "react-router-dom";

// import ConnectedSignUp from '.././containers/SignUp/index'
import SignUp from ".././containers/SignUp/index";
import ConnectedMap from ".././containers/Map/index";
import Header from "../containers/Header";
import UserLocation from "../containers/SignUp/location";
import Footer from "../containers/Footer";

const ReactRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={ConnectedMap} />
      <Route exact path="/" component={Footer} />
      <Route path="/create/account" component={SignUp} />
      <Route path="/create/address" component={UserLocation} />
    </div>
  </Router>
);

export default ReactRouter;
