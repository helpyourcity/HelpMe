import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">Help Me!</div>
        <div className="header-nav">
          <a href="#">Login</a> /
          <a href="#">Logout</a>
        </div>
      </div>
    );
  }
}

export default Header;