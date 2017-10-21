import React, { Component } from 'react';
import './Footer.css';

import Modal from '../Modal';

class Footer extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      isModalOpen: false
    };

    // functions
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div>
      <footer>
        <button onClick={this.openModal}>Help Requests</button>
        <Modal isModalOpen={this.state.isModalOpen}>
          <h1>BLAH</h1>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        <button>Help Me!</button>
        <button>Your Profile</button>
      </footer>
      </div>
    );
  }
}

export default Footer;