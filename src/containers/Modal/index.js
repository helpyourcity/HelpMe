import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log("modal constructor", this.props);
  }

  render() {
    console.log("render modal", this.props);
    // if modal is open render
    if(this.props.id === this.props.activeModal) {
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
