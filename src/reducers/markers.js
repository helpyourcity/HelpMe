import {
  ADD_MARKER
} from '../actions/Markers.js';

const initialState = [];

const markers = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MARKER:
      return [
        ...state,
        action.marker
      ];
    default:
      return state;
  }
};

export default markers;