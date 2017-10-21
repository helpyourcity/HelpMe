import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() { //Create account href is used for testing, to be deleted
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <a href ="/"> Home </a> / 
          <a href="/user/login"> Login </a> / 
          <a href="/create/account"> Create Account </a> / 
          <a href="/"> Logout</a> 
        </div>
      </div>
    );
  }
}

export default Header;