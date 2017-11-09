import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";

// CSS
import "./Map.css";

// ACTIONS
import { addMarker} from "../../actions/Markers.js";

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("+++ ", position)
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        this.props.addMarker({
          id: "",
          lat: lat,
          lng: lng,
          text: "your location"
        });
        // gets center points for map
        this.setState({
          lat,
          lng
        });
      });
    }
  }

  render() {
    console.log("ZZZ", this.props.markers)
    const bunchOfMarkers =
      this.props.markers &&
      this.props.markers.map(marker => (
        <Marker
          key={marker.lat + marker.lng} //TODO we need to make ids for each marker 
         
          lat={marker.lat}
          lng={marker.lng}
          text={marker.first_name}
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