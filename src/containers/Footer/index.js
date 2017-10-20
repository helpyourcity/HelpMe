import React, { Component } from 'react';

// CSS
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <button>Notifications</button>
        <button>Get help!</button>
        <button>Your Profile</button>
      </footer>
    );
  }
}

export default Footer;