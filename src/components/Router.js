import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom';  

// import ConnectedSignUp from '.././containers/SignUp/index'
import Signin from '../containers/Signin';
import ConnectedSignUp from '.././containers/SignUp/index';
import ConnectedMap from '.././containers/Map/index';
import Header from '../containers/Header';

const ReactRouter = ()=>(   //fdasaf fidsjalkfjaldkj
  <Router > 
    <div>
      <ul>   
        <li>

          <Link to="/create/account">Create Account</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/location/map"></Link>
      </ul>
      <br/>

      <Route exact path ="/" component = {Signin}/>
      <Route path = "/create/account" component = {ConnectedSignUp}/>
    </div>
  </Router>
)


export default ReactRouter; 