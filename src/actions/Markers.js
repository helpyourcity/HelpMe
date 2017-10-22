// EXPORTS
export const ADD_MARKER = 'ADD_MARKER';

// ACTIONS
export const addMarker = (marker) => {
  return {
    type: ADD_MARKER,
    marker: {
      id: marker.id,
      lat: marker.lat,
      lng: marker.lng,
      text: marker.text
    }
  };
};