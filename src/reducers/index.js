import { combineReducers } from 'redux';
import userReducer from './userReducer';
import entriesReducers from './entryReducer';

export default combineReducers({
  user: userReducer,
  entries: entriesReducers
});
