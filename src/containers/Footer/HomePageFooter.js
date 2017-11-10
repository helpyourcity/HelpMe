import React, { Component } from "react";
import "./Footer.css";

import Modal from "../Modal";
import UserProfile from "../UserProfile";
import HelpMe from "../HelpMe";

class Footer extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      activeModal: null
      // click: false
    };

    // functions
    this.setActiveModal = this.setActiveModal.bind(this);
  }

  setActiveModal(e) {
    this.setState({
      activeModal: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="darker-red" />
        <div className="dark-red" />
        <footer className="footer-align" />
      </div>
    );
  }
}

export default Footer;
