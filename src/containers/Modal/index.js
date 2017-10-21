import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if modal is open render
    if(this.props.isModalOpen) {
      return (
        <div className="backdrop">
          <div className="modal">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
