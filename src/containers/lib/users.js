// PACKAGES
import axios from 'axios';

// FUNCTIONS
export const signInUser = (user) => {
  return axios.post("/api/user/signin", user)
    .then((user) => {
      // put token and users first name in local storage
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("username", user.data.first_name);
    })
    .catch((err) => {
      console.log("SIGN-IN ERROR:", err);
    });
};

export const signOutUser = () => {
  // remove both items from local storage
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};

export const createNewUser = (user) => {
  return axios.post("/api/user/new", user)
    .then(() => {
      console.log("USER WAS SUCCESSFULLY CREATED");
    })
    .catch((err) => {
      console.log("CREATE USER ERROR", err);
    });
};