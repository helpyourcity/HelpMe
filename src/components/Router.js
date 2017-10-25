import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from "react-router-dom";

// import ConnectedSignUp from '.././containers/SignUp/index'
import SignUp from ".././containers/SignUp/index";
import Signin from ".././containers/Signin/index";
import ConnectedMap from ".././containers/Map/index";
import Header from "../containers/Header";
import UserLocation from "../containers/SignUp/location";
import Footer from "../containers/Footer";
import Signout from "../containers/Signout";
import RequireAuth from "./isAuth.js"; // this is so that we can protect routes if we want only authenticated users to go throguh i.e  <Route path="/signout" component={RequireAuth(Signout)}/> for reference see Advanced Redux 113

const ReactRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={ConnectedMap} />
      <Route exact path="/" component={Footer} />
      <Route path="/user/login" component={Signin} />
      <Route path="/create/account" component={SignUp} />
      <Route path="/signout" component={Signout} />
      <Route path="/create/address" component={UserLocation} />
    </div>
  </Router>
);

export default ReactRouter;
