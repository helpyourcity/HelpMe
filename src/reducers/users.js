import { ADD_USER } from '../actions/Users.js';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
    console.log("action time!!!",action)
      return [

        ...action.users
      ]
    default:
      return state;
  }
};

export default users;

