import { fetchUsersSuccess } from '../actions/users';

const url = '/api';

function fetchUsers() {
  return (dispatch) => {
    return fetch(`${url}/users`).then((response) => {
      response.json().then((data) => {
        dispatch(fetchUsersSuccess(data));
        return data;
      });
    });
  };
}

export default fetchUsers;
