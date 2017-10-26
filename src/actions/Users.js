import qs from "querystring";
import axios from "axios";
var jwtDecode = require("jwt-decode"); //import jwtDecode from 'jwt-decode'; ??

// EXPORTS
export const CREATE_USER = "CREATE_USER";
export const LOCATION = "LOCATION";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const FETCH_USER = "FETCH_USER";

// ACTIONS
export const signinUser = user => {
  console.log("SIGN IN USER", user);
  return dispatch => {
    axios
      .post("/api/user/signin", user)
      .then(token => {
        console.log(
          "User data coming in from the actions",
          jwtDecode(token.data.token) //this is how we access our token
        );
        dispatch({
          type: AUTH_USER,
          authenticated: true
        });
        localStorage.setItem("token", token.data.token);
        console.log("my storage", localStorage);
        // be routed to home page
      })
      .catch(() => {
        console.log("WRONG PASSWORD OR USER");
        dispatch(authError("Bad Error Info"));
      });
  };
};

export const signoutUser = user => {
  localStorage.removeItem("token");
  console.log("removoce storage", localStorage);
  return {
    type: UNAUTH_USER
  };
};

// create new user in db
export const addUser = (user) => {
  return (dispatch) => {
    axios.post("/api/user/new", user)
      .then((users_id) => {
        dispatch({
          type: CREATE_USER,
          users: users_id.data
        });
    });
  };
};

//USER_CREATED
export const userLocation = location => {
  console.log("testing userLocation: ", location);
  return dispatch => {
    axios.post("/api/location/map", location).then(userlocation => {
      console.log("test location thenable: ", userlocation);
      dispatch({
        type: LOCATION,
        userLocation: location.data
      });
    });
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

// thinking about using but not in use, FETCH_USER
export function fetchUser() {
  return dispatch => {
    axios
      .get("api/user/", {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log("resssponse", response);
        dispatch({
          type: FETCH_USER,
          payload: response.data.message
        });
      });
  };
}
