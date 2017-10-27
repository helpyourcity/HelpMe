import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const TopHeader = ({ authenticated, username }) => {
  if(authenticated) {
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <div>Hello, {username}</div>
          <div><Link to="/signout">Logout</Link></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <div><Link to="/user/login">Sign-In</Link></div>
          <div><Link to="/create/account">Sign-Up</Link></div>
        </div>
      </div>
    );
  }
};

export default TopHeader;