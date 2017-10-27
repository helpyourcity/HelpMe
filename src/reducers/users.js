import {
  CREATE_USER,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  LOCATION,
  FETCH_USER
} from "../actions/Users.js";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return state;

    case AUTH_USER:
      return {
        state,
        authenticated: true
      };

    case UNAUTH_USER:
      return {
        state,
        authenticated: false
      };

    case AUTH_ERROR:
      return {
        state,
        error: action.payload
      };
  }
};

export default users;
