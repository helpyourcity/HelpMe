import React from "react";
import {
<<<<<<< HEAD
	BrowserRouter as Router,
	Route,
	Link,
	IndexRoute
=======
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute

>>>>>>> 4ad9fd8988ee512aec801e1454bf078e0a18fce5
} from "react-router-dom";

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


// import ConnectedSignUp from '.././containers/SignUp/index'
import SignUp from ".././containers/SignUp/index";
import ConnectedMap from ".././containers/Map/index";
import Header from "../containers/Header";
import UserLocation from "../containers/SignUp/location";

const ReactRouter = () => (
<<<<<<< HEAD
	<Router>
		<div>
			<Route exact path="/" component={Header} />
			<Route exact path="/" component={ConnectedMap} />
			<Route path="/create/account" component={SignUp} />
			<Route path="/create/address" component={UserLocation} />
		</div>
	</Router>
=======
  <Router>
    <div>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={ConnectedMap} />
      <Route path="/create/account" component={SignUp} />
      <Route path="/create/address" component={UserLocation} />
      <Route exact path ="/" component = {Header}/>
      <Route exact path = "/" component = {ConnectedMap}/>
      <Route path = "/create/account" component = {ConnectedUserLocation}/>

    </div>
  </Router>
>>>>>>> 4ad9fd8988ee512aec801e1454bf078e0a18fce5
);

export default ReactRouter;
