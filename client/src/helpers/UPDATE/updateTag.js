import { fetchTags } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function updateTag(data, callback) {
  return (dispatch) => {
    const {
      values: { title },
      entityId,
    } = data;
    axios({
      method: 'put',
      url: `${url}/updatetag/${entityId}`,
      data: qs.stringify({
        name: title,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchTags(response.data));
        callback(null, 'Tag was updated successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { updateTag };
