import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { markerStyle, markerStyleHover} from './marker_styles.js';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;

    return (
      <div style={style}></div>
    );
  }
}

// later: need to validate inputs either in constructor or render

export default Marker;