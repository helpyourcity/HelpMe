// EXPORTS
import axios from "axios";
export const ADD_MARKER = "ADD_MARKER";
export const ADD_MARKERS = "ADD_MARKERS";
// ACTIONS
export const addMarker = marker => {
  return dispatch => {
    axios.get("/api/user/helper").then(users => {
      console.log("DATA", users.data);
      users.data.forEach(pin => {
        console.log("PIN", pin);
        dispatch({
          type: ADD_MARKER,
          marker: {
            id: pin.id,
            lat: pin.lat,
            lng: pin.lng,
            text: pin.first_name
          }
        });
      });
    });
  };
};
