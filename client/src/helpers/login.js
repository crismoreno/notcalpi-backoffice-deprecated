import { loginSuccess } from '../actions/users';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function loginUser(body, callback) {
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
        localStorage.setItem('user', JSON.stringify(response.data.token));
        callback(null, 'successfully logged in');
      })
      .catch(function (err) {
        callback(err, null);
        console.log(response);
      });
  };
}

export default loginUser;
