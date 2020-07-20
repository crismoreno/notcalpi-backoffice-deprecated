import { fetchMadeAts } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createMadeAt(body, callback) {
  return (dispatch) => {
    const { shortname, fullname } = body;
    axios({
      method: 'post',
      url: `${url}/createmadeat`,
      data: qs.stringify({
        short_name: shortname,
        full_name: fullname,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchMadeAts(response.data));
        callback(null, 'Tag was created successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { createMadeAt };
