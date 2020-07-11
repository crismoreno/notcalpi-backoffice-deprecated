import { fetchUsersSuccess } from '../actions/users';
import { authHeader } from './authHeader';

const url = '/api/users';

function fetchUsers() {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return fetch(url, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(fetchUsersSuccess(data));
        console.log(data, 'data');
        return data;
      });
    });
  };
}

export default fetchUsers;
