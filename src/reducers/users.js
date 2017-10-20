import { CREATE_USER, LOCATION } from '../actions/Users.js';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type) {

    case CREATE_USER:
    console.log("action time!!!",action._id)
      return [
        ...action.users, action.id
      ];

      case LOCATION:
      console.log("location", action)
        return [
          ...state, action.users
        ];
        default:
        return state;
  }
};

export default users;

