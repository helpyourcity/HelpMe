// EXPORTS
export const ADD_MARKER = 'ADD_MARKER';

// ACTIONS
export const addMarker = (marker) => {
  console.log("ADDMARKER", marker);
  return {
    type: ADD_MARKER,
    marker: {lat: marker.lat, lng: marker.lng }
  };
};