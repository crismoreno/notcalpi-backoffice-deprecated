import { fetchCodingLangs } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function updateCodingLang(data, callback) {
  return (dispatch) => {
    const {
      values: { title, priority },
      entityId,
    } = data;
    axios({
      method: 'put',
      url: `${url}/updatecodinglang/${entityId}`,
      data: qs.stringify({
        name: title,
        priority,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchCodingLangs(response.data));
        callback(null, 'Tag was updated successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { updateCodingLang };
