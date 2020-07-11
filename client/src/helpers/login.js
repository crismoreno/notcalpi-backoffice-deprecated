import { loginSuccess } from '../actions/users';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function loginUser(body) {
  return (dispatch) => {
    const { username, password } = body;
    axios({
      method: 'post',
      url: `${url}/login`,
      data: qs.stringify({
        name: username,
        password,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(function (response) {
        console.log(response.data.token, response);
        // dispatch(loginSuccess(response.data.token));
      })
      .then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data.token));
      })
      .catch(function (response) {
        console.log(response);
      });
  };
}

export default loginUser;
