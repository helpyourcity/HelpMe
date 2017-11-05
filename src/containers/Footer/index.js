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
      activeModal: null,
      click: false
    };

    // functions
    this.setActiveModal = this.setActiveModal.bind(this);
  }

  setActiveModal(e) {
    this.setState({
      activeModal: e.target.value
    });
  }

  handleClick() {
    if (!this.state.clickIgnore) {
      window.addEventListener("click", this.handleOutsideClick, false);
    } else {
      window.removeEventListener("click", this.handleClick, false);
    }
    this.setState(prevState => ({
      clickIgnore: !prevState.clickIgnore
    }));
  }

  handleOutsideClick(e) {
    if (this.setActiveModal.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <footer>
        <button value={1} onClick={this.setActiveModal}>
          Help Requests
        </button>
        <button value={2} onClick={this.setActiveModal}>
          Help Me!
        </button>
        <button value={3} onClick={this.setActiveModal}>
          Your Profile
        </button>

        <Modal id={1} activeModal={this.state.activeModal}>
          <h1>Modal #1</h1>
          <button value={null} onClick={this.setActiveModal}>
            Close
          </button>
        </Modal>
        <Modal id={2} activeModal={this.state.activeModal}>
          <HelpMe />
          <button value={null} onClick={this.setActiveModal}>
            Close
          </button>
        </Modal>
        <Modal id={3} activeModal={this.state.activeModal}>
          <UserProfile />
          <button value={null} onClick={this.setActiveModal}>
            Close
          </button>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
