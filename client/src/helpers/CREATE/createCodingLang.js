import { fetchCodingLangs } from '../GET/getCategories';
import { authHeader } from '../authHeader';
import axios from 'axios';
const url = '/api';
import qs from 'qs';

function createCodingLang(body, callback) {
  return (dispatch) => {
    const { codinglangtitle, codinglangorderby } = body;
    axios({
      method: 'post',
      url: `${url}/createcodinglang`,
      data: qs.stringify({
        name: codinglangtitle,
        priority: codinglangorderby,
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
