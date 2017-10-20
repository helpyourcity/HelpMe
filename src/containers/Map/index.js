import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import './Map.css';

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

        // Add lat, lng states
        this.setState({
          lat,
          lng
        });
      });
    }
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={[0, 0]}
          center={[this.state.lat, this.state.lng]}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;