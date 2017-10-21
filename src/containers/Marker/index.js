import React, { PropTypes, Component } from 'react';
import ReactToolTip from 'react-tooltip';
import { markerStyle, markerStyleHover} from './marker_styles.js';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;

    return (
      <div>
        <div data-tip data-for="marker" style={style}></div>
        <ReactToolTip id="marker" effect="solid">
          <span>ur location</span>
        </ReactToolTip>
      </div>
    );
  }
}

// later: need to validate inputs either in constructor or render

export default Marker;