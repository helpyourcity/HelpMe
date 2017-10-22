import {
  CREATE_USER,
  LOCATION,
  AUTH_USER,
  UNAUTH_USER
} from "../actions/Users.js";

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log("action time!!!", action._id);
      return [...action.users, action.id];

    case AUTH_USER:
      console.log("user sign in reducer time!!!", action.users);
      return { ...state, authenticated: true };

    case UNAUTH_USER:
      console.log("failed to sign in!!!");
      return { ...state, authenticated: false };

    case LOCATION:
      console.log("location", action);
      return [...state, action.users];
    default:
      return state;
  }
};

export default users;
