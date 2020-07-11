import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actionTypes';
//FETCH USERS
export const fetchUsersBegin = () => ({
  type: FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

//LOGIN USER
export const loginBegin = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (loginBegin) => ({
  type: LOGIN_SUCCESS,
  payload: { login },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
