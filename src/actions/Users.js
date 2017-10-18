import querystring from "querystring";
import axios from 'axios';

// EXPORTS
export const ADD_USER  = 'ADD_USER';

// ACTIONS

export const addUser = user => {
  console.log('my user', user)
  return (dispatch) => {
    axios.post("/api/user/new", querystring.stringify(user))
    .then((users) => {
      console.log('User data coming in from the actions', users)
      dispatch({
        type: ADD_USER,
        users: users.data
      })
    })
  }
}

//USER_CREATED 