import { fetchMadeAts } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function updateMadeAt(data, callback) {
  return (dispatch) => {
    const {
      values: { shortname, fullname },
      entityId,
    } = data;
    axios({
      method: 'put',
      url: `${url}/updatemadeat/${entityId}`,
      data: qs.stringify({
        short_name: shortname,
        full_name: fullname,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchMadeAts(response.data));
        callback(null, 'Tag was updated successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { updateMadeAt };
