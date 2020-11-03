import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { loggedIn: true, username: user.username, token: user.token }
  : { loggedIn: false };

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        username: action.payload.loginData.username,
        token: action.payload.loginData.token,
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
};
export default login;
