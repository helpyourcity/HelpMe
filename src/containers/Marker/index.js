import React, { Component } from 'react';
import ReactToolTip from 'react-tooltip';
import { markerStyle, markerStyleHover} from './marker_styles.js';

class Marker extends Component {
  render() {
    console.log('TOOL TIP TEXTS', this.props)
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return (
      <div>
        <div data-tip data-for='marker' style={style}></div>
        <ReactToolTip id={this.props.id} effect="solid">
          {this.props.text}
        </ReactToolTip>
      </div>
    );
  }
}

// later: need to validate inputs either in constructor or render

export default Marker;