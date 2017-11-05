import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";
import axios from "axios";

// CSS
import "./Map.css";

// ACTIONS
import { addMarker } from "../../actions/Markers.js";

class Map extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      zoom: 15
    };
  }

  componentWillMount() {
    console.log("token", localStorage.getItem("token"));
    // Get users current position: lat, lng
    axios.get("api/user/helper")
    .then(helpers =>{
      console.log("++++",helpers)
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
    for (let i = 0; i < 3; i++) {
        this.props.addMarker({
          id: "1",
          lat: helpers.data[i].lat,
          lng: helpers.data[i].lng,
          text: helpers.data[i]
        }
      );

      }
        // gets center points for map
        this.setState({
          lat,
          lng
        });
      });
    }
  
  })
  }

  render() {
    const bunchOfMarkers =
      this.props.markers &&
      this.props.markers.map(marker => (
        <Marker
          id={marker.id}
          lat={marker.lat}
          lng={marker.lng}
          text={marker.text}
        />
      ));
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBvd9vz5uOQ_lUxKULh3_L1RfP1x8T2gL0",
            language: "en"
          }}
          center={[this.state.lat, this.state.lng]}
          defaultZoom={this.state.zoom}
        >
          {bunchOfMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    markers: state.markers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMarker: marker => {
      dispatch(addMarker(marker));
    }
  };
};

const ConnectedMap = connect(mapStateToProps, mapDispatchToProps)(Map);

export default ConnectedMap;
