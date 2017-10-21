import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
// REDUCERS
import users from './users.js';

const reducers = combineReducers({
  users
});

export default reducers;