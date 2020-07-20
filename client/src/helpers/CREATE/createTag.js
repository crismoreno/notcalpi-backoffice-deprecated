import { fetchTags } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createTag(body, callback) {
  return (dispatch) => {
    const { title } = body;
    axios({
      method: 'post',
      url: `${url}/createtag`,
      data: qs.stringify({
        name: title,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchTags(response.data));
        callback(null, 'Tag was created successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { createTag };
