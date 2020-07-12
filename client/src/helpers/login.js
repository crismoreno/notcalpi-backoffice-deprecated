import { loginSuccess, logout } from '../actions/users';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function loginUser(body, callback) {
  return (dispatch) => {
    const { email, password } = body;
    axios({
      method: 'post',
      url: `${url}/login`,
      data: qs.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(function (response) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: response.data.token,
            username: response.data.username,
          })
        );
        dispatch(loginSuccess(response.data));
        callback(null, 'successfully logged in');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

function logoutUser() {
  localStorage.removeItem('user');
  // return (dispatch) => {
  //   // remove user from local storage to log user out
  //   // dispatch(logout());
  // };
}

export { loginUser, logoutUser };
