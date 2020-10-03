import fetchUsers from '../GET/getUsers';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createUser(body, callback) {
  return (dispatch) => {
    const { username, password, email } = body;
    axios({
      method: 'post',
      url: `${url}/register`,
      data: qs.stringify({
        username,
        password,
        email,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchUsers());
        callback(null, 'User was created successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { createUser };
