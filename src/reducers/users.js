import {
  CREATE_USER,
  AUTH_USER,
  UNAUTH_USER,
<<<<<<< HEAD
  AUTH_ERROR,
  LOCATION,
  FETCH_USER
=======
  AUTH_ERROR
>>>>>>> 7d3768d6988785317c8240b6146526f091da48b4
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
<<<<<<< HEAD
      return {
        state,
        error: action.payload
      };
=======
      console.log("failed to sign in!!!", state);
      return { ...state, error: action.payload };

    case LOCATION:
      console.log("location", action);

      return [...state, action.users];
    default:
      return state;
>>>>>>> 7d3768d6988785317c8240b6146526f091da48b4
  }
};

export default users;
