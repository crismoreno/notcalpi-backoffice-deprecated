import { authHeader } from '../authHeader';
import fetchUsers from '../GET/getUsers';

const url = '/api/deleteuser';

function deleteUser(userId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(`${url}/${userId}`, requestOptions).then(
      dispatch(fetchUsers())
    );
  };
}

export default deleteUser;
