import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from "react-router-dom";

import ConnectedSignUp from '../containers/SignUp';
import ConnectedSignIn from '../containers/SignIn';
import Header from '../containers/Header'; // may need to change to connectedheader
import Footer from '../containers/Footer'; // may need to change to connectedfooter
import ConnectedMap from '../containers/Map';

const ReactRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={ConnectedMap} />
        <Route exact path="/" component={Footer} />

        <Route path="/user/signin" component={ConnectedSignIn} />
        <Route path="/users/new" component={ConnectedSignUp} />
      </div>
    </Router>
  );
};

export default ReactRouter;