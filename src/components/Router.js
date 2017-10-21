import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'        
import ConnectedSignUp from '.././containers/SignUp/index'
import ConnectedUserLocation from '.././containers/SignUp/location'
import ConnectedMap from '.././containers/Map/index'
import Header from '../containers/Header'

const ReactRouter = ()=>(   //fdasaf fidsjalkfjaldkj
  <Router> 
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

      <Route exact path ="/" component = {Header}/>
      <Route path = "/create/account" component = {ConnectedUserLocation}/>
    </div>
  </Router>
)


export default ReactRouter; 