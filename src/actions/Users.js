import qs from "querystring";
import axios from "axios";

// EXPORTS
export const CREATE_USER = "CREATE_USER";
export const LOCATION = "LOCATION";
export const AUTH_USER = "AUTH_USER";
export const UNAUTH_USER = "UNAUTH_USER";

// ACTIONS

export const signinUser = user => {
  console.log("SIGN IN USER", user);
  return dispatch => {
    axios
      .post("/api/user/signin", user)
      .then(token => {
        console.log("User data coming in from the actions", token.data.token);
        dispatch({
          type: AUTH_USER,
          users: token.data.token
        });
        localStorage.setItem("token", token.data.token);
        console.log("my storage", localStorage);
      })
      .catch(err => {
        console.log("WRONG PASSWORD OR USER");
        dispatch({
          type: UNAUTH_USER
        });
      });
  };
};

export const addUser = user => {
  console.log("my user", user);
  return dispatch => {
    console.log("DISPATCH", dispatch);
    axios.post("/api/user/new", user).then(users_id => {
      console.log("User data coming in from the actions", users_id);
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
