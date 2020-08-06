import { fetchCodingLangs } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createCodingLang(body, callback) {
  return (dispatch) => {
    const { title, orderby } = body;
    axios({
      method: 'post',
      url: `${url}/createcodinglang`,
      data: qs.stringify({
        name: title,
        priority: orderby,
      }),
      headers: authHeader(),
    })
      .then(function (response) {
        dispatch(fetchCodingLangs(response.data));
        callback(null, 'Tag was created successfully');
      })
      .catch(function (err) {
        callback(err, null);
      });
  };
}

export { createCodingLang };
