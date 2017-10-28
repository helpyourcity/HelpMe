// PACKAGES
import axios from "axios";
import jwtDecode from 'jwt-decode';
import qs from "querystring";

// EXPORTS
export const CREATE_USER = "CREATE_USER";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const FETCH_USER = "FETCH_USER";
export const LOCATION = "LOCATION"; // delete later?

// ACTIONS
export const signInUser = (user) => {
  console.log("BACKEND", user);
  return (dispatch) => {
    axios.post("/api/user/signin", user)
      .then((token) => {
        console.log("TOKEN, RETURNSTATEMENT", token);
        // this is how we access our token
        // jwtDecode(token.data.token);
        dispatch({
          type: AUTH_USER,
          authenticated: true
        });
        console.log("BACKEND TOKEN", token.data.token);
        // put token in local storage
        localStorage.setItem("token", token.data.token);
      })
      .catch((err) => {
        console.log("SIGNIN", err);
        dispatch({
          type: AUTH_ERROR,
          text: 'ERROR: Wrong Password or Username'
        });
      });
  };
};

export const signOutUser = (user) => {
  localStorage.removeItem("token");

  return {
    type: UNAUTH_USER
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios.post("/api/user/new", user)
      .then((users_id) => {
        dispatch({
          type: CREATE_USER
        });
    });
  };
};

// delete later ?
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
// export function fetchUser() {
//   return dispatch => {
//     axios
//       .get("api/user/", {
//         headers: { authorization: localStorage.getItem("token") }
//       })
//       .then(response => {
//         console.log("resssponse", response);
//         dispatch({
//           type: FETCH_USER,
//           payload: response.data.message
//         });
//       });
//   };
// }
