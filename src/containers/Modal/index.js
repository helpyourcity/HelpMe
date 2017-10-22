import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if modal is open render
    if(this.props.id === parseInt(this.props.activeModal)) {
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
