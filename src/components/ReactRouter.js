import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import Homepage from '../containers/Homepage';

const ReactRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />

        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/new" component={SignUp} />
      </div>
    </Router>
  );
};

export default ReactRouter;