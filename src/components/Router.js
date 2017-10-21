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

const ReactRouter = ()=>(
  <Router> 
    <div>
      <Route exact path ="/" component = {Header}/>
      <Route exact path = "/" component = {ConnectedMap}/>
      <Route path = "/create/account" component = {ConnectedUserLocation}/>
    </div>
  </Router>
)


export default ReactRouter; 