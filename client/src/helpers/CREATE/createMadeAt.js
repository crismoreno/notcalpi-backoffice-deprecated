import { fetchMadeAts } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createMadeAt(body, callback) {
  console.log(body);
  return (dispatch) => {
    const { madeathortname, madeatfullname } = body;
    axios({
      method: 'post',
      url: `${url}/createmadeat`,
      data: qs.stringify({
        short_name: madeathortname,
        full_name: madeatfullname,
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
