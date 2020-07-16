import { authHeader } from '../authHeader';
import { fetchTags } from '../GET/getCategories';

const url = '/api';

function deleteTag(tagId) {
  return (dispatch) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };
    return fetch(`${url}/deletetag/${tagId}`, requestOptions).then(
      dispatch(fetchTags())
    );
  };
}

export default deleteTag;
