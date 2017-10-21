import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
// REDUCERS
import users from './users.js';
import markers from './markers.js';

const reducers = combineReducers({
  users,
  markers
});

export default reducers;