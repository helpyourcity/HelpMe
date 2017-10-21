import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';

// CSS
import './Map.css';

// ACTIONS
import { addMarker } from '../../actions/Markers.js';

// REDUCER
import reducers from '../../reducers';

// const Marker = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      zoom: 15
    };
  }

  componentWillMount() {
    // Get users current position: lat, lng
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        this.props.addMarker({lat: lat, lng: lng, text: 'your location'});
        this.props.addMarker({lat: 21, lng: -157, text: 'helper'}); // dummy data, delete later
        // gets center points for map
        this.setState({
          lat,
          lng
        });
      });
    }
  }

  render() {
    const bunchOfMarkers = this.props.markers &&
    this.props.markers.map((marker) => (
      <Marker
        lat={marker.lat}
        lng={marker.lng}
        text={marker.text}
      />
    ));
    console.log(this.props.markers);
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={[0, 0]}
          center={[this.state.lat, this.state.lng]}
          defaultZoom={this.state.zoom}
        >
          {bunchOfMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markers: state.markers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMarker: (marker) => {
      dispatch(addMarker(marker))
    }
  }
}

const ConnectedMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default ConnectedMap;