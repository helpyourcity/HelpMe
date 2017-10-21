import React, { PropTypes, Component } from 'react';
import ReactToolTip from 'react-tooltip';
import { markerStyle, markerStyleHover} from './marker_styles.js';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    console.log(this.props);
    return (
      <div>
        <div data-tip data-for="marker" style={style}>
        <ReactToolTip id="marker" effect="solid">
          {this.props.text}
        </ReactToolTip>
        </div>
      </div>
    );
  }
}

// later: need to validate inputs either in constructor or render

export default Marker;