import { fetchUsersSuccess } from '../../actions/users';
import { authHeader } from '../authHeader';
import { clearUsers } from '../../actions/users';

const url = '/api/users';

function fetchUsers() {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    };
    return fetch(url, requestOptions).then((response) => {
      response.json().then((data) => {
        dispatch(clearUsers());
        dispatch(fetchUsersSuccess(data));
        return data;
      });
    });
  };
}

export default fetchUsers;
