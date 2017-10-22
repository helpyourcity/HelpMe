import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
// REDUCERS
import users from './users.js';
import markers from './markers.js';
const reducers = combineReducers({
  users,
  markers,
  form
});

export default reducers;