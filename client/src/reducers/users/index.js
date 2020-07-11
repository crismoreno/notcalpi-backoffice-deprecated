import { combineReducers } from 'redux';
import users from './users';
import login from './login';

export default combineReducers({
  users,
  login,
});
