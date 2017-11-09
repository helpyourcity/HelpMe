import { ADD_MARKER, ADD_MARKERS } from "../actions/Markers.js";

const initialState = [];

const markers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKER:
      let markers = [...state, action.marker];
      return markers;

    default:
      return state;
  }
};

export default markers;
