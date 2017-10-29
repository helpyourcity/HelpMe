import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// REDUCERS
import markers from './markers.js';

const reducers = combineReducers({
  markers
});

export default reducers;