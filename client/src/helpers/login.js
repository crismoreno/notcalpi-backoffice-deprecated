import { loginSuccess } from '../actions/users';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function loginUser(body, callback) {
  return () => {
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
        // localStorage.setItem('user', JSON.stringify(response.data.token));
        console.log('Loged in', response);
        callback(null, 'successfully logged in');
      })
      .catch(function (err) {
        // callback(err, null);
        console.log(err);
      });
  };
}

export default loginUser;
