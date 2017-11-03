import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  render() {
    // if modal is open render
    if(this.props.id === parseInt(this.props.activeModal, 10)) {
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
