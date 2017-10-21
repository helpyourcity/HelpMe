import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <nav className=" navbar navbar-light">
     <ul className="nav navbar-nav">
     <li className="nav-item">
     Sign In
     </li>
     </ul>
     </nav>
    );
  }
}

export default Header;